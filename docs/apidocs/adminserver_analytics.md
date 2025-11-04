<br>

<a name="adminserver-analytics-api"></a>

## Adminserver: Analytics API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/files/analytics/userSessions](#generate-analytics-user-sessions) | webRequest | Generate analytics: user sessions |
| [/files/analytics/boothResourceVisits](#generate-analytics-booth-resource-visits) | webRequest | Generate analytics: booth resource visits |
| [/files/analytics/conferenceVisits](#generate-analytics-conference-visits) | webRequest | Generate analytics: conference visits |
| [/files/analytics/contentVisits](#generate-analytics-content-visits) | webRequest | Generate analytics: content visits |
| [/files/analytics/karaokeSongsPlayback](#generate-analytics-karaoke-songs-playback) | webRequest | Generate analytics: karaoke songs playback |
| [/jsonRpc/analytics.registrations](#registrations) | jsonRpc | Registrations |
| [/jsonRpc/analytics.sessions](#sessions) | jsonRpc | Sessions |
| [/jsonRpc/analytics.rooms](#rooms) | jsonRpc | Rooms |
| [/jsonRpc/analytics.roomVisits](#room-visits) | jsonRpc | Room visits |
| [/jsonRpc/analytics.propVisits](#prop-visits) | jsonRpc | Prop visits |

<br>

<a name="generate-analytics-user-sessions"></a>

### Generate analytics: user sessions

**HTTP Method:** GET

**Path:** /files/analytics/userSessions

**Description:** Report represents users who created new sessions in provided amount of time.

**Parameters:** 

startDate: timestamp

endDate: timestamp

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
xlsx spreadsheet file
</pre>

<br>

<a name="generate-analytics-booth-resource-visits"></a>

### Generate analytics: booth resource visits

**HTTP Method:** GET

**Path:** /files/analytics/boothResourceVisits

**Description:** Report represents company booths, their content and time users spend looking at them.

**Parameters:** 

roomId: string

propId: string

startDate: timestamp

endDate: timestamp

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId (when roomId provided in request)

prop.manage /networkId/roomId/propId (when propId provided in request)

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
xlsx spreadsheet file
</pre>

<br>

<a name="generate-analytics-conference-visits"></a>

### Generate analytics: conference visits

**HTTP Method:** GET

**Path:** /files/analytics/conferenceVisits

**Description:** Report represents accumulative visits of company booths and file cabinets per user.

**Parameters:** 

roomId: string

propId: string

startDate: timestamp

endDate: timestamp

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId (when roomId provided in request)

prop.manage /networkId/roomId/propId (when propId provided in request)

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
xlsx spreadsheet file
</pre>

<br>

<a name="generate-analytics-content-visits"></a>

### Generate analytics: content visits

**HTTP Method:** GET

**Path:** /files/analytics/contentVisits

**Description:** Report represents resources, their total views and time spent.

**Parameters:** 

roomId: string

propId: string

startDate: timestamp

endDate: timestamp

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId (when roomId provided in request)

prop.manage /networkId/roomId/propId (when propId provided in request)

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
xlsx spreadsheet file
</pre>

<br>

<a name="generate-analytics-karaoke-songs-playback"></a>

### Generate analytics: karaoke songs playback

**HTTP Method:** GET

**Path:** /files/analytics/karaokeSongsPlayback

**Description:** Report returns karaoke songs playback (30+ seconds).

**Parameters:** 

startDate: timestamp

endDate: timestamp

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
xlsx spreadsheet file
</pre>

<br>

<a name="registrations"></a>

### Registrations

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/analytics.registrations

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "localDate": timestamp
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "totalUsers": int
        "newUsersForLastWeek": [ int ] <span color="#1b1ef7"> // array of new users per each day</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="sessions"></a>

### Sessions

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/analytics.sessions

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "localDate": timestamp
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "newSessionsForLastWeek": [ int ] <span color="#1b1ef7"> // array of new sessions per each day</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="rooms"></a>

### Rooms

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/analytics.rooms

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "publicRooms": int
        "privateRooms": int
        "newRooms": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="room-visits"></a>

### Room visits

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/analytics.roomVisits

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

**Request:** 

<pre>
{
    "roomId": string
    "localDate": timestamp
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomVisitsForLastWeek": [ int ] <span color="#1b1ef7"> // array of room visits per each day</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="prop-visits"></a>

### Prop visits

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/analytics.propVisits

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

prop.manage /networkId/roomId/propId

**Request:** 

<pre>
{
    "propId": string
    "roomId": string
    "localDate": timestamp
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "propVisitsForLastWeek": [ int ] <span color="#1b1ef7"> // array of prop visits per each day</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

