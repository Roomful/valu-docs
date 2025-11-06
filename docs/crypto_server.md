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


#### Major API of Crypto

- `/verusIdLogin`
  <img src="/images/login.png" width="800" alt="Login Process">

- `/api/v2/sendMoney`
  <img src="/images/payments.png" width="800" alt="Payments by iAddress Process">

- `/api/getProvisionDeeplink`
  <img src="/images/provisioning.png" width="800" alt="Payments by iAddress Process">

- `/api/getAttestationDeeplink`
  <img src="/images/storing_attestations.png" width="800" alt="Payments by iAddress Process">

- `/api/getAttestationFromWallet`
  <img src="/images/retriving_attestations.png" width="800" alt="Payments by iAddress Process">

- `/api/v2/signMessageByUser`
  <img src="/images/sign_message.png" width="800" alt="Payments by iAddress Process">

- `/api/v2/getVerifyLink`
  <img src="/images/verifyLink.png" width="800" alt="Payments by iAddress Process">

- `/getExchangeFees`
  <img src="/images/getExchangeFees.png" width="800" alt="Payments by iAddress Process">

- `/api/v2/getIdentity`
  <img src="/images/getIdentity.png" width="800" alt="Payments by iAddress Process">

- `/api/storeEndorsementByIdentity`
  <img src="/images/store_endorsments.png" width="800" alt="Payments by iAddress Process">

- `/api/getEndorsementsByIdentity`
  <img src="/images/get_endorsments.png" width="800" alt="Payments by iAddress Process">

- `/getVerusExchangeRate`
- `/getVerusExchangeRateV2`
  <img src="/images/get_exchange_rate.png" width="800" alt="Payments by iAddress Process">

- `/exchangeCrypto`
  <img src="/images/exchange_crypto.png" width="800" alt="Payments by iAddress Process">

- `/payRoomWithVerus`
  <img src="/images/pay_room.png" width="800" alt="Payments by iAddress Process">
