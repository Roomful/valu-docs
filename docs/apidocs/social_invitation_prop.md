<br>

<a name="prop-invitations-api"></a>

## Prop Invitations API

| Endpoint | Method | Description |
|-----|-----|-----|
| ~~[social:getPropTeamMembers](#get-prop-team-members)~~ | websocket | Get prop team members |
| [social:getPropInvitations](#get-prop-invitations) | websocket | Get prop invitations |
| [social:listAllPropInvitationsInRoom](#list-all-prop-invitations-in-room) | websocket | List all prop invitations in room |
| ~~[social:inviteManagerToProp](#invite-manager-to-prop)~~ | websocket | Invite manager to prop |
| [social:inviteToProp](#invite-to-prop) | websocket | Invite to prop |
| [social:deletePropInvitation](#delete-prop-invitation) | websocket | Delete prop invitation |
| [room:propTeamMemberInteraction](#prop-team-member-interaction) | websocket | Prop team member interaction |
| [room:propInvitationCreated](#on-prop-invitation-created-event) | websocketEvent | On prop invitation created event |
| [room:propInvitationUpdated](#on-prop-invitation-updated-event) | websocketEvent | On prop invitation updated event |
| [room:propInvitationDeleted](#on-prop-invitation-deleted-event) | websocketEvent | On prop invitation deleted event |
| [room:propTeamMemberInteractionEvent](#on-prop-team-member-interaction-event) | websocketEvent | On prop team member interaction event |

<br>

<a name="get-prop-team-members"></a>

### Get prop team members

**Method:** websocket

**Endpoint:** social:getPropTeamMembers

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, use social:getPropInvitations instead.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "members": [{
            "user": { <a href="#user-simple">user simple structure</a> }
            "videochat": {
                "isActive": bool <span color="#1b1ef7"> // user has active personal conference</span>
                "videochatId": string <span color="#1b1ef7"> // videochat id of users' personal conference</span>
            }
            "company": { <span color="#1b1ef7"> // DEPRECATED, use company info from user structure</span>
                "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
                "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-prop-invitations"></a>

### Get prop invitations

**Method:** websocket

**Endpoint:** social:getPropInvitations

**Description:** Api returns users invited to prop and their personal conference status.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "invitations": [{
            "invitation": { <a href="#prop-invitation-info">prop invitation info structure</a> }
            "videochat": {
                "isActive": bool <span color="#1b1ef7"> // user has active personal conference</span>
                "videochatId": string <span color="#1b1ef7"> // videochat id of users' personal conference</span>
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-all-prop-invitations-in-room"></a>

### List all prop invitations in room

**Method:** websocket

**Endpoint:** social:listAllPropInvitationsInRoom

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
        "invitations": [{
            "roomId": string
            "propId": string
            "userId": string
            "created": timestamp
            "permissions": {
                "view": bool
                "comment": bool
                "contribute": bool
                "edit": bool
                "manage": bool
            }
            "invitedById": string
            "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // custom invitation parameters set by client, like AI agent settings</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="invite-manager-to-prop"></a>

### Invite manager to prop

**Method:** websocket

**Endpoint:** social:inviteManagerToProp

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, use social:inviteToProp instead.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "invitedUser": string
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

<a name="invite-to-prop"></a>

### Invite to prop

**Method:** websocket

**Endpoint:** social:inviteToProp

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "invitedUser": string
        "permissions": {
            "view": bool
            "comment": bool
            "contribute": bool
            "edit": bool
            "manage": bool
        }
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // custom invitation parameters set by client, like AI agent settings</span>
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

<a name="delete-prop-invitation"></a>

### Delete prop invitation

**Method:** websocket

**Endpoint:** social:deletePropInvitation

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "invitedUser": string
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

<a name="prop-team-member-interaction"></a>

### Prop team member interaction

**Method:** websocket

**Endpoint:** room:propTeamMemberInteraction

**Description:** Endpoint is used when client wants to interact with prop team member, e.g. to communicate with team member agent.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "memberIds": [ string ] <span color="#1b1ef7"> // optional, if empty - interaction event will receive all team members of the prop</span>
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // custom interaction parameters set by client</span>
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

<a name="on-prop-invitation-created-event"></a>

### On prop invitation created event

**Event:** room:propInvitationCreated

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "invitation": { <a href="#prop-invitation-info">prop invitation info structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-prop-invitation-updated-event"></a>

### On prop invitation updated event

**Event:** room:propInvitationUpdated

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "invitation": { <a href="#prop-invitation-info">prop invitation info structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-prop-invitation-deleted-event"></a>

### On prop invitation deleted event

**Event:** room:propInvitationDeleted

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "invitation": { <a href="#prop-invitation-info">prop invitation info structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-prop-team-member-interaction-event"></a>

### On prop team member interaction event

**Event:** room:propTeamMemberInteractionEvent

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "userId": string <span color="#1b1ef7"> // user who triggered the interaction event</span>
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // custom interaction parameters set by client</span>
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
        "avatarResourceId": string <span color="#1b1ef7"> // resource id (in case of avatar uploaded to user3DAvatar belonging)</span>
        "avatarUrl": string <span color="#1b1ef7"> // url to gbl file (Ready Player Me)</span>
        "avatarUserId": string <span color="#1b1ef7"> // user id for session recovery (Ready Player Me)</span>
    }
    "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
    "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
}
</pre>

<br>

<a name="prop-invitation-info"></a>

#### Prop Invitation Info

<pre>
{
    "permissions": {
        "view": bool
        "comment": bool
        "contribute": bool
        "edit": bool
        "manage": bool
    }
    "invitedById": string
    "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // custom invitation parameters set by client, like AI agent settings</span>
    "invitedUser": { <a href="#user-simple">user simple structure</a> }
}
</pre>

