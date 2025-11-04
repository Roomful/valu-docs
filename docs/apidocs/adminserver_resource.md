<br>

<a name="admin-resource-api"></a>

## Admin Resource API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/resource/{resourceId}](#read-resource) | webRequest | Read resource |
| [/resource/thumbnail/{size}/{resourceId}](#read-resource-thumbnail) | webRequest | Read resource thumbnail |
| [/resource/upload/link](#direct-upload-to-google-bucket-get-upload-link-) | webRequest | Direct upload to Google bucket (get upload link) |
| [/resource/upload/link/complete](#direct-upload-to-google-bucket-complete-upload-link-) | webRequest | Direct upload to Google bucket (complete upload link) |
| [/resource/upload/remote/url](#remote-url-upload) | webRequest | Remote url upload |
| [/resource/upload/remote/image](#remote-image-upload) | webRequest | Remote image upload |
| [/asset/thumbnail/{assetId}](#read-asset-thumbnail) | webRequest | Read asset thumbnail |
| [/jsonRpc/resource.searchYoutube](#search-youtube) | jsonRpc | Search youtube |
| [/jsonRpc/resource.searchPixabay](#search-pixabay) | jsonRpc | Search pixabay |
| [/jsonRpc/resource.searchImdb](#search-imdb) | jsonRpc | Search imdb |
| [/jsonRpc/resource.createResource](#create-resource) | jsonRpc | Create resource |
| [/jsonRpc/resource.createYoutubeResource](#create-youtube-resource) | jsonRpc | Create youtube resource |
| [/jsonRpc/resource.createImdbResource](#create-imdb-resource) | jsonRpc | Create imdb resource |
| [/jsonRpc/resource.updateResourceAttributes](#update-resource-attributes) | jsonRpc | Update resource attributes |

<br>

<a name="read-resource"></a>

### Read resource

**HTTP Method:** GET

**Path:** /resource/{resourceId}

**Description:** Endpoint redirects to direct resource location.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Resource data
</pre>

<br>

<a name="read-resource-thumbnail"></a>

### Read resource thumbnail

**HTTP Method:** GET

**Path:** /resource/thumbnail/{size}/{resourceId}

**Description:** Endpoint redirects to direct resource location.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Resource data
</pre>

<br>

<a name="direct-upload-to-google-bucket-get-upload-link-"></a>

### Direct upload to Google bucket (get upload link)

**HTTP Method:** POST

**Path:** /resource/upload/link

**Description:** Direct upload gives possibility to upload files directly from a client to a storage bucket. It consist of next steps: 

1) Client asks the server for upload link. The server initializes an upload session and returns a link which could be used for upload. 

2) Client [uploads a file to Google bucket](https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload#upload-resumable). 

3) Client [sends upload complete acknowledgment to the server](#direct-upload-to-google-bucket-complete-upload-link). 



**Headers:** 

X-Resource-Id: resourceId

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Google bucket upload link
</pre>

<br>

<a name="direct-upload-to-google-bucket-complete-upload-link-"></a>

### Direct upload to Google bucket (complete upload link)

**HTTP Method:** POST

**Path:** /resource/upload/link/complete

**Description:** See [direct upload to Google bucket](#direct-upload-to-google-bucket-get-upload-link).

**Headers:** 

X-Resource-Id: resourceId

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="remote-url-upload"></a>

### Remote url upload

**HTTP Method:** POST

**Path:** /resource/upload/remote/url

**Request:** 

<pre>
{
    "url": string
    "urlType": string <span color="#1b1ef7"> // Hls/Dash</span>
    "parent": string <span color="#1b1ef7"> // mark that resource belongs to directory</span>
    "roomId": string <span color="#1b1ef7"> // mark that resource belongs to room</span>
    "contributeToRoom": string <span color="#1b1ef7"> // mark that resource belongs to room sorting table</span>
    "addToSortingTable": bool <span color="#1b1ef7"> // mark that resource belongs to user sorting table</span>
    "belonging": string <span color="#1b1ef7"> // use custom belonging (like 'userAIGeneration:{userId}')</span>
}
</pre>

**Response:** 

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

<a name="remote-image-upload"></a>

### Remote image upload

**HTTP Method:** POST

**Path:** /resource/upload/remote/image

**Request:** 

<pre>
{
    "url": string
    "title": string
    "source": string
    "sourceId": string
    "sourceLink": string
    "parent": string <span color="#1b1ef7"> // mark that resource belongs to directory</span>
    "roomId": string <span color="#1b1ef7"> // mark that resource belongs to room</span>
    "contributeToRoom": string <span color="#1b1ef7"> // mark that resource belongs to room sorting table</span>
    "addToSortingTable": bool <span color="#1b1ef7"> // mark that resource belongs to user sorting table</span>
    "belonging": string <span color="#1b1ef7"> // use custom belonging (like 'userAIGeneration:{userId}')</span>
}
</pre>

**Response:** 

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

<a name="read-asset-thumbnail"></a>

### Read asset thumbnail

**HTTP Method:** GET

**Path:** /asset/thumbnail/{assetId}

**Description:** Endpoint redirects to direct asset thumbnail location.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Resource data
</pre>

<br>

<a name="search-youtube"></a>

### Search youtube

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/resource.searchYoutube

**Request:** 

<pre>
{
    "query": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "hits": [{
            "etag": string
            "id": {
                "channelId": string
                "kind": string
                "playlistId": string
                "videoId": string
            }
            "kind": string
            "snippet": {
                "channelId": string
                "channelTitle": string
                "description": string
                "liveBroadcastContent": string
                "publishedAt": string
                "thumbnails": {
                    "default": {
                        "height": int
                        "url": string
                        "width": int
                    }
                    "high": {
                        "height": int
                        "url": string
                        "width": int
                    }
                    "maxres": {
                        "height": int
                        "url": string
                        "width": int
                    }
                    "medium": {
                        "height": int
                        "url": string
                        "width": int
                    }
                    "standard": {
                        "height": int
                        "url": string
                        "width": int
                    }
                }
                "title": string
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-pixabay"></a>

### Search pixabay

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/resource.searchPixabay

**Request:** 

<pre>
{
    "query": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "hits": [{
            "id": int
            "pageURL": string
            "type": string
            "tags": string
            "previewURL": string
            "previewWidth": int
            "previewHeight": int
            "webformatURL": string
            "webformatWidth": int
            "webformatHeight": int
            "largeImageURL": string
            "fullHDURL": string
            "imageURL": string
            "imageWidth": int
            "imageHeight": int
            "imageSize": int
            "views": int
            "downloads": int
            "favorites": int
            "likes": int
            "comments": int
            "user_id": int
            "user": string
            "userImageURL": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-imdb"></a>

### Search imdb

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/resource.searchImdb

**Request:** 

<pre>
{
    "query": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "hits": [{
            "Title": string
            "Year": string
            "imdbID": string
            "Type": string
            "Poster": string
            "Plot": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-resource"></a>

### Create resource

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/resource.createResource

**Request:** 

<pre>
{
    "resource": { <a href="#resource">resource structure</a> }
    "parent": string <span color="#1b1ef7"> // mark that resource belongs to directory</span>
    "roomId": string <span color="#1b1ef7"> // mark that resource belongs to room</span>
    "contributeToRoom": string <span color="#1b1ef7"> // mark that resource belongs to room sorting table</span>
    "addToSortingTable": bool <span color="#1b1ef7"> // mark that resource belongs to user sorting table</span>
    "belonging": string <span color="#1b1ef7"> // use custom belonging (like 'userAIGeneration:{userId}')</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resource": { <a href="#resource">resource structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-youtube-resource"></a>

### Create youtube resource

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/resource.createYoutubeResource

**Request:** 

<pre>
{
    "id": string
    "parent": string <span color="#1b1ef7"> // mark that resource belongs to directory</span>
    "roomId": string <span color="#1b1ef7"> // mark that resource belongs to room</span>
    "contributeToRoom": string <span color="#1b1ef7"> // mark that resource belongs to room sorting table</span>
    "addToSortingTable": bool <span color="#1b1ef7"> // mark that resource belongs to user sorting table</span>
    "belonging": string <span color="#1b1ef7"> // use custom belonging (like 'userAIGeneration:{userId}')</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resource": { <a href="#resource">resource structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-imdb-resource"></a>

### Create imdb resource

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/resource.createImdbResource

**Request:** 

<pre>
{
    "id": string
    "parent": string <span color="#1b1ef7"> // mark that resource belongs to directory</span>
    "roomId": string <span color="#1b1ef7"> // mark that resource belongs to room</span>
    "contributeToRoom": string <span color="#1b1ef7"> // mark that resource belongs to room sorting table</span>
    "addToSortingTable": bool <span color="#1b1ef7"> // mark that resource belongs to user sorting table</span>
    "belonging": string <span color="#1b1ef7"> // use custom belonging (like 'userAIGeneration:{userId}')</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resource": { <a href="#resource">resource structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-resource-attributes"></a>

### Update resource attributes

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/resource.updateResourceAttributes

**Permissions:** 

prop.manage /networkId/roomId/propId

**Request:** 

<pre>
{
    "resourceId": string
    "attributes": {
        "title": string
        "description": string
        "location": string
        "date": string
        "category": string
    }
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

