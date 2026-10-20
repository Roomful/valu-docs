<template>
  <!-- Says something only when there is something to say: outside Valu
       Social, or while it has not connected yet. Connected is the normal
       state and needs no banner. -->
  <div v-if="!connected" class="vx-status" :class="framed ? 'wait' : 'off'" role="status">
    <span class="vx-dot" aria-hidden="true"></span>
    <span class="vx-status-text">{{ framed ? 'Waiting for Valu Social to connect…' : offText }}</span>
  </div>
</template>

<script setup>
import {useValuBridge} from './valuBridge.mjs';

defineProps({
  /** Said when the page is not framed by Valu Social. */
  offText: {type: String, default: 'Reference only. Open Valu Docs inside Valu Social to run these calls.'},
});

const {framed, connected} = useValuBridge();
</script>
