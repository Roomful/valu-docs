<template>
  <article class="pg-detail">
    <header class="pg-head">
      <div class="pg-crumb">
        <span>{{ group.title }}</span>
        <code>{{ group.id }}</code>
      </div>
      <div class="pg-title-row">
        <div class="pg-title" role="heading" aria-level="2"><code>{{ fn.method }}</code></div>
        <span class="vx-badges">
          <span v-for="b in badges" :key="b.label" class="vx-badge" :class="b.tone" :title="b.title">{{ b.label }}</span>
        </span>
      </div>
    </header>

    <div v-if="fn.description" class="vx-desc pg-desc" v-html="richText(fn.description)"></div>

    <dl v-if="facts.length" class="vx-facts pg-facts">
      <template v-for="f in facts" :key="f.term">
        <dt>{{ f.term }}</dt>
        <dd v-html="f.html"></dd>
      </template>
    </dl>

    <div class="pg-work">
      <!-- ── request ─────────────────────────────────────────────────── -->
      <section class="pg-pane" aria-label="Parameters">
        <header class="pg-pane-head">
          <span class="pg-pane-title">Parameters</span>
          <span class="pg-seg" role="group" aria-label="Edit as">
            <button type="button" :class="{active: state.mode === 'form'}" :aria-pressed="state.mode === 'form'" @click="toForm">Form</button>
            <button type="button" :class="{active: state.mode === 'json'}" :aria-pressed="state.mode === 'json'" @click="toJson">JSON</button>
          </span>
        </header>

        <div v-if="state.mode === 'form'" class="pg-fields">
          <p v-if="!params.length" class="vx-muted pg-none">This function takes no parameters.</p>
          <div v-for="p in params" :key="p.name" class="pg-field" :class="{invalid: built.fieldErrors[p.name]}">
            <label class="pg-field-label" :for="fieldId(p)">
              <code>{{ p.name }}</code>
              <span class="pg-type">{{ p.type }}</span>
              <span v-if="p.required" class="pg-req">required</span>
            </label>

            <select v-if="kindOf(p) === 'select'" :id="fieldId(p)" v-model="state.values[p.name]" class="pg-input">
              <option value="">{{ p.required ? 'Choose…' : '— not set —' }}</option>
              <option v-for="o in p.options" :key="o.value" :value="o.value">{{ o.label === o.value ? o.value : `${o.label} (${o.value})` }}</option>
            </select>
            <label v-else-if="kindOf(p) === 'boolean' && p.required" class="pg-check">
              <input :id="fieldId(p)" v-model="state.values[p.name]" type="checkbox" />
              <span>{{ state.values[p.name] ? 'true' : 'false' }}</span>
            </label>
            <select v-else-if="kindOf(p) === 'boolean'" :id="fieldId(p)" v-model="state.values[p.name]" class="pg-input">
              <option value="">— not set —</option>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            <input
              v-else-if="kindOf(p) === 'number'"
              :id="fieldId(p)"
              v-model="state.values[p.name]"
              class="pg-input"
              type="number"
              inputmode="decimal"
            />
            <textarea
              v-else-if="kindOf(p) === 'json'"
              :id="fieldId(p)"
              v-model="state.values[p.name]"
              class="pg-input pg-json-field"
              rows="3"
              spellcheck="false"
              :placeholder="p.type.endsWith('[]') || p.type === 'array' ? '[ ]' : '{ }'"
            ></textarea>
            <div v-else-if="kindOf(p) === 'file'" class="pg-input pg-input-off">A FileList cannot be sent from here.</div>
            <input v-else :id="fieldId(p)" v-model="state.values[p.name]" class="pg-input" type="text" spellcheck="false" />

            <span v-if="built.fieldErrors[p.name]" class="pg-field-error">{{ built.fieldErrors[p.name] }}</span>
            <div v-if="p.description" class="pg-help">
              <span v-if="!expanded[p.name] && isLong(p.description)" v-html="inlineMd(firstSentence(p.description, 140))"></span>
              <span v-else v-html="inlineMd(p.description)"></span>
              <button
                v-if="isLong(p.description)"
                type="button"
                class="vx-link-button"
                @click="expanded[p.name] = !expanded[p.name]"
              >{{ expanded[p.name] ? 'Less' : 'More' }}</button>
            </div>
          </div>
          <p v-if="extraKeys.length" class="vx-muted pg-none">Also sent from the JSON: <code v-for="k in extraKeys" :key="k">{{ k }}</code></p>
        </div>

        <div v-else class="pg-fields">
          <textarea
            v-model="state.jsonText"
            class="pg-input pg-json"
            :rows="Math.min(18, Math.max(6, state.jsonText.split('\n').length + 1))"
            spellcheck="false"
            aria-label="Parameters as JSON"
          ></textarea>
          <p v-if="built.error" class="pg-field-error">{{ built.error }}</p>
        </div>

        <div v-if="state.confirming" class="vx-confirm" role="alert">
          <span>
            <template v-if="built.missing.length">Missing {{ built.missing.join(', ') }}. </template>
            <template v-if="writes"><strong>{{ fn.call }}</strong> changes data in your account. </template>
            Run it?
          </span>
          <button type="button" class="vx-button danger" @click="run(true)">Run it</button>
          <button type="button" class="vx-button" @click="state.confirming = false">Cancel</button>
        </div>
        <div v-else class="pg-actions">
          <button
            type="button"
            class="vx-button brand"
            :disabled="!connected || !built.ok || state.running"
            :title="connected ? '' : 'Runs only inside Valu Social'"
            @click="run(false)"
          >{{ state.running ? 'Running…' : 'Run' }}</button>
          <button v-if="state.running" type="button" class="vx-button" @click="stop">Stop waiting</button>
          <button v-else type="button" class="vx-link-button" @click="reset">Reset</button>
        </div>
      </section>

      <!-- ── response ────────────────────────────────────────────────── -->
      <section class="pg-pane pg-response" aria-label="Response">
        <header class="pg-pane-head">
          <span class="pg-pane-title">Response</span>
          <template v-if="shownRun">
            <span class="vx-badge" :class="shownRun.ok ? 'green' : 'red'">{{ shownRun.ok ? 'OK' : 'Error' }}</span>
            <span class="vx-muted">{{ shownRun.ms }} ms · {{ clockTime(shownRun.at) }}</span>
            <button type="button" class="vx-link-button pg-copy" @click="copy(shownRun.text, 'result')">
              {{ copied === 'result' ? 'Copied' : 'Copy' }}
            </button>
          </template>
        </header>

        <div v-if="state.running" class="pg-waiting">
          <span class="vx-dot" aria-hidden="true"></span>
          Waiting for Valu Social… {{ elapsed }}s<template v-if="elapsed >= 3"> — it may be waiting for you there</template>
        </div>
        <pre v-if="shownRun" class="pg-out" :class="{err: !shownRun.ok}"><code>{{ shownRun.text }}</code></pre>
        <p v-else-if="!state.running" class="vx-muted pg-empty">
          {{ connected ? 'Run the function to see what comes back.' : framed ? 'Waiting for Valu Social to connect…' : 'Runs only inside Valu Social.' }}
        </p>

        <div v-if="state.runs.length > 1" class="pg-history" aria-label="Earlier runs">
          <button
            v-for="(r, n) in state.runs"
            :key="r.at"
            type="button"
            class="pg-run"
            :class="{active: n === state.shown, err: !r.ok}"
            :title="JSON.stringify(r.params)"
            @click="state.shown = n"
          >{{ r.ok ? '✓' : '✕' }} {{ clockTime(r.at) }}</button>
        </div>
      </section>
    </div>

    <!-- ── code ──────────────────────────────────────────────────────── -->
    <section class="pg-pane pg-code" aria-label="Code">
      <header class="pg-pane-head">
        <span class="pg-pane-title">In your app</span>
        <button type="button" class="vx-link-button pg-copy" @click="copy(currentCode, 'code')">
          {{ copied === 'code' ? 'Copied' : 'Copy' }}
        </button>
      </header>
      <pre class="pg-out"><code>{{ currentCode }}</code></pre>
    </section>
  </article>
</template>

<script setup>
import {computed, onBeforeUnmount, onMounted, reactive, ref} from 'vue';
import {changesData, copyText, escapeHtml, firstSentence, inlineMd, prettyJson, richText} from './format.mjs';
import {call, errorOf, useValu} from './valuClient.mjs';

const props = defineProps({
  group: {type: Object, required: true},
  fn: {type: Object, required: true}, // one function of functions.data.mjs
  state: {type: Object, required: true}, // per-function, owned by the playground
});

const {framed, connected} = useValu();

// ── what it is ───────────────────────────────────────────────────────────

const params = computed(() => [
  ...props.fn.params.required.map(p => ({...p, required: true})),
  ...props.fn.params.optional.map(p => ({...p, required: false})),
]);

const writes = computed(() => changesData(props.fn));

// Where it works, as valu-api's catalogue says (a typed intent's `mode`).
const MODES = {
  'window': {label: 'Opens a window', tone: 'gray', title: 'At the app\'s own address it opens Valu Social in a tab: call it from a click'},
  'embedded-only': {label: 'Inside Valu Social only', tone: 'gray', title: 'At the app\'s own address it is skipped: {data: {skipped: true}}'},
  'embedded-served': {label: 'Inside Valu Social only', tone: 'gray', title: 'At the app\'s own address it answers 501 not_available'},
};

const badges = computed(() => {
  const f = props.fn;
  const list = [];
  if (writes.value) list.push({label: 'Writes', tone: 'amber', title: 'Changes data — Run asks first'});
  if (MODES[f.mode]) list.push(MODES[f.mode]);
  if (f.channel === 'local') list.push({label: 'Runs in the page', tone: 'gray', title: 'valu-api answers it in the app itself; nothing is sent'});
  return list;
});

const codeList = items => items.map(s => `<code>${escapeHtml(s)}</code>`).join(' ');

const facts = computed(() => {
  const f = props.fn;
  const list = [];
  if (f.scopes.length) list.push({term: 'Scope', html: codeList(f.scopes)});
  if (f.returns?.type && f.returns.type !== 'unknown') {
    const what = f.returns.description ? ` — ${inlineMd(f.returns.description)}` : '';
    list.push({term: 'Returns', html: `<code>${escapeHtml(f.returns.type)}</code>${what}`});
  }
  if (f.channel === 'intent' && f.to) {
    const kind = f.target === 'application' ? 'the app' : 'the service';
    list.push({term: 'Sent to', html: `${kind} <code>${escapeHtml(f.to)}</code>, as <code>${escapeHtml(f.action)}</code>`});
  }
  return list;
});

// ── the form ─────────────────────────────────────────────────────────────

const kindOf = p => {
  if (p.options?.length) return 'select';
  if (p.type === 'boolean') return 'boolean';
  if (p.type === 'number') return 'number';
  if (p.type === 'FileList') return 'file';
  if (p.type === 'string') return 'text';
  return 'json';
};

const fieldId = p => `pg-${props.fn.call}-${p.name}`.replace(/[^\w-]/g, '-');
const expanded = reactive({});
const isLong = text => String(text ?? '').replace(/\s+/g, ' ').trim().length > 150;

const extraKeys = computed(() => Object.keys(props.state.extras ?? {}));

/** The params the current editor describes, and what is wrong with them. */
const built = computed(() => {
  const state = props.state;
  if (state.mode === 'json') {
    const text = state.jsonText.trim();
    let value = {};
    if (text) {
      try {
        value = JSON.parse(text);
      } catch (e) {
        return {ok: false, params: {}, fieldErrors: {}, missing: [], error: `Not valid JSON: ${e.message}`};
      }
    }
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return {ok: false, params: {}, fieldErrors: {}, missing: [], error: 'Parameters must be a JSON object.'};
    }
    const missing = params.value.filter(p => p.required && !(p.name in value)).map(p => p.name);
    return {ok: true, params: value, fieldErrors: {}, missing, error: ''};
  }

  const out = {...(state.extras ?? {})};
  const fieldErrors = {};
  const missing = [];
  for (const p of params.value) {
    const raw = state.values[p.name];
    const k = kindOf(p);
    if (k === 'file') continue;
    if (k === 'boolean' && p.required) { out[p.name] = Boolean(raw); continue; }
    if (raw === '' || raw === undefined || raw === null) {
      if (p.required) missing.push(p.name);
      continue;
    }
    if (k === 'boolean') out[p.name] = raw === 'true';
    else if (k === 'number') {
      const n = Number(raw);
      if (Number.isFinite(n)) out[p.name] = n; else fieldErrors[p.name] = 'Not a number';
    } else if (k === 'json') {
      try { out[p.name] = JSON.parse(raw); } catch { fieldErrors[p.name] = 'Not valid JSON'; }
    } else out[p.name] = raw;
  }
  return {ok: !Object.keys(fieldErrors).length, params: out, fieldErrors, missing, error: ''};
});

function toJson() {
  if (props.state.mode === 'json') return;
  props.state.jsonText = JSON.stringify(built.value.params, null, 2);
  props.state.mode = 'json';
}

function toForm() {
  const state = props.state;
  if (state.mode === 'form') return;
  if (!built.value.ok) return; // keep the JSON until it parses
  const value = built.value.params;
  const known = new Set(params.value.map(p => p.name));
  for (const p of params.value) {
    const v = value[p.name];
    const k = kindOf(p);
    if (k === 'boolean' && p.required) state.values[p.name] = Boolean(v);
    else if (v === undefined) state.values[p.name] = '';
    else if (k === 'json') state.values[p.name] = JSON.stringify(v);
    else state.values[p.name] = String(v);
  }
  state.extras = Object.fromEntries(Object.entries(value).filter(([k]) => !known.has(k)));
  state.mode = 'form';
}

// ── running ──────────────────────────────────────────────────────────────

const now = ref(Date.now());
let clock = null;
onMounted(() => { clock = setInterval(() => { now.value = Date.now(); }, 500); });
onBeforeUnmount(() => clearInterval(clock));

const elapsed = computed(() => Math.max(0, Math.round((now.value - props.state.startedAt) / 1000)));
const shownRun = computed(() => props.state.runs[props.state.shown] ?? null);
const clockTime = at => new Date(at).toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit', second: '2-digit'});

function stop() {
  props.state.cancel?.();
}

function reset() {
  const fresh = props.state.createValues();
  Object.assign(props.state, {values: fresh, extras: {}, jsonText: JSON.stringify({}, null, 2), mode: 'form', confirming: false});
}

// The run writes into `state`, not into this component: switching to another
// function mid-call unmounts the detail, and the reply still lands where it
// belongs.
async function run(confirmed) {
  const state = props.state;
  const b = built.value;
  if (!b.ok || state.running) return;
  if ((b.missing.length || writes.value) && !confirmed) {
    state.confirming = true;
    return;
  }
  state.confirming = false;

  // `valu.call(name)` is `valu.<Namespace>.<method>()` by name: the same
  // function, the same envelope. Stop waiting only stops this page waiting.
  let stopped = null;
  const gaveUp = new Promise(resolve => { stopped = resolve; });
  state.cancel = () => stopped({error: {status: true, message: 'Stopped waiting for a reply.'}});
  state.running = true;
  state.startedAt = Date.now();
  const started = performance.now();

  let entry;
  try {
    const reply = await Promise.race([call(props.fn.call, b.params), gaveUp]);
    const error = errorOf(reply);
    entry = {ok: !error, text: prettyJson(reply)};
  } catch (e) {
    entry = {ok: false, text: e?.message ?? String(e)};
  }
  state.runs.unshift({...entry, ms: Math.round(performance.now() - started), at: Date.now(), params: b.params});
  state.runs.splice(10);
  state.shown = 0;
  state.running = false;
  state.cancel = null;
}

// ── code ─────────────────────────────────────────────────────────────────

const currentCode = computed(() => {
  const params = built.value.ok ? built.value.params : {};
  const args = Object.keys(params).length ? JSON.stringify(params, null, 2) : '';
  // `valu` is the object createValuApp() returns (@arkeytyp/valu-api 2).
  return [
    '// The envelope {data} | {error}; it never throws.',
    `const reply = await valu.${props.fn.call}(${args});`,
    '',
    '// Or the payload alone; a failure throws ValuServiceError.',
    `const data = await valu.data.${props.fn.call}(${args});`,
  ].join('\n');
});

const copied = ref('');
async function copy(text, which) {
  if (await copyText(text)) {
    copied.value = which;
    setTimeout(() => { if (copied.value === which) copied.value = ''; }, 1500);
  }
}
</script>
