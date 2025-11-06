# Crypto Server 

* Purpose: abstract API layer for all Verus RPC calls

* Production endpoint: https://vrsc.valuverse.io

* Development endpoint: https://vrsctest.valuverse.io

## Services:

* **Login** - handles Login requests from Auth Page in Valu Social or Authorization from Valu Mobile.
* **DeepLink** - Creation of deeplink
* **Provisioning** - handles provisioning of valuid@ or specific network toke id@(s)
* **Ticketing** - handles ticketing purchases, marketplace and private events
* **Claims & Attestations** - Creating claims, persist calims into the wallet, retrieving claims from the Wallet, KYC, verified statatements handling
* **Endorsements** - Ability to endorse and persist claims
* **Payments** - handles payment invoices and payments processing
* **Coin Exchange** - handles coins transfer accross public bridges (like BTC, Etherreum, DAI)

<img src="/images/Cryptoserver_diagram.png" width="800" alt="Crypto Server Structure">

## Deployment

#### Prerequisites:

* node.js
* yarn
* mysql
