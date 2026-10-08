<br>

<a name="partner-communityinfo-api"></a>

## Partner: CommunityInfo API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/partnerRpc/communityInfo.userHasViewPermissionForCommunity](#user-has-view-permission-for-community) | jsonRpc | User has view permission for community |
| [/api/v0/partnerRpc/communityInfo.userHasViewPermissionForCommunityChannel](#user-has-view-permission-for-community-channel) | jsonRpc | User has view permission for community channel |
| [/api/v0/partnerRpc/communityInfo.listCommunityChannels](#list-community-channels) | jsonRpc | List community channels |
| [/api/v0/partnerRpc/communityInfo.listCommunitySubChannels](#list-community-sub-channels) | jsonRpc | List community sub channels |
| [/api/v0/partnerRpc/communityInfo.listCommunityChannelMessages](#list-community-channel-messages) | jsonRpc | List community channel messages |

<br>

<a name="user-has-view-permission-for-community"></a>

### User has view permission for community

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/communityInfo.userHasViewPermissionForCommunity

**Description:** API returns true if user has permission to view community.

**Request:** 

<pre>
{
    "userId": string
    "communityId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "hasPermission": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-has-view-permission-for-community-channel"></a>

### User has view permission for community channel

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/communityInfo.userHasViewPermissionForCommunityChannel

**Description:** API returns true if user has permission to view community channel.

**Request:** 

<pre>
{
    "userId": string
    "communityId": string
    "channelId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "hasPermission": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-community-channels"></a>

### List community channels

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/communityInfo.listCommunityChannels

**Description:** API returns channels of the community.

**Request:** 

<pre>
{
    "communityId": string
    "afterChannelId": string <span color="#1b1ef7"> // pagination cursor, get channels after this channel id</span>
    "limit": int <span color="#1b1ef7"> // max number of channels to return (1-100)</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "channels": [{
            "sourceString": string <span color="#1b1ef7"> // textchat channel belonging source</span>
            "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
            "title": string <span color="#1b1ef7"> // channel title</span>
            "settings": map[string]{ custom structure } <span color="#1b1ef7"> // channel settings, like permissions for community channel</span>
            "contentDirectoryId": string <span color="#1b1ef7"> // content directory resource id, for CMS</span>
            "options": [ string ] <span color="#1b1ef7"> // additional options for a channel, like 'events' or 'booth'</span>
            "lastEpoch": int <span color="#1b1ef7"> // last encryption epoch number for a channel</span>
            "needNewEpoch": bool <span color="#1b1ef7"> // flag to point that channel encryption epoch should be changed on next message</span>
            "thumbnailId": string <span color="#1b1ef7"> // channel thumbnail resource id</span>
            "totalCount": int <span color="#1b1ef7"> // total count of messages in a channel</span>
            "unreadCount": int <span color="#1b1ef7"> // count of unread messages for current participant / not returned if empty</span>
            "subChannelCount": int <span color="#1b1ef7"> // amount of first level subchannels in a channel (if present)</span>
            "lastReadTs": timestamp <span color="#1b1ef7"> // last read timestamp for current participant / not returned if empty</span>
            "opponentLastReadTs": timestamp <span color="#1b1ef7"> // last read timestamp for opponent (only for direct channels) / not returned if empty</span>
            "lastMessage": { <span color="#1b1ef7"> // last message in a channel / not returned if empty</span>
                "messageId": string
                "created": timestamp
                "authorId": string
                "authorName": string
                "messageBody": string
                "messageContentType": int <span color="#1b1ef7"> // 0 - text, 1 - blocked, 2 - deleted, 3 - request JSON, 4 - endorsement JSON, 5 - activity JSON, 6 - card JSON, 7 - system JSON, 8 - poll, 9 - forward, 10 - file attachment, 11 - image, 12 - video, 13 - audio</span>
                "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
            }
            "isHighAlert": bool <span color="#1b1ef7"> // is channel set on high alert</span>
            "isPinned": bool <span color="#1b1ef7"> // indicates if the channel was pinned by the user</span>
            "spawnUnreadCount": int <span color="#1b1ef7"> // count of unread AI agent spawned channels from this direct channel / not returned if empty</span>
            "spawnParentId": string <span color="#1b1ef7"> // parent channel id for spawned channel / not returned if empty</span>
            "spawnLastMessageTs": timestamp <span color="#1b1ef7"> // timestamp of last message in spawned channels</span>
        }]
        "total": int <span color="#1b1ef7"> // total amount of channels</span>
        "hasNext": bool <span color="#1b1ef7"> // there are more channels to fetch</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-community-sub-channels"></a>

### List community sub channels

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/communityInfo.listCommunitySubChannels

**Description:** API returns sub-channels for the community.

**Request:** 

<pre>
{
    "communityId": string
    "channelId": string
    "parentSubChannelId": string <span color="#1b1ef7"> // parent subchannel id, if nested</span>
    "fetchNested": bool <span color="#1b1ef7"> // if false - api fetches only first level of subchannels; if true - all nested subchannels</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "subChannels": [{
            "channelId": string
            "subChannelId": string
            "parentSubChannelPath": string
            "parentSubChannelTitles": [ string ]
            "created": timestamp
            "title": string
            "contentDirectoryId": string
            "options": [ string ]
            "lastMessageBucketId": string
            "lastMessage": {
                "messageId": string
                "created": timestamp
                "authorId": string
                "authorName": string
                "messageBody": string
                "messageContentType": int <span color="#1b1ef7"> // 0 - text, 1 - blocked, 2 - deleted, 3 - request JSON, 4 - endorsement JSON, 5 - activity JSON, 6 - card JSON, 7 - system JSON, 8 - poll, 9 - forward, 10 - file attachment, 11 - image, 12 - video, 13 - audio</span>
                "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
            }
            "messageCount": int
            "subChannelCount": int
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-community-channel-messages"></a>

### List community channel messages

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/communityInfo.listCommunityChannelMessages

**Description:** API returns channels of the community, optionally filtered by search query.

**Request:** 

<pre>
{
    "communityId": string
    "channelId": string
    "messageId": string <span color="#1b1ef7"> // pagination cursor, skip to start from the beginning</span>
    "direction": string <span color="#1b1ef7"> // pagination direction: before (default), after, bilateral (both before and after), single (single message)</span>
    "limit": int <span color="#1b1ef7"> // max number of messages to return (1-100)</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "messages": [{
            "channelId": string
            "bucketId": string
            "messageId": string
            "authorId": string
            "agentId": string
            "networkId": string
            "created": timestamp
            "updated": timestamp
            "messageType": int <span color="#1b1ef7"> // 0 - my, 1 - user, 3 - system, 4 - system JSON, 6 - request JSON, 7 - endorsement JSON, 8 - activity JSON, 9 - card JSON, 100-199 - AI messages</span>
            "messageBody": string
            "messageTitle": string
            "isBlocked": bool
            "isDeleted": bool
            "attachments": [{
                "resourceId": string
                "fileName": string
                "fileSize": int
                "contentType": string
                "durationFloat": float
                "updated": timestamp
                "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
            }]
            "replyMessage": {
                "channelId": string
                "messageId": string
                "authorId": string
                "created": timestamp
                "messageType": int
                "messageBody": string
                "attachments": [{
                    "resourceId": string
                    "fileName": string
                    "fileSize": int
                    "contentType": string
                    "durationFloat": float
                    "updated": timestamp
                    "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                    "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                    "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
                }]
                "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
            }
            "forwardMessage": {
                "channelId": string
                "messageId": string
                "authorId": string
                "created": timestamp
                "messageType": int
                "messageBody": string
                "attachments": [{
                    "resourceId": string
                    "fileName": string
                    "fileSize": int
                    "contentType": string
                    "durationFloat": float
                    "updated": timestamp
                    "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                    "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                    "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
                }]
                "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
            }
            "subChannelPath": string
            "subChannelTitles": [ string ]
            "options": [ string ]
            "customParams": map[string]{ custom structure }
            "reactions": {
                "counters": [{ <span color="#1b1ef7"> // counter per reaction, in descending order</span>
                    "emoji": string
                    "count": int
                }]
                "userEmoji": string <span color="#1b1ef7"> // user's emoji reaction to the message</span>
            }
            "pollId": string
            "userPoll": {
                "poll": { <span color="#1b1ef7"> // channel's poll</span>
                    "id": string
                    "channelId": string <span color="#1b1ef7"> // the channel the poll is in</span>
                    "question": string <span color="#1b1ef7"> // question/description of the poll</span>
                    "isMultiSelect": bool <span color="#1b1ef7"> // allow the users to select multiple choices</span>
                    "isAnonymous": bool <span color="#1b1ef7"> // can users see who voted for what</span>
                    "created": timestamp <span color="#1b1ef7"> // the time when poll was created</span>
                    "closingTime": timestamp <span color="#1b1ef7"> // users cannot vote after the closing time, defaults to one day</span>
                    "options": [ string ] <span color="#1b1ef7"> // list of options which the channel users vote for</span>
                    "voteCounters": [ int ] <span color="#1b1ef7"> // calculated number of votes per option respectively</span>
                }
                "vote": { <span color="#1b1ef7"> // user's vote in the poll'</span>
                    "pollId": string
                    "userId": string
                    "options": [ string ] <span color="#1b1ef7"> // list of options the user voted for</span>
                }
            }
            "threadChannelId": string
            "threadMessageCount": int
            "viewCount": int
            "upVoteCount": int
            "downVoteCount": int
            "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
            "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
            "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
        }]
        "hasNext": bool <span color="#1b1ef7"> // true if channel has newer messages and 'afterMessageId' cursor applied</span>
        "hasPrevious": bool <span color="#1b1ef7"> // true if channel has older messages and 'afterMessageId' cursor not applied</span>
        "total": int <span color="#1b1ef7"> // total amount of channel messages</span>
        "channelSource": string <span color="#1b1ef7"> // channel source (belonging) string</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

