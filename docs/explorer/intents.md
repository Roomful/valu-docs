---
title: Intents
aside: false
outline: false
search: false
pageClass: explorer-page
---

<script setup>
import catalogue from '../.vitepress/explorer/intents.json'
</script>

# Intents

An application intent asks a Valu Social application to do something on screen: open a chat,
show a user, connect to a meeting. An iframe application sends one with
`valuApi.sendIntent(new Intent(applicationId, action, params))` and the platform opens the
application to handle it. For calls that return data instead, see
[Service Intents](./service-intents).

Inside Valu Social, **Run** sends the intent through the bridge, as you.

<IntentExplorer kind="application" :groups="catalogue.applications" />
