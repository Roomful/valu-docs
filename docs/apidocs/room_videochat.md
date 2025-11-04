<br>

<a name="room-videochat-settings-api"></a>

## Room Videochat Settings API

| Endpoint | Method | Description |
|-----|-----|-----|
| [room:videochat:setRoomVideochatMode](#set-room-videochat-mode) | websocket | Set room videochat mode |
| [room:videochat:setRoomVideochatType](#set-room-videochat-type) | websocket | Set room videochat type |
| [room:videochat:setRoomVideochatEngine](#set-room-videochat-engine) | websocket | Set room videochat engine |
| [room:videochat:setRoomVideochatExcludeListeners](#set-room-videochat-exclude-listeners) | websocket | Set room videochat exclude listeners |
| [room:videochat:setRoomVideochatUsePresentationBoard](#set-room-videochat-use-presentation-board) | websocket | Set room videochat use presentation board |
| [room:videochat:setRoomVideochatEnableStreaming](#set-room-videochat-enable-streaming) | websocket | Set room videochat enable streaming |
| [room:videochat:setRoomVideochatNotificationMode](#set-room-videochat-notification-mode) | websocket | Set room videochat notification mode |
| [room:videochat:setRoomVideochatAutoPromotion](#set-room-videochat-auto-promotion) | websocket | Set room videochat auto promotion |
| [room:videochat:setRoomVideochatLimit](#set-room-videochat-limit) | websocket | Set room videochat limit |

<br>

<a name="set-room-videochat-mode"></a>

### Set room videochat mode

**Method:** websocket

**Endpoint:** room:videochat:setRoomVideochatMode

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "videochatMode": string <span color="#1b1ef7"> // videochat/conference</span>
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

<a name="set-room-videochat-type"></a>

### Set room videochat type

**Method:** websocket

**Endpoint:** room:videochat:setRoomVideochatType

**Description:** Only for admin accounts.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "videochatType": string <span color="#1b1ef7"> // twilio only (peer-to-peer/group/group-small)</span>
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

<a name="set-room-videochat-engine"></a>

### Set room videochat engine

**Method:** websocket

**Endpoint:** room:videochat:setRoomVideochatEngine

**Description:** Only for admin accounts.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
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

<a name="set-room-videochat-exclude-listeners"></a>

### Set room videochat exclude listeners

**Method:** websocket

**Endpoint:** room:videochat:setRoomVideochatExcludeListeners

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "excludeListeners": bool <span color="#1b1ef7"> // don't show non-promoted videochat users</span>
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

<a name="set-room-videochat-use-presentation-board"></a>

### Set room videochat use presentation board

**Method:** websocket

**Endpoint:** room:videochat:setRoomVideochatUsePresentationBoard

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "usePresentationBoard": bool <span color="#1b1ef7"> // use presentation board as share screen media</span>
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

<a name="set-room-videochat-enable-streaming"></a>

### Set room videochat enable streaming

**Method:** websocket

**Endpoint:** room:videochat:setRoomVideochatEnableStreaming

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "enableStreaming": bool <span color="#1b1ef7"> // enable videochat streaming to non participants</span>
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

<a name="set-room-videochat-notification-mode"></a>

### Set room videochat notification mode

**Method:** websocket

**Endpoint:** room:videochat:setRoomVideochatNotificationMode

**Description:** 0 - server default, 1 - do not show, 2 - show, 3 - show and sound

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "notificationMode": int
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

<a name="set-room-videochat-auto-promotion"></a>

### Set room videochat auto promotion

**Method:** websocket

**Endpoint:** room:videochat:setRoomVideochatAutoPromotion

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "autoPromotion": {
            "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
            "autoPromotionLimit": int <span color="#1b1ef7"> // limit of participants with automatic voice permissions</span>
            "autoDemoteOnLimit": bool <span color="#1b1ef7"> // demote participants that were automatically promoted</span>
        }
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

<a name="set-room-videochat-limit"></a>

### Set room videochat limit

**Method:** websocket

**Endpoint:** room:videochat:setRoomVideochatLimit

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "limitSettings": {
            "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
            "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
        }
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

