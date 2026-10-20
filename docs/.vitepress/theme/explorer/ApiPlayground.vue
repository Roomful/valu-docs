<template>
  <div class="pg" :class="{'nav-open': navOpen}">
    <BridgeStatus off-text="Open Valu Docs inside Valu Social to browse the APIs its applications serve." />

    <p v-if="connected && (list.status === 'loading' || list.status === 'idle')" class="vx-muted pg-page-note">Loading the applications that serve an API…</p>
    <p v-else-if="list.status === 'error'" class="vx-error-text pg-page-note">{{ list.error }}</p>
    <p v-else-if="list.status === 'ok' && !list.apis.length" class="vx-muted pg-page-note">
      No application in this network serves a REST API yet, and none of yours declares one.
    </p>

    <div v-if="list.apis.length" class="pg-body">
      <!-- Narrow only (explorer.css): the navigator folds into this picker. -->
      <button type="button" class="pg-nav-toggle" :aria-expanded="navOpen" @click="navOpen = !navOpen">
        <span>{{ toggleLabel }}</span>
        <span class="pg-caret" aria-hidden="true"></span>
      </button>

      <PlaygroundNav
        ref="navEl"
        v-model:query="query"
        v-model:filter="filter"
        label="Applications and their endpoints"
        :placeholder="`Search ${list.apis.length} ${list.apis.length === 1 ? 'API' : 'APIs'}`"
        :groups="navGroups"
        :filters="filters"
        :selected-key="selectedKey"
        :open-ids="openGroups"
        :empty-text="`No endpoint matches “${query}”.`"
        @toggle="g => toggleGroup(g.id)"
        @select="(g, i) => selectKey(i.key)"
      />

      <div class="pg-main">
        <!-- ── one application's API ─────────────────────────────────── -->
        <article v-if="selected?.kind === 'overview'" class="pg-detail">
          <header class="pg-head">
            <div class="pg-crumb"><span>{{ selected.api.source === 'development' ? 'REST API · in development' : 'REST API' }}</span></div>
            <div class="pg-title-row">
              <div class="pg-title pg-app-title" role="heading" aria-level="2">{{ selected.api.title }}</div>
              <span class="vx-badges">
                <span v-if="selected.api.source === 'development'" class="vx-badge amber" :title="stageTitle(selected.api)">{{ stageLabel(selected.api) }}</span>
                <span v-if="!selected.api.routable" class="vx-badge red" title="It declares an API but no address to reach it">Not routable</span>
                <span v-if="selected.api.availability?.includes('ai')" class="vx-badge brand" title="Offered to AI agents">AI</span>
              </span>
            </div>
          </header>

          <div v-if="selected.api.description || docOf(selected.api).description" class="vx-desc pg-desc"
               v-html="richText(docOf(selected.api).description || selected.api.description)"></div>

          <dl class="vx-facts pg-facts">
            <template v-if="selected.api.source === 'development'">
              <dt>Version</dt>
              <dd>{{ selected.api.version ? `v${selected.api.version}` : 'not tagged' }} — {{ selected.api.live ? 'released' : 'not released yet' }}</dd>
            </template>
            <dt>Address</dt>
            <dd><code>{{ selected.api.address }}</code></dd>
            <template v-if="selected.api.gatewayUrl">
              <dt>Gateway</dt>
              <dd><code>{{ selected.api.gatewayUrl }}</code> <CopyButton :text="selected.api.gatewayUrl" /></dd>
            </template>
            <template v-if="docOf(selected.api).title">
              <dt>Document</dt>
              <dd>
                {{ docOf(selected.api).title }}<template v-if="docOf(selected.api).version"> · v{{ docOf(selected.api).version }}</template>
                · <a :href="selected.api.docUrl" target="_blank" rel="noreferrer">openapi.json</a>
              </dd>
            </template>
            <template v-if="selected.api.scopes?.length">
              <dt>Scopes</dt>
              <dd>
                <span v-for="s in selected.api.scopes" :key="scopeName(s)" class="pg-scope">
                  <code>{{ scopeName(s) }}</code><span v-if="s.description" class="vx-muted"> {{ s.description }}</span>
                </span>
              </dd>
            </template>
            <dt>User</dt>
            <dd>{{ USER_CONTEXT[selected.api.userContext] ?? selected.api.userContext }}</dd>
            <template v-if="selected.api.callers?.length">
              <dt>Callers</dt>
              <dd><code v-for="c in selected.api.callers" :key="c">{{ c }}</code></dd>
            </template>
            <template v-if="selected.api.docsUrl">
              <dt>Docs</dt>
              <dd><a :href="selected.api.docsUrl" target="_blank" rel="noreferrer">{{ selected.api.docsUrl }}</a></dd>
            </template>
            <template v-if="selected.api.contact">
              <dt>Contact</dt>
              <dd>{{ selected.api.contact }}</dd>
            </template>
          </dl>
          <p v-if="selected.api.sendNote" class="vx-muted">{{ selected.api.sendNote }}</p>

          <section class="pg-pane pg-endpoints" aria-label="Endpoints">
            <header class="pg-pane-head">
              <span class="pg-pane-title">Endpoints</span>
              <span v-if="docOf(selected.api).status === 'ok'" class="vx-muted">{{ docOf(selected.api).ops.length }}</span>
            </header>
            <p v-if="docOf(selected.api).status === 'loading'" class="vx-muted pg-empty">Reading the OpenAPI document…</p>
            <p v-else-if="docOf(selected.api).status === 'error'" class="vx-error-text pg-empty">{{ docOf(selected.api).error }}</p>
            <p v-else-if="!docOf(selected.api).ops.length" class="vx-muted pg-empty">The document lists no endpoints.</p>
            <ul v-else class="pg-endpoint-list">
              <li v-for="o in docOf(selected.api).ops" :key="o.id">
                <button type="button" class="pg-endpoint" @click="selectKey(opKey(selected.api, o))">
                  <span class="pg-method" :class="o.method.toLowerCase()">{{ o.method }}</span>
                  <code>{{ o.path }}</code>
                  <span class="pg-endpoint-summary">{{ o.summary }}</span>
                </button>
              </li>
            </ul>
          </section>
        </article>

        <!-- ── one endpoint ───────────────────────────────────────────── -->
        <ApiOperationDetail
          v-else-if="selected?.kind === 'op'"
          :key="selectedKey"
          :api="selected.api"
          :op="selected.op"
          :state="stateFor(selectedKey, selected.op)"
          :network-id="list.networkId"
          :stage="selected.api.source === 'development' ? stageLabel(selected.api) : ''"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, defineComponent, h, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch} from 'vue';
import ApiOperationDetail from './ApiOperationDetail.vue';
import BridgeStatus from './BridgeStatus.vue';
import PlaygroundNav from './PlaygroundNav.vue';
import {copyText, matches, richText} from './format.mjs';
import {isSafeMethod, operationsOf, sampleFromSchema} from './openapi.mjs';
import {callService, identityToken, settle, useValuBridge} from './valuBridge.mjs';

const {connected} = useValuBridge();

const USER_CONTEXT = {
  required: 'Every call acts for a signed-in user',
  optional: 'The application decides per endpoint',
  none: 'Calls act for no user',
};
const scopeName = s => (typeof s === 'string' ? s : s?.name ?? '');
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const SECTION = {network: 'In this network', development: 'In development'};

const stageLabel = api => `In development${api.version ? ` · v${api.version}` : ''}${api.live ? '' : ' · draft'}`;
const stageTitle = api => (api.live
  ? 'One of your applications: this is its released version'
  : 'One of your applications: this version is not released yet');

// ── the lists, then each application's document ──────────────────────────

/**
 * One entry of the page. Two sources:
 *  - `network`: published in this network (Developer.list-application-apis).
 *    Read and called through the gateway.
 *  - `development`: an app this user develops or tests, as its newest
 *    API-bearing version (Developer.list-my-application-apis). The gateway
 *    routes RELEASED versions — and, for an app Valu Guru serves for a
 *    workspace, its unreleased declaration too, from a trusted host such as
 *    this one. A hand-authored draft is neither: its document is read from
 *    its own address, as the Portal's REST API tab does, and it cannot be
 *    sent until it is released.
 */
function entry(api, source) {
  const throughGateway = source === 'network' || Boolean(api.workspace) || Boolean(api.live);
  return {
    ...api,
    source,
    key: `${source === 'development' ? 'dev-' : ''}${slug(api.address)}`,
    docUrl: throughGateway ? api.documentUrl : (api.specUrl || api.documentUrl),
    viaGateway: throughGateway,
    canSend: throughGateway,
    sendNote: throughGateway ? ''
      : `The gateway routes released versions only, so this draft cannot be sent from here — release ${api.version ? `v${api.version}` : 'it'} to call it.`,
  };
}

const list = reactive({status: 'idle', error: '', networkId: '', apis: []});
const docs = reactive({});
const emptyDoc = {status: 'idle', ops: [], error: '', title: '', version: '', description: ''};
const docOf = api => docs[api.key] ?? emptyDoc;

async function loadDoc(api) {
  docs[api.key] = {...emptyDoc, status: 'loading'};
  try {
    if (!api.docUrl) throw new Error('It names no OpenAPI document to read.');
    // The identity token goes only to our own gateway; an app's own host gets
    // a plain request — its document is public by definition.
    const token = api.docUrl === api.documentUrl ? await identityToken().catch(() => '') : '';
    let res;
    try {
      res = await fetch(api.docUrl, {headers: token ? {Authorization: `Bearer ${token}`} : {}});
    } catch {
      throw new Error(api.viaGateway
        ? 'The OpenAPI document could not be reached.'
        : 'The app\'s own host did not let this page read its OpenAPI document (a browser cross-origin rule).');
    }
    const text = await res.text();
    let body = null;
    try { body = JSON.parse(text); } catch { /* reported below */ }
    if (!res.ok) throw new Error(`The OpenAPI document could not be read: ${body?.error?.message || `${res.status} ${res.statusText}`}`);
    if (!body?.paths) throw new Error('The OpenAPI document has no paths.');
    docs[api.key] = {
      status: 'ok',
      ops: operationsOf(body),
      error: '',
      title: body.info?.title ?? '',
      version: body.info?.version ?? '',
      description: body.info?.description ?? '',
    };
  } catch (e) {
    docs[api.key] = {...emptyDoc, status: 'error', error: e?.message ?? String(e)};
  }
}

async function load() {
  list.status = 'loading';
  try {
    const [published, mine] = await Promise.all([
      settle(callService('Developer', 'list-application-apis', {}).promise),
      // Newer than the published list: an older build answers nothing, which
      // only means there is no development section yet.
      settle(callService('Developer', 'list-my-application-apis', {}).promise).catch(() => undefined),
    ]);
    // An older Valu Social build has no such intent and answers nothing at all.
    if (published === undefined || published === null) {
      throw new Error('This Valu Social build cannot list application APIs yet (Developer.list-application-apis).');
    }
    if (published.success === false) throw new Error(published.error || 'Valu Social could not list the APIs.');

    const network = (published.apis ?? []).filter(api => api?.address).map(api => entry(api, 'network'));
    // A released app already listed above is the same API: show it once.
    const listed = new Set(network.map(api => api.address));
    const development = (mine?.success === false ? [] : mine?.apis ?? [])
      .filter(api => api?.address && !(api.live && listed.has(api.address)))
      .map(api => entry(api, 'development'));

    list.apis = [...network, ...development];
    list.networkId = published.networkId ?? '';
    list.status = 'ok';
    list.apis.forEach(loadDoc);
    if (!selectFromHash() && list.apis.length) selectKey(list.apis[0].key);
  } catch (e) {
    list.status = 'error';
    list.error = e?.message ?? String(e);
  }
}

watch(connected, isConnected => { if (isConnected && list.status === 'idle') load(); }, {immediate: true});

// ── filter + navigator ───────────────────────────────────────────────────

const query = ref('');
const filter = ref('all');

const FILTERS = [
  {id: 'all', label: 'All endpoints', test: () => true},
  {id: 'reads', label: 'Reads (GET)', test: o => isSafeMethod(o.method)},
  {id: 'writes', label: 'Changes data', test: o => !isSafeMethod(o.method)},
];

const allOps = computed(() => list.apis.flatMap(api => docOf(api).ops));
const filters = computed(() => FILTERS.map(f => ({...f, count: allOps.value.filter(f.test).length})));

const opKey = (api, op) => `${api.key}--${op.id}`;

const navGroups = computed(() => {
  const test = FILTERS.find(f => f.id === filter.value)?.test ?? (() => true);
  return list.apis.map(api => {
    const doc = docOf(api);
    const apiText = [api.title, api.address, api.description].join(' ');
    const ops = doc.ops.filter(o => test(o)
      && matches([apiText, o.method, o.path, o.summary, o.operationId, o.description].join(' '), query.value));
    const apiMatches = matches(apiText, query.value);
    if (query.value.trim() && !apiMatches && !ops.length) return null;
    return {
      id: api.key,
      title: api.title,
      section: SECTION[api.source],
      count: doc.status === 'ok' ? ops.length : doc.status === 'error' ? '–' : '…',
      note: doc.status === 'loading' ? 'Reading its OpenAPI document…' : doc.status === 'error' ? 'Its OpenAPI document could not be read.' : '',
      noteTone: doc.status === 'error' ? 'err' : '',
      items: [
        {key: api.key, label: api.source === 'development' ? stageLabel(api).replace('In development · ', 'Overview · ') : 'Overview', plain: true},
        ...ops.map(o => ({key: opKey(api, o), label: o.path, method: o.method, title: o.summary})),
      ],
    };
  }).filter(Boolean);
});

const openGroups = reactive(new Set());
function toggleGroup(id) {
  if (openGroups.has(id)) openGroups.delete(id);
  else openGroups.add(id);
}

// ── selection ────────────────────────────────────────────────────────────

const selectedKey = ref('');
const navOpen = ref(false);
const navEl = ref(null);

const selected = computed(() => {
  for (const api of list.apis) {
    if (api.key === selectedKey.value) return {kind: 'overview', api};
    for (const op of docOf(api).ops) {
      if (opKey(api, op) === selectedKey.value) return {kind: 'op', api, op};
    }
  }
  return null;
});

const toggleLabel = computed(() => {
  const s = selected.value;
  if (!s) return 'Choose an endpoint';
  return s.kind === 'op' ? `${s.api.title} · ${s.op.method} ${s.op.path}` : `${s.api.title} · Overview`;
});

const owner = key => list.apis.find(a => key === a.key || key.startsWith(`${a.key}--`));

function selectKey(key) {
  selectedKey.value = key;
  const api = owner(key);
  if (api) openGroups.add(api.key);
  navOpen.value = false;
  const url = new URL(window.location.href);
  url.hash = key;
  history.replaceState(history.state, '', url);
  nextTick(() => navEl.value?.reveal());
}

// An endpoint's document may still be loading when the hash names it: keep the
// key, and `selected` resolves once the operations arrive.
function selectFromHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  if (!hash || !owner(hash)) return false;
  selectKey(hash);
  return true;
}

onMounted(() => window.addEventListener('hashchange', selectFromHash));
onBeforeUnmount(() => window.removeEventListener('hashchange', selectFromHash));

// ── per-endpoint state ───────────────────────────────────────────────────

// Kept for the life of the page so moving between endpoints keeps what was
// typed and what came back. A plain Map of reactive entries, never written
// during render.
const states = new Map();

function freshFor(op) {
  const values = {};
  for (const p of op.params) values[`${p.in}:${p.name}`] = '';
  const sample = op.body ? (op.body.example ?? sampleFromSchema(op.body.schema)) : undefined;
  const bodyText = sample === undefined || sample === null ? '' : JSON.stringify(sample, null, 2);
  return {values, bodyText};
}

function stateFor(key, op) {
  let state = states.get(key);
  if (!state) {
    state = reactive({...freshFor(op), runs: [], shown: 0, running: false, startedAt: 0, confirming: false, fresh: () => freshFor(op)});
    states.set(key, state);
  }
  return state;
}

// ── small pieces ─────────────────────────────────────────────────────────

const CopyButton = defineComponent({
  props: {text: String},
  setup(props) {
    const done = ref(false);
    const copy = async () => {
      if (!props.text || !(await copyText(props.text))) return;
      done.value = true;
      setTimeout(() => { done.value = false; }, 1500);
    };
    return () => h('button', {type: 'button', class: 'vx-link-button', onClick: copy}, done.value ? 'Copied' : 'Copy');
  },
});
</script>
