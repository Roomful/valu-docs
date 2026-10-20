---
title: Service Intents
aside: false
outline: false
search: false
pageClass: explorer-page playground-page
---

<script setup>
import catalogue from '../.vitepress/explorer/server-intents.json'
</script>

# Service Intents

<IntentPlayground
  kind="service"
  :groups="catalogue.services"
  :sdk-package="catalogue.sdk.package"
  :server-only-tools="catalogue.serverOnlyTools"
  :sdk-only="catalogue.sdkOnly"
/>
