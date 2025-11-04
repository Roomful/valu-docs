<br>

<a name="room-preset-api"></a>

## Room: Preset API

| Endpoint | Method | Description |
|-----|-----|-----|
| [room:createPresetArea](#create-preset-area) | websocket | Create preset area |
| [room:deletePresetArea](#delete-preset-area) | websocket | Delete preset area |
| [room:listPresetAreas](#list-preset-areas) | websocket | List preset areas |
| [room:getPresetAreaContent](#get-preset-area-content) | websocket | Get preset area content |
| [room:addPresetAreaPropsToRoom](#add-preset-area-props-to-room) | websocket | Add preset area props to room |
| [room:createPlacementArea](#create-placement-area) | websocket | Create placement area |
| [room:updatePlacementArea](#update-placement-area) | websocket | Update placement area |
| [room:updatePlacementAreaCompanyName](#update-placement-area-company-name) | websocket | Update placement area company name |
| [room:setPlacementAreaCustomization](#set-placement-area-customization) | websocket | Set placement area customization |
| [room:purchasePlacementArea](#purchase-placement-area) | websocket | Purchase placement area |
| [room:expirePlacementAreaSubscription](#expire-placement-area-subscription) | websocket | Expire placement area subscription |
| [room:deletePlacementArea](#delete-placement-area) | websocket | Delete placement area |
| [room:restorePlacementArea](#restore-placement-area) | websocket | Restore placement area |
| [room:placementAreaCreated](#event-placement-area-created) | websocketEvent | Event: placement area created |
| [room:placementAreaUpdated](#event-placement-area-updated) | websocketEvent | Event: placement area updated |
| [room:placementAreaDeleted](#event-placement-area-deleted) | websocketEvent | Event: placement area deleted |
| [room:presetAreaCreated](#event-preset-area-created) | websocketEvent | Event: preset area created |
| [room:presetAreaDeleted](#event-preset-area-deleted) | websocketEvent | Event: preset area deleted |
| [room:placementAreas](#placement-areas-event) | websocketEvent | Placement areas event |

<br>

<a name="create-preset-area"></a>

### Create preset area

**Method:** websocket

**Endpoint:** room:createPresetArea

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "thumbnailId": string
        "name": string
        "geometry": { <a href="#geometry">geometry structure</a> }
        "props": [{
            "propId": string
            "position": { <a href="#xyz">xyz structure</a> }
            "rotation": { <a href="#xyz">xyz structure</a> }
        }]
        "linkPropContent": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "presetAreaId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-preset-area"></a>

### Delete preset area

**Method:** websocket

**Endpoint:** room:deletePresetArea

**Request:** 

<pre>
{
    "data": {
        "presetAreaId": string
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

<a name="list-preset-areas"></a>

### List preset areas

**Method:** websocket

**Endpoint:** room:listPresetAreas

**Description:** Api returns a list of all user preset areas.

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
        "presetAreas": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string <span color="#1b1ef7"> // preset owner</span>
            "roomId": string <span color="#1b1ef7"> // room where preset is located</span>
            "thumbnailId": string <span color="#1b1ef7"> // resource id of thumbnail</span>
            "name": string <span color="#1b1ef7"> // name of preset</span>
            "geometry": { <a href="#geometry">geometry structure</a> } <span color="#1b1ef7"> // preset geometry</span>
            "linkPropContent": bool <span color="#1b1ef7"> // if true - preset props link content from source props</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-preset-area-content"></a>

### Get preset area content

**Method:** websocket

**Endpoint:** room:getPresetAreaContent

**Description:** Api returns preset area content.

**Request:** 

<pre>
{
    "data": {
        "presetAreaId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "props": [{ <a href="#room-prop">room prop structure</a> }]
        "assets": map[string]{ <a href="#asset-bundle-prop">asset bundle prop structure</a> }
        "propSkins": map[string]{ <a href="#asset-bundle-skin">asset bundle skin structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="add-preset-area-props-to-room"></a>

### Add preset area props to room

**Method:** websocket

**Endpoint:** room:addPresetAreaPropsToRoom

**Description:** Api adds props from preset area to room. If ```placementAreaId``` provided - server will check if user can add props to a placement area instead of the room.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "placementAreaId": string
        "presetAreaId": string
        "props": map[string]{
            "panelId": string
            "position": { <a href="#xyz">xyz structure</a> }
            "rotation": { <a href="#xyz">xyz structure</a> }
        }
        "linkPropContent": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "propIds": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-placement-area"></a>

### Create placement area

**Method:** websocket

**Endpoint:** room:createPlacementArea

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "panelId": string
        "name": string
        "price": float
        "geometry": { <a href="#geometry">geometry structure</a> }
        "customization": {
            "outlineColor": { <a href="#rgba">rgba structure</a> }
            "floorTextColor": { <a href="#rgba">rgba structure</a> }
            "flyingTextColor": { <a href="#rgba">rgba structure</a> }
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "placementAreaId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-placement-area"></a>

### Update placement area

**Method:** websocket

**Endpoint:** room:updatePlacementArea

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "panelId": string
        "placementAreaId": string
        "name": string
        "price": float
        "geometry": { <a href="#geometry">geometry structure</a> }
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

<a name="update-placement-area-company-name"></a>

### Update placement area company name

**Method:** websocket

**Endpoint:** room:updatePlacementAreaCompanyName

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "placementAreaId": string
        "companyName": string
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

<a name="set-placement-area-customization"></a>

### Set placement area customization

**Method:** websocket

**Endpoint:** room:setPlacementAreaCustomization

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "placementAreaId": string
        "outlineColor": { <a href="#rgba">rgba structure</a> }
        "floorTextColor": { <a href="#rgba">rgba structure</a> }
        "flyingTextColor": { <a href="#rgba">rgba structure</a> }
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

<a name="purchase-placement-area"></a>

### Purchase placement area

**Method:** websocket

**Endpoint:** room:purchasePlacementArea

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "placementAreaId": string
        "companyName": string
        "purchaseOptions": {
            "subscriptionPlan": string <span color="#1b1ef7"> // free/one_time_payment/subscription_week/subscription_month/subscription_6_months/subscription_year</span>
            "walletAddress": string <span color="#1b1ef7"> // wallet address (in case of crypto currency payment)</span>
            "currency": string <span color="#1b1ef7"> // rents (default) / roomi (Roomful crypto currency) / Valu (ValuVerse crypto currency)</span>
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

<a name="expire-placement-area-subscription"></a>

### Expire placement area subscription

**Method:** websocket

**Endpoint:** room:expirePlacementAreaSubscription

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "placementAreaId": string
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

<a name="delete-placement-area"></a>

### Delete placement area

**Method:** websocket

**Endpoint:** room:deletePlacementArea

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "placementAreaId": string
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

<a name="restore-placement-area"></a>

### Restore placement area

**Method:** websocket

**Endpoint:** room:restorePlacementArea

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "placementAreaId": string
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

<a name="event-placement-area-created"></a>

### Event: placement area created

**Event:** room:placementAreaCreated

**Data:** 

<pre>
{
    "data": {
        "placementArea": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "roomId": string <span color="#1b1ef7"> // room where preset is located</span>
            "panelId": string <span color="#1b1ef7"> // room panel where preset is located</span>
            "name": string <span color="#1b1ef7"> // name of placement area to be displayed in UI</span>
            "price": float <span color="#1b1ef7"> // price for renting placement area</span>
            "geometry": { <a href="#geometry">geometry structure</a> } <span color="#1b1ef7"> // placement area geometry relative to room</span>
            "owner": string <span color="#1b1ef7"> // client who purchased placement area</span>
            "subscriptionStatus": string <span color="#1b1ef7"> // free/active/expired</span>
            "companyName": string <span color="#1b1ef7"> // name of company who purchased placement area</span>
            "customization": { <span color="#1b1ef7"> // placement area visual customization</span>
                "outlineColor": { <a href="#rgba">rgba structure</a> }
                "floorTextColor": { <a href="#rgba">rgba structure</a> }
                "flyingTextColor": { <a href="#rgba">rgba structure</a> }
            }
            "propIds": [ string ] <span color="#1b1ef7"> // list of props that are placed in this placement area</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="event-placement-area-updated"></a>

### Event: placement area updated

**Event:** room:placementAreaUpdated

**Data:** 

<pre>
{
    "data": {
        "placementArea": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "roomId": string <span color="#1b1ef7"> // room where preset is located</span>
            "panelId": string <span color="#1b1ef7"> // room panel where preset is located</span>
            "name": string <span color="#1b1ef7"> // name of placement area to be displayed in UI</span>
            "price": float <span color="#1b1ef7"> // price for renting placement area</span>
            "geometry": { <a href="#geometry">geometry structure</a> } <span color="#1b1ef7"> // placement area geometry relative to room</span>
            "owner": string <span color="#1b1ef7"> // client who purchased placement area</span>
            "subscriptionStatus": string <span color="#1b1ef7"> // free/active/expired</span>
            "companyName": string <span color="#1b1ef7"> // name of company who purchased placement area</span>
            "customization": { <span color="#1b1ef7"> // placement area visual customization</span>
                "outlineColor": { <a href="#rgba">rgba structure</a> }
                "floorTextColor": { <a href="#rgba">rgba structure</a> }
                "flyingTextColor": { <a href="#rgba">rgba structure</a> }
            }
            "propIds": [ string ] <span color="#1b1ef7"> // list of props that are placed in this placement area</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="event-placement-area-deleted"></a>

### Event: placement area deleted

**Event:** room:placementAreaDeleted

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "placementAreaId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="event-preset-area-created"></a>

### Event: preset area created

**Event:** room:presetAreaCreated

**Data:** 

<pre>
{
    "data": {
        "presetArea": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string <span color="#1b1ef7"> // preset owner</span>
            "roomId": string <span color="#1b1ef7"> // room where preset is located</span>
            "thumbnailId": string <span color="#1b1ef7"> // resource id of thumbnail</span>
            "name": string <span color="#1b1ef7"> // name of preset</span>
            "geometry": { <a href="#geometry">geometry structure</a> } <span color="#1b1ef7"> // preset geometry</span>
            "linkPropContent": bool <span color="#1b1ef7"> // if true - preset props link content from source props</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="event-preset-area-deleted"></a>

### Event: preset area deleted

**Event:** room:presetAreaDeleted

**Data:** 

<pre>
{
    "data": {
        "presetAreaId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="placement-areas-event"></a>

### Placement areas event

**Event:** room:placementAreas

**Description:** An event is triggered when a client requested for a room that has placement areas within.

**Data:** 

<pre>
{
    "data": {
        "placementAreas": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "roomId": string <span color="#1b1ef7"> // room where preset is located</span>
            "panelId": string <span color="#1b1ef7"> // room panel where preset is located</span>
            "name": string <span color="#1b1ef7"> // name of placement area to be displayed in UI</span>
            "price": float <span color="#1b1ef7"> // price for renting placement area</span>
            "geometry": { <a href="#geometry">geometry structure</a> } <span color="#1b1ef7"> // placement area geometry relative to room</span>
            "owner": string <span color="#1b1ef7"> // client who purchased placement area</span>
            "subscriptionStatus": string <span color="#1b1ef7"> // free/active/expired</span>
            "companyName": string <span color="#1b1ef7"> // name of company who purchased placement area</span>
            "customization": { <span color="#1b1ef7"> // placement area visual customization</span>
                "outlineColor": { <a href="#rgba">rgba structure</a> }
                "floorTextColor": { <a href="#rgba">rgba structure</a> }
                "flyingTextColor": { <a href="#rgba">rgba structure</a> }
            }
            "propIds": [ string ] <span color="#1b1ef7"> // list of props that are placed in this placement area</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

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

