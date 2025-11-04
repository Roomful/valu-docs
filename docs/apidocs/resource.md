<br>

<a name="resource-api"></a>

## Resource API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/resource/create](#create-resource-metadata) | webRequest | Create resource metadata |
| [/api/v0/resource/{id}](#read-resource) | webRequest | Read resource |
| [/api/v0/resource/network/{networkId}/{id}](#read-resource-from-certain-network-) | webRequest | Read resource (from certain network) |
| [/api/v0/resource/proxy/{id}](#proxy-resource) | webRequest | Proxy resource |
| [/api/v0/resource/proxy/youtube](#proxy-resource) | webRequest | Proxy resource |
| [/api/v0/resource/thumbnail/{size}/{id}](#read-resource-thumbnail) | webRequest | Read resource thumbnail |
| [/api/v0/resource/url/{id}](#get-direct-resource-url) | webRequest | Get direct resource url |
| [/api/v0/resource/network/{networkId}/url/{id}](#get-direct-resource-url-from-certain-network-) | webRequest | Get direct resource url (from certain network) |
| [/api/v0/resource/thumbnail/url/{size}/{id}](#get-direct-thumbnail-url) | webRequest | Get direct thumbnail url |
| [/api/v0/resource/thumbnail/user/{id}](#read-user-thumbnail) | webRequest | Read user thumbnail |
| [/api/v0/resource/thumbnail/user/size/{size}/{id}](#read-user-thumbnail-with-size-) | webRequest | Read user thumbnail (with size) |
| [/api/v0/resource/thumbnail/user/url/{id}](#get-user-thumbnail-url) | webRequest | Get user thumbnail url |
| [/api/v0/resource/thumbnail/user/url/size/{size}/{id}](#get-user-thumbnail-url-with-size-) | webRequest | Get user thumbnail url (with size) |
| [/api/v0/resource/thumbnail/room/{id}](#read-room-thumbnail) | webRequest | Read room thumbnail |
| [/api/v0/resource/thumbnail/room/size/{size}/{id}](#read-room-thumbnail-with-size-) | webRequest | Read room thumbnail (with size) |
| [/api/v0/resource/thumbnail/room/url/{id}](#get-room-thumbnail-url) | webRequest | Get room thumbnail url |
| [/api/v0/resource/thumbnail/room/url/size/{size}/{id}](#get-room-thumbnail-url-with-size-) | webRequest | Get room thumbnail url (with size) |
| [/api/v0/resource/thumbnail/network/{id}](#read-network-thumbnail) | webRequest | Read network thumbnail |
| [/api/v0/resource/thumbnail/network/size/{size}/{id}](#read-network-thumbnail-with-size-) | webRequest | Read network thumbnail (with size) |
| [/api/v0/resource/thumbnail/network/url/{id}](#get-network-thumbnail-url) | webRequest | Get network thumbnail url |
| [/api/v0/resource/thumbnail/network/url/size/{size}/{id}](#get-network-thumbnail-url-with-size-) | webRequest | Get network thumbnail url (with size) |
| [/api/v0/resource/thumbnail/amazon/{id}](#read-amazon-thumbnail) | webRequest | Read Amazon thumbnail |
| [/api/v0/resource/thumbnail/youtube/{id}](#read-youtube-thumbnail) | webRequest | Read Youtube thumbnail |
| [/api/v0/resource/thumbnail/imdb/{id}](#read-imdb-thumbnail) | webRequest | Read Imdb thumbnail |
| [/api/v0/resource/thumbnail/pinterest/{id}](#read-pinterest-thumbnail) | webRequest | Read Pinterest thumbnail |
| [/api/v0/resource/thumbnail/link](#read-link-thumbnail) | webRequest | Read link thumbnail |
| ~~[/api/v0/rpc/resource.info](#info)~~ | jsonRpc | Info |
| [imdb:search](#search-imdb) | websocket | Search imdb |
| [imdb:info](#info-imdb) | websocket | Info imdb |
| [resource:createImdbMulti](#create-imdb-resources) | websocket | Create imdb resources |
| [link:info](#info-link) | websocket | Info link |
| [pinterest:search](#search-pinterest) | websocket | Search pinterest |
| [pinterest:info](#info-pinterest) | websocket | Info pinterest |
| [resource:createPinterest](#create-pinterest-resource) | websocket | Create pinterest resource |
| [pixabay:search](#search-pixabay) | websocket | Search pixabay |
| [sortingTable:get](#get-user-sorting-table-content) | websocket | Get user sorting table content |
| [sortingTable:deleteAllResources](#delete-all-resources-from-user-sorting-table) | websocket | Delete all resources from user sorting table |
| [sortingTable:deleteResources](#delete-resources-from-user-sorting-table) | websocket | Delete resources from user sorting table |
| [sortingTable:restoreResources](#restore-resources-to-user-sorting-table) | websocket | Restore resources to user sorting table |
| [room:deleteAllResourcesFromSortingTable](#delete-all-resources-from-room-sorting-table) | websocket | Delete all resources from room sorting table |
| [room:deleteResourcesFromSortingTable](#delete-resources-from-room-sorting-table) | websocket | Delete resources from room sorting table |
| [room:restoreResourcesToSortingTable](#restore-resources-to-room-sorting-table) | websocket | Restore resources to room sorting table |
| [resource:subscribe](#subscribe-to-resource-channel) | websocket | Subscribe to resource channel |
| [resource:unsubscribe](#unsubscribe-from-resource-channel) | websocket | Unsubscribe from resource channel |
| [resource:create](#create-resource) | websocket | Create resource |
| [resource:createRemoteUrlResource](#create-remote-url-resource) | websocket | Create remote url resource |
| [resource:remoteImageUpload](#create-remote-image-resource) | websocket | Create remote image resource |
| [resource:generateAIImage](#generate-ai-image) | websocket | Generate aI image |
| [resource:createLinkResource](#create-link-resource) | websocket | Create link resource |
| [resource:createGoogleDriveResource](#create-google-drive-resource) | websocket | Create google drive resource |
| [resource:syncGoogleDriveDirectory](#sync-google-drive-directory) | websocket | Sync google drive directory |
| [resource:delete](#delete-resource) | websocket | Delete resource |
| [resource:move](#move-resource) | websocket | Move resource |
| [resource:updateAttributes](#update-resource-attributes) | websocket | Update resource attributes |
| ~~[resource:getUrl](#get-url)~~ | websocket | Get url |
| [resource:getResourceUrl](#get-resource-url) | websocket | Get resource url |
| [resource:getThumbnailUrl](#get-thumbnail-url) | websocket | Get thumbnail url |
| [resource:get](#get-resource) | websocket | Get resource |
| ~~[resource:getResourceFromNetwork](#get-resource-from-network)~~ | websocket | Get resource from network |
| ~~[resource:listBelonging](#list-belonging-resources)~~ | websocket | List belonging resources |
| [resource:searchBelonging](#search-belonging-resources) | websocket | Search belonging resources |
| [resource:unsubscribeFromBelonging](#unsubscribe-from-belonging) | websocket | Unsubscribe from belonging |
| [resource:getPublicMusic](#get-public-music) | websocket | Get public music |
| [resource:createDirectory](#create-directory) | websocket | Create directory |
| [resource:listParentDirectories](#list-parent-directories) | websocket | List parent directories |
| [resource:getStreamSources](#get-stream-sources) | websocket | Get stream sources |
| [sortingTable:addResources](#on-resources-added-to-user-sorting-table-event) | websocketEvent | On resources added to user sorting table event |
| [sortingTable:deleteResources](#on-resources-deleted-from-user-sorting-table-event) | websocketEvent | On resources deleted from user sorting table event |
| [sortingTable:addResourcesToDirectory](#on-resources-added-to-directory-in-user-sorting-table-event) | websocketEvent | On resources added to directory in user sorting table event |
| [sortingTable:deleteResourcesFromDirectory](#on-resources-deleted-from-directory-in-user-sorting-table-event) | websocketEvent | On resources deleted from directory in user sorting table event |
| [resource:addedToUploadSession](#on-resources-added-to-upload-session-event) | websocketEvent | On resources added to upload session event |
| [resource:deletedFromUploadSession](#on-resources-deleted-from-upload-session-event) | websocketEvent | On resources deleted from upload session event |
| [sortingTable:resourceUpdated](#on-user-sorting-table-resource-updated-event) | websocketEvent | On user sorting table resource updated event |
| [resource:addedToBelonging](#on-resources-added-to-belonging-event) | websocketEvent | On resources added to belonging event |
| [resource:deletedFromBelonging](#on-resources-deleted-from-belonging-event) | websocketEvent | On resources deleted from belonging event |
| [resource:updated](#on-resource-updated-event) | websocketEvent | On resource updated event |
| [resource:updatedInUploadSession](#on-upload-session-resource-updated-event) | websocketEvent | On upload session resource updated event |
| [resource:updatedInChannel](#on-channel-resource-updated-event) | websocketEvent | On channel resource updated event |
| [resource:syncGoogleDriveDirectoryResult](#on-sync-google-drive-directory-result-event) | websocketEvent | On sync google drive directory result event |

<br>

<a name="create-resource-metadata"></a>

### Create resource metadata

**HTTP Method:** POST

**Path:** /api/v0/resource/create

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

<a name="read-resource"></a>

### Read resource

**HTTP Method:** GET

**Path:** /api/v0/resource/{id}

**Description:** Endpoint redirects to direct resource location. 

Url parameter "response-content-disposition" sets Content-Disposition header in Google bucket response (https://cloud.google.com/storage/docs/xml-api/reference-headers#responsecontentdisposition).

**Parameters:** 

response-content-disposition: string

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Resource data
</pre>

<br>

<a name="read-resource-from-certain-network-"></a>

### Read resource (from certain network)

**HTTP Method:** GET

**Path:** /api/v0/resource/network/{networkId}/{id}

**Description:** Endpoint redirects to direct resource location. 

Url parameter "response-content-disposition" sets Content-Disposition header in Google bucket response (https://cloud.google.com/storage/docs/xml-api/reference-headers#responsecontentdisposition).

**Parameters:** 

response-content-disposition: string

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Resource data
</pre>

<br>

<a name="proxy-resource"></a>

### Proxy resource

**HTTP Method:** GET

**Path:** /api/v0/resource/proxy/{id}

**Description:** Endpoint serves resource without redirection.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Resource data
</pre>

<br>

<a name="proxy-resource"></a>

### Proxy resource

**HTTP Method:** GET

**Path:** /api/v0/resource/proxy/youtube

**Parameters:** 

url: Youtube video url (must end with "googlevideo.com")

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Youtube resource data
</pre>

<br>

<a name="read-resource-thumbnail"></a>

### Read resource thumbnail

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/{size}/{id}

**Description:** Parameter {size} could be skipped (/api/v0/resource/thumbnail/{id}) in this endpoint. In case if size is not provided, default thumbnail (512) is returned.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Resource thumbnail data
</pre>

<br>

<a name="get-direct-resource-url"></a>

### Get direct resource url

**HTTP Method:** GET

**Path:** /api/v0/resource/url/{id}

**Description:** Endpoint returns Google bucket url for resources that are stored by Valuverse.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Direct url to resource
</pre>

<br>

<a name="get-direct-resource-url-from-certain-network-"></a>

### Get direct resource url (from certain network)

**HTTP Method:** GET

**Path:** /api/v0/resource/network/{networkId}/url/{id}

**Description:** Endpoint returns Google bucket url for resources that are stored by Valuverse.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Direct url to resource
</pre>

<br>

<a name="get-direct-thumbnail-url"></a>

### Get direct thumbnail url

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/url/{size}/{id}

**Description:** Endpoint returns Google bucket url for resource thumbnail. The {size} parameter is optional.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Direct url to resource
</pre>

<br>

<a name="read-user-thumbnail"></a>

### Read user thumbnail

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/user/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
User thumbnail data
</pre>

<br>

<a name="read-user-thumbnail-with-size-"></a>

### Read user thumbnail (with size)

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/user/size/{size}/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
User thumbnail data
</pre>

<br>

<a name="get-user-thumbnail-url"></a>

### Get user thumbnail url

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/user/url/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Direct url to user avatar resource
</pre>

<br>

<a name="get-user-thumbnail-url-with-size-"></a>

### Get user thumbnail url (with size)

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/user/url/size/{size}/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Direct url to user avatar resource
</pre>

<br>

<a name="read-room-thumbnail"></a>

### Read room thumbnail

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/room/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Room thumbnail data
</pre>

<br>

<a name="read-room-thumbnail-with-size-"></a>

### Read room thumbnail (with size)

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/room/size/{size}/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Room thumbnail data
</pre>

<br>

<a name="get-room-thumbnail-url"></a>

### Get room thumbnail url

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/room/url/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Direct url to room avatar resource
</pre>

<br>

<a name="get-room-thumbnail-url-with-size-"></a>

### Get room thumbnail url (with size)

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/room/url/size/{size}/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Direct url to room avatar resource
</pre>

<br>

<a name="read-network-thumbnail"></a>

### Read network thumbnail

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/network/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Network thumbnail data
</pre>

<br>

<a name="read-network-thumbnail-with-size-"></a>

### Read network thumbnail (with size)

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/network/size/{size}/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Network thumbnail data
</pre>

<br>

<a name="get-network-thumbnail-url"></a>

### Get network thumbnail url

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/network/url/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Direct url to network thumbnail resource
</pre>

<br>

<a name="get-network-thumbnail-url-with-size-"></a>

### Get network thumbnail url (with size)

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/network/url/size/{size}/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Direct url to network thumbnail resource
</pre>

<br>

<a name="read-amazon-thumbnail"></a>

### Read Amazon thumbnail

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/amazon/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Amazon thumbnail data
</pre>

<br>

<a name="read-youtube-thumbnail"></a>

### Read Youtube thumbnail

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/youtube/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Youtube thumbnail data
</pre>

<br>

<a name="read-imdb-thumbnail"></a>

### Read Imdb thumbnail

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/imdb/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Imdb thumbnail data
</pre>

<br>

<a name="read-pinterest-thumbnail"></a>

### Read Pinterest thumbnail

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/pinterest/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Pinterest thumbnail data
</pre>

<br>

<a name="read-link-thumbnail"></a>

### Read link thumbnail

**HTTP Method:** GET

**Path:** /api/v0/resource/thumbnail/link

**Parameters:** 

url: link url

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Link thumbnail data
</pre>

<br>

<a name="info"></a>

### Info

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/resource.info

**<span color="red">DEPRECATED</span>** 

**Headers:** 

X-Session-Id: sessionToken

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
        "resource": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "title": string
            "description": string
            "location": string
            "date": string
            "category": string
            "status": string
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
            "totalReactions": int
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
            "customParams": map[string]{ custom structure }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-imdb"></a>

### Search imdb

**Method:** websocket

**Endpoint:** imdb:search

**Request:** 

<pre>
{
    "data": {
        "s": string
        "y": string
        "type": string
        "plot": string
        "page": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "Search": [{
            "Title": string
            "Year": string
            "imdbID": string
            "Type": string
            "Poster": string
            "Plot": string
        }]
        "totalResults": string
        "Response": string
        "Error": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="info-imdb"></a>

### Info imdb

**Method:** websocket

**Endpoint:** imdb:info

**Request:** 

<pre>
{
    "data": {
        "i": string
        "t": string
        "y": string
        "type": string
        "plot": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "Actors": string
        "Awards": string
        "BoxOffice": string
        "Country": string
        "DVD": string
        "Director": string
        "Genre": string
        "Language": string
        "Metascore": string
        "Plot": string
        "Poster": string
        "Production": string
        "Rated": string
        "Ratings": [{
            "Source": string
            "Value": string
        }]
        "Released": string
        "Runtime": string
        "Title": string
        "Trailers": [ string ]
        "Type": string
        "Website": string
        "Writer": string
        "Year": string
        "imdbID": string
        "imdbRating": string
        "imdbVotes": string
        "Response": string
        "Error": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-imdb-resources"></a>

### Create imdb resources

**Method:** websocket

**Endpoint:** resource:createImdbMulti

**Request:** 

<pre>
{
    "data": {
        "id": [ string ]
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

<a name="info-link"></a>

### Info link

**Method:** websocket

**Endpoint:** link:info

**Description:** API returns web page information of url provided in request.

**Request:** 

<pre>
{
    "data": {
        "url": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "url": string
        "title": string
        "description": string
        "isImage": bool
        "thumbnail": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-pinterest"></a>

### Search pinterest

**Method:** websocket

**Endpoint:** pinterest:search

**Request:** 

<pre>
{
    "data": {
        "keywords": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "results": [{
            "id": string
            "type": string
            "title": string
            "link": string
            "description": string
            "images": {
                "736x": {
                    "url": string
                    "width": int
                    "height": int
                }
                "474x": {
                    "url": string
                    "width": int
                    "height": int
                }
                "236x": {
                    "url": string
                    "width": int
                    "height": int
                }
                "orig": {
                    "url": string
                    "width": int
                    "height": int
                }
            }
            "rich_summary": {
                "display_name": string
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="info-pinterest"></a>

### Info pinterest

**Method:** websocket

**Endpoint:** pinterest:info

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
        "result": {
            "id": string
            "type": string
            "title": string
            "link": string
            "description": string
            "images": {
                "736x": {
                    "url": string
                    "width": int
                    "height": int
                }
                "474x": {
                    "url": string
                    "width": int
                    "height": int
                }
                "236x": {
                    "url": string
                    "width": int
                    "height": int
                }
                "orig": {
                    "url": string
                    "width": int
                    "height": int
                }
            }
            "rich_summary": {
                "display_name": string
            }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-pinterest-resource"></a>

### Create pinterest resource

**Method:** websocket

**Endpoint:** resource:createPinterest

**Request:** 

<pre>
{
    "data": {
        "pin": string
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

<a name="search-pixabay"></a>

### Search pixabay

**Method:** websocket

**Endpoint:** pixabay:search

**Request:** 

<pre>
{
    "data": {
        "q": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "total": int
        "totalHits": int
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

<a name="get-user-sorting-table-content"></a>

### Get user sorting table content

**Method:** websocket

**Endpoint:** sortingTable:get

**Description:** API returns list of resources that user uploaded to system, but not yet assigned to prop.

**Request:** 

<pre>
{
    "data": {
        "offset": int
        "size": int
        "subscribe": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "content": [{ <a href="#resource">resource structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-all-resources-from-user-sorting-table"></a>

### Delete all resources from user sorting table

**Method:** websocket

**Endpoint:** sortingTable:deleteAllResources

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-resources-from-user-sorting-table"></a>

### Delete resources from user sorting table

**Method:** websocket

**Endpoint:** sortingTable:deleteResources

**Request:** 

<pre>
{
    "data": {
        "resources": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resources": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="restore-resources-to-user-sorting-table"></a>

### Restore resources to user sorting table

**Method:** websocket

**Endpoint:** sortingTable:restoreResources

**Request:** 

<pre>
{
    "data": {
        "resources": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resources": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-all-resources-from-room-sorting-table"></a>

### Delete all resources from room sorting table

**Method:** websocket

**Endpoint:** room:deleteAllResourcesFromSortingTable

**Request:** 

<pre>
{
    "data": {
        "roomId": string
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

<a name="delete-resources-from-room-sorting-table"></a>

### Delete resources from room sorting table

**Method:** websocket

**Endpoint:** room:deleteResourcesFromSortingTable

**Request:** 

<pre>
{
    "data": {
        "room": string
        "resources": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "room": string
        "resources": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="restore-resources-to-room-sorting-table"></a>

### Restore resources to room sorting table

**Method:** websocket

**Endpoint:** room:restoreResourcesToSortingTable

**Request:** 

<pre>
{
    "data": {
        "room": string
        "resources": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "room": string
        "resources": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="subscribe-to-resource-channel"></a>

### Subscribe to resource channel

**Method:** websocket

**Endpoint:** resource:subscribe

**Description:** Subscribe to resource event channel

**Request:** 

<pre>
{
    "data": {
        "resource": string
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

<a name="unsubscribe-from-resource-channel"></a>

### Unsubscribe from resource channel

**Method:** websocket

**Endpoint:** resource:unsubscribe

**Description:** Unsubscribe from resource event channel

**Request:** 

<pre>
{
    "data": {
        "resource": string
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

<a name="create-resource"></a>

### Create resource

**Method:** websocket

**Endpoint:** resource:create

**Description:** API creates resource model. 

For Facebook resources, use resource:remoteImageUpload instead. 

Belonging determines resource location in the system in a way `belongingType:belongingPath(networkId)`. Part with `(networkId)` is optional.

**Available `belonging` field values:**

* `userSortingTable:{userId}` - add resource to user sorting table;
* `roomSortingTable:{roomId}` - add resource to room sorting table;
* `userAIGeneration:{userId}` - add resource to the list of AI generated resources by user;
* `uploadSession:{userId}/{uploadSessionId}` - upload resource before assigning to final belonging;
* `directory:{parentResourceId}` - add resource to a directory.



**Request:** 

<pre>
{
    "data": {
        "resource": { <a href="#resource">resource structure</a> }
        "networkId": string
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

<a name="create-remote-url-resource"></a>

### Create remote url resource

**Method:** websocket

**Endpoint:** resource:createRemoteUrlResource

**Description:** Endpoint creates resource from remote url.

Resource field ```metadata.link``` will keep original url.

Resource field ```metadata.contentType``` will be one of: ```roomful#url```, ```remote#image```, ```remote#audio``` or ```remote#video```.

**Request:** 

<pre>
{
    "data": {
        "url": string
        "urlType": string <span color="#1b1ef7"> // Hls/Dash</span>
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

<a name="create-remote-image-resource"></a>

### Create remote image resource

**Method:** websocket

**Endpoint:** resource:remoteImageUpload

**Request:** 

<pre>
{
    "data": {
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

<a name="generate-ai-image"></a>

### Generate aI image

**Method:** websocket

**Endpoint:** resource:generateAIImage

**Description:** API creates image resource that will be generated using AI.

**Request:** 

<pre>
{
    "data": {
        "generationModel": string <span color="#1b1ef7"> // the model used for image generation [dall-e-3]</span>
        "prompt": string <span color="#1b1ef7"> // a text description of the desired image</span>
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

<a name="create-link-resource"></a>

### Create link resource

**Method:** websocket

**Endpoint:** resource:createLinkResource

**Description:** API creates resource that is a copy of an existing resource. No need to upload resource data again, as API will create a link.

**Request:** 

<pre>
{
    "data": {
        "resource": string
        "networkId": string
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

<a name="create-google-drive-resource"></a>

### Create google drive resource

**Method:** websocket

**Endpoint:** resource:createGoogleDriveResource

**Request:** 

<pre>
{
    "data": {
        "fileId": string
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

<a name="sync-google-drive-directory"></a>

### Sync google drive directory

**Method:** websocket

**Endpoint:** resource:syncGoogleDriveDirectory

**Description:** Recursively synchronizes the content in the provided google drive resource directory.

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-resource"></a>

### Delete resource

**Method:** websocket

**Endpoint:** resource:delete

**Description:** API moves resource to trashcan belonging.

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="move-resource"></a>

### Move resource

**Method:** websocket

**Endpoint:** resource:move

**Description:** API moves resource to a new belonging.

**Request:** 

<pre>
{
    "data": {
        "resourceId": string
        "networkId": string
        "belonging": string
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

<a name="update-resource-attributes"></a>

### Update resource attributes

**Method:** websocket

**Endpoint:** resource:updateAttributes

**Request:** 

<pre>
{
    "data": {
        "resource": string
        "attributes": {
            "title": string
            "description": string
            "location": string
            "date": string
            "category": string
        }
        "params": map[string]{ custom structure }
        "actions": [{ <a href="#programmatic-action-with-children">programmatic action with children structure</a> }]
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

<a name="get-url"></a>

### Get url

**Method:** websocket

**Endpoint:** resource:getUrl

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "resource": string
    }
    "event": { "id": string, "date": timestamp }
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

<a name="get-resource-url"></a>

### Get resource url

**Method:** websocket

**Endpoint:** resource:getResourceUrl

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
        "url": string
        "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
        "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
        "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-thumbnail-url"></a>

### Get thumbnail url

**Method:** websocket

**Endpoint:** resource:getThumbnailUrl

**Request:** 

<pre>
{
    "data": {
        "resourceId": string
        "thumbnailSize": int
    }
    "event": { "id": string, "date": timestamp }
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

<a name="get-resource"></a>

### Get resource

**Method:** websocket

**Endpoint:** resource:get

**Description:** API returns resource metadata. It doesn't return resource content (e.g. comments or reactions). If resource is not found in current network, API looks for it in default network.

**Request:** 

<pre>
{
    "data": {
        "resource": string
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

<a name="get-resource-from-network"></a>

### Get resource from network

**Method:** websocket

**Endpoint:** resource:getResourceFromNetwork

**<span color="red">DEPRECATED</span>** 

**Description:** API is deprecated as all resources are stored in a default network now. Use [resource:get](#get-resource) instead.

**Request:** 

<pre>
{
    "data": {
        "resourceId": string
        "networkId": string
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

<a name="list-belonging-resources"></a>

### List belonging resources

**Method:** websocket

**Endpoint:** resource:listBelonging

**<span color="red">DEPRECATED</span>** 

**Description:** API is deprecated, use [resource:searchBelonging](#search-belonging-resources) instead.

**Request:** 

<pre>
{
    "data": {
        "belonging": string
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
        "resources": [{ <a href="#resource">resource structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-belonging-resources"></a>

### Search belonging resources

**Method:** websocket

**Endpoint:** resource:searchBelonging

**Description:** API searches resources that belong to exact place.

API subscribes user socket to belonging broadcast channel (only directory and community for now).

Examples:
* `userAIGeneration:{userId}`    - resources added to list of AI generated resources by user;
* `userSortingTable:{userId}`    - user sorting table resource;
* `roomSortingTable:{roomId}`    - room sorting table resources;
* `room:{roomId}`                - resources in a room;
* `room:{roomId}/{propId}`       - resources in a room prop;
* `roomProps:{roomId}`           - all resources in all room props;
* `community:{communityId}`      - community resources;
* `directory:{parentResourceId}` - directory resources.



**Request:** 

<pre>
{
    "data": {
        "belonging": string
        "query": string
        "cursor": string
        "limit": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "resources": [{ <a href="#resource">resource structure</a> }]
        "nextCursor": string
        "hasMore": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="unsubscribe-from-belonging"></a>

### Unsubscribe from belonging

**Method:** websocket

**Endpoint:** resource:unsubscribeFromBelonging

**Description:** API unsubscribes user socket from belonging broadcast channel.

**Request:** 

<pre>
{
    "data": {
        "belonging": string
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

<a name="get-public-music"></a>

### Get public music

**Method:** websocket

**Endpoint:** resource:getPublicMusic

**Description:** API returns publicly uploaded music from default network

**Request:** 

<pre>
{ empty }
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

<a name="create-directory"></a>

### Create directory

**Method:** websocket

**Endpoint:** resource:createDirectory

**Description:** See [resource:create](#create-resource) for more info on available belongings.

**Request:** 

<pre>
{
    "data": {
        "title": string
        "belonging": string
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

<a name="list-parent-directories"></a>

### List parent directories

**Method:** websocket

**Endpoint:** resource:listParentDirectories

**Description:** API returns parent directories for resource, from top to bottom.

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
        "resources": [{ <a href="#resource">resource structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-stream-sources"></a>

### Get stream sources

**Method:** websocket

**Endpoint:** resource:getStreamSources

**Request:** 

<pre>
{
    "data": {
        "url": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "streams": map[string]{ <span color="#1b1ef7"> // map of streamQuality:streamInfo</span>
            "type": string
            "url": string
        }
        "plugin": string <span color="#1b1ef7"> // https://streamlink.github.io/plugin_matrix.html</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-added-to-user-sorting-table-event"></a>

### On resources added to user sorting table event

**Event:** sortingTable:addResources

**Data:** 

<pre>
{
    "data": {
        "resources": [{ <a href="#resource">resource structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-deleted-from-user-sorting-table-event"></a>

### On resources deleted from user sorting table event

**Event:** sortingTable:deleteResources

**Data:** 

<pre>
{
    "data": {
        "resources": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-added-to-directory-in-user-sorting-table-event"></a>

### On resources added to directory in user sorting table event

**Event:** sortingTable:addResourcesToDirectory

**Data:** 

<pre>
{
    "data": {
        "directoryId": string
        "resources": [{ <a href="#resource">resource structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-deleted-from-directory-in-user-sorting-table-event"></a>

### On resources deleted from directory in user sorting table event

**Event:** sortingTable:deleteResourcesFromDirectory

**Data:** 

<pre>
{
    "data": {
        "directoryId": string
        "resourceIds": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-added-to-upload-session-event"></a>

### On resources added to upload session event

**Event:** resource:addedToUploadSession

**Data:** 

<pre>
{
    "data": {
        "resources": [{ <a href="#resource">resource structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-deleted-from-upload-session-event"></a>

### On resources deleted from upload session event

**Event:** resource:deletedFromUploadSession

**Data:** 

<pre>
{
    "data": {
        "resources": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-user-sorting-table-resource-updated-event"></a>

### On user sorting table resource updated event

**Event:** sortingTable:resourceUpdated

**Data:** 

<pre>
{
    "data": {
        "resource": { <a href="#resource">resource structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-added-to-belonging-event"></a>

### On resources added to belonging event

**Event:** resource:addedToBelonging

**Data:** 

<pre>
{
    "data": {
        "belonging": string
        "resources": [{ <a href="#resource">resource structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resources-deleted-from-belonging-event"></a>

### On resources deleted from belonging event

**Event:** resource:deletedFromBelonging

**Data:** 

<pre>
{
    "data": {
        "belonging": string
        "resourceIds": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-resource-updated-event"></a>

### On resource updated event

**Event:** resource:updated

**Data:** 

<pre>
{
    "data": {
        "belonging": string
        "resource": { <a href="#resource">resource structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-upload-session-resource-updated-event"></a>

### On upload session resource updated event

**Event:** resource:updatedInUploadSession

**Data:** 

<pre>
{
    "data": {
        "resource": { <a href="#resource">resource structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-channel-resource-updated-event"></a>

### On channel resource updated event

**Event:** resource:updatedInChannel

**Data:** 

<pre>
{
    "data": {
        "resource": { <a href="#resource">resource structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-sync-google-drive-directory-result-event"></a>

### On sync google drive directory result event

**Event:** resource:syncGoogleDriveDirectoryResult

**Data:** 

<pre>
{
    "data": {
        "resourceId": string
        "isSuccess": bool
        "errorCode": int
        "errorString": string
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

