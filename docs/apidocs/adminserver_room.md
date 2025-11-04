<br>

<a name="admin-room-api"></a>

## Admin Room API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/files/parseRoomBoothsSpreadsheet](#parse-room-booths-spreadsheet) | webRequest | Parse room booths spreadsheet |
| [/files/parseBoothsMembersSpreadsheet/{roomId}](#parse-booths-members-spreadsheet) | webRequest | Parse booths members spreadsheet |
| [/files/generateRoomBoothsSpreadsheet/{roomId}](#generate-room-booths-spreadsheet) | webRequest | Generate room booths spreadsheet |
| [/files/updateRoomBoothsFromSpreadsheet](#update-room-booths-from-spreadsheet) | webRequest | Update room booths from spreadsheet |
| [/files/updateBoothsMembersFromSpreadsheet/{roomId}](#update-booths-members-from-spreadsheet) | webRequest | Update booths members from spreadsheet |
| [/jsonRpc/room.getRoomModel](#get-room-model) | jsonRpc | Get room model |
| [/jsonRpc/room.updateRoomMetadata](#update-room-metadata) | jsonRpc | Update room metadata |
| [/jsonRpc/room.updateRoomPrice](#update-room-price) | jsonRpc | Update room price |
| [/jsonRpc/room.deleteRoom](#delete-room) | jsonRpc | Delete room |
| [/jsonRpc/room.updateRoomExplorerStatus](#update-room-explorer-status) | jsonRpc | Update room explorer status |
| [/jsonRpc/room.updateRoomFeaturingScore](#update-room-featuring-score) | jsonRpc | Update room featuring score |
| [/jsonRpc/room.updateRoomFeaturingBoost](#update-room-featuring-boost) | jsonRpc | Update room featuring boost |
| [/jsonRpc/room.setRoomAlias](#set-room-alias) | jsonRpc | Set room alias |
| [/jsonRpc/room.deleteRoomAlias](#delete-room-alias) | jsonRpc | Delete room alias |
| [/jsonRpc/room.expireRoomSubscription](#expire-room-subscription) | jsonRpc | Expire room subscription |
| [/jsonRpc/room.createNewRoomSubscription](#create-new-room-subscription) | jsonRpc | Create new room subscription |
| [/jsonRpc/room.listRooms](#list-rooms) | jsonRpc | List rooms |
| [/jsonRpc/room.searchRooms](#search-rooms) | jsonRpc | Search rooms |
| [/jsonRpc/room.listUserRooms](#list-user-rooms) | jsonRpc | List user rooms |
| [/jsonRpc/room.listUserAvailableRooms](#list-user-available-rooms) | jsonRpc | List user available rooms |
| [/jsonRpc/room.searchUserAvailableRooms](#search-user-available-rooms) | jsonRpc | Search user available rooms |
| [/jsonRpc/room.listUserProps](#list-user-props) | jsonRpc | List user props |
| [/jsonRpc/room.listProps](#list-props) | jsonRpc | List props |
| [/jsonRpc/room.listRoomProps](#list-room-props) | jsonRpc | List room props |
| [/jsonRpc/room.listRoomBooths](#list-room-booths) | jsonRpc | List room booths |
| [/jsonRpc/room.addRoomOwner](#add-room-owner) | jsonRpc | Add room owner |
| [/jsonRpc/room.getPropInvitations](#get-prop-invitations) | jsonRpc | Get prop invitations |
| [/jsonRpc/room.inviteToProp](#invite-to-prop) | jsonRpc | Invite to prop |
| [/jsonRpc/room.deletePropInvitation](#delete-prop-invitation) | jsonRpc | Delete prop invitation |
| [/jsonRpc/room.setPropTeamMemberByEmail](#set-prop-team-member-by-email) | jsonRpc | Set prop team member by email |
| [/jsonRpc/room.setPropTitle](#set-prop-title) | jsonRpc | Set prop title |
| [/jsonRpc/room.copyRoom](#copy-room) | jsonRpc | Copy room |
| [/jsonRpc/room.getSortingTable](#get-sorting-table) | jsonRpc | Get sorting table |
| [/jsonRpc/room.deleteResourcesFromSortingTable](#delete-resources-from-sorting-table) | jsonRpc | Delete resources from sorting table |
| [/jsonRpc/room.getTemplateStyles](#get-template-styles) | jsonRpc | Get template styles |
| [/jsonRpc/room.getTemplateRooms](#get-template-rooms) | jsonRpc | Get template rooms |
| [/jsonRpc/room.setRoomAsTemplate](#set-room-as-template) | jsonRpc | Set room as template |
| [/jsonRpc/room.unsetRoomTemplate](#unset-room-template) | jsonRpc | Unset room template |

<br>

<a name="parse-room-booths-spreadsheet"></a>

### Parse room booths spreadsheet

**HTTP Method:** POST

**Path:** /files/parseRoomBoothsSpreadsheet

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
multipart form with xslx spreadsheet file
</pre>

**Response:** 

<pre>
{
    "roomId": string
    "booths": [{
        "id": string
        "title": string
        "members": [ string ]
    }]
}
</pre>

<br>

<a name="parse-booths-members-spreadsheet"></a>

### Parse booths members spreadsheet

**HTTP Method:** POST

**Path:** /files/parseBoothsMembersSpreadsheet/{roomId}

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
multipart form with xslx spreadsheet file
</pre>

**Response:** 

<pre>
{
    "roomId": string
    "booths": [{
        "id": string
        "title": string
        "members": [ string ]
    }]
}
</pre>

<br>

<a name="generate-room-booths-spreadsheet"></a>

### Generate room booths spreadsheet

**HTTP Method:** GET

**Path:** /files/generateRoomBoothsSpreadsheet/{roomId}

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

<a name="update-room-booths-from-spreadsheet"></a>

### Update room booths from spreadsheet

**HTTP Method:** POST

**Path:** /files/updateRoomBoothsFromSpreadsheet

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
multipart form with xslx spreadsheet file
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="update-booths-members-from-spreadsheet"></a>

### Update booths members from spreadsheet

**HTTP Method:** POST

**Path:** /files/updateBoothsMembersFromSpreadsheet/{roomId}

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
multipart form with xslx spreadsheet file
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-room-model"></a>

### Get room model

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.getRoomModel

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

**Request:** 

<pre>
{
    "roomId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "room": { <a href="#room">room structure</a> }
        "featuring": { <a href="#featuring">featuring structure</a> } <span color="#1b1ef7"> // empty in case if user doesn't have permissions to manage network</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-room-metadata"></a>

### Update room metadata

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.updateRoomMetadata

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

**Request:** 

<pre>
{
    "roomId": string
    "metadata": {
        "name": string
        "description": string
        "location": string
        "privacy": string <span color="#1b1ef7"> // private/public/openForAttendees</span>
        "tags": [ string ]
        "firstStyle": string
    }
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="update-room-price"></a>

### Update room price

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.updateRoomPrice

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

**Request:** 

<pre>
{
    "roomId": string
    "price": float
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="delete-room"></a>

### Delete room

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.deleteRoom

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

**Request:** 

<pre>
{
    "roomId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="update-room-explorer-status"></a>

### Update room explorer status

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.updateRoomExplorerStatus

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "roomId": string
    "explorerStatus": string <span color="#1b1ef7"> // show/hide - allows to show/hide room in explorer</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="update-room-featuring-score"></a>

### Update room featuring score

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.updateRoomFeaturingScore

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "roomId": string
    "score": int
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="update-room-featuring-boost"></a>

### Update room featuring boost

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.updateRoomFeaturingBoost

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "roomId": string
    "boost": int
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="set-room-alias"></a>

### Set room alias

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.setRoomAlias

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "roomId": string
    "alias": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="delete-room-alias"></a>

### Delete room alias

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.deleteRoomAlias

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "roomId": string
    "alias": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="expire-room-subscription"></a>

### Expire room subscription

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.expireRoomSubscription

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "roomId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="create-new-room-subscription"></a>

### Create new room subscription

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.createNewRoomSubscription

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "roomId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="list-rooms"></a>

### List rooms

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.listRooms

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "rooms": [{ <a href="#room">room structure</a> }]
        "total": int <span color="#1b1ef7"> // total rooms in network (matching the query)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-rooms"></a>

### Search rooms

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.searchRooms

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "text": string
    "onlyPublic": bool
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "rooms": [{ <a href="#room">room structure</a> }]
        "total": int <span color="#1b1ef7"> // total rooms in network (matching the query)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-user-rooms"></a>

### List user rooms

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.listUserRooms

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "rooms": [{ <a href="#room">room structure</a> }]
        "total": int <span color="#1b1ef7"> // total rooms in network (matching the query)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-user-available-rooms"></a>

### List user available rooms

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.listUserAvailableRooms

**Request:** 

<pre>
{
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "rooms": [{ <a href="#room">room structure</a> }]
        "total": int <span color="#1b1ef7"> // total rooms in network (matching the query)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-user-available-rooms"></a>

### Search user available rooms

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.searchUserAvailableRooms

**Request:** 

<pre>
{
    "text": string
    "onlyPublic": bool
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "rooms": [{ <a href="#room">room structure</a> }]
        "total": int <span color="#1b1ef7"> // total rooms in network (matching the query)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-user-props"></a>

### List user props

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.listUserProps

**Description:** Api returns list of user props (according to filter parameters).

**Request:** 

<pre>
{
    "roomId": string <span color="#1b1ef7"> // optional, filter results by room</span>
    "propTypes": [ string ] <span color="#1b1ef7"> // optional, filter results by prop type</span>
    "asPropManager": bool <span color="#1b1ef7"> // if true, returns props where user is assigned as admin or team member</span>
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "props": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "mobileGeometry": { <a href="#geometry">geometry structure</a> }
            "title": string
            "description": string
            "tags": [ string ]
            "propTypes": [ string ] <span color="#1b1ef7"> // booth/fileCabinet/socialCircleStatic/socialCircleDynamic/entireRoomChat</span>
            "parentId": string <span color="#1b1ef7"> // prop id of parent where current prop is standing</span>
            "actionType": string
            "webLink": string
            "webTitle": string
            "isInteractive": bool <span color="#1b1ef7"> // show prop when clicking next/previous in room prop list</span>
            "showType": int <span color="#1b1ef7"> // 0 - None, 1 - GoldPanel, 2 - BoothPanel</span>
            "contentPickerType": int <span color="#1b1ef7"> // 0 - Default, 1 - AudioContainer, 2 - VideoContainer</span>
            "contentSorting": {
                "type": string <span color="#1b1ef7"> // default/name/date/type/size</span>
                "direction": string <span color="#1b1ef7"> // asc/desc</span>
            }
            "contentAppend": string <span color="#1b1ef7"> // default direction for content appending (start/end)</span>
            "isAllowTextchat": bool <span color="#1b1ef7"> // if true - allow prop textchat</span>
            "allowUserParams": bool <span color="#1b1ef7"> // if true - allow custom params per user</span>
            "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client defined params</span>
            "actions": [{ <a href="#programmatic-action-with-children">programmatic action with children structure</a> }] <span color="#1b1ef7"> // custom programmatic actions from users</span>
            "dataBound": { <span color="#1b1ef7"> // bound prop data to some action</span>
                "isEnabled": bool
                "dataBoundAction": string
            }
            "assetId": string
            "assetTitle": string
            "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
            "roomId": string
            "roomTitle": string
            "styleId": string
            "panelId": string
            "placementAreaId": string <span color="#1b1ef7"> // in case if prop is a part of placement area</span>
        }]
        "total": int <span color="#1b1ef7"> // total props in network (matching the query)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-props"></a>

### List props

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.listProps

**Description:** Api returns list of all network props (according to filter parameters).

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

**Request:** 

<pre>
{
    "roomId": string <span color="#1b1ef7"> // optional, filter results by room</span>
    "propTypes": [ string ] <span color="#1b1ef7"> // optional, filter results by prop type</span>
    "asPropManager": bool <span color="#1b1ef7"> // if true, returns props where user is assigned as admin or team member</span>
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "props": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "mobileGeometry": { <a href="#geometry">geometry structure</a> }
            "title": string
            "description": string
            "tags": [ string ]
            "propTypes": [ string ] <span color="#1b1ef7"> // booth/fileCabinet/socialCircleStatic/socialCircleDynamic/entireRoomChat</span>
            "parentId": string <span color="#1b1ef7"> // prop id of parent where current prop is standing</span>
            "actionType": string
            "webLink": string
            "webTitle": string
            "isInteractive": bool <span color="#1b1ef7"> // show prop when clicking next/previous in room prop list</span>
            "showType": int <span color="#1b1ef7"> // 0 - None, 1 - GoldPanel, 2 - BoothPanel</span>
            "contentPickerType": int <span color="#1b1ef7"> // 0 - Default, 1 - AudioContainer, 2 - VideoContainer</span>
            "contentSorting": {
                "type": string <span color="#1b1ef7"> // default/name/date/type/size</span>
                "direction": string <span color="#1b1ef7"> // asc/desc</span>
            }
            "contentAppend": string <span color="#1b1ef7"> // default direction for content appending (start/end)</span>
            "isAllowTextchat": bool <span color="#1b1ef7"> // if true - allow prop textchat</span>
            "allowUserParams": bool <span color="#1b1ef7"> // if true - allow custom params per user</span>
            "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client defined params</span>
            "actions": [{ <a href="#programmatic-action-with-children">programmatic action with children structure</a> }] <span color="#1b1ef7"> // custom programmatic actions from users</span>
            "dataBound": { <span color="#1b1ef7"> // bound prop data to some action</span>
                "isEnabled": bool
                "dataBoundAction": string
            }
            "assetId": string
            "assetTitle": string
            "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
            "roomId": string
            "roomTitle": string
            "styleId": string
            "panelId": string
            "placementAreaId": string <span color="#1b1ef7"> // in case if prop is a part of placement area</span>
        }]
        "total": int <span color="#1b1ef7"> // total props in network (matching the query)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-room-props"></a>

### List room props

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.listRoomProps

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

**Request:** 

<pre>
{
    "roomId": string
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "props": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "mobileGeometry": { <a href="#geometry">geometry structure</a> }
            "title": string
            "description": string
            "tags": [ string ]
            "propTypes": [ string ] <span color="#1b1ef7"> // booth/fileCabinet/socialCircleStatic/socialCircleDynamic/entireRoomChat</span>
            "parentId": string <span color="#1b1ef7"> // prop id of parent where current prop is standing</span>
            "actionType": string
            "webLink": string
            "webTitle": string
            "isInteractive": bool <span color="#1b1ef7"> // show prop when clicking next/previous in room prop list</span>
            "showType": int <span color="#1b1ef7"> // 0 - None, 1 - GoldPanel, 2 - BoothPanel</span>
            "contentPickerType": int <span color="#1b1ef7"> // 0 - Default, 1 - AudioContainer, 2 - VideoContainer</span>
            "contentSorting": {
                "type": string <span color="#1b1ef7"> // default/name/date/type/size</span>
                "direction": string <span color="#1b1ef7"> // asc/desc</span>
            }
            "contentAppend": string <span color="#1b1ef7"> // default direction for content appending (start/end)</span>
            "isAllowTextchat": bool <span color="#1b1ef7"> // if true - allow prop textchat</span>
            "allowUserParams": bool <span color="#1b1ef7"> // if true - allow custom params per user</span>
            "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client defined params</span>
            "actions": [{ <a href="#programmatic-action-with-children">programmatic action with children structure</a> }] <span color="#1b1ef7"> // custom programmatic actions from users</span>
            "dataBound": { <span color="#1b1ef7"> // bound prop data to some action</span>
                "isEnabled": bool
                "dataBoundAction": string
            }
            "assetId": string
            "assetTitle": string
            "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
            "roomId": string
            "roomTitle": string
            "styleId": string
            "panelId": string
            "placementAreaId": string <span color="#1b1ef7"> // in case if prop is a part of placement area</span>
        }]
        "total": int <span color="#1b1ef7"> // total props in network (matching the query)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-room-booths"></a>

### List room booths

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.listRoomBooths

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

**Request:** 

<pre>
{
    "roomId": string
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "props": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "mobileGeometry": { <a href="#geometry">geometry structure</a> }
            "title": string
            "description": string
            "tags": [ string ]
            "propTypes": [ string ] <span color="#1b1ef7"> // booth/fileCabinet/socialCircleStatic/socialCircleDynamic/entireRoomChat</span>
            "parentId": string <span color="#1b1ef7"> // prop id of parent where current prop is standing</span>
            "actionType": string
            "webLink": string
            "webTitle": string
            "isInteractive": bool <span color="#1b1ef7"> // show prop when clicking next/previous in room prop list</span>
            "showType": int <span color="#1b1ef7"> // 0 - None, 1 - GoldPanel, 2 - BoothPanel</span>
            "contentPickerType": int <span color="#1b1ef7"> // 0 - Default, 1 - AudioContainer, 2 - VideoContainer</span>
            "contentSorting": {
                "type": string <span color="#1b1ef7"> // default/name/date/type/size</span>
                "direction": string <span color="#1b1ef7"> // asc/desc</span>
            }
            "contentAppend": string <span color="#1b1ef7"> // default direction for content appending (start/end)</span>
            "isAllowTextchat": bool <span color="#1b1ef7"> // if true - allow prop textchat</span>
            "allowUserParams": bool <span color="#1b1ef7"> // if true - allow custom params per user</span>
            "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client defined params</span>
            "actions": [{ <a href="#programmatic-action-with-children">programmatic action with children structure</a> }] <span color="#1b1ef7"> // custom programmatic actions from users</span>
            "dataBound": { <span color="#1b1ef7"> // bound prop data to some action</span>
                "isEnabled": bool
                "dataBoundAction": string
            }
            "assetId": string
            "assetTitle": string
            "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
            "roomId": string
            "roomTitle": string
            "styleId": string
            "panelId": string
            "placementAreaId": string <span color="#1b1ef7"> // in case if prop is a part of placement area</span>
        }]
        "total": int <span color="#1b1ef7"> // total props in network (matching the query)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="add-room-owner"></a>

### Add room owner

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.addRoomOwner

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

**Request:** 

<pre>
{
    "userId": string
    "roomId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-prop-invitations"></a>

### Get prop invitations

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.getPropInvitations

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

prop.manage /networkId/roomId/propId

**Request:** 

<pre>
{
    "roomId": string
    "propId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "invitations": [{ <a href="#prop-invitation-info">prop invitation info structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="invite-to-prop"></a>

### Invite to prop

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.inviteToProp

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

prop.manage /networkId/roomId/propId

**Request:** 

<pre>
{
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
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "invitation": { <a href="#prop-invitation-info">prop invitation info structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-prop-invitation"></a>

### Delete prop invitation

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.deletePropInvitation

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

prop.manage /networkId/roomId/propId

**Request:** 

<pre>
{
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
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="set-prop-team-member-by-email"></a>

### Set prop team member by email

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.setPropTeamMemberByEmail

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

prop.manage /networkId/roomId/propId

**Request:** 

<pre>
{
    "roomId": string
    "propId": string
    "email": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="set-prop-title"></a>

### Set prop title

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.setPropTitle

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

prop.manage /networkId/roomId/propId

**Request:** 

<pre>
{
    "roomId": string
    "propId": string
    "title": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="copy-room"></a>

### Copy room

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.copyRoom

**Permissions:** 

room.copy

**Request:** 

<pre>
{
    "roomId": string
    "targetNetworkId": string
    "targetOwnerId": string
    "roomName": string
    "roomPrivacy": string
    "copyRoomLinks": bool
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-sorting-table"></a>

### Get sorting table

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.getSortingTable

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

**Request:** 

<pre>
{
    "roomId": string
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "content": [{ <a href="#resource">resource structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-resources-from-sorting-table"></a>

### Delete resources from sorting table

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.deleteResourcesFromSortingTable

**Permissions:** 

network.manage /networkId

room.manage /networkId/roomId

**Request:** 

<pre>
{
    "roomId": string
    "resourceIds": [ string ]
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-template-styles"></a>

### Get template styles

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.getTemplateStyles

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
        "styles": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-template-rooms"></a>

### Get template rooms

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.getTemplateRooms

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "rooms": [{ <a href="#room">room structure</a> }]
        "total": int <span color="#1b1ef7"> // total rooms in network (matching the query)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-room-as-template"></a>

### Set room as template

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.setRoomAsTemplate

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "roomId": string
    "styles": [ string ]
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="unset-room-template"></a>

### Unset room template

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/room.unsetRoomTemplate

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "roomId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="room"></a>

#### Room

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "explorerStatus": string <span color="#1b1ef7"> // show/hide room in explorer</span>
    "subscriptionStatus": string <span color="#1b1ef7"> // free/active/expired</span>
    "environmentId": string <span color="#1b1ef7"> // id of environment asset</span>
    "price": float <span color="#1b1ef7"> // price for room template</span>
    "allowEmbed": bool <span color="#1b1ef7"> // allow embedding room to non valuverse web pages</span>
    "roomIdentity": string <span color="#1b1ef7"> // verus identity of room</span>
    "metadata": {
        "name": string
        "description": string
        "location": string
        "privacy": string <span color="#1b1ef7"> // private/public/openForAttendees</span>
        "tags": [ string ]
        "firstStyle": string
    }
    "alias": string
    "group": string
    "domains": [ string ]
    "thumbnail": { <a href="#resource">resource structure</a> }
    "preview": { <a href="#resource">resource structure</a> }
    "content": [{ <a href="#room-style">room style structure</a> }]
    "owners": [{ <a href="#user-simple">user simple structure</a> }]
    "invitedUsers": [{ <a href="#user-simple">user simple structure</a> }]
    "stories": [{ <a href="#storyline">storyline structure</a> }]
    "cameraPositions": [{ <a href="#camera-position">camera position structure</a> }]
    "hasJourneyPath": bool
    "hasPlacementAreas": bool
    "templateStyles": [ string ]
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

<a name="room-style"></a>

#### Room Style

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "assetId": string
    "panels": [{ <a href="#room-panel">room panel structure</a> }]
}
</pre>

<br>

<a name="room-panel"></a>

#### Room Panel

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "type": string
    "mobileGeometry": { <a href="#geometry">geometry structure</a> }
    "props": [{ <a href="#room-prop">room prop structure</a> }]
}
</pre>

<br>

<a name="geometry"></a>

#### Geometry

<pre>
{
    "scale": float
    "size": { <a href="#xyz">xyz structure</a> }
    "position": { <a href="#xyz">xyz structure</a> }
    "rotation": { <a href="#xyz">xyz structure</a> }
}
</pre>

<br>

<a name="xyz"></a>

#### XYZ

<pre>
{
    "x": float
    "y": float
    "z": float
}
</pre>

<br>

<a name="room-prop"></a>

#### Room Prop

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "mobileGeometry": { <a href="#geometry">geometry structure</a> }
    "title": string
    "description": string
    "tags": [ string ]
    "propTypes": [ string ] <span color="#1b1ef7"> // booth/fileCabinet/socialCircleStatic/socialCircleDynamic/entireRoomChat</span>
    "parentId": string <span color="#1b1ef7"> // prop id of parent where current prop is standing</span>
    "actionType": string
    "webLink": string
    "webTitle": string
    "isInteractive": bool <span color="#1b1ef7"> // show prop when clicking next/previous in room prop list</span>
    "showType": int <span color="#1b1ef7"> // 0 - None, 1 - GoldPanel, 2 - BoothPanel</span>
    "contentPickerType": int <span color="#1b1ef7"> // 0 - Default, 1 - AudioContainer, 2 - VideoContainer</span>
    "contentSorting": {
        "type": string <span color="#1b1ef7"> // default/name/date/type/size</span>
        "direction": string <span color="#1b1ef7"> // asc/desc</span>
    }
    "contentAppend": string <span color="#1b1ef7"> // default direction for content appending (start/end)</span>
    "isAllowTextchat": bool <span color="#1b1ef7"> // if true - allow prop textchat</span>
    "allowUserParams": bool <span color="#1b1ef7"> // if true - allow custom params per user</span>
    "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client defined params</span>
    "actions": [{ <a href="#programmatic-action-with-children">programmatic action with children structure</a> }] <span color="#1b1ef7"> // custom programmatic actions from users</span>
    "dataBound": { <span color="#1b1ef7"> // bound prop data to some action</span>
        "isEnabled": bool
        "dataBoundAction": string
    }
    "assetId": string
    "assetTitle": string
    "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
    "roomId": string
    "roomTitle": string
    "styleId": string
    "panelId": string
    "placementAreaId": string <span color="#1b1ef7"> // in case if prop is a part of placement area</span>
    "contentSource": { <span color="#1b1ef7"> // if present, current prop will fetch content from source prop</span>
        "roomId": string
        "propId": string
    }
    "contentCount": int <span color="#1b1ef7"> // amount of resources in prop</span>
    "content": [{ <a href="#resource">resource structure</a> }] <span color="#1b1ef7"> // prop resources</span>
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

<br>

<a name="storyline"></a>

#### Storyline

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "title": string
    "data": string
    "published": bool
    "roomId": string
    "propId": string
}
</pre>

<br>

<a name="camera-position"></a>

#### Camera Position

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "position": { <a href="#xyz">xyz structure</a> }
    "rotation": { <a href="#xyzw">xyzw structure</a> }
    "name": string
    "cameraMode": int
}
</pre>

<br>

<a name="xyzw"></a>

#### XYZW

<pre>
{
    "x": float
    "y": float
    "z": float
    "w": float
}
</pre>

<br>

<a name="featuring"></a>

#### Featuring

<pre>
{
    "views": int
    "multiplier": float
    "boost": int
    "total": int
    "score": int
    "lastCalculated": timestamp
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
    "invitedUser": { <a href="#user-simple">user simple structure</a> }
}
</pre>

