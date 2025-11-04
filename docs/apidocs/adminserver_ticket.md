<br>

<a name="adminserver-ticket-api"></a>

## Adminserver: Ticket API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/jsonRpc/ticket.createPurchasableTicket](#create-purchasable-ticket) | jsonRpc | Create purchasable ticket |
| [/jsonRpc/ticket.deletePurchasableTicket](#delete-purchasable-ticket) | jsonRpc | Delete purchasable ticket |
| [/jsonRpc/ticket.updatePurchasableTicket](#update-purchasable-ticket) | jsonRpc | Update purchasable ticket |
| [/jsonRpc/ticket.getPurchasableTickets](#get-purchasable-tickets) | jsonRpc | Get purchasable tickets |

<br>

<a name="create-purchasable-ticket"></a>

### Create purchasable ticket

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/ticket.createPurchasableTicket

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "ticket": {
        "productId": string <span color="#1b1ef7"> // unique product identifier</span>
        "eventName": string <span color="#1b1ef7"> // name of related event</span>
        "eventStartDate": timestamp <span color="#1b1ef7"> // start date of related event</span>
        "eventEndDate": timestamp <span color="#1b1ef7"> // end date of related event</span>
        "ticketType": string <span color="#1b1ef7"> // single/days:1of3/days:2of3</span>
        "ticketName": string <span color="#1b1ef7"> // name of ticket that is shown to client</span>
        "ticketDescription": string <span color="#1b1ef7"> // description of ticket that is shown to client</span>
        "price": float <span color="#1b1ef7"> // price in USD</span>
        "thumbnailId": string <span color="#1b1ef7"> // resource id of thumbnail</span>
        "discount": string <span color="#1b1ef7"> // marketing discount, no actual effects on price</span>
        "grants": [{ <span color="#1b1ef7"> // rewards granted by ticket</span>
            "grantType": string <span color="#1b1ef7"> // userRole</span>
            "grantTarget": string <span color="#1b1ef7"> // roleId:roleTarget</span>
        }]
    }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "ticket": {
            "productId": string <span color="#1b1ef7"> // unique product identifier</span>
            "eventName": string <span color="#1b1ef7"> // name of related event</span>
            "eventStartDate": timestamp <span color="#1b1ef7"> // start date of related event</span>
            "eventEndDate": timestamp <span color="#1b1ef7"> // end date of related event</span>
            "ticketType": string <span color="#1b1ef7"> // single/days:1of3/days:2of3</span>
            "ticketName": string <span color="#1b1ef7"> // name of ticket that is shown to client</span>
            "ticketDescription": string <span color="#1b1ef7"> // description of ticket that is shown to client</span>
            "price": float <span color="#1b1ef7"> // price in USD</span>
            "thumbnailId": string <span color="#1b1ef7"> // resource id of thumbnail</span>
            "discount": string <span color="#1b1ef7"> // marketing discount, no actual effects on price</span>
            "grants": [{ <span color="#1b1ef7"> // rewards granted by ticket</span>
                "grantType": string <span color="#1b1ef7"> // userRole</span>
                "grantTarget": string <span color="#1b1ef7"> // roleId:roleTarget</span>
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-purchasable-ticket"></a>

### Delete purchasable ticket

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/ticket.deletePurchasableTicket

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "productId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="update-purchasable-ticket"></a>

### Update purchasable ticket

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/ticket.updatePurchasableTicket

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "ticket": {
        "productId": string <span color="#1b1ef7"> // unique product identifier</span>
        "eventName": string <span color="#1b1ef7"> // name of related event</span>
        "eventStartDate": timestamp <span color="#1b1ef7"> // start date of related event</span>
        "eventEndDate": timestamp <span color="#1b1ef7"> // end date of related event</span>
        "ticketType": string <span color="#1b1ef7"> // single/days:1of3/days:2of3</span>
        "ticketName": string <span color="#1b1ef7"> // name of ticket that is shown to client</span>
        "ticketDescription": string <span color="#1b1ef7"> // description of ticket that is shown to client</span>
        "price": float <span color="#1b1ef7"> // price in USD</span>
        "thumbnailId": string <span color="#1b1ef7"> // resource id of thumbnail</span>
        "discount": string <span color="#1b1ef7"> // marketing discount, no actual effects on price</span>
        "grants": [{ <span color="#1b1ef7"> // rewards granted by ticket</span>
            "grantType": string <span color="#1b1ef7"> // userRole</span>
            "grantTarget": string <span color="#1b1ef7"> // roleId:roleTarget</span>
        }]
    }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "ticket": {
            "productId": string <span color="#1b1ef7"> // unique product identifier</span>
            "eventName": string <span color="#1b1ef7"> // name of related event</span>
            "eventStartDate": timestamp <span color="#1b1ef7"> // start date of related event</span>
            "eventEndDate": timestamp <span color="#1b1ef7"> // end date of related event</span>
            "ticketType": string <span color="#1b1ef7"> // single/days:1of3/days:2of3</span>
            "ticketName": string <span color="#1b1ef7"> // name of ticket that is shown to client</span>
            "ticketDescription": string <span color="#1b1ef7"> // description of ticket that is shown to client</span>
            "price": float <span color="#1b1ef7"> // price in USD</span>
            "thumbnailId": string <span color="#1b1ef7"> // resource id of thumbnail</span>
            "discount": string <span color="#1b1ef7"> // marketing discount, no actual effects on price</span>
            "grants": [{ <span color="#1b1ef7"> // rewards granted by ticket</span>
                "grantType": string <span color="#1b1ef7"> // userRole</span>
                "grantTarget": string <span color="#1b1ef7"> // roleId:roleTarget</span>
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-purchasable-tickets"></a>

### Get purchasable tickets

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/ticket.getPurchasableTickets

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "tickets": [{
            "productId": string <span color="#1b1ef7"> // unique product identifier</span>
            "eventName": string <span color="#1b1ef7"> // name of related event</span>
            "eventStartDate": timestamp <span color="#1b1ef7"> // start date of related event</span>
            "eventEndDate": timestamp <span color="#1b1ef7"> // end date of related event</span>
            "ticketType": string <span color="#1b1ef7"> // single/days:1of3/days:2of3</span>
            "ticketName": string <span color="#1b1ef7"> // name of ticket that is shown to client</span>
            "ticketDescription": string <span color="#1b1ef7"> // description of ticket that is shown to client</span>
            "price": float <span color="#1b1ef7"> // price in USD</span>
            "thumbnailId": string <span color="#1b1ef7"> // resource id of thumbnail</span>
            "discount": string <span color="#1b1ef7"> // marketing discount, no actual effects on price</span>
            "grants": [{ <span color="#1b1ef7"> // rewards granted by ticket</span>
                "grantType": string <span color="#1b1ef7"> // userRole</span>
                "grantTarget": string <span color="#1b1ef7"> // roleId:roleTarget</span>
            }]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

