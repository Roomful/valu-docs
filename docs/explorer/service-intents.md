---
title: Service Intents
aside: false
outline: false
search: false
pageClass: explorer-page
---

<script setup>
// The Explorer's Service Intents page became Functions (valu-api's own typed functions).
// The deploy only adds files, so this page replaces the old one on the server
// and moves on inside the app, without a reload Valu Social would not answer.
import {onMounted} from 'vue'
import {useRouter} from 'vitepress'
const router = useRouter()
onMounted(() => router.go('/explorer/functions'))
</script>

# Service Intents moved

This page is now [Functions](/explorer/functions): every function of valu-api, run the way your app calls it.
