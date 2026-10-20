<template>
  <div class="pg" :class="{'nav-open': navOpen}">
    <BridgeStatus />

    <div class="pg-body">
      <!-- Narrow only (explorer.css): the navigator folds into this picker. -->
      <button type="button" class="pg-nav-toggle" :aria-expanded="navOpen" @click="navOpen = !navOpen">
        <span>{{ selected ? `${selected.group.title} · ${selected.intent.action}` : 'Choose an intent' }}</span>
        <span class="pg-caret" aria-hidden="true"></span>
      </button>

      <PlaygroundNav
        ref="navEl"
        v-model:query="query"
        v-model:filter="filter"
        :label="`${groupNoun} and their intents`"
        :placeholder="`Search ${total} intents`"
        :groups="navGroups"
        :filters="filters"
        :selected-key="selectedKey"
        :open-ids="openGroups"
        :empty-text="`No intent matches “${query}”.`"
        @toggle="toggleGroup"
        @select="(g, i) => select(g.source, i.source)"
      />

      <div class="pg-main">
        <IntentDetail
          v-if="selected"
          :key="selectedKey"
          :kind="kind"
          :group="selected.group"
          :intent="selected.intent"
          :state="stateFor(selectedKey, selected.intent)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, nextTick, onBeforeUnmount, onMounted, reactive, ref} from 'vue';
import BridgeStatus from './BridgeStatus.vue';
import IntentDetail from './IntentDetail.vue';
import PlaygroundNav from './PlaygroundNav.vue';
import {changesData, matches} from './format.mjs';

const props = defineProps({
  kind: {type: String, required: true}, // 'application' | 'service'
  groups: {type: Array, required: true},
});

const groupNoun = computed(() => (props.kind === 'application' ? 'Applications' : 'Services'));

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
    {id: 'reads', label: 'Reads', test: i => !changesData(i)},
    {id: 'writes', label: 'Changes data', test: i => changesData(i)},
  ],
};

const query = ref('');
const filter = ref('all');

const all = computed(() => props.groups.flatMap(g => g.intents));
const total = computed(() => all.value.length);

const filters = computed(() => FILTERS[props.kind].map(f => ({
  ...f,
  count: all.value.filter(f.test).length,
})));

const haystack = (g, i) => [
  g.id, g.title, i.action, i.description,
  ...(i.params?.required ?? []).map(p => p.name), ...(i.params?.optional ?? []).map(p => p.name),
].join(' ');

const visible = computed(() => {
  const test = FILTERS[props.kind].find(f => f.id === filter.value)?.test ?? (() => true);
  return props.groups
    .map(g => ({...g, shown: g.intents.filter(i => test(i) && matches(haystack(g, i), query.value))}))
    .filter(g => g.shown.length);
});

// What the navigator draws: each visible group, its intents as items.
const navGroups = computed(() => visible.value.map(g => ({
  id: g.id,
  title: g.title,
  source: g,
  items: g.shown.map(i => ({
    key: keyOf(g, i),
    label: i.action,
    source: i,
    dots: changesData(i) ? [{tone: 'amber', title: 'Changes data'}] : [],
  })),
})));

// ── groups open / closed ─────────────────────────────────────────────────

const openGroups = reactive(new Set());
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
  for (const group of props.groups) {
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

const navEl = ref(null);
const revealActive = () => navEl.value?.reveal();

function selectFromHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  for (const group of props.groups) {
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
    const first = props.groups.find(g => g.intents.length);
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
