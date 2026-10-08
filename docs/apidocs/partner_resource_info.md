<br>

<a name="partner-resourceinfo-api"></a>

## Partner: ResourceInfo API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/partnerRpc/resourceInfo.getResourceById](#get-resource-by-id) | jsonRpc | Get resource by id |
| [/api/v0/partnerRpc/resourceInfo.getResourceUrl](#get-resource-url) | jsonRpc | Get resource url |
| [/api/v0/partnerRpc/resourceInfo.updateResourceEnrichment](#update-resource-enrichment) | jsonRpc | Update resource enrichment |
| [/api/v0/partnerRpc/resourceInfo.setBelongingIndexState](#set-belonging-index-state) | jsonRpc | Set belonging index state |
| [/api/v0/partnerRpc/resourceInfo.fetchPendingJobs](#fetch-pending-jobs) | jsonRpc | Fetch pending jobs |
| [/api/v0/partnerRpc/resourceInfo.completeJob](#complete-job) | jsonRpc | Complete job |
| [/api/v0/partnerRpc/resourceInfo.checkUserCanViewBelonging](#check-user-can-view-belonging) | jsonRpc | Check user can view belonging |
| [/api/v0/partnerRpc/resourceInfo.checkUserCanViewResource](#check-user-can-view-resource) | jsonRpc | Check user can view resource |
| [/api/v0/partnerRpc/resourceInfo.searchBelonging](#search-belonging) | jsonRpc | Search belonging |
| [/api/v0/partnerRpc/resourceInfo.listParentDirectories](#list-parent-directories) | jsonRpc | List parent directories |

<br>

<a name="get-resource-by-id"></a>

### Get resource by id

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/resourceInfo.getResourceById

**Description:** API returns resource metadata by its id.

**Request:** 

<pre>
{
    "resourceId": string
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

<a name="get-resource-url"></a>

### Get resource url

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/resourceInfo.getResourceUrl

**Description:** API returns direct URL to resource file data.

**Request:** 

<pre>
{
    "resourceId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "url": string
        "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
        "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
        "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-resource-enrichment"></a>

### Update resource enrichment

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/resourceInfo.updateResourceEnrichment

**Description:** API updates resource after AI enrichment.

**Request:** 

<pre>
{
    "resourceId": string
    "enrichment": { <a href="#enrichment-data">enrichment data structure</a> }
    "title": string
    "description": string
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

<a name="set-belonging-index-state"></a>

### Set belonging index state

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/resourceInfo.setBelongingIndexState

**Description:** API sets indexation state of a belonging (filled by RAG).

**Request:** 

<pre>
{
    "belonging": string
    "state": map[string]{ custom structure }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="fetch-pending-jobs"></a>

### Fetch pending jobs

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/resourceInfo.fetchPendingJobs

**Description:** API returns pending resource enrichment jobs to process. Each returned job is leased - call resourceInfo.completeJob to report the outcome, or it becomes fetchable again once the lease expires.

**Request:** 

<pre>
{
    "limit": int <span color="#1b1ef7"> // max number of jobs to return (1-100)</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "jobs": [{
            "jobId": string
            "payload": {
                "resourceId": string
                "networkId": string
            }
            "attemptCount": int <span color="#1b1ef7"> // how many times this job has been leased so far, including this time</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="complete-job"></a>

### Complete job

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/resourceInfo.completeJob

**Description:** API reports the outcome of a resource enrichment job: success completes it, failure either requeues it for retry or dead-letters it once attempts are exhausted. Idempotent - completing an already-terminal job again is a no-op, not an error.

**Request:** 

<pre>
{
    "jobId": string
    "success": bool
    "error": string <span color="#1b1ef7"> // error message when success is false</span>
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="check-user-can-view-belonging"></a>

### Check user can view belonging

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/resourceInfo.checkUserCanViewBelonging

**Description:** API return no error if user has permission to view belonging resources.

**Request:** 

<pre>
{
    "userId": string
    "belonging": {
        "networkId": string
        "belongingType": string
        "belongingId": string
        "belongingPath": string
    }
    "grantToken": string <span color="#1b1ef7"> // optional; one-time token that grants permission for this action</span>
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="check-user-can-view-resource"></a>

### Check user can view resource

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/resourceInfo.checkUserCanViewResource

**Description:** API return no error if user has permission to view resource.

**Request:** 

<pre>
{
    "userId": string
    "resourceId": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-belonging"></a>

### Search belonging

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/resourceInfo.searchBelonging

**Description:** API returns resources by its belonging.

**Request:** 

<pre>
{
    "belonging": {
        "networkId": string
        "belongingType": string
        "belongingId": string
        "belongingPath": string
    }
    "query": string
    "filterBy": string <span color="#1b1ef7"> // filter content (directory/noDirectory)</span>
    "cursor": string
    "limit": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resources": [{ <a href="#resource">resource structure</a> }]
        "nextCursor": string
        "hasMore": bool
        "permissions": {
            "get": bool <span color="#1b1ef7"> // permission to fetch single item from belonging</span>
            "list": bool <span color="#1b1ef7"> // permission to list items within belonging</span>
            "create": bool <span color="#1b1ef7"> // permission to add item to belonging</span>
            "update": bool <span color="#1b1ef7"> // permission to update item within belonging</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-parent-directories"></a>

### List parent directories

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/resourceInfo.listParentDirectories

**Description:** API returns parent directories for resource, from top to bottom.

**Request:** 

<pre>
{
    "resourceId": string
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
    "userId": string <span color="#1b1ef7"> // user id of resource author</span>
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
        "vimeo": { <a href="#resource-data-vimeo">resource data vimeo structure</a> }
        "pinterest": { <a href="#resource-data-pinterest">resource data pinterest structure</a> }
        "pixabay": { <a href="#resource-data-pixabay">resource data pixabay structure</a> }
        "facebook": { <a href="#resource-data-facebook">resource data facebook structure</a> }
        "remoteUrl": { <a href="#resource-data-remote-url">resource data remote url structure</a> }
        "liveStream": { <a href="#live-stream-data">live stream data structure</a> }
        "aiGeneration": { <a href="#ai-generation-data">ai generation data structure</a> }
        "thumbnailUrl": string
        "downloadUrl": string
        "directory": { <a href="#resource-data-directory">resource data directory structure</a> }
        "googleDrive": { <a href="#google-drive">google drive structure</a> }
        "channel": { <a href="#channel-data">channel data structure</a> }
        "enrichment": { <a href="#enrichment-data">enrichment data structure</a> }
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

<a name="resource-data-vimeo"></a>

#### Resource Data Vimeo

<pre>
{
    "videoUrl": string
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
    "createdAt": int
}
</pre>

<br>

<a name="ai-generation-data"></a>

#### AI Generation Data

<pre>
{
    "generationModel": string <span color="#1b1ef7"> // the model used for image generation [gpt-image-2, gpt-image-1.5, gpt-image-1, gpt-image-1-mini]; defaults to gpt-image-2</span>
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

<a name="enrichment-data"></a>

#### Enrichment Data

<pre>
{
    "categories": [ string ]
    "enrichedAt": timestamp
    "enrichmentStatus": string
    "language": string
    "qualityScore": int
    "tags": [ string ]
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

