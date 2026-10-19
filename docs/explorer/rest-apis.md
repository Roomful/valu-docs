---
title: REST APIs
aside: false
outline: false
next: false
search: false
pageClass: explorer-page
---

<script setup>
import {data} from '../.vitepress/explorer/rest-apis.data.mjs'
</script>

# REST APIs

The platform backend's HTTP endpoints, read from the
[Valuverse Backend API](/apidocs/Readme) reference:

- **REST** endpoints under `/api/v0/…`, most of which take the session in `X-Session-Id`.
- **Public RPC** calls (`POST /api/v0/publicRpc/…`) that need no session.
- **Admin JSON-RPC** calls (`POST /jsonRpc/…`) on the admin server, gated by network permissions.

These are called by servers and the platform itself, not through the iframe bridge, so this
page is a reference with no Run. The websocket API is in the full reference.

<RestExplorer :apis="data.apis" />
