<template>
  <div class="vx vx-extra">
    <section v-if="tools.length" id="server-only-tools" class="vx-group">
      <div class="vx-group-head">
        <div class="vx-group-title" role="heading" aria-level="2">Server-only tools</div>
        <p class="vx-group-desc">
          Tools the Valu Guru server gives its models that no manifest declares, so no
          application can call them. Each one is either a binding over a declared intent or
          deliberately kept internal.
        </p>
      </div>
      <article v-for="t in tools" :key="t.name" class="vx-card static">
        <div class="vx-card-head">
          <code class="vx-action">{{ t.name }}</code>
          <span class="vx-badges">
            <span class="vx-badge" :class="KIND_TONE[t.kind] ?? 'gray'" :title="KIND_TITLE[t.kind]">{{ t.kind }}</span>
          </span>
        </div>
        <div class="vx-card-body">
          <div class="vx-desc" v-html="richText(t.summary)"></div>
          <p v-if="t.equivalents.length" class="vx-muted">
            Declared equivalent:
            <template v-for="(e, n) in t.equivalents" :key="e">
              <a :href="`#${anchorFor(e)}`"><code>{{ e }}</code></a><span v-if="n < t.equivalents.length - 1">, </span>
            </template>
          </p>
        </div>
      </article>
    </section>

    <section v-if="sdkOnly.length" id="sdk-only" class="vx-group">
      <div class="vx-group-head">
        <div class="vx-group-title" role="heading" aria-level="2">Declared by the SDK only</div>
        <p class="vx-group-desc">
          Functions {{ sdkPackage }} declares itself. They run over a socket, but the Valu Social
          manifest does not list them, so <code>callService</code> cannot reach them yet.
        </p>
      </div>
      <article v-for="f in sdkOnly" :key="`${f.service}.${f.action}`" class="vx-card static">
        <div class="vx-card-head">
          <code class="vx-action">{{ f.service }}.{{ f.action }}</code>
          <span v-if="f.server.returns" class="vx-card-summary">returns <code>{{ f.server.returns }}</code></span>
          <span class="vx-badges">
            <span class="vx-badge green">{{ f.server.channel }}</span>
            <span v-if="f.server.mutates" class="vx-badge amber">Writes</span>
          </span>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import {richText} from './format.mjs';

defineProps({
  tools: {type: Array, default: () => []},
  sdkOnly: {type: Array, default: () => []},
  sdkPackage: {type: String, default: '@arkeytyp/valu-api'},
});

const KIND_TONE = {binding: 'green', declared: 'brand', internal: 'gray'};
const KIND_TITLE = {
  binding: 'Another way to call a declared intent',
  declared: 'Has a declared intent that answers the same question',
  internal: 'Kept server-side on purpose',
};

// `Http.get` → the IntentExplorer card anchor `http--get`.
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const anchorFor = name => {
  const dot = name.indexOf('.');
  return dot < 0 ? slug(name) : `${slug(name.slice(0, dot))}--${slug(name.slice(dot + 1))}`;
};
</script>
