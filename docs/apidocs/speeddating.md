<br>

<a name="speed-dating-api"></a>

## Speed dating API

| Endpoint | Method | Description |
|-----|-----|-----|
| [social:startSpeedDating](#start-speed-dating) | websocket | Start speed dating |
| [social:stopSpeedDating](#stop-speed-dating) | websocket | Stop speed dating |
| [social:getSpeedDatingStatus](#get-speed-dating-status) | websocket | Get speed dating status |
| [social:speedDatingStarted](#start-speed-dating-event) | websocketEvent | Start speed dating event |
| [social:speedDatingStopped](#stop-speed-dating-event) | websocketEvent | Stop speed dating event |

<br>

<a name="start-speed-dating"></a>

### Start speed dating

**Method:** websocket

**Endpoint:** social:startSpeedDating

**Description:** Endpoint prepares map of participants and list of rounds for speed dating, and sends event with speed dating status to all participants. 

User must be an owner of the room in order to start speed dating process and become moderator. 

Endpoint could return following errors: 

* 8201 - Invalid speed dating shuffle mode * 8202 - Invalid speed dating participants * 8203 - Invalid speed dating seating limit * 8204 - Invalid speed dating round duration * 8205 - Speed dating already exists in hub

**Request:** 

<pre>
{
    "data": {
        "speedDating": {
            "roomId": string
            "hubId": string
            "shuffleMode": string <span color="#1b1ef7"> // default - speedDating</span>
            "seatingLimit": int <span color="#1b1ef7"> // max amount of dating pairs per round</span>
            "roundDuration": int <span color="#1b1ef7"> // duration of each round in seconds</span>
            "participantGroups": [ string ] <span color="#1b1ef7"> // list of participant group names</span>
            "participantLists": [ [ string ] ] <span color="#1b1ef7"> // lists of participant user ids per group</span>
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "speedDatingMap": {
            "speedDatingId": string
            "roundStartDates": [ timestamp ] <span color="#1b1ef7"> // list of all round start dates</span>
            "encounters": map[string]{ <span color="#1b1ef7"> // map of encounters per participant</span>
                "group": string <span color="#1b1ef7"> // group name of current participant</span>
                "opponents": [ (int, string, string), ... ] <span color="#1b1ef7"> // list of encounters for current participant, each encounter contains sequential number, opponent id and opponent group</span>
            }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="stop-speed-dating"></a>

### Stop speed dating

**Method:** websocket

**Endpoint:** social:stopSpeedDating

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-speed-dating-status"></a>

### Get speed dating status

**Method:** websocket

**Endpoint:** social:getSpeedDatingStatus

**Description:** Endpoint returns speed dating status in room, in case if user participates in one. 

Endpoint returns encounters for all participants in case if user is moderator, and only current user encounters in case if user is participant. 

Each encounter contains a list of round sequential number, opponent id and opponent group. In case if user doesn't have encounter for the round, list will be null. 

Encounter opponents example: ```[[1, "opponentId1", "Candidate"], null, [2, "opponentId2", "Candidate"]]``` 



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
        "speedDatingStatus": {
            "roomId": string
            "hubId": string
            "moderatorId": string <span color="#1b1ef7"> // user id of moderator</span>
            "shuffleMode": string <span color="#1b1ef7"> // default - speedDating</span>
            "roundDuration": int <span color="#1b1ef7"> // duration of each round in seconds</span>
            "participantGroups": [ string ] <span color="#1b1ef7"> // list of participant group names</span>
            "speedDatingId": string
            "roundStartDates": [ timestamp ] <span color="#1b1ef7"> // list of all round start dates</span>
            "encounters": map[string]{ <span color="#1b1ef7"> // map of encounters per participant</span>
                "group": string <span color="#1b1ef7"> // group name of current participant</span>
                "opponents": [ (int, string, string), ... ] <span color="#1b1ef7"> // list of encounters for current participant, each encounter contains sequential number, opponent id and opponent group</span>
            }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="start-speed-dating-event"></a>

### Start speed dating event

**Event:** social:speedDatingStarted

**Data:** 

<pre>
{
    "data": {
        "speedDatingStatus": {
            "roomId": string
            "hubId": string
            "moderatorId": string <span color="#1b1ef7"> // user id of moderator</span>
            "shuffleMode": string <span color="#1b1ef7"> // default - speedDating</span>
            "roundDuration": int <span color="#1b1ef7"> // duration of each round in seconds</span>
            "participantGroups": [ string ] <span color="#1b1ef7"> // list of participant group names</span>
            "speedDatingId": string
            "roundStartDates": [ timestamp ] <span color="#1b1ef7"> // list of all round start dates</span>
            "encounters": map[string]{ <span color="#1b1ef7"> // map of encounters per participant</span>
                "group": string <span color="#1b1ef7"> // group name of current participant</span>
                "opponents": [ (int, string, string), ... ] <span color="#1b1ef7"> // list of encounters for current participant, each encounter contains sequential number, opponent id and opponent group</span>
            }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="stop-speed-dating-event"></a>

### Stop speed dating event

**Event:** social:speedDatingStopped

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "speedDatingId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

