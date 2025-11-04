<br>

<a name="social-events-api"></a>

## Social events API



API allows to hold events, where users can create sessions, invite participants, join public session of other users and meet in videochat conference.

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/resource/sessionInvitation/{sessionId}](#get-ics-file-for-social-invitation) | webRequest | Get ICS file for social invitation |
| [social:createEvent](#create-social-event) | websocket | Create social event |
| [social:updateEvent](#update-social-event) | websocket | Update social event |
| [social:publishEvent](#publish-social-event) | websocket | Publish social event |
| [social:deleteEvent](#delete-social-event) | websocket | Delete social event |
| [social:getEvent](#get-social-event) | websocket | Get social event |
| [social:getEvents](#get-social-events) | websocket | Get social events |
| [social:createSession](#create-social-session) | websocket | Create social session |
| [social:updateSession](#update-social-session) | websocket | Update social session |
| [social:deleteSession](#delete-social-session) | websocket | Delete social session |
| [social:getSession](#get-social-session) | websocket | Get social session |
| [social:getSessions](#get-social-sessions) | websocket | Get social sessions |
| [social:getPropSessions](#get-prop-social-sessions) | websocket | Get prop social sessions |
| [social:inviteUsersToSession](#invite-users-to-social-session) | websocket | Invite users to social session |
| [social:deleteUserSessionInvitations](#delete-user-social-session-invitations) | websocket | Delete user social session invitations |
| [social:joinSession](#join-social-session) | websocket | Join social session |
| [social:declineSessionJoin](#decline-social-session-join) | websocket | Decline social session join |
| [social:sessionUpdated](#on-social-session-updated-event) | websocketEvent | On social session updated event |
| [social:sessionDeleted](#on-social-session-deleted-event) | websocketEvent | On social session deleted event |

<br>

<a name="get-ics-file-for-social-invitation"></a>

### Get ICS file for social invitation

**HTTP Method:** GET

**Path:** /api/v0/resource/sessionInvitation/{sessionId}

**Description:** Endpoint returns ICS file for social session invitation. 

If session doesn't exist or user doesn't have permissions for social invitation, endpoint returns status code 404 Not Found.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
ICS file
</pre>

<br>

<a name="create-social-event"></a>

### Create social event

**Method:** websocket

**Endpoint:** social:createEvent

**Description:** Available sources for social events:
* Network event - `network:{networkId}`
* Community event - `community:{networkId}:{communityId}`

**Request:** 

<pre>
{
    "data": {
        "source": string
        "event": {
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
        "formSchema": map[string]{ custom structure }
    }
    "event": { "id": string, "date": timestamp }
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

**Method:** websocket

**Endpoint:** social:updateEvent

**Request:** 

<pre>
{
    "data": {
        "eventId": string
        "event": {
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
        "formSchema": map[string]{ custom structure }
    }
    "event": { "id": string, "date": timestamp }
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

<a name="publish-social-event"></a>

### Publish social event

**Method:** websocket

**Endpoint:** social:publishEvent

**Request:** 

<pre>
{
    "data": {
        "eventId": string
    }
    "event": { "id": string, "date": timestamp }
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

**Method:** websocket

**Endpoint:** social:deleteEvent

**Request:** 

<pre>
{
    "data": {
        "eventId": string
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

<a name="get-social-event"></a>

### Get social event

**Method:** websocket

**Endpoint:** social:getEvent

**Request:** 

<pre>
{
    "data": {
        "eventId": string
    }
    "event": { "id": string, "date": timestamp }
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

**Method:** websocket

**Endpoint:** social:getEvents

**Request:** 

<pre>
{
    "data": {
        "source": string
    }
    "event": { "id": string, "date": timestamp }
}
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

<br>

<a name="create-social-session"></a>

### Create social session

**Method:** websocket

**Endpoint:** social:createSession

**Request:** 

<pre>
{
    "data": {
        "session": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "eventId": string
            "ownerId": string
            "roomId": string
            "propId": string
            "sessionType": int <span color="#1b1ef7"> // Public - 0, Private - 1, OpenSlot - 2</span>
            "title": string
            "description": string
            "startDate": timestamp
            "duration": int <span color="#1b1ef7"> // duration in seconds</span>
            "isRecurring": bool
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
        }
        "usersToInvite": [{
            "userId": string
            "facebook": string(fbAppId:fbUserId)
            "emails": [ string ]
            "phones": [ string ]
            "role": int <span color="#1b1ef7"> // Attendee - 0, Presenter - 1, Panelist - 2</span>
        }]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "session": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "eventId": string
            "ownerId": string
            "roomId": string
            "propId": string
            "sessionType": int <span color="#1b1ef7"> // Public - 0, Private - 1, OpenSlot - 2</span>
            "title": string
            "description": string
            "startDate": timestamp
            "duration": int <span color="#1b1ef7"> // duration in seconds</span>
            "isRecurring": bool
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
            "owner": { <a href="#user-simple">user simple structure</a> }
            "invitedUsers": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "role": int
            }]
            "joinedUsers": [{ <a href="#user-simple">user simple structure</a> }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-social-session"></a>

### Update social session

**Method:** websocket

**Endpoint:** social:updateSession

**Request:** 

<pre>
{
    "data": {
        "session": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "eventId": string
            "ownerId": string
            "roomId": string
            "propId": string
            "sessionType": int <span color="#1b1ef7"> // Public - 0, Private - 1, OpenSlot - 2</span>
            "title": string
            "description": string
            "startDate": timestamp
            "duration": int <span color="#1b1ef7"> // duration in seconds</span>
            "isRecurring": bool
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "session": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "eventId": string
            "ownerId": string
            "roomId": string
            "propId": string
            "sessionType": int <span color="#1b1ef7"> // Public - 0, Private - 1, OpenSlot - 2</span>
            "title": string
            "description": string
            "startDate": timestamp
            "duration": int <span color="#1b1ef7"> // duration in seconds</span>
            "isRecurring": bool
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
            "owner": { <a href="#user-simple">user simple structure</a> }
            "invitedUsers": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "role": int
            }]
            "joinedUsers": [{ <a href="#user-simple">user simple structure</a> }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-social-session"></a>

### Delete social session

**Method:** websocket

**Endpoint:** social:deleteSession

**Request:** 

<pre>
{
    "data": {
        "sessionId": string
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

<a name="get-social-session"></a>

### Get social session

**Method:** websocket

**Endpoint:** social:getSession

**Request:** 

<pre>
{
    "data": {
        "sessionId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "session": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "eventId": string
            "ownerId": string
            "roomId": string
            "propId": string
            "sessionType": int <span color="#1b1ef7"> // Public - 0, Private - 1, OpenSlot - 2</span>
            "title": string
            "description": string
            "startDate": timestamp
            "duration": int <span color="#1b1ef7"> // duration in seconds</span>
            "isRecurring": bool
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
            "owner": { <a href="#user-simple">user simple structure</a> }
            "invitedUsers": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "role": int
            }]
            "joinedUsers": [{ <a href="#user-simple">user simple structure</a> }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-social-sessions"></a>

### Get social sessions

**Method:** websocket

**Endpoint:** social:getSessions

**Request:** 

<pre>
{
    "data": {
        "eventId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "sessions": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "eventId": string
            "ownerId": string
            "roomId": string
            "propId": string
            "sessionType": int <span color="#1b1ef7"> // Public - 0, Private - 1, OpenSlot - 2</span>
            "title": string
            "description": string
            "startDate": timestamp
            "duration": int <span color="#1b1ef7"> // duration in seconds</span>
            "isRecurring": bool
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
            "owner": { <a href="#user-simple">user simple structure</a> }
            "invitedUsers": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "role": int
            }]
            "joinedUsers": [{ <a href="#user-simple">user simple structure</a> }]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-prop-social-sessions"></a>

### Get prop social sessions

**Method:** websocket

**Endpoint:** social:getPropSessions

**Description:** API returns 2 nearest events (ongoing or future).

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
        "sessions": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "eventId": string
            "ownerId": string
            "roomId": string
            "propId": string
            "sessionType": int <span color="#1b1ef7"> // Public - 0, Private - 1, OpenSlot - 2</span>
            "title": string
            "description": string
            "startDate": timestamp
            "duration": int <span color="#1b1ef7"> // duration in seconds</span>
            "isRecurring": bool
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
            "owner": { <a href="#user-simple">user simple structure</a> }
            "invitedUsers": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "role": int
            }]
            "joinedUsers": [{ <a href="#user-simple">user simple structure</a> }]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="invite-users-to-social-session"></a>

### Invite users to social session

**Method:** websocket

**Endpoint:** social:inviteUsersToSession

**Request:** 

<pre>
{
    "data": {
        "sessionId": string
        "usersToInvite": [{
            "userId": string
            "facebook": string(fbAppId:fbUserId)
            "emails": [ string ]
            "phones": [ string ]
            "role": int <span color="#1b1ef7"> // Attendee - 0, Presenter - 1, Panelist - 2</span>
        }]
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

<a name="delete-user-social-session-invitations"></a>

### Delete user social session invitations

**Method:** websocket

**Endpoint:** social:deleteUserSessionInvitations

**Request:** 

<pre>
{
    "data": {
        "sessionId": string
        "usersToInvite": [ string ]
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

<a name="join-social-session"></a>

### Join social session

**Method:** websocket

**Endpoint:** social:joinSession

**Request:** 

<pre>
{
    "data": {
        "sessionId": string
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

<a name="decline-social-session-join"></a>

### Decline social session join

**Method:** websocket

**Endpoint:** social:declineSessionJoin

**Request:** 

<pre>
{
    "data": {
        "sessionId": string
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

<a name="on-social-session-updated-event"></a>

### On social session updated event

**Event:** social:sessionUpdated

**Data:** 

<pre>
{
    "data": {
        "session": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "eventId": string
            "ownerId": string
            "roomId": string
            "propId": string
            "sessionType": int <span color="#1b1ef7"> // Public - 0, Private - 1, OpenSlot - 2</span>
            "title": string
            "description": string
            "startDate": timestamp
            "duration": int <span color="#1b1ef7"> // duration in seconds</span>
            "isRecurring": bool
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
            "owner": { <a href="#user-simple">user simple structure</a> }
            "invitedUsers": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "role": int
            }]
            "joinedUsers": [{ <a href="#user-simple">user simple structure</a> }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-social-session-deleted-event"></a>

### On social session deleted event

**Event:** social:sessionDeleted

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

<a name="rgba"></a>

#### RGBA

<pre>
{
    "r": float
    "g": float
    "b": float
    "a": float
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

