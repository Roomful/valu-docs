<template>
  <div class="vx">
    <div class="vx-toolbar">
      <input
        v-model="query"
        type="search"
        class="vx-search"
        :placeholder="`Search ${total} endpoints — path, name, API…`"
        aria-label="Search REST endpoints"
      />
      <div class="vx-chips" role="group" aria-label="Filter by kind">
        <button
          v-for="f in filters"
          :key="f.id"
          type="button"
          class="vx-chip"
          :class="{active: kindFilter === f.id}"
          :aria-pressed="kindFilter === f.id"
          :title="f.title"
          @click="kindFilter = f.id"
        >{{ f.label }} <span class="vx-count">{{ f.count }}</span></button>
        <label class="vx-toggle">
          <input v-model="showDeprecated" type="checkbox" />
          Deprecated <span class="vx-count">{{ deprecatedCount }}</span>
        </label>
      </div>
    </div>

    <nav v-if="visible.length > 1" class="vx-jump" aria-label="APIs on this page">
      <a v-for="api in visible" :key="api.page" :href="`#${api.page}`">{{ shortTitle(api.title) }}</a>
    </nav>

    <p class="vx-summary">
      {{ shownCount }} of {{ total }} endpoints in {{ visible.length }} APIs
      <button v-if="openId" type="button" class="vx-link-button" @click="setOpen('')">Collapse</button>
    </p>

    <section v-for="api in visible" :id="api.page" :key="api.page" class="vx-group">
      <div class="vx-group-head">
        <div class="vx-group-title" role="heading" aria-level="2">
          {{ api.title }}
          <a class="vx-group-link" :href="`/apidocs/${api.page}`">reference</a>
        </div>
      </div>

      <article
        v-for="e in api.shown"
        :id="e.id"
        :key="e.id"
        class="vx-card"
        :class="{open: openId === e.id, deprecated: e.deprecated}"
      >
        <button type="button" class="vx-card-head" :aria-expanded="openId === e.id" @click="setOpen(openId === e.id ? '' : e.id)">
          <span class="vx-method" :class="e.method.toLowerCase()">{{ e.method }}</span>
          <code class="vx-path">{{ e.path }}</code>
          <span class="vx-card-summary">{{ e.title }}</span>
          <span class="vx-badges">
            <span class="vx-badge" :class="KIND_TONE[e.kind] ?? 'gray'" :title="KIND_TITLE[e.kind]">{{ e.kindLabel }}</span>
            <span v-if="e.deprecated" class="vx-badge red">Deprecated</span>
          </span>
          <span class="vx-chevron" aria-hidden="true"></span>
        </button>

        <div v-if="openId === e.id" class="vx-card-body">
          <div v-if="e.description" class="vx-desc" v-html="richText(e.description)"></div>

          <dl class="vx-facts">
            <dt>Call</dt>
            <dd>
              <code>{{ e.method }} {{ e.path }}</code>
              <button type="button" class="vx-link-button" @click="copy(e.path, e.id)">
                {{ copied === e.id ? 'Copied' : 'Copy path' }}
              </button>
            </dd>
            <template v-if="e.permissions">
              <dt>Permissions</dt>
              <dd><code>{{ e.permissions }}</code></dd>
            </template>
            <template v-if="e.headers.length">
              <dt>Headers</dt>
              <dd><code v-for="h in e.headers" :key="h" class="vx-line">{{ h }}</code></dd>
            </template>
            <template v-if="e.parameters.length">
              <dt>Parameters</dt>
              <dd><code v-for="p in e.parameters" :key="p" class="vx-line">{{ p }}</code></dd>
            </template>
          </dl>

          <div class="vx-io">
            <div v-if="e.request" class="vx-code">
              <div class="vx-code-head"><span>Request</span></div>
              <pre><code>{{ e.request }}</code></pre>
            </div>
            <div v-if="e.response" class="vx-code">
              <div class="vx-code-head"><span>Response</span></div>
              <pre><code>{{ e.response }}</code></pre>
            </div>
          </div>

          <p class="vx-muted">
            <a :href="`/apidocs/${e.page}#${e.anchor}`">Full reference →</a>
          </p>
        </div>
      </article>
    </section>

    <p v-if="!visible.length" class="vx-empty">No endpoint matches “{{ query }}”.</p>
  </div>
</template>

<script setup>
import {computed, nextTick, onMounted, ref} from 'vue';
import {copyText, matches, richText} from './format.mjs';

const props = defineProps({
  apis: {type: Array, required: true},
});

const KIND_TONE = {webRequest: 'brand', publicRpc: 'green', jsonRpc: 'gray'};
const KIND_TITLE = {
  webRequest: 'HTTP endpoint of the platform API',
  publicRpc: 'Public RPC: POST a JSON body, no session needed',
  jsonRpc: 'Admin server JSON-RPC, gated by network permissions',
};

const query = ref('');
const kindFilter = ref('all');
const showDeprecated = ref(false);

const all = computed(() => props.apis.flatMap(a => a.endpoints));
const total = computed(() => all.value.length);
const deprecatedCount = computed(() => all.value.filter(e => e.deprecated).length);

const filters = computed(() => [
  {id: 'all', label: 'All', count: total.value},
  ...['webRequest', 'publicRpc', 'jsonRpc'].map(kind => ({
    id: kind,
    label: all.value.find(e => e.kind === kind)?.kindLabel ?? kind,
    title: KIND_TITLE[kind],
    count: all.value.filter(e => e.kind === kind).length,
  })),
]);

const haystack = (api, e) => [api.title, e.title, e.path, e.method, e.kindLabel, e.description, e.permissions].join(' ');

const visible = computed(() => props.apis
  .map(api => ({
    ...api,
    shown: api.endpoints.filter(e =>
      (kindFilter.value === 'all' || e.kind === kindFilter.value)
      && (showDeprecated.value || !e.deprecated)
      && matches(haystack(api, e), query.value)),
  }))
  .filter(api => api.shown.length));

const shownCount = computed(() => visible.value.reduce((n, api) => n + api.shown.length, 0));

const shortTitle = title => title.replace(/\s+API$/, '');

const openId = ref('');

function setOpen(id) {
  openId.value = id;
  const url = new URL(window.location.href);
  url.hash = id;
  history.replaceState(history.state, '', url);
}

onMounted(async () => {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  const target = all.value.find(e => e.id === hash);
  if (!target) return;
  if (target.deprecated) showDeprecated.value = true;
  openId.value = hash;
  await nextTick();
  document.getElementById(hash)?.scrollIntoView({block: 'start'});
});

const copied = ref('');
async function copy(text, which) {
  if (await copyText(text)) {
    copied.value = which;
    setTimeout(() => { if (copied.value === which) copied.value = ''; }, 1500);
  }
}
</script>
