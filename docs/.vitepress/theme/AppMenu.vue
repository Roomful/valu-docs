<template>
  <!-- Inside Valu Social only: nothing here exists until the host's api:ready
       (the manifest sets header: false, so these two actions are ours to draw). -->
  <div v-if="connected" ref="root" class="valu-app-menu">
    <button
      type="button"
      class="valu-app-menu-button"
      aria-haspopup="menu"
      :aria-expanded="open"
      aria-label="Application menu"
      title="Application"
      @click="toggle"
    >
      <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
        <circle cx="10" cy="10" r="8.25" fill="none" stroke="currentColor" stroke-width="1.3" />
        <circle cx="6.25" cy="10" r="1.1" fill="currentColor" />
        <circle cx="10" cy="10" r="1.1" fill="currentColor" />
        <circle cx="13.75" cy="10" r="1.1" fill="currentColor" />
      </svg>
    </button>

    <div v-if="open" class="valu-app-menu-list" role="menu" @keydown.esc.prevent="closeMenu(true)">
      <button v-if="canExpand" type="button" role="menuitem" class="valu-app-menu-item" @click="expand">
        <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
          <path d="M2.5 3.5v13M17.5 3.5v13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" fill="none" />
          <path d="M5.5 10h9M8 7.5 5.5 10 8 12.5M12 7.5l2.5 2.5-2.5 2.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </svg>
        Expand Application
      </button>
      <button type="button" role="menuitem" class="valu-app-menu-item danger" @click="closeApp">
        <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
          <path d="M4.5 4.5l11 11M15.5 4.5l-11 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none" />
        </svg>
        Close Application
      </button>
    </div>
  </div>
</template>

<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref} from 'vue';
import {runApi, settle, useValuBridge} from './explorer/valuBridge.mjs';

// The app menu every iframe app with `header: false` owes (valusocial-web
// DeveloperPortal/Components/Header/headerStandard.js): Expand Application and
// Close Application behind a circle-ellipsis button, Close destructive, and a
// double-click on the bar that expands. Over the `app` API: expand / close take
// the bare application id (never [id]); getLoadedApplications answers which
// apps are open, asked each time the menu opens because the host sends no
// event when other apps open or close.

const {connected, applicationId} = useValuBridge();

const root = ref(null);
const open = ref(false);
const canExpand = ref(false);

const appId = () => applicationId.value || window.__valuBridge?.applicationId || '';

async function toggle() {
  if (open.value) return closeMenu();
  canExpand.value = false;
  open.value = true;
  try {
    const loaded = await settle(runApi('app', 'getLoadedApplications'));
    canExpand.value = Array.isArray(loaded) && loaded.some(id => id !== appId());
  } catch {
    // An older host without getLoadedApplications: offer Expand rather than
    // hide it — it is a no-op when nothing else is open.
    canExpand.value = true;
  }
  // Focus the first item once the list is final, so it is Expand when shown.
  await nextTick();
  if (open.value) root.value?.querySelector('[role="menuitem"]')?.focus();
}

function closeMenu(refocus = false) {
  open.value = false;
  if (refocus) root.value?.querySelector('.valu-app-menu-button')?.focus();
}

async function expand() {
  closeMenu();
  await settle(runApi('app', 'expand', appId())).catch(() => {});
}

async function closeApp() {
  closeMenu();
  await settle(runApi('app', 'close', appId())).catch(() => {});
}

// Click outside closes the menu.
function onPointerDown(event) {
  if (open.value && !root.value?.contains(event.target)) closeMenu();
}

// Double-click on the bar — not on its controls — expands, like the platform's
// own header. Expand is a no-op when nothing else is open, so no gate here.
function onDoubleClick(event) {
  if (!connected.value) return;
  const target = event.target;
  if (!(target instanceof Element) || !target.closest('.VPNavBar')) return;
  if (target.closest('a, button, input, select, textarea, [role="menu"]')) return;
  expand();
}

onMounted(() => {
  document.addEventListener('pointerdown', onPointerDown);
  document.addEventListener('dblclick', onDoubleClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onPointerDown);
  document.removeEventListener('dblclick', onDoubleClick);
});
</script>

<style scoped>
.valu-app-menu {
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 12px;
}

.valu-app-menu-button {
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--vp-c-text-dark);
  cursor: pointer;
  transition: opacity 0.2s;
}

.valu-app-menu-button:hover { opacity: 0.6; }

.valu-app-menu-button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  border-radius: 50%;
}

.valu-app-menu-list {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  min-width: 220px;
  padding: 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
}

.valu-app-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-1);
  font: inherit;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
}

.valu-app-menu-item:hover,
.valu-app-menu-item:focus-visible {
  outline: none;
  background: var(--vp-c-default-soft);
}

/* The platform's negative red, as its own Close Application item. */
.valu-app-menu-item.danger { color: #ff2651; }
</style>
