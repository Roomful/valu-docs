<br>

<a name="comment-api"></a>

## Comment API

| Endpoint | Method | Description |
|-----|-----|-----|
| [resource:addComment](#add-comment-to-resource) | websocket | Add comment to resource |
| [resource:updateComment](#update-resource-comment) | websocket | Update resource comment |
| [resource:addCommentAttachments](#add-comment-attachments) | websocket | Add comment attachments |
| [resource:deleteCommentAttachments](#delete-comment-attachments) | websocket | Delete comment attachments |
| [resource:deleteComment](#delete-comment-from-resource) | websocket | Delete comment from resource |
| [resource:getComments](#get-comments-for-resource) | websocket | Get comments for resource |
| [resource:getCommentsByIds](#get-comments-by-ids) | websocket | Get comments by ids |
| [resource:approveComment](#approve-comment) | websocket | Approve comment |
| [resource:disapproveComment](#disapprove-comment) | websocket | Disapprove comment |
| [resource:addComment](#on-comment-created-event) | websocketEvent | On comment created event |
| [resource:updateComment](#on-comment-updated-event) | websocketEvent | On comment updated event |
| [resource:deleteComment](#on-comment-deleted-event) | websocketEvent | On comment deleted event |
| [resource:approveComment](#on-comment-approved-event) | websocketEvent | On comment approved event |

<br>

<a name="add-comment-to-resource"></a>

### Add comment to resource

**Method:** websocket

**Endpoint:** resource:addComment

**Request:** 

<pre>
{
    "data": {
        "resource": string
        "message": string
        "attachments": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resource": string
        "comment": { <a href="#comment">comment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-resource-comment"></a>

### Update resource comment

**Method:** websocket

**Endpoint:** resource:updateComment

**Request:** 

<pre>
{
    "data": {
        "resource": string
        "comment": string
        "message": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resource": string
        "comment": { <a href="#comment">comment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="add-comment-attachments"></a>

### Add comment attachments

**Method:** websocket

**Endpoint:** resource:addCommentAttachments

**Request:** 

<pre>
{
    "data": {
        "resource": string
        "comment": string
        "attachments": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resource": string
        "comment": { <a href="#comment">comment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-comment-attachments"></a>

### Delete comment attachments

**Method:** websocket

**Endpoint:** resource:deleteCommentAttachments

**Request:** 

<pre>
{
    "data": {
        "resource": string
        "comment": string
        "attachments": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resource": string
        "comment": { <a href="#comment">comment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-comment-from-resource"></a>

### Delete comment from resource

**Method:** websocket

**Endpoint:** resource:deleteComment

**Request:** 

<pre>
{
    "data": {
        "resource": string
        "comment": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resource": string
        "comment": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-comments-for-resource"></a>

### Get comments for resource

**Method:** websocket

**Endpoint:** resource:getComments

**Description:** API allows filtering comments by attachment type (image/audio/video/none): 

1) ```"attachmentTypes": []``` - fetch all comments 

2) ```"attachmentTypes": ["none"]``` - fetch comments without attachments 

3) ```"attachmentTypes": ["image"]``` - fetch comments with one type of attachment 

4) ```"attachmentTypes": ["audio", "video"]``` - fetch comments that contain one of provided attachment type 



**Request:** 

<pre>
{
    "data": {
        "resource": string
        "attachmentTypes": [ string ]
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
        "comments": { <a href="#comments">comments structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-comments-by-ids"></a>

### Get comments by ids

**Method:** websocket

**Endpoint:** resource:getCommentsByIds

**Request:** 

<pre>
{
    "data": {
        "resource": string
        "comments": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "comments": [{ <a href="#comment">comment structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="approve-comment"></a>

### Approve comment

**Method:** websocket

**Endpoint:** resource:approveComment

**Request:** 

<pre>
{
    "data": {
        "comment": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "comment": { <a href="#comment">comment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="disapprove-comment"></a>

### Disapprove comment

**Method:** websocket

**Endpoint:** resource:disapproveComment

**Request:** 

<pre>
{
    "data": {
        "comment": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "comment": { <a href="#comment">comment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-comment-created-event"></a>

### On comment created event

**Event:** resource:addComment

**Data:** 

<pre>
{
    "data": {
        "room": string
        "resource": string
        "comment": { <a href="#comment">comment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-comment-updated-event"></a>

### On comment updated event

**Event:** resource:updateComment

**Description:** Event is triggered when comment content is updated or attachment added/deleted.

**Data:** 

<pre>
{
    "data": {
        "room": string
        "resource": string
        "comment": { <a href="#comment">comment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-comment-deleted-event"></a>

### On comment deleted event

**Event:** resource:deleteComment

**Data:** 

<pre>
{
    "data": {
        "room": string
        "resource": string
        "comment": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-comment-approved-event"></a>

### On comment approved event

**Event:** resource:approveComment

**Data:** 

<pre>
{
    "data": {
        "room": string
        "resource": string
        "comment": { <a href="#comment">comment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

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

