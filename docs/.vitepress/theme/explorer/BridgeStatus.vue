<template>
  <div class="vx-status" :class="tone" role="status">
    <span class="vx-dot" aria-hidden="true"></span>
    <span class="vx-status-text">{{ text }}</span>
    <slot></slot>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import {useValuBridge} from './valuBridge.mjs';

const props = defineProps({
  /** Said after "Connected to Valu Social as …" when the bridge is up. */
  connectedHint: {type: String, default: 'Run sends the call for real, as you.'},
  /** Said when the page is not framed by Valu Social. */
  offText: {type: String, default: 'Reference only. Open Valu Docs inside Valu Social to run these calls.'},
});

const {framed, connected, applicationId} = useValuBridge();

const tone = computed(() => (connected.value ? 'ok' : framed.value ? 'wait' : 'off'));
const text = computed(() => {
  if (connected.value) {
    const as = `Connected to Valu Social as ${applicationId.value || 'valu_docs'}`;
    return props.connectedHint ? `${as} — ${props.connectedHint}` : `${as}.`;
  }
  if (framed.value) return 'Waiting for Valu Social to connect…';
  return props.offText;
});
</script>
