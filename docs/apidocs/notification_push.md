<br>

<a name="notification-push-api"></a>

## Notification: Push API

| Endpoint | Method | Description |
|-----|-----|-----|
| [pushNotification](#push-notification) | pushNotification | Push notification |

<br>

<a name="notification-types"></a>

### Notification types

| Type | Description |
|-----|-----|
| [pushInvitation](#push-notification-new-invitation) | Push notification: new invitation |
| [pushFriendRequest](#push-notification-new-friend-request) | Push notification: new friend request |
| [pushVideochatRequest](#push-notification-new-videochat-request) | Push notification: new videochat request |
| [pushVideochatRequestAccepted](#push-notification-videochat-request-accepted) | Push notification: videochat request accepted |
| [pushVideochatRequestDeclined](#push-notification-videochat-request-declined) | Push notification: videochat request declined |
| [pushVideochatRequestCanceled](#push-notification-videochat-request-canceled) | Push notification: videochat request canceled |
| [pushNewDirectTextchatMessage](#push-notification-new-direct-textchat-message) | Push notification: new direct textchat message |
| [pushNewReactionInTextchatMessage](#push-notification-new-reaction-in-textchat-message) | Push notification: new reaction in textchat message |
| [pushNewBoothTextchatMessage](#push-notification-new-booth-textchat-message) | Push notification: new booth textchat message |
| [pushNewRoomTextchatMessage](#push-notification-new-room-textchat-message) | Push notification: new room textchat message |

<br>

<a name="push-notification"></a>

### Push notification

**Description:** See [notification types](#notification-types) for notification inner data structure.

**Data:** 

<pre>
{
    "type": string
    "network": {
        "id": string
        "fullName": string
    }
    "route": string
    "data": { custom structure }
}
</pre>

<br>

<a name="push-notification-new-invitation"></a>

### Push notification: new invitation

**Notification Type:** pushInvitation

**Notification Data:** 

<pre>
{
    "invitation": { <a href="#invitation-info">invitation info structure</a> }
}
</pre>

<br>

<a name="push-notification-new-friend-request"></a>

### Push notification: new friend request

**Notification Type:** pushFriendRequest

**Notification Data:** 

<pre>
{
    "userInfo": { <a href="#user-simple">user simple structure</a> }
}
</pre>

<br>

<a name="push-notification-new-videochat-request"></a>

### Push notification: new videochat request

**Notification Type:** pushVideochatRequest

**Notification Data:** 

<pre>
{
    "videochatRequest": {
        "videochatRequestId": string
        "user": { <a href="#user-simple">user simple structure</a> } <span color="#1b1ef7"> // user who initiated videochat request</span>
        "participants": [{ <a href="#user-simple">user simple structure</a> }] <span color="#1b1ef7"> // current videochat participants (max 10)</span>
        "counter": int <span color="#1b1ef7"> // total users in videochat</span>
    }
}
</pre>

<br>

<a name="push-notification-videochat-request-accepted"></a>

### Push notification: videochat request accepted

**Notification Type:** pushVideochatRequestAccepted

**Notification Data:** 

<pre>
{
    "videochatRequestId": string
}
</pre>

<br>

<a name="push-notification-videochat-request-declined"></a>

### Push notification: videochat request declined

**Notification Type:** pushVideochatRequestDeclined

**Notification Data:** 

<pre>
{
    "videochatRequestId": string
}
</pre>

<br>

<a name="push-notification-videochat-request-canceled"></a>

### Push notification: videochat request canceled

**Notification Type:** pushVideochatRequestCanceled

**Notification Data:** 

<pre>
{
    "videochatRequestId": string
}
</pre>

<br>

<a name="push-notification-new-direct-textchat-message"></a>

### Push notification: new direct textchat message

**Notification Type:** pushNewDirectTextchatMessage

**Notification Data:** 

<pre>
{
    "textchat": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
        "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
            "roomId": string
            "propId": string
            "videochatId": string
        }
        "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
        "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
        "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
        "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
    }
    "message": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "userId": string
        "messageBody": string
        "messageType": int
        "isBlocked": bool
        "isDeleted": bool
        "user": { <a href="#user-simple">user simple structure</a> }
    }
}
</pre>

<br>

<a name="push-notification-new-reaction-in-textchat-message"></a>

### Push notification: new reaction in textchat message

**Notification Type:** pushNewReactionInTextchatMessage

**Notification Data:** 

<pre>
{
    "reactingUser": { <a href="#user-simple">user simple structure</a> }
}
</pre>

<br>

<a name="push-notification-new-booth-textchat-message"></a>

### Push notification: new booth textchat message

**Notification Type:** pushNewBoothTextchatMessage

**Notification Data:** 

<pre>
{
    "textchat": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
        "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
            "roomId": string
            "propId": string
            "videochatId": string
        }
        "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
        "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
        "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
        "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
    }
    "message": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "userId": string
        "messageBody": string
        "messageType": int
        "isBlocked": bool
        "isDeleted": bool
        "user": { <a href="#user-simple">user simple structure</a> }
    }
}
</pre>

<br>

<a name="push-notification-new-room-textchat-message"></a>

### Push notification: new room textchat message

**Notification Type:** pushNewRoomTextchatMessage

**Notification Data:** 

<pre>
{
    "textchat": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
        "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
            "roomId": string
            "propId": string
            "videochatId": string
        }
        "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
        "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
        "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
        "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
    }
    "message": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "userId": string
        "messageBody": string
        "messageType": int
        "isBlocked": bool
        "isDeleted": bool
        "user": { <a href="#user-simple">user simple structure</a> }
    }
}
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="invitation-info"></a>

#### Invitation Info

<pre>
{
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
    "invitedUser": { <a href="#user-simple">user simple structure</a> }
    "invitedBy": { <a href="#user-simple">user simple structure</a> }
    "room": { <a href="#room">room structure</a> }
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

