<br>

<a name="matchmaking-api"></a>

## Matchmaking API

| Endpoint | Method | Description |
|-----|-----|-----|
| [matchmaking:getQuestionnaireTemplate](#get-questionnaire-template) | websocket | Get questionnaire template |
| [matchmaking:getQuestionnaireData](#get-questionnaire-data) | websocket | Get questionnaire data |
| [matchmaking:saveQuestionnaireData](#save-questionnaire-data) | websocket | Save questionnaire data |
| [matchmaking:getUserMatchmakingRoom](#get-user-matchmaking-room) | websocket | Get user matchmaking room |
| [matchmaking:publishMatchmakingRoom](#publish-matchmaking-room) | websocket | Publish matchmaking room |
| [matchmaking:unpublishMatchmakingRoom](#unpublish-matchmaking-room) | websocket | Unpublish matchmaking room |
| [matchmaking:searchMatchmakingRooms](#search-matchmaking-rooms) | websocket | Search matchmaking rooms |
| [matchmaking:searchMatchmakingStorylines](#search-matchmaking-storylines) | websocket | Search matchmaking storylines |
| [matchmaking:searchMatchmakingUsers](#search-matchmaking-users) | websocket | Search matchmaking users |
| [matchmaking:sendIdealMatchRequest](#send-ideal-match-request) | websocket | Send ideal match request |
| [matchmaking:deleteIdealMatchRoom](#delete-ideal-match-room) | websocket | Delete ideal match room |
| [matchmaking:listIdealMatchRooms](#list-ideal-match-rooms) | websocket | List ideal match rooms |
| [matchmaking:becomeSupporter](#become-supporter) | websocket | Become supporter |
| [matchmaking:removeUserSupporter](#remove-user-supporter) | websocket | Remove user supporter |
| [matchmaking:removeSupportedUser](#remove-supported-user) | websocket | Remove supported user |
| [matchmaking:listUserSupporters](#list-user-supporters) | websocket | List user supporters |
| [matchmaking:listSupportedUsers](#list-supported-users) | websocket | List supported users |
| [matchmaking:recommendIdealMatch](#recommend-ideal-match) | websocket | Recommend ideal match |
| [matchmaking:inviteSupportersToIdealMatchRoom](#invite-supporters-to-ideal-match-room) | websocket | Invite supporters to ideal match room |
| [matchmaking:listSearchCards](#list-search-cards) | websocket | List search cards |
| [matchmaking:updateSearchCard](#update-search-card) | websocket | Update search card |
| [matchmaking:searchBySearchCard](#search-matchmaking-rooms-by-search-card) | websocket | Search matchmaking rooms by search card |
| [matchmaking:idealMatchRoomCreated](#ideal-match-room-created-event) | websocketEvent | Ideal match room created event |
| [matchmaking:idealMatchRoomDeleted](#ideal-match-room-deleted-event) | websocketEvent | Ideal match room deleted event |
| [matchmaking:idealMatchRoomEntered](#on-ideal-match-room-entrance-event) | websocketEvent | On ideal match room entrance event |
| [matchmaking:searchCardUpdated](#matchmaking-search-card-updated-event) | websocketEvent | Matchmaking search card updated event |
| [matchmaking:searchCardDeleted](#matchmaking-search-card-deleted-event) | websocketEvent | Matchmaking search card deleted event |
| [matchmaking:supporterAdded](#on-supporter-added-event) | websocketEvent | On supporter added event |
| [matchmaking:supporterRemoved](#on-supporter-removed-event) | websocketEvent | On supporter removed event |
| [matchmaking:questionnaireDataUpdated](#on-questionnaire-data-updated-event) | websocketEvent | On questionnaire data updated event |
| [matchmaking:matchmakingRoomPublished](#matchmaking-room-published-event) | websocketEvent | Matchmaking room published event |
| [matchmaking:matchmakingRoomUnpublished](#matchmaking-room-unpublished-event) | websocketEvent | Matchmaking room unpublished event |
| [matchmaking:matchmakingRoomEntrance](#matchmaking-room-entrance-event) | websocketEvent | Matchmaking room entrance event |

<br>

<a name="get-questionnaire-template"></a>

### Get questionnaire template

**Method:** websocket

**Endpoint:** matchmaking:getQuestionnaireTemplate

**Description:** List of questionnaire field types: 

| Field | Value type | Search type | Nested field depends on value type | Description | 
|-----|-----|-----|-----|-----| 
| Tags | array of strings | array of strings | string | Can select and search none, one or all of the tags | 
| OneOfTags | string | string / array of strings  | string | Can select and search for one of provided values | 
| Gender | string | string | string | One of: male/female; search is using the opposite gender by default | 
| Bool | boolean | boolean | not applicable | | 
| StringInput | string | string | not applicable | | 
| DateOfBirth | timestamp | range of integers | not applicable | { "start": int, "end": int } | 

While search, man is [0-5] years older than woman and both are 18+ by default

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "template": {
            "fields": [{
                "fieldId": string <span color="#1b1ef7"> // unique id</span>
                "type": string <span color="#1b1ef7"> // Tags/OneOfTags/Gender/Bool/StringInput/DateOfBirth</span>
                "isRequired": bool <span color="#1b1ef7"> // this field is required to be filled in</span>
                "isSearchable": bool <span color="#1b1ef7"> // questionnaire could be searched by this field</span>
                "profileSection": string <span color="#1b1ef7"> // personal information/company information/social media profile</span>
                "title": string <span color="#1b1ef7"> // title for questionnaire</span>
                "searchTitle": string <span color="#1b1ef7"> // title for search</span>
                "profileTitle": string <span color="#1b1ef7"> // title for profile information</span>
                "values": { custom structure } <span color="#1b1ef7"> // available values in case of Tags/OneOfTags/Gender</span>
                "default": { custom structure } <span color="#1b1ef7"> // default from values</span>
                "isNested": bool <span color="#1b1ef7"> // this field has parent question</span>
                "nestedDependsOnFieldId": string <span color="#1b1ef7"> // fieldId of parent question</span>
                "nestedDependsOnValue": { custom structure } <span color="#1b1ef7"> // value of parent question</span>
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-questionnaire-data"></a>

### Get questionnaire data

**Method:** websocket

**Endpoint:** matchmaking:getQuestionnaireData

**Description:** fields: map[ name of the field ] value of the field, depending on type; see matchmaking:getQuestionnaireTemplate for details

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "questionnaire": {
            "fields": map[string]{ custom structure }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="save-questionnaire-data"></a>

### Save questionnaire data

**Method:** websocket

**Endpoint:** matchmaking:saveQuestionnaireData

**Description:** fields: map[ name of the field ] value of the field, depending on type; see matchmaking:getQuestionnaireTemplate for details

**Request:** 

<pre>
{
    "data": {
        "questionnaire": {
            "fields": map[string]{ custom structure }
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

<a name="get-user-matchmaking-room"></a>

### Get user matchmaking room

**Method:** websocket

**Endpoint:** matchmaking:getUserMatchmakingRoom

**Request:** 

<pre>
{
    "data": {
        "targetUser": string <span color="#1b1ef7"> // if targetUser empty - returns current user matchmaking room</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "room": {
            "id": string
            "name": string
            "tags": [ string ]
            "ownerIds": [ string ]
            "subscriptionStatus": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="publish-matchmaking-room"></a>

### Publish matchmaking room

**Method:** websocket

**Endpoint:** matchmaking:publishMatchmakingRoom

**Description:** User can publish only one matchmaking room. If he tries to publish second mm room, he will receive error status code 3001. If he tries to publish mm room while questionnaire is not filled, he will receive error code 3002.

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="unpublish-matchmaking-room"></a>

### Unpublish matchmaking room

**Method:** websocket

**Endpoint:** matchmaking:unpublishMatchmakingRoom

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-matchmaking-rooms"></a>

### Search matchmaking rooms

**Method:** websocket

**Endpoint:** matchmaking:searchMatchmakingRooms

**Description:** Parameters: map[ name of the field ] value of the field, depending on search type; see matchmaking:getQuestionnaireTemplate for details. 

Api searches for MM published rooms if network type is Matchmaking and for all public rooms if network type is BusinessSocial. In both cases, users should fill in questionnaire before their rooms appear in search result.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string <span color="#1b1ef7"> // supporter's search for target user</span>
        "parameters": map[string]{ custom structure }
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
        "rooms": [{
            "id": string
            "name": string
            "tags": [ string ]
            "thumbnailId": string
            "subscriptionStatus": string
            "ownerIds": [ string ]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-matchmaking-storylines"></a>

### Search matchmaking storylines

**Method:** websocket

**Endpoint:** matchmaking:searchMatchmakingStorylines

**Description:** Parameters: map[ name of the field ] value of the field, depending on search type; see matchmaking:getQuestionnaireTemplate for details. 

Only in BusinessSocial network. 

Api searches for published storylines in public rooms. Users should fill in questionnaire before their storylines appear in search result.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string <span color="#1b1ef7"> // supporter's search for target user</span>
        "parameters": map[string]{ custom structure }
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
        "storylines": [{
            "id": string
            "title": string
            "roomId": string
            "roomName": string
            "roomThumbnailId": string
            "owners": [ string ]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-matchmaking-users"></a>

### Search matchmaking users

**Method:** websocket

**Endpoint:** matchmaking:searchMatchmakingUsers

**Description:** Parameters: map[ name of the field ] value of the field, depending on search type; see matchmaking:getQuestionnaireTemplate for details. 

Only in BusinessSocial network. 

Users should fill in questionnaire before they appear in search result.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string <span color="#1b1ef7"> // supporter's search for target user</span>
        "parameters": map[string]{ custom structure }
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
        "users": [{ <a href="#user-simple">user simple structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="send-ideal-match-request"></a>

### Send ideal match request

**Method:** websocket

**Endpoint:** matchmaking:sendIdealMatchRequest

**Description:** See [requests API](request.md) for further steps. If user has not published matchmaking room, he will receive error code 3000.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "message": string
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

<a name="delete-ideal-match-room"></a>

### Delete ideal match room

**Method:** websocket

**Endpoint:** matchmaking:deleteIdealMatchRoom

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-ideal-match-rooms"></a>

### List ideal match rooms

**Method:** websocket

**Endpoint:** matchmaking:listIdealMatchRooms

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
        "rooms": [{
            "id": string
            "name": string
            "tags": [ string ]
            "thumbnailId": string
            "subscriptionStatus": string
            "ownerIds": [ string ]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="become-supporter"></a>

### Become supporter

**Method:** websocket

**Endpoint:** matchmaking:becomeSupporter

**Description:** See [requests API](request.md) for further steps

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "message": string
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

<a name="remove-user-supporter"></a>

### Remove user supporter

**Method:** websocket

**Endpoint:** matchmaking:removeUserSupporter

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
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

<a name="remove-supported-user"></a>

### Remove supported user

**Method:** websocket

**Endpoint:** matchmaking:removeSupportedUser

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
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

<a name="list-user-supporters"></a>

### List user supporters

**Method:** websocket

**Endpoint:** matchmaking:listUserSupporters

**Description:** Fetch list of supporters who help to find current user ideal match

**Request:** 

<pre>
{
    "data": {
        "exclude": [ string ]
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
        "users": [{ <a href="#user-simple">user simple structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-supported-users"></a>

### List supported users

**Method:** websocket

**Endpoint:** matchmaking:listSupportedUsers

**Description:** Get list of users who are supported by current user

**Request:** 

<pre>
{
    "data": {
        "exclude": [ string ]
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
        "users": [{ <a href="#user-simple">user simple structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="recommend-ideal-match"></a>

### Recommend ideal match

**Method:** websocket

**Endpoint:** matchmaking:recommendIdealMatch

**Description:** See [requests API](request.md) for further steps

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "roomId": string
        "message": string
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

<a name="invite-supporters-to-ideal-match-room"></a>

### Invite supporters to ideal match room

**Method:** websocket

**Endpoint:** matchmaking:inviteSupportersToIdealMatchRoom

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "permissions": {
            "view": bool
            "comment": bool
            "contribute": bool
            "edit": bool
            "manage": bool
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "invitations": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "status": string
            "description": string
            "permissions": {
                "view": bool
                "comment": bool
                "contribute": bool
                "edit": bool
                "manage": bool
            }
            "invitedById": string
            "userId": string
            "roomId": string
            "roomPrivacy": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-search-cards"></a>

### List search cards

**Method:** websocket

**Endpoint:** matchmaking:listSearchCards

**Description:** Api returns search cards for all supported users. If search card doesn't exist, it will be generated automatically.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "searchCards": [{
            "targetUserId": string
            "parameters": map[string]{ custom structure }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-search-card"></a>

### Update search card

**Method:** websocket

**Endpoint:** matchmaking:updateSearchCard

**Description:** parameters: map[ name of the field ] value of the field, depending on search type; see matchmaking:getQuestionnaireTemplate for details

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "parameters": map[string]{ custom structure }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "searchCard": {
            "targetUserId": string
            "parameters": map[string]{ custom structure }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-matchmaking-rooms-by-search-card"></a>

### Search matchmaking rooms by search card

**Method:** websocket

**Endpoint:** matchmaking:searchBySearchCard

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
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
        "rooms": [{
            "id": string
            "name": string
            "tags": [ string ]
            "thumbnailId": string
            "subscriptionStatus": string
            "ownerIds": [ string ]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="ideal-match-room-created-event"></a>

### Ideal match room created event

**Event:** matchmaking:idealMatchRoomCreated

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "participants": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="ideal-match-room-deleted-event"></a>

### Ideal match room deleted event

**Event:** matchmaking:idealMatchRoomDeleted

**Data:** 

<pre>
{
    "data": {
        "roomId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-ideal-match-room-entrance-event"></a>

### On ideal match room entrance event

**Event:** matchmaking:idealMatchRoomEntered

**Data:** 

<pre>
{
    "data": {
        "userId": string
        "roomId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="matchmaking-search-card-updated-event"></a>

### Matchmaking search card updated event

**Event:** matchmaking:searchCardUpdated

**Data:** 

<pre>
{
    "data": {
        "searchCard": {
            "targetUserId": string
            "parameters": map[string]{ custom structure }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="matchmaking-search-card-deleted-event"></a>

### Matchmaking search card deleted event

**Event:** matchmaking:searchCardDeleted

**Data:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-supporter-added-event"></a>

### On supporter added event

**Event:** matchmaking:supporterAdded

**Data:** 

<pre>
{
    "data": {
        "supporterId": string
        "supportedUserId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-supporter-removed-event"></a>

### On supporter removed event

**Event:** matchmaking:supporterRemoved

**Data:** 

<pre>
{
    "data": {
        "supporterId": string
        "supportedUserId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-questionnaire-data-updated-event"></a>

### On questionnaire data updated event

**Event:** matchmaking:questionnaireDataUpdated

**Data:** 

<pre>
{
    "data": {
        "questionnaire": {
            "fields": map[string]{ custom structure }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="matchmaking-room-published-event"></a>

### Matchmaking room published event

**Event:** matchmaking:matchmakingRoomPublished

**Data:** 

<pre>
{
    "data": {
        "roomId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="matchmaking-room-unpublished-event"></a>

### Matchmaking room unpublished event

**Event:** matchmaking:matchmakingRoomUnpublished

**Data:** 

<pre>
{
    "data": {
        "roomId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="matchmaking-room-entrance-event"></a>

### Matchmaking room entrance event

**Event:** matchmaking:matchmakingRoomEntrance

**Description:** Event sends useful information about matchmaking network room. Request field has both received and sent requests.

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "isOwner": bool <span color="#1b1ef7"> // is current user - room owner</span>
        "isMatchmakingRoom": bool <span color="#1b1ef7"> // is room participates in matchmaking</span>
        "isIdealMatchRoom": bool <span color="#1b1ef7"> // is combined room</span>
        "isInvited": bool <span color="#1b1ef7"> // is current user invited to the room</span>
        "matchmakingParticipant": string <span color="#1b1ef7"> // not empty when isMatchmakingRoom == true</span>
        "idealMatchRoomUsers": [ string ] <span color="#1b1ef7"> // not empty when IsIdealMatchRoom == true</span>
        "requests": [{ <a href="#user-request">user request structure</a> }] <span color="#1b1ef7"> // Matchmaking/Recommendation requests</span>
        "commonIdealMatchRoomId": string <span color="#1b1ef7"> // not empty when user has common ideal match room with matchmaking room owner</span>
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

<br>

<a name="user-request"></a>

#### User Request

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "initiatorUserId": string
    "recipientUserId": string
    "type": string <span color="#1b1ef7"> // Connection/Invitation/Matchmaking/Supporter/Recommendation/Meeting</span>
    "status": string <span color="#1b1ef7"> // pending/accepted/declined</span>
    "message": string
    "data": {
        "roomId": string <span color="#1b1ef7"> // parameter is used for Invitation and Recommendation requests</span>
        "invitationId": string <span color="#1b1ef7"> // parameter is used for Invitation request</span>
        "meetingId": string <span color="#1b1ef7"> // parameter is used for Meeting request</span>
        "groupId": string <span color="#1b1ef7"> // parameter is used for Group request</span>
        "communityId": string <span color="#1b1ef7"> // parameter is used for Community request</span>
        "messageId": string <span color="#1b1ef7"> // parameter is used for AttestationClaim request</span>
    }
    "fromUser": { <a href="#user-simple">user simple structure</a> }
    "toUser": { <a href="#user-simple">user simple structure</a> }
}
</pre>

