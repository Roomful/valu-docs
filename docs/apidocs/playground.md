<br>

<a name="playground-api"></a>

## Playground API

| Endpoint | Method | Description |
|-----|-----|-----|
| [playground:getUserGroups](#playground-get-user-groups) | websocket | Playground: get user groups |
| [playground:createGroup](#playground-create-group) | websocket | Playground: create group |
| [playground:updateGroup](#playground-update-group) | websocket | Playground: update group |
| [playground:deleteGroup](#playground-delete-group) | websocket | Playground: delete group |
| [playground:addGroupParticipant](#playground-add-group-participant) | websocket | Playground: add group participant |
| [playground:deleteGroupParticipant](#playground-delete-group-participant) | websocket | Playground: delete group participant |
| [playground:refreshGroupInviteData](#playground-refresh-group-invite-data) | websocket | Playground: refresh group invite data |
| [playground:groupCreated](#playground-group-created-event) | websocketEvent | Playground group created event |
| [playground:groupUpdated](#playground-group-updated-event) | websocketEvent | Playground group updated event |
| [playground:groupDeleted](#playground-group-deleted-event) | websocketEvent | Playground group deleted event |
| [playground:groupParticipantAdded](#playground-group-participant-added-event) | websocketEvent | Playground group participant added event |
| [playground:groupParticipantDeleted](#playground-group-participant-deleted-event) | websocketEvent | Playground group participant deleted event |

<br>

<a name="playground-get-user-groups"></a>

### Playground: get user groups

**Method:** websocket

**Endpoint:** playground:getUserGroups

**Description:** Endpoint returns list of user playground groups.

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
        "groups": [{
            "id": string
            "name": string
            "groupType": uint32
            "inviteCode": string
            "inviteLink": string
            "roomId": string
            "ownerId": string <span color="#1b1ef7"> // user id of owner</span>
            "participants": [{
                "userId": string
                "role": int <span color="#1b1ef7"> // 0 - Participant, 1 - Owner</span>
            }]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="playground-create-group"></a>

### Playground: create group

**Method:** websocket

**Endpoint:** playground:createGroup

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "description": {
            "name": string
            "groupType": uint32
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "group": {
            "id": string
            "name": string
            "groupType": uint32
            "inviteCode": string
            "inviteLink": string
            "roomId": string
            "ownerId": string <span color="#1b1ef7"> // user id of owner</span>
            "participants": [{
                "userId": string
                "role": int <span color="#1b1ef7"> // 0 - Participant, 1 - Owner</span>
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="playground-update-group"></a>

### Playground: update group

**Method:** websocket

**Endpoint:** playground:updateGroup

**Request:** 

<pre>
{
    "data": {
        "groupId": string
        "description": {
            "name": string
            "groupType": uint32
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

<a name="playground-delete-group"></a>

### Playground: delete group

**Method:** websocket

**Endpoint:** playground:deleteGroup

**Request:** 

<pre>
{
    "data": {
        "groupId": string
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

<a name="playground-add-group-participant"></a>

### Playground: add group participant

**Method:** websocket

**Endpoint:** playground:addGroupParticipant

**Request:** 

<pre>
{
    "data": {
        "groupId": string
        "participant": {
            "userId": string
            "role": int <span color="#1b1ef7"> // 0 - Participant, 1 - Owner</span>
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

<a name="playground-delete-group-participant"></a>

### Playground: delete group participant

**Method:** websocket

**Endpoint:** playground:deleteGroupParticipant

**Request:** 

<pre>
{
    "data": {
        "groupId": string
        "participantId": string
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

<a name="playground-refresh-group-invite-data"></a>

### Playground: refresh group invite data

**Method:** websocket

**Endpoint:** playground:refreshGroupInviteData

**Description:** Endpoint generates new `inviteCode` and `inviteLink` for a playground group.

**Request:** 

<pre>
{
    "data": {
        "groupId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "inviteCode": string
        "inviteLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="playground-group-created-event"></a>

### Playground group created event

**Event:** playground:groupCreated

**Data:** 

<pre>
{
    "data": {
        "group": {
            "id": string
            "name": string
            "groupType": uint32
            "inviteCode": string
            "inviteLink": string
            "roomId": string
            "ownerId": string <span color="#1b1ef7"> // user id of owner</span>
            "participants": [{
                "userId": string
                "role": int <span color="#1b1ef7"> // 0 - Participant, 1 - Owner</span>
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="playground-group-updated-event"></a>

### Playground group updated event

**Event:** playground:groupUpdated

**Data:** 

<pre>
{
    "data": {
        "groupId": string
        "description": {
            "name": string
            "groupType": uint32
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="playground-group-deleted-event"></a>

### Playground group deleted event

**Event:** playground:groupDeleted

**Data:** 

<pre>
{
    "data": {
        "groupId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="playground-group-participant-added-event"></a>

### Playground group participant added event

**Event:** playground:groupParticipantAdded

**Data:** 

<pre>
{
    "data": {
        "groupId": string
        "participant": {
            "userId": string
            "role": int <span color="#1b1ef7"> // 0 - Participant, 1 - Owner</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="playground-group-participant-deleted-event"></a>

### Playground group participant deleted event

**Event:** playground:groupParticipantDeleted

**Data:** 

<pre>
{
    "data": {
        "groupId": string
        "participant": {
            "userId": string
            "role": int <span color="#1b1ef7"> // 0 - Participant, 1 - Owner</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

