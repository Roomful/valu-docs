<br>

<a name="user-locator-api"></a>

## User Locator API

| Endpoint | Method | Description |
|-----|-----|-----|
| [social:getUserLocator](#get-user-locator) | websocket | Get user locator |
| [social:getOnlineStatusesForUsers](#get-online-statuses-for-users) | websocket | Get online statuses for users |
| [social:updateLocatorPlayground](#update-locator-playground) | websocket | Update locator playground |
| ~~[social:friendsLocator](#send-friends-locator-event)~~ | websocketEvent | Send friends locator event |
| ~~[social:locatorUpdated](#send-locator-updated-event)~~ | websocketEvent | Send locator updated event |

<br>

<a name="get-user-locator"></a>

### Get user locator

**Method:** websocket

**Endpoint:** social:getUserLocator

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
    "data": {
        "userId": string
        "roomId": string
        "playgroundId": string
        "isOnline": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-online-statuses-for-users"></a>

### Get online statuses for users

**Method:** websocket

**Endpoint:** social:getOnlineStatusesForUsers

**Request:** 

<pre>
{
    "data": {
        "userIds": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "statuses": map[string]bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-locator-playground"></a>

### Update locator playground

**Method:** websocket

**Endpoint:** social:updateLocatorPlayground

**Request:** 

<pre>
{
    "data": {
        "playgroundId": string
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

<a name="send-friends-locator-event"></a>

### Send friends locator event

**Event:** social:friendsLocator

**<span color="red">DEPRECATED</span>** 

**Description:** Event sends to user information about his friends: if they are online and where are they located

**Data:** 

<pre>
{
    "data": {
        "friends": [{
            "userId": string
            "state": string <span color="#1b1ef7"> // online/offline</span>
            "location": {
                "place": string <span color="#1b1ef7"> // lobby/room</span>
                "placeId": string <span color="#1b1ef7"> // roomId in case when place == room</span>
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="send-locator-updated-event"></a>

### Send locator updated event

**Event:** social:locatorUpdated

**<span color="red">DEPRECATED</span>** 

**Description:** Event send information about updated user locator to his friends

**Data:** 

<pre>
{
    "data": {
        "friend": {
            "userId": string
            "state": string <span color="#1b1ef7"> // online/offline</span>
            "location": {
                "place": string <span color="#1b1ef7"> // lobby/room</span>
                "placeId": string <span color="#1b1ef7"> // roomId in case when place == room</span>
            }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

