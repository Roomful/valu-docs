<br>

<a name="environment-api"></a>

## Environment API



Environment API is mentioned to provide an alternative for environment assets. 

Environment resources could be uploaded by any user. Anyone can use his own private environment or public environments provided by other users. 

Environments available in all networks.

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/asset/upload/environment/link](#direct-environment-resource-upload-to-google-bucket-get-upload-link-) | webRequest | Direct environment resource upload to Google bucket (get upload link) |
| [/api/v0/asset/upload/environment/link/complete](#direct-environment-resource-upload-to-google-bucket-complete-upload-link-) | webRequest | Direct environment resource upload to Google bucket (complete upload link) |
| [/api/v0/asset/environment/{id}](#get-environment-resource-data) | webRequest | Get environment resource data |
| [/api/v0/asset/environment/url/{id}](#get-environment-resource-url) | webRequest | Get environment resource url |
| [/api/v0/asset/environment/thumbnail/{size}/{id}](#get-environment-thumbnail-data) | webRequest | Get environment thumbnail data |
| [/api/v0/asset/environment/thumbnail/url/{size}/{id}](#get-environment-thumbnail-url) | webRequest | Get environment thumbnail url |
| [asset:createEnvironment](#create-environment) | websocket | Create environment |
| [asset:deleteEnvironment](#delete-environment) | websocket | Delete environment |
| [asset:updateEnvironment](#update-environment) | websocket | Update environment |
| [asset:searchEnvironments](#search-environments) | websocket | Search environments |
| [asset:environmentCreated](#environment-created-event) | websocketEvent | Environment created event |
| [asset:environmentResourceUploaded](#environment-resource-uploaded-event) | websocketEvent | Environment resource uploaded event |

<br>

<a name="direct-environment-resource-upload-to-google-bucket-get-upload-link-"></a>

### Direct environment resource upload to Google bucket (get upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/upload/environment/link

**Description:** Direct upload gives possibility to upload files directly from a client to a storage bucket. It consist of next steps: 

1) Client asks the server for upload link. The server initializes an upload session and returns a link which could be used for upload. 

2) Client [uploads a file to Google bucket](https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload#upload-resumable). 

3) Client [sends upload complete acknowledgment to the server](#direct-environment-resource-upload-to-google-bucket-complete-upload-link). 



**Request:** 

<pre>
{
    "environmentId": string
    "resourceId": string
    "fileName": string
    "contentType": string
}
</pre>

**Response:** 

<pre>
Google bucket upload link
</pre>

<br>

<a name="direct-environment-resource-upload-to-google-bucket-complete-upload-link-"></a>

### Direct environment resource upload to Google bucket (complete upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/upload/environment/link/complete

**Description:** See [direct upload to Google bucket](#direct-environment-resource-upload-to-google-bucket-get-upload-link).

**Request:** 

<pre>
{
    "environmentId": string
    "resourceId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-environment-resource-data"></a>

### Get environment resource data

**HTTP Method:** GET

**Path:** /api/v0/asset/environment/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Environment resource data
</pre>

<br>

<a name="get-environment-resource-url"></a>

### Get environment resource url

**HTTP Method:** GET

**Path:** /api/v0/asset/environment/url/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Direct url to environment resource
</pre>

<br>

<a name="get-environment-thumbnail-data"></a>

### Get environment thumbnail data

**HTTP Method:** GET

**Path:** /api/v0/asset/environment/thumbnail/{size}/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Environment thumbnail resource data
</pre>

<br>

<a name="get-environment-thumbnail-url"></a>

### Get environment thumbnail url

**HTTP Method:** GET

**Path:** /api/v0/asset/environment/thumbnail/url/{size}/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Direct url to environment thumbnail resource
</pre>

<br>

<a name="create-environment"></a>

### Create environment

**Method:** websocket

**Endpoint:** asset:createEnvironment

**Description:** Api creates environment resource which could be used instead of environment asset.

By default, environment status will be ```private```, as it couldn't become public while resource is not uploaded.

Resource behaviourType should be on of: ```image/environment-360```, ```video/environment-360```, ```image/environment-cubemap```.

**Request:** 

<pre>
{
    "data": {
        "resource": { <a href="#resource">resource structure</a> }
        "status": string <span color="#1b1ef7"> // public/private/pending</span>
        "title": string <span color="#1b1ef7"> // environment title</span>
        "networkId": string <span color="#1b1ef7"> // if present, resource is available only in provided network</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "environment": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "status": string <span color="#1b1ef7"> // public/private/pending</span>
            "title": string <span color="#1b1ef7"> // environment title</span>
            "networkId": string <span color="#1b1ef7"> // if present, resource is available only in provided network</span>
            "resource": { <a href="#resource">resource structure</a> } <span color="#1b1ef7"> // actual resource</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-environment"></a>

### Delete environment

**Method:** websocket

**Endpoint:** asset:deleteEnvironment

**Description:** Api deletes environment. Only admin user can delete environment of other user.

**Request:** 

<pre>
{
    "data": {
        "environmentId": string
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

<a name="update-environment"></a>

### Update environment

**Method:** websocket

**Endpoint:** asset:updateEnvironment

**Description:** Api updates environment.

Environment status can be one of:
* ```private``` - available only for environment owner
* ```pending``` - admin will review environment in order to make it make public
* ```public```  - available for all users system-wide

Actual resource should be uploaded before changing status from ```private``` to something else. Only admin user can set environment status to ```public```.

**Request:** 

<pre>
{
    "data": {
        "environmentId": string
        "status": string <span color="#1b1ef7"> // public/private/pending</span>
        "title": string <span color="#1b1ef7"> // environment title</span>
        "networkId": string <span color="#1b1ef7"> // if present, resource is available only in provided network</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "environment": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "status": string <span color="#1b1ef7"> // public/private/pending</span>
            "title": string <span color="#1b1ef7"> // environment title</span>
            "networkId": string <span color="#1b1ef7"> // if present, resource is available only in provided network</span>
            "resource": { <a href="#resource">resource structure</a> } <span color="#1b1ef7"> // actual resource</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-environments"></a>

### Search environments

**Method:** websocket

**Endpoint:** asset:searchEnvironments

**Description:** Api returns list of environments.

Status could be one of:
* ```own```     - return environments owned by user
* ```pending``` - return pending environments (only for admins)
* ```public```  - return all public environments

Content types could be combination of:
* ```image/environment-360```
* ```image/environment-cubemap```
* ```video/environment-360```



**Request:** 

<pre>
{
    "data": {
        "status": string
        "query": string
        "contentTypes": [ string ]
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
        "environments": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "status": string <span color="#1b1ef7"> // public/private/pending</span>
            "title": string <span color="#1b1ef7"> // environment title</span>
            "networkId": string <span color="#1b1ef7"> // if present, resource is available only in provided network</span>
            "resource": { <a href="#resource">resource structure</a> } <span color="#1b1ef7"> // actual resource</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="environment-created-event"></a>

### Environment created event

**Event:** asset:environmentCreated

**Data:** 

<pre>
{
    "data": {
        "environment": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "status": string <span color="#1b1ef7"> // public/private/pending</span>
            "title": string <span color="#1b1ef7"> // environment title</span>
            "networkId": string <span color="#1b1ef7"> // if present, resource is available only in provided network</span>
            "resource": { <a href="#resource">resource structure</a> } <span color="#1b1ef7"> // actual resource</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="environment-resource-uploaded-event"></a>

### Environment resource uploaded event

**Event:** asset:environmentResourceUploaded

**Data:** 

<pre>
{
    "data": {
        "environment": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "status": string <span color="#1b1ef7"> // public/private/pending</span>
            "title": string <span color="#1b1ef7"> // environment title</span>
            "networkId": string <span color="#1b1ef7"> // if present, resource is available only in provided network</span>
            "resource": { <a href="#resource">resource structure</a> } <span color="#1b1ef7"> // actual resource</span>
        }
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

