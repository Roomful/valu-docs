<br>

<a name="adminserver-social-event-api"></a>

## Adminserver: Social: Event API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/jsonRpc/social.createSocialEvent](#create-social-event) | jsonRpc | Create social event |
| [/jsonRpc/social.updateSocialEvent](#update-social-event) | jsonRpc | Update social event |
| [/jsonRpc/social.deleteSocialEvent](#delete-social-event) | jsonRpc | Delete social event |
| [/jsonRpc/social.getSocialEvent](#get-social-event) | jsonRpc | Get social event |
| [/jsonRpc/social.getSocialEvents](#get-social-events) | jsonRpc | Get social events |

<br>

<a name="create-social-event"></a>

### Create social event

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/social.createSocialEvent

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "event": {
        "eventId": string
        "title": string
        "description": string
        "startDate": timestamp
        "endDate": timestamp
        "previewResourceId": string <span color="#1b1ef7"> // resourceId of the preview image for the event</span>
        "roomId": string <span color="#1b1ef7"> // default roomId for event sessions</span>
        "participantLimit": int <span color="#1b1ef7"> // limit on number of participants, 0 means no limit</span>
        "price": float <span color="#1b1ef7"> // price of the event, 0 means free event</span>
        "customData": map[string]{ custom structure } <span color="#1b1ef7"> // custom data for the event, like event venue, url, etc.</span>
    }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "event": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "sourceString": string
            "sourceType": string
            "sourcePk": string
            "networkId": string
            "title": string
            "description": string
            "startDate": timestamp
            "endDate": timestamp
            "previewResourceId": string <span color="#1b1ef7"> // resourceId of the preview image for the event</span>
            "roomId": string <span color="#1b1ef7"> // default roomId for event sessions</span>
            "participantLimit": int <span color="#1b1ef7"> // limit on number of participants, 0 means no limit</span>
            "price": float <span color="#1b1ef7"> // price of the event, 0 means free event</span>
            "customData": map[string]{ custom structure } <span color="#1b1ef7"> // custom data for the event, like event venue, url, etc.</span>
            "status": int <span color="#1b1ef7"> // 0 - Draft, 1 - Published</span>
            "formSchema": map[string]{ custom structure }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-social-event"></a>

### Update social event

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/social.updateSocialEvent

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "event": {
        "eventId": string
        "title": string
        "description": string
        "startDate": timestamp
        "endDate": timestamp
        "previewResourceId": string <span color="#1b1ef7"> // resourceId of the preview image for the event</span>
        "roomId": string <span color="#1b1ef7"> // default roomId for event sessions</span>
        "participantLimit": int <span color="#1b1ef7"> // limit on number of participants, 0 means no limit</span>
        "price": float <span color="#1b1ef7"> // price of the event, 0 means free event</span>
        "customData": map[string]{ custom structure } <span color="#1b1ef7"> // custom data for the event, like event venue, url, etc.</span>
    }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "event": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "sourceString": string
            "sourceType": string
            "sourcePk": string
            "networkId": string
            "title": string
            "description": string
            "startDate": timestamp
            "endDate": timestamp
            "previewResourceId": string <span color="#1b1ef7"> // resourceId of the preview image for the event</span>
            "roomId": string <span color="#1b1ef7"> // default roomId for event sessions</span>
            "participantLimit": int <span color="#1b1ef7"> // limit on number of participants, 0 means no limit</span>
            "price": float <span color="#1b1ef7"> // price of the event, 0 means free event</span>
            "customData": map[string]{ custom structure } <span color="#1b1ef7"> // custom data for the event, like event venue, url, etc.</span>
            "status": int <span color="#1b1ef7"> // 0 - Draft, 1 - Published</span>
            "formSchema": map[string]{ custom structure }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-social-event"></a>

### Delete social event

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/social.deleteSocialEvent

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "eventId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-social-event"></a>

### Get social event

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/social.getSocialEvent

**Request:** 

<pre>
{
    "eventId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "event": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "sourceString": string
            "sourceType": string
            "sourcePk": string
            "networkId": string
            "title": string
            "description": string
            "startDate": timestamp
            "endDate": timestamp
            "previewResourceId": string <span color="#1b1ef7"> // resourceId of the preview image for the event</span>
            "roomId": string <span color="#1b1ef7"> // default roomId for event sessions</span>
            "participantLimit": int <span color="#1b1ef7"> // limit on number of participants, 0 means no limit</span>
            "price": float <span color="#1b1ef7"> // price of the event, 0 means free event</span>
            "customData": map[string]{ custom structure } <span color="#1b1ef7"> // custom data for the event, like event venue, url, etc.</span>
            "status": int <span color="#1b1ef7"> // 0 - Draft, 1 - Published</span>
            "formSchema": map[string]{ custom structure }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-social-events"></a>

### Get social events

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/social.getSocialEvents

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "events": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "sourceString": string
            "sourceType": string
            "sourcePk": string
            "networkId": string
            "title": string
            "description": string
            "startDate": timestamp
            "endDate": timestamp
            "previewResourceId": string <span color="#1b1ef7"> // resourceId of the preview image for the event</span>
            "roomId": string <span color="#1b1ef7"> // default roomId for event sessions</span>
            "participantLimit": int <span color="#1b1ef7"> // limit on number of participants, 0 means no limit</span>
            "price": float <span color="#1b1ef7"> // price of the event, 0 means free event</span>
            "customData": map[string]{ custom structure } <span color="#1b1ef7"> // custom data for the event, like event venue, url, etc.</span>
            "status": int <span color="#1b1ef7"> // 0 - Draft, 1 - Published</span>
            "formSchema": map[string]{ custom structure }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

