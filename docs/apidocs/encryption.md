<br>

<a name="encryption-api"></a>

## Encryption API

| Endpoint | Method | Description |
|-----|-----|-----|
| [encryption:getZAddressForUser](#get-z-address-for-user) | websocket | Get z address for user |
| [encryption:createEpoch](#create-encryption-epoch) | websocket | Create encryption epoch |
| [encryption:updateEpoch](#update-encryption-epoch) | websocket | Update encryption epoch |
| [encryption:setEpochOwner](#set-encryption-epoch-owner) | websocket | Set encryption epoch owner |
| [encryption:listEpoches](#list-encryption-epoches) | websocket | List encryption epoches |
| [encryption:listEpochesByTuples](#list-encryption-epoches-by-tuples) | websocket | List encryption epoches by tuples |
| [encryption:listEpochesByZAddress](#list-encryption-epoches-by-z-address) | websocket | List encryption epoches by z address |
| [encryption:getLastEpoch](#get-last-encryption-epoch) | websocket | Get last encryption epoch |
| ~~[encryption:getEpochChain](#get-encryption-epoch-chain)~~ | websocket | Get encryption epoch chain |
| [encryption:getEpochChainPerKey](#get-encryption-epoch-chain-per-key) | websocket | Get encryption epoch chain per key |
| [encryption:getEpochChainForKey](#get-encryption-epoch-chain-for-key) | websocket | Get encryption epoch chain for key |
| [encryption:requestEncryption](#request-encryption) | websocket | Request encryption |
| [encryption:setRequestedEncryption](#set-requested-encryption) | websocket | Set requested encryption |
| [encryption:onEpochCreated](#on-encryption-epoch-created-event) | websocketEvent | On encryption epoch created event |
| [encryption:onEncryptionRequested](#on-encryption-requested-event) | websocketEvent | On encryption requested event |

<br>

<a name="get-z-address-for-user"></a>

### Get z address for user

**Method:** websocket

**Endpoint:** encryption:getZAddressForUser

**Description:** Api returns z-addresses of target user in order to encrypt viewing keys for him.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "zAddress": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-encryption-epoch"></a>

### Create encryption epoch

**Method:** websocket

**Endpoint:** encryption:createEpoch

**Description:** Api creates new epoch for target item encryption. Epoch initiator should create viewing key and encrypt it for zAddresses of each owner. Multiple keys could form a keychain that is used to decrypt the target (like resource<-channel<-user). Only users who have viewing key for an epoch (or to keychain root) will be able to decrypt cypher data.

List of valid encryption target types:
* `channel` (use channelId as targetId) 
* `resource` (use resourceId as targetId) 
* `room` (use roomId as targetId) 
* `identitySellOffer` (use userId:identityKey as targetId) 
* `identityBuyOffer` (use offerId as targetId) 

List of valid encryption owner types:
* `user` (use userId as ownerId) 
* `channel` (use channelId as ownerId) 
* `resource` (use resourceId as ownerId) 
* `room` (use roomId as ownerId) 
* `aiAgent` (use userId:agentId as ownerId) 
* `identityBuyOffer` (use offerId as ownerId) 



**Request:** 

<pre>
{
    "data": {
        "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
        "targetZAddress": string <span color="#1b1ef7"> // zAddress of encryption target for current epoch</span>
        "targetType": string <span color="#1b1ef7"> // type of encryption target, like 'channel' or 'resource'</span>
        "ownerKeys": [{ <span color="#1b1ef7"> // viewing keys for epoch</span>
            "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
            "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
            "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
        }]
        "expectedEpoch": int <span color="#1b1ef7"> // optional, if provided - server will check that new epoch equals to expectedEpoch (detect simultaneous epoch creation)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "epoch": {
            "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
            "targetZAddress": string <span color="#1b1ef7"> // zAddress of encryption target for current epoch</span>
            "targetType": string <span color="#1b1ef7"> // type of encryption target, like 'channel' or 'resource'</span>
            "epoch": int <span color="#1b1ef7"> // encryption epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-encryption-epoch"></a>

### Update encryption epoch

**Method:** websocket

**Endpoint:** encryption:updateEpoch

**Description:** Api updates encryption epoch for owner. This is useful in case when user has changed his zAddress and wants to update viewing keys correspondingly.

**Request:** 

<pre>
{
    "data": {
        "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
        "epoch": int <span color="#1b1ef7"> // encryption epoch to update</span>
        "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
        "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
        "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
        "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
        "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
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

<a name="set-encryption-epoch-owner"></a>

### Set encryption epoch owner

**Method:** websocket

**Endpoint:** encryption:setEpochOwner

**Description:** Api sets new owner for an encryption epoch. This api should be used to share encrypted target with a new owner (user, channel, room, etc...).

**Request:** 

<pre>
{
    "data": {
        "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
        "accessId": string <span color="#1b1ef7"> // check permission using accessId in case when no direct permissions for targetId</span>
        "epoch": int <span color="#1b1ef7"> // encryption epoch to update</span>
        "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
        "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
        "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
        "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
        "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
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

<a name="list-encryption-epoches"></a>

### List encryption epoches

**Method:** websocket

**Endpoint:** encryption:listEpoches

**Description:** Api returns latest encryption epoches (with owner context) for provided targetId.

**Request:** 

<pre>
{
    "data": {
        "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
        "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "epoches": [{
            "epochKey": string <span color="#1b1ef7"> // epoch:targetId</span>
            "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
            "targetZAddress": string <span color="#1b1ef7"> // zAddress of encryption target for current epoch</span>
            "targetType": string <span color="#1b1ef7"> // type of encryption target, like 'channel' or 'resource'</span>
            "epoch": int <span color="#1b1ef7"> // encryption epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
            "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
            "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
            "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-encryption-epoches-by-tuples"></a>

### List encryption epoches by tuples

**Method:** websocket

**Endpoint:** encryption:listEpochesByTuples

**Description:** Api returns encryption epoches (with owner context) for provided targetId-epoch tuples.

**Request:** 

<pre>
{
    "data": {
        "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
        "epochTuples": [ ( targetId string, epoch int ) ] <span color="#1b1ef7"> // list of [targetId, epoch] tuples to fetch</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "epoches": [{
            "epochKey": string <span color="#1b1ef7"> // epoch:targetId</span>
            "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
            "targetZAddress": string <span color="#1b1ef7"> // zAddress of encryption target for current epoch</span>
            "targetType": string <span color="#1b1ef7"> // type of encryption target, like 'channel' or 'resource'</span>
            "epoch": int <span color="#1b1ef7"> // encryption epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
            "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
            "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
            "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-encryption-epoches-by-z-address"></a>

### List encryption epoches by z address

**Method:** websocket

**Endpoint:** encryption:listEpochesByZAddress

**Description:** Api returns encryption epoches (with owner context) for provided owner zAddress.

**Request:** 

<pre>
{
    "data": {
        "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
        "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "epoches": [{
            "epochKey": string <span color="#1b1ef7"> // epoch:targetId</span>
            "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
            "targetZAddress": string <span color="#1b1ef7"> // zAddress of encryption target for current epoch</span>
            "targetType": string <span color="#1b1ef7"> // type of encryption target, like 'channel' or 'resource'</span>
            "epoch": int <span color="#1b1ef7"> // encryption epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
            "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
            "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
            "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-last-encryption-epoch"></a>

### Get last encryption epoch

**Method:** websocket

**Endpoint:** encryption:getLastEpoch

**Description:** Api returns last encryption epoch for provided targetId.

**Request:** 

<pre>
{
    "data": {
        "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
        "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "epoch": {
            "epochKey": string <span color="#1b1ef7"> // epoch:targetId</span>
            "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
            "targetZAddress": string <span color="#1b1ef7"> // zAddress of encryption target for current epoch</span>
            "targetType": string <span color="#1b1ef7"> // type of encryption target, like 'channel' or 'resource'</span>
            "epoch": int <span color="#1b1ef7"> // encryption epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
            "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
            "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
            "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-encryption-epoch-chain"></a>

### Get encryption epoch chain

**Method:** websocket

**Endpoint:** encryption:getEpochChain

**<span color="red">DEPRECATED</span>** 

**Description:** Api returns list of epoches by provided tuples + parent epoches that are required to build encryption context chain.

**Request:** 

<pre>
{
    "data": {
        "epochTuples": [ ( targetId string, epoch int ) ] <span color="#1b1ef7"> // list of [targetId, epoch] tuples</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "epoches": [{
            "epochKey": string <span color="#1b1ef7"> // epoch:targetId</span>
            "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
            "targetZAddress": string <span color="#1b1ef7"> // zAddress of encryption target for current epoch</span>
            "targetType": string <span color="#1b1ef7"> // type of encryption target, like 'channel' or 'resource'</span>
            "epoch": int <span color="#1b1ef7"> // encryption epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
            "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
            "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
            "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-encryption-epoch-chain-per-key"></a>

### Get encryption epoch chain per key

**Method:** websocket

**Endpoint:** encryption:getEpochChainPerKey

**Description:** Api returns encryption epoch chains for given epoch keys, split per key. Each key in the response maps to the ordered list of epoches needed to decrypt that specific object. Keys with no accessible chain are included with an empty list.

**Request:** 

<pre>
{
    "data": {
        "epochKeys": [ string ] <span color="#1b1ef7"> // list of epochKey strings (format: 'epochNumber:targetId')</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "epoches": map[string][{
            "epochKey": string <span color="#1b1ef7"> // epoch:targetId</span>
            "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
            "targetZAddress": string <span color="#1b1ef7"> // zAddress of encryption target for current epoch</span>
            "targetType": string <span color="#1b1ef7"> // type of encryption target, like 'channel' or 'resource'</span>
            "epoch": int <span color="#1b1ef7"> // encryption epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
            "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
            "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
            "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-encryption-epoch-chain-for-key"></a>

### Get encryption epoch chain for key

**Method:** websocket

**Endpoint:** encryption:getEpochChainForKey

**Description:** Api returns encryption epoch chain for a single epoch key. Returns the ordered list of epoches needed to decrypt the object.

**Request:** 

<pre>
{
    "data": {
        "epochKey": string <span color="#1b1ef7"> // epochKey string (format: 'epochNumber:targetId')</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "epoches": [{
            "epochKey": string <span color="#1b1ef7"> // epoch:targetId</span>
            "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
            "targetZAddress": string <span color="#1b1ef7"> // zAddress of encryption target for current epoch</span>
            "targetType": string <span color="#1b1ef7"> // type of encryption target, like 'channel' or 'resource'</span>
            "epoch": int <span color="#1b1ef7"> // encryption epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
            "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
            "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
            "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="request-encryption"></a>

### Request encryption

**Method:** websocket

**Endpoint:** encryption:requestEncryption

**Description:** Api requests an encryption key for a target item on behalf of the caller (typically an AI agent). Server notifies all existing epoch owners who can then fulfill the request via setRequestedEncryption.

**Request:** 

<pre>
{
    "data": {
        "targetType": string <span color="#1b1ef7"> // channel</span>
        "targetId": string <span color="#1b1ef7"> // channelId</span>
        "epoch": int <span color="#1b1ef7"> // encryption epoch to update</span>
        "ownerType": string <span color="#1b1ef7"> // aiAgent</span>
        "ownerId": string <span color="#1b1ef7"> // userId:agentId</span>
        "ownerZAddress": string <span color="#1b1ef7"> // zAddress generated from agent scoped root key</span>
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

<a name="set-requested-encryption"></a>

### Set requested encryption

**Method:** websocket

**Endpoint:** encryption:setRequestedEncryption

**Description:** Api fulfills a pending encryption key request by adding a new epoch owner. Once fulfilled, the requester receives an onEpochCreated event with the new viewing key.

**Request:** 

<pre>
{
    "data": {
        "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
        "epoch": int <span color="#1b1ef7"> // encryption epoch to update</span>
        "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
        "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
        "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
        "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
        "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
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

<a name="on-encryption-epoch-created-event"></a>

### On encryption epoch created event

**Event:** encryption:onEpochCreated

**Description:** Event is triggered when new epoch is created.

**Data:** 

<pre>
{
    "data": {
        "epochKey": string <span color="#1b1ef7"> // epoch:targetId</span>
        "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
        "targetZAddress": string <span color="#1b1ef7"> // zAddress of encryption target for current epoch</span>
        "targetType": string <span color="#1b1ef7"> // type of encryption target, like 'channel' or 'resource'</span>
        "epoch": int <span color="#1b1ef7"> // encryption epoch number</span>
        "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
        "ownerId": string <span color="#1b1ef7"> // encryption owner id, like userId, directoryId or roomId</span>
        "ownerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
        "ownerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user', 'channel', 'resource' or 'room'</span>
        "vkCypher": string <span color="#1b1ef7"> // viewing key of encryption owner for current epoch</span>
        "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-encryption-requested-event"></a>

### On encryption requested event

**Event:** encryption:onEncryptionRequested

**Description:** Event is triggered when new encryption key is requested for an epoch.

**Data:** 

<pre>
{
    "data": {
        "targetId": string <span color="#1b1ef7"> // encryption target id, like channelId or resourceId</span>
        "targetType": string <span color="#1b1ef7"> // type of encryption target, like 'channel' or 'resource'</span>
        "epoch": int <span color="#1b1ef7"> // encryption epoch number</span>
        "created": timestamp <span color="#1b1ef7"> // request creation time</span>
        "requestOwnerId": string <span color="#1b1ef7"> // encryption owner id, like userId or userId:agentId</span>
        "requestOwnerZAddress": string <span color="#1b1ef7"> // zAddress of encryption owner for current epoch</span>
        "requestOwnerType": string <span color="#1b1ef7"> // type of encryption owner, like 'user' or 'aiAgent'</span>
        "recipientId": string <span color="#1b1ef7"> // recipient (userId) who should update encryption epoch for key owner</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

