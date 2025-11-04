<br>

<a name="encryption-api"></a>

## Encryption API

| Endpoint | Method | Description |
|-----|-----|-----|
| [encryption:createEpoch](#create-encryption-epoch) | websocket | Create encryption epoch |
| [encryption:updateEpoch](#update-encryption-epoch) | websocket | Update encryption epoch |
| [encryption:listEpoches](#list-encryption-epoches) | websocket | List encryption epoches |
| [encryption:listEpochesByTuples](#list-encryption-epoches-by-tuples) | websocket | List encryption epoches by tuples |
| [encryption:listEpochesByZAddress](#list-encryption-epoches-by-z-address) | websocket | List encryption epoches by z address |
| [encryption:getLastEpoch](#get-last-encryption-epoch) | websocket | Get last encryption epoch |
| [encryption:getEpochChain](#get-encryption-epoch-chain) | websocket | Get encryption epoch chain |
| [encryption:onEpochCreated](#on-encryption-epoch-created-event) | websocketEvent | On encryption epoch created event |

<br>

<a name="create-encryption-epoch"></a>

### Create encryption epoch

**Method:** websocket

**Endpoint:** encryption:createEpoch

**Description:** Api creates new epoch for target item encryption. Epoch initiator should create viewing key and encrypt it for zAddresses of each owner.

Encryption owner could be:
1) User - keys are encrypted to user zAddress.
2) Another item in the system (like room or directory) - keys are encrypted to item zAddress and could be decrypted using encryption keychain.

Only users who have viewing key for that epoch (or to keychain root) will be able to decrypt cypher data.

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

