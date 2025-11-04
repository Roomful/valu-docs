<br>

<a name="payment-api"></a>

## Payment API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/rpc/payment.createStripeCheckoutSession](#create-stripe-checkout-session) | jsonRpc | Create stripe checkout session |
| [payment:validateAppStore](#validate-app-store-payment-receipt) | websocket | Validate App Store payment receipt |
| [payment:getBraintreeClientToken](#get-client-token-for-braintree-payment-provider) | websocket | Get client token for Braintree payment provider |
| [payment:processBraintreePayment](#process-braintree-payment) | websocket | Process Braintree payment |
| [payment:cancelBraintreeSubscription](#cancel-braintree-subscription) | websocket | Cancel Braintree subscription |
| [payment:getBraintreeSubscriptions](#get-braintree-active-subscriptions) | websocket | Get Braintree active subscriptions |
| [payment:createStripeCheckoutSession](#create-stripe-checkout-session) | websocket | Create Stripe checkout session |

<br>

<a name="create-stripe-checkout-session"></a>

### Create stripe checkout session

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/payment.createStripeCheckoutSession

**Description:** Server creates checkout session and returns url to a Stripe-hosted payment page. Ref: https://stripe.com/docs/payments/checkout/how-checkout-works

**Headers:** 

X-Session-Id: sessionToken

X-Network-Id: networkId

**Request:** 

<pre>
{
    "product": string <span color="#1b1ef7"> // name of the product to process</span>
    "amount": float <span color="#1b1ef7"> // in case of balance top up, custom amount of dollars</span>
    "successUrl": string <span color="#1b1ef7"> // redirect url on success, domain + path</span>
    "cancelUrl": string <span color="#1b1ef7"> // redirect url on cancel, domain + path</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "url": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="validate-app-store-payment-receipt"></a>

### Validate App Store payment receipt

**Method:** websocket

**Endpoint:** payment:validateAppStore

**Request:** 

<pre>
{
    "data": {
        "receipt": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "valid": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-client-token-for-braintree-payment-provider"></a>

### Get client token for Braintree payment provider

**Method:** websocket

**Endpoint:** payment:getBraintreeClientToken

**Description:** Client should request client token from Valuverse API server and then initiate Braintree sdk using that client token. Ref : https://developers.braintreepayments.com/start/hello-client/javascript/v2#get-a-client-token

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "token": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="process-braintree-payment"></a>

### Process Braintree payment

**Method:** websocket

**Endpoint:** payment:processBraintreePayment

**Description:** After sending payment information to Braintree server, client get response with "payment method nonce" which need to be submitted to Valuverse API server. Ref: https://developers.braintreepayments.com/start/hello-client/javascript/v2#send-payment-method-nonce-to-server 

Product could be one of the actions (with `buying` type) fetched from `balance:getTokenAction` endpoint. 

Also, product could be `buying_increase_balance` in order to replenish balance by custom amount of money.

**Request:** 

<pre>
{
    "data": {
        "paymentNonce": string <span color="#1b1ef7"> // payment nonce from Braintree server</span>
        "product": string <span color="#1b1ef7"> // name of the product to process</span>
        "amount": float <span color="#1b1ef7"> // amount of dollars to process</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "status": string <span color="#1b1ef7"> // response status one of success / terminated / failed</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="cancel-braintree-subscription"></a>

### Cancel Braintree subscription

**Method:** websocket

**Endpoint:** payment:cancelBraintreeSubscription

**Request:** 

<pre>
{
    "data": {
        "product": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "status": string <span color="#1b1ef7"> // response status one of success / terminated / failed</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-braintree-active-subscriptions"></a>

### Get Braintree active subscriptions

**Method:** websocket

**Endpoint:** payment:getBraintreeSubscriptions

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "subscriptions": [{
            "planId": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-stripe-checkout-session"></a>

### Create Stripe checkout session

**Method:** websocket

**Endpoint:** payment:createStripeCheckoutSession

**Description:** Server creates checkout session and returns url to a Stripe-hosted payment page. Ref: https://stripe.com/docs/payments/checkout/how-checkout-works

**Request:** 

<pre>
{
    "data": {
        "product": string <span color="#1b1ef7"> // name of the product to process</span>
        "amount": float <span color="#1b1ef7"> // in case of balance top up, custom amount of dollars</span>
        "successUrl": string <span color="#1b1ef7"> // redirect url on success, domain + path</span>
        "cancelUrl": string <span color="#1b1ef7"> // redirect url on cancel, domain + path</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "url": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

