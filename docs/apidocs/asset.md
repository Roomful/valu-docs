<br>

<a name="asset-bundle-api"></a>

## Asset bundle API



Asset API works with different versions of asset bundles. It recognises version from "assetVersion" parameter or "X-Asset-Version" header. 

Currently API works with next asset versions: 

1.0 - used by old client versions, deprecated 

2.0 - used by client version 1.1.5+ and publisher version 2.0.0+ 

3.0 - reserved for Unity 2017.3 

4.0 - reserved for Unity 2018.3 and higher 

5.0 - version with skin support 

6.0 - version with URP support 

Commands that fetch assets also recognise "compatibleAssetVersions" parameter or "X-Compatible-Asset-Versions" header to fetch compatible asset version in case if main "assetVersion" not found.

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/asset/listManagedNetworks](#list-asset-managed-networks) | webRequest | List asset managed networks |
| [/api/v0/asset/prop/create](#create-prop-asset) | webRequest | Create prop asset |
| [/api/v0/asset/style/create](#create-style-asset) | webRequest | Create style asset |
| [/api/v0/asset/environment/create](#create-environment-asset) | webRequest | Create environment asset |
| [/api/v0/asset/prop/update](#update-prop-asset) | webRequest | Update prop asset |
| [/api/v0/asset/style/update](#update-style-asset) | webRequest | Update style asset |
| [/api/v0/asset/environment/update](#update-environment-asset) | webRequest | Update environment asset |
| [/api/v0/asset/updateStatus](#update-asset-status) | webRequest | Update asset status |
| [/api/v0/asset/updateOwnership](#update-asset-ownership) | webRequest | Update asset ownership |
| [/api/v0/asset/prop/list](#list-prop-assets) | webRequest | List prop assets |
| [/api/v0/asset/style/list](#list-style-assets) | webRequest | List style assets |
| [/api/v0/asset/environment/list](#list-environment-assets) | webRequest | List environment assets |
| [/api/v0/asset/prop/listOwn](#list-user-own-prop-assets) | webRequest | List user own prop assets |
| [/api/v0/asset/style/listOwn](#list-user-own-style-assets) | webRequest | List user own style assets |
| [/api/v0/asset/environment/listOwn](#list-user-own-environment-assets) | webRequest | List user own environment assets |
| [/api/v0/asset/listPatchVersions](#list-patch-versions-for-asset-resources-and-their-creation-date-) | webRequest | List patch versions for asset resources and their creation date. |
| [/api/v0/asset/restorePatchVersion](#restore-asset-resources-from-the-patch-) | webRequest | Restore asset resources from the patch. |
| [/api/v0/asset/setOriginal](#set-asset-original-resource) | webRequest | Set asset original resource |
| [/api/v0/asset/remove](#remove-asset) | webRequest | Remove asset |
| [/api/v0/asset/metadata/{id}](#get-prop-asset-metadata) | webRequest | Get prop asset metadata |
| [/api/v0/asset/{assetId}/platform/{platform}](#get-asset-resource-data) | webRequest | Get asset resource data |
| [/{assetId}/platform/{platform}/patch/{patchVersion}](#get-asset-resource-data-per-patch-version) | webRequest | Get asset resource data per patch version |
| [/api/v0/asset/{assetId}](#get-asset-resource-data-for-default-platform) | webRequest | Get asset resource data for default platform |
| [/api/v0/asset/thumbnail/{id}](#get-asset-thumbnail-data) | webRequest | Get asset thumbnail data |
| [/api/v0/asset/original/{id}](#get-asset-original-data) | webRequest | Get asset original data |
| [/api/v0/asset/url/{assetId}/platform/{platform}](#get-asset-resource-url) | webRequest | Get asset resource url |
| [/api/v0/asset/url/{assetId}/platform/{platform}/patch/{patchVersion}](#get-asset-resource-url-per-patch-version) | webRequest | Get asset resource url per patch version |
| [/api/v0/asset/url/{assetId}](#get-asset-resource-url-for-default-platform) | webRequest | Get asset resource url for default platform |
| [/api/v0/asset/thumbnail/url/{id}](#get-asset-thumbnail-url) | webRequest | Get asset thumbnail url |
| [/api/v0/asset/original/url/{id}](#get-asset-original-url) | webRequest | Get asset original url |
| [/api/v0/asset/listSkinPatchVersions](#list-patch-versions-for-asset-resources-and-their-creation-date-) | webRequest | List patch versions for asset resources and their creation date. |
| [/api/v0/asset/restoreSkinPatchVersion](#restore-asset-resources-from-the-patch-) | webRequest | Restore asset resources from the patch. |
| [/api/v0/asset/upload/link](#direct-asset-upload-to-google-bucket-get-upload-link-) | webRequest | Direct asset upload to Google bucket (get upload link) |
| [/api/v0/asset/upload/link/complete](#direct-asset-upload-to-google-bucket-complete-upload-link-) | webRequest | Direct asset upload to Google bucket (complete upload link) |
| [/api/v0/asset/upload/thumbnail/link](#direct-asset-thumbnail-upload-to-google-bucket-get-upload-link-) | webRequest | Direct asset thumbnail upload to Google bucket (get upload link) |
| [/api/v0/asset/upload/thumbnail/link/complete](#direct-asset-thumbnail-upload-to-google-bucket-complete-upload-link-) | webRequest | Direct asset thumbnail upload to Google bucket (complete upload link) |
| [asset:updateAssetParams](#update-asset-params) | websocket | Update asset params |
| [asset:getPropAsset](#get-prop-asset) | websocket | Get prop asset |
| [asset:getStyleAsset](#get-style-asset) | websocket | Get style asset |
| [asset:getEnvironmentAsset](#get-environment-asset) | websocket | Get environment asset |
| [asset:searchProp](#search-prop-assets) | websocket | Search prop assets |
| [asset:searchStyle](#search-style-assets) | websocket | Search style assets |
| [asset:searchEnvironment](#search-environment-assets) | websocket | Search environment assets |
| [asset:listProps](#list-prop-assets-websocket-) | websocket | List prop assets (websocket) |
| [asset:listStyles](#list-style-assets-websocket-) | websocket | List style assets (websocket) |
| [asset:listEnvironments](#list-environment-assets-websocket-) | websocket | List environment assets (websocket) |

<br>

<a name="list-asset-managed-networks"></a>

### List asset managed networks

**HTTP Method:** POST

**Path:** /api/v0/asset/listManagedNetworks

**Description:** Api returns list of networks where user have permissions to manage assets.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "networks": [{
        "id": string
        "fullName": string
    }]
}
</pre>

<br>

<a name="create-prop-asset"></a>

### Create prop asset

**HTTP Method:** POST

**Path:** /api/v0/asset/prop/create

**Request:** 

<pre>
{
    "data": { <a href="#asset-bundle-prop">asset bundle prop structure</a> }
}
</pre>

**Response:** 

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "placing": string
    "invokeType": string
    "minScale": float
    "maxScale": float
    "canStack": bool
    "pedestalInZoomView": bool
    "alternativeZoom": bool
    "size": { <a href="#xyz">xyz structure</a> }
    "contentType": [ string ] <span color="#1b1ef7"> // supported content types for asset template</span>
    "assetBundleMeta": {
        "logoCount": int <span color="#1b1ef7"> // show amount of logos in content management system</span>
        "thumbnailCount": int <span color="#1b1ef7"> // show amount of thumbnails in content management system</span>
    }
}
</pre>

<br>

<a name="create-style-asset"></a>

### Create style asset

**HTTP Method:** POST

**Path:** /api/v0/asset/style/create

**Request:** 

<pre>
{
    "data": { <a href="#asset-bundle-style">asset bundle style structure</a> }
}
</pre>

**Response:** 

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "styleType": string <span color="#1b1ef7"> // Default/NoMirror</span>
    "doorsType": string <span color="#1b1ef7"> // Glass/None</span>
    "homePosition": { <a href="#xyz">xyz structure</a> } <span color="#1b1ef7"> // home position for camera</span>
}
</pre>

<br>

<a name="create-environment-asset"></a>

### Create environment asset

**HTTP Method:** POST

**Path:** /api/v0/asset/environment/create

**Request:** 

<pre>
{
    "data": { <a href="#asset-bundle-environment">asset bundle environment structure</a> }
}
</pre>

**Response:** 

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
}
</pre>

<br>

<a name="update-prop-asset"></a>

### Update prop asset

**HTTP Method:** POST

**Path:** /api/v0/asset/prop/update

**Request:** 

<pre>
{
    "asset": string
    "data": { <a href="#asset-bundle-prop">asset bundle prop structure</a> }
}
</pre>

**Response:** 

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "placing": string
    "invokeType": string
    "minScale": float
    "maxScale": float
    "canStack": bool
    "pedestalInZoomView": bool
    "alternativeZoom": bool
    "size": { <a href="#xyz">xyz structure</a> }
    "contentType": [ string ] <span color="#1b1ef7"> // supported content types for asset template</span>
    "assetBundleMeta": {
        "logoCount": int <span color="#1b1ef7"> // show amount of logos in content management system</span>
        "thumbnailCount": int <span color="#1b1ef7"> // show amount of thumbnails in content management system</span>
    }
}
</pre>

<br>

<a name="update-style-asset"></a>

### Update style asset

**HTTP Method:** POST

**Path:** /api/v0/asset/style/update

**Request:** 

<pre>
{
    "asset": string
    "data": { <a href="#asset-bundle-style">asset bundle style structure</a> }
}
</pre>

**Response:** 

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "styleType": string <span color="#1b1ef7"> // Default/NoMirror</span>
    "doorsType": string <span color="#1b1ef7"> // Glass/None</span>
    "homePosition": { <a href="#xyz">xyz structure</a> } <span color="#1b1ef7"> // home position for camera</span>
}
</pre>

<br>

<a name="update-environment-asset"></a>

### Update environment asset

**HTTP Method:** POST

**Path:** /api/v0/asset/environment/update

**Request:** 

<pre>
{
    "asset": string
    "data": { <a href="#asset-bundle-environment">asset bundle environment structure</a> }
}
</pre>

**Response:** 

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
}
</pre>

<br>

<a name="update-asset-status"></a>

### Update asset status

**HTTP Method:** POST

**Path:** /api/v0/asset/updateStatus

**Request:** 

<pre>
{
    "assetId": string
    "status": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="update-asset-ownership"></a>

### Update asset ownership

**HTTP Method:** POST

**Path:** /api/v0/asset/updateOwnership

**Request:** 

<pre>
{
    "assetId": string
    "networkId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="list-prop-assets"></a>

### List prop assets

**HTTP Method:** POST

**Path:** /api/v0/asset/prop/list

**Request:** 

<pre>
{
    "offset": int
    "size": int
    "forNetwork": string
    "id": string
    "title": string
    "tags": [ string ]
    "placing": string
    "contentType": [ string ]
}
</pre>

**Response:** 

<pre>
[{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "placing": string
    "invokeType": string
    "minScale": float
    "maxScale": float
    "canStack": bool
    "pedestalInZoomView": bool
    "alternativeZoom": bool
    "size": { <a href="#xyz">xyz structure</a> }
    "contentType": [ string ] <span color="#1b1ef7"> // supported content types for asset template</span>
    "assetBundleMeta": {
        "logoCount": int <span color="#1b1ef7"> // show amount of logos in content management system</span>
        "thumbnailCount": int <span color="#1b1ef7"> // show amount of thumbnails in content management system</span>
    }
}]
</pre>

<br>

<a name="list-style-assets"></a>

### List style assets

**HTTP Method:** POST

**Path:** /api/v0/asset/style/list

**Request:** 

<pre>
{
    "offset": int
    "size": int
    "forNetwork": string
    "id": string
    "title": string
    "tags": [ string ]
}
</pre>

**Response:** 

<pre>
[{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "styleType": string <span color="#1b1ef7"> // Default/NoMirror</span>
    "doorsType": string <span color="#1b1ef7"> // Glass/None</span>
    "homePosition": { <a href="#xyz">xyz structure</a> } <span color="#1b1ef7"> // home position for camera</span>
}]
</pre>

<br>

<a name="list-environment-assets"></a>

### List environment assets

**HTTP Method:** POST

**Path:** /api/v0/asset/environment/list

**Request:** 

<pre>
{
    "offset": int
    "size": int
    "forNetwork": string
    "id": string
    "title": string
    "tags": [ string ]
}
</pre>

**Response:** 

<pre>
[{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
}]
</pre>

<br>

<a name="list-user-own-prop-assets"></a>

### List user own prop assets

**HTTP Method:** POST

**Path:** /api/v0/asset/prop/listOwn

**Request:** 

<pre>
{
    "offset": int
    "size": int
    "forNetwork": string
    "id": string
    "title": string
    "tags": [ string ]
    "placing": string
    "contentType": [ string ]
}
</pre>

**Response:** 

<pre>
[{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "placing": string
    "invokeType": string
    "minScale": float
    "maxScale": float
    "canStack": bool
    "pedestalInZoomView": bool
    "alternativeZoom": bool
    "size": { <a href="#xyz">xyz structure</a> }
    "contentType": [ string ] <span color="#1b1ef7"> // supported content types for asset template</span>
    "assetBundleMeta": {
        "logoCount": int <span color="#1b1ef7"> // show amount of logos in content management system</span>
        "thumbnailCount": int <span color="#1b1ef7"> // show amount of thumbnails in content management system</span>
    }
}]
</pre>

<br>

<a name="list-user-own-style-assets"></a>

### List user own style assets

**HTTP Method:** POST

**Path:** /api/v0/asset/style/listOwn

**Request:** 

<pre>
{
    "offset": int
    "size": int
    "forNetwork": string
    "id": string
    "title": string
    "tags": [ string ]
}
</pre>

**Response:** 

<pre>
[{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "styleType": string <span color="#1b1ef7"> // Default/NoMirror</span>
    "doorsType": string <span color="#1b1ef7"> // Glass/None</span>
    "homePosition": { <a href="#xyz">xyz structure</a> } <span color="#1b1ef7"> // home position for camera</span>
}]
</pre>

<br>

<a name="list-user-own-environment-assets"></a>

### List user own environment assets

**HTTP Method:** POST

**Path:** /api/v0/asset/environment/listOwn

**Request:** 

<pre>
{
    "offset": int
    "size": int
    "forNetwork": string
    "id": string
    "title": string
    "tags": [ string ]
}
</pre>

**Response:** 

<pre>
[{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
}]
</pre>

<br>

<a name="list-patch-versions-for-asset-resources-and-their-creation-date-"></a>

### List patch versions for asset resources and their creation date.

**HTTP Method:** POST

**Path:** /api/v0/asset/listPatchVersions

**Request:** 

<pre>
{
    "assetId": string
}
</pre>

**Response:** 

<pre>
[{
    "patchVersion": int
    "created": timestamp
}]
</pre>

<br>

<a name="restore-asset-resources-from-the-patch-"></a>

### Restore asset resources from the patch.

**HTTP Method:** POST

**Path:** /api/v0/asset/restorePatchVersion

**Request:** 

<pre>
{
    "assetId": string
    "patchVersion": int
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="set-asset-original-resource"></a>

### Set asset original resource

**HTTP Method:** POST

**Path:** /api/v0/asset/setOriginal

**Description:** API sets resource of original textures for asset.

**Request:** 

<pre>
{
    "assetId": string
    "resourceId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="remove-asset"></a>

### Remove asset

**HTTP Method:** POST

**Path:** /api/v0/asset/remove

**Request:** 

<pre>
{
    "asset": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-prop-asset-metadata"></a>

### Get prop asset metadata

**HTTP Method:** POST

**Path:** /api/v0/asset/metadata/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "placing": string
    "invokeType": string
    "minScale": float
    "maxScale": float
    "canStack": bool
    "pedestalInZoomView": bool
    "alternativeZoom": bool
    "size": { <a href="#xyz">xyz structure</a> }
    "contentType": [ string ] <span color="#1b1ef7"> // supported content types for asset template</span>
    "assetBundleMeta": {
        "logoCount": int <span color="#1b1ef7"> // show amount of logos in content management system</span>
        "thumbnailCount": int <span color="#1b1ef7"> // show amount of thumbnails in content management system</span>
    }
}
</pre>

<br>

<a name="get-asset-resource-data"></a>

### Get asset resource data

**HTTP Method:** GET

**Path:** /api/v0/asset/{assetId}/platform/{platform}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-resource-data-per-patch-version"></a>

### Get asset resource data per patch version

**HTTP Method:** GET

**Path:** /{assetId}/platform/{platform}/patch/{patchVersion}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-resource-data-for-default-platform"></a>

### Get asset resource data for default platform

**HTTP Method:** GET

**Path:** /api/v0/asset/{assetId}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-thumbnail-data"></a>

### Get asset thumbnail data

**HTTP Method:** GET

**Path:** /api/v0/asset/thumbnail/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-original-data"></a>

### Get asset original data

**HTTP Method:** GET

**Path:** /api/v0/asset/original/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-resource-url"></a>

### Get asset resource url

**HTTP Method:** GET

**Path:** /api/v0/asset/url/{assetId}/platform/{platform}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-resource-url-per-patch-version"></a>

### Get asset resource url per patch version

**HTTP Method:** GET

**Path:** /api/v0/asset/url/{assetId}/platform/{platform}/patch/{patchVersion}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-resource-url-for-default-platform"></a>

### Get asset resource url for default platform

**HTTP Method:** GET

**Path:** /api/v0/asset/url/{assetId}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-thumbnail-url"></a>

### Get asset thumbnail url

**HTTP Method:** GET

**Path:** /api/v0/asset/thumbnail/url/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-asset-original-url"></a>

### Get asset original url

**HTTP Method:** GET

**Path:** /api/v0/asset/original/url/{id}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="list-patch-versions-for-asset-resources-and-their-creation-date-"></a>

### List patch versions for asset resources and their creation date.

**HTTP Method:** POST

**Path:** /api/v0/asset/listSkinPatchVersions

**Request:** 

<pre>
{
    "assetId": string
    "skinId": string
}
</pre>

**Response:** 

<pre>
[{
    "patchVersion": int
    "created": timestamp
}]
</pre>

<br>

<a name="restore-asset-resources-from-the-patch-"></a>

### Restore asset resources from the patch.

**HTTP Method:** POST

**Path:** /api/v0/asset/restoreSkinPatchVersion

**Request:** 

<pre>
{
    "assetId": string
    "skinId": string
    "patchVersion": int
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="direct-asset-upload-to-google-bucket-get-upload-link-"></a>

### Direct asset upload to Google bucket (get upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/upload/link

**Description:** Direct upload gives possibility to upload files directly from a client to a storage bucket. It consist of next steps: 

1) Client asks the server for upload link. The server initializes an upload session and returns a link which could be used for upload. 

2) Client [uploads a file to Google bucket](https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload#upload-resumable). 

3) Client [sends upload complete acknowledgment to the server](#direct-asset-upload-to-google-bucket-complete-upload-link). 



**Request:** 

<pre>
{
    "asset": string
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

<a name="direct-asset-upload-to-google-bucket-complete-upload-link-"></a>

### Direct asset upload to Google bucket (complete upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/upload/link/complete

**Description:** See [direct upload to Google bucket](#direct-asset-upload-to-google-bucket-get-upload-link).

**Request:** 

<pre>
{
    "asset": string
    "platform": string
    "fileName": string
    "contentType": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="direct-asset-thumbnail-upload-to-google-bucket-get-upload-link-"></a>

### Direct asset thumbnail upload to Google bucket (get upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/upload/thumbnail/link

**Description:** The process is the same as [direct upload to Google bucket](#direct-asset-upload-to-google-bucket-get-upload-link). Complete with [thumbnail uploaded acknowledgment](#direct-asset-thumbnail-upload-to-google-bucket-complete-upload-link).

**Request:** 

<pre>
{
    "asset": string
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

<a name="direct-asset-thumbnail-upload-to-google-bucket-complete-upload-link-"></a>

### Direct asset thumbnail upload to Google bucket (complete upload link)

**HTTP Method:** POST

**Path:** /api/v0/asset/upload/thumbnail/link/complete

**Description:** See [direct thumbnail upload to Google bucket](#direct-asset-thumbnail-upload-to-google-bucket-get-upload-link).

**Request:** 

<pre>
{
    "asset": string
    "platform": string
    "fileName": string
    "contentType": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="update-asset-params"></a>

### Update asset params

**Method:** websocket

**Endpoint:** asset:updateAssetParams

**Request:** 

<pre>
{
    "data": {
        "assetId": string
        "params": map[string]{ custom structure }
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

<a name="get-prop-asset"></a>

### Get prop asset

**Method:** websocket

**Endpoint:** asset:getPropAsset

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
        "asset": { <a href="#asset-bundle-prop">asset bundle prop structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-style-asset"></a>

### Get style asset

**Method:** websocket

**Endpoint:** asset:getStyleAsset

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
        "asset": { <a href="#asset-bundle-style">asset bundle style structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-environment-asset"></a>

### Get environment asset

**Method:** websocket

**Endpoint:** asset:getEnvironmentAsset

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
        "asset": { <a href="#asset-bundle-environment">asset bundle environment structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-prop-assets"></a>

### Search prop assets

**Method:** websocket

**Endpoint:** asset:searchProp

**Request:** 

<pre>
{
    "data": {
        "offset": int
        "size": int
        "onlyAssetsOfCurrentUser": bool
        "forNetwork": string
        "title": string
        "tags": [ string ]
        "placing": string
        "contentType": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "assets": [{ <a href="#asset-bundle-prop">asset bundle prop structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-style-assets"></a>

### Search style assets

**Method:** websocket

**Endpoint:** asset:searchStyle

**Request:** 

<pre>
{
    "data": {
        "offset": int
        "size": int
        "onlyAssetsOfCurrentUser": bool
        "forNetwork": string
        "title": string
        "tags": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "assets": [{ <a href="#asset-bundle-style">asset bundle style structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-environment-assets"></a>

### Search environment assets

**Method:** websocket

**Endpoint:** asset:searchEnvironment

**Request:** 

<pre>
{
    "data": {
        "offset": int
        "size": int
        "onlyAssetsOfCurrentUser": bool
        "forNetwork": string
        "title": string
        "tags": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "assets": [{ <a href="#asset-bundle-environment">asset bundle environment structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-prop-assets-websocket-"></a>

### List prop assets (websocket)

**Method:** websocket

**Endpoint:** asset:listProps

**Request:** 

<pre>
{
    "data": {
        "placing": string
        "contentType": [ string ]
        "offset": int
        "size": int
        "onlyAssetsOfCurrentUser": bool
        "forNetwork": string
        "id": string
        "title": string
        "tags": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "assets": [{ <a href="#asset-bundle-prop">asset bundle prop structure</a> }]
        "propSkins": [{ <a href="#asset-bundle-skin">asset bundle skin structure</a> }] <span color="#1b1ef7"> // default (or displayed) skins for assets</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-style-assets-websocket-"></a>

### List style assets (websocket)

**Method:** websocket

**Endpoint:** asset:listStyles

**Request:** 

<pre>
{
    "data": {
        "offset": int
        "size": int
        "onlyAssetsOfCurrentUser": bool
        "forNetwork": string
        "id": string
        "title": string
        "tags": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "assets": [{ <a href="#asset-bundle-style">asset bundle style structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-environment-assets-websocket-"></a>

### List environment assets (websocket)

**Method:** websocket

**Endpoint:** asset:listEnvironments

**Request:** 

<pre>
{
    "data": {
        "offset": int
        "size": int
        "onlyAssetsOfCurrentUser": bool
        "forNetwork": string
        "id": string
        "title": string
        "tags": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "assets": [{ <a href="#asset-bundle-environment">asset bundle environment structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="asset-bundle-prop"></a>

#### Asset Bundle Prop

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "placing": string
    "invokeType": string
    "minScale": float
    "maxScale": float
    "canStack": bool
    "pedestalInZoomView": bool
    "alternativeZoom": bool
    "size": { <a href="#xyz">xyz structure</a> }
    "contentType": [ string ] <span color="#1b1ef7"> // supported content types for asset template</span>
    "assetBundleMeta": {
        "logoCount": int <span color="#1b1ef7"> // show amount of logos in content management system</span>
        "thumbnailCount": int <span color="#1b1ef7"> // show amount of thumbnails in content management system</span>
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

<a name="asset-bundle-style"></a>

#### Asset Bundle Style

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
    "styleType": string <span color="#1b1ef7"> // Default/NoMirror</span>
    "doorsType": string <span color="#1b1ef7"> // Glass/None</span>
    "homePosition": { <a href="#xyz">xyz structure</a> } <span color="#1b1ef7"> // home position for camera</span>
}
</pre>

<br>

<a name="asset-bundle-environment"></a>

#### Asset Bundle Environment

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "status": string <span color="#1b1ef7"> // workInProgress/published</span>
    "ownership": string <span color="#1b1ef7"> // empty - public asset; network:{networkId} - belongs to network</span>
    "hasVariants": bool <span color="#1b1ef7"> // asset has skin variants</span>
    "title": string
    "tags": [ string ]
    "price": float <span color="#1b1ef7"> // price per month (when creating room with the asset)</span>
    "score": int <span color="#1b1ef7"> // featuring score for ordering assets</span>
    "displaySkins": bool <span color="#1b1ef7"> // display all skins in sorting table</span>
    "params": map[string]{ custom structure } <span color="#1b1ef7"> // client defined custom data</span>
    "editorParams": map[string]{ custom structure } <span color="#1b1ef7"> // editor defined custom data / not used in runtime</span>
    "urls": map[string]string <span color="#1b1ef7"> // asset data urls per platform</span>
    "thumbnail": { <a href="#resource">resource structure</a> }
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

