<br>

<a name="resource-review-api"></a>

## Resource Review API

| Endpoint | Method | Description |
|-----|-----|-----|
| [resource:createReview](#create-resource-review) | websocket | Create resource review |
| [resource:updateReview](#update-resource-review) | websocket | Update resource review |
| [resource:deleteReview](#delete-resource-review) | websocket | Delete resource review |
| [resource:getReviews](#get-resource-reviews) | websocket | Get resource reviews |
| [resource:createReview](#on-resource-review-created) | websocketEvent | On resource review created |
| [resource:updateReview](#on-resource-review-updated) | websocketEvent | On resource review updated |
| [resource:deleteReview](#on-resource-review-deleted) | websocketEvent | On resource review deleted |

<br>

<a name="create-resource-review"></a>

### Create resource review

**Method:** websocket

**Endpoint:** resource:createReview

**Request:** 

<pre>
{
    "data": {
        "resourceId": string
        "reviewText": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "review": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "reviewText": string
            "reviewUser": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-resource-review"></a>

### Update resource review

**Method:** websocket

**Endpoint:** resource:updateReview

**Request:** 

<pre>
{
    "data": {
        "resourceId": string
        "reviewId": string
        "reviewText": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "review": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "reviewText": string
            "reviewUser": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-resource-review"></a>

### Delete resource review

**Method:** websocket

**Endpoint:** resource:deleteReview

**Request:** 

<pre>
{
    "data": {
        "resourceId": string
        "reviewId": string
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

<a name="get-resource-reviews"></a>

### Get resource reviews

**Method:** websocket

**Endpoint:** resource:getReviews

**Request:** 

<pre>
{
    "data": {
        "resourceId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "reviews": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "reviewText": string
            "reviewUser": { <a href="#user-simple">user simple structure</a> }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resource-review-created"></a>

### On resource review created

**Event:** resource:createReview

**Data:** 

<pre>
{
    "data": {
        "RoomId": string
        "PropId": string
        "ResourceId": string
        "Review": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "reviewText": string
            "reviewUser": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resource-review-updated"></a>

### On resource review updated

**Event:** resource:updateReview

**Data:** 

<pre>
{
    "data": {
        "RoomId": string
        "PropId": string
        "ResourceId": string
        "Review": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "reviewText": string
            "reviewUser": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resource-review-deleted"></a>

### On resource review deleted

**Event:** resource:deleteReview

**Data:** 

<pre>
{
    "data": {
        "RoomId": string
        "PropId": string
        "ResourceId": string
        "ReviewId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

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

