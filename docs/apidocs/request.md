<br>

<a name="request-api"></a>

## Request API



API is used to manage user requests, such as: room invitation, friend request and so on.

| Endpoint | Method | Description |
|-----|-----|-----|
| ~~[request:accept](#accept-request)~~ | websocket | Accept request |
| [request:acceptRequest](#accept-user-request) | websocket | Accept user request |
| ~~[request:decline](#decline-request)~~ | websocket | Decline request |
| [request:declineRequest](#decline-user-request) | websocket | Decline user request |
| ~~[request:delete](#delete-request)~~ | websocket | Delete request |
| [request:deleteRequest](#delete-user-request) | websocket | Delete user request |
| ~~[request:list](#get-user-requests)~~ | websocket | Get user requests |
| [request:listRequests](#list-user-requests) | websocket | List user requests |
| ~~[request:new](#new-user-request-event)~~ | websocketEvent | New user request event |
| ~~[request:delete](#delete-user-request-event)~~ | websocketEvent | Delete user request event |
| ~~[request:accept](#accept-user-request-event)~~ | websocketEvent | Accept user request event |
| ~~[request:decline](#decline-user-request-event)~~ | websocketEvent | Decline user request event |
| [request:created](#user-request-created-event) | websocketEvent | User request created event |
| [request:deleted](#user-request-deleted-event) | websocketEvent | User request deleted event |
| [request:accepted](#user-request-accepted-event) | websocketEvent | User request accepted event |
| [request:declined](#user-request-declined-event) | websocketEvent | User request declined event |

<br>

<a name="accept-request"></a>

### Accept request

**Method:** websocket

**Endpoint:** request:accept

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "requestId": string
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

<a name="accept-user-request"></a>

### Accept user request

**Method:** websocket

**Endpoint:** request:acceptRequest

**Request:** 

<pre>
{
    "data": {
        "requestId": string
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

<a name="decline-request"></a>

### Decline request

**Method:** websocket

**Endpoint:** request:decline

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "requestId": string
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

<a name="decline-user-request"></a>

### Decline user request

**Method:** websocket

**Endpoint:** request:declineRequest

**Request:** 

<pre>
{
    "data": {
        "requestId": string
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

<a name="delete-request"></a>

### Delete request

**Method:** websocket

**Endpoint:** request:delete

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "requestId": string
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

<a name="delete-user-request"></a>

### Delete user request

**Method:** websocket

**Endpoint:** request:deleteRequest

**Request:** 

<pre>
{
    "data": {
        "requestId": string
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

<a name="get-user-requests"></a>

### Get user requests

**Method:** websocket

**Endpoint:** request:list

**<span color="red">DEPRECATED</span>** 

**Description:** List of types: 

* Connection - friend request 

* Invitation - invitation request 

* Matchmaking - ideal match request 

* Supporter - become supporter request 

* Recommendation - recommend ideal match request 

* Meeting - invitation to meeting request 

* VerifiableMessage - sign verifiable message request 



**Request:** 

<pre>
{
    "data": {
        "status": string <span color="#1b1ef7"> // pending/accepted/declined</span>
        "type": string <span color="#1b1ef7"> // Connection/Invitation/Matchmaking/Supporter/Recommendation/Meeting</span>
        "category": string <span color="#1b1ef7"> // sent/received</span>
        "offset": int
        "size": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "requests": [{ <a href="#user-request">user request structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-user-requests"></a>

### List user requests

**Method:** websocket

**Endpoint:** request:listRequests

**Description:** List of types: 

* Connection - friend request 

* Invitation - room invitation request 

* Meeting - invitation to meeting request 

* Group - invitation to group request 

* Community - invitation to community request 

* AttestationClaim - endorse attestation claim request 



**Request:** 

<pre>
{
    "data": {
        "status": string <span color="#1b1ef7"> // pending/accepted/declined</span>
        "type": string <span color="#1b1ef7"> // Connection/Invitation/Meeting/Group/Community/AttestationClaim</span>
        "category": string <span color="#1b1ef7"> // sent/received</span>
        "offset": int
        "size": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "requests": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "networkId": string <span color="#1b1ef7"> // Request network id</span>
            "initiatorUserId": string <span color="#1b1ef7"> // Id of user who sent request</span>
            "recipientUserId": string <span color="#1b1ef7"> // Id of user who received request</span>
            "type": string <span color="#1b1ef7"> // Connection/Invitation/Meeting/Community/AttestationClaim</span>
            "status": string <span color="#1b1ef7"> // pending/accepted/declined</span>
            "message": string <span color="#1b1ef7"> // Request message by client</span>
            "source": string <span color="#1b1ef7"> // Request source (like roomId/invitationId for invitation)</span>
            "data": { json data } <span color="#1b1ef7"> // Custom JSON data based on request type</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="new-user-request-event"></a>

### New user request event

**Event:** request:new

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": { <a href="#user-request">user request structure</a> }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-user-request-event"></a>

### Delete user request event

**Event:** request:delete

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": { <a href="#user-request">user request structure</a> }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="accept-user-request-event"></a>

### Accept user request event

**Event:** request:accept

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": { <a href="#user-request">user request structure</a> }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="decline-user-request-event"></a>

### Decline user request event

**Event:** request:decline

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": { <a href="#user-request">user request structure</a> }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-request-created-event"></a>

### User request created event

**Event:** request:created

**Data:** 

<pre>
{
    "data": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "networkId": string <span color="#1b1ef7"> // Request network id</span>
        "initiatorUserId": string <span color="#1b1ef7"> // Id of user who sent request</span>
        "recipientUserId": string <span color="#1b1ef7"> // Id of user who received request</span>
        "type": string <span color="#1b1ef7"> // Connection/Invitation/Meeting/Community/AttestationClaim</span>
        "status": string <span color="#1b1ef7"> // pending/accepted/declined</span>
        "message": string <span color="#1b1ef7"> // Request message by client</span>
        "source": string <span color="#1b1ef7"> // Request source (like roomId/invitationId for invitation)</span>
        "data": { json data } <span color="#1b1ef7"> // Custom JSON data based on request type</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-request-deleted-event"></a>

### User request deleted event

**Event:** request:deleted

**Data:** 

<pre>
{
    "data": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "networkId": string <span color="#1b1ef7"> // Request network id</span>
        "initiatorUserId": string <span color="#1b1ef7"> // Id of user who sent request</span>
        "recipientUserId": string <span color="#1b1ef7"> // Id of user who received request</span>
        "type": string <span color="#1b1ef7"> // Connection/Invitation/Meeting/Community/AttestationClaim</span>
        "status": string <span color="#1b1ef7"> // pending/accepted/declined</span>
        "message": string <span color="#1b1ef7"> // Request message by client</span>
        "source": string <span color="#1b1ef7"> // Request source (like roomId/invitationId for invitation)</span>
        "data": { json data } <span color="#1b1ef7"> // Custom JSON data based on request type</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-request-accepted-event"></a>

### User request accepted event

**Event:** request:accepted

**Data:** 

<pre>
{
    "data": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "networkId": string <span color="#1b1ef7"> // Request network id</span>
        "initiatorUserId": string <span color="#1b1ef7"> // Id of user who sent request</span>
        "recipientUserId": string <span color="#1b1ef7"> // Id of user who received request</span>
        "type": string <span color="#1b1ef7"> // Connection/Invitation/Meeting/Community/AttestationClaim</span>
        "status": string <span color="#1b1ef7"> // pending/accepted/declined</span>
        "message": string <span color="#1b1ef7"> // Request message by client</span>
        "source": string <span color="#1b1ef7"> // Request source (like roomId/invitationId for invitation)</span>
        "data": { json data } <span color="#1b1ef7"> // Custom JSON data based on request type</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-request-declined-event"></a>

### User request declined event

**Event:** request:declined

**Data:** 

<pre>
{
    "data": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "networkId": string <span color="#1b1ef7"> // Request network id</span>
        "initiatorUserId": string <span color="#1b1ef7"> // Id of user who sent request</span>
        "recipientUserId": string <span color="#1b1ef7"> // Id of user who received request</span>
        "type": string <span color="#1b1ef7"> // Connection/Invitation/Meeting/Community/AttestationClaim</span>
        "status": string <span color="#1b1ef7"> // pending/accepted/declined</span>
        "message": string <span color="#1b1ef7"> // Request message by client</span>
        "source": string <span color="#1b1ef7"> // Request source (like roomId/invitationId for invitation)</span>
        "data": { json data } <span color="#1b1ef7"> // Custom JSON data based on request type</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="user-request"></a>

#### User Request

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "initiatorUserId": string
    "recipientUserId": string
    "type": string <span color="#1b1ef7"> // Connection/Invitation/Matchmaking/Supporter/Recommendation/Meeting</span>
    "status": string <span color="#1b1ef7"> // pending/accepted/declined</span>
    "message": string
    "data": {
        "roomId": string <span color="#1b1ef7"> // parameter is used for Invitation and Recommendation requests</span>
        "invitationId": string <span color="#1b1ef7"> // parameter is used for Invitation request</span>
        "meetingId": string <span color="#1b1ef7"> // parameter is used for Meeting request</span>
        "groupId": string <span color="#1b1ef7"> // parameter is used for Group request</span>
        "communityId": string <span color="#1b1ef7"> // parameter is used for Community request</span>
        "messageId": string <span color="#1b1ef7"> // parameter is used for AttestationClaim request</span>
    }
    "fromUser": { <a href="#user-simple">user simple structure</a> }
    "toUser": { <a href="#user-simple">user simple structure</a> }
}
</pre>

<br>

<a name="user-simple"></a>

#### User Simple

<pre>
{
    "id": string
    "firstName": string
    "lastName": string
    "privacyMode": int <span color="#1b1ef7"> // 0 - Default, 1 - Incognito</span>
    "avatar": string
    "avatar3D": { <span color="#1b1ef7"> // field is not returned if empty</span>
        "assetId": string
        "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
        "avatarUrl": string <span color="#1b1ef7"> // url to gbl file (Ready Player Me)</span>
        "avatarUserId": string <span color="#1b1ef7"> // user id for session recovery (Ready Player Me)</span>
    }
    "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
    "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
}
</pre>

