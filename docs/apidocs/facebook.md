<br>

<a name="facebook-api"></a>

## Facebook API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/rpc/fb.updateToken](#update-token) | jsonRpc | Update token |
| [/api/v0/rpc/fb.getUserAlbums](#get-user-albums) | jsonRpc | Get user albums |
| [/api/v0/rpc/fb.getUserPhotos](#get-user-photos) | jsonRpc | Get user photos |
| [facebook:updateToken](#update-facebook-token) | websocket | Update facebook token |
| [facebook:getAlbums](#get-facebook-albums) | websocket | Get facebook albums |
| [facebook:getPhotos](#get-facebook-photos) | websocket | Get facebook photos |

<br>

<a name="update-token"></a>

### Update token

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/fb.updateToken

**Headers:** 

X-Session-Id: sessionToken

**Request:** 

<pre>
{
    "User": string
    "Token": string
    "Scopes": [ string ]
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-albums"></a>

### Get user albums

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/fb.getUserAlbums

**Headers:** 

X-Session-Id: sessionToken

**Request:** 

<pre>
{
    "User": string
    "Album": string
    "Offset": int
    "Limit": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "albums": [{
            "remoteId": string
            "title": string
            "description": string
            "thumbnail": string
            "metadata": {
                "fileDate": timestamp
                "contentType": string
                "link": string
            }
            "count": int
        }]
        "next": bool
        "offset": int
        "limit": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-photos"></a>

### Get user photos

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/fb.getUserPhotos

**Headers:** 

X-Session-Id: sessionToken

**Request:** 

<pre>
{
    "User": string
    "Album": string
    "Offset": int
    "Limit": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "photos": [{
            "remoteId": string
            "title": string
            "description": string
            "thumbnail": string
            "metadata": {
                "fileDate": timestamp
                "contentType": string
                "link": string
            }
        }]
        "next": bool
        "offset": int
        "limit": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-facebook-token"></a>

### Update facebook token

**Method:** websocket

**Endpoint:** facebook:updateToken

**Request:** 

<pre>
{
    "data": {
        "token": string
        "scopes": [ string ]
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

<a name="get-facebook-albums"></a>

### Get facebook albums

**Method:** websocket

**Endpoint:** facebook:getAlbums

**Request:** 

<pre>
{
    "data": {
        "album": string
        "offset": int
        "limit": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "albums": [{
            "remoteId": string
            "title": string
            "description": string
            "thumbnail": string
            "metadata": {
                "fileDate": timestamp
                "contentType": string
                "link": string
            }
            "count": int
        }]
        "next": bool
        "offset": int
        "limit": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-facebook-photos"></a>

### Get facebook photos

**Method:** websocket

**Endpoint:** facebook:getPhotos

**Request:** 

<pre>
{
    "data": {
        "album": string
        "offset": int
        "limit": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "photos": [{
            "remoteId": string
            "title": string
            "description": string
            "thumbnail": string
            "metadata": {
                "fileDate": timestamp
                "contentType": string
                "link": string
            }
        }]
        "next": bool
        "offset": int
        "limit": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

