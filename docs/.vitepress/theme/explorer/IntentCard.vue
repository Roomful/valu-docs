<template>
  <article :id="anchor" class="vx-card" :class="{open}">
    <button type="button" class="vx-card-head" :aria-expanded="open" @click="$emit('toggle')">
      <code class="vx-action">{{ intent.action }}</code>
      <span class="vx-card-summary" v-html="summary"></span>
      <span class="vx-badges">
        <span
          v-for="badge in badges"
          :key="badge.label"
          class="vx-badge"
          :class="badge.tone"
          :title="badge.title"
        >{{ badge.label }}</span>
      </span>
      <span class="vx-chevron" aria-hidden="true"></span>
    </button>

    <div v-if="open" class="vx-card-body">
      <div class="vx-desc" v-html="description"></div>

      <table v-if="params.length" class="vx-params">
        <thead>
          <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr v-for="p in params" :key="p.name">
            <td>
              <code>{{ p.name }}</code>
              <span v-if="p.required" class="vx-required" title="Required">required</span>
            </td>
            <td><code class="vx-type">{{ p.type }}</code></td>
            <td>
              <span v-html="inlineMd(p.description)"></span>
              <span v-if="p.options" class="vx-options">
                <code v-for="o in p.options" :key="o.value" :title="o.label">{{ o.value }}</code>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else class="vx-muted">No parameters.</p>

      <dl v-if="facts.length" class="vx-facts">
        <template v-for="f in facts" :key="f.term">
          <dt>{{ f.term }}</dt>
          <dd v-html="f.html"></dd>
        </template>
      </dl>

      <div class="vx-code">
        <div class="vx-code-head">
          <span>{{ kind === 'application' ? 'From an iframe application' : 'From an iframe application (bridge)' }}</span>
          <button type="button" class="vx-link-button" @click="copy(snippet, 'snippet')">
            {{ copied === 'snippet' ? 'Copied' : 'Copy' }}
          </button>
        </div>
        <pre><code>{{ snippet }}</code></pre>
      </div>

      <div v-if="sdkSnippet" class="vx-code">
        <div class="vx-code-head">
          <span>Headless — Valu Guru server, a Node agent ({{ sdkPackage }})</span>
          <button type="button" class="vx-link-button" @click="copy(sdkSnippet, 'sdk')">
            {{ copied === 'sdk' ? 'Copied' : 'Copy' }}
          </button>
        </div>
        <pre><code>{{ sdkSnippet }}</code></pre>
      </div>

      <section v-if="bridge.framed.value" class="vx-try" aria-label="Try it">
        <div class="vx-try-head">
          <span>Try it</span>
          <span class="vx-muted">sent as <code>{{ applicationIdLabel }}</code> through the Valu Social bridge</span>
        </div>

        <textarea
          v-model="paramsText"
          class="vx-editor"
          spellcheck="false"
          :rows="editorRows"
          aria-label="Parameters as JSON"
          @input="confirming = false"
        ></textarea>

        <div v-if="optionalParams.length" class="vx-add">
          <span class="vx-muted">Add</span>
          <button
            v-for="p in optionalParams"
            :key="p.name"
            type="button"
            class="vx-chip small"
            :disabled="!parsed.ok || p.name in (parsed.value || {})"
            @click="addParam(p)"
          >+ {{ p.name }}</button>
        </div>

        <p v-if="!parsed.ok" class="vx-error-text">{{ parsed.error }}</p>
        <p v-if="hasFileList" class="vx-muted">A <code>FileList</code> cannot be sent from here; leave it <code>null</code>.</p>

        <div v-if="confirming" class="vx-confirm" role="alert">
          <span><strong>{{ intent.action }}</strong> changes data in your account. Run it?</span>
          <button type="button" class="vx-button danger" @click="run(true)">Run it</button>
          <button type="button" class="vx-button" @click="confirming = false">Cancel</button>
        </div>

        <div v-else class="vx-try-actions">
          <button
            type="button"
            class="vx-button brand"
            :disabled="!bridge.connected.value || !parsed.ok || running"
            @click="run(false)"
          >{{ running ? 'Running…' : 'Run' }}</button>
          <button v-if="running" type="button" class="vx-button" @click="stop">Stop waiting</button>
          <button v-else type="button" class="vx-link-button" @click="reset">Reset</button>
          <span v-if="running" class="vx-muted">{{ elapsed }}s{{ elapsed >= 3 ? ' — it may be waiting for you in Valu Social' : '' }}</span>
          <span v-else-if="!bridge.connected.value" class="vx-muted">Waiting for Valu Social to connect…</span>
        </div>

        <div v-if="result" class="vx-result" :class="result.ok ? 'ok' : 'err'">
          <div class="vx-result-head">
            <span>{{ result.ok ? 'Result' : 'Error' }}</span>
            <span class="vx-muted">{{ result.ms }} ms</span>
            <button type="button" class="vx-link-button" @click="copy(result.text, 'result')">
              {{ copied === 'result' ? 'Copied' : 'Copy' }}
            </button>
          </div>
          <pre><code>{{ result.text }}</code></pre>
        </div>
      </section>
    </div>
  </article>
</template>

<script setup>
import {computed, onBeforeUnmount, ref} from 'vue';
import {
  camelCase,
  changesData,
  copyText,
  escapeHtml,
  firstSentence,
  inlineMd,
  prettyJson,
  richText,
  sampleParams,
  sampleValue,
} from './format.mjs';
import {callService, replyError, runIntent, useValuBridge} from './valuBridge.mjs';

const props = defineProps({
  kind: {type: String, required: true}, // 'application' | 'service'
  group: {type: Object, required: true}, // {id, title}
  intent: {type: Object, required: true},
  anchor: {type: String, required: true},
  open: {type: Boolean, default: false},
  sdkPackage: {type: String, default: '@arkeytyp/valu-api'},
});
defineEmits(['toggle']);

const bridge = useValuBridge();

const summary = computed(() => inlineMd(firstSentence(props.intent.description)));
const description = computed(() => richText(props.intent.description));

const params = computed(() => [
  ...props.intent.params.required.map(p => ({...p, required: true})),
  ...props.intent.params.optional.map(p => ({...p, required: false})),
]);
const optionalParams = computed(() => props.intent.params.optional);
const hasFileList = computed(() => params.value.some(p => p.type === 'FileList'));

const writes = computed(() => changesData(props.intent));

const badges = computed(() => {
  const i = props.intent;
  const list = [];
  if (props.kind === 'service') {
    if (i.server) {
      list.push({
        label: 'Server',
        tone: 'green',
        title: `Also runs without a browser: ${props.sdkPackage} serves it over the ${i.server.channel} channel`,
      });
    } else if (i.appOnly) {
      list.push({label: 'App only', tone: 'gray', title: 'Only the Valu Social application can serve it — it needs the screen'});
    } else {
      list.push({label: 'Bridge', tone: 'gray', title: `Not in the ${props.sdkPackage} catalogue yet — call it through the bridge`});
    }
  }
  if (writes.value) list.push({label: 'Writes', tone: 'amber', title: 'Changes data — Run asks before sending it'});
  if (i.availability?.includes('ai')) list.push({label: 'AI', tone: 'brand', title: 'Offered to AI agents as a tool'});
  if (i.headless) list.push({label: 'Headless', tone: 'gray', title: 'Works without opening the application'});
  return list;
});

const codeList = items => items.map(s => `<code>${escapeHtml(s)}</code>`).join(' ');

// What serves a server-capable intent (valu-api docs/parity.md, "Channels").
const CHANNELS = {
  roomful: 'the Roomful platform socket',
  valuguru: 'the Valu Guru server\'s data channel',
  'app-state': 'state the running application holds',
  local: 'computed by the SDK, no call',
};

const facts = computed(() => {
  const i = props.intent;
  const list = [];
  if (i.permissions?.length) list.push({term: 'Permissions', html: codeList(i.permissions)});
  if (i.availability?.length) {
    const who = {ai: 'AI agents', developer: 'developers (bridge, Dev Portal)'};
    list.push({term: 'Offered to', html: i.availability.map(a => escapeHtml(who[a] ?? a)).join(', ')});
  }
  if (i.server) {
    const s = i.server;
    list.push({term: 'Channel', html: `<code>${escapeHtml(s.channel)}</code> — ${escapeHtml(CHANNELS[s.channel] ?? '')}`});
    if (s.returns) list.push({term: 'Returns', html: `<code>${escapeHtml(s.returns)}</code>`});
    if (s.scopes?.length) list.push({term: 'Scopes', html: codeList(s.scopes)});
    if (s.serverTool) list.push({term: 'Server tool', html: `<code>${escapeHtml(s.serverTool)}</code> — the name the Valu Guru server gives the model`});
  } else if (i.appOnly) {
    list.push({term: 'Runs', html: 'In the Valu Social application only — it opens a dock, renders a picker or reads the app\'s own state.'});
  }
  return list;
});

// ── Try it ───────────────────────────────────────────────────────────────

const initialText = () => JSON.stringify(sampleParams(props.intent.params), null, 2);
const paramsText = ref(initialText());
const editorRows = computed(() => Math.min(14, Math.max(3, paramsText.value.split('\n').length + 1)));

const parsed = computed(() => {
  const text = paramsText.value.trim();
  if (!text) return {ok: true, value: {}};
  try {
    const value = JSON.parse(text);
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return {ok: false, error: 'Parameters must be a JSON object.'};
    }
    return {ok: true, value};
  } catch (e) {
    return {ok: false, error: `Not valid JSON: ${e.message}`};
  }
});

function addParam(p) {
  if (!parsed.value.ok) return;
  paramsText.value = JSON.stringify({...parsed.value.value, [p.name]: sampleValue(p)}, null, 2);
}

const shownParams = computed(() => (parsed.value.ok ? parsed.value.value : sampleParams(props.intent.params)));

const indentJson = value => JSON.stringify(value, null, 2);

const snippet = computed(() => {
  const target = JSON.stringify(props.group.id);
  const action = JSON.stringify(props.intent.action);
  const args = indentJson(shownParams.value);
  return props.kind === 'application'
    ? `await valuApi.sendIntent(new Intent(${target}, ${action}, ${args}));`
    : `const result = await valuApi.callService(new Intent(${target}, ${action}, ${args}));`;
});

const sdkSnippet = computed(() => {
  if (props.kind !== 'service' || !props.intent.server) return '';
  const args = Object.keys(shownParams.value).length ? indentJson(shownParams.value) : '';
  return `const valu = createValuServices({socket, guru});\n`
    + `const data = await valu.data.${props.group.id}.${camelCase(props.intent.action)}(${args});`;
});

const applicationIdLabel = computed(() => bridge.applicationId.value || 'valu_docs');

const running = ref(false);
const confirming = ref(false);
const result = ref(null);
const elapsed = ref(0);
let cancel = null;
let timer = null;

function stop() {
  cancel?.();
}

function reset() {
  paramsText.value = initialText();
  result.value = null;
  confirming.value = false;
}

async function run(confirmed) {
  if (!parsed.value.ok || running.value) return;
  if (writes.value && !confirmed) {
    confirming.value = true;
    return;
  }
  confirming.value = false;

  const send = props.kind === 'application' ? runIntent : callService;
  const call = send(props.group.id, props.intent.action, parsed.value.value);
  cancel = call.cancel;

  running.value = true;
  result.value = null;
  elapsed.value = 0;
  const started = performance.now();
  timer = setInterval(() => { elapsed.value = Math.round((performance.now() - started) / 1000); }, 1000);

  try {
    const reply = await call.promise;
    const error = replyError(reply);
    result.value = error
      ? {ok: false, text: error, ms: Math.round(performance.now() - started)}
      : {ok: true, text: prettyJson(reply), ms: Math.round(performance.now() - started)};
  } catch (e) {
    result.value = {ok: false, text: e?.message ?? String(e), ms: Math.round(performance.now() - started)};
  } finally {
    clearInterval(timer);
    running.value = false;
    cancel = null;
  }
}

onBeforeUnmount(() => {
  cancel?.();
  clearInterval(timer);
});

const copied = ref('');
async function copy(text, which) {
  if (await copyText(text)) {
    copied.value = which;
    setTimeout(() => { if (copied.value === which) copied.value = ''; }, 1500);
  }
}
</script>
