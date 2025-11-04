<br>

<a name="community-api"></a>

## Community API



Community API handles communities and community channels (posts and discussions).

| Endpoint | Method | Description |
|-----|-----|-----|
| [community:createCommunity](#create-community) | websocket | Create community |
| [community:deleteCommunity](#delete-community) | websocket | Delete community |
| [community:updateCommunity](#update-community) | websocket | Update community |
| [community:searchOpenCommunities](#search-open-communities) | websocket | Search open communities |
| [community:searchUserCommunities](#search-user-communities) | websocket | Search user communities |
| [community:getInfoAndSubscribe](#get-community-info-and-subscribe) | websocket | Get community info and subscribe |
| [community:joinCommunity](#join-community) | websocket | Join community |
| [community:inviteToCommunity](#invite-to-community) | websocket | Invite to community |
| [community:createCommunityChannel](#create-community-channel) | websocket | Create community channel |
| [community:deleteCommunityChannel](#delete-community-channel) | websocket | Delete community channel |
| [community:updateCommunityChannel](#update-community-channel) | websocket | Update community channel |
| [community:searchCommunityChannels](#search-community-channels) | websocket | Search community channels |
| [community:getChannelInfoAndSubscribe](#get-community-channel-info-and-subscribe) | websocket | Get community channel info and subscribe |
| ~~[community:createCommunityChannelPost](#create-community-channel-post)~~ | websocket | Create community channel post |
| ~~[community:deleteCommunityChannelPost](#delete-community-channel-post)~~ | websocket | Delete community channel post |
| ~~[community:editCommunityChannelPost](#edit-community-channel-post)~~ | websocket | Edit community channel post |
| ~~[community:listCommunityChannelPosts](#list-community-channel-posts)~~ | websocket | List community channel posts |
| ~~[community:listCommunityChannelComments](#list-community-channel-comments)~~ | websocket | List community channel comments |
| ~~[community:listCommunityChannelThreadComments](#list-community-channel-thread-comments)~~ | websocket | List community channel thread comments |
| ~~[community:setVoteForCommunityChannelPost](#set-vote-for-community-channel-post)~~ | websocket | Set vote for community channel post |
| ~~[community:setVoteForCommunityChannelComment](#set-vote-for-community-channel-comment)~~ | websocket | Set vote for community channel comment |
| ~~[community:setVoteForCommunityMessage](#set-vote-for-community-message)~~ | websocket | Set vote for community message |
| [community:onChannelCreated](#on-community-channel-created-event) | websocketEvent | On community channel created event |
| [community:onChannelDeleted](#on-community-channel-deleted-event) | websocketEvent | On community channel deleted event |
| [community:onChannelUpdated](#on-community-channel-created-updated) | websocketEvent | On community channel created updated |
| ~~[community:onChannelPostCreated](#on-community-channel-post-created-event)~~ | websocketEvent | On community channel post created event |
| ~~[community:onChannelPostDeleted](#on-community-channel-post-deleted-event)~~ | websocketEvent | On community channel post deleted event |
| ~~[community:onChannelPostUpdated](#on-community-channel-post-updated-event)~~ | websocketEvent | On community channel post updated event |

<br>

<a name="create-community"></a>

### Create community

**Method:** websocket

**Endpoint:** community:createCommunity

**Request:** 

<pre>
{
    "data": {
        "communityTitle": string
        "communitySettings": {
            "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
        }
        "thumbnailId": string <span color="#1b1ef7"> // must be pre-uploaded using upload session</span>
        "createEventsChannel": bool <span color="#1b1ef7"> // if true, automatically creates events channel for community</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "community": {
            "communityId": string
            "created": timestamp
            "networkId": string
            "thumbnailId": string
            "communityTitle": string
            "communitySettings": {
                "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
            }
            "channelCounter": int
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-community"></a>

### Delete community

**Method:** websocket

**Endpoint:** community:deleteCommunity

**Request:** 

<pre>
{
    "data": {
        "communityId": string
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

<a name="update-community"></a>

### Update community

**Method:** websocket

**Endpoint:** community:updateCommunity

**Request:** 

<pre>
{
    "data": {
        "communityId": string
        "communityTitle": string
        "communitySettings": {
            "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
        }
        "thumbnailId": string <span color="#1b1ef7"> // must be pre-uploaded using upload session</span>
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

<a name="search-open-communities"></a>

### Search open communities

**Method:** websocket

**Endpoint:** community:searchOpenCommunities

**Request:** 

<pre>
{
    "data": {
        "query": string <span color="#1b1ef7"> // search query</span>
        "afterCommunityId": string <span color="#1b1ef7"> // pagination cursor, get communities after given id</span>
        "limit": int <span color="#1b1ef7"> // max number of communities to return (1-100)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "communities": [{
            "communityId": string
            "created": timestamp
            "networkId": string
            "thumbnailId": string
            "communityTitle": string
            "communitySettings": {
                "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
            }
            "channelCounter": int
        }]
        "hasNext": bool <span color="#1b1ef7"> // there are more communities to fetch</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-user-communities"></a>

### Search user communities

**Method:** websocket

**Endpoint:** community:searchUserCommunities

**Request:** 

<pre>
{
    "data": {
        "query": string <span color="#1b1ef7"> // search query</span>
        "afterCommunityId": string <span color="#1b1ef7"> // pagination cursor, get communities after given id</span>
        "limit": int <span color="#1b1ef7"> // max number of communities to return (1-100)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "communities": [{
            "communityId": string
            "created": timestamp
            "networkId": string
            "thumbnailId": string
            "communityTitle": string
            "communitySettings": {
                "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
            }
            "channelCounter": int
        }]
        "hasNext": bool <span color="#1b1ef7"> // there are more communities to fetch</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-community-info-and-subscribe"></a>

### Get community info and subscribe

**Method:** websocket

**Endpoint:** community:getInfoAndSubscribe

**Description:** Api returns community info and subscribes user to community events.

**Request:** 

<pre>
{
    "data": {
        "communityId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "community": {
            "communityId": string
            "created": timestamp
            "networkId": string
            "thumbnailId": string
            "communityTitle": string
            "communitySettings": {
                "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
            }
            "channelCounter": int
        }
        "communityRole": string <span color="#1b1ef7"> // Admin / Participant</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="join-community"></a>

### Join community

**Method:** websocket

**Endpoint:** community:joinCommunity

**Request:** 

<pre>
{
    "data": {
        "communityId": string
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

<a name="invite-to-community"></a>

### Invite to community

**Method:** websocket

**Endpoint:** community:inviteToCommunity

**Request:** 

<pre>
{
    "data": {
        "targetUserId": string
        "communityId": string
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

<a name="create-community-channel"></a>

### Create community channel

**Method:** websocket

**Endpoint:** community:createCommunityChannel

**Request:** 

<pre>
{
    "data": {
        "communityId": string
        "title": string
        "contentDirectoryId": string <span color="#1b1ef7"> // content directory id for the channel, attachments will belong there</span>
        "settings": {
            "beneficiaryVerus": string <span color="#1b1ef7"> // identity name to receive donations</span>
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin)</span>
            "joinPolicy": string <span color="#1b1ef7"> // who can join (OpenForAll)</span>
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "channel": { <span color="#1b1ef7"> // community textchat channel</span>
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
        }
        "settings": { <span color="#1b1ef7"> // community channel settings</span>
            "beneficiaryVerus": string <span color="#1b1ef7"> // identity name to receive donations</span>
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin)</span>
            "joinPolicy": string <span color="#1b1ef7"> // who can join (OpenForAll)</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-community-channel"></a>

### Delete community channel

**Method:** websocket

**Endpoint:** community:deleteCommunityChannel

**Request:** 

<pre>
{
    "data": {
        "communityId": string
        "channelId": string
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

<a name="update-community-channel"></a>

### Update community channel

**Method:** websocket

**Endpoint:** community:updateCommunityChannel

**Request:** 

<pre>
{
    "data": {
        "communityId": string
        "channelId": string
        "title": string
        "settings": {
            "beneficiaryVerus": string <span color="#1b1ef7"> // identity name to receive donations</span>
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin)</span>
            "joinPolicy": string <span color="#1b1ef7"> // who can join (OpenForAll)</span>
        }
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

<a name="search-community-channels"></a>

### Search community channels

**Method:** websocket

**Endpoint:** community:searchCommunityChannels

**Request:** 

<pre>
{
    "data": {
        "communityId": string
        "query": string <span color="#1b1ef7"> // search query</span>
        "afterChannelId": string <span color="#1b1ef7"> // pagination cursor, get channels after this channel id</span>
        "limit": int <span color="#1b1ef7"> // max number of channels to return (1-100)</span>
    }
    "event": { "id": string, "date": timestamp }
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
        }]
        "total": int <span color="#1b1ef7"> // total amount of channels</span>
        "hasNext": bool <span color="#1b1ef7"> // there are more channels to fetch</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-community-channel-info-and-subscribe"></a>

### Get community channel info and subscribe

**Method:** websocket

**Endpoint:** community:getChannelInfoAndSubscribe

**Description:** Api returns community channel info and subscribes user to community channel events.

**Request:** 

<pre>
{
    "data": {
        "communityId": string
        "channelId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "channel": { <span color="#1b1ef7"> // community textchat channel</span>
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
        }
        "settings": { <span color="#1b1ef7"> // community channel settings</span>
            "beneficiaryVerus": string <span color="#1b1ef7"> // identity name to receive donations</span>
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin)</span>
            "joinPolicy": string <span color="#1b1ef7"> // who can join (OpenForAll)</span>
        }
        "communityRole": string <span color="#1b1ef7"> // Admin / Participant</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-community-channel-post"></a>

### Create community channel post

**Method:** websocket

**Endpoint:** community:createCommunityChannelPost

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:createMessage` instead.

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "messageBody": string <span color="#1b1ef7"> // content of message</span>
        "messageTitle": string <span color="#1b1ef7"> // message title (for posts)</span>
        "messageType": int <span color="#1b1ef7"> // type of message</span>
        "attachmentIds": [ string ] <span color="#1b1ef7"> // ids of resources that will be attached to the message (must be pre-uploaded using upload session)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "channelId": string
            "bucketId": string
            "messageId": string
            "authorId": string
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
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-community-channel-post"></a>

### Delete community channel post

**Method:** websocket

**Endpoint:** community:deleteCommunityChannelPost

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:deleteMessageFromChannel` instead.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "messageId": string
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

<a name="edit-community-channel-post"></a>

### Edit community channel post

**Method:** websocket

**Endpoint:** community:editCommunityChannelPost

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:editMessageBody` instead.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "messageId": string
        "messageBody": string
        "messageTitle": string
        "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
        "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
        "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
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

<a name="list-community-channel-posts"></a>

### List community channel posts

**Method:** websocket

**Endpoint:** community:listCommunityChannelPosts

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:listMessagesWithEngagement` instead.

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "subChannelId": string <span color="#1b1ef7"> // fetch messages sent to subchannel</span>
        "messagesFilter": string <span color="#1b1ef7"> // all/allAI/openAI/ravAI</span>
        "beforeMessageId": string <span color="#1b1ef7"> // deprecated. pagination cursor, get messages before this message id</span>
        "afterMessageId": string <span color="#1b1ef7"> // deprecated. pagination cursor, get messages after this message id</span>
        "messageId": string <span color="#1b1ef7"> // pagination cursor, skip to start from the beginning</span>
        "direction": string <span color="#1b1ef7"> // pagination direction: before (default), after, bilateral</span>
        "limit": int <span color="#1b1ef7"> // max number of messages to return (1-100)</span>
    }
    "event": { "id": string, "date": timestamp }
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
        "userVotes": map[string]int <span color="#1b1ef7"> // user votes per message id (if set)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-community-channel-comments"></a>

### List community channel comments

**Method:** websocket

**Endpoint:** community:listCommunityChannelComments

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:listMessagesWithEngagement` instead.

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "subChannelId": string <span color="#1b1ef7"> // fetch messages sent to subchannel</span>
        "messagesFilter": string <span color="#1b1ef7"> // all/allAI/openAI/ravAI</span>
        "beforeMessageId": string <span color="#1b1ef7"> // deprecated. pagination cursor, get messages before this message id</span>
        "afterMessageId": string <span color="#1b1ef7"> // deprecated. pagination cursor, get messages after this message id</span>
        "messageId": string <span color="#1b1ef7"> // pagination cursor, skip to start from the beginning</span>
        "direction": string <span color="#1b1ef7"> // pagination direction: before (default), after, bilateral</span>
        "limit": int <span color="#1b1ef7"> // max number of messages to return (1-100)</span>
    }
    "event": { "id": string, "date": timestamp }
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
        "userVotes": map[string]int <span color="#1b1ef7"> // user votes per message id (if set)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-community-channel-thread-comments"></a>

### List community channel thread comments

**Method:** websocket

**Endpoint:** community:listCommunityChannelThreadComments

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:listMessagesWithEngagement` instead.

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "subChannelId": string <span color="#1b1ef7"> // fetch messages sent to subchannel</span>
        "messagesFilter": string <span color="#1b1ef7"> // all/allAI/openAI/ravAI</span>
        "beforeMessageId": string <span color="#1b1ef7"> // deprecated. pagination cursor, get messages before this message id</span>
        "afterMessageId": string <span color="#1b1ef7"> // deprecated. pagination cursor, get messages after this message id</span>
        "messageId": string <span color="#1b1ef7"> // pagination cursor, skip to start from the beginning</span>
        "direction": string <span color="#1b1ef7"> // pagination direction: before (default), after, bilateral</span>
        "limit": int <span color="#1b1ef7"> // max number of messages to return (1-100)</span>
    }
    "event": { "id": string, "date": timestamp }
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
        "userVotes": map[string]int <span color="#1b1ef7"> // user votes per message id (if set)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-vote-for-community-channel-post"></a>

### Set vote for community channel post

**Method:** websocket

**Endpoint:** community:setVoteForCommunityChannelPost

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:setVoteForMessage` instead.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "messageId": string
        "voteStatus": int <span color="#1b1ef7"> // up = 1, down = -1, none = 0</span>
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

<a name="set-vote-for-community-channel-comment"></a>

### Set vote for community channel comment

**Method:** websocket

**Endpoint:** community:setVoteForCommunityChannelComment

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:setVoteForMessage` instead.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "messageId": string
        "voteStatus": int <span color="#1b1ef7"> // up = 1, down = -1, none = 0</span>
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

<a name="set-vote-for-community-message"></a>

### Set vote for community message

**Method:** websocket

**Endpoint:** community:setVoteForCommunityMessage

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:setVoteForMessage` instead.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "messageId": string
        "voteStatus": int <span color="#1b1ef7"> // up = 1, down = -1, none = 0</span>
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

<a name="on-community-channel-created-event"></a>

### On community channel created event

**Event:** community:onChannelCreated

**Description:** Event is triggered when a new channels is created in a community.

**Data:** 

<pre>
{
    "data": {
        "channel": { <span color="#1b1ef7"> // community textchat channel</span>
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
        }
        "settings": { <span color="#1b1ef7"> // community channel settings</span>
            "beneficiaryVerus": string <span color="#1b1ef7"> // identity name to receive donations</span>
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin)</span>
            "joinPolicy": string <span color="#1b1ef7"> // who can join (OpenForAll)</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-community-channel-deleted-event"></a>

### On community channel deleted event

**Event:** community:onChannelDeleted

**Description:** Event is triggered when a channel is deleted in a community.

**Data:** 

<pre>
{
    "data": {
        "communityId": string
        "channelId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-community-channel-created-updated"></a>

### On community channel created updated

**Event:** community:onChannelUpdated

**Description:** Event is triggered when a new channels is created in a community.

**Data:** 

<pre>
{
    "data": {
        "channel": { <span color="#1b1ef7"> // community textchat channel</span>
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
        }
        "settings": { <span color="#1b1ef7"> // community channel settings</span>
            "beneficiaryVerus": string <span color="#1b1ef7"> // identity name to receive donations</span>
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin)</span>
            "joinPolicy": string <span color="#1b1ef7"> // who can join (OpenForAll)</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-community-channel-post-created-event"></a>

### On community channel post created event

**Event:** community:onChannelPostCreated

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:onMessageCreated` instead.

**Data:** 

<pre>
{
    "data": {
        "communityId": string
        "channelId": string
        "message": {
            "channelId": string
            "bucketId": string
            "messageId": string
            "authorId": string
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
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-community-channel-post-deleted-event"></a>

### On community channel post deleted event

**Event:** community:onChannelPostDeleted

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:onMessageDeleted` instead.

**Data:** 

<pre>
{
    "data": {
        "communityId": string
        "channelId": string
        "messageId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-community-channel-post-updated-event"></a>

### On community channel post updated event

**Event:** community:onChannelPostUpdated

**<span color="red">DEPRECATED</span>** 

**Description:** Event is triggered when a message is updated in a community channel. DEPRECATED, use `channel:onMessageEdited` instead.

**Data:** 

<pre>
{
    "data": {
        "communityId": string
        "channelId": string
        "message": {
            "channelId": string
            "bucketId": string
            "messageId": string
            "authorId": string
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
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

