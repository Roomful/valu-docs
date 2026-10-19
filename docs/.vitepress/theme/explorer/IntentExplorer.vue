<template>
  <div class="vx">
    <div class="vx-status" :class="statusTone" role="status">
      <span class="vx-dot" aria-hidden="true"></span>
      <span>{{ statusText }}</span>
    </div>

    <div class="vx-toolbar">
      <input
        v-model="query"
        type="search"
        class="vx-search"
        :placeholder="`Search ${total} intents — ${kind === 'application' ? 'application' : 'service'}, action, parameter…`"
        :aria-label="`Search ${kind} intents`"
      />
      <div class="vx-chips" role="group" aria-label="Filter">
        <button
          v-for="f in filters"
          :key="f.id"
          type="button"
          class="vx-chip"
          :class="{active: filter === f.id}"
          :aria-pressed="filter === f.id"
          :title="f.title"
          @click="filter = f.id"
        >{{ f.label }} <span class="vx-count">{{ f.count }}</span></button>
      </div>
    </div>

    <nav v-if="visible.length > 1" class="vx-jump" :aria-label="`${groupNoun} on this page`">
      <a v-for="g in visible" :key="g.id" :href="`#${groupAnchor(g)}`">{{ g.title }}</a>
    </nav>

    <p class="vx-summary">
      {{ shownCount }} of {{ total }} intents in {{ visible.length }} {{ groupNoun }}
      <button v-if="openId" type="button" class="vx-link-button" @click="setOpen('')">Collapse</button>
    </p>

    <section v-for="g in visible" :id="groupAnchor(g)" :key="g.id" class="vx-group">
      <div class="vx-group-head">
        <div class="vx-group-title" role="heading" aria-level="2">
          {{ g.title }} <code>{{ g.id }}</code>
        </div>
        <p v-if="g.description" class="vx-group-desc" v-html="inlineMd(g.description)"></p>
      </div>
      <IntentCard
        v-for="i in g.shown"
        :key="i.action"
        :kind="kind"
        :group="g"
        :intent="i"
        :anchor="cardAnchor(g, i)"
        :open="openId === cardAnchor(g, i)"
        :sdk-package="sdkPackage"
        @toggle="setOpen(openId === cardAnchor(g, i) ? '' : cardAnchor(g, i))"
      />
    </section>

    <p v-if="!visible.length" class="vx-empty">No intent matches “{{ query }}”.</p>

    <slot name="after"></slot>
  </div>
</template>

<script setup>
import {computed, nextTick, onBeforeUnmount, onMounted, ref} from 'vue';
import IntentCard from './IntentCard.vue';
import {changesData, inlineMd, matches} from './format.mjs';
import {useValuBridge} from './valuBridge.mjs';

const props = defineProps({
  kind: {type: String, required: true}, // 'application' | 'service'
  groups: {type: Array, required: true},
  sdkPackage: {type: String, default: '@arkeytyp/valu-api'},
});

const {framed, connected, applicationId} = useValuBridge();

const groupNoun = computed(() => (props.kind === 'application' ? 'applications' : 'services'));

const statusTone = computed(() => (connected.value ? 'ok' : framed.value ? 'wait' : 'off'));
const statusText = computed(() => {
  if (connected.value) return `Connected to Valu Social as ${applicationId.value || 'valu_docs'} — Run sends the call for real, as you.`;
  if (framed.value) return 'Waiting for Valu Social to connect…';
  return 'Reference only. Open Valu Docs inside Valu Social to run these calls.';
});

// ── filters ──────────────────────────────────────────────────────────────

const FILTERS = {
  application: [
    {id: 'all', label: 'All', test: () => true},
    {id: 'ai', label: 'AI', title: 'Offered to AI agents as tools', test: i => i.availability?.includes('ai')},
    {id: 'developer', label: 'Developer', title: 'Offered to developers over the bridge', test: i => i.availability?.includes('developer')},
    {id: 'writes', label: 'Writes', title: 'Change data', test: i => changesData(i)},
  ],
  service: [
    {id: 'all', label: 'All', test: () => true},
    {id: 'server', label: 'Runs on server', title: 'The SDK also runs it without a browser — on the Valu Guru server or in a Node agent', test: i => Boolean(i.server)},
    {id: 'app-only', label: 'App only', title: 'Only the Valu Social application can serve it', test: i => Boolean(i.appOnly)},
    {id: 'bridge', label: 'Bridge only', title: 'Not in the SDK catalogue yet', test: i => !i.server && !i.appOnly},
    {id: 'reads', label: 'Reads', test: i => !changesData(i)},
    {id: 'writes', label: 'Writes', test: i => changesData(i)},
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
  ...i.params.required.map(p => p.name), ...i.params.optional.map(p => p.name),
  i.server?.serverTool ?? '',
].join(' ');

const visible = computed(() => {
  const test = FILTERS[props.kind].find(f => f.id === filter.value)?.test ?? (() => true);
  return props.groups
    .map(g => ({...g, shown: g.intents.filter(i => test(i) && matches(haystack(g, i), query.value))}))
    .filter(g => g.shown.length);
});

const shownCount = computed(() => visible.value.reduce((n, g) => n + g.shown.length, 0));

// ── anchors / deep links ─────────────────────────────────────────────────

const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const groupAnchor = g => slug(g.id);
const cardAnchor = (g, i) => `${slug(g.id)}--${slug(i.action)}`;

const openId = ref('');

function setOpen(id) {
  openId.value = id;
  if (typeof window === 'undefined') return;
  const url = new URL(window.location.href);
  url.hash = id;
  history.replaceState(history.state, '', url);
}

// Open the card a `#service--action` hash names: on load, and when an in-page
// link (a server-only tool's "Declared equivalent") points at one.
async function openFromHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  if (!hash.includes('--')) return;
  const exists = props.groups.some(g => g.intents.some(i => cardAnchor(g, i) === hash));
  if (!exists) return;
  query.value = '';
  filter.value = 'all';
  openId.value = hash;
  await nextTick();
  document.getElementById(hash)?.scrollIntoView({block: 'start'});
}

onMounted(() => {
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
});

onBeforeUnmount(() => window.removeEventListener('hashchange', openFromHash));
</script>
