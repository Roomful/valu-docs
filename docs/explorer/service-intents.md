---
title: Service Intents
aside: false
outline: false
search: false
pageClass: explorer-page
---

<script setup>
import catalogue from '../.vitepress/explorer/server-intents.json'
</script>

# Service Intents

A service intent asks a platform service for data or an action and returns the result:
search rooms, read the current user, send a message. An iframe application calls one with
`valuApi.callService(new Intent(serviceId, action, params))`.

Most also run without a browser. `{{ catalogue.sdk.package }}` {{ catalogue.sdk.version }}
implements them over a socket, so the Valu Guru server and any Node agent can call the same
function. **Runs on server** lists those, with the channel that serves each one and the tool
name the server gives its models. **App only** intents need the Valu Social screen, such as a
picker or a dock.

Inside Valu Social, **Run** calls the service through the bridge, as you. Calls that change
data ask before they are sent.

<IntentExplorer kind="service" :groups="catalogue.services" :sdk-package="catalogue.sdk.package" />

<ServerOnlyTools
  :tools="catalogue.serverOnlyTools"
  :sdk-only="catalogue.sdkOnly"
  :sdk-package="catalogue.sdk.package"
/>
