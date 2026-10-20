<template>
  <article class="pg-detail">
    <header class="pg-head">
      <div class="pg-crumb">
        <span>{{ api.title }}</span>
        <code>{{ api.address }}</code>
      </div>
      <div class="pg-title-row">
        <div class="pg-title pg-op-title" role="heading" aria-level="2">
          <span class="pg-method big" :class="op.method.toLowerCase()">{{ op.method }}</span>
          <code>{{ op.path }}</code>
        </div>
        <span class="vx-badges">
          <span v-if="op.deprecated" class="vx-badge red">Deprecated</span>
          <span v-if="!safe" class="vx-badge amber" title="Changes data — Run asks first">Writes</span>
        </span>
      </div>
    </header>

    <div v-if="op.summary || op.description" class="vx-desc pg-desc">
      <p v-if="op.summary"><strong>{{ op.summary }}</strong></p>
      <div v-if="op.description" v-html="richText(op.description)"></div>
    </div>

    <dl v-if="facts.length" class="vx-facts pg-facts">
      <template v-for="f in facts" :key="f.term">
        <dt>{{ f.term }}</dt>
        <dd v-html="f.html"></dd>
      </template>
    </dl>

    <div class="pg-work">
      <!-- ── request ───────────────────────────────────────────────────── -->
      <section class="pg-pane" aria-label="Request">
        <header class="pg-pane-head">
          <span class="pg-pane-title">Request</span>
        </header>

        <div class="pg-fields">
          <p v-if="!op.params.length && !op.body" class="vx-muted pg-none">No parameters and no body.</p>

          <template v-for="section in paramSections" :key="section.in">
            <div class="pg-section-label">{{ section.label }}</div>
            <div v-for="p in section.params" :key="p.name" class="pg-field">
              <label class="pg-field-label" :for="fieldId(p)">
                <code>{{ p.name }}</code>
                <span class="pg-type">{{ p.type }}</span>
                <span v-if="p.required" class="pg-req">required</span>
              </label>
              <select v-if="p.kind === 'enum'" :id="fieldId(p)" v-model="state.values[valueKey(p)]" class="pg-input">
                <option value="">{{ p.required ? 'Choose…' : '— not set —' }}</option>
                <option v-for="o in p.options" :key="o" :value="o">{{ o }}</option>
              </select>
              <select v-else-if="p.kind === 'boolean'" :id="fieldId(p)" v-model="state.values[valueKey(p)]" class="pg-input">
                <option value="">— not set —</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
              <input
                v-else
                :id="fieldId(p)"
                v-model="state.values[valueKey(p)]"
                class="pg-input"
                :type="p.kind === 'number' ? 'number' : 'text'"
                spellcheck="false"
                :placeholder="p.example !== undefined ? String(p.example) : ''"
              />
              <div v-if="p.description" class="pg-help" v-html="inlineMd(p.description)"></div>
            </div>
          </template>

          <template v-if="op.body">
            <div class="pg-section-label">
              Body <span class="pg-type">{{ op.body.contentType }}</span>
              <span v-if="op.body.required" class="pg-req">required</span>
            </div>
            <div class="pg-field">
              <textarea
                v-model="state.bodyText"
                class="pg-input pg-json"
                :rows="Math.min(18, Math.max(5, state.bodyText.split('\n').length + 1))"
                spellcheck="false"
                aria-label="Request body"
              ></textarea>
              <span v-if="bodyError" class="pg-field-error">{{ bodyError }}</span>
              <div v-if="op.body.description" class="pg-help" v-html="inlineMd(op.body.description)"></div>
            </div>
          </template>
        </div>

        <div v-if="state.confirming" class="vx-confirm" role="alert">
          <span>
            <template v-if="missing.length">Missing {{ missing.join(', ') }}. </template>
            <template v-if="!safe"><strong>{{ op.method }} {{ op.path }}</strong> can change data in {{ api.title }}. </template>
            Send it?
          </span>
          <button type="button" class="vx-button danger" @click="run(true)">Send it</button>
          <button type="button" class="vx-button" @click="state.confirming = false">Cancel</button>
        </div>
        <div v-else class="pg-actions">
          <button
            type="button"
            class="vx-button brand"
            :disabled="!connected || !!bodyError || state.running || !api.gatewayUrl"
            @click="run(false)"
          >{{ state.running ? 'Sending…' : 'Send' }}</button>
          <button v-if="!state.running" type="button" class="vx-link-button" @click="reset">Reset</button>
        </div>
      </section>

      <!-- ── response ──────────────────────────────────────────────────── -->
      <section class="pg-pane pg-response" aria-label="Response">
        <header class="pg-pane-head">
          <span class="pg-pane-title">Response</span>
          <template v-if="shownRun">
            <span class="vx-badge" :class="shownRun.ok ? 'green' : 'red'">{{ shownRun.status ? `${shownRun.status} ${shownRun.statusText}`.trim() : 'Failed' }}</span>
            <span class="vx-muted">{{ shownRun.ms }} ms · {{ clockTime(shownRun.at) }}</span>
            <button type="button" class="vx-link-button pg-copy" @click="copy(shownRun.text, 'result')">
              {{ copied === 'result' ? 'Copied' : 'Copy' }}
            </button>
          </template>
        </header>

        <div v-if="state.running" class="pg-waiting">
          <span class="vx-dot" aria-hidden="true"></span>
          Waiting for {{ api.title }}… {{ elapsed }}s
        </div>
        <pre v-if="shownRun" class="pg-out" :class="{err: !shownRun.ok}"><code>{{ shownRun.text }}</code></pre>
        <p v-else-if="!state.running" class="vx-muted pg-empty">
          {{ connected ? 'Send the request to see what comes back.' : 'Runs only inside Valu Social.' }}
        </p>

        <div v-if="state.runs.length > 1" class="pg-history" aria-label="Earlier requests">
          <button
            v-for="(r, n) in state.runs"
            :key="r.at"
            type="button"
            class="pg-run"
            :class="{active: n === state.shown, err: !r.ok}"
            :title="r.url"
            @click="state.shown = n"
          >{{ r.status || '—' }} · {{ clockTime(r.at) }}</button>
        </div>

        <div v-if="op.responses.length" class="pg-documented">
          <div class="pg-section-label">Documented responses</div>
          <dl class="vx-facts">
            <template v-for="r in op.responses" :key="r.status">
              <dt><code>{{ r.status }}</code></dt>
              <dd>
                {{ r.description || '—' }}
                <span v-if="r.schema" class="pg-type"> · {{ schemaLabel(r.schema) }}</span>
              </dd>
            </template>
          </dl>
        </div>
      </section>
    </div>

    <!-- ── code ────────────────────────────────────────────────────────── -->
    <section class="pg-pane pg-code" aria-label="Code">
      <header class="pg-pane-head">
        <span class="pg-seg" role="tablist">
          <button
            v-for="t in codeTabs"
            :key="t.id"
            type="button"
            role="tab"
            :class="{active: codeTab === t.id}"
            :aria-selected="codeTab === t.id"
            @click="codeTab = t.id"
          >{{ t.label }}</button>
        </span>
        <button type="button" class="vx-link-button pg-copy" @click="copy(currentCode, 'code')">
          {{ copied === 'code' ? 'Copied' : 'Copy' }}
        </button>
      </header>
      <pre class="pg-out"><code>{{ currentCode }}</code></pre>
    </section>
  </article>
</template>

<script setup>
import {computed, onBeforeUnmount, onMounted, ref} from 'vue';
import {copyText, escapeHtml, inlineMd, richText} from './format.mjs';
import {isSafeMethod, schemaLabel} from './openapi.mjs';
import {identityToken, useValuBridge} from './valuBridge.mjs';

const props = defineProps({
  api: {type: Object, required: true}, // a Developer.list-application-apis entry
  op: {type: Object, required: true}, // an openapi.mjs operation
  state: {type: Object, required: true}, // per-operation, owned by the playground
  networkId: {type: String, default: ''},
});

const {connected} = useValuBridge();

const safe = computed(() => isSafeMethod(props.op.method));

const codeList = items => items.map(s => `<code>${escapeHtml(s)}</code>`).join(' ');

const facts = computed(() => {
  const list = [];
  if (props.op.operationId) list.push({term: 'Operation', html: `<code>${escapeHtml(props.op.operationId)}</code>`});
  if (props.op.scopes.length) list.push({term: 'Scopes', html: codeList(props.op.scopes)});
  if (props.op.tags.length) list.push({term: 'Tags', html: props.op.tags.map(escapeHtml).join(', ')});
  return list;
});

// ── the request ──────────────────────────────────────────────────────────

const SECTION = {path: 'Path', query: 'Query', header: 'Headers', cookie: 'Cookies'};
const paramSections = computed(() => Object.entries(SECTION)
  .map(([where, label]) => ({in: where, label, params: props.op.params.filter(p => p.in === where)}))
  .filter(s => s.params.length));

const valueKey = p => `${p.in}:${p.name}`;
const fieldId = p => `pg-${props.api.address}-${props.op.id}-${p.in}-${p.name}`.replace(/[^\w-]/g, '-');

const missing = computed(() => props.op.params
  .filter(p => p.required && String(props.state.values[valueKey(p)] ?? '') === '')
  .map(p => p.name));

const bodyError = computed(() => {
  if (!props.op.body || !/json/i.test(props.op.body.contentType)) return '';
  const text = props.state.bodyText.trim();
  if (!text) return props.op.body.required ? 'The body is required.' : '';
  try { JSON.parse(text); return ''; } catch (e) { return `Not valid JSON: ${e.message}`; }
});

const typed = (p, raw) => (p.kind === 'number' && raw !== '' && Number.isFinite(Number(raw)) ? Number(raw) : raw);

/** URL, headers and body exactly as Send will make them. */
const request = computed(() => {
  const values = props.state.values;
  const path = props.op.path.replace(/\{([^}]+)\}/g, (match, name) => {
    const raw = values[`path:${name}`];
    return raw === undefined || raw === '' ? match : encodeURIComponent(raw);
  });
  const query = new URLSearchParams();
  const headers = {};
  for (const p of props.op.params) {
    const raw = values[valueKey(p)];
    if (raw === undefined || raw === '') continue;
    if (p.in === 'query') query.append(p.name, String(typed(p, raw)));
    if (p.in === 'header') headers[p.name] = String(raw);
  }
  const base = String(props.api.gatewayUrl || '').replace(/\/+$/, '');
  const qs = query.toString();
  const url = `${base}${path.startsWith('/') ? path : `/${path}`}${qs ? `?${qs}` : ''}`;
  const hasBody = Boolean(props.op.body) && props.state.bodyText.trim() !== '' && !safe.value;
  return {url, headers, hasBody, body: hasBody ? props.state.bodyText : undefined};
});

// ── sending ──────────────────────────────────────────────────────────────

const now = ref(Date.now());
let clock = null;
onMounted(() => { clock = setInterval(() => { now.value = Date.now(); }, 500); });
onBeforeUnmount(() => clearInterval(clock));

const elapsed = computed(() => Math.max(0, Math.round((now.value - props.state.startedAt) / 1000)));
const shownRun = computed(() => props.state.runs[props.state.shown] ?? null);
const clockTime = at => new Date(at).toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit', second: '2-digit'});

function reset() {
  Object.assign(props.state, props.state.fresh(), {confirming: false});
}

function pretty(text) {
  try { return JSON.stringify(JSON.parse(text), null, 2); } catch { return text; }
}

// The gateway admits a browser call by the page's host; the identity token, when
// there is one, tells the application which user it acts for.
async function run(confirmed) {
  const state = props.state;
  if (bodyError.value || state.running) return;
  if ((missing.value.length || !safe.value) && !confirmed) {
    state.confirming = true;
    return;
  }
  state.confirming = false;

  const req = request.value;
  state.running = true;
  state.startedAt = Date.now();
  const started = performance.now();
  let entry;
  try {
    const token = await identityToken().catch(() => '');
    const headers = {
      ...req.headers,
      ...(props.networkId ? {'x-valu-network': props.networkId} : {}),
      ...(token ? {Authorization: `Bearer ${token}`} : {}),
      ...(req.hasBody ? {'Content-Type': props.op.body.contentType} : {}),
    };
    const res = await fetch(req.url, {method: props.op.method, headers, body: req.body});
    const text = await res.text();
    entry = {ok: res.ok, status: res.status, statusText: res.statusText, text: text ? pretty(text) : '(empty body)'};
  } catch (e) {
    entry = {ok: false, status: 0, statusText: '', text: `The request did not complete: ${e?.message ?? e}`};
  }
  state.runs.unshift({...entry, url: req.url, ms: Math.round(performance.now() - started), at: Date.now()});
  state.runs.splice(10);
  state.shown = 0;
  state.running = false;
}

// ── code ─────────────────────────────────────────────────────────────────

const codeTab = ref('curl');
const codeTabs = [
  {id: 'curl', label: 'curl (App API token)'},
  {id: 'fetch', label: 'fetch (trusted host page)'},
];

const shellQuote = s => `'${String(s).replace(/'/g, `'\\''`)}'`;

const currentCode = computed(() => {
  const req = request.value;
  const method = props.op.method;
  const body = req.hasBody ? req.body.trim() : '';
  if (codeTab.value === 'fetch') {
    const headers = {'x-valu-network': props.networkId || '<network id>', ...req.headers};
    if (body) headers['Content-Type'] = props.op.body.contentType;
    const lines = [
      `const res = await fetch(${JSON.stringify(req.url)}, {`,
      `  method: ${JSON.stringify(method)},`,
      `  headers: ${JSON.stringify(headers, null, 2).replace(/\n/g, '\n  ')},`,
      ...(body ? [`  body: JSON.stringify(${body.replace(/\n/g, '\n  ')}),`] : []),
      '});',
      'const data = await res.json();',
    ];
    return lines.join('\n');
  }
  const parts = [`curl -X ${method} ${shellQuote(req.url)}`, `  -H 'Authorization: Bearer $APP_API_TOKEN'`];
  for (const [k, v] of Object.entries(req.headers)) parts.push(`  -H ${shellQuote(`${k}: ${v}`)}`);
  if (body) {
    let compact = body;
    try { compact = JSON.stringify(JSON.parse(body)); } catch { /* not JSON: send as typed */ }
    parts.push(`  -H ${shellQuote(`Content-Type: ${props.op.body.contentType}`)}`);
    parts.push(`  -d ${shellQuote(compact)}`);
  }
  return parts.join(' \\\n');
});

const copied = ref('');
async function copy(text, which) {
  if (await copyText(text)) {
    copied.value = which;
    setTimeout(() => { if (copied.value === which) copied.value = ''; }, 1500);
  }
}
</script>
