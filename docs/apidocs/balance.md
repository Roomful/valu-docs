<br>

<a name="balance-api"></a>

## Balance API

| Endpoint | Method | Description |
|-----|-----|-----|
| [balance:getTransactions](#get-balance-transactions) | websocket | Get balance transactions |
| [balance:getTokenAction](#get-token-action) | websocket | Get token action |
| [balance:getTokenActionList](#get-token-action-list) | websocket | Get token action list |
| [balance:donateToken](#donate-token) | websocket | Donate token |
| [balance:addUserBalanceByAdmin](#add-user-balance-by-admin) | websocket | Add user balance by admin |
| [balance:getCurrencyExchangeRate](#get-currency-exchange-rate) | websocket | Get currency exchange rate |
| [balance:getProductSubscriptionOptions](#get-product-subscription-options) | websocket | Get product subscription options |
| [balance:createRoomSubscription](#create-room-subscription) | websocket | Create room subscription |
| [balance:expireRoomSubscription](#expire-room-subscription) | websocket | Expire room subscription |
| [user:balance](#user-balance-event) | websocketEvent | User balance event |

<br>

<a name="get-balance-transactions"></a>

### Get balance transactions

**Method:** websocket

**Endpoint:** balance:getTransactions

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "transactions": {
            "spending": map[string]float
            "mining": map[string]float
            "buying": map[string]float
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-token-action"></a>

### Get token action

**Method:** websocket

**Endpoint:** balance:getTokenAction

**Request:** 

<pre>
{
    "data": {
        "action": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "actions": {
            "type": string <span color="#1b1ef7"> // token type, one of mining / spending / buying</span>
            "action": string
            "token": float
            "price": float
            "category": string <span color="#1b1ef7"> // token category, one of event / product / subscription</span>
            "description": string
        }
        "actionName": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-token-action-list"></a>

### Get token action list

**Method:** websocket

**Endpoint:** balance:getTokenActionList

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "actions": [{
            "type": string <span color="#1b1ef7"> // token type, one of mining / spending / buying</span>
            "action": string
            "token": float
            "price": float
            "category": string <span color="#1b1ef7"> // token category, one of event / product / subscription</span>
            "description": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="donate-token"></a>

### Donate token

**Method:** websocket

**Endpoint:** balance:donateToken

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "token": float
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="add-user-balance-by-admin"></a>

### Add user balance by admin

**Method:** websocket

**Endpoint:** balance:addUserBalanceByAdmin

**Description:** Api is available only for admin users. Balance could also be withdrawn if amount is provided with negative value.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "amount": float
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-currency-exchange-rate"></a>

### Get currency exchange rate

**Method:** websocket

**Endpoint:** balance:getCurrencyExchangeRate

**Request:** 

<pre>
{
    "data": {
        "currency": string <span color="#1b1ef7"> // rents/roomi/valu</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "currencyExchangeRate": float
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-product-subscription-options"></a>

### Get product subscription options

**Method:** websocket

**Endpoint:** balance:getProductSubscriptionOptions

**Description:** Api returns subscription options for product. If request contains non default currency, endpoint will return corresponding `altPrice` and `altCurrency` in result. Currency could be one of: `roomi` (Roomful crypto currency), `Valu` (ValuVerse crypto currency).

**Request:** 

<pre>
{
    "data": {
        "productType": string <span color="#1b1ef7"> // type of target product (room/styleAsset)</span>
        "productId": string <span color="#1b1ef7"> // id of target product (e.g. roomId, assetId)</span>
        "currency": string <span color="#1b1ef7"> // rents/roomi</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "subscriptionOptions": [{
            "plan": string <span color="#1b1ef7"> // free/one_time_payment/subscription_week/subscription_month/subscription_6_months/subscription_year</span>
            "price": float <span color="#1b1ef7"> // price in valuverse tokens (rents)</span>
            "altCurrency": string <span color="#1b1ef7"> // alternative currency, if provided (e.g. roomi)</span>
            "altPrice": float <span color="#1b1ef7"> // price in alternative currency</span>
        }]
        "altCurrencyExchangeRate": float
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-room-subscription"></a>

### Create room subscription

**Method:** websocket

**Endpoint:** balance:createRoomSubscription

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "subscriptionPlan": string <span color="#1b1ef7"> // free/one_time_payment/subscription_week/subscription_month/subscription_6_months/subscription_year</span>
        "walletAddress": string <span color="#1b1ef7"> // wallet address (in case of crypto currency payment)</span>
        "currency": string <span color="#1b1ef7"> // rents (default) / roomi (Roomful crypto currency) / Valu (ValuVerse crypto currency)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="expire-room-subscription"></a>

### Expire room subscription

**Method:** websocket

**Endpoint:** balance:expireRoomSubscription

**Description:** Api is available only for network admin users

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "subscriptionPlan": string <span color="#1b1ef7"> // free/one_time_payment/subscription_week/subscription_month/subscription_6_months/subscription_year</span>
        "walletAddress": string <span color="#1b1ef7"> // wallet address (in case of crypto currency payment)</span>
        "currency": string <span color="#1b1ef7"> // rents (default) / roomi (Roomful crypto currency) / Valu (ValuVerse crypto currency)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-balance-event"></a>

### User balance event

**Event:** user:balance

**Data:** 

<pre>
{
    "data": {
        "token": float
        "transactions": { <span color="#1b1ef7"> // Deprecated</span>
            "spending": map[string]float
            "mining": map[string]float
            "buying": map[string]float
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

