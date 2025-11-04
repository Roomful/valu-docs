<br>

<a name="adminserver-prop-api"></a>

## Adminserver: Prop API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/jsonRpc/prop.getPropModel](#get-prop-model) | jsonRpc | Get prop model |
| [/jsonRpc/prop.getPropContent](#get-prop-content) | jsonRpc | Get prop content |
| [/jsonRpc/prop.changePropContent](#change-prop-content) | jsonRpc | Change prop content |
| [/jsonRpc/prop.changeResourcePosition](#change-resource-position) | jsonRpc | Change resource position |
| [/jsonRpc/prop.updateProp](#update-prop) | jsonRpc | Update prop |

<br>

<a name="get-prop-model"></a>

### Get prop model

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/prop.getPropModel

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
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-prop-content"></a>

### Get prop content

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/prop.getPropContent

**Request:** 

<pre>
{
    "roomId": string
    "propId": string
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "content": [{ <a href="#resource">resource structure</a> }]
        "counts": {
            "logoCount": int <span color="#1b1ef7"> // show amount of logos in content management system</span>
            "thumbnailCount": int <span color="#1b1ef7"> // show amount of thumbnails in content management system</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="change-prop-content"></a>

### Change prop content

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/prop.changePropContent

**Permissions:** 

prop.manage /networkId/roomId/propId

**Request:** 

<pre>
{
    "roomId": string
    "propId": string
    "appendToListEnd": bool <span color="#1b1ef7"> // if true, resources from moveToProp will be added to the end of the list</span>
    "moveToProp": [ string ] <span color="#1b1ef7"> // lists of resources</span>
    "removeFromProp": [ string ] <span color="#1b1ef7"> // lists of resources</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="change-resource-position"></a>

### Change resource position

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/prop.changeResourcePosition

**Permissions:** 

prop.manage /networkId/roomId/propId

**Request:** 

<pre>
{
    "roomId": string
    "propId": string
    "resource": string
    "position": int
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="update-prop"></a>

### Update prop

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/prop.updateProp

**Permissions:** 

prop.manage /networkId/roomId/propId

**Request:** 

<pre>
{
    "roomId": string
    "propId": string
    "title": string
    "description": string
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

