<br>

<a name="asset-variant-api"></a>

## Asset: Variant API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/asset/createVariant](#create-asset-variant) | webRequest | Create asset variant |
| [/api/v0/asset/updateVariant](#update-asset-variant) | webRequest | Update asset variant |
| [/api/v0/asset/listVariants](#list-asset-variants) | webRequest | List asset variants |
| [/api/v0/asset/deleteVariant](#delete-asset-variant) | webRequest | Delete asset variant |
| [/api/v0/asset/createSkin](#create-asset-skin) | webRequest | Create asset skin |
| [/api/v0/asset/updateSkin](#update-asset-skin) | webRequest | Update asset skin |
| [/api/v0/asset/listSkins](#list-asset-skins) | webRequest | List asset skins |
| [/api/v0/asset/deleteSkin](#delete-asset-skin) | webRequest | Delete asset skin |
| [/api/v0/asset/skin/upload/link](#direct-asset-skin-upload-to-google-bucket-get-upload-link-) | webRequest | Direct asset skin upload to Google bucket (get upload link) |
| [/api/v0/asset/skin/upload/link/complete](#direct-asset-skin-upload-to-google-bucket-complete-upload-link-) | webRequest | Direct asset skin upload to Google bucket (complete upload link) |
| [/api/v0/asset/{assetId}/skin/{skinId}/platform/{platform}](#get-asset-skin-resource-data-for-platform) | webRequest | Get asset skin resource data for platform |
| [/api/v0/asset/{assetId}/skin/{skinId}/platform/{platform}/patch/{patchVersion}](#get-asset-skin-resource-data-for-platform-per-patch-version) | webRequest | Get asset skin resource data for platform per patch version |
| [/api/v0/asset/{assetId}/skin/url/{skinId}/platform/{platform}](#get-asset-skin-resource-url-for-platform) | webRequest | Get asset skin resource url for platform |
| [/api/v0/asset/{assetId}/skin/url/{skinId}/platform/{platform}/patch/{patchVersion}](#get-asset-skin-resource-url-for-platform-per-patch-version) | webRequest | Get asset skin resource url for platform per patch version |
| [/api/v0/asset/upload/variant/thumbnail/link](#direct-asset-variant-thumbnail-upload-to-google-bucket-get-upload-link-) | webRequest | Direct asset variant thumbnail upload to Google bucket (get upload link) |
| [/api/v0/asset/upload/variant/thumbnail/link/complete](#direct-asset-variant-thumbnail-upload-to-google-bucket-complete-upload-link-) | webRequest | Direct asset variant thumbnail upload to Google bucket (complete upload link) |
| [/api/v0/asset/upload/skin/thumbnail/link](#direct-asset-skin-thumbnail-upload-to-google-bucket-get-upload-link-) | webRequest | Direct asset skin thumbnail upload to Google bucket (get upload link) |
| [/api/v0/asset/upload/skin/thumbnail/link/complete](#direct-asset-skin-thumbnail-upload-to-google-bucket-complete-upload-link-) | webRequest | Direct asset skin thumbnail upload to Google bucket (complete upload link) |
| [/api/v0/asset/skin/setOriginal](#set-asset-skin-original-resource) | webRequest | Set asset skin original resource |
| [/api/v0/asset/skin/original/{assetId}/{skinId}](#get-asset-skin-original-data) | webRequest | Get asset skin original data |
| [/api/v0/asset/skin/original/url/{assetId}/{skinId}](#get-asset-skin-original-url) | webRequest | Get asset skin original url |
| [asset:listVariants](#list-asset-variants-runtime-) | websocket | List asset variants (runtime) |
| [asset:listSkins](#list-asset-skins-runtime-) | websocket | List asset skins (runtime) |
| [asset:listAssetVariantsAndSkins](#list-asset-variants-and-skins-runtime-) | websocket | List asset variants and skins (runtime) |

<br>

<a name="create-asset-variant"></a>

### Create asset variant

**HTTP Method:** POST

**Path:** /api/v0/asset/createVariant

**Request:** 

<pre>
{
    "assetId": string
    "variant": {
        "name": string
        "defaultColor": { <a href="#rgba">rgba structure</a> }
        "hasColorSupport": bool
        "gameobjects": [ string ]
        "sortOrder": int
        "isHidden": bool <span color="#1b1ef7"> // hides variant from client</span>
    }
}
</pre>

**Response:** 

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "name": string
    "defaultColor": { <a href="#rgba">rgba structure</a> }
    "hasColorSupport": bool
    "gameobjects": [ string ]
    "sortOrder": int
    "isHidden": bool <span color="#1b1ef7"> // hides variant from client</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
}
</pre>

<br>

<a name="update-asset-variant"></a>

### Update asset variant

**HTTP Method:** POST

**Path:** /api/v0/asset/updateVariant

**Request:** 

<pre>
{
    "assetId": string
    "variant": {
        "id": string
        "name": string
        "defaultColor": { <a href="#rgba">rgba structure</a> }
        "hasColorSupport": bool
        "gameobjects": [ string ]
        "sortOrder": int
        "isHidden": bool <span color="#1b1ef7"> // hides variant from client</span>
    }
}
</pre>

**Response:** 

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "name": string
    "defaultColor": { <a href="#rgba">rgba structure</a> }
    "hasColorSupport": bool
    "gameobjects": [ string ]
    "sortOrder": int
    "isHidden": bool <span color="#1b1ef7"> // hides variant from client</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
}
</pre>

<br>

<a name="list-asset-variants"></a>

### List asset variants

**HTTP Method:** POST

**Path:** /api/v0/asset/listVariants

**Request:** 

<pre>
{
    "assetId": string
}
</pre>

**Response:** 

<pre>
[{
    "id": string
    "created": timestamp
    "updated": timestamp
    "name": string
    "defaultColor": { <a href="#rgba">rgba structure</a> }
    "hasColorSupport": bool
    "gameobjects": [ string ]
    "sortOrder": int
    "isHidden": bool <span color="#1b1ef7"> // hides variant from client</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
}]
</pre>

<br>

<a name="delete-asset-variant"></a>

### Delete asset variant

**HTTP Method:** POST

**Path:** /api/v0/asset/deleteVariant

**Request:** 

<pre>
{
    "assetId": string
    "variantId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="create-asset-skin"></a>

### Create asset skin

**HTTP Method:** POST

**Path:** /api/v0/asset/createSkin

**Request:** 

<pre>
{
    "assetId": string
    "skin": {
        "variantId": string
        "name": string
        "isDefault": bool <span color="#1b1ef7"> // is default among other variant skins</span>
        "overrideColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // override default color</span>
        "colorOnly": bool <span color="#1b1ef7"> // doesn't have textures, only color'</span>
        "simplifiedSkin": bool <span color="#1b1ef7"> // applying the skins does not require prop hierarchy rebuild</span>
        "sortOrder": int
        "isHidden": bool <span color="#1b1ef7"> // hides skin from client</span>
    }
}
</pre>

**Response:** 

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "assetId": string
    "variantId": string
    "name": string
    "isDefault": bool <span color="#1b1ef7"> // is default among other variant skins</span>
    "overrideColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // override default color</span>
    "colorOnly": bool <span color="#1b1ef7"> // doesn't have textures, only color'</span>
    "simplifiedSkin": bool <span color="#1b1ef7"> // applying the skins does not require prop hierarchy rebuild</span>
    "sortOrder": int
    "isHidden": bool <span color="#1b1ef7"> // hides skin from client</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "urls": map[string]string <span color="#1b1ef7"> // asset skin data urls per platform</span>
    "defaultColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // applied by parent variant model</span>
}
</pre>

<br>

<a name="update-asset-skin"></a>

### Update asset skin

**HTTP Method:** POST

**Path:** /api/v0/asset/updateSkin

**Request:** 

<pre>
{
    "assetId": string
    "skin": {
        "id": string
        "variantId": string
        "name": string
        "isDefault": bool <span color="#1b1ef7"> // is default among other variant skins</span>
        "overrideColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // override default color</span>
        "colorOnly": bool <span color="#1b1ef7"> // doesn't have textures, only color'</span>
        "simplifiedSkin": bool <span color="#1b1ef7"> // applying the skins does not require prop hierarchy rebuild</span>
        "sortOrder": int
        "isHidden": bool <span color="#1b1ef7"> // hides skin from client</span>
    }
}
</pre>

**Response:** 

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "assetId": string
    "variantId": string
    "name": string
    "isDefault": bool <span color="#1b1ef7"> // is default among other variant skins</span>
    "overrideColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // override default color</span>
    "colorOnly": bool <span color="#1b1ef7"> // doesn't have textures, only color'</span>
    "simplifiedSkin": bool <span color="#1b1ef7"> // applying the skins does not require prop hierarchy rebuild</span>
    "sortOrder": int
    "isHidden": bool <span color="#1b1ef7"> // hides skin from client</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "urls": map[string]string <span color="#1b1ef7"> // asset skin data urls per platform</span>
    "defaultColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // applied by parent variant model</span>
}
</pre>

<br>

<a name="list-asset-skins"></a>

### List asset skins

**HTTP Method:** POST

**Path:** /api/v0/asset/listSkins

**Request:** 

<pre>
{
    "assetId": string
    "variantId": string
}
</pre>

**Response:** 

<pre>
[{
    "id": string
    "created": timestamp
    "updated": timestamp
    "assetId": string
    "variantId": string
    "name": string
    "isDefault": bool <span color="#1b1ef7"> // is default among other variant skins</span>
    "overrideColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // override default color</span>
    "colorOnly": bool <span color="#1b1ef7"> // doesn't have textures, only color'</span>
    "simplifiedSkin": bool <span color="#1b1ef7"> // applying the skins does not require prop hierarchy rebuild</span>
    "sortOrder": int
    "isHidden": bool <span color="#1b1ef7"> // hides skin from client</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "urls": map[string]string <span color="#1b1ef7"> // asset skin data urls per platform</span>
    "defaultColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // applied by parent variant model</span>
}]
</pre>

<br>

<a name="delete-asset-skin"></a>

### Delete asset skin

**HTTP Method:** POST

**Path:** /api/v0/asset/deleteSkin

**Request:** 

<pre>
{
    "assetId": string
    "skinId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="direct-asset-skin-upload-to-google-bucket-get-upload-link-"></a>

### Direct asset skin upload to Google bucket (get upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/skin/upload/link

**Description:** Direct upload gives possibility to upload files directly from a client to a storage bucket. It consist of next steps: 

1) Client asks the server for upload link. The server initializes an upload session and returns a link which could be used for upload. 

2) Client [uploads a file to Google bucket](https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload#upload-resumable). 

3) Client [sends upload complete acknowledgment to the server](#direct-asset-skin-upload-to-google-bucket-complete-upload-link). 



**Request:** 

<pre>
{
    "assetId": string
    "skinId": string
    "platform": string
    "fileName": string
    "contentType": string
}
</pre>

**Response:** 

<pre>
Google bucket upload link
</pre>

<br>

<a name="direct-asset-skin-upload-to-google-bucket-complete-upload-link-"></a>

### Direct asset skin upload to Google bucket (complete upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/skin/upload/link/complete

**Description:** See [direct upload to Google bucket](#direct-asset-skin-upload-to-google-bucket-get-upload-link).

**Request:** 

<pre>
{
    "assetId": string
    "skinId": string
    "platform": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-skin-resource-data-for-platform"></a>

### Get asset skin resource data for platform

**HTTP Method:** GET

**Path:** /api/v0/asset/{assetId}/skin/{skinId}/platform/{platform}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Resource data
</pre>

<br>

<a name="get-asset-skin-resource-data-for-platform-per-patch-version"></a>

### Get asset skin resource data for platform per patch version

**HTTP Method:** GET

**Path:** /api/v0/asset/{assetId}/skin/{skinId}/platform/{platform}/patch/{patchVersion}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Resource data
</pre>

<br>

<a name="get-asset-skin-resource-url-for-platform"></a>

### Get asset skin resource url for platform

**HTTP Method:** GET

**Path:** /api/v0/asset/{assetId}/skin/url/{skinId}/platform/{platform}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Resource data
</pre>

<br>

<a name="get-asset-skin-resource-url-for-platform-per-patch-version"></a>

### Get asset skin resource url for platform per patch version

**HTTP Method:** GET

**Path:** /api/v0/asset/{assetId}/skin/url/{skinId}/platform/{platform}/patch/{patchVersion}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Resource data
</pre>

<br>

<a name="direct-asset-variant-thumbnail-upload-to-google-bucket-get-upload-link-"></a>

### Direct asset variant thumbnail upload to Google bucket (get upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/upload/variant/thumbnail/link

**Request:** 

<pre>
{
    "assetId": string
    "variantId": string
    "fileName": string
    "contentType": string
}
</pre>

**Response:** 

<pre>
Google bucket upload link
</pre>

<br>

<a name="direct-asset-variant-thumbnail-upload-to-google-bucket-complete-upload-link-"></a>

### Direct asset variant thumbnail upload to Google bucket (complete upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/upload/variant/thumbnail/link/complete

**Request:** 

<pre>
{
    "assetId": string
    "variantId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="direct-asset-skin-thumbnail-upload-to-google-bucket-get-upload-link-"></a>

### Direct asset skin thumbnail upload to Google bucket (get upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/upload/skin/thumbnail/link

**Request:** 

<pre>
{
    "assetId": string
    "skinId": string
    "fileName": string
    "contentType": string
}
</pre>

**Response:** 

<pre>
Google bucket upload link
</pre>

<br>

<a name="direct-asset-skin-thumbnail-upload-to-google-bucket-complete-upload-link-"></a>

### Direct asset skin thumbnail upload to Google bucket (complete upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/upload/skin/thumbnail/link/complete

**Request:** 

<pre>
{
    "assetId": string
    "skinId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="set-asset-skin-original-resource"></a>

### Set asset skin original resource

**HTTP Method:** POST

**Path:** /api/v0/asset/skin/setOriginal

**Description:** API sets resource of original textures for asset skin.

**Request:** 

<pre>
{
    "assetId": string
    "skinId": string
    "resourceId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-skin-original-data"></a>

### Get asset skin original data

**HTTP Method:** GET

**Path:** /api/v0/asset/skin/original/{assetId}/{skinId}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-skin-original-url"></a>

### Get asset skin original url

**HTTP Method:** GET

**Path:** /api/v0/asset/skin/original/url/{assetId}/{skinId}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="list-asset-variants-runtime-"></a>

### List asset variants (runtime)

**Method:** websocket

**Endpoint:** asset:listVariants

**Request:** 

<pre>
{
    "data": {
        "assetId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "variants": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "name": string
            "defaultColor": { <a href="#rgba">rgba structure</a> }
            "hasColorSupport": bool
            "gameobjects": [ string ]
            "sortOrder": int
            "isHidden": bool <span color="#1b1ef7"> // hides variant from client</span>
            "thumbnail": { <a href="#resource">resource structure</a> }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-asset-skins-runtime-"></a>

### List asset skins (runtime)

**Method:** websocket

**Endpoint:** asset:listSkins

**Request:** 

<pre>
{
    "data": {
        "assetId": string
        "variantId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "skins": [{ <a href="#asset-bundle-skin">asset bundle skin structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-asset-variants-and-skins-runtime-"></a>

### List asset variants and skins (runtime)

**Method:** websocket

**Endpoint:** asset:listAssetVariantsAndSkins

**Request:** 

<pre>
{
    "data": {
        "assetId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "variants": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "name": string
            "defaultColor": { <a href="#rgba">rgba structure</a> }
            "hasColorSupport": bool
            "gameobjects": [ string ]
            "sortOrder": int
            "isHidden": bool <span color="#1b1ef7"> // hides variant from client</span>
            "thumbnail": { <a href="#resource">resource structure</a> }
        }]
        "skins": [{ <a href="#asset-bundle-skin">asset bundle skin structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="rgba"></a>

#### RGBA

<pre>
{
    "r": float
    "g": float
    "b": float
    "a": float
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

<a name="asset-bundle-skin"></a>

#### Asset Bundle Skin

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "assetId": string
    "variantId": string
    "name": string
    "isDefault": bool <span color="#1b1ef7"> // is default among other variant skins</span>
    "overrideColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // override default color</span>
    "colorOnly": bool <span color="#1b1ef7"> // doesn't have textures, only color'</span>
    "simplifiedSkin": bool <span color="#1b1ef7"> // applying the skins does not require prop hierarchy rebuild</span>
    "sortOrder": int
    "isHidden": bool <span color="#1b1ef7"> // hides skin from client</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "urls": map[string]string <span color="#1b1ef7"> // asset skin data urls per platform</span>
    "defaultColor": { <a href="#rgba">rgba structure</a> } <span color="#1b1ef7"> // applied by parent variant model</span>
}
</pre>

