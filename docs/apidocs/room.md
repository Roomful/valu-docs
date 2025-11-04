<br>

<a name="room-api"></a>

## Room API

| Endpoint | Method | Description |
|-----|-----|-----|
| ~~[rooms](#get-user-rooms)~~ | websocket | Get user rooms |
| [room:searchRoomsOfUser](#search-rooms-of-user) | websocket | Search rooms of user |
| ~~[room:getTemplateRooms](#get-template-rooms)~~ | websocket | Get template rooms |
| [room:getTemplateRoom](#get-template-room) | websocket | Get template room |
| [room:getTemplateRoomForPreview](#get-template-room-for-preview) | websocket | Get template room for preview |
| [room:listTemplateRooms](#list-template-rooms) | websocket | List template rooms |
| [room:createRoomFromTemplate](#create-room-from-template) | websocket | Create room from template |
| [room:create](#create-room) | websocket | Create room |
| [room:copy](#copy-room) | websocket | Copy room |
| ~~[room:get_noAssetMesh](#get-room-no-asset-mesh)~~ | websocket | Get room: no asset mesh |
| ~~[room:get_cached](#get-room-cached-old)~~ | websocket | Get room: cached: old |
| [room:getRoom](#get-room-cached) | websocket | Get room: cached |
| ~~[room:getMetadata](#get-room-metadata)~~ | websocket | Get room metadata |
| [room:getRoomBasicModel](#get-room-basic-model) | websocket | Get room basic model |
| [room:getRoomSettings](#get-room-settings) | websocket | Get room settings |
| [room:getRoomForAvatarSetup](#get-room-for-avatar-setup) | websocket | Get room for avatar setup |
| [room:permissions](#get-room-permissions) | websocket | Get room permissions |
| [room:requestAccess](#request-room-access) | websocket | Request room access |
| [room:delete](#delete-room) | websocket | Delete room |
| [room:update](#update-room) | websocket | Update room |
| [room:updateMetadata](#update-room-metadata) | websocket | Update room metadata |
| [room:setEnvironment](#set-room-environment) | websocket | Set room environment |
| [room:setAllowEmbed](#set-room-allow-embed) | websocket | Set room allow embed |
| [room:deleteThumbnail](#delete-room-thumbnail) | websocket | Delete room thumbnail |
| [room:setPreview](#set-room-preview) | websocket | Set room preview |
| [room:deletePreview](#delete-room-preview) | websocket | Delete room preview |
| [room:setRoomBehaviourSettings](#set-room-behaviour-settings) | websocket | Set room behaviour settings |
| [room:setAvatarsLocationSettings](#set-avatars-location-settings) | websocket | Set avatars location settings |
| [room:setBotSettings](#set-bot-settings) | websocket | Set bot settings |
| [room:setAmbientMusicSettings](#set-ambient-music-settings) | websocket | Set ambient music settings |
| [room:setSocialCircleSettings](#set-social-circle-settings) | websocket | Set social circle settings |
| [room:setEnvironmentSettings](#set-environment-settings) | websocket | Set environment settings |
| [room:setCustomSettings](#set-custom-room-settings) | websocket | Set custom room settings |
| [room:setAIBotSettings](#set-room-ai-bot-settings) | websocket | Set room aI bot settings |
| [room:getAIBotSettings](#get-room-ai-bot-settings) | websocket | Get room aI bot settings |
| [room:getLightData](#get-room-light-data) | websocket | Get room light data |
| [room:getTemplateLightData](#get-template-room-light-data) | websocket | Get template room light data |
| [room:setLightData](#set-room-light-data) | websocket | Set room light data |
| [room:deleteLightData](#delete-room-light-data) | websocket | Delete room light data |
| [room:createAlias](#create-room-alias) | websocket | Create room alias |
| [room:deleteAlias](#delete-room-alias) | websocket | Delete room alias |
| [room:addStyle](#add-room-style) | websocket | Add room style |
| [room:deleteStyle](#delete-room-style) | websocket | Delete room style |
| [room:addPanel](#add-room-panel) | websocket | Add room panel |
| [room:deletePanel](#delete-room-panel) | websocket | Delete room panel |
| [room:addProp](#add-room-prop) | websocket | Add room prop |
| [room:getProp](#get-room-prop) | websocket | Get room prop |
| [room:getPropWithResource](#get-room-prop-with-resource) | websocket | Get room prop with resource |
| [room:listProps](#list-room-props) | websocket | List room props |
| [room:deleteProp_outOfBound](#delete-room-prop-out-of-bound) | websocket | Delete room prop: out of bound |
| [room:deleteProp](#delete-room-prop) | websocket | Delete room prop |
| [room:restoreProp](#restore-room-prop) | websocket | Restore room prop |
| [room:updateProp](#update-prop) | websocket | Update prop |
| [room:setUserCustomParamsForProp](#set-user-custom-params-for-prop) | websocket | Set user custom params for prop |
| [room:deleteUserCustomParamsForProp](#delete-user-custom-params-for-prop) | websocket | Delete user custom params for prop |
| [room:getUserCustomParamsForPropsInRoom](#get-user-custom-params-for-props-in-room) | websocket | Get user custom params for props in room |
| [room:getSortingTable](#get-room-sorting-table-content) | websocket | Get room sorting table content |
| [room:getRoomContent](#get-room-content) | websocket | Get room content |
| [room:visitors](#get-visitors) | websocket | Get visitors |
| [room:sendUserLocation](#send-user-location) | websocket | Send user location |
| [room:join](#join-room) | websocket | Join room |
| [room:leave](#leave-room) | websocket | Leave room |
| [room:addCameraPosition](#add-camera-position) | websocket | Add camera position |
| [room:updateCameraPosition](#update-camera-position) | websocket | Update camera position |
| [room:deleteCameraPosition](#delete-camera-position) | websocket | Delete camera position |
| [room:getCameraPositions](#get-camera-positions) | websocket | Get camera positions |
| [room:listUserPublicRoomsWithStaticSocialCircles](#list-user-public-rooms-with-static-social-circles) | websocket | List user public rooms with static social circles |
| [room:import](#import-room) | websocket | Import room |
| [room:createStoryline](#create-storyline) | websocket | Create storyline |
| [room:updateStoryline](#update-storyline) | websocket | Update storyline |
| [room:deleteStoryline](#delete-storyline) | websocket | Delete storyline |
| [room:createJourneyPath](#create-journey-path) | websocket | Create journey path |
| [room:updateJourneyPath](#update-journey-path) | websocket | Update journey path |
| [room:deleteJourneyPath](#delete-journey-path) | websocket | Delete journey path |
| [room:getJourneyPaths](#get-journey-paths) | websocket | Get journey paths |
| [room:addResourcesToSortingTable](#on-resources-added-to-room-sorting-table-event) | websocketEvent | On resources added to room sorting table event |
| [room:deleteResourcesFromSortingTable](#on-resources-deleted-from-room-sorting-table-event) | websocketEvent | On resources deleted from room sorting table event |
| [room:addResourcesToSortingTableDirectory](#on-resources-added-to-directory-in-room-sorting-table-event) | websocketEvent | On resources added to directory in room sorting table event |
| [room:deleteResourcesFromSortingTableDirectory](#on-resources-deleted-from-directory-in-room-sorting-table-event) | websocketEvent | On resources deleted from directory in room sorting table event |
| [room:resourceUpdated](#on-room-resource-updated-event) | websocketEvent | On room resource updated event |
| [room:sortingTableResourceUpdated](#on-room-sorting-table-resource-updated-event) | websocketEvent | On room sorting table resource updated event |
| [room:subscriptionStatusUpdated](#on-room-subscription-status-updated-event) | websocketEvent | On room subscription status updated event |
| [room:delete](#on-room-deleted-event) | websocketEvent | On room deleted event |
| [room:metadataUpdated](#on-room-metadata-updated-event) | websocketEvent | On room metadata updated event |
| [room:settingsUpdated](#on-room-settings-updated-event) | websocketEvent | On room settings updated event |
| [room:environmentUpdated](#on-room-environment-updated-event) | websocketEvent | On room environment updated event |
| [room:storylineCreated](#on-storyline-created-event) | websocketEvent | On storyline created event |
| [room:storylineUpdated](#on-storyline-updated-event) | websocketEvent | On storyline updated event |
| [room:storylineDeleted](#on-storyline-deleted-event) | websocketEvent | On storyline deleted event |
| [room:cameraPositionAdded](#on-camera-position-added-event) | websocketEvent | On camera position added event |
| [room:cameraPositionUpdated](#on-camera-position-updated-event) | websocketEvent | On camera position updated event |
| [room:cameraPositionDeleted](#on-camera-position-deleted-event) | websocketEvent | On camera position deleted event |
| [room:journeyPathCreated](#handle-journey-path-created-event) | websocketEvent | Handle journey path created event |
| [room:journeyPathUpdated](#handle-journey-path-updated-event) | websocketEvent | Handle journey path updated event |
| [room:journeyPathDeleted](#handle-journey-path-deleted-event) | websocketEvent | Handle journey path deleted event |
| [room:propAdded](#on-room-prop-added-event) | websocketEvent | On room prop added event |
| [room:propDeleted](#on-room-prop-deleted-event) | websocketEvent | On room prop deleted event |
| [room:propRestored](#on-room-prop-restored-event) | websocketEvent | On room prop restored event |
| [room:propUpdated](#on-room-prop-updated-event) | websocketEvent | On room prop updated event |
| [room:userConnectedToSocialCircleVideochat](#user-connected-to-social-circle-videochat) | websocketEvent | User connected to social circle videochat |
| [room:userDisconnectedFromSocialCircleVideochat](#user-disconnected-from-social-circle-videochat) | websocketEvent | User disconnected from social circle videochat |
| [room:videochatPresenterChanged](#room-videochat-presenter-changed-event) | websocketEvent | Room videochat presenter changed event |
| [room:videochatCoPresenterChanged](#room-videochat-co-presenter-changed-event) | websocketEvent | Room videochat co presenter changed event |
| [room:userJoined](#user-joined-room-event) | websocketEvent | User joined room event |
| [room:userLeft](#user-left-room-event) | websocketEvent | User left room event |
| [room:userLocationChanged](#user-room-location-changed-event) | websocketEvent | User room location changed event |
| [room:hasLightData](#room-has-light-data-event) | websocketEvent | Room has light data event |

<br>

<a name="get-user-rooms"></a>

### Get user rooms

**Method:** websocket

**Endpoint:** rooms

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "networkId": string <span color="#1b1ef7"> // if provided, api searches for rooms in a specific network</span>
        "userId": string <span color="#1b1ef7"> // if provided, api searches for available (public/invitation) rooms of other user</span>
        "query": string <span color="#1b1ef7"> // search query</span>
        "filter": string <span color="#1b1ef7"> // public/private/shared/favourite</span>
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
        "userId": string
        "rooms": [{ <a href="#room">room structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-rooms-of-user"></a>

### Search rooms of user

**Method:** websocket

**Endpoint:** room:searchRoomsOfUser

**Request:** 

<pre>
{
    "data": {
        "networkId": string <span color="#1b1ef7"> // if provided, api searches for rooms in a specific network</span>
        "userId": string <span color="#1b1ef7"> // if provided, api searches for available (public/invitation) rooms of other user</span>
        "query": string <span color="#1b1ef7"> // search query</span>
        "filter": string <span color="#1b1ef7"> // public/private/shared/favourite</span>
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

<a name="get-template-rooms"></a>

### Get template rooms

**Method:** websocket

**Endpoint:** room:getTemplateRooms

**<span color="red">DEPRECATED</span>** 

**Description:** API returns list of template rooms. User can create a new room based on template room.

**Request:** 

<pre>
{
    "data": {
        "style": string
        "query": string
        "tags": [ string ]
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
        "rooms": [{ <a href="#room">room structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-template-room"></a>

### Get template room

**Method:** websocket

**Endpoint:** room:getTemplateRoom

**Description:** API returns template room model by its id. User can create a new room based on template room.

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
        "template": {
            "id": string
            "name": string
            "tags": [ string ]
            "ownerIds": [ string ]
            "subscriptionStatus": string
            "price": float
            "templateStyles": [ string ]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-template-room-for-preview"></a>

### Get template room for preview

**Method:** websocket

**Endpoint:** room:getTemplateRoomForPreview

**Description:** Api returns template room with content. User can create a new room based on template room.

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
        "room": {
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
            "permissions": {
                "view": bool
                "comment": bool
                "contribute": bool
                "edit": bool
                "manage": bool
            }
            "settings": {
                "roomBehaviour": int
                "videochat": {
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
                "avatarsLocation": {
                    "showAvatars": bool
                    "showMode": string
                }
                "bots": {
                    "botsCount": int
                }
                "ambientMusic": {
                    "resourceId": string
                    "volume": float
                }
                "socialCircle": {
                    "isSocialCircleAvailableForAll": bool
                }
                "environment": {
                    "environmentId": string
                    "resourceId": string
                    "isVideo": bool
                    "useFlatColor": bool
                    "rotation": int
                    "altitude": int
                    "scale": int
                    "posX": int
                    "posZ": int
                    "title": string
                }
                "params": map[string]{ custom structure } <span color="#1b1ef7"> // custom params set by client application</span>
            }
            "userReactions": { <a href="#user-reactions">user reactions structure</a> }
        }
        "assets": map[string]{ <a href="#asset-bundle-prop">asset bundle prop structure</a> }
        "styles": map[string]{ <a href="#asset-bundle-style">asset bundle style structure</a> }
        "environments": map[string]{ <a href="#asset-bundle-environment">asset bundle environment structure</a> }
        "propSkins": map[string]{ <a href="#asset-bundle-skin">asset bundle skin structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-template-rooms"></a>

### List template rooms

**Method:** websocket

**Endpoint:** room:listTemplateRooms

**Description:** API returns list of template rooms. User can create a new room based on template room.

**Request:** 

<pre>
{
    "data": {
        "style": string
        "query": string
        "tags": [ string ]
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
        "templates": [{
            "id": string
            "name": string
            "tags": [ string ]
            "ownerIds": [ string ]
            "subscriptionStatus": string
            "price": float
            "templateStyles": [ string ]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-room-from-template"></a>

### Create room from template

**Method:** websocket

**Endpoint:** room:createRoomFromTemplate

**Request:** 

<pre>
{
    "data": {
        "room": string <span color="#1b1ef7"> // template room id</span>
        "roomName": string <span color="#1b1ef7"> // name of new room</span>
        "subscriptionPlan": string <span color="#1b1ef7"> // free/one_time_payment/subscription_week/subscription_month/subscription_6_months/subscription_year</span>
        "walletAddress": string <span color="#1b1ef7"> // wallet address (in case of crypto currency payment)</span>
        "currency": string <span color="#1b1ef7"> // rents (default) / roomi (Roomful crypto currency) / Valu (ValuVerse crypto currency)</span>
    }
    "event": { "id": string, "date": timestamp }
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

<a name="create-room"></a>

### Create room

**Method:** websocket

**Endpoint:** room:create

**Request:** 

<pre>
{
    "data": {
        "metadata": {
            "name": string
            "description": string
            "location": string
            "privacy": string <span color="#1b1ef7"> // private/public/openForAttendees</span>
            "tags": [ string ]
            "firstStyle": string
        }
        "environmentId": string
        "content": [{ <a href="#room-style">room style structure</a> }]
        "subscriptionPlan": string <span color="#1b1ef7"> // free/one_time_payment/subscription_week/subscription_month/subscription_6_months/subscription_year</span>
        "walletAddress": string <span color="#1b1ef7"> // wallet address (in case of crypto currency payment)</span>
        "currency": string <span color="#1b1ef7"> // rents (default) / roomi (Roomful crypto currency) / Valu (ValuVerse crypto currency)</span>
    }
    "event": { "id": string, "date": timestamp }
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

<a name="copy-room"></a>

### Copy room

**Method:** websocket

**Endpoint:** room:copy

**Description:** Endpoint creates copy of room. Endpoint requires network manager permissions.

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
        "roomId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-room-no-asset-mesh"></a>

### Get room: no asset mesh

**Method:** websocket

**Endpoint:** room:get_noAssetMesh

**<span color="red">DEPRECATED</span>** 

**Description:** ~~Api returns room with content. Doesn't return assetmesh.~~

Deprecated, use ```room:getRoom``` instead.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "subscribe": bool
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
            "permissions": {
                "view": bool
                "comment": bool
                "contribute": bool
                "edit": bool
                "manage": bool
            }
            "settings": {
                "roomBehaviour": int
                "videochat": {
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
                "avatarsLocation": {
                    "showAvatars": bool
                    "showMode": string
                }
                "bots": {
                    "botsCount": int
                }
                "ambientMusic": {
                    "resourceId": string
                    "volume": float
                }
                "socialCircle": {
                    "isSocialCircleAvailableForAll": bool
                }
                "environment": {
                    "environmentId": string
                    "resourceId": string
                    "isVideo": bool
                    "useFlatColor": bool
                    "rotation": int
                    "altitude": int
                    "scale": int
                    "posX": int
                    "posZ": int
                    "title": string
                }
                "params": map[string]{ custom structure } <span color="#1b1ef7"> // custom params set by client application</span>
            }
            "userReactions": { <a href="#user-reactions">user reactions structure</a> }
        }
        "assets": map[string]{ <a href="#asset-bundle-prop">asset bundle prop structure</a> }
        "styles": map[string]{ <a href="#asset-bundle-style">asset bundle style structure</a> }
        "environments": map[string]{ <a href="#asset-bundle-environment">asset bundle environment structure</a> }
        "propSkins": map[string]{ <a href="#asset-bundle-skin">asset bundle skin structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-room-cached-old"></a>

### Get room: cached: old

**Method:** websocket

**Endpoint:** room:get_cached

**<span color="red">DEPRECATED</span>** 

**Description:** ~~Api returns room with content.
~~ ~~* Api doesn't return assetmesh.
~~ ~~* Api returns "Room is private" (error code 803) in case if room user doesn't have permissions to view room.
~~ ~~* Api returns "Subscription expired" (error code 2008) in case if room subscription is expired.~~

Deprecated, use ```room:getRoom``` instead.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "subscribe": bool
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
            "permissions": {
                "view": bool
                "comment": bool
                "contribute": bool
                "edit": bool
                "manage": bool
            }
            "settings": {
                "roomBehaviour": int
                "videochat": {
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
                "avatarsLocation": {
                    "showAvatars": bool
                    "showMode": string
                }
                "bots": {
                    "botsCount": int
                }
                "ambientMusic": {
                    "resourceId": string
                    "volume": float
                }
                "socialCircle": {
                    "isSocialCircleAvailableForAll": bool
                }
                "environment": {
                    "environmentId": string
                    "resourceId": string
                    "isVideo": bool
                    "useFlatColor": bool
                    "rotation": int
                    "altitude": int
                    "scale": int
                    "posX": int
                    "posZ": int
                    "title": string
                }
                "params": map[string]{ custom structure } <span color="#1b1ef7"> // custom params set by client application</span>
            }
            "userReactions": { <a href="#user-reactions">user reactions structure</a> }
        }
        "assets": map[string]{ <a href="#asset-bundle-prop">asset bundle prop structure</a> }
        "styles": map[string]{ <a href="#asset-bundle-style">asset bundle style structure</a> }
        "environments": map[string]{ <a href="#asset-bundle-environment">asset bundle environment structure</a> }
        "propSkins": map[string]{ <a href="#asset-bundle-skin">asset bundle skin structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-room-cached"></a>

### Get room: cached

**Method:** websocket

**Endpoint:** room:getRoom

**Description:** Api returns room with content.
* Api doesn't return assetmesh.
* Api returns only resources with visible viewpoint in the room.
* Api returns "Room is private" (error code 803) in case if room user doesn't have permissions to view room.
* Api returns "Subscription expired" (error code 2008) in case if room subscription is expired.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "subscribe": bool
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
            "permissions": {
                "view": bool
                "comment": bool
                "contribute": bool
                "edit": bool
                "manage": bool
            }
            "settings": {
                "roomBehaviour": int
                "videochat": {
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
                "avatarsLocation": {
                    "showAvatars": bool
                    "showMode": string
                }
                "bots": {
                    "botsCount": int
                }
                "ambientMusic": {
                    "resourceId": string
                    "volume": float
                }
                "socialCircle": {
                    "isSocialCircleAvailableForAll": bool
                }
                "environment": {
                    "environmentId": string
                    "resourceId": string
                    "isVideo": bool
                    "useFlatColor": bool
                    "rotation": int
                    "altitude": int
                    "scale": int
                    "posX": int
                    "posZ": int
                    "title": string
                }
                "params": map[string]{ custom structure } <span color="#1b1ef7"> // custom params set by client application</span>
            }
            "userReactions": { <a href="#user-reactions">user reactions structure</a> }
        }
        "assets": map[string]{ <a href="#asset-bundle-prop">asset bundle prop structure</a> }
        "styles": map[string]{ <a href="#asset-bundle-style">asset bundle style structure</a> }
        "environments": map[string]{ <a href="#asset-bundle-environment">asset bundle environment structure</a> }
        "propSkins": map[string]{ <a href="#asset-bundle-skin">asset bundle skin structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-room-metadata"></a>

### Get room metadata

**Method:** websocket

**Endpoint:** room:getMetadata

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "subscribe": bool
    }
    "event": { "id": string, "date": timestamp }
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

<a name="get-room-basic-model"></a>

### Get room basic model

**Method:** websocket

**Endpoint:** room:getRoomBasicModel

**Request:** 

<pre>
{
    "data": {
        "networkId": string
        "roomId": string
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

<a name="get-room-settings"></a>

### Get room settings

**Method:** websocket

**Endpoint:** room:getRoomSettings

**Request:** 

<pre>
{
    "data": {
        "networkId": string
        "roomId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "settings": {
            "roomBehaviour": int
            "videochat": {
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
            "avatarsLocation": {
                "showAvatars": bool
                "showMode": string
            }
            "bots": {
                "botsCount": int
            }
            "ambientMusic": {
                "resourceId": string
                "volume": float
            }
            "socialCircle": {
                "isSocialCircleAvailableForAll": bool
            }
            "environment": {
                "environmentId": string
                "resourceId": string
                "isVideo": bool
                "useFlatColor": bool
                "rotation": int
                "altitude": int
                "scale": int
                "posX": int
                "posZ": int
                "title": string
            }
            "params": map[string]{ custom structure } <span color="#1b1ef7"> // custom params set by client application</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-room-for-avatar-setup"></a>

### Get room for avatar setup

**Method:** websocket

**Endpoint:** room:getRoomForAvatarSetup

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "room": {
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
            "permissions": {
                "view": bool
                "comment": bool
                "contribute": bool
                "edit": bool
                "manage": bool
            }
            "settings": {
                "roomBehaviour": int
                "videochat": {
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
                "avatarsLocation": {
                    "showAvatars": bool
                    "showMode": string
                }
                "bots": {
                    "botsCount": int
                }
                "ambientMusic": {
                    "resourceId": string
                    "volume": float
                }
                "socialCircle": {
                    "isSocialCircleAvailableForAll": bool
                }
                "environment": {
                    "environmentId": string
                    "resourceId": string
                    "isVideo": bool
                    "useFlatColor": bool
                    "rotation": int
                    "altitude": int
                    "scale": int
                    "posX": int
                    "posZ": int
                    "title": string
                }
                "params": map[string]{ custom structure } <span color="#1b1ef7"> // custom params set by client application</span>
            }
            "userReactions": { <a href="#user-reactions">user reactions structure</a> }
        }
        "assets": map[string]{ <a href="#asset-bundle-prop">asset bundle prop structure</a> }
        "styles": map[string]{ <a href="#asset-bundle-style">asset bundle style structure</a> }
        "environments": map[string]{ <a href="#asset-bundle-environment">asset bundle environment structure</a> }
        "propSkins": map[string]{ <a href="#asset-bundle-skin">asset bundle skin structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-room-permissions"></a>

### Get room permissions

**Method:** websocket

**Endpoint:** room:permissions

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
        "permissions": {
            "view": bool
            "comment": bool
            "contribute": bool
            "edit": bool
            "manage": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="request-room-access"></a>

### Request room access

**Method:** websocket

**Endpoint:** room:requestAccess

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

<a name="delete-room"></a>

### Delete room

**Method:** websocket

**Endpoint:** room:delete

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
        "roomId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-room"></a>

### Update room

**Method:** websocket

**Endpoint:** room:update

**Description:** Does the same as `room:updateRoomMetadata` but ignores current socket for event broadcasting.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "updated": timestamp
        "metadata": {
            "name": string
            "description": string
            "location": string
            "privacy": string <span color="#1b1ef7"> // private/public/openForAttendees</span>
            "tags": [ string ]
            "firstStyle": string
        }
        "thumbnail": string
    }
    "event": { "id": string, "date": timestamp }
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

<a name="update-room-metadata"></a>

### Update room metadata

**Method:** websocket

**Endpoint:** room:updateMetadata

**Description:** Api updates room metadata and thumbnail.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "updated": timestamp
        "metadata": {
            "name": string
            "description": string
            "location": string
            "privacy": string <span color="#1b1ef7"> // private/public/openForAttendees</span>
            "tags": [ string ]
            "firstStyle": string
        }
        "thumbnail": string
    }
    "event": { "id": string, "date": timestamp }
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

<a name="set-room-environment"></a>

### Set room environment

**Method:** websocket

**Endpoint:** room:setEnvironment

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "assetId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "environment": { <a href="#asset-bundle-environment">asset bundle environment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-room-allow-embed"></a>

### Set room allow embed

**Method:** websocket

**Endpoint:** room:setAllowEmbed

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "allowEmbed": bool
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

<a name="delete-room-thumbnail"></a>

### Delete room thumbnail

**Method:** websocket

**Endpoint:** room:deleteThumbnail

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "updated": timestamp
        "metadata": {
            "name": string
            "description": string
            "location": string
            "privacy": string <span color="#1b1ef7"> // private/public/openForAttendees</span>
            "tags": [ string ]
            "firstStyle": string
        }
        "thumbnail": string
    }
    "event": { "id": string, "date": timestamp }
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

<a name="set-room-preview"></a>

### Set room preview

**Method:** websocket

**Endpoint:** room:setPreview

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "preview": string
        "updated": timestamp
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

<a name="delete-room-preview"></a>

### Delete room preview

**Method:** websocket

**Endpoint:** room:deletePreview

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "preview": string
        "updated": timestamp
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

<a name="set-room-behaviour-settings"></a>

### Set room behaviour settings

**Method:** websocket

**Endpoint:** room:setRoomBehaviourSettings

**Description:** Api sets room behaviour settings in room.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "roomBehaviour": int
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

<a name="set-avatars-location-settings"></a>

### Set avatars location settings

**Method:** websocket

**Endpoint:** room:setAvatarsLocationSettings

**Description:** Api sets avatar location settings in room.

<i>showMode</i> could be on of the following:

* Parking
* TableConversation
* AnyProps
* Always



**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "settings": {
            "showAvatars": bool
            "showMode": string
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

<a name="set-bot-settings"></a>

### Set bot settings

**Method:** websocket

**Endpoint:** room:setBotSettings

**Description:** Api sets bot settings in room.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "settings": {
            "botsCount": int
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

<a name="set-ambient-music-settings"></a>

### Set ambient music settings

**Method:** websocket

**Endpoint:** room:setAmbientMusicSettings

**Description:** Api sets ambient music settings in room.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "settings": {
            "resourceId": string
            "volume": float
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

<a name="set-social-circle-settings"></a>

### Set social circle settings

**Method:** websocket

**Endpoint:** room:setSocialCircleSettings

**Description:** Api sets social circle settings in room.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "settings": {
            "isSocialCircleAvailableForAll": bool
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

<a name="set-environment-settings"></a>

### Set environment settings

**Method:** websocket

**Endpoint:** room:setEnvironmentSettings

**Description:** Api sets environment settings in room.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "settings": {
            "environmentId": string
            "resourceId": string
            "isVideo": bool
            "useFlatColor": bool
            "rotation": int
            "altitude": int
            "scale": int
            "posX": int
            "posZ": int
            "title": string
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

<a name="set-custom-room-settings"></a>

### Set custom room settings

**Method:** websocket

**Endpoint:** room:setCustomSettings

**Description:** Api sets custom settings in room. These settings are handled only by client application. Server stores them, but cannot work with them.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "params": map[string]{ custom structure }
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

<a name="set-room-ai-bot-settings"></a>

### Set room aI bot settings

**Method:** websocket

**Endpoint:** room:setAIBotSettings

**Description:** Api sets AI bot settings for room.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "aiBot": {
            "promptEngineering": string
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

<a name="get-room-ai-bot-settings"></a>

### Get room aI bot settings

**Method:** websocket

**Endpoint:** room:getAIBotSettings

**Description:** Api gets room AI bot settings.

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
        "promptEngineering": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-room-light-data"></a>

### Get room light data

**Method:** websocket

**Endpoint:** room:getLightData

**Description:** API returns predefined light data in room. Light data is used to create beautiful, cinematic rooms.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "platform": string <span color="#1b1ef7"> // WebGL/iOS/Android/StandaloneWindows64</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "platform": string <span color="#1b1ef7"> // WebGL/iOS/Android/StandaloneWindows64</span>
        "lightData": {
            "roomId": string
            "platform": string <span color="#1b1ef7"> // WebGL/iOS/Android/StandaloneWindows64</span>
            "lightmapsMode": int
            "rendererLightingData": [{
                "source": int <span color="#1b1ef7"> // 0 - None, 1 - Prop, 2 - Panel, 3 - Other</span>
                "sourceId": string
                "rendererName": string
                "lightmapIndex": int
                "lightmapOffsetScale": { <a href="#xyzw">xyzw structure</a> }
            }]
            "lightmapInfos": [{
                "resourceId": string
                "lightmapSize": int
            }]
            "lightmapDirInfos": [{
                "resourceId": string
                "lightmapSize": int
            }]
            "shadowmaskInfos": [{
                "resourceId": string
                "lightmapSize": int
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-template-room-light-data"></a>

### Get template room light data

**Method:** websocket

**Endpoint:** room:getTemplateLightData

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "platform": string <span color="#1b1ef7"> // WebGL/iOS/Android/StandaloneWindows64</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "platform": string <span color="#1b1ef7"> // WebGL/iOS/Android/StandaloneWindows64</span>
        "lightData": {
            "roomId": string
            "platform": string <span color="#1b1ef7"> // WebGL/iOS/Android/StandaloneWindows64</span>
            "lightmapsMode": int
            "rendererLightingData": [{
                "source": int <span color="#1b1ef7"> // 0 - None, 1 - Prop, 2 - Panel, 3 - Other</span>
                "sourceId": string
                "rendererName": string
                "lightmapIndex": int
                "lightmapOffsetScale": { <a href="#xyzw">xyzw structure</a> }
            }]
            "lightmapInfos": [{
                "resourceId": string
                "lightmapSize": int
            }]
            "lightmapDirInfos": [{
                "resourceId": string
                "lightmapSize": int
            }]
            "shadowmaskInfos": [{
                "resourceId": string
                "lightmapSize": int
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-room-light-data"></a>

### Set room light data

**Method:** websocket

**Endpoint:** room:setLightData

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "platform": string <span color="#1b1ef7"> // WebGL/iOS/Android/StandaloneWindows64</span>
        "lightData": {
            "lightmapsMode": int
            "rendererLightingData": [{
                "source": int <span color="#1b1ef7"> // 0 - None, 1 - Prop, 2 - Panel, 3 - Other</span>
                "sourceId": string
                "rendererName": string
                "lightmapIndex": int
                "lightmapOffsetScale": { <a href="#xyzw">xyzw structure</a> }
            }]
            "lightmapInfos": [{
                "resourceId": string
                "lightmapSize": int
            }]
            "lightmapDirInfos": [{
                "resourceId": string
                "lightmapSize": int
            }]
            "shadowmaskInfos": [{
                "resourceId": string
                "lightmapSize": int
            }]
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

<a name="delete-room-light-data"></a>

### Delete room light data

**Method:** websocket

**Endpoint:** room:deleteLightData

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "platform": string <span color="#1b1ef7"> // WebGL/iOS/Android/StandaloneWindows64</span>
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

<a name="create-room-alias"></a>

### Create room alias

**Method:** websocket

**Endpoint:** room:createAlias

**Description:** API creates an alias for the room. The alias could be used for room retrieving instead of room id (e.g. for room:get). 

If alias group is not provided: 

* Alias is unique across the system; 

* Room could be fetched by alias. 

If alias group is provided: 

* Alias is unique within the group; 

* Combination of group and Alias is unique across the system; 

* Room could be fetched by combination of group and alias like "{group}/{alias}". 



**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "alias": string
        "group": string
        "domains": [ string ]
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

<a name="delete-room-alias"></a>

### Delete room alias

**Method:** websocket

**Endpoint:** room:deleteAlias

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

<a name="add-room-style"></a>

### Add room style

**Method:** websocket

**Endpoint:** room:addStyle

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "previousStyleId": string
        "style": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "assetId": string
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-room-style"></a>

### Delete room style

**Method:** websocket

**Endpoint:** room:deleteStyle

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
        "moveResourcesToRoomSortingTable": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
        "moveResourcesToRoomSortingTable": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="add-room-panel"></a>

### Add room panel

**Method:** websocket

**Endpoint:** room:addPanel

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
        "previousPanelId": string
        "panel": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "type": string
            "mobileGeometry": { <a href="#geometry">geometry structure</a> }
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
        "panelId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-room-panel"></a>

### Delete room panel

**Method:** websocket

**Endpoint:** room:deletePanel

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
        "panelId": string
        "moveResourcesToRoomSortingTable": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
        "panelId": string
        "moveResourcesToRoomSortingTable": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="add-room-prop"></a>

### Add room prop

**Method:** websocket

**Endpoint:** room:addProp

**Description:** Add room prop to room. If propTypes contains `socialCircleDynamic`, server checks if user has permission to edit target room or room has isSocialCircleAvailableForAll setting.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
        "panelId": string
        "prop": {
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
            "params": string <span color="#1b1ef7"> // DEPRECATED, remove after backwards compatibility is no longer required.</span>
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

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

<a name="get-room-prop"></a>

### Get room prop

**Method:** websocket

**Endpoint:** room:getProp

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "subscribe": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "prop": {
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
            "permissions": {
                "view": bool
                "comment": bool
                "contribute": bool
                "edit": bool
                "manage": bool
            }
        }
        "assets": map[string]{ <a href="#asset-bundle-prop">asset bundle prop structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-room-prop-with-resource"></a>

### Get room prop with resource

**Method:** websocket

**Endpoint:** room:getPropWithResource

**Request:** 

<pre>
{
    "data": {
        "networkId": string
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
        "prop": { <a href="#room-prop">room prop structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-room-props"></a>

### List room props

**Method:** websocket

**Endpoint:** room:listProps

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
            "contentSource": { <span color="#1b1ef7"> // if present, current prop will fetch content from source prop</span>
                "roomId": string
                "propId": string
            }
            "contentCount": int <span color="#1b1ef7"> // amount of resources in prop</span>
            "content": [{ <a href="#resource">resource structure</a> }] <span color="#1b1ef7"> // prop resources</span>
            "assetAttributes": {
                "logoCount": int <span color="#1b1ef7"> // show amount of logos in content management system</span>
                "thumbnailCount": int <span color="#1b1ef7"> // show amount of thumbnails in content management system</span>
                "placing": string
                "invokeType": string
                "minScale": float
                "maxScale": float
                "canStack": bool
                "pedestalInZoomView": bool
                "alternativeZoom": bool
                "size": { <a href="#xyz">xyz structure</a> }
                "contentType": [ string ] <span color="#1b1ef7"> // supported content types for asset template</span>
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-room-prop-out-of-bound"></a>

### Delete room prop: out of bound

**Method:** websocket

**Endpoint:** room:deleteProp_outOfBound

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "moveResourcesToRoomSortingTable": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

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

<a name="delete-room-prop"></a>

### Delete room prop

**Method:** websocket

**Endpoint:** room:deleteProp

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "moveResourcesToRoomSortingTable": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

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

<a name="restore-room-prop"></a>

### Restore room prop

**Method:** websocket

**Endpoint:** room:restoreProp

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
        "roomId": string
        "propId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-prop"></a>

### Update prop

**Method:** websocket

**Endpoint:** room:updateProp

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
        "panelId": string
        "prop": {
            "id": string
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
            "params": string <span color="#1b1ef7"> // DEPRECATED, remove after backwards compatibility is no longer required.</span>
            "customParams": map[string]{ custom structure }
            "actions": [{ <a href="#programmatic-action-with-children">programmatic action with children structure</a> }]
            "dataBound": {
                "isEnabled": bool
                "dataBoundAction": string
            }
            "assetId": string
            "assetSkins": map[string]string
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

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

<a name="set-user-custom-params-for-prop"></a>

### Set user custom params for prop

**Method:** websocket

**Endpoint:** room:setUserCustomParamsForProp

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "customParams": map[string]{ custom structure }
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

<a name="delete-user-custom-params-for-prop"></a>

### Delete user custom params for prop

**Method:** websocket

**Endpoint:** room:deleteUserCustomParamsForProp

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

<a name="get-user-custom-params-for-props-in-room"></a>

### Get user custom params for props in room

**Method:** websocket

**Endpoint:** room:getUserCustomParamsForPropsInRoom

**Request:** 

<pre>
{
    "data": {
        "userId": string
        "roomId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "props": [{
            "propId": string
            "customParams": map[string]{ custom structure }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-room-sorting-table-content"></a>

### Get room sorting table content

**Method:** websocket

**Endpoint:** room:getSortingTable

**Description:** API returns list of resources that user uploaded to room contribution.

**Request:** 

<pre>
{
    "data": {
        "offset": int
        "size": int
        "roomId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "content": [{
            "resource": { <a href="#resource">resource structure</a> }
            "userId": string
            "owner": { <a href="#user-simple">user simple structure</a> } <span color="#1b1ef7"> // DEPRECATED</span>
        }]
        "totalCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-room-content"></a>

### Get room content

**Method:** websocket

**Endpoint:** room:getRoomContent

**Description:** API returns list of resources from all around the room (props content + room contribution content).

**Request:** 

<pre>
{
    "data": {
        "offset": int
        "size": int
        "roomId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resources": [{ <a href="#resource">resource structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-visitors"></a>

### Get visitors

**Method:** websocket

**Endpoint:** room:visitors

**Request:** 

<pre>
{
    "data": {
        "room": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "visitors": [{
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
            "counter": int
            "roomPosition": {
                "roomId": string
                "propId": string
                "propTypes": [ string ] <span color="#1b1ef7"> // booth/fileCabinet/socialCircleDynamic</span>
                "position": { <a href="#xyz">xyz structure</a> }
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="send-user-location"></a>

### Send user location

**Method:** websocket

**Endpoint:** room:sendUserLocation

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "propTypes": [ string ] <span color="#1b1ef7"> // booth/fileCabinet/socialCircleDynamic</span>
        "position": { <a href="#xyz">xyz structure</a> }
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

<a name="join-room"></a>

### Join room

**Method:** websocket

**Endpoint:** room:join

**Description:** API subscribes user socket to room channel, so it will receive room events.

**Request:** 

<pre>
{
    "data": {
        "room": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "permissions": {
            "view": bool
            "comment": bool
            "contribute": bool
            "edit": bool
            "manage": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="leave-room"></a>

### Leave room

**Method:** websocket

**Endpoint:** room:leave

**Description:** API removes user socket subscription from room channel, so it will no longer receive room events.

**Request:** 

<pre>
{
    "data": {
        "room": string
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

<a name="add-camera-position"></a>

### Add camera position

**Method:** websocket

**Endpoint:** room:addCameraPosition

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "cameraPosition": { <a href="#camera-position">camera position structure</a> }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "cameraPosition": { <a href="#camera-position">camera position structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-camera-position"></a>

### Update camera position

**Method:** websocket

**Endpoint:** room:updateCameraPosition

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "cameraPosition": { <a href="#camera-position">camera position structure</a> }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "cameraPosition": { <a href="#camera-position">camera position structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-camera-position"></a>

### Delete camera position

**Method:** websocket

**Endpoint:** room:deleteCameraPosition

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "cameraPositionId": string
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

<a name="get-camera-positions"></a>

### Get camera positions

**Method:** websocket

**Endpoint:** room:getCameraPositions

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
        "roomId": string
        "cameraPositions": [{ <a href="#camera-position">camera position structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-user-public-rooms-with-static-social-circles"></a>

### List user public rooms with static social circles

**Method:** websocket

**Endpoint:** room:listUserPublicRoomsWithStaticSocialCircles

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "rooms": [{
            "roomId": string
            "roomTitle": string
            "circles": [{
                "propId": string
                "propTitle": string
            }]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="import-room"></a>

### Import room

**Method:** websocket

**Endpoint:** room:import

**Request:** 

<pre>
{
    "data": {
        "srcRoomId": string <span color="#1b1ef7"> // source room id</span>
        "dstRoomId": string <span color="#1b1ef7"> // destination room id</span>
        "importSettings": bool
        "importProps": bool
        "importStorylines": bool
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

<a name="create-storyline"></a>

### Create storyline

**Method:** websocket

**Endpoint:** room:createStoryline

**Request:** 

<pre>
{
    "data": {
        "room": string
        "storyline": string
        "title": string
        "published": bool
        "data": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "storyline": { <a href="#storyline">storyline structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-storyline"></a>

### Update storyline

**Method:** websocket

**Endpoint:** room:updateStoryline

**Request:** 

<pre>
{
    "data": {
        "room": string
        "storyline": string
        "title": string
        "published": bool
        "data": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "storyline": { <a href="#storyline">storyline structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-storyline"></a>

### Delete storyline

**Method:** websocket

**Endpoint:** room:deleteStoryline

**Request:** 

<pre>
{
    "data": {
        "room": string
        "storyline": string
        "title": string
        "published": bool
        "data": string
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

<a name="create-journey-path"></a>

### Create journey path

**Method:** websocket

**Endpoint:** room:createJourneyPath

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "journeyPath": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "roomId": string
            "name": string
            "points": [{
                "name": string
                "propId": string
                "position": { <a href="#xyz">xyz structure</a> }
                "rotation": { <a href="#xyz">xyz structure</a> }
            }]
            "published": bool
            "looped": bool
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
        "roomId": string
        "journeyPath": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "roomId": string
            "name": string
            "points": [{
                "name": string
                "propId": string
                "position": { <a href="#xyz">xyz structure</a> }
                "rotation": { <a href="#xyz">xyz structure</a> }
            }]
            "published": bool
            "looped": bool
            "color": { <a href="#rgba">rgba structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-journey-path"></a>

### Update journey path

**Method:** websocket

**Endpoint:** room:updateJourneyPath

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "journeyPath": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "roomId": string
            "name": string
            "points": [{
                "name": string
                "propId": string
                "position": { <a href="#xyz">xyz structure</a> }
                "rotation": { <a href="#xyz">xyz structure</a> }
            }]
            "published": bool
            "looped": bool
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
        "roomId": string
        "journeyPath": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "roomId": string
            "name": string
            "points": [{
                "name": string
                "propId": string
                "position": { <a href="#xyz">xyz structure</a> }
                "rotation": { <a href="#xyz">xyz structure</a> }
            }]
            "published": bool
            "looped": bool
            "color": { <a href="#rgba">rgba structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-journey-path"></a>

### Delete journey path

**Method:** websocket

**Endpoint:** room:deleteJourneyPath

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "journeyPathId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "journeyPathId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-journey-paths"></a>

### Get journey paths

**Method:** websocket

**Endpoint:** room:getJourneyPaths

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
        "roomId": string
        "journeyPaths": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "roomId": string
            "name": string
            "points": [{
                "name": string
                "propId": string
                "position": { <a href="#xyz">xyz structure</a> }
                "rotation": { <a href="#xyz">xyz structure</a> }
            }]
            "published": bool
            "looped": bool
            "color": { <a href="#rgba">rgba structure</a> }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-added-to-room-sorting-table-event"></a>

### On resources added to room sorting table event

**Event:** room:addResourcesToSortingTable

**Data:** 

<pre>
{
    "data": {
        "resources": [{
            "resource": { <a href="#resource">resource structure</a> }
            "userId": string
            "user": { <a href="#user-simple">user simple structure</a> } <span color="#1b1ef7"> // DEPRECATED</span>
        }]
        "room": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-deleted-from-room-sorting-table-event"></a>

### On resources deleted from room sorting table event

**Event:** room:deleteResourcesFromSortingTable

**Data:** 

<pre>
{
    "data": {
        "resources": [ string ]
        "room": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-added-to-directory-in-room-sorting-table-event"></a>

### On resources added to directory in room sorting table event

**Event:** room:addResourcesToSortingTableDirectory

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "directoryId": string
        "resources": [{ <a href="#resource">resource structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-deleted-from-directory-in-room-sorting-table-event"></a>

### On resources deleted from directory in room sorting table event

**Event:** room:deleteResourcesFromSortingTableDirectory

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "directoryId": string
        "resourceIds": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-room-resource-updated-event"></a>

### On room resource updated event

**Event:** room:resourceUpdated

**Data:** 

<pre>
{
    "data": {
        "prop": string
        "room": string
        "resource": { <a href="#resource">resource structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-room-sorting-table-resource-updated-event"></a>

### On room sorting table resource updated event

**Event:** room:sortingTableResourceUpdated

**Data:** 

<pre>
{
    "data": {
        "room": string
        "resource": { <a href="#resource">resource structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-room-subscription-status-updated-event"></a>

### On room subscription status updated event

**Event:** room:subscriptionStatusUpdated

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "subscriptionStatus": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-room-deleted-event"></a>

### On room deleted event

**Event:** room:delete

**Description:** Event is sent to room owners, invited users and everyone who is currently in the room.

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

<a name="on-room-metadata-updated-event"></a>

### On room metadata updated event

**Event:** room:metadataUpdated

**Data:** 

<pre>
{
    "data": {
        "room": { <a href="#room">room structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-room-settings-updated-event"></a>

### On room settings updated event

**Event:** room:settingsUpdated

**Description:** In event data, updatedFields only contain fields that were updated during settings update.

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "updatedFields": map[string]{ custom structure }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-room-environment-updated-event"></a>

### On room environment updated event

**Event:** room:environmentUpdated

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "environment": { <a href="#asset-bundle-environment">asset bundle environment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-storyline-created-event"></a>

### On storyline created event

**Event:** room:storylineCreated

**Data:** 

<pre>
{
    "data": {
        "Storyline": { <a href="#storyline">storyline structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-storyline-updated-event"></a>

### On storyline updated event

**Event:** room:storylineUpdated

**Data:** 

<pre>
{
    "data": {
        "Storyline": { <a href="#storyline">storyline structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-storyline-deleted-event"></a>

### On storyline deleted event

**Event:** room:storylineDeleted

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "storylineId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-camera-position-added-event"></a>

### On camera position added event

**Event:** room:cameraPositionAdded

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "cameraPosition": { <a href="#camera-position">camera position structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-camera-position-updated-event"></a>

### On camera position updated event

**Event:** room:cameraPositionUpdated

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "cameraPosition": { <a href="#camera-position">camera position structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-camera-position-deleted-event"></a>

### On camera position deleted event

**Event:** room:cameraPositionDeleted

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "cameraPositionId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="handle-journey-path-created-event"></a>

### Handle journey path created event

**Event:** room:journeyPathCreated

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "journeyPath": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "roomId": string
            "name": string
            "points": [{
                "name": string
                "propId": string
                "position": { <a href="#xyz">xyz structure</a> }
                "rotation": { <a href="#xyz">xyz structure</a> }
            }]
            "published": bool
            "looped": bool
            "color": { <a href="#rgba">rgba structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="handle-journey-path-updated-event"></a>

### Handle journey path updated event

**Event:** room:journeyPathUpdated

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "journeyPath": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "roomId": string
            "name": string
            "points": [{
                "name": string
                "propId": string
                "position": { <a href="#xyz">xyz structure</a> }
                "rotation": { <a href="#xyz">xyz structure</a> }
            }]
            "published": bool
            "looped": bool
            "color": { <a href="#rgba">rgba structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="handle-journey-path-deleted-event"></a>

### Handle journey path deleted event

**Event:** room:journeyPathDeleted

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "journeyPathId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-room-prop-added-event"></a>

### On room prop added event

**Event:** room:propAdded

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
        "panelId": string
        "prop": { <a href="#room-prop">room prop structure</a> }
        "assets": map[string]{ <a href="#asset-bundle-prop">asset bundle prop structure</a> }
        "propSkins": map[string]{ <a href="#asset-bundle-skin">asset bundle skin structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-room-prop-deleted-event"></a>

### On room prop deleted event

**Event:** room:propDeleted

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

<a name="on-room-prop-restored-event"></a>

### On room prop restored event

**Event:** room:propRestored

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
        "panelId": string
        "prop": { <a href="#room-prop">room prop structure</a> }
        "assets": map[string]{ <a href="#asset-bundle-prop">asset bundle prop structure</a> }
        "propSkins": map[string]{ <a href="#asset-bundle-skin">asset bundle skin structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-room-prop-updated-event"></a>

### On room prop updated event

**Event:** room:propUpdated

**Description:** In event data, updatedFields only contain fields that were updated during [prop update](#update-prop).

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "styleId": string
        "panelId": string
        "propId": string
        "updatedFields": map[string]{ custom structure }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-connected-to-social-circle-videochat"></a>

### User connected to social circle videochat

**Event:** room:userConnectedToSocialCircleVideochat

**Data:** 

<pre>
{
    "data": {
        "user": { <a href="#user-simple">user simple structure</a> }
        "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each user within videochat</span>
        "videochatId": string
        "roomId": string
        "propId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-disconnected-from-social-circle-videochat"></a>

### User disconnected from social circle videochat

**Event:** room:userDisconnectedFromSocialCircleVideochat

**Data:** 

<pre>
{
    "data": {
        "user": { <a href="#user-simple">user simple structure</a> }
        "seqNumber": int <span color="#1b1ef7"> // sequential number, unique for each user within videochat</span>
        "videochatId": string
        "roomId": string
        "propId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="room-videochat-presenter-changed-event"></a>

### Room videochat presenter changed event

**Event:** room:videochatPresenterChanged

**Description:** Event is sent when presenter is changed in videochat in room. If userId is empty - videochat has no presenter.

**Data:** 

<pre>
{
    "data": {
        "userId": string
        "videochatId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="room-videochat-co-presenter-changed-event"></a>

### Room videochat co presenter changed event

**Event:** room:videochatCoPresenterChanged

**Description:** Event is sent when co-presenter is changed in videochat in room. If userId is empty - videochat has no co-presenter.

**Data:** 

<pre>
{
    "data": {
        "userId": string
        "videochatId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-joined-room-event"></a>

### User joined room event

**Event:** room:userJoined

**Data:** 

<pre>
{
    "data": {
        "room": string
        "user": { <a href="#user-simple">user simple structure</a> }
        "counter": int <span color="#1b1ef7"> // total users in room</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-left-room-event"></a>

### User left room event

**Event:** room:userLeft

**Data:** 

<pre>
{
    "data": {
        "room": string
        "user": { <a href="#user-simple">user simple structure</a> }
        "counter": int <span color="#1b1ef7"> // total users in room</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-room-location-changed-event"></a>

### User room location changed event

**Event:** room:userLocationChanged

**Data:** 

<pre>
{
    "data": {
        "userId": string
        "roomId": string
        "propId": string
        "propTypes": [ string ] <span color="#1b1ef7"> // booth/fileCabinet/socialCircleDynamic</span>
        "position": { <a href="#xyz">xyz structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="room-has-light-data-event"></a>

### Room has light data event

**Event:** room:hasLightData

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "platforms": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
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

<a name="user-reactions"></a>

#### User Reactions

<pre>
{
    "reactions": [ [ userId, reaction ] ] <span color="#1b1ef7"> // list of tuples [userId, reaction]</span>
    "total": int <span color="#1b1ef7"> // total reactions for item</span>
    "ownReaction": string <span color="#1b1ef7"> // current user own reaction</span>
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
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
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
    "assetBundleMeta": {
        "logoCount": int <span color="#1b1ef7"> // show amount of logos in content management system</span>
        "thumbnailCount": int <span color="#1b1ef7"> // show amount of thumbnails in content management system</span>
    }
}
</pre>

<br>

<a name="asset-bundle-style"></a>

#### Asset Bundle Style

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "styleType": string <span color="#1b1ef7"> // Default/NoMirror</span>
    "doorsType": string <span color="#1b1ef7"> // Glass/None</span>
    "homePosition": { <a href="#xyz">xyz structure</a> } <span color="#1b1ef7"> // home position for camera</span>
}
</pre>

<br>

<a name="asset-bundle-environment"></a>

#### Asset Bundle Environment

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
}
</pre>

<br>

<a name="asset-bundle-skin"></a>

#### Asset Bundle Skin

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "assetId": string
    "variantId": string
    "name": string
    "isDefault": bool <span color="#1b1ef7"> // is default among other variant skins</span>
    "overrideColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // override default color</span>
    "colorOnly": bool <span color="#1b1ef7"> // doesn't have textures, only color'</span>
    "simplifiedSkin": bool <span color="#1b1ef7"> // applying the skins does not require prop hierarchy rebuild</span>
    "sortOrder": int
    "isHidden": bool <span color="#1b1ef7"> // hides skin from client</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "urls": map[string]string <span color="#1b1ef7"> // asset skin data urls per platform</span>
    "defaultColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // applied by parent variant model</span>
}
</pre>

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

