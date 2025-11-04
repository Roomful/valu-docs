<br>

<a name="admin-service-api"></a>

## Admin service API



All requests have network context. Add header 'X-Network' in order to select network.

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/rpc/admin.disableUser](#disable-user) | jsonRpc | Disable user |
| [/api/v0/rpc/admin.enableUser](#enable-user) | jsonRpc | Enable user |
| [/api/v0/rpc/admin.createEvent](#create-event) | jsonRpc | Create event |
| [/api/v0/rpc/admin.deleteEvent](#delete-event) | jsonRpc | Delete event |
| [/api/v0/rpc/admin.getEvents](#get-events) | jsonRpc | Get events |
| [/api/v0/rpc/admin.listNetworks](#list-networks) | jsonRpc | List networks |
| [/api/v0/rpc/asset.updateMetadata](#update-metadata) | jsonRpc | Update metadata |
| [/api/v0/rpc/asset.updatePrefab](#update-prefab) | jsonRpc | Update prefab |
| [/api/v0/rpc/balance.getUserBalance](#get-user-balance) | jsonRpc | Get user balance |
| [/api/v0/rpc/balance.addUserToken](#add-user-token) | jsonRpc | Add user token |
| [/api/v0/rpc/matchmaking.getQuestionnaireTemplate](#get-questionnaire-template) | jsonRpc | Get questionnaire template |
| [/api/v0/rpc/matchmaking.setQuestionnaireTemplate](#set-questionnaire-template) | jsonRpc | Set questionnaire template |
| [/api/v0/rpc/network.listNetworkModels](#list-network-models) | jsonRpc | List network models |
| [/api/v0/rpc/network.createNetwork](#create-network) | jsonRpc | Create network |
| [/api/v0/rpc/network.activateNetwork](#activate-network) | jsonRpc | Activate network |
| [/api/v0/rpc/network.disableNetwork](#disable-network) | jsonRpc | Disable network |
| [/api/v0/rpc/network.setNetworkThumbnail](#set-network-thumbnail) | jsonRpc | Set network thumbnail |
| [/api/v0/rpc/resource.createResource](#create-resource) | jsonRpc | Create resource |
| [/api/v0/rpc/resource.listResources](#list-resources) | jsonRpc | List resources |
| [/api/v0/rpc/resource.getUploadLink](#get-upload-link) | jsonRpc | Get upload link |
| [/api/v0/rpc/resource.completeUpload](#complete-upload) | jsonRpc | Complete upload |
| [/api/v0/rpc/resource.updateResource](#update-resource) | jsonRpc | Update resource |
| [/api/v0/rpc/resource.removeResource](#remove-resource) | jsonRpc | Remove resource |
| [/api/v0/rpc/room.updateRoomExplorerStatus](#update-room-explorer-status) | jsonRpc | Update room explorer status |
| [/api/v0/rpc/room.updateRoomFeaturingMultiplier](#update-room-featuring-multiplier) | jsonRpc | Update room featuring multiplier |
| [/api/v0/rpc/room.updateRoomFeaturingBoost](#update-room-featuring-boost) | jsonRpc | Update room featuring boost |
| [/api/v0/rpc/room.updateRoomFeaturingScore](#update-room-featuring-score) | jsonRpc | Update room featuring score |
| [/api/v0/rpc/room.setTutorialRoom](#set-tutorial-room) | jsonRpc | Set tutorial room |
| ~~[/api/v0/rpc/room.setRoomAsTemplate](#set-room-as-template)~~ | jsonRpc | Set room as template |
| ~~[/api/v0/rpc/room.unsetRoomTemplate](#unset-room-template)~~ | jsonRpc | Unset room template |
| ~~[/api/v0/rpc/room.getTemplateRooms](#get-template-rooms)~~ | jsonRpc | Get template rooms |
| [/api/v0/rpc/room.updateStorylineFeaturingMultiplier](#update-storyline-featuring-multiplier) | jsonRpc | Update storyline featuring multiplier |
| [/api/v0/rpc/room.updateStorylineFeaturingBoost](#update-storyline-featuring-boost) | jsonRpc | Update storyline featuring boost |
| [/api/v0/rpc/room.updateStorylineFeaturingScore](#update-storyline-featuring-score) | jsonRpc | Update storyline featuring score |
| [/api/v0/rpc/user.setPassword](#set-password) | jsonRpc | Set password |

<br>

<a name="disable-user"></a>

### Disable user

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/admin.disableUser

**Request:** 

<pre>
{
    "id": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="enable-user"></a>

### Enable user

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/admin.enableUser

**Request:** 

<pre>
{
    "id": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-event"></a>

### Create event

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/admin.createEvent

**Request:** 

<pre>
{
    "event": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "type": string
        "conditions": {
        }
        "data": { custom structure }
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
            "type": string
            "conditions": {
            }
            "data": { custom structure }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-event"></a>

### Delete event

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/admin.deleteEvent

**Request:** 

<pre>
{
    "id": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-events"></a>

### Get events

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/admin.getEvents

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
            "type": string
            "conditions": {
            }
            "data": { custom structure }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-networks"></a>

### List networks

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/admin.listNetworks

**Description:** List active networks. Deprecated, use /api/v0/rpc/network.listNetworkModels instead.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "networks": [{ <a href="#network-private">network private structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-metadata"></a>

### Update metadata

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/asset.updateMetadata

**Request:** 

<pre>
{
    "asset": string
    "title": string
    "tags": [ string ]
    "invokeType": string
    "minScale": float
    "maxScale": float
    "canStack": bool
    "contentType": [ string ]
    "prefab": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "asset": { <a href="#asset-bundle-prop">asset bundle prop structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-prefab"></a>

### Update prefab

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/asset.updatePrefab

**Request:** 

<pre>
{
    "asset": string
    "prefab": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "asset": { <a href="#asset-bundle-prop">asset bundle prop structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-balance"></a>

### Get user balance

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/balance.getUserBalance

**Request:** 

<pre>
{
    "userId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "balance": {
            "token": float
            "user": string
            "updated": timestamp
            "created": timestamp
            "transactions": {
                "spending": map[string]float
                "mining": map[string]float
                "buying": map[string]float
            }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="add-user-token"></a>

### Add user token

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/balance.addUserToken

**Request:** 

<pre>
{
    "userId": string
    "count": float
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-questionnaire-template"></a>

### Get questionnaire template

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/matchmaking.getQuestionnaireTemplate

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

<a name="set-questionnaire-template"></a>

### Set questionnaire template

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/matchmaking.setQuestionnaireTemplate

**Request:** 

<pre>
{
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
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-network-models"></a>

### List network models

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/network.listNetworkModels

**Request:** 

<pre>
{
    "onlyActive": bool
    "networkIds": [ string ]
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "networks": [{ <a href="#network-private">network private structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-network"></a>

### Create network

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/network.createNetwork

**Request:** 

<pre>
{
    "fullName": string
    "type": string <span color="#1b1ef7"> // Public/Matchmaking/BusinessSocial/NetworkConference</span>
    "thumbnail": string <span color="#1b1ef7"> // id of pre uploaded resource</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network-private">network private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="activate-network"></a>

### Activate network

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/network.activateNetwork

**Request:** 

<pre>
{
    "networkId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network-private">network private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="disable-network"></a>

### Disable network

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/network.disableNetwork

**Request:** 

<pre>
{
    "networkId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network-private">network private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-network-thumbnail"></a>

### Set network thumbnail

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/network.setNetworkThumbnail

**Request:** 

<pre>
{
    "networkId": string
    "thumbnail": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network-private">network private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-resource"></a>

### Create resource

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/resource.createResource

**Request:** 

<pre>
{
    "resource": { <a href="#resource">resource structure</a> }
    "isActive": bool
    "internalNotes": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resource": { <a href="#resource-private">resource private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-resources"></a>

### List resources

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/resource.listResources

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "resources": [{ <a href="#resource-private">resource private structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-upload-link"></a>

### Get upload link

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/resource.getUploadLink

**Request:** 

<pre>
{
    "resource": string
    "origin": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "url": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="complete-upload"></a>

### Complete upload

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/resource.completeUpload

**Request:** 

<pre>
{
    "resource": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resource": { <a href="#resource-private">resource private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-resource"></a>

### Update resource

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/resource.updateResource

**Request:** 

<pre>
{
    "resource": string
    "attributes": {
        "title": string
        "description": string
        "location": string
        "date": string
        "category": string
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // custom params set by client application</span>
        "params": string <span color="#1b1ef7"> // deprecated</span>
    }
    "isActive": bool
    "internalNotes": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resource": { <a href="#resource-private">resource private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="remove-resource"></a>

### Remove resource

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/resource.removeResource

**Request:** 

<pre>
{
    "resource": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-room-explorer-status"></a>

### Update room explorer status

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/room.updateRoomExplorerStatus

**Request:** 

<pre>
{
    "room": string
    "explorerStatus": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "room": { <a href="#room">room structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-room-featuring-multiplier"></a>

### Update room featuring multiplier

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/room.updateRoomFeaturingMultiplier

**Request:** 

<pre>
{
    "userId": string
    "room": string
    "storyline": string
    "score": int
    "multiplier": float
    "boost": int
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-room-featuring-boost"></a>

### Update room featuring boost

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/room.updateRoomFeaturingBoost

**Request:** 

<pre>
{
    "userId": string
    "room": string
    "storyline": string
    "score": int
    "multiplier": float
    "boost": int
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-room-featuring-score"></a>

### Update room featuring score

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/room.updateRoomFeaturingScore

**Request:** 

<pre>
{
    "userId": string
    "room": string
    "storyline": string
    "score": int
    "multiplier": float
    "boost": int
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-tutorial-room"></a>

### Set tutorial room

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/room.setTutorialRoom

**Request:** 

<pre>
{
    "roomId": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-room-as-template"></a>

### Set room as template

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/room.setRoomAsTemplate

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "room": string
    "style": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="unset-room-template"></a>

### Unset room template

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/room.unsetRoomTemplate

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "room": string
    "style": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-template-rooms"></a>

### Get template rooms

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/room.getTemplateRooms

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "room": string
    "style": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "rooms": [{ <a href="#room">room structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-storyline-featuring-multiplier"></a>

### Update storyline featuring multiplier

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/room.updateStorylineFeaturingMultiplier

**Request:** 

<pre>
{
    "userId": string
    "room": string
    "storyline": string
    "score": int
    "multiplier": float
    "boost": int
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-storyline-featuring-boost"></a>

### Update storyline featuring boost

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/room.updateStorylineFeaturingBoost

**Request:** 

<pre>
{
    "userId": string
    "room": string
    "storyline": string
    "score": int
    "multiplier": float
    "boost": int
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-storyline-featuring-score"></a>

### Update storyline featuring score

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/room.updateStorylineFeaturingScore

**Request:** 

<pre>
{
    "userId": string
    "room": string
    "storyline": string
    "score": int
    "multiplier": float
    "boost": int
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-password"></a>

### Set password

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/user.setPassword

**Request:** 

<pre>
{
    "userId": string
    "password": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="network-private"></a>

#### Network Private

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "fullName": string
    "type": string <span color="#1b1ef7"> // Public/Matchmaking/BusinessSocial/NetworkConference/Humanity</span>
    "thumbnail": string <span color="#1b1ef7"> // resourceId</span>
    "parentNetworkId": string <span color="#1b1ef7"> // if not empty, current network is a sub network</span>
    "simpleName": string
    "databaseName": string
    "searchIndexPrefix": string
    "isActive": bool
    "isDefault": bool
    "isHidden": bool <span color="#1b1ef7"> // list only for developers while client request</span>
    "subscriptionOptions": [{
        "type": string
        "action": string
    }]
    "settings": {
        "permissions": {
            "publishRoom": [ string ]
        }
        "general": {
            "countryId": int <span color="#1b1ef7"> // in case if network is dedicated to a country</span>
            "packageName": string <span color="#1b1ef7"> // in case if network has package specific content</span>
            "applicationName": string <span color="#1b1ef7"> // in case if network has its own application</span>
            "domainNames": [ string ] <span color="#1b1ef7"> // in case if network has dedicated domain names</span>
            "presentationDomain": string <span color="#1b1ef7"> // default domain for presentation (without redactor)</span>
            "studioDomain": string <span color="#1b1ef7"> // default domain for studio (with redactor)</span>
            "shareDomain": string <span color="#1b1ef7"> // domain for share server</span>
            "ssoProviders": [ string ] <span color="#1b1ef7"> // epam, epam.social[google,facebook,linkedin]</span>
            "loaderType": int <span color="#1b1ef7"> // 0 - logo, 1 - hybrid, 2 - slideshow, 3 - video</span>
            "logoUrl": string <span color="#1b1ef7"> // url</span>
            "loadingVideoUrl": string <span color="#1b1ef7"> // url or youtube id</span>
            "defaultPassword": string <span color="#1b1ef7"> // default password for conference</span>
            "autoVerification": bool <span color="#1b1ef7"> // if true, all newly registered users are verified by default</span>
            "disableEmailLogin": bool <span color="#1b1ef7"> // if true, client application shouldn't show email login option</span>
            "disableSsoLogin": bool <span color="#1b1ef7"> // if true, client application shouldn't show sso login options</span>
            "sendTextchatEmail": bool <span color="#1b1ef7"> // if true, send email that user has new direct textchat message</span>
            "templateStyles": [ string ] <span color="#1b1ef7"> // filter network templates by styles</span>
            "disableDefaultTemplates": bool <span color="#1b1ef7"> // if true, return room templates only from current network</span>
        }
        "defaults": {
            "metaverseCurrency": string <span color="#1b1ef7"> // in case when network has its own currency</span>
            "enablePayments": bool <span color="#1b1ef7"> // if true - client could purchase products; else - all products are free</span>
            "enableTokenomics": bool <span color="#1b1ef7"> // if true - user will mint or spend tokens for his actions (like placing content in room)</span>
            "disableBalance": bool <span color="#1b1ef7"> // DEPRECATED</span>
            "roomId": string <span color="#1b1ef7"> // default room in network (e.g. Agora in humanity)</span>
            "storylineVideoSound": bool <span color="#1b1ef7"> // enables video sound in storyline by default</span>
            "hasQuestionnaire": bool <span color="#1b1ef7"> // enables matchmaking questionnaire</span>
            "hasSearchCard": bool <span color="#1b1ef7"> // enables matchmaking search by search card</span>
            "hasGamingBalance": bool <span color="#1b1ef7"> // enables gaming balance</span>
            "hasAnalytics": bool <span color="#1b1ef7"> // enables analytics</span>
            "allUsersAreConnected": bool <span color="#1b1ef7"> // if true, all users in network are friends by default</span>
            "disableOwnerBadge": bool <span color="#1b1ef7"> // if true, disables room owner badge (crown) near avatar</span>
            "disableFavoriteRooms": bool <span color="#1b1ef7"> // if true, disables favorite room appearance on client</span>
            "disableShareRoom": bool <span color="#1b1ef7"> // if true, disables room sharing</span>
            "disableRoomCreation": bool <span color="#1b1ef7"> // if true, disables room creation on client</span>
            "orderByFirstComments": bool <span color="#1b1ef7"> // show first resource comments first</span>
            "hideTextchat": bool <span color="#1b1ef7"> // if true, client shouldn't show textchat UI</span>
            "hideVideochat": bool <span color="#1b1ef7"> // if true, client shouldn't show videochat UI</span>
            "hideSocialSessions": bool <span color="#1b1ef7"> // if true, client shouldn't show social sessions UI</span>
            "allowHostSetup": bool <span color="#1b1ef7"> // if true, allows user to setup personalised custom params for props in room</span>
            "socialCircleAsset": string <span color="#1b1ef7"> // id of default asset for dynamic social circle</span>
            "socialCircleLimit": int <span color="#1b1ef7"> // sets social circle limit, 0 = no limit</span>
            "allowAnonymous": bool <span color="#1b1ef7"> // if true, users can access network without authorization</span>
            "onlyVerifiedAccounts": bool <span color="#1b1ef7"> // if true, server would require to verify email before creating new user session</span>
            "singleScreenAuth": bool <span color="#1b1ef7"> // if true, show registration and authorization on the same scene</span>
            "requireZipCode": bool <span color="#1b1ef7"> // if true, zip code should be required field during registration</span>
            "paymentProviders": [ string ] <span color="#1b1ef7"> // restricts use of payment providers (stripe/braintree/apple) in network; if empty, all providers are available</span>
            "aiEndpoint": string <span color="#1b1ef7"> // address for AI server</span>
            "gamificationParticlesIndex": int <span color="#1b1ef7"> // 0 - default, 1 - epam</span>
            "colorizationSchemeType": int <span color="#1b1ef7"> // 0 - Default, 1 - Fabuwood</span>
            "defaultNavigationMode": int <span color="#1b1ef7"> // 0 - classic, 1 - advanced, 2 - pro</span>
            "defaultButtonAppearance": int <span color="#1b1ef7"> // 0 - default, 1 - show, 2 - hide</span>
            "hasCascadeTextchatSkin": bool <span color="#1b1ef7"> // textchat cascade appearance in application</span>
            "animatedBackButton": bool <span color="#1b1ef7"> // animate back button icon in application</span>
            "hasExpo": bool <span color="#1b1ef7"> // informs clients that the network has expo</span>
            "expoStartDate": timestamp <span color="#1b1ef7"> // timestamp when conference starts</span>
            "expoEndDate": timestamp <span color="#1b1ef7"> // timestamp when conference ends</span>
            "hasAttendees": bool <span color="#1b1ef7"> // enables additional room privacy settings</span>
        }
        "dataCollection": {
            "useDefault": bool <span color="#1b1ef7"> // if true, network will use data collection server from default network</span>
            "clientUrl": string
            "systemUrl": string
            "clientId": string
            "authKey": string
        }
        "matchmaking": {
            "autoInviteSupportersToIdealMatchRoom": bool
        }
        "videochat": {
            "defaultVideochatSettings": {
                "videochatMode": string <span color="#1b1ef7"> // videochat/conference</span>
                "videochatType": string <span color="#1b1ef7"> // twilio only (peer-to-peer/group/group-small)</span>
                "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
                "videochatInitUser": string <span color="#1b1ef7"> // who can start the videochat (any/manager)</span>
                "excludeListeners": bool <span color="#1b1ef7"> // don't show non-promoted videochat users</span>
                "usePresentationBoard": bool <span color="#1b1ef7"> // use presentation board as share screen media</span>
                "enableStreaming": bool <span color="#1b1ef7"> // enable videochat streaming to non participants</span>
                "notificationMode": int <span color="#1b1ef7"> // notification mode for videochat events</span>
                "autoPromotion": {
                    "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
                    "autoPromotionLimit": int <span color="#1b1ef7"> // limit of participants with automatic voice permissions</span>
                    "autoDemoteOnLimit": bool <span color="#1b1ef7"> // demote participants that were automatically promoted</span>
                }
                "limitSettings": {
                    "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
                    "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
                }
            }
        }
    }
    "pluginSettings": {
        "expoTitle": string
        "disclaimer": string
        "style": string
        "logoUrl": string
        "expositionDomain": string
        "scroll": string
        "appStoreId": string
        "googleStoreId": string
        "autoPlayOnClick": bool
        "autoPlayOnStart": bool
        "enablePlugin": bool
        "initRoute": {
            "room": string
            "prop": string
        }
        "menuItems": [{
            "directory": string
            "link": string
            "title": string
            "room": string
            "prop": string
            "target": string
            "onlyForAttendees": bool <span color="#1b1ef7"> // if true, menu item will be greyed out until user has network.attendee permission</span>
        }]
        "helpLink": {
            "link": string
            "title": string
            "target": string
        }
        "directory": [{ <span color="#1b1ef7"> // directory item could be nested or single</span>
            "title": string
            "room": string <span color="#1b1ef7"> // target room id</span>
            "prop": string <span color="#1b1ef7"> // target prop id</span>
            "tag": string <span color="#1b1ef7"> // fetch rooms with a tag</span>
            "tagSortBy": string <span color="#1b1ef7"> // popularity/userActivity</span>
            "target": string
            "onlyForAttendees": bool <span color="#1b1ef7"> // if true, directory item will be greyed out until user has network.attendee permission</span>
            "link": string <span color="#1b1ef7"> // link to specific route</span>
            "interactive": bool <span color="#1b1ef7"> // can be clicked if true</span>
            "icon": string <span color="#1b1ef7"> // empty if nested</span>
            "items": [{ NetworkPluginDirectoryItem structure }] <span color="#1b1ef7"> // same structure as directory, if nested; empty, if single'</span>
        }]
    }
}
</pre>

<br>

<a name="asset-bundle-prop"></a>

#### Asset Bundle Prop

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "placing": string
    "invokeType": string
    "minScale": float
    "maxScale": float
    "canStack": bool
    "pedestalInZoomView": bool
    "alternativeZoom": bool
    "size": { <a href="#xyz">xyz structure</a> }
    "contentType": [ string ] <span color="#1b1ef7"> // supported content types for asset template</span>
    "assetmesh": { custom structure } <span color="#1b1ef7"> // deprecated / simplified asset model, silhouette</span>
    "assetBundleMeta": {
        "logoCount": int <span color="#1b1ef7"> // show amount of logos in content management system</span>
        "thumbnailCount": int <span color="#1b1ef7"> // show amount of thumbnails in content management system</span>
    }
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
    "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // custom params set by client application</span>
    "params": string <span color="#1b1ef7"> // deprecated</span>
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
    "comments": { <a href="#comments">comments structure</a> }
    "reactions": {
        "total": int
        "offset": int
        "size": int
        "list": [{
            "updated": timestamp
            "reaction": string
            "fromUser": { <a href="#user-simple">user simple structure</a> }
        }]
        "ownReaction": string
    }
    "view": { <a href="#resource-view">resource view structure</a> }
    "thumbnail": string
    "linkId": string
    "linkType": string
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
        "thumbnailUrl": string
        "directory": { <a href="#resource-data-directory">resource data directory structure</a> }
    }
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

<a name="comments"></a>

#### Comments

<pre>
{
    "total": int
    "offset": int
    "size": int
    "list": [{ <a href="#comment">comment structure</a> }]
}
</pre>

<br>

<a name="comment"></a>

#### Comment

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "fromUser": { <a href="#user-simple">user simple structure</a> }
    "message": string
    "status": string
    "attachments": [{ <a href="#resource">resource structure</a> }]
    "reactions": {
        "total": int
        "offset": int
        "size": int
        "list": [{
            "updated": timestamp
            "reaction": string
            "fromUser": { <a href="#user-simple">user simple structure</a> }
        }]
        "ownReaction": string
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

<br>

<a name="resource-view"></a>

#### Resource View

<pre>
{
    "updated": timestamp
    "isWatched": bool
    "stopTime": int
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

<a name="resource-data-directory"></a>

#### Resource Data Directory

<pre>
{
    "innerContentType": string
    "innerContentCount": int
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
        "animationData": map[string]{ custom structure }
    }
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

<a name="resource-private"></a>

#### Resource Private

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
    "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // custom params set by client application</span>
    "params": string <span color="#1b1ef7"> // deprecated</span>
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
    "comments": { <a href="#comments">comments structure</a> }
    "reactions": {
        "total": int
        "offset": int
        "size": int
        "list": [{
            "updated": timestamp
            "reaction": string
            "fromUser": { <a href="#user-simple">user simple structure</a> }
        }]
        "ownReaction": string
    }
    "view": { <a href="#resource-view">resource view structure</a> }
    "thumbnail": string
    "linkId": string
    "linkType": string
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
        "thumbnailUrl": string
        "directory": { <a href="#resource-data-directory">resource data directory structure</a> }
    }
    "actions": [{ <a href="#programmatic-action-with-children">programmatic action with children structure</a> }] <span color="#1b1ef7"> // custom programmatic actions from users</span>
    "user": string
    "uploaded": timestamp
    "storage": {
        "storage": string
        "bucket": string
        "location": string
        "contentType": string
        "size": int
    }
    "cdnUrl": string
    "isActive": bool
    "isPermanent": bool
    "internalNotes": string
    "thumbnails": map[string]{ <a href="#resource-private">resource private structure</a> }
}
</pre>

<br>

<a name="room"></a>

#### Room

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "metadata": {
        "name": string
        "description": string
        "location": string
        "privacy": string <span color="#1b1ef7"> // private/public/openForAttendees</span>
        "tags": [ string ]
        "firstStyle": string
        "moderateComments": bool
        "highResolution": bool
        "videochatMode": string <span color="#1b1ef7"> // DEPRECATED (videochat/conference)</span>
    }
    "explorerStatus": string <span color="#1b1ef7"> // show/hide room in explorer</span>
    "subscriptionStatus": string <span color="#1b1ef7"> // free/active/expired</span>
    "environmentId": string <span color="#1b1ef7"> // id of environment asset</span>
    "price": float <span color="#1b1ef7"> // price for room template</span>
    "allowEmbed": bool <span color="#1b1ef7"> // allow embedding room to non valuverse web pages</span>
    "roomIdentity": string <span color="#1b1ef7"> // verus identity of room</span>
    "videochatSettings": { <span color="#1b1ef7"> // deprecated, moved to room settings</span>
        "videochatMode": string <span color="#1b1ef7"> // videochat/conference</span>
        "videochatType": string <span color="#1b1ef7"> // twilio only (peer-to-peer/group/group-small)</span>
        "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
        "videochatInitUser": string <span color="#1b1ef7"> // who can start the videochat (any/manager)</span>
        "excludeListeners": bool <span color="#1b1ef7"> // don't show non-promoted videochat users</span>
        "usePresentationBoard": bool <span color="#1b1ef7"> // use presentation board as share screen media</span>
        "enableStreaming": bool <span color="#1b1ef7"> // enable videochat streaming to non participants</span>
        "notificationMode": int <span color="#1b1ef7"> // notification mode for videochat events</span>
        "autoPromotion": {
            "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
            "autoPromotionLimit": int <span color="#1b1ef7"> // limit of participants with automatic voice permissions</span>
            "autoDemoteOnLimit": bool <span color="#1b1ef7"> // demote participants that were automatically promoted</span>
        }
        "limitSettings": {
            "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
            "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
        }
    }
    "alias": string
    "group": string
    "domains": [ string ]
    "thumbnail": { <a href="#room-thumbnail-resource">room thumbnail resource structure</a> }
    "preview": { <a href="#resource">resource structure</a> }
    "content": [{ <a href="#room-style">room style structure</a> }]
    "owners": [{ <a href="#user-simple">user simple structure</a> }]
    "invitedUsers": [{ <a href="#user-simple">user simple structure</a> }]
    "stories": [{ <a href="#storyline">storyline structure</a> }]
    "cameraPositions": [{ <a href="#camera-position">camera position structure</a> }]
    "reactions": {
        "total": int
        "offset": int
        "size": int
        "list": [{
            "updated": timestamp
            "reaction": string
            "fromUser": { <a href="#user-simple">user simple structure</a> }
        }]
        "ownReaction": string
    }
    "hasJourneyPath": bool
    "hasPlacementAreas": bool
    "templateStyles": [ string ]
}
</pre>

<br>

<a name="room-thumbnail-resource"></a>

#### Room Thumbnail Resource

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
    "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // custom params set by client application</span>
    "params": string <span color="#1b1ef7"> // deprecated</span>
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
    "comments": { <a href="#comments">comments structure</a> }
    "reactions": {
        "total": int
        "offset": int
        "size": int
        "list": [{
            "updated": timestamp
            "reaction": string
            "fromUser": { <a href="#user-simple">user simple structure</a> }
        }]
        "ownReaction": string
    }
    "view": { <a href="#resource-view">resource view structure</a> }
    "thumbnail": string
    "linkId": string
    "linkType": string
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
        "thumbnailUrl": string
        "directory": { <a href="#resource-data-directory">resource data directory structure</a> }
    }
    "actions": [{ <a href="#programmatic-action-with-children">programmatic action with children structure</a> }] <span color="#1b1ef7"> // custom programmatic actions from users</span>
    "isDefault": bool
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
    "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client defined data</span>
    "params": string <span color="#1b1ef7"> // deprecated</span>
    "actions": [{ <a href="#programmatic-action-with-children">programmatic action with children structure</a> }] <span color="#1b1ef7"> // custom programmatic actions from users</span>
    "dataBound": { <span color="#1b1ef7"> // bound prop data to some action</span>
        "isEnabled": bool
        "dataBoundAction": string
    }
    "assetId": string
    "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "content": [{ <a href="#resource">resource structure</a> }]
    "contentCount": int
    "contentSource": { <span color="#1b1ef7"> // if present, current prop will fetch content from source prop</span>
        "roomId": string
        "propId": string
    }
    "asset": { <a href="#asset-bundle-prop">asset bundle prop structure</a> } <span color="#1b1ef7"> // Deprecated</span>
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
    "isGlobal": bool <span color="#1b1ef7"> // DEPRECATED, should always be true</span>
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

