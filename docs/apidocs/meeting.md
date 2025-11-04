<br>

<a name="meeting-api"></a>

## Meeting API

| Endpoint | Method | Description |
|-----|-----|-----|
| ~~[meeting:create](#create-meeting-deprecated)~~ | websocket | Create meeting: deprecated |
| ~~[meeting:update](#update-meeting-deprecated)~~ | websocket | Update meeting: deprecated |
| ~~[meeting:delete](#delete-meeting-deprecated)~~ | websocket | Delete meeting: deprecated |
| ~~[meeting:get](#get-meeting-deprecated)~~ | websocket | Get meeting: deprecated |
| ~~[meeting:checkPropHasMeetingsOrSocialSessions](#check-prop-has-meetings-or-social-sessions)~~ | websocket | Check prop has meetings or social sessions |
| [meeting:listUserMeetingCounts](#list-user-meeting-counts) | websocket | List user meeting counts |
| ~~[meeting:listUserMeetingsInDateRange](#list-user-meetings-in-date-range)~~ | websocket | List user meetings in date range |
| [meeting:acceptMeetingRequest](#accept-meeting-request) | websocket | Accept meeting request |
| [meeting:declineMeetingRequest](#decline-meeting-request) | websocket | Decline meeting request |
| [meeting:createMeeting](#create-meeting) | websocket | Create meeting |
| [meeting:updateMeeting](#update-meeting) | websocket | Update meeting |
| [meeting:deleteMeeting](#delete-meeting) | websocket | Delete meeting |
| [meeting:getMeeting](#get-meeting) | websocket | Get meeting |
| [meeting:listUserMeetings](#list-user-meetings) | websocket | List user meetings |
| [meeting:getTimeSlotsForMeeting](#get-time-slots-for-meeting) | websocket | Get time slots for meeting |
| [meeting:getMeetingTimeSlotsForMonth](#get-meeting-time-slots-for-month) | websocket | Get meeting time slots for month |
| [meeting:setUserAvailability](#set-user-availability) | websocket | Set user availability |
| [meeting:getUserAvailabilityPattern](#get-user-availability-pattern) | websocket | Get user availability pattern |
| [meeting:getUserAvailabilityForDay](#get-user-availability-for-day) | websocket | Get user availability for day |
| [meeting:getUserAvailabilityForWeek](#get-user-availability-for-week) | websocket | Get user availability for week |
| [meeting:getUserAvailabilityForMonth](#get-user-availability-for-month) | websocket | Get user availability for month |
| ~~[meeting:meetingUpdated](#on-meeting-updated-event)~~ | websocketEvent | On meeting updated event |
| ~~[meeting:meetingDeleted](#on-meeting-deleted-event)~~ | websocketEvent | On meeting deleted event |
| [meeting:onMeetingCreated](#on-meeting-created-event) | websocketEvent | On meeting created event |
| [meeting:onMeetingDeleted](#on-meeting-deleted-event) | websocketEvent | On meeting deleted event |
| [meeting:onMeetingUpdated](#on-meeting-updated-event) | websocketEvent | On meeting updated event |

<br>

<a name="create-meeting-deprecated"></a>

### Create meeting: deprecated

**Method:** websocket

**Endpoint:** meeting:create

**<span color="red">DEPRECATED</span>** 

**Description:** API will create "Meeting" requests to all invited users. 

* All invited users will have "received" status for meeting; 

* By accepting request invited user will receive "accepted" status for meeting; 

* By declining request invited user will receive "declined" status for meeting; 



**Request:** 

<pre>
{
    "data": {
        "meeting": {
            "startDate": timestamp
            "endDate": timestamp
            "subject": string
            "roomId": string
            "propId": string
            "color": { <a href="#rgba">rgba structure</a> }
            "invitedUserIds": [ string ]
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "meeting": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "startDate": timestamp
            "endDate": timestamp
            "subject": string
            "roomId": string
            "propId": string
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
            "room": {
                "id": string
                "title": string
                "thumbnail": { <a href="#resource">resource structure</a> }
            }
            "prop": {
                "id": string
                "title": string
            }
            "organizer": { <a href="#user-simple">user simple structure</a> }
            "invitedUsers": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "status": string
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-meeting-deprecated"></a>

### Update meeting: deprecated

**Method:** websocket

**Endpoint:** meeting:update

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "meetingId": string
        "meeting": {
            "subject": string
            "roomId": string
            "propId": string
            "color": { <a href="#rgba">rgba structure</a> }
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "meeting": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "startDate": timestamp
            "endDate": timestamp
            "subject": string
            "roomId": string
            "propId": string
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
            "room": {
                "id": string
                "title": string
                "thumbnail": { <a href="#resource">resource structure</a> }
            }
            "prop": {
                "id": string
                "title": string
            }
            "organizer": { <a href="#user-simple">user simple structure</a> }
            "invitedUsers": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "status": string
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-meeting-deprecated"></a>

### Delete meeting: deprecated

**Method:** websocket

**Endpoint:** meeting:delete

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "meetingId": string
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

<a name="get-meeting-deprecated"></a>

### Get meeting: deprecated

**Method:** websocket

**Endpoint:** meeting:get

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "meetingId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "meeting": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "startDate": timestamp
            "endDate": timestamp
            "subject": string
            "roomId": string
            "propId": string
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
            "room": {
                "id": string
                "title": string
                "thumbnail": { <a href="#resource">resource structure</a> }
            }
            "prop": {
                "id": string
                "title": string
            }
            "organizer": { <a href="#user-simple">user simple structure</a> }
            "invitedUsers": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "status": string
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="check-prop-has-meetings-or-social-sessions"></a>

### Check prop has meetings or social sessions

**Method:** websocket

**Endpoint:** meeting:checkPropHasMeetingsOrSocialSessions

**<span color="red">DEPRECATED</span>** 

**Description:** API returns true if prop has at least one meeting or social session in the future.

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
        "hasMeetingsOrSocialSessions": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-user-meeting-counts"></a>

### List user meeting counts

**Method:** websocket

**Endpoint:** meeting:listUserMeetingCounts

**Description:** API lists counts of meetings per day.

**Request:** 

<pre>
{
    "data": {
        "localDateNow": timestamp
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
        "meetingCounts": [{
            "count": int
            "startDate": timestamp
            "endDate": timestamp
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-user-meetings-in-date-range"></a>

### List user meetings in date range

**Method:** websocket

**Endpoint:** meeting:listUserMeetingsInDateRange

**<span color="red">DEPRECATED</span>** 

**Description:** API lists user meetings in provided date range.

**Request:** 

<pre>
{
    "data": {
        "startDate": timestamp
        "endDate": timestamp
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "meetings": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "startDate": timestamp
            "endDate": timestamp
            "subject": string
            "roomId": string
            "propId": string
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
            "room": {
                "id": string
                "title": string
                "thumbnail": { <a href="#resource">resource structure</a> }
            }
            "prop": {
                "id": string
                "title": string
            }
            "organizer": { <a href="#user-simple">user simple structure</a> }
            "invitedUsers": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "status": string
            }]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="accept-meeting-request"></a>

### Accept meeting request

**Method:** websocket

**Endpoint:** meeting:acceptMeetingRequest

**Description:** API accepts user request for meeting and changes participant status to "accepted".

**Request:** 

<pre>
{
    "data": {
        "meetingId": string
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

<a name="decline-meeting-request"></a>

### Decline meeting request

**Method:** websocket

**Endpoint:** meeting:declineMeetingRequest

**Description:** API declines user request for meeting and changes participant status to "declined".

**Request:** 

<pre>
{
    "data": {
        "meetingId": string
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

<a name="create-meeting"></a>

### Create meeting

**Method:** websocket

**Endpoint:** meeting:createMeeting

**Description:** API creates meeting in a provided location. 

API will create "Meeting" requests to all invited users. 

* All invited users will have "received" status for meeting; 

* By accepting request invited user will receive "accepted" status for meeting; 

* By declining request invited user will receive "declined" status for meeting; 



**Request:** 

<pre>
{
    "data": {
        "sourceType": string <span color="#1b1ef7"> // room/prop/group/direct</span>
        "sourceIds": [ string ] <span color="#1b1ef7"> // roomId/roomId+propId/groupId/userId</span>
        "subject": string
        "description": string
        "color": { <a href="#rgba">rgba structure</a> }
        "invitedUserIds": [ string ]
        "startDate": timestamp
        "endDate": timestamp
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "meeting": {
            "meetingId": string
            "created": timestamp
            "subject": string
            "description": string
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if source was deleted</span>
            "organizerId": string <span color="#1b1ef7"> // user id of the organizer</span>
            "participantIds": [ string ] <span color="#1b1ef7"> // list of user ids of participants, including organizer</span>
            "sourceString": string
            "sourceType": string
            "sourcePk": string
            "networkId": string
            "startDate": timestamp
            "endDate": timestamp
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-meeting"></a>

### Update meeting

**Method:** websocket

**Endpoint:** meeting:updateMeeting

**Request:** 

<pre>
{
    "data": {
        "meetingId": string
        "subject": string
        "description": string
        "color": { <a href="#rgba">rgba structure</a> }
        "startDate": timestamp
        "endDate": timestamp
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "meeting": {
            "meetingId": string
            "created": timestamp
            "subject": string
            "description": string
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if source was deleted</span>
            "organizerId": string <span color="#1b1ef7"> // user id of the organizer</span>
            "participantIds": [ string ] <span color="#1b1ef7"> // list of user ids of participants, including organizer</span>
            "sourceString": string
            "sourceType": string
            "sourcePk": string
            "networkId": string
            "startDate": timestamp
            "endDate": timestamp
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-meeting"></a>

### Delete meeting

**Method:** websocket

**Endpoint:** meeting:deleteMeeting

**Request:** 

<pre>
{
    "data": {
        "meetingId": string
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

<a name="get-meeting"></a>

### Get meeting

**Method:** websocket

**Endpoint:** meeting:getMeeting

**Request:** 

<pre>
{
    "data": {
        "meetingId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "meeting": {
            "meetingId": string
            "created": timestamp
            "subject": string
            "description": string
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if source was deleted</span>
            "organizerId": string <span color="#1b1ef7"> // user id of the organizer</span>
            "participantIds": [ string ] <span color="#1b1ef7"> // list of user ids of participants, including organizer</span>
            "sourceString": string
            "sourceType": string
            "sourcePk": string
            "networkId": string
            "startDate": timestamp
            "endDate": timestamp
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-user-meetings"></a>

### List user meetings

**Method:** websocket

**Endpoint:** meeting:listUserMeetings

**Description:** API lists user meetings in provided date range.

**Request:** 

<pre>
{
    "data": {
        "startDate": timestamp
        "endDate": timestamp
        "sourceType": string <span color="#1b1ef7"> // filter meetings by source: network/room/prop/group/direct</span>
        "sourceIds": [ string ] <span color="#1b1ef7"> // networkId/roomId/roomId+propId/groupId/userId</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "meetings": [{
            "userId": string
            "status": string
            "meetingId": string
            "created": timestamp
            "subject": string
            "description": string
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if source was deleted</span>
            "organizerId": string <span color="#1b1ef7"> // user id of the organizer</span>
            "participantIds": [ string ] <span color="#1b1ef7"> // list of user ids of participants, including organizer</span>
            "sourceString": string
            "sourceType": string
            "sourcePk": string
            "networkId": string
            "startDate": timestamp
            "endDate": timestamp
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-time-slots-for-meeting"></a>

### Get time slots for meeting

**Method:** websocket

**Endpoint:** meeting:getTimeSlotsForMeeting

**Description:** API returns time intervals that are available for all requested users. Each requested user/email should be provided as separate element in array. API will ignore provided user if it is not found in the system.

**Request:** 

<pre>
{
    "data": {
        "users": [{
            "roomful": string
            "email": string
        }]
        "localDate": timestamp
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "availableTimeSlots": [{
            "startDate": timestamp
            "endDate": timestamp
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-meeting-time-slots-for-month"></a>

### Get meeting time slots for month

**Method:** websocket

**Endpoint:** meeting:getMeetingTimeSlotsForMonth

**Description:** API returns time intervals that are available for all requested users. Each requested user/email should be provided as separate element in array. API will ignore provided user if it is not found in the system.

**Request:** 

<pre>
{
    "data": {
        "users": [{
            "roomful": string
            "email": string
        }]
        "localDate": timestamp
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "availableTimeSlots": [{
            "startDate": timestamp
            "endDate": timestamp
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-user-availability"></a>

### Set user availability

**Method:** websocket

**Endpoint:** meeting:setUserAvailability

**Description:** API allows user to set times when he is available / not available to participate in meetings. 

* If repetition parameter is provided, availability will be set as pattern for provided week days. 

* If repetition parameter is not provided, availability will be set for mentioned day explicitly. 

Status parameter is represented by one of: "Available" / "NotAvailable". 

Repetition parameter is represented by a byte, meaning each bit (starting from right) is a day of the week, starting from Sunday (i.e. 00000101 translates to Sunday and Tuesday). 

LocalDate parameter indicates with what date server should work. 



**Request:** 

<pre>
{
    "data": {
        "availability": {
            "status": string
            "dates": [{
                "startDate": timestamp
                "endDate": timestamp
            }]
            "repetition": byte
        }
        "localDate": timestamp
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

<a name="get-user-availability-pattern"></a>

### Get user availability pattern

**Method:** websocket

**Endpoint:** meeting:getUserAvailabilityPattern

**Request:** 

<pre>
{
    "data": {
        "localDate": timestamp
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "pattern": {
            "availabilities": [{ <span color="#1b1ef7"> // list of availabilities for each day of the week</span>
                "status": string
                "dates": [{
                    "startDate": timestamp
                    "endDate": timestamp
                }]
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-availability-for-day"></a>

### Get user availability for day

**Method:** websocket

**Endpoint:** meeting:getUserAvailabilityForDay

**Request:** 

<pre>
{
    "data": {
        "localDate": timestamp
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "availability": {
            "status": string
            "dates": [{
                "startDate": timestamp
                "endDate": timestamp
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-availability-for-week"></a>

### Get user availability for week

**Method:** websocket

**Endpoint:** meeting:getUserAvailabilityForWeek

**Request:** 

<pre>
{
    "data": {
        "localDate": timestamp
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "availability": {
            "status": string
            "dates": [{
                "startDate": timestamp
                "endDate": timestamp
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-availability-for-month"></a>

### Get user availability for month

**Method:** websocket

**Endpoint:** meeting:getUserAvailabilityForMonth

**Request:** 

<pre>
{
    "data": {
        "localDate": timestamp
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "availability": {
            "status": string
            "dates": [{
                "startDate": timestamp
                "endDate": timestamp
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-meeting-updated-event"></a>

### On meeting updated event

**Event:** meeting:meetingUpdated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "meeting": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "startDate": timestamp
            "endDate": timestamp
            "subject": string
            "roomId": string
            "propId": string
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if room or prop were deleted</span>
            "room": {
                "id": string
                "title": string
                "thumbnail": { <a href="#resource">resource structure</a> }
            }
            "prop": {
                "id": string
                "title": string
            }
            "organizer": { <a href="#user-simple">user simple structure</a> }
            "invitedUsers": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "status": string
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-meeting-deleted-event"></a>

### On meeting deleted event

**Event:** meeting:meetingDeleted

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "meetingId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-meeting-created-event"></a>

### On meeting created event

**Event:** meeting:onMeetingCreated

**Data:** 

<pre>
{
    "data": {
        "meeting": {
            "meetingId": string
            "created": timestamp
            "subject": string
            "description": string
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if source was deleted</span>
            "organizerId": string <span color="#1b1ef7"> // user id of the organizer</span>
            "participantIds": [ string ] <span color="#1b1ef7"> // list of user ids of participants, including organizer</span>
            "sourceString": string
            "sourceType": string
            "sourcePk": string
            "networkId": string
            "startDate": timestamp
            "endDate": timestamp
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-meeting-deleted-event"></a>

### On meeting deleted event

**Event:** meeting:onMeetingDeleted

**Data:** 

<pre>
{
    "data": {
        "meetingId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-meeting-updated-event"></a>

### On meeting updated event

**Event:** meeting:onMeetingUpdated

**Data:** 

<pre>
{
    "data": {
        "meeting": {
            "meetingId": string
            "created": timestamp
            "subject": string
            "description": string
            "color": { <a href="#rgba">rgba structure</a> }
            "isValid": bool <span color="#1b1ef7"> // not valid if source was deleted</span>
            "organizerId": string <span color="#1b1ef7"> // user id of the organizer</span>
            "participantIds": [ string ] <span color="#1b1ef7"> // list of user ids of participants, including organizer</span>
            "sourceString": string
            "sourceType": string
            "sourcePk": string
            "networkId": string
            "startDate": timestamp
            "endDate": timestamp
        }
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

<a name="resource"></a>

#### Resource

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "title": string
    "description": string
    "location": string
    "date": string
    "category": string
    "linkId": string <span color="#1b1ef7"> // id of resource link is pointing to</span>
    "linkType": string <span color="#1b1ef7"> // global/local</span>
    "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
    "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
    "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
    "belonging": string <span color="#1b1ef7"> // determines resource location in the system in a way 'belongingType:belongingPath(networkId)'</span>
    "status": string <span color="#1b1ef7"> // pending/processing/ready/failed</span>
    "metadata": {
        "fileName": string
        "fileSize": int
        "fileDate": timestamp
        "behaviourType": string
        "contentType": string
        "convertedFrom": string
        "link": string
        "origin": { <a href="#resource-origin">resource origin structure</a> }
        "geolocation": { <a href="#geolocation">geolocation structure</a> }
        "dimensions": { <a href="#dimensions">dimensions structure</a> }
    }
    "thumbnail": string
    "fromTemplate": bool
    "totalReactions": int <span color="#1b1ef7"> // amount of users who reacted to the resource</span>
    "data": {
        "audio": { <a href="#resource-data-audio">resource data audio structure</a> }
        "video": { <a href="#resource-data-video">resource data video structure</a> }
        "amazon": { <a href="#resource-data-amazon">resource data amazon structure</a> }
        "imdb": { <a href="#resource-data-imdb">resource data imdb structure</a> }
        "youtube": { <a href="#resource-data-youtube">resource data youtube structure</a> }
        "pinterest": { <a href="#resource-data-pinterest">resource data pinterest structure</a> }
        "pixabay": { <a href="#resource-data-pixabay">resource data pixabay structure</a> }
        "facebook": { <a href="#resource-data-facebook">resource data facebook structure</a> }
        "remoteUrl": { <a href="#resource-data-remote-url">resource data remote url structure</a> }
        "liveStream": { <a href="#live-stream-data">live stream data structure</a> }
        "aiGeneration": { <a href="#ai-generation-data">ai generation data structure</a> }
        "thumbnailUrl": string
        "downloadUrl": string
        "directory": { <a href="#resource-data-directory">resource data directory structure</a> }
        "channel": { <a href="#channel-data">channel data structure</a> }
        "googleDrive": { <a href="#google-drive">google drive structure</a> }
    }
    "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client defined parameters</span>
    "actions": [{ <a href="#programmatic-action-with-children">programmatic action with children structure</a> }] <span color="#1b1ef7"> // custom programmatic actions from users</span>
}
</pre>

<br>

<a name="resource-origin"></a>

#### Resource Origin

<pre>
{
    "type": string
    "device": string
    "deviceName": string
    "path": string
}
</pre>

<br>

<a name="geolocation"></a>

#### Geolocation

<pre>
{
    "latitude": float
    "longitude": float
}
</pre>

<br>

<a name="dimensions"></a>

#### Dimensions

<pre>
{
    "width": int
    "height": int
    "orientation": int
}
</pre>

<br>

<a name="resource-data-audio"></a>

#### Resource Data Audio

<pre>
{
    "title": string
    "artist": string
    "album": string
    "genre": string
    "duration": int
    "durationFloat": float
}
</pre>

<br>

<a name="resource-data-video"></a>

#### Resource Data Video

<pre>
{
    "duration": int
    "durationFloat": float
    "hasAlphaChannel": bool <span color="#1b1ef7"> // true, if video generated from gif with transparent pixels</span>
    "alphaChannel": string <span color="#1b1ef7"> // alpha channel video resource (if generated from gif)</span>
}
</pre>

<br>

<a name="resource-data-amazon"></a>

#### Resource Data Amazon

<pre>
{
    "asin": string
    "summary": string
    "author": [ string ]
    "manufacturer": string
    "title": string
    "publicationDate": string
    "url": string
}
</pre>

<br>

<a name="resource-data-imdb"></a>

#### Resource Data Imdb

<pre>
{
    "Actors": string
    "Genre": string
    "Ratings": [{
        "Source": string
        "Value": string
    }]
    "Released": string
    "Runtime": string
    "Website": string
    "Year": string
    "Trailers": [ string ]
    "imdbID": string
}
</pre>

<br>

<a name="resource-data-youtube"></a>

#### Resource Data Youtube

<pre>
{
    "videoId": string
    "formatId": string
}
</pre>

<br>

<a name="resource-data-pinterest"></a>

#### Resource Data Pinterest

<pre>
{
    "pin": string
    "url": string
}
</pre>

<br>

<a name="resource-data-pixabay"></a>

#### Resource Data Pixabay

<pre>
{
    "id": string
    "pageUrl": string
}
</pre>

<br>

<a name="resource-data-facebook"></a>

#### Resource Data Facebook

<pre>
{
    "id": string
}
</pre>

<br>

<a name="resource-data-remote-url"></a>

#### Resource Data Remote Url

<pre>
{
    "url": string
    "urlType": string
    "favicon": string
    "title": string
}
</pre>

<br>

<a name="live-stream-data"></a>

#### Live Stream Data

<pre>
{
    "streamId": string
    "assetId": string
    "playbackUrl": string
    "masterUrl": string
}
</pre>

<br>

<a name="ai-generation-data"></a>

#### AI Generation Data

<pre>
{
    "generationModel": string <span color="#1b1ef7"> // the model used for image generation [dall-e-3]</span>
    "prompt": string <span color="#1b1ef7"> // a text description of the desired image</span>
    "revisedPrompt": string <span color="#1b1ef7"> // the prompt that was used to generate the image, if there was any revision to the prompt</span>
    "url": string <span color="#1b1ef7"> // the URL of the generated image</span>
}
</pre>

<br>

<a name="resource-data-directory"></a>

#### Resource Data Directory

<pre>
{
    "innerContentType": string
    "innerContentCount": int
}
</pre>

<br>

<a name="channel-data"></a>

#### Channel Data

<pre>
{
    "communityId": string
    "channelId": string
    "subChannelId": string
    "messageId": string
}
</pre>

<br>

<a name="google-drive"></a>

#### Google Drive

<pre>
{
    "fileId": string
    "name": string
    "mimeType": string
}
</pre>

<br>

<a name="programmatic-action-with-children"></a>

#### Programmatic Action with children

<pre>
{
    "localId": string <span color="#1b1ef7"> // local action id, operated by client side only</span>
    "eventName": string
    "actionName": string
    "actionData": {
        "usedPropId": string
        "usedRoomId": string
        "usedNetworkId": string
        "usedStorylineId": string
        "usedQuestionId": int
        "usedQuestionnaireId": int
        "usedSegmentId": string
        "usedPlacementAreaId": string
        "usedRoomPoint": string
        "animationData": map[string]{ custom structure }
    }
    "childActions": [{ <a href="#programmatic-action">programmatic action structure</a> }]
}
</pre>

<br>

<a name="programmatic-action"></a>

#### Programmatic Action

<pre>
{
    "localId": string <span color="#1b1ef7"> // local action id, operated by client side only</span>
    "eventName": string
    "actionName": string
    "actionData": {
        "usedPropId": string
        "usedRoomId": string
        "usedNetworkId": string
        "usedStorylineId": string
        "usedQuestionId": int
        "usedQuestionnaireId": int
        "usedSegmentId": string
        "usedPlacementAreaId": string
        "usedRoomPoint": string
        "animationData": map[string]{ custom structure }
    }
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

