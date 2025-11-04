<br>

<a name="videochat-handshake-api"></a>

## Videochat handshake API

| Endpoint | Method | Description |
|-----|-----|-----|
| [videochat:requestDirectVideochat](#request-direct-videochat) | websocket | Request direct videochat |
| [videochat:invite](#invite-to-videochat) | websocket | Invite to videochat |
| [videochat:acceptVideochatRequest](#accept-videochat-request) | websocket | Accept videochat request |
| [videochat:declineVideochatRequest](#decline-videochat-request) | websocket | Decline videochat request |
| [videochat:mergeToVideochat](#merge-to-videochat) | websocket | Merge to videochat |
| [videochat:videochatRequested](#videochat-requested-event) | websocketEvent | Videochat requested event |
| [videochat:directVideochatRequestAccepted](#direct-videochat-request-accepted-event) | websocketEvent | Direct videochat request accepted event |
| [videochat:videochatAccepted](#videochat-accepted-event) | websocketEvent | Videochat accepted event |
| [videochat:videochatDeclined](#videochat-declined-event) | websocketEvent | Videochat declined event |

<br>

<a name="request-direct-videochat"></a>

### Request direct videochat

**Method:** websocket

**Endpoint:** videochat:requestDirectVideochat

**Description:** Request direct videochat call with a user. 

If opponent user not found, server will answer with error code 1021. 

If opponent user is not available, server will answer with error code 10011. 

If opponent user is available, server will answer with `videochatRequestId`, which is used for handshake operation.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "videochatRequestId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="invite-to-videochat"></a>

### Invite to videochat

**Method:** websocket

**Endpoint:** videochat:invite

**Description:** Invite user to an existing videochat. 

If opponent user not found, server will answer with error code 1021. 

If opponent user is not available, server will answer with error code 10011. 

If opponent user is available, server will send him an event to join videochat.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "videochatId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "videochatRequestId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="accept-videochat-request"></a>

### Accept videochat request

**Method:** websocket

**Endpoint:** videochat:acceptVideochatRequest

**Description:** Accept incoming videochat call. This API could be requested only by opponent user who is receiving incoming videochat call.

**Request:** 

<pre>
{
    "data": {
        "videochatRequestId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "videochatId": string
        "videochatMode": string <span color="#1b1ef7"> // videochat/conference/networkConference</span>
        "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
        "videochatAppId": string <span color="#1b1ef7"> // appId for agora</span>
        "videochatUrl": string <span color="#1b1ef7"> // videochat server url for livekit</span>
        "room": string
        "identity": string
        "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
        "token": string
        "sharedSecret": string <span color="#1b1ef7"> // shared secret for livekit E2E</span>
        "user": { <a href="#user-simple">user simple structure</a> }
        "permissions": {
            "isModerator": bool <span color="#1b1ef7"> // deprecated, use isOwner and isPanelist instead</span>
            "isOwner": bool <span color="#1b1ef7"> // owner and moderator of the videochat, cannot be demoted</span>
            "isPanelist": bool <span color="#1b1ef7"> // temporary moderator of the videochat</span>
            "isPresenter": bool <span color="#1b1ef7"> // have permission to make a presentation, only one active presenter per videochat</span>
            "isCoPresenter": bool <span color="#1b1ef7"> // have permission to participate and speak in the videochat, appears near the presenter on the presentation board</span>
            "isPromoted": bool <span color="#1b1ef7"> // have permission to participate and speak in the videochat</span>
            "isParticipant": bool <span color="#1b1ef7"> // have permission to participate in the videochat, can ask for a promotion</span>
            "isListener": bool <span color="#1b1ef7"> // have permission to listen the videochat stream, doesn't participate in actual conversation</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="decline-videochat-request"></a>

### Decline videochat request

**Method:** websocket

**Endpoint:** videochat:declineVideochatRequest

**Description:** Decline videochat call. This API could be requested by both, initiator and opponent user.

**Request:** 

<pre>
{
    "data": {
        "videochatRequestId": string
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

<a name="merge-to-videochat"></a>

### Merge to videochat

**Method:** websocket

**Endpoint:** videochat:mergeToVideochat

**Description:** If User A has incoming DIRECT call request (from User B) while in another videochat, he could merge User B to current videochat.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "videochatRequestId": string
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

<a name="videochat-requested-event"></a>

### Videochat requested event

**Event:** videochat:videochatRequested

**Description:** Opponent user will receive this event when he is requested to join videochat. User can accept or decline incoming call using `videochatRequestId`.

**Data:** 

<pre>
{
    "data": {
        "videochatRequestId": string
        "user": { <a href="#user-simple">user simple structure</a> } <span color="#1b1ef7"> // user who initiated videochat request</span>
        "participants": [{ <a href="#user-simple">user simple structure</a> }] <span color="#1b1ef7"> // current videochat participants (max 10)</span>
        "counter": int <span color="#1b1ef7"> // total users in videochat</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="direct-videochat-request-accepted-event"></a>

### Direct videochat request accepted event

**Event:** videochat:directVideochatRequestAccepted

**Description:** Direct videochat initiator user will receive this event when opponent user accepts the call.

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "videochatMode": string <span color="#1b1ef7"> // videochat/conference/networkConference</span>
        "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
        "videochatAppId": string <span color="#1b1ef7"> // appId for agora</span>
        "videochatUrl": string <span color="#1b1ef7"> // videochat server url for livekit</span>
        "room": string
        "identity": string
        "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
        "token": string
        "sharedSecret": string <span color="#1b1ef7"> // shared secret for livekit E2E</span>
        "user": { <a href="#user-simple">user simple structure</a> }
        "permissions": {
            "isModerator": bool <span color="#1b1ef7"> // deprecated, use isOwner and isPanelist instead</span>
            "isOwner": bool <span color="#1b1ef7"> // owner and moderator of the videochat, cannot be demoted</span>
            "isPanelist": bool <span color="#1b1ef7"> // temporary moderator of the videochat</span>
            "isPresenter": bool <span color="#1b1ef7"> // have permission to make a presentation, only one active presenter per videochat</span>
            "isCoPresenter": bool <span color="#1b1ef7"> // have permission to participate and speak in the videochat, appears near the presenter on the presentation board</span>
            "isPromoted": bool <span color="#1b1ef7"> // have permission to participate and speak in the videochat</span>
            "isParticipant": bool <span color="#1b1ef7"> // have permission to participate in the videochat, can ask for a promotion</span>
            "isListener": bool <span color="#1b1ef7"> // have permission to listen the videochat stream, doesn't participate in actual conversation</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-accepted-event"></a>

### Videochat accepted event

**Event:** videochat:videochatAccepted

**Description:** Opponent user will receive this event in all his sockets (if has many) if he accepts the call. This way other sockets would know that the call is already accepted.

**Data:** 

<pre>
{
    "data": {
        "videochatRequestId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-declined-event"></a>

### Videochat declined event

**Event:** videochat:videochatDeclined

**Description:** Initiator user will receive this event when opponent user declines the call. Opponent user will receive this event in all his sockets (if has many) if he declines the call. This way other sockets would know that the call is already declined.

**Data:** 

<pre>
{
    "data": {
        "videochatRequestId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

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

