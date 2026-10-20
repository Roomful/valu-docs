<template>
  <aside class="pg-nav" :aria-label="label">
    <input v-model="query" type="search" class="pg-search" :placeholder="placeholder" :aria-label="placeholder" />
    <select v-if="filters.length" v-model="filter" class="pg-filter" aria-label="Show">
      <option v-for="f in filters" :key="f.id" :value="f.id">{{ f.count === undefined ? f.label : `${f.label} (${f.count})` }}</option>
    </select>

    <nav ref="treeEl" class="pg-tree">
      <div v-for="g in groups" :key="g.id" class="pg-group" :class="{doc: g.muted}">
        <button type="button" class="pg-group-head" :aria-expanded="isOpen(g)" @click="$emit('toggle', g)">
          <span class="pg-caret" aria-hidden="true"></span>
          <span class="pg-group-title">{{ g.title }}</span>
          <span class="vx-count">{{ g.count ?? g.items.length }}</span>
        </button>
        <ul v-if="isOpen(g)" class="pg-items">
          <li v-if="g.note" class="pg-note" :class="g.noteTone">{{ g.note }}</li>
          <li v-for="i in g.items" :key="i.key">
            <button
              type="button"
              class="pg-item"
              :class="{active: i.key === selectedKey}"
              :aria-current="i.key === selectedKey ? 'true' : undefined"
              :title="i.title || undefined"
              @click="$emit('select', g, i)"
            >
              <span v-if="i.method" class="pg-method" :class="i.method.toLowerCase()">{{ i.method }}</span>
              <span class="pg-item-name" :class="{plain: i.plain}">{{ i.label }}</span>
              <span v-for="d in i.dots ?? []" :key="d.tone" class="pg-dot" :class="d.tone" :title="d.title"></span>
            </button>
          </li>
        </ul>
      </div>
      <p v-if="!groups.length" class="vx-muted pg-none">{{ emptyText }}</p>
    </nav>
  </aside>
</template>

<script setup>
import {ref} from 'vue';

// The playground's left column, shared by the intent and REST playgrounds so
// the two browse the same way. It owns nothing but its scroll position: the
// groups, which are open, the selection, the search and the filter all belong
// to the page using it.

const props = defineProps({
  label: {type: String, required: true},
  placeholder: {type: String, required: true},
  /** [{id, title, items: [{key, label, method?, title?, plain?, dots?}], count?, note?, noteTone?, muted?}] */
  groups: {type: Array, required: true},
  filters: {type: Array, default: () => []},
  selectedKey: {type: String, default: ''},
  /** Group ids that are open; every group opens while a search is typed. */
  openIds: {type: Object, required: true},
  emptyText: {type: String, default: 'Nothing matches.'},
});
defineEmits(['toggle', 'select']);

const query = defineModel('query', {type: String, default: ''});
const filter = defineModel('filter', {type: String, default: 'all'});

const isOpen = g => Boolean(query.value.trim()) || props.openIds.has(g.id);

const treeEl = ref(null);

/** Scroll the list (not the page) so the selected item is in view. */
function reveal() {
  const tree = treeEl.value;
  const item = tree?.querySelector('.pg-item.active');
  if (!tree || !item) return;
  const top = item.offsetTop - tree.offsetTop;
  if (top < tree.scrollTop || top + item.offsetHeight > tree.scrollTop + tree.clientHeight) {
    tree.scrollTop = Math.max(0, top - tree.clientHeight / 3);
  }
}

defineExpose({reveal});
</script>
