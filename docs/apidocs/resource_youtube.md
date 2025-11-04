<br>

<a name="youtube-api"></a>

## Youtube API

| Endpoint | Method | Description |
|-----|-----|-----|
| ~~[/api/v0/rpc/youtube.info](#info)~~ | jsonRpc | Info |
| ~~[/api/v0/rpc/youtube.search](#search)~~ | jsonRpc | Search |
| ~~[/api/v0/rpc/youtube.resourceInfo](#resource-info)~~ | jsonRpc | Resource info |
| [youtube:search](#search-youtube) | websocket | Search youtube |
| [youtube:info](#info-youtube) | websocket | Info youtube |
| [youtube:resourceInfo](#resource-info-youtube) | websocket | Resource info youtube |
| [youtube:getSourceUrl](#get-source-url) | websocket | Get source url |
| [youtube:getUploadInfo](#get-youtube-upload-info) | websocket | Get youtube upload info |
| [resource:createYoutube](#create-youtube-resource) | websocket | Create youtube resource |
| ~~[resource:createYoutubeMulti](#create-youtube-resources)~~ | websocket | Create youtube resources |

<br>

<a name="info"></a>

### Info

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/youtube.info

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, use websocket youtube:info instead

**Request:** 

<pre>
{
    "url": string
    "id": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "id": string
        "title": string
        "url": string
        "embed": string
        "thumbnail": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search"></a>

### Search

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/youtube.search

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, use websocket youtube:search instead

**Request:** 

<pre>
{
    "query": string
    "type": string
    "maxResults": int
}
</pre>

**Response:** 

<pre>
{
    "data": [{
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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="resource-info"></a>

### Resource info

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/youtube.resourceInfo

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, use websocket youtube:resourceInfo instead

**Request:** 

<pre>
{
    "url": string
    "id": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "remoteId": string
        "title": string
        "description": string
        "thumbnail": string
        "metadata": {
            "fileDate": timestamp
            "contentType": string
            "link": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-youtube"></a>

### Search youtube

**Method:** websocket

**Endpoint:** youtube:search

**Request:** 

<pre>
{
    "data": {
        "query": string
        "type": string
        "maxResults": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": [{
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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="info-youtube"></a>

### Info youtube

**Method:** websocket

**Endpoint:** youtube:info

**Request:** 

<pre>
{
    "data": {
        "url": string
        "id": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "id": string
        "title": string
        "url": string
        "embed": string
        "thumbnail": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="resource-info-youtube"></a>

### Resource info youtube

**Method:** websocket

**Endpoint:** youtube:resourceInfo

**Request:** 

<pre>
{
    "data": {
        "url": string
        "id": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "Resource": {
            "remoteId": string
            "title": string
            "description": string
            "thumbnail": string
            "metadata": {
                "fileDate": timestamp
                "contentType": string
                "link": string
            }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-source-url"></a>

### Get source url

**Method:** websocket

**Endpoint:** youtube:getSourceUrl

**Description:** Get direct sources to youtube video by its id.

**Request:** 

<pre>
{
    "data": {
        "id": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "sources": [{
            "type": string
            "quality": string
            "url": string
            "expire": timestamp
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-youtube-upload-info"></a>

### Get youtube upload info

**Method:** websocket

**Endpoint:** youtube:getUploadInfo

**Description:** Get youtube upload info by its id.

**Request:** 

<pre>
{
    "data": {
        "id": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "info": {
            "id": string
            "title": string
            "description": string
            "thumbnail": string
            "releaseDate": timestamp
            "width": int
            "height": int
            "orientation": int
            "formats": [{
                "formatId": string
                "type": string
                "quality": string
                "videoQuality": string
                "fileSize": int
            }]
        }
        "maxFileSize": int <span color="#1b1ef7"> // file size limit for upload</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-youtube-resource"></a>

### Create youtube resource

**Method:** websocket

**Endpoint:** resource:createYoutube

**Request:** 

<pre>
{
    "data": {
        "youtubeId": string
        "formatId": string
        "parent": string <span color="#1b1ef7"> // mark that resource belongs to directory</span>
        "roomId": string <span color="#1b1ef7"> // mark that resource belongs to room</span>
        "contributeToRoom": string <span color="#1b1ef7"> // mark that resource belongs to room sorting table</span>
        "addToSortingTable": bool <span color="#1b1ef7"> // mark that resource belongs to user sorting table</span>
        "belonging": string <span color="#1b1ef7"> // use custom belonging (like 'userAIGeneration:{userId}')</span>
    }
    "event": { "id": string, "date": timestamp }
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

<a name="create-youtube-resources"></a>

### Create youtube resources

**Method:** websocket

**Endpoint:** resource:createYoutubeMulti

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, use resource:createYoutube instead

**Request:** 

<pre>
{
    "data": {
        "ids": [ string ] <span color="#1b1ef7"> // ids of youtube videos</span>
        "parent": string <span color="#1b1ef7"> // mark that resource belongs to directory</span>
        "roomId": string <span color="#1b1ef7"> // mark that resource belongs to room</span>
        "contributeToRoom": string <span color="#1b1ef7"> // mark that resource belongs to room sorting table</span>
        "addToSortingTable": bool <span color="#1b1ef7"> // mark that resource belongs to user sorting table</span>
        "belonging": string <span color="#1b1ef7"> // use custom belonging (like 'userAIGeneration:{userId}')</span>
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

<a name="models"></a>

## Models

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

