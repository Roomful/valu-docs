<br>

<a name="partner-roominfo-api"></a>

## Partner: RoomInfo API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/partnerRpc/roomInfo.getAIBotSettings](#get-ai-bot-settings) | jsonRpc | Get aI bot settings |
| [/api/v0/partnerRpc/roomInfo.getFullRoomInfo](#get-full-room-info) | jsonRpc | Get full room info |

<br>

<a name="get-ai-bot-settings"></a>

### Get aI bot settings

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/roomInfo.getAIBotSettings

**Description:** API returns room name and description, and AI bot settings for the room.

Add `X-Network: {networkId}` header to request in order to fetch room info from non-default network.

**Headers:** 

X-Network: networkId

**Request:** 

<pre>
{
    "roomId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roomId": string
        "roomName": string
        "roomDescription": string
        "promptEngineering": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-full-room-info"></a>

### Get full room info

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/roomInfo.getFullRoomInfo

**Description:** API returns list of room props in CSV like format: `[ {"propId", "propTitle", "propDescription", "propTypes", "assetTitle", "assetTags"}, {"id1", "title1", "desc1", "booth", "asset1", "assetTag1, assetTag2"}, {"id2", "title2", "desc2", "fileCabinet", "asset2", "assetTag3"}, ... ]`

Add `X-Network: {networkId}` header to request in order to fetch room info from non-default network.

**Headers:** 

X-Network: networkId

**Request:** 

<pre>
{
    "roomId": string
}
</pre>

**Response:** 

<pre>
[][]string
</pre>

