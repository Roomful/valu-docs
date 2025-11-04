<br>

<a name="resource-reaction-api"></a>

## Resource Reaction API

| Endpoint | Method | Description |
|-----|-----|-----|
| [resource:setReaction](#set-resource-reaction) | websocket | Set resource reaction |
| [resource:deleteReaction](#delete-resource-reaction) | websocket | Delete resource reaction |
| [resource:getReactions](#get-reactions-for-resource) | websocket | Get reactions for resource |
| [resource:getUserOwnReaction](#get-user-own-reaction-for-resource) | websocket | Get user own reaction for resource |
| [resource:reactionUpdated](#on-resource-reaction-updated-in-room-event) | websocketEvent | On resource reaction updated in room event |
| [resource:reactionDeleted](#on-resource-reaction-deleted-in-room-event) | websocketEvent | On resource reaction deleted in room event |

<br>

<a name="set-resource-reaction"></a>

### Set resource reaction

**Method:** websocket

**Endpoint:** resource:setReaction

**Request:** 

<pre>
{
    "data": {
        "resource": string
        "comment": string
        "room": string
        "reaction": string
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

<a name="delete-resource-reaction"></a>

### Delete resource reaction

**Method:** websocket

**Endpoint:** resource:deleteReaction

**Request:** 

<pre>
{
    "data": {
        "resource": string
        "comment": string
        "room": string
        "reaction": string
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

<a name="get-reactions-for-resource"></a>

### Get reactions for resource

**Method:** websocket

**Endpoint:** resource:getReactions

**Request:** 

<pre>
{
    "data": {
        "resourceId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": { <a href="#user-reactions">user reactions structure</a> }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-own-reaction-for-resource"></a>

### Get user own reaction for resource

**Method:** websocket

**Endpoint:** resource:getUserOwnReaction

**Request:** 

<pre>
{
    "data": {
        "resourceId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "ownReaction": string <span color="#1b1ef7"> // current user own reaction</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resource-reaction-updated-in-room-event"></a>

### On resource reaction updated in room event

**Event:** resource:reactionUpdated

**Data:** 

<pre>
{
    "data": {
        "room": string
        "resource": string
        "reaction": {
            "updated": timestamp
            "reaction": string
            "fromUser": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resource-reaction-deleted-in-room-event"></a>

### On resource reaction deleted in room event

**Event:** resource:reactionDeleted

**Data:** 

<pre>
{
    "data": {
        "room": string
        "resource": string
        "reaction": {
            "updated": timestamp
            "reaction": string
            "fromUser": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="user-reactions"></a>

#### User Reactions

<pre>
{
    "reactions": [ [ userId, reaction ] ] <span color="#1b1ef7"> // list of tuples [userId, reaction]</span>
    "total": int <span color="#1b1ef7"> // total reactions for item</span>
    "ownReaction": string <span color="#1b1ef7"> // current user own reaction</span>
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

