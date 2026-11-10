<template>
  <div class="pg" :class="{'nav-open': navOpen}">
    <BridgeStatus />

    <div class="pg-body">
      <!-- Narrow only (explorer.css): the navigator folds into this picker. -->
      <button type="button" class="pg-nav-toggle" :aria-expanded="navOpen" @click="navOpen = !navOpen">
        <span>{{ selected ? selected.fn.call : 'Choose a function' }}</span>
        <span class="pg-caret" aria-hidden="true"></span>
      </button>

      <PlaygroundNav
        ref="navEl"
        v-model:query="query"
        v-model:filter="filter"
        label="Namespaces and their functions"
        :placeholder="`Search ${catalogue.total} functions`"
        :groups="navGroups"
        :filters="filters"
        :selected-key="selectedKey"
        :open-ids="openGroups"
        :empty-text="`No function matches “${query}”.`"
        @toggle="toggleGroup"
        @select="(g, i) => select(g.source, i.source)"
      />

      <div class="pg-main">
        <FunctionDetail
          v-if="selected"
          :key="selectedKey"
          :group="selected.group"
          :fn="selected.fn"
          :state="stateFor(selectedKey, selected.fn)"
        />
        <p class="vx-muted pg-footnote">
          Every function of <code>@arkeytyp/valu-api</code> {{ catalogue.version }}.
          Not here: {{ catalogue.notListed.applicationOnly }} intents only Valu Social's own apps may send,
          and {{ catalogue.notListed.untyped }} app intents with no typed function yet.
          The same list as a reference: <a href="/valu-api-functions">Valu API Functions</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, nextTick, onBeforeUnmount, onMounted, reactive, ref} from 'vue';
import BridgeStatus from './BridgeStatus.vue';
import FunctionDetail from './FunctionDetail.vue';
import PlaygroundNav from './PlaygroundNav.vue';
import {changesData, matches} from './format.mjs';

const props = defineProps({
  // functions.data.mjs: {version, total, groups: [{id, title, functions}], notListed}
  catalogue: {type: Object, required: true},
});

const groups = computed(() => props.catalogue.groups);

// ── filter ───────────────────────────────────────────────────────────────

/** Valu Social runs it, or the page cannot: it means nothing at the app's own address. */
const insideOnly = f => f.mode === 'embedded-only' || f.mode === 'embedded-served';

const FILTERS = [
  {id: 'all', label: 'All', test: () => true},
  {id: 'reads', label: 'Reads', test: f => !changesData(f)},
  {id: 'writes', label: 'Changes data', test: f => changesData(f)},
  {id: 'both', label: 'In both modes', test: f => !insideOnly(f)},
  {id: 'inside', label: 'Inside Valu Social only', test: insideOnly},
];

const query = ref('');
const filter = ref('all');

const all = computed(() => groups.value.flatMap(g => g.functions));

const filters = computed(() => FILTERS.map(f => ({...f, count: all.value.filter(f.test).length})));

const haystack = (g, f) => [
  g.id, g.title, f.call, f.method, f.action, f.description, ...f.scopes,
  ...f.params.required.map(p => p.name), ...f.params.optional.map(p => p.name),
].join(' ');

const visible = computed(() => {
  const test = FILTERS.find(f => f.id === filter.value)?.test ?? (() => true);
  return groups.value
    .map(g => ({...g, shown: g.functions.filter(f => test(f) && matches(haystack(g, f), query.value))}))
    .filter(g => g.shown.length);
});

const navGroups = computed(() => visible.value.map(g => ({
  id: g.id,
  title: g.id,
  source: g,
  items: g.shown.map(f => ({
    key: keyOf(f),
    label: f.method,
    source: f,
    dots: changesData(f) ? [{tone: 'amber', title: 'Changes data'}] : [],
  })),
})));

// ── groups open / closed ─────────────────────────────────────────────────

const openGroups = reactive(new Set());
function toggleGroup(g) {
  if (openGroups.has(g.id)) openGroups.delete(g.id);
  else openGroups.add(g.id);
}

// ── selection ────────────────────────────────────────────────────────────

// `Users.current` → `users-current`, stable across catalogue versions.
const keyOf = f => f.call.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const selectedKey = ref('');
const navOpen = ref(false);

const selected = computed(() => {
  for (const group of groups.value) {
    for (const fn of group.functions) {
      if (keyOf(fn) === selectedKey.value) return {group, fn};
    }
  }
  return null;
});

function select(group, fn) {
  selectedKey.value = keyOf(fn);
  openGroups.add(group.id);
  navOpen.value = false;
  const url = new URL(window.location.href);
  url.hash = selectedKey.value;
  history.replaceState(history.state, '', url);
  nextTick(revealActive);
}

const navEl = ref(null);
const revealActive = () => navEl.value?.reveal();

function selectFromHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1)).toLowerCase();
  for (const group of groups.value) {
    const fn = group.functions.find(f => keyOf(f) === hash);
    if (fn) {
      select(group, fn);
      return true;
    }
  }
  return false;
}

onMounted(() => {
  if (!selectFromHash()) {
    const first = groups.value.find(g => g.id === 'Users') ?? groups.value.find(g => g.functions.length);
    const fn = first?.functions.find(f => f.method === 'current') ?? first?.functions[0];
    if (fn) {
      selectedKey.value = keyOf(fn);
      openGroups.add(first.id);
    }
  }
  window.addEventListener('hashchange', selectFromHash);
});

onBeforeUnmount(() => window.removeEventListener('hashchange', selectFromHash));

// ── per-function state ───────────────────────────────────────────────────

// Kept per function for the life of the page, so moving between functions
// keeps each one's parameters and its last responses.
const states = new Map();

function initialValues(fn) {
  const values = {};
  for (const p of fn.params.required) values[p.name] = p.type === 'boolean' ? false : '';
  for (const p of fn.params.optional) values[p.name] = '';
  return values;
}

function stateFor(key, fn) {
  let state = states.get(key);
  if (!state) {
    state = reactive({
      mode: 'form',
      values: initialValues(fn),
      extras: {},
      jsonText: '{}',
      runs: [],
      shown: 0,
      running: false,
      startedAt: 0,
      confirming: false,
      cancel: null,
      createValues: () => initialValues(fn),
    });
    states.set(key, state);
  }
  return state;
}
</script>
