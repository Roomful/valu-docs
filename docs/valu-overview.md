# Valu Ecosystem Developer Overview

## Brand: Valu
**Tagline:** Own your Identity, Freedom, and Security  
**Mission:** Aligning the interests of users and communities to create sustainable, distributed, decentralized network economies.

---

## Product: Valuverse

**Valuverse** is a core component of the **Valu Ecosystem**, designed as a **Valu Social Platform** — a **Super App** that empowers community-driven economies.  
It combines decentralized identity, financial tools, and social engagement in one place.

### What You Can Do
- **Create Communities**: Build your own digital ecosystem where users collaborate, exchange value, and grow together.
- **Launch Tokens & Currencies**: Design and issue tokens or cryptocurrencies that power your community economy.
- **Engage Authentically**: Connect with real, verified members through secure and private communication tools.
- **Integrate Apps**: Extend the Super App by adding your own mini-apps or integrations using Valu APIs.

---

## Getting Started

### 1. Download the Valu Wallet
The **Valu Wallet** is your entry point into the Valu Ecosystem.  
It handles identity, digital assets, and secure transactions across Valuverse and connected communities.

Download it from your preferred app store:

- **[App Store](https://apps.apple.com)** → Search for **"Valu"**
- **[Google Play](https://play.google.com)** → Search for **"Valu"**

---

### 2. Join the Community
Connect with other users, developers, and community leaders on:

👉 **[live.valuverse.io](https://live.valuverse.io)**

Here you can:
- Access **community news and announcements**
- Discover **new communities**
- See how others are **creating tokens and currencies**
- Collaborate with developers building on the Valu platform

---

## Developer Resources

### Documentation
Valuverse provides developer-friendly tools and guides to help you integrate, extend, or build on the Valu ecosystem.  
Here you’ll find:
- Architecture overview
- Identity and Wallet APIs
- Smart transaction models (VerusID and ZK Privacy)
- SDKs for Valu Social and Wallet
- Example dApps and community integrations

This site is that documentation. Apps are built and published in the **Developer Portal** inside Valu Social (or by the AI builder in Workspaces).

---

### Start Here: the Valu API package
If you're a developer, begin with **[`@arkeytyp/valu-api`](/valu-api)**, the JavaScript package every Valu app uses.
It lets your app:
- Run inside Valu Social, or at its own address with **Sign in with Valu** (a popup; your page never holds a session or token)
- Read the signed-in user, network, rooms, communities, chat and resources
- Sell through the shared cart and read what the user owns (Commerce)
- Open Valu Social's own windows and other apps
- Prove the user's identity to your own backend ([identity token](/identity-token-validation))

```js
import { createValuApp } from '@arkeytyp/valu-api'

const valu = await createValuApp()      // inside Valu Social or at your own address

// At your own address, from a click: opens the Valu sign-in popup.
signInButton.onclick = () => valu.auth.signIn()

const { user } = await valu.data.Users.current()
```

Next: [Valu API](/valu-api) (install, permissions, Commerce), [snippets](/valu-snippets) (React hooks), and the **Explorer** (try intents live; shown when this site is opened inside Valu Social).
