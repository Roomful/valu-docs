<br>

<a name="crypto-api"></a>

## Crypto API

| Endpoint | Method | Description |
|-----|-----|-----|
| [crypto:createCurrencyTemplate](#create-currency-template) | websocket | Create currency template |
| [crypto:deleteCurrencyTemplate](#delete-currency-template) | websocket | Delete currency template |
| [crypto:listCurrencyTemplateDescriptions](#list-currency-template-descriptions) | websocket | List currency template descriptions |
| [crypto:getCurrencyTemplate](#get-currency-template) | websocket | Get currency template |

<br>

<a name="create-currency-template"></a>

### Create currency template

**Method:** websocket

**Endpoint:** crypto:createCurrencyTemplate

**Request:** 

<pre>
{
    "data": {
        "pBus": string <span color="#1b1ef7"> // VRSCTEST (this is the only one available for now), VRSC, VALU</span>
        "currencyName": string <span color="#1b1ef7"> // Unique per PBus</span>
        "networkId": string <span color="#1b1ef7"> // Valuverse network id</span>
        "authorId": string <span color="#1b1ef7"> // Valuverse user id</span>
        "currencyType": string <span color="#1b1ef7"> // Branded Token, etc.</span>
        "data": map[string]{ custom structure } <span color="#1b1ef7"> // Currency parameters as JSON</span>
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

<a name="delete-currency-template"></a>

### Delete currency template

**Method:** websocket

**Endpoint:** crypto:deleteCurrencyTemplate

**Request:** 

<pre>
{
    "data": {
        "pBus": string
        "currencyName": string
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

<a name="list-currency-template-descriptions"></a>

### List currency template descriptions

**Method:** websocket

**Endpoint:** crypto:listCurrencyTemplateDescriptions

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "currencies": [{
            "pBus": string <span color="#1b1ef7"> // VRSCTEST (this is the only one available for now), VRSC, VALU</span>
            "currencyName": string <span color="#1b1ef7"> // Unique per PBus</span>
            "networkId": string <span color="#1b1ef7"> // Valuverse network id</span>
            "authorId": string <span color="#1b1ef7"> // Valuverse user id</span>
            "currencyType": string <span color="#1b1ef7"> // Branded Token, etc.</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-currency-template"></a>

### Get currency template

**Method:** websocket

**Endpoint:** crypto:getCurrencyTemplate

**Request:** 

<pre>
{
    "data": {
        "pBus": string
        "currencyName": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "currency": {
            "pBus": string <span color="#1b1ef7"> // VRSCTEST (this is the only one available for now), VRSC, VALU</span>
            "currencyName": string <span color="#1b1ef7"> // Unique per PBus</span>
            "networkId": string <span color="#1b1ef7"> // Valuverse network id</span>
            "authorId": string <span color="#1b1ef7"> // Valuverse user id</span>
            "currencyType": string <span color="#1b1ef7"> // Branded Token, etc.</span>
            "data": map[string]{ custom structure } <span color="#1b1ef7"> // Currency parameters as JSON</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

