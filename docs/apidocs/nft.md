<br>

<a name="nft-api"></a>

## Nft API

| Endpoint | Method | Description |
|-----|-----|-----|
| [resource:getNftsByAddress](#get-nfts-by-address) | websocket | Get nfts by address |
| [resource:getNftsByAddressAsync](#get-nfts-by-address-async) | websocket | Get nfts by address async |
| [resource:createNftByUrl](#create-nft-resource-by-url) | websocket | Create nft resource by url |
| [resource:createNftByToken](#create-nft-resource-by-token) | websocket | Create nft resource by token |
| [user:addNftWallet](#add-nft-wallet) | websocket | Add nft wallet |
| [user:deleteNftWallet](#delete-nft-wallet) | websocket | Delete nft wallet |
| [user:getNftWalletsNoBalance](#get-nft-wallets-no-balance) | websocket | Get nft wallets no balance |
| [user:getNftWallets](#get-nft-wallets) | websocket | Get nft wallets |
| [user:nftWalletAdded](#nft-wallet-added-event) | websocketEvent | Nft wallet added event |
| [user:nftWalletDeleted](#nft-wallet-deleted-event) | websocketEvent | Nft wallet deleted event |
| [resource:nftsByAddress](#wallet-nfts-event) | websocketEvent | Wallet nfts event |
| [user:nftWallets](#user-nft-wallets-event) | websocketEvent | User nft wallets event |

<br>

<a name="get-nfts-by-address"></a>

### Get nfts by address

**Method:** websocket

**Endpoint:** resource:getNftsByAddress

**Request:** 

<pre>
{
    "data": {
        "walletAddress": string
        "searchQuery": string
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
        "nfts": [{
            "contractAddress": string
            "url": string
            "urlType": string <span color="#1b1ef7"> // json/image</span>
            "tokenId": string
            "title": string
            "description": string
        }]
        "hasMore": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-nfts-by-address-async"></a>

### Get nfts by address async

**Method:** websocket

**Endpoint:** resource:getNftsByAddressAsync

**Request:** 

<pre>
{
    "data": {
        "walletAddress": string
        "searchQuery": string
        "offset": int
        "size": int
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

<a name="create-nft-resource-by-url"></a>

### Create nft resource by url

**Method:** websocket

**Endpoint:** resource:createNftByUrl

**Request:** 

<pre>
{
    "data": {
        "url": string
        "thumbnailUrl": string
        "title": string
        "description": string
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

<a name="create-nft-resource-by-token"></a>

### Create nft resource by token

**Method:** websocket

**Endpoint:** resource:createNftByToken

**Request:** 

<pre>
{
    "data": {
        "contractAddress": string
        "tokenId": string
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

<a name="add-nft-wallet"></a>

### Add nft wallet

**Method:** websocket

**Endpoint:** user:addNftWallet

**Request:** 

<pre>
{
    "data": {
        "address": string
        "walletType": string
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

<a name="delete-nft-wallet"></a>

### Delete nft wallet

**Method:** websocket

**Endpoint:** user:deleteNftWallet

**Request:** 

<pre>
{
    "data": {
        "address": string
        "walletType": string
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

<a name="get-nft-wallets-no-balance"></a>

### Get nft wallets no balance

**Method:** websocket

**Endpoint:** user:getNftWalletsNoBalance

**Description:** Returns nft wallets without balance.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "wallets": [{
            "address": string
            "walletType": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-nft-wallets"></a>

### Get nft wallets

**Method:** websocket

**Endpoint:** user:getNftWallets

**Description:** Returns nft wallets with balance.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "wallets": [{
            "address": string
            "walletType": string
            "amountOfNfts": int
            "amountOfRoomis": float
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="nft-wallet-added-event"></a>

### Nft wallet added event

**Event:** user:nftWalletAdded

**Data:** 

<pre>
{
    "data": {
        "wallet": {
            "address": string
            "walletType": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="nft-wallet-deleted-event"></a>

### Nft wallet deleted event

**Event:** user:nftWalletDeleted

**Data:** 

<pre>
{
    "data": {
        "wallet": {
            "address": string
            "walletType": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="wallet-nfts-event"></a>

### Wallet nfts event

**Event:** resource:nftsByAddress

**Description:** Event sends information about nfts in a wallet. Triggers by getNftsByAddressAsync endpoint.

**Data:** 

<pre>
{
    "data": {
        "request": {
            "walletAddress": string
            "searchQuery": string
            "offset": int
            "size": int
        }
        "response": {
            "nfts": [{
                "contractAddress": string
                "url": string
                "urlType": string <span color="#1b1ef7"> // json/image</span>
                "tokenId": string
                "title": string
                "description": string
            }]
            "hasMore": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-nft-wallets-event"></a>

### User nft wallets event

**Event:** user:nftWallets

**Description:** Event sends information about user nft wallets. Triggers on socket connection.

**Data:** 

<pre>
{
    "data": {
        "wallets": [{
            "address": string
            "walletType": string
            "amountOfNfts": int
            "amountOfRoomis": float
        }]
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

