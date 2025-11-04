<br>

<a name="gamification-api"></a>

## Gamification API

| Endpoint | Method | Description |
|-----|-----|-----|
| ~~[gamification:addEasterEggProp](#gamification-add-easter-egg-prop)~~ | websocket | Gamification: add easter egg prop |
| [gamification:setEasterEggProp](#gamification-set-easter-egg-prop) | websocket | Gamification: set easter egg prop |
| [gamification:removeEasterEggProp](#gamification-remove-easter-egg-prop) | websocket | Gamification: remove easter egg prop |
| [gamification:getEasterEggProps](#gamification-get-easter-egg-props) | websocket | Gamification: get easter egg props |
| [gamification:tryDiscoverProp](#gamification-try-discover-prop) | websocket | Gamification: try discover prop |
| [gamification:getRanking](#gamification-get-ranking) | websocket | Gamification: get ranking |
| [gamification:deleteUserRanking](#gamification-delete-user-ranking) | websocket | Gamification: delete user ranking |
| [gamification:deleteAllRankings](#gamification-delete-all-rankings) | websocket | Gamification: delete all rankings |
| [gamification:points](#user-points-event) | websocketEvent | User points event |
| [gamification:easterEggPropAdded](#on-easter-egg-prop-added-event) | websocketEvent | On easter egg prop added event |
| [gamification:easterEggPropRemoved](#on-easter-egg-prop-removed-event) | websocketEvent | On easter egg prop removed event |

<br>

<a name="gamification-add-easter-egg-prop"></a>

### Gamification: add easter egg prop

**Method:** websocket

**Endpoint:** gamification:addEasterEggProp

**<span color="red">DEPRECATED</span>** 

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="gamification-set-easter-egg-prop"></a>

### Gamification: set easter egg prop

**Method:** websocket

**Endpoint:** gamification:setEasterEggProp

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "pointsPerAction": map[string]float
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

<a name="gamification-remove-easter-egg-prop"></a>

### Gamification: remove easter egg prop

**Method:** websocket

**Endpoint:** gamification:removeEasterEggProp

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="gamification-get-easter-egg-props"></a>

### Gamification: get easter egg props

**Method:** websocket

**Endpoint:** gamification:getEasterEggProps

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
        "propIds": [ string ] <span color="#1b1ef7"> // deprecated</span>
        "props": [{
            "roomId": string
            "propId": string
            "pointsPerAction": map[string]float
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="gamification-try-discover-prop"></a>

### Gamification: try discover prop

**Method:** websocket

**Endpoint:** gamification:tryDiscoverProp

**Request:** 

<pre>
{
    "data": {
        "user": string
        "roomId": string
        "propId": string
        "action": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "isFirstTimeDiscovered": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="gamification-get-ranking"></a>

### Gamification: get ranking

**Method:** websocket

**Endpoint:** gamification:getRanking

**Description:** If own rank equals 0, it means that user is not participating in ranking because he doesn't have any points yet.

**Request:** 

<pre>
{
    "data": {
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
        "top": [{
            "user": { <a href="#user-simple">user simple structure</a> }
            "rank": int
            "points": float
        }]
        "own": {
            "user": { <a href="#user-simple">user simple structure</a> }
            "rank": int
            "points": float
        }
        "total": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="gamification-delete-user-ranking"></a>

### Gamification: delete user ranking

**Method:** websocket

**Endpoint:** gamification:deleteUserRanking

**Request:** 

<pre>
{
    "data": {
        "userId": string
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

<a name="gamification-delete-all-rankings"></a>

### Gamification: delete all rankings

**Method:** websocket

**Endpoint:** gamification:deleteAllRankings

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-points-event"></a>

### User points event

**Event:** gamification:points

**Data:** 

<pre>
{
    "data": {
        "points": float
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-easter-egg-prop-added-event"></a>

### On easter egg prop added event

**Event:** gamification:easterEggPropAdded

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "pointsPerAction": map[string]float
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-easter-egg-prop-removed-event"></a>

### On easter egg prop removed event

**Event:** gamification:easterEggPropRemoved

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
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

