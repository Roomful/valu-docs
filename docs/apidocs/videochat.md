<br>

<a name="videochat-api"></a>

## Videochat API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/rpc/videochat.setMicrophoneStatus](#set-microphone-status) | jsonRpc | Set microphone status |
| [videochat:subscribe](#videochat-subscribe) | websocket | Videochat subscribe |
| [videochat:unsubscribe](#videochat-unsubscribe) | websocket | Videochat unsubscribe |
| [videochat:subscribeToRoomVideochats](#subscribe-to-room-videochats) | websocket | Subscribe to room videochats |
| [videochat:unsubscribeFromRoomVideochats](#unsubscribe-from-room-videochats) | websocket | Unsubscribe from room videochats |
| ~~[videochat:subscribeToPlaygroundVideochat](#subscribe-to-playground-videochat-deprecated)~~ | websocket | Subscribe to playground videochat: deprecated |
| ~~[videochat:unsubscribeFromPlaygroundVideochat](#unsubscribe-from-playground-videochat)~~ | websocket | Unsubscribe from playground videochat |
| ~~[videochat:status](#videochat-status-deprecated)~~ | websocket | Videochat status: deprecated |
| [videochat:getStatus](#videochat-status) | websocket | Videochat status |
| [videochat:getTokenForVideochat](#get-token-for-new-videochat) | websocket | Get token for new videochat |
| [videochat:getTokenForPropConference](#get-token-for-prop-conference) | websocket | Get token for prop conference |
| [videochat:getTokenForDirectVideochat](#get-token-for-direct-videochat) | websocket | Get token for direct videochat |
| [videochat:getTokenForPersonalConference](#get-token-for-personal-conference) | websocket | Get token for personal conference |
| [videochat:getTokenForPlaygroundVideochat](#get-token-for-playground-videochat) | websocket | Get token for playground videochat |
| [videochat:getTokenForSpeedDatingVideochat](#get-token-for-speed-dating-videochat) | websocket | Get token for speed dating videochat |
| [videochat:getToken](#get-token-for-videochat) | websocket | Get token for videochat |
| [videochat:getAdditionalTokenForVideochat](#get-additional-token-for-videochat) | websocket | Get additional token for videochat |
| [videochat:getListenerTokenForVideochat](#get-listener-token-for-videochat) | websocket | Get listener token for videochat |
| [videochat:onConnection](#on-participant-connected-to-videochat) | websocket | On participant connected to videochat |
| [videochat:onDisconnection](#on-participant-disconnected-from-videochat) | websocket | On participant disconnected from videochat |
| [videochat:endVideochat](#end-videochat) | websocket | End videochat |
| [videochat:userGoesToBackgroundMode](#videochat-user-goes-to-background-mode) | websocket | Videochat user goes to background mode |
| [videochat:userReturnsFromBackgroundMode](#videochat-user-returns-from-background-mode) | websocket | Videochat user returns from background mode |
| [videochat:changeParticipantPermissions](#change-videochat-participant-permissions) | websocket | Change videochat participant permissions |
| [videochat:requestConferencePromotion](#request-conference-promotion) | websocket | Request conference promotion |
| [videochat:declineConferencePromotion](#decline-conference-promotion) | websocket | Decline conference promotion |
| [videochat:startScreenShare](#start-videochat-screen-share) | websocket | Start videochat screen share |
| [videochat:stopScreenShare](#stop-videochat-screen-share) | websocket | Stop videochat screen share |
| [videochat:muteAll](#videochat-mute-all) | websocket | Videochat mute all |
| [videochat:unmuteAll](#videochat-unmute-all) | websocket | Videochat unmute all |
| [videochat:setMicrophoneStatus](#set-microphone-status) | websocket | Set microphone status |
| [videochat:setHandStatus](#set-hand-status) | websocket | Set hand status |
| [videochat:setPresenterOnlyMode](#set-presenter-only-mode) | websocket | Set presenter only mode |
| [videochat:removeVideoStream](#remove-videochat-video-stream) | websocket | Remove videochat video stream |
| [videochat:turnOffUserOption](#turn-off-user-option) | websocket | Turn off user option |
| [videochat:startLiveStream](#videochat-start-live-stream) | websocket | Videochat start live stream |
| [videochat:stopLiveStream](#videochat-stop-live-stream) | websocket | Videochat stop live stream |
| [videochat:getVideochatInfoOfRoomProps](#get-videochat-info-of-room-props) | websocket | Get videochat info of room props |
| [videochat:broadcastAction](#videochat-broadcast-action) | websocket | Videochat broadcast action |
| [videochat:requestLastBroadcastAction](#videochat-request-last-broadcast-action) | websocket | Videochat request last broadcast action |
| [videochat:setCustomData](#set-videochat-custom-data) | websocket | Set videochat custom data |
| [videochat:getCustomData](#get-videochat-custom-data) | websocket | Get videochat custom data |
| [videochat:searchRoomsWithActiveVideochat](#search-rooms-with-active-videochat) | websocket | Search rooms with active videochat |
| [videochat:started](#videochat-started-event) | websocketEvent | Videochat started event |
| ~~[videochat:videochatStarted](#videochat-started-event-deprecated)~~ | websocketEvent | Videochat started event: deprecated |
| [videochat:videochatEnded](#videochat-ended-event) | websocketEvent | Videochat ended event |
| [videochat:videochatStatusUpdated](#videochat-status-updated-event) | websocketEvent | Videochat status updated event |
| [videochat:identityConnected](#videochat-identity-connected-event) | websocketEvent | Videochat identity connected event |
| [videochat:identityDisconnected](#videochat-identity-disconnected-event) | websocketEvent | Videochat identity disconnected event |
| ~~[videochat:participantConnected](#participant-connected-event)~~ | websocketEvent | Participant connected event |
| ~~[videochat:participantDisconnected](#participant-disconnected-event)~~ | websocketEvent | Participant disconnected event |
| ~~[videochat:participantUpdated](#participant-updated-event)~~ | websocketEvent | Participant updated event |
| [videochat:conferencePromotionRequested](#conference-promotion-requested-event) | websocketEvent | Conference promotion requested event |
| [videochat:conferencePromotionDeclined](#conference-promotion-declined-event) | websocketEvent | Conference promotion declined event |
| [videochat:participantIdentityUpdated](#participant-identity-updated-event) | websocketEvent | Participant identity updated event |
| [videochat:userInvitedToVideochat](#user-invited-to-videochat-event) | websocketEvent | User invited to videochat event |
| [videochat:shareScreenStarted](#share-screen-started-event) | websocketEvent | Share screen started event |
| [videochat:shareScreenStopped](#share-screen-stopped-event) | websocketEvent | Share screen stopped event |
| [videochat:muteAll](#videochat-mute-all-event) | websocketEvent | Videochat mute all event |
| [videochat:unmuteAll](#videochat-unmute-all-event) | websocketEvent | Videochat unmute all event |
| [videochat:removeVideoStream](#remove-videochat-video-stream-event) | websocketEvent | Remove videochat video stream event |
| [videochat:turnOffUserOption](#videochat-turn-off-option-event) | websocketEvent | Videochat turn off option event |
| [videochat:liveStreamStarted](#videochat-live-stream-started-event) | websocketEvent | Videochat live stream started event |
| [videochat:liveStreamStopped](#videochat-live-stream-stopped-event) | websocketEvent | Videochat live stream stopped event |
| [videochat:propVideochatCountChanged](#prop-videochat-count-changed-event) | websocketEvent | Prop videochat count changed event |
| [videochat:action](#videochat-action-event) | websocketEvent | Videochat action event |
| [videochat:customDataUpdated](#videochat-custom-data-updated-event) | websocketEvent | Videochat custom data updated event |

<br>

<a name="set-microphone-status"></a>

### Set microphone status

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/videochat.setMicrophoneStatus

**Description:** Indicate that user has changed microphone status.

Statuses:

* 0 - Off

* 1 - On

* 2 - Not Available

**Headers:** 

X-Session-Id: sessionToken

**Request:** 

<pre>
{
    "videochatId": string
    "identity": string
    "microphoneStatus": int
    "updateDate": timestamp
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="videochat-subscribe"></a>

### Videochat subscribe

**Method:** websocket

**Endpoint:** videochat:subscribe

**Description:** Subscribes user socket to videochat broadcasting channel.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string <span color="#1b1ef7"> // if videochatId is empty</span>
        "propId": string <span color="#1b1ef7"> // if videochatId is empty (requires roomId)</span>
        "playgroundId": string <span color="#1b1ef7"> // if videochatId is empty (requires roomId)</span>
        "groupId": string <span color="#1b1ef7"> // if videochatId is empty</span>
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

<a name="videochat-unsubscribe"></a>

### Videochat unsubscribe

**Method:** websocket

**Endpoint:** videochat:unsubscribe

**Description:** Subscribes user socket to videochat broadcasting channel.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string <span color="#1b1ef7"> // if videochatId is empty</span>
        "propId": string <span color="#1b1ef7"> // if videochatId is empty (requires roomId)</span>
        "playgroundId": string <span color="#1b1ef7"> // if videochatId is empty (requires roomId)</span>
        "groupId": string <span color="#1b1ef7"> // if videochatId is empty</span>
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

<a name="subscribe-to-room-videochats"></a>

### Subscribe to room videochats

**Method:** websocket

**Endpoint:** videochat:subscribeToRoomVideochats

**Description:** Subscribes user socket to all room videochat broadcasting channels.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
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

<a name="unsubscribe-from-room-videochats"></a>

### Unsubscribe from room videochats

**Method:** websocket

**Endpoint:** videochat:unsubscribeFromRoomVideochats

**Description:** Unsubscribes user socket from all room videochat broadcasting channels.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
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

<a name="subscribe-to-playground-videochat-deprecated"></a>

### Subscribe to playground videochat: deprecated

**Method:** websocket

**Endpoint:** videochat:subscribeToPlaygroundVideochat

**<span color="red">DEPRECATED</span>** 

**Description:** Subscribes user socket to playground videochat broadcasting channel.

**Request:** 

<pre>
{
    "data": {
        "playgroundId": string
        "roomId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "videochat": {
            "videochatSourceMode": string <span color="#1b1ef7"> // room/prop/direct/group/playground/speedDating</span>
            "videochatSource": { <span color="#1b1ef7"> // id of object textchat is related to</span>
                "networkId": string
                "roomId": string
                "propId": string
                "userId": string
                "groupId": string
                "playgroundId": string
                "speedDatingId": string
            }
            "videochatId": string
            "videochatMode": string <span color="#1b1ef7"> // videochat/conference/networkConference</span>
            "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
            "videochatName": string <span color="#1b1ef7"> // name from room/prop</span>
            "room": string <span color="#1b1ef7"> // DEPRECATED, use currentRoomId instead</span>
            "currentRoomId": string <span color="#1b1ef7"> // room where the videochat is being held</span>
            "originalRoomId": string <span color="#1b1ef7"> // room where the videochat was started</span>
            "isActive": bool
            "isPresentationActive": bool <span color="#1b1ef7"> // videochat has active presentation ongoing</span>
            "isPresenterOnlyMode": bool <span color="#1b1ef7"> // show only presenter in videochat</span>
            "isStreamEnabled": bool <span color="#1b1ef7"> // videochat could be could be streamed to listeners</span>
            "streamPlaybackUrl": string <span color="#1b1ef7"> // videochat live stream playback url</span>
            "isMuted": bool <span color="#1b1ef7"> // participants are muted by moderator</span>
            "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
            "participants": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "userId": string
                "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each user within videochat</span>
                "identityModels": [{ <span color="#1b1ef7"> // list of active videochat identity models</span>
                    "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                    "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
                    "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
                    "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
                    "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
                    "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
                    "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
                }]
                "identities": [ string ] <span color="#1b1ef7"> // DEPRECATED</span>
                "uids": [ int ] <span color="#1b1ef7"> // DEPRECATED</span>
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
            }]
            "counter": int <span color="#1b1ef7"> // total users in videochat</span>
            "promotionRequests": [ string ] <span color="#1b1ef7"> // list of user ids</span>
            "shareScreenIdentity": { <span color="#1b1ef7"> // for agora screen sharing</span>
                "userId": string
                "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
            }
            "actionState": map[string]{ custom structure } <span color="#1b1ef7"> // state of videochat actions</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="unsubscribe-from-playground-videochat"></a>

### Unsubscribe from playground videochat

**Method:** websocket

**Endpoint:** videochat:unsubscribeFromPlaygroundVideochat

**<span color="red">DEPRECATED</span>** 

**Description:** Unsubscribes user socket from playground videochat broadcasting channel.

**Request:** 

<pre>
{
    "data": {
        "playgroundId": string
        "roomId": string
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

<a name="videochat-status-deprecated"></a>

### Videochat status: deprecated

**Method:** websocket

**Endpoint:** videochat:status

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "videochatId": string <span color="#1b1ef7"> // get videochat status by its id</span>
        "room": string <span color="#1b1ef7"> // get room videochat status, when videochatId is unknown</span>
        "prop": string <span color="#1b1ef7"> // get prop videochat status, when videochatId is unknown</span>
        "groupId": string <span color="#1b1ef7"> // get group videochat status, when videochatId is unknown</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "videochat": {
            "videochatSourceMode": string <span color="#1b1ef7"> // room/prop/direct/group/playground/speedDating</span>
            "videochatSource": { <span color="#1b1ef7"> // id of object textchat is related to</span>
                "networkId": string
                "roomId": string
                "propId": string
                "userId": string
                "groupId": string
                "playgroundId": string
                "speedDatingId": string
            }
            "videochatId": string
            "videochatMode": string <span color="#1b1ef7"> // videochat/conference/networkConference</span>
            "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
            "videochatName": string <span color="#1b1ef7"> // name from room/prop</span>
            "room": string <span color="#1b1ef7"> // DEPRECATED, use currentRoomId instead</span>
            "currentRoomId": string <span color="#1b1ef7"> // room where the videochat is being held</span>
            "originalRoomId": string <span color="#1b1ef7"> // room where the videochat was started</span>
            "isActive": bool
            "isPresentationActive": bool <span color="#1b1ef7"> // videochat has active presentation ongoing</span>
            "isPresenterOnlyMode": bool <span color="#1b1ef7"> // show only presenter in videochat</span>
            "isStreamEnabled": bool <span color="#1b1ef7"> // videochat could be could be streamed to listeners</span>
            "streamPlaybackUrl": string <span color="#1b1ef7"> // videochat live stream playback url</span>
            "isMuted": bool <span color="#1b1ef7"> // participants are muted by moderator</span>
            "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
            "participants": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "userId": string
                "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each user within videochat</span>
                "identityModels": [{ <span color="#1b1ef7"> // list of active videochat identity models</span>
                    "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                    "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
                    "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
                    "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
                    "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
                    "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
                    "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
                }]
                "identities": [ string ] <span color="#1b1ef7"> // DEPRECATED</span>
                "uids": [ int ] <span color="#1b1ef7"> // DEPRECATED</span>
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
            }]
            "counter": int <span color="#1b1ef7"> // total users in videochat</span>
            "promotionRequests": [ string ] <span color="#1b1ef7"> // list of user ids</span>
            "shareScreenIdentity": { <span color="#1b1ef7"> // for agora screen sharing</span>
                "userId": string
                "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
            }
            "actionState": map[string]{ custom structure } <span color="#1b1ef7"> // state of videochat actions</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-status"></a>

### Videochat status

**Method:** websocket

**Endpoint:** videochat:getStatus

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string <span color="#1b1ef7"> // if videochatId is empty</span>
        "propId": string <span color="#1b1ef7"> // if videochatId is empty (requires roomId)</span>
        "playgroundId": string <span color="#1b1ef7"> // if videochatId is empty (requires roomId)</span>
        "groupId": string <span color="#1b1ef7"> // if videochatId is empty</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "videochat": {
            "videochatSourceMode": string <span color="#1b1ef7"> // room/prop/direct/group/playground/speedDating</span>
            "videochatSource": { <span color="#1b1ef7"> // id of object textchat is related to</span>
                "networkId": string
                "roomId": string
                "propId": string
                "userId": string
                "groupId": string
                "playgroundId": string
                "speedDatingId": string
            }
            "videochatId": string
            "videochatMode": string <span color="#1b1ef7"> // videochat/conference/networkConference</span>
            "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
            "videochatName": string <span color="#1b1ef7"> // name from room/prop</span>
            "room": string <span color="#1b1ef7"> // DEPRECATED, use currentRoomId instead</span>
            "currentRoomId": string <span color="#1b1ef7"> // room where the videochat is being held</span>
            "originalRoomId": string <span color="#1b1ef7"> // room where the videochat was started</span>
            "isActive": bool
            "isPresentationActive": bool <span color="#1b1ef7"> // videochat has active presentation ongoing</span>
            "isPresenterOnlyMode": bool <span color="#1b1ef7"> // show only presenter in videochat</span>
            "isStreamEnabled": bool <span color="#1b1ef7"> // videochat could be could be streamed to listeners</span>
            "streamPlaybackUrl": string <span color="#1b1ef7"> // videochat live stream playback url</span>
            "isMuted": bool <span color="#1b1ef7"> // participants are muted by moderator</span>
            "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
            "identities": [{
                "userId": string
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
                "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
                "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
                "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
                "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
                "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
                "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
            }]
            "counter": int <span color="#1b1ef7"> // total users in videochat</span>
            "promotionRequests": [ string ] <span color="#1b1ef7"> // list of user ids</span>
            "shareScreenIdentity": { <span color="#1b1ef7"> // for agora screen sharing</span>
                "userId": string
                "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
            }
            "actionState": map[string]{ custom structure } <span color="#1b1ef7"> // state of videochat actions</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-token-for-new-videochat"></a>

### Get token for new videochat

**Method:** websocket

**Endpoint:** videochat:getTokenForVideochat

**Description:** Api returns identity and token for **room** or **group** videochat. Creates new videochat if it does not exist. 

Token should be used only once. Each time client wants to connect to videochat, it should request new token. 

Api could return following errors:
* 10002 - Not enough videochat permissions
* 10009 - Participant limit reached
* 10010 - Videochat not started by manager



**Request:** 

<pre>
{
    "data": {
        "room": string
        "roomId": string
        "groupId": string
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

<a name="get-token-for-prop-conference"></a>

### Get token for prop conference

**Method:** websocket

**Endpoint:** videochat:getTokenForPropConference

**Description:** Api returns identity and token for **prop** videochat. Creates new prop conference if it does not exist. See [videochat:getTokenForVideochat](#get-token-for-room-videochat) for more info on api restrictions.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "settings": {
            "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means default value)</span>
        }
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

<a name="get-token-for-direct-videochat"></a>

### Get token for direct videochat

**Method:** websocket

**Endpoint:** videochat:getTokenForDirectVideochat

**Description:** Api creates new **direct** videochat with provided participants, and returns identity and token. In order to connect to existing videochat user should use videochat:getToken. See [videochat:getTokenForVideochat](#get-token-for-room-videochat) for more info on api restrictions.

**Request:** 

<pre>
{
    "data": {
        "participants": [ string ] <span color="#1b1ef7"> // list of user ids</span>
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

<a name="get-token-for-personal-conference"></a>

### Get token for personal conference

**Method:** websocket

**Endpoint:** videochat:getTokenForPersonalConference

**Description:** Api creates new **personal conference**, and returns identity and token. Any other user can connect to that conference using videochat:getToken api. See [videochat:getTokenForVideochat](#get-token-for-room-videochat) for more info on api restrictions.

**Request:** 

<pre>
{ empty }
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

<a name="get-token-for-playground-videochat"></a>

### Get token for playground videochat

**Method:** websocket

**Endpoint:** videochat:getTokenForPlaygroundVideochat

**Description:** Api creates new **playground** videochat, and returns identity and token. In order to connect to existing videochat user should use videochat:getToken. See [videochat:getTokenForVideochat](#get-token-for-room-videochat) for more info on api restrictions.

**Request:** 

<pre>
{
    "data": {
        "playgroundId": string
        "roomId": string
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

<a name="get-token-for-speed-dating-videochat"></a>

### Get token for speed dating videochat

**Method:** websocket

**Endpoint:** videochat:getTokenForSpeedDatingVideochat

**Description:** Api creates new **speedDating** videochat, and returns identity and token. In order to connect to existing videochat user should use videochat:getToken. See [videochat:getTokenForVideochat](#get-token-for-room-videochat) for more info on api restrictions.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "speedDatingId": string
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

<a name="get-token-for-videochat"></a>

### Get token for videochat

**Method:** websocket

**Endpoint:** videochat:getToken

**Description:** Api returns identity and token for existing videochat. Token should be used only once. Each time client wants to connect to videochat, it should request new token.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
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

<a name="get-additional-token-for-videochat"></a>

### Get additional token for videochat

**Method:** websocket

**Endpoint:** videochat:getAdditionalTokenForVideochat

**Description:** Api returns additional identity and token for videochat. Additional identity is used for Agora screen sharing, as it does not support multitrack. Only one additional identity could be generated for user:socket pair.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "identity": string <span color="#1b1ef7"> // different from original identity</span>
        "uid": int <span color="#1b1ef7"> // numeric identity for agora / different from original uid</span>
        "token": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-listener-token-for-videochat"></a>

### Get listener token for videochat

**Method:** websocket

**Endpoint:** videochat:getListenerTokenForVideochat

**Description:** Api returns listener token for existing videochat. Videochat listener doesn't participate in videochat, but can watch/listen its stream.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
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
        "token": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-participant-connected-to-videochat"></a>

### On participant connected to videochat

**Method:** websocket

**Endpoint:** videochat:onConnection

**Description:** Client informs server that it is connected to the videochat. This event is mentioned to duplicate (ensure that at least one is received) events from videochat engine server (twilio/agora/livekit).

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "identity": string
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

<a name="on-participant-disconnected-from-videochat"></a>

### On participant disconnected from videochat

**Method:** websocket

**Endpoint:** videochat:onDisconnection

**Description:** Client informs server that it is disconnected from the videochat. This event is mentioned to duplicate (ensure that at least one is received) events from videochat engine server (twilio/agora/livekit).

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "identity": string
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

<a name="end-videochat"></a>

### End videochat

**Method:** websocket

**Endpoint:** videochat:endVideochat

**Description:** Api ends videochat. Available for direct call participants and conference moderators.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
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

<a name="videochat-user-goes-to-background-mode"></a>

### Videochat user goes to background mode

**Method:** websocket

**Endpoint:** videochat:userGoesToBackgroundMode

**Description:** Sets videochat identity connection status to `in-background`. If user is in background mode and socket disconnects:

* Keep user in videochat participant list.

* Keep user role (presenter, co-presenter, etc).

* Do not send `videochat:participantDisconnected` event.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
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

<a name="videochat-user-returns-from-background-mode"></a>

### Videochat user returns from background mode

**Method:** websocket

**Endpoint:** videochat:userReturnsFromBackgroundMode

**Description:** 

* Sets videochat identity connection status to `active`.

* Changes videochat identity socket to a new value.

* Subscribes new socket to videochat events.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "identity": string
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

<a name="change-videochat-participant-permissions"></a>

### Change videochat participant permissions

**Method:** websocket

**Endpoint:** videochat:changeParticipantPermissions

**Description:** Room owners are videochat moderators by default. Moderator can add any permissions to other users. Presenter can transfer presentation permissions or promote/demote participant voice/video. Only one participant with presenter permission can be presented in the videochat.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "room": string <span color="#1b1ef7"> // deprecated, use videochatId instead</span>
        "targetUser": string
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

<a name="request-conference-promotion"></a>

### Request conference promotion

**Method:** websocket

**Endpoint:** videochat:requestConferencePromotion

**Description:** Videochat participant can request promotion (in order to ask question to presenter).

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "room": string <span color="#1b1ef7"> // deprecated, use videochatId instead</span>
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

<a name="decline-conference-promotion"></a>

### Decline conference promotion

**Method:** websocket

**Endpoint:** videochat:declineConferencePromotion

**Description:** Promotion request could be declined by moderator, presenter or by user himself.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "room": string <span color="#1b1ef7"> // deprecated, use videochatId instead</span>
        "targetUser": string
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

<a name="start-videochat-screen-share"></a>

### Start videochat screen share

**Method:** websocket

**Endpoint:** videochat:startScreenShare

**Description:** Notify server and other participants on screen sharing start.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
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

<a name="stop-videochat-screen-share"></a>

### Stop videochat screen share

**Method:** websocket

**Endpoint:** videochat:stopScreenShare

**Description:** Notify server and other participants on screen sharing stop.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "identity": string
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

<a name="videochat-mute-all"></a>

### Videochat mute all

**Method:** websocket

**Endpoint:** videochat:muteAll

**Description:** Request all participant identities (except initiator) to mute microphones. Server doesn't change microphone statuses, but sets isMuted in videochat model.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "needMuteModerator": bool
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

<a name="videochat-unmute-all"></a>

### Videochat unmute all

**Method:** websocket

**Endpoint:** videochat:unmuteAll

**Description:** Request previously muted identities to unmute microphones.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
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

<a name="set-microphone-status"></a>

### Set microphone status

**Method:** websocket

**Endpoint:** videochat:setMicrophoneStatus

**Description:** Indicate that user has changed microphone status.

Statuses:

* 0 - Off

* 1 - On

* 2 - Not Available

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "updateDate": timestamp
        "microphoneStatus": int
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

<a name="set-hand-status"></a>

### Set hand status

**Method:** websocket

**Endpoint:** videochat:setHandStatus

**Description:** Indicate that user has changed hand status.

Statuses:

* 0 - Off

* 1 - Low

* 2 - Raise

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "handStatus": int
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

<a name="set-presenter-only-mode"></a>

### Set presenter only mode

**Method:** websocket

**Endpoint:** videochat:setPresenterOnlyMode

**Description:** Indicate that only presenter should be shown to other users (if set to true).

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "isPresenterOnlyMode": bool
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

<a name="remove-videochat-video-stream"></a>

### Remove videochat video stream

**Method:** websocket

**Endpoint:** videochat:removeVideoStream

**Description:** Indicate that videochat participant has removed video stream. This api is needed because Agora iOS SDK doesn't receive event when user repeatedly removes video stream.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
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

<a name="turn-off-user-option"></a>

### Turn off user option

**Method:** websocket

**Endpoint:** videochat:turnOffUserOption

**Description:** Videochat moderator or presenter can call this api to ask target client to turn off some of his options.

Videochat options:

* 0 - All

* 1 - Camera

* 2 - Microphone

* 3 - Screen Share

* 4 - Raised Hand

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "targetUser": string
        "option": int
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

<a name="videochat-start-live-stream"></a>

### Videochat start live stream

**Method:** websocket

**Endpoint:** videochat:startLiveStream

**Description:** Videochat moderator can call this api to start MUX live stream.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
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

<a name="videochat-stop-live-stream"></a>

### Videochat stop live stream

**Method:** websocket

**Endpoint:** videochat:stopLiveStream

**Description:** Videochat moderator can call this api to stop MUX live stream.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
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

<a name="get-videochat-info-of-room-props"></a>

### Get videochat info of room props

**Method:** websocket

**Endpoint:** videochat:getVideochatInfoOfRoomProps

**Description:** Get information of all running prop videochats in the room.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "videochats": [{
            "videochatId": string
            "propId": string
            "participantCount": int
            "videochatLimit": int
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-broadcast-action"></a>

### Videochat broadcast action

**Method:** websocket

**Endpoint:** videochat:broadcastAction

**Description:** Api broadcasts action (`videochat:action`) to all participants in the videochat. Same as `videochat:sync:presentationAction` but doesn't require presentation to be started.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "route": string
        "action": string
        "dataKey": string <span color="#1b1ef7"> // if provided - data will be stored in videochat action state</span>
        "data": map[string]{ custom structure }
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

<a name="videochat-request-last-broadcast-action"></a>

### Videochat request last broadcast action

**Method:** websocket

**Endpoint:** videochat:requestLastBroadcastAction

**Description:** Request last broadcast action. If event exists, its data will be sent to socket. If event doesn't exist, nothing happens. Same as `videochat:sync:requestLastSyncEvent` but doesn't require presentation to be started.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
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

<a name="set-videochat-custom-data"></a>

### Set videochat custom data

**Method:** websocket

**Endpoint:** videochat:setCustomData

**Description:** Api sets custom data to videochat and broadcasts it to all participants.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "data": map[string]{ custom structure }
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

<a name="get-videochat-custom-data"></a>

### Get videochat custom data

**Method:** websocket

**Endpoint:** videochat:getCustomData

**Description:** Api returns videochat custom data.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "videochatId": string
        "data": map[string]{ custom structure }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-rooms-with-active-videochat"></a>

### Search rooms with active videochat

**Method:** websocket

**Endpoint:** videochat:searchRoomsWithActiveVideochat

**Description:** Api returns list of rooms that have currently active videochats.

**Request:** 

<pre>
{
    "data": {
        "filter": string <span color="#1b1ef7"> // explorer/public/private/shared/favourite</span>
        "query": string
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
        "rooms": [{
            "id": string
            "name": string
            "tags": [ string ]
            "thumbnailId": string
            "subscriptionStatus": string
            "ownerIds": [ string ]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-started-event"></a>

### Videochat started event

**Event:** videochat:started

**Data:** 

<pre>
{
    "data": {
        "videochatSourceMode": string <span color="#1b1ef7"> // room/prop/direct/group/playground/speedDating</span>
        "videochatSource": { <span color="#1b1ef7"> // id of object textchat is related to</span>
            "networkId": string
            "roomId": string
            "propId": string
            "userId": string
            "groupId": string
            "playgroundId": string
            "speedDatingId": string
        }
        "videochatId": string
        "videochatMode": string <span color="#1b1ef7"> // videochat/conference/networkConference</span>
        "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
        "videochatName": string <span color="#1b1ef7"> // name from room/prop</span>
        "room": string <span color="#1b1ef7"> // DEPRECATED, use currentRoomId instead</span>
        "currentRoomId": string <span color="#1b1ef7"> // room where the videochat is being held</span>
        "originalRoomId": string <span color="#1b1ef7"> // room where the videochat was started</span>
        "isActive": bool
        "isPresentationActive": bool <span color="#1b1ef7"> // videochat has active presentation ongoing</span>
        "isPresenterOnlyMode": bool <span color="#1b1ef7"> // show only presenter in videochat</span>
        "isStreamEnabled": bool <span color="#1b1ef7"> // videochat could be could be streamed to listeners</span>
        "streamPlaybackUrl": string <span color="#1b1ef7"> // videochat live stream playback url</span>
        "isMuted": bool <span color="#1b1ef7"> // participants are muted by moderator</span>
        "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
        "identities": [{
            "userId": string
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
            "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
            "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
            "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
            "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
            "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
            "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
            "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
        }]
        "counter": int <span color="#1b1ef7"> // total users in videochat</span>
        "promotionRequests": [ string ] <span color="#1b1ef7"> // list of user ids</span>
        "shareScreenIdentity": { <span color="#1b1ef7"> // for agora screen sharing</span>
            "userId": string
            "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
            "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
        }
        "actionState": map[string]{ custom structure } <span color="#1b1ef7"> // state of videochat actions</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-started-event-deprecated"></a>

### Videochat started event: deprecated

**Event:** videochat:videochatStarted

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "videochatSourceMode": string <span color="#1b1ef7"> // room/prop/direct/group/playground/speedDating</span>
        "videochatSource": { <span color="#1b1ef7"> // id of object textchat is related to</span>
            "networkId": string
            "roomId": string
            "propId": string
            "userId": string
            "groupId": string
            "playgroundId": string
            "speedDatingId": string
        }
        "videochatId": string
        "videochatMode": string <span color="#1b1ef7"> // videochat/conference/networkConference</span>
        "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
        "videochatName": string <span color="#1b1ef7"> // name from room/prop</span>
        "room": string <span color="#1b1ef7"> // DEPRECATED, use currentRoomId instead</span>
        "currentRoomId": string <span color="#1b1ef7"> // room where the videochat is being held</span>
        "originalRoomId": string <span color="#1b1ef7"> // room where the videochat was started</span>
        "isActive": bool
        "isPresentationActive": bool <span color="#1b1ef7"> // videochat has active presentation ongoing</span>
        "isPresenterOnlyMode": bool <span color="#1b1ef7"> // show only presenter in videochat</span>
        "isStreamEnabled": bool <span color="#1b1ef7"> // videochat could be could be streamed to listeners</span>
        "streamPlaybackUrl": string <span color="#1b1ef7"> // videochat live stream playback url</span>
        "isMuted": bool <span color="#1b1ef7"> // participants are muted by moderator</span>
        "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
        "participants": [{
            "user": { <a href="#user-simple">user simple structure</a> }
            "userId": string
            "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each user within videochat</span>
            "identityModels": [{ <span color="#1b1ef7"> // list of active videochat identity models</span>
                "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
                "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
                "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
                "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
                "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
                "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
            }]
            "identities": [ string ] <span color="#1b1ef7"> // DEPRECATED</span>
            "uids": [ int ] <span color="#1b1ef7"> // DEPRECATED</span>
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
        }]
        "counter": int <span color="#1b1ef7"> // total users in videochat</span>
        "promotionRequests": [ string ] <span color="#1b1ef7"> // list of user ids</span>
        "shareScreenIdentity": { <span color="#1b1ef7"> // for agora screen sharing</span>
            "userId": string
            "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
            "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
        }
        "actionState": map[string]{ custom structure } <span color="#1b1ef7"> // state of videochat actions</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-ended-event"></a>

### Videochat ended event

**Event:** videochat:videochatEnded

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "room": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-status-updated-event"></a>

### Videochat status updated event

**Event:** videochat:videochatStatusUpdated

**Data:** 

<pre>
{
    "data": {
        "videochatSourceMode": string <span color="#1b1ef7"> // room/prop/direct/group/playground/speedDating</span>
        "videochatSource": { <span color="#1b1ef7"> // id of object textchat is related to</span>
            "networkId": string
            "roomId": string
            "propId": string
            "userId": string
            "groupId": string
            "playgroundId": string
            "speedDatingId": string
        }
        "videochatId": string
        "videochatMode": string <span color="#1b1ef7"> // videochat/conference/networkConference</span>
        "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
        "videochatName": string <span color="#1b1ef7"> // name from room/prop</span>
        "room": string <span color="#1b1ef7"> // DEPRECATED, use currentRoomId instead</span>
        "currentRoomId": string <span color="#1b1ef7"> // room where the videochat is being held</span>
        "originalRoomId": string <span color="#1b1ef7"> // room where the videochat was started</span>
        "isActive": bool
        "isPresentationActive": bool <span color="#1b1ef7"> // videochat has active presentation ongoing</span>
        "isPresenterOnlyMode": bool <span color="#1b1ef7"> // show only presenter in videochat</span>
        "isStreamEnabled": bool <span color="#1b1ef7"> // videochat could be could be streamed to listeners</span>
        "streamPlaybackUrl": string <span color="#1b1ef7"> // videochat live stream playback url</span>
        "isMuted": bool <span color="#1b1ef7"> // participants are muted by moderator</span>
        "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-identity-connected-event"></a>

### Videochat identity connected event

**Event:** videochat:identityConnected

**Description:** Event is triggered when user identity is connected to videochat.

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "participantCount": int <span color="#1b1ef7"> // total users in videochat</span>
        "userId": string
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
        "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
        "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
        "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
        "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
        "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
        "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
        "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-identity-disconnected-event"></a>

### Videochat identity disconnected event

**Event:** videochat:identityDisconnected

**Description:** Event is triggered when user identity is disconnected from videochat.

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "userId": string
        "identity": string
        "participantCount": int <span color="#1b1ef7"> // total users in videochat</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="participant-connected-event"></a>

### Participant connected event

**Event:** videochat:participantConnected

**<span color="red">DEPRECATED</span>** 

**Description:** Event is triggered when new user is connected to videochat. When user connects to videochat from second device/tab, `videochat:participantUpdated` event is triggered instead.

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "room": string
        "participant": {
            "user": { <a href="#user-simple">user simple structure</a> }
            "userId": string
            "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each user within videochat</span>
            "identityModels": [{ <span color="#1b1ef7"> // list of active videochat identity models</span>
                "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
                "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
                "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
                "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
                "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
                "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
            }]
            "identities": [ string ] <span color="#1b1ef7"> // DEPRECATED</span>
            "uids": [ int ] <span color="#1b1ef7"> // DEPRECATED</span>
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
        "counter": int <span color="#1b1ef7"> // total users in videochat</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="participant-disconnected-event"></a>

### Participant disconnected event

**Event:** videochat:participantDisconnected

**<span color="red">DEPRECATED</span>** 

**Description:** Event is triggered when user is disconnected from videochat. If user has multiple devices/tabs connected to videochat and one of these connections disconnects - `videochat:participantUpdated` event is triggered instead.

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "room": string
        "participant": {
            "user": { <a href="#user-simple">user simple structure</a> }
            "userId": string
            "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each user within videochat</span>
            "identityModels": [{ <span color="#1b1ef7"> // list of active videochat identity models</span>
                "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
                "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
                "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
                "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
                "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
                "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
            }]
            "identities": [ string ] <span color="#1b1ef7"> // DEPRECATED</span>
            "uids": [ int ] <span color="#1b1ef7"> // DEPRECATED</span>
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
        "counter": int <span color="#1b1ef7"> // total users in videochat</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="participant-updated-event"></a>

### Participant updated event

**Event:** videochat:participantUpdated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "room": string
        "participant": {
            "user": { <a href="#user-simple">user simple structure</a> }
            "userId": string
            "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each user within videochat</span>
            "identityModels": [{ <span color="#1b1ef7"> // list of active videochat identity models</span>
                "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
                "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
                "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
                "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
                "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
                "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
            }]
            "identities": [ string ] <span color="#1b1ef7"> // DEPRECATED</span>
            "uids": [ int ] <span color="#1b1ef7"> // DEPRECATED</span>
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
        "counter": int <span color="#1b1ef7"> // total users in videochat</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="conference-promotion-requested-event"></a>

### Conference promotion requested event

**Event:** videochat:conferencePromotionRequested

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "room": string
        "participant": {
            "user": { <a href="#user-simple">user simple structure</a> }
            "userId": string
            "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each user within videochat</span>
            "identityModels": [{ <span color="#1b1ef7"> // list of active videochat identity models</span>
                "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
                "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
                "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
                "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
                "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
                "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
            }]
            "identities": [ string ] <span color="#1b1ef7"> // DEPRECATED</span>
            "uids": [ int ] <span color="#1b1ef7"> // DEPRECATED</span>
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
        "counter": int <span color="#1b1ef7"> // total users in videochat</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="conference-promotion-declined-event"></a>

### Conference promotion declined event

**Event:** videochat:conferencePromotionDeclined

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "room": string
        "participant": {
            "user": { <a href="#user-simple">user simple structure</a> }
            "userId": string
            "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each user within videochat</span>
            "identityModels": [{ <span color="#1b1ef7"> // list of active videochat identity models</span>
                "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
                "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
                "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
                "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
                "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
                "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
                "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
            }]
            "identities": [ string ] <span color="#1b1ef7"> // DEPRECATED</span>
            "uids": [ int ] <span color="#1b1ef7"> // DEPRECATED</span>
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
        "counter": int <span color="#1b1ef7"> // total users in videochat</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="participant-identity-updated-event"></a>

### Participant identity updated event

**Event:** videochat:participantIdentityUpdated

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "userId": string
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
        "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
        "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
        "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each identity within videochat</span>
        "lastUpdated": timestamp <span color="#1b1ef7"> // status last updated timestamp</span>
        "connectionStatus": int <span color="#1b1ef7"> // show connection status: 1 - active, 2 - in-background</span>
        "microphoneStatus": int <span color="#1b1ef7"> // show device microphone status</span>
        "handStatus": int <span color="#1b1ef7"> // show if user wants to attract attention of the presenter/moderator</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-invited-to-videochat-event"></a>

### User invited to videochat event

**Event:** videochat:userInvitedToVideochat

**Description:** Event will be sent to videochat participants when new user is invited to the videochat.

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "invitedUser": { <a href="#user-simple">user simple structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="share-screen-started-event"></a>

### Share screen started event

**Event:** videochat:shareScreenStarted

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "userId": string
        "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
        "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="share-screen-stopped-event"></a>

### Share screen stopped event

**Event:** videochat:shareScreenStopped

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "userId": string
        "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
        "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-mute-all-event"></a>

### Videochat mute all event

**Event:** videochat:muteAll

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-unmute-all-event"></a>

### Videochat unmute all event

**Event:** videochat:unmuteAll

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="remove-videochat-video-stream-event"></a>

### Remove videochat video stream event

**Event:** videochat:removeVideoStream

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "userId": string
        "identity": string <span color="#1b1ef7"> // represents single user connection to videochat</span>
        "uid": int <span color="#1b1ef7"> // numeric identity for agora</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-turn-off-option-event"></a>

### Videochat turn off option event

**Event:** videochat:turnOffUserOption

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "option": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-live-stream-started-event"></a>

### Videochat live stream started event

**Event:** videochat:liveStreamStarted

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-live-stream-stopped-event"></a>

### Videochat live stream stopped event

**Event:** videochat:liveStreamStopped

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="prop-videochat-count-changed-event"></a>

### Prop videochat count changed event

**Event:** videochat:propVideochatCountChanged

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "propId": string
        "participantCount": int
        "videochatLimit": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-action-event"></a>

### Videochat action event

**Event:** videochat:action

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "route": string
        "action": string
        "dataKey": string <span color="#1b1ef7"> // if provided - data will be stored in videochat action state</span>
        "data": map[string]{ custom structure }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="videochat-custom-data-updated-event"></a>

### Videochat custom data updated event

**Event:** videochat:customDataUpdated

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "data": map[string]{ custom structure }
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

