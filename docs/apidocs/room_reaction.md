<br>

<a name="room-reaction-api"></a>

## Room Reaction API

| Endpoint | Method | Description |
|-----|-----|-----|
| [room:like](#like-room) | websocket | Like room |
| [room:unlike](#unlike-room) | websocket | Unlike room |
| [room:onAvatarEmotion](#on-avatar-emotion) | websocket | On avatar emotion |
| [room:likedByUser](#user-liked-room-event) | websocketEvent | User liked room event |
| [room:unlikedByUser](#user-unliked-room-event) | websocketEvent | User unliked room event |
| [room:onAvatarEmotion](#on-avatar-emotion-event) | websocketEvent | On avatar emotion event |

<br>

<a name="like-room"></a>

### Like room

**Method:** websocket

**Endpoint:** room:like

**Request:** 

<pre>
{
    "data": {
        "room": string
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

<a name="unlike-room"></a>

### Unlike room

**Method:** websocket

**Endpoint:** room:unlike

**Request:** 

<pre>
{
    "data": {
        "room": string
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

<a name="on-avatar-emotion"></a>

### On avatar emotion

**Method:** websocket

**Endpoint:** room:onAvatarEmotion

**Description:** Api is used to translate 3d avatar emotion to other users in room.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "videochatId": string
        "emotion": int
        "bundle": string
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

<a name="user-liked-room-event"></a>

### User liked room event

**Event:** room:likedByUser

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "userId": string
        "reaction": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-unliked-room-event"></a>

### User unliked room event

**Event:** room:unlikedByUser

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "userId": string
        "reaction": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-avatar-emotion-event"></a>

### On avatar emotion event

**Event:** room:onAvatarEmotion

**Data:** 

<pre>
{
    "data": {
        "userId": string
        "roomId": string
        "videochatId": string
        "emotion": int
        "bundle": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

