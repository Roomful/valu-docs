<br>

<a name="ticket-api"></a>

## Ticket API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/resource/ticket/{ticketId}](#get-ticket-pdf-file) | webRequest | Get ticket PDF file |
| [/api/v0/rpc/ticket.getPurchasableTickets](#get-purchasable-tickets) | jsonRpc | Get purchasable tickets |
| [ticket:getPurchasableTickets](#get-purchasable-tickets) | websocket | Get purchasable tickets |
| [ticket:purchaseTicket](#purchase-ticket) | websocket | Purchase ticket |
| [ticket:deleteTicket](#delete-ticket) | websocket | Delete ticket |
| [ticket:getPurchasedTicket](#get-purchased-ticket) | websocket | Get purchased ticket |
| [ticket:getPurchasedTickets](#get-purchased-tickets) | websocket | Get purchased tickets |
| [ticket:onTicketPurchased](#on-ticket-purchased-event) | websocketEvent | On ticket purchased event |

<br>

<a name="get-ticket-pdf-file"></a>

### Get ticket PDF file

**HTTP Method:** GET

**Path:** /api/v0/resource/ticket/{ticketId}

**Description:** Endpoint returns PDF file for the ticket. User must be authorized in order to fetch his ticket.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
PDF file
</pre>

<br>

<a name="get-purchasable-tickets"></a>

### Get purchasable tickets

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/ticket.getPurchasableTickets

**Description:** API returns all tickets that could be purchased for an event.

**Headers:** 

X-Session-Id: sessionToken

X-Network-Id: networkId

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

<br>

<a name="get-purchasable-tickets"></a>

### Get purchasable tickets

**Method:** websocket

**Endpoint:** ticket:getPurchasableTickets

**Description:** API returns all tickets that could be purchased for an event.

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

<br>

<a name="purchase-ticket"></a>

### Purchase ticket

**Method:** websocket

**Endpoint:** ticket:purchaseTicket

**Description:** TEST API for testing ticket purchase without paying. Accessible only for network admins.

**Request:** 

<pre>
{
    "data": {
        "productId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "ticket": {
            "ticketId": string
            "userId": string
            "purchaseDate": timestamp
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

<a name="delete-ticket"></a>

### Delete ticket

**Method:** websocket

**Endpoint:** ticket:deleteTicket

**Description:** TEST API for deleting test ticket. Accessible only for network admins.

**Request:** 

<pre>
{
    "data": {
        "ticketId": string
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

<a name="get-purchased-ticket"></a>

### Get purchased ticket

**Method:** websocket

**Endpoint:** ticket:getPurchasedTicket

**Description:** API returns a ticket that was purchased by a user.

**Request:** 

<pre>
{
    "data": {
        "ticketId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "ticket": {
            "ticketId": string
            "userId": string
            "purchaseDate": timestamp
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

<a name="get-purchased-tickets"></a>

### Get purchased tickets

**Method:** websocket

**Endpoint:** ticket:getPurchasedTickets

**Description:** API returns a list of tickets that were purchased by a user.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "tickets": [{
            "ticketId": string
            "userId": string
            "purchaseDate": timestamp
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

<br>

<a name="on-ticket-purchased-event"></a>

### On ticket purchased event

**Event:** ticket:onTicketPurchased

**Description:** Event notifies user that a ticket was purchased by him.

**Data:** 

<pre>
{
    "data": {
        "ticket": {
            "ticketId": string
            "userId": string
            "purchaseDate": timestamp
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

