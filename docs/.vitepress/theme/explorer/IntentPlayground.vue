<template>
  <div class="pg" :class="{'nav-open': navOpen}">
    <BridgeStatus />

    <div class="pg-body">
      <!-- Narrow only (explorer.css): the navigator folds into this picker. -->
      <button type="button" class="pg-nav-toggle" :aria-expanded="navOpen" @click="navOpen = !navOpen">
        <span>{{ selected ? `${selected.group.title} · ${selected.intent.action}` : 'Choose an intent' }}</span>
        <span class="pg-caret" aria-hidden="true"></span>
      </button>

      <aside class="pg-nav" :aria-label="`${groupNoun} and their intents`">
        <input
          v-model="query"
          type="search"
          class="pg-search"
          :placeholder="`Search ${total} intents`"
          :aria-label="`Search ${kind} intents`"
        />
        <select v-model="filter" class="pg-filter" aria-label="Show">
          <option v-for="f in filters" :key="f.id" :value="f.id">{{ f.label }} ({{ f.count }})</option>
        </select>

        <nav ref="treeEl" class="pg-tree">
          <div v-for="g in visible" :key="g.id" class="pg-group" :class="{doc: g.docOnly}">
            <button
              type="button"
              class="pg-group-head"
              :aria-expanded="isOpen(g)"
              @click="toggleGroup(g)"
            >
              <span class="pg-caret" aria-hidden="true"></span>
              <span class="pg-group-title">{{ g.title }}</span>
              <span class="vx-count">{{ g.shown.length }}</span>
            </button>
            <ul v-if="isOpen(g)" class="pg-items">
              <li v-for="i in g.shown" :key="i.action">
                <button
                  type="button"
                  class="pg-item"
                  :class="{active: selectedKey === keyOf(g, i)}"
                  :aria-current="selectedKey === keyOf(g, i) ? 'true' : undefined"
                  @click="select(g, i)"
                >
                  <span class="pg-item-name">{{ i.action }}</span>
                  <span v-if="i.server && !i.docOnly" class="pg-dot green" title="Runs on server"></span>
                  <span v-if="!i.docOnly && changesData(i)" class="pg-dot amber" title="Changes data"></span>
                </button>
              </li>
            </ul>
          </div>
          <p v-if="!visible.length" class="vx-muted pg-none">No intent matches “{{ query }}”.</p>
        </nav>
      </aside>

      <div class="pg-main">
        <IntentDetail
          v-if="selected"
          :key="selectedKey"
          :kind="kind"
          :group="selected.group"
          :intent="selected.intent"
          :state="stateFor(selectedKey, selected.intent)"
          :sdk-package="sdkPackage"
          @select="selectByName"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, nextTick, onBeforeUnmount, onMounted, reactive, ref} from 'vue';
import BridgeStatus from './BridgeStatus.vue';
import IntentDetail from './IntentDetail.vue';
import {changesData, matches} from './format.mjs';

const props = defineProps({
  kind: {type: String, required: true}, // 'application' | 'service'
  groups: {type: Array, required: true},
  sdkPackage: {type: String, default: '@arkeytyp/valu-api'},
  /** Service page only: tools no manifest declares, and SDK-only functions. */
  serverOnlyTools: {type: Array, default: () => []},
  sdkOnly: {type: Array, default: () => []},
});

const groupNoun = computed(() => (props.kind === 'application' ? 'Applications' : 'Services'));

// The catalogue, plus the read-only groups the service page browses too.
const allGroups = computed(() => {
  const list = [...props.groups];
  if (props.serverOnlyTools.length) {
    list.push({
      id: 'server-only',
      title: 'Server-only tools',
      docOnly: true,
      intents: props.serverOnlyTools.map(t => ({
        action: t.name,
        description: t.summary,
        toolKind: t.kind,
        equivalents: t.equivalents,
        docOnly: true,
      })),
    });
  }
  if (props.sdkOnly.length) {
    list.push({
      id: 'sdk-only',
      title: 'SDK only',
      docOnly: true,
      intents: props.sdkOnly.map(f => ({
        action: `${f.service}.${f.action}`,
        description: `Declared by ${props.sdkPackage} itself. It runs over a socket, but the Valu Social manifest does not list it, so callService cannot reach it.`,
        server: f.server,
        docOnly: true,
      })),
    });
  }
  return list;
});

// ── filter ───────────────────────────────────────────────────────────────

const FILTERS = {
  application: [
    {id: 'all', label: 'All', test: () => true},
    {id: 'ai', label: 'Offered to AI', test: i => i.availability?.includes('ai')},
    {id: 'developer', label: 'Offered to developers', test: i => i.availability?.includes('developer')},
    {id: 'writes', label: 'Changes data', test: i => changesData(i)},
  ],
  service: [
    {id: 'all', label: 'All', test: () => true},
    {id: 'server', label: 'Runs on server', test: i => Boolean(i.server) && !i.docOnly},
    {id: 'app-only', label: 'App only', test: i => Boolean(i.appOnly)},
    {id: 'bridge', label: 'Bridge only', test: i => !i.server && !i.appOnly && !i.docOnly},
    {id: 'reads', label: 'Reads', test: i => !i.docOnly && !changesData(i)},
    {id: 'writes', label: 'Changes data', test: i => !i.docOnly && changesData(i)},
  ],
};

const query = ref('');
const filter = ref('all');

const runnable = computed(() => allGroups.value.filter(g => !g.docOnly).flatMap(g => g.intents));
const total = computed(() => runnable.value.length);

const filters = computed(() => FILTERS[props.kind].map(f => ({
  ...f,
  count: runnable.value.filter(f.test).length,
})));

const haystack = (g, i) => [
  g.id, g.title, i.action, i.description,
  ...(i.params?.required ?? []).map(p => p.name), ...(i.params?.optional ?? []).map(p => p.name),
  i.server?.serverTool ?? '',
].join(' ');

const visible = computed(() => {
  const test = FILTERS[props.kind].find(f => f.id === filter.value)?.test ?? (() => true);
  return allGroups.value
    .filter(g => filter.value === 'all' || !g.docOnly)
    .map(g => ({...g, shown: g.intents.filter(i => test(i) && matches(haystack(g, i), query.value))}))
    .filter(g => g.shown.length);
});

// ── groups open / closed ─────────────────────────────────────────────────

const openGroups = reactive(new Set());
const isOpen = g => Boolean(query.value.trim()) || openGroups.has(g.id);
function toggleGroup(g) {
  if (openGroups.has(g.id)) openGroups.delete(g.id);
  else openGroups.add(g.id);
}

// ── selection ────────────────────────────────────────────────────────────

const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const keyOf = (g, i) => `${slug(g.id)}--${slug(i.action)}`;

const selectedKey = ref('');
const navOpen = ref(false);

const selected = computed(() => {
  for (const group of allGroups.value) {
    for (const intent of group.intents) {
      if (keyOf(group, intent) === selectedKey.value) return {group, intent};
    }
  }
  return null;
});

function select(group, intent) {
  selectedKey.value = keyOf(group, intent);
  openGroups.add(group.id);
  navOpen.value = false;
  const url = new URL(window.location.href);
  url.hash = selectedKey.value;
  history.replaceState(history.state, '', url);
  nextTick(revealActive);
}

/** Scroll the navigator's own list to the selected intent; the page stays put. */
function revealActive() {
  const tree = treeEl.value;
  const item = tree?.querySelector('.pg-item.active');
  if (!tree || !item) return;
  const top = item.offsetTop - tree.offsetTop;
  if (top < tree.scrollTop || top + item.offsetHeight > tree.scrollTop + tree.clientHeight) {
    tree.scrollTop = Math.max(0, top - tree.clientHeight / 3);
  }
}

const treeEl = ref(null);

/** "Http.get" → that intent (a server-only tool's declared equivalent). */
function selectByName(name) {
  const [groupId, action] = name.split('.');
  const group = allGroups.value.find(g => g.id.toLowerCase() === String(groupId).toLowerCase());
  const intent = group?.intents.find(i => i.action === action);
  if (group && intent) {
    query.value = '';
    filter.value = 'all';
    select(group, intent);
  }
}

function selectFromHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  for (const group of allGroups.value) {
    const intent = group.intents.find(i => keyOf(group, i) === hash);
    if (intent) {
      select(group, intent);
      return true;
    }
  }
  return false;
}

onMounted(() => {
  if (!selectFromHash()) {
    const first = allGroups.value.find(g => g.intents.length);
    if (first) {
      selectedKey.value = keyOf(first, first.intents[0]);
      openGroups.add(first.id);
    }
  }
  window.addEventListener('hashchange', selectFromHash);
});

onBeforeUnmount(() => window.removeEventListener('hashchange', selectFromHash));

// ── per-intent state ─────────────────────────────────────────────────────

// Kept per intent for the life of the page, so moving between intents keeps
// each one's parameters and its last responses. A plain Map holding reactive
// entries: created on first visit, never written during render.
const states = new Map();

function initialValues(intent) {
  const values = {};
  for (const p of intent.params?.required ?? []) values[p.name] = p.type === 'boolean' ? false : '';
  for (const p of intent.params?.optional ?? []) values[p.name] = '';
  return values;
}

function stateFor(key, intent) {
  let state = states.get(key);
  if (!state) {
    state = reactive({
      mode: 'form',
      values: initialValues(intent),
      extras: {},
      jsonText: '{}',
      runs: [],
      shown: 0,
      running: false,
      startedAt: 0,
      confirming: false,
      cancel: null,
      createValues: () => initialValues(intent),
    });
    states.set(key, state);
  }
  return state;
}
</script>
