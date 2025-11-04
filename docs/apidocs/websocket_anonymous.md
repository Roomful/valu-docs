<br>

<a name="anonymous-websocket-api"></a>

## Anonymous websocket API

| Endpoint | Method | Description |
|-----|-----|-----|
| [anonymousConnection](#anonymous-connection-event) | websocketEvent | Anonymous connection event |
| [anonymousAuthorized](#anonymous-authorized-event) | websocketEvent | Anonymous authorized event |

<br>

<a name="anonymous-connection-event"></a>

### Anonymous connection event

**Event:** anonymousConnection

**Description:** Event is automatically emitted for anonymous socket connection

**Data:** 

<pre>
{
    "data": {
        "isAnonymous": bool
        "network": { <a href="#network">network structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="anonymous-authorized-event"></a>

### Anonymous authorized event

**Event:** anonymousAuthorized

**Description:** Event is emitted when anonymous socket id is present during user authorization. This means that client should be reconnected with new session id (new socket connection required).

**Data:** 

<pre>
{
    "data": {
        "sessionId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="network"></a>

#### Network

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "fullName": string
    "type": string <span color="#1b1ef7"> // Public/Matchmaking/BusinessSocial/NetworkConference/Humanity</span>
    "thumbnail": string <span color="#1b1ef7"> // resourceId</span>
    "parentNetworkId": string <span color="#1b1ef7"> // if not empty, current network is a sub network</span>
}
</pre>

