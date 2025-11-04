<br>

<a name="public-api"></a>

## Public API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/seo](#handle-seo) | webRequest | Handle seo |
| [/seo/{roomId}](#handle-seo-room-by-id) | webRequest | Handle seo room by id |
| [/seo/{group}/{alias}](#handle-seo-room-by-group-alias) | webRequest | Handle seo room by group alias |
| [/api/v0/publicRpc/room.permissions](#permissions) | publicRpc | Permissions |
| [/api/v0/publicRpc/room.discoverRoom](#discover-room) | publicRpc | Discover room |
| [/api/v0/publicRpc/room.getRoom](#get-room) | publicRpc | Get room |
| [/api/v0/publicRpc/room.searchRoomsByTag](#search-rooms-by-tag) | publicRpc | Search rooms by tag |
| [/api/v0/publicRpc/init.client](#get-data-for-client-initialization) | publicRpc | Get data for client initialization |
| [/api/v0/publicRpc/init.plugin](#get-data-for-plugin-initialization) | publicRpc | Get data for plugin initialization |
| [/api/v0/publicRpc/init.application](#get-data-for-application-initialization) | publicRpc | Get data for application initialization |
| [/api/v0/publicRpc/init.networkApplication](#get-data-for-network-application-initialization) | publicRpc | Get data for network application initialization |
| [/api/v0/publicRpc/init.activeExpoNetworks](#active-expo-networks) | publicRpc | Active expo networks |
| [/api/v0/publicRpc/init.getNetworkDomains](#get-network-domains) | publicRpc | Get network domains |
| [/api/v0/publicRpc/init.checkClientVersion](#check-client-version) | publicRpc | Check client version |

<br>

<a name="handle-seo"></a>

### Handle seo

**HTTP Method:** GET

**Path:** /seo

**Description:** Endpoint returns seo page for network. Server reads network domain from request headers: X-Request-Domain, Referer or Origin.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
seo html page
</pre>

<br>

<a name="handle-seo-room-by-id"></a>

### Handle seo room by id

**HTTP Method:** GET

**Path:** /seo/{roomId}

**Description:** Endpoint returns seo page for room by roomId or by alias.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
seo html page
</pre>

<br>

<a name="handle-seo-room-by-group-alias"></a>

### Handle seo room by group alias

**HTTP Method:** GET

**Path:** /seo/{group}/{alias}

**Description:** Endpoint returns seo page for room by group and alias.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
seo html page
</pre>

<br>

<a name="permissions"></a>

### Permissions

**Method:** publicRpc

**HTTP Method:** POST

**Path:** /api/v0/publicRpc/room.permissions

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
        "view": bool
        "comment": bool
        "contribute": bool
        "edit": bool
        "manage": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="discover-room"></a>

### Discover room

**Method:** publicRpc

**HTTP Method:** POST

**Path:** /api/v0/publicRpc/room.discoverRoom

**Description:** Api returns status code 802 if room not found and 803 if user does not have permissions to view room.

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
        "permissions": {
            "view": bool
            "comment": bool
            "contribute": bool
            "edit": bool
            "manage": bool
        }
        "networkInfo": {
            "network": { <a href="#network">network structure</a> }
            "subscribed": bool
            "subscriptionOptions": [{
                "type": string <span color="#1b1ef7"> // free/one_time_payment/subscription_week/subscription_month/subscription_year</span>
                "token": float <span color="#1b1ef7"> // subscription cost in tokens</span>
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-room"></a>

### Get room

**Method:** publicRpc

**HTTP Method:** POST

**Path:** /api/v0/publicRpc/room.getRoom

**Description:** Api returns status code 802 if room not found and 803 if user does not have permissions to view room.

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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-rooms-by-tag"></a>

### Search rooms by tag

**Method:** publicRpc

**HTTP Method:** POST

**Path:** /api/v0/publicRpc/room.searchRoomsByTag

**Description:** Api returns list of rooms for specified tag.

* If tagSortBy == `popularity`, api returns most popular public rooms.
* If tagSortBy == `userActivity`, api returns user owned rooms and rooms where user was invited (requires authorization).

**Request:** 

<pre>
{
    "tag": string
    "tagSortBy": string <span color="#1b1ef7"> // popularity/userActivity</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "rooms": [{
            "room": string
            "title": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-data-for-client-initialization"></a>

### Get data for client initialization

**Method:** publicRpc

**HTTP Method:** POST

**Path:** /api/v0/publicRpc/init.client

**Description:** If session id is not provided (or not valid), function returns info for anonymous user.

**Request:** 

<pre>
{
    "roomId": string
    "alias": string
    "group": string
    "domainName": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "endpoint": string <span color="#1b1ef7"> // https://api.roomful.net</span>
        "networkId": string <span color="#1b1ef7"> // network id for current domain</span>
        "network": { <span color="#1b1ef7"> // network data for current domain</span>
            "loaderType": int <span color="#1b1ef7"> // 0 - logo, 1 - hybrid, 2 - slideshow, 3 - video</span>
            "logoUrl": string <span color="#1b1ef7"> // url</span>
            "loadingVideoUrl": string <span color="#1b1ef7"> // url or youtube id</span>
            "allowRegistration": bool <span color="#1b1ef7"> // allow registration to network</span>
            "allowAnonymous": bool <span color="#1b1ef7"> // allow network access without authorization</span>
            "ssoProviders": [ string ] <span color="#1b1ef7"> // epam, epam.social[google,facebook,linkedin]</span>
            "defaultPassword": string <span color="#1b1ef7"> // default password for conference</span>
            "defaultRoom": string
            "onlyVerifiedAccounts": bool <span color="#1b1ef7"> // if true, server would require to verify email before creating new user session</span>
            "requireZipCode": bool <span color="#1b1ef7"> // if true, zip code should be required field during registration</span>
            "hasExpo": bool <span color="#1b1ef7"> // informs clients that the network has expo</span>
            "pluginEnabled": bool <span color="#1b1ef7"> // imported from network plugin settings</span>
            "shareServerHost": string <span color="#1b1ef7"> // address of share server</span>
        }
        "sessionNetworkId": string <span color="#1b1ef7"> // network id for current session</span>
        "room": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "alias": string
            "group": string
            "domains": [ string ]
            "title": string <span color="#1b1ef7"> // room title</span>
            "privacy": string <span color="#1b1ef7"> // private/public</span>
            "allowEmbed": bool <span color="#1b1ef7"> // allow embedding room to non valuverse web pages</span>
            "permissions": { <span color="#1b1ef7"> // user permissions for the room</span>
                "view": bool
                "comment": bool
                "contribute": bool
                "edit": bool
                "manage": bool
            }
        }
        "amazon": {
            "accessKey": string
            "associateTag": string
        }
        "userId": string <span color="#1b1ef7"> // session user id</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-data-for-plugin-initialization"></a>

### Get data for plugin initialization

**Method:** publicRpc

**HTTP Method:** POST

**Path:** /api/v0/publicRpc/init.plugin

**Request:** 

<pre>
{
    "networkId": string <span color="#1b1ef7"> // if provided, server will look for network by networkId</span>
    "domainName": string <span color="#1b1ef7"> // if networkId not provided, server will look for network by domain name</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "networkId": string
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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-data-for-application-initialization"></a>

### Get data for application initialization

**Method:** publicRpc

**HTTP Method:** POST

**Path:** /api/v0/publicRpc/init.application

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "enableSso": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-data-for-network-application-initialization"></a>

### Get data for network application initialization

**Method:** publicRpc

**HTTP Method:** POST

**Path:** /api/v0/publicRpc/init.networkApplication

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
        "disableEmailLogin": bool <span color="#1b1ef7"> // if true, client application shouldn't show email login option</span>
        "disableSsoLogin": bool <span color="#1b1ef7"> // if true, client application shouldn't show sso login options</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="active-expo-networks"></a>

### Active expo networks

**Method:** publicRpc

**HTTP Method:** POST

**Path:** /api/v0/publicRpc/init.activeExpoNetworks

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
        "networks": [{
            "network": { <a href="#network">network structure</a> }
            "settings": {
                "allowRegistration": bool <span color="#1b1ef7"> // allow registration to network</span>
                "onlyVerifiedAccounts": bool <span color="#1b1ef7"> // if true, server would require to verify email before creating new user session</span>
                "singleScreenAuth": bool <span color="#1b1ef7"> // if true, show registration and authorization on the same scene</span>
                "hasDefaultPassword": bool <span color="#1b1ef7"> // true, if network has default password for conference</span>
                "requireZipCode": bool <span color="#1b1ef7"> // if true, zip code should be required field during registration</span>
                "ssoProviders": [ string ] <span color="#1b1ef7"> // epam, epam.social[google,facebook,linkedin]</span>
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-network-domains"></a>

### Get network domains

**Method:** publicRpc

**HTTP Method:** POST

**Path:** /api/v0/publicRpc/init.getNetworkDomains

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
        "defaultDomain": string
        "presentationDomain": string
        "studioDomain": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="check-client-version"></a>

### Check client version

**Method:** publicRpc

**HTTP Method:** POST

**Path:** /api/v0/publicRpc/init.checkClientVersion

**Request:** 

<pre>
{
    "clientVersion": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "status": int <span color="#1b1ef7"> // 0 - ok, 1 - require update</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="network"></a>

#### Network

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "fullName": string
    "type": string <span color="#1b1ef7"> // Public/Matchmaking/BusinessSocial/NetworkConference/Humanity</span>
    "thumbnail": string <span color="#1b1ef7"> // resourceId</span>
    "parentNetworkId": string <span color="#1b1ef7"> // if not empty, current network is a sub network</span>
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

