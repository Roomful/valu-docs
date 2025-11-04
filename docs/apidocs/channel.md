<br>

<a name="channel-api"></a>

## Channel API



Channel API handles textchat conversations between users.

| Endpoint | Method | Description |
|-----|-----|-----|
| [channel:getDirectChannel](#get-direct-channel) | websocket | Get direct channel |
| [channel:getChannelForRoom](#get-channel-for-room) | websocket | Get channel for room |
| [channel:getChannelForProp](#get-channel-for-prop) | websocket | Get channel for prop |
| [channel:getChannelForDirectAI](#get-channel-for-direct-ai) | websocket | Get channel for direct aI |
| [channel:getChannelForRoomAI](#get-channel-for-room-ai) | websocket | Get channel for room aI |
| [channel:getUserNotesChannel](#get-user-notes-channel) | websocket | Get user notes channel |
| [channel:getGroupChannel](#get-group-channel) | websocket | Get group channel |
| [channel:getChannelForCommunityPost](#get-channel-for-community-post) | websocket | Get channel for community post |
| [channel:getChannelForUserPosts](#get-channel-for-user-posts) | websocket | Get channel for user posts |
| [channel:getThreadChannelForMessage](#get-thread-channel-for-message) | websocket | Get thread channel for message |
| [channel:getChannelById](#get-channel-by-id) | websocket | Get channel by id |
| [channel:searchUserChannels](#search-user-channels) | websocket | Search user channels |
| [channel:getCountOfUnreadChannels](#get-count-of-unread-channels) | websocket | Get count of unread channels |
| [channel:setHighAlert](#set-channel-to-high-alert) | websocket | Set channel to high alert |
| [channel:pin](#pin-channel) | websocket | Pin channel |
| [channel:createMessage](#create-channel-message) | websocket | Create channel message |
| [channel:editMessageBody](#edit-channel-message-body) | websocket | Edit channel message body |
| [channel:addMessageAttachments](#add-channel-message-attachments) | websocket | Add channel message attachments |
| [channel:deleteMessageAttachments](#delete-channel-message-attachments) | websocket | Delete channel message attachments |
| [channel:blockMessage](#block-channel-message) | websocket | Block channel message |
| [channel:unblockMessage](#unblock-channel-message) | websocket | Unblock channel message |
| ~~[channel:deleteMessage](#delete-channel-message)~~ | websocket | Delete channel message |
| ~~[channel:restoreMessage](#restore-channel-message)~~ | websocket | Restore channel message |
| [channel:updateMessageDeletedStatus](#update-channel-message-deleted-status) | websocket | Update channel message deleted status |
| [channel:deleteMessageFromChannel](#delete-message-from-channel) | websocket | Delete message from channel |
| [channel:generateAIWelcomeMessage](#generate-ai-welcome-message) | websocket | Generate aI welcome message |
| [channel:getLastMessage](#get-last-channel-message) | websocket | Get last channel message |
| [channel:listMessages](#list-channel-messages) | websocket | List channel messages |
| [channel:listMessagesWithEngagement](#list-channel-messages-with-engagement) | websocket | List channel messages with engagement |
| [channel:setChannelLastReadMessage](#set-channel-last-read-message) | websocket | Set channel last read message |
| [channel:setVoteForMessage](#set-vote-for-channel-message) | websocket | Set vote for channel message |
| [channel:createPollMessage](#create-channel-poll-message) | websocket | Create channel poll message |
| [channel:postPollVote](#post-poll-vote) | websocket | Post poll vote |
| [channel:getPollStats](#get-poll-stats) | websocket | Get poll stats |
| [channel:reactToMessage](#react-to-message) | websocket | React to message |
| [channel:listUsersReactedToMessage](#list-users-reacted-to-message) | websocket | List users reacted to message |
| [channel:searchAttachmentsOfChannel](#search-attachments-of-channel) | websocket | Search attachments of channel |
| [channel:createSubChannel](#create-sub-channel) | websocket | Create sub channel |
| [channel:deleteSubChannel](#delete-sub-channel) | websocket | Delete sub channel |
| [channel:updateSubChannel](#update-sub-channel) | websocket | Update sub channel |
| [channel:listSubChannels](#list-sub-channels) | websocket | List sub channels |
| [channel:getSubChannelAndParents](#get-sub-channel-and-parents) | websocket | Get sub channel and parents |
| [channel:getZAddressesForParticipants](#get-z-addresses-for-channel-participants) | websocket | Get z addresses for channel participants |
| ~~[channel:createEncryptionEpoch](#create-channel-encryption-epoch)~~ | websocket | Create channel encryption epoch |
| ~~[channel:updateEncryptionEpoch](#update-channel-encryption-epoch)~~ | websocket | Update channel encryption epoch |
| ~~[channel:listEncryptionEpoches](#list-channel-encryption-epoches)~~ | websocket | List channel encryption epoches |
| ~~[channel:listEncryptionEpochesByTuples](#list-channel-encryption-epoches-by-tuples)~~ | websocket | List channel encryption epoches by tuples |
| ~~[channel:listEncryptionEpochesByZAddress](#list-channel-encryption-epoches-by-z-address)~~ | websocket | List channel encryption epoches by z address |
| ~~[channel:getLastEncryptionEpoch](#get-last-channel-encryption-epoch)~~ | websocket | Get last channel encryption epoch |
| [channel:requestNewEncryptionEpoch](#request-new-encryption-epoch-for-channel) | websocket | Request new encryption epoch for channel |
| [channel:onMessageCreated](#on-message-created-event) | websocketEvent | On message created event |
| [channel:onMessageDeleted](#on-message-deleted-event) | websocketEvent | On message deleted event |
| [channel:onMessageEdited](#on-message-edited-event) | websocketEvent | On message edited event |
| [channel:onMessageBlockedStatusUpdated](#on-message-blocked-status-updated-event) | websocketEvent | On message blocked status updated event |
| [channel:onMessageDeletedStatusUpdated](#on-message-deleted-status-updated-event) | websocketEvent | On message deleted status updated event |
| [channel:onMessageRead](#on-message-read-event) | websocketEvent | On message read event |
| [channel:onUnreadCountUpdated](#on-unread-count-updated-event) | websocketEvent | On unread count updated event |
| [channel:onMessageReaction](#on-message-reaction-event) | websocketEvent | On message reaction event |
| [channel:onPollVote](#on-poll-vote-event) | websocketEvent | On poll vote event |
| [channel:onSubChannelCreated](#on-sub-channel-created-event) | websocketEvent | On sub channel created event |
| [channel:onSubChannelDeleted](#on-sub-channel-deleted-event) | websocketEvent | On sub channel deleted event |
| [channel:onSubChannelUpdated](#on-sub-channel-updated-event) | websocketEvent | On sub channel updated event |
| ~~[channel:onEpochCreated](#on-channel-encryption-epoch-created-event)~~ | websocketEvent | On channel encryption epoch created event |
| [channel:onLastEpochUpdated](#on-last-epoch-updated-event) | websocketEvent | On last epoch updated event |

<br>

<a name="get-direct-channel"></a>

### Get direct channel

**Method:** websocket

**Endpoint:** channel:getDirectChannel

**Description:** Api gets/creates direct textchat channel. Api subscribes user socket to broadcast events of channel. User can have channel with himself by putting his own user id to <i>targetUser</i> field.

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
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-channel-for-room"></a>

### Get channel for room

**Method:** websocket

**Endpoint:** channel:getChannelForRoom

**Description:** Api gets/creates textchat channel for room and subscribes socket to that channel. Api subscribes user socket to broadcast events of channel.

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
    "data": {
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-channel-for-prop"></a>

### Get channel for prop

**Method:** websocket

**Endpoint:** channel:getChannelForProp

**Description:** Api gets/creates textchat channel for prop. Api subscribes user socket to broadcast events of channel.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-channel-for-direct-ai"></a>

### Get channel for direct aI

**Method:** websocket

**Endpoint:** channel:getChannelForDirectAI

**Description:** Api gets/creates channel for direct AI textchat. Api subscribes user socket to broadcast events of channel.

**Request:** 

<pre>
{
    "data": {
        "aiProvider": string <span color="#1b1ef7"> // openai/ravai</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-channel-for-room-ai"></a>

### Get channel for room aI

**Method:** websocket

**Endpoint:** channel:getChannelForRoomAI

**Description:** Api gets/creates channel for user AI textchat within room context. Api subscribes user socket to broadcast events of channel.

**Request:** 

<pre>
{
    "data": {
        "networkId": string
        "roomId": string
        "aiProvider": string <span color="#1b1ef7"> // openai/ravai</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-notes-channel"></a>

### Get user notes channel

**Method:** websocket

**Endpoint:** channel:getUserNotesChannel

**Description:** Api gets/creates textchat channel for user notes (user chat with himself). Api subscribes user socket to broadcast events of channel.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-group-channel"></a>

### Get group channel

**Method:** websocket

**Endpoint:** channel:getGroupChannel

**Description:** Api gets/creates group textchat channel. Api subscribes user socket to broadcast events of channel.

**Request:** 

<pre>
{
    "data": {
        "groupId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-channel-for-community-post"></a>

### Get channel for community post

**Method:** websocket

**Endpoint:** channel:getChannelForCommunityPost

**Description:** Api gets/creates channel for community post discussion textchat. Api subscribes user socket to broadcast events of channel.

**Request:** 

<pre>
{
    "data": {
        "communityId": string
        "channelId": string
        "postId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-channel-for-user-posts"></a>

### Get channel for user posts

**Method:** websocket

**Endpoint:** channel:getChannelForUserPosts

**Description:** Api gets/creates textchat channel for user posts (public channel of a user). Api subscribes user socket to broadcast events of channel.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-thread-channel-for-message"></a>

### Get thread channel for message

**Method:** websocket

**Endpoint:** channel:getThreadChannelForMessage

**Description:** Api gets/creates sub channel (thread) for given message. Threads are available for community posts (+comments) and user public posts (+comments). Api subscribes user socket to broadcast events of channel.

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
    "data": {
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-channel-by-id"></a>

### Get channel by id

**Method:** websocket

**Endpoint:** channel:getChannelById

**Description:** Api returns textchat channel by its id. Api subscribes user socket to broadcast events of channel.

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-user-channels"></a>

### Search user channels

**Method:** websocket

**Endpoint:** channel:searchUserChannels

**Description:** Api returns list of textchat channels depending on filters.

Api subscribes user socket to broadcast events of all channels.

Filter could be one of the following:
* all - return all channels 
* unread - return all unread channels 
* direct - return direct channels 
* group - return all non-direct channels 
* allWithinRoom - return all non-direct channels within the room 
* rooms - return only room channels 
* noProps - return all channels (excluding prop channels) 



**Request:** 

<pre>
{
    "data": {
        "channelsFilter": string <span color="#1b1ef7"> // all/group/groups/unread/direct/rooms/allWithinRoom/noProps</span>
        "query": string <span color="#1b1ef7"> // search query</span>
        "sourceId": string <span color="#1b1ef7"> // in case if filter requires some source, like roomId</span>
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

<a name="get-count-of-unread-channels"></a>

### Get count of unread channels

**Method:** websocket

**Endpoint:** channel:getCountOfUnreadChannels

**Description:** Api returns amount of unread textchat channels.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "unreadChannelCount": int <span color="#1b1ef7"> // amount of user channels with unread messages</span>
        "highAlertCount": int <span color="#1b1ef7"> // amount of user channels on high alert with unread messages'</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-channel-to-high-alert"></a>

### Set channel to high alert

**Method:** websocket

**Endpoint:** channel:setHighAlert

**Description:** Sets the selected channel on/off high alert

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "isHighAlert": bool
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

<a name="pin-channel"></a>

### Pin channel

**Method:** websocket

**Endpoint:** channel:pin

**Description:** pin/unpin user's channel

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "pin": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "channel": {
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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-channel-message"></a>

### Create channel message

**Method:** websocket

**Endpoint:** channel:createMessage

**Description:** Api creates new message in a textchat channel.

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "subChannelId": string <span color="#1b1ef7"> // subchannel id, if message is sent to subchannel</span>
        "messageBody": string <span color="#1b1ef7"> // content of message</span>
        "messageTitle": string <span color="#1b1ef7"> // message title (for posts)</span>
        "messageType": int <span color="#1b1ef7"> // type of message</span>
        "attachmentIds": [ string ] <span color="#1b1ef7"> // ids of resources that will be attached to the message (must be pre-uploaded using upload session)</span>
        "options": [ string ] <span color="#1b1ef7"> // custom options, like 'event:{eventId}'</span>
        "replyMessageId": string <span color="#1b1ef7"> // message id of origin message for reply</span>
        "forwardChannelId": string <span color="#1b1ef7"> // channel id of origin message for forward</span>
        "forwardMessageId": string <span color="#1b1ef7"> // message id of origin message for forward</span>
        "forwardBody": string <span color="#1b1ef7"> // body of forwarded message</span>
        "forwardEncryption": { <span color="#1b1ef7"> // encryption forwarded message body</span>
            "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
            "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
            "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
        }
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

<a name="edit-channel-message-body"></a>

### Edit channel message body

**Method:** websocket

**Endpoint:** channel:editMessageBody

**Description:** Api edits message body in a textchat channel.

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

<a name="add-channel-message-attachments"></a>

### Add channel message attachments

**Method:** websocket

**Endpoint:** channel:addMessageAttachments

**Description:** Api add attachments to a message in a textchat channel.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "messageId": string
        "attachmentIds": [ string ]
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

<a name="delete-channel-message-attachments"></a>

### Delete channel message attachments

**Method:** websocket

**Endpoint:** channel:deleteMessageAttachments

**Description:** Api deletes attachments from a message in a textchat channel.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "messageId": string
        "attachmentIds": [ string ]
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

<a name="block-channel-message"></a>

### Block channel message

**Method:** websocket

**Endpoint:** channel:blockMessage

**Description:** Api blocks message in a textchat channel. Only channel manager in group channel can block message.

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

<a name="unblock-channel-message"></a>

### Unblock channel message

**Method:** websocket

**Endpoint:** channel:unblockMessage

**Description:** Api unblock blocked message in a textchat channel. Only channel manager in group channel can unblock message.

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

<a name="delete-channel-message"></a>

### Delete channel message

**Method:** websocket

**Endpoint:** channel:deleteMessage

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:updateMessageDeletedStatus` instead.

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

<a name="restore-channel-message"></a>

### Restore channel message

**Method:** websocket

**Endpoint:** channel:restoreMessage

**<span color="red">DEPRECATED</span>** 

**Description:** DEPRECATED, use `channel:updateMessageDeletedStatus` instead.

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

<a name="update-channel-message-deleted-status"></a>

### Update channel message deleted status

**Method:** websocket

**Endpoint:** channel:updateMessageDeletedStatus

**Description:** Api updates deletes status for a message in a textchat channel. Only message author can restore message.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "messageId": string
        "isDeleted": bool
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

<a name="delete-message-from-channel"></a>

### Delete message from channel

**Method:** websocket

**Endpoint:** channel:deleteMessageFromChannel

**Description:** Api completely deletes message from a textchat channel. Api is available for a limited number of channel types (community and user posts).

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

<a name="generate-ai-welcome-message"></a>

### Generate aI welcome message

**Method:** websocket

**Endpoint:** channel:generateAIWelcomeMessage

**Description:** Api generates welcome message in AI textchat channel.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "messageBody": string
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

<a name="get-last-channel-message"></a>

### Get last channel message

**Method:** websocket

**Endpoint:** channel:getLastMessage

**Description:** Api returns last message of textchat channel (does not update last read timestamp).

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
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

<a name="list-channel-messages"></a>

### List channel messages

**Method:** websocket

**Endpoint:** channel:listMessages

**Description:** Api returns list of textchat channel messages. Api subscribes user socket to broadcast events of channel. 

Field `messageType` could be one of: 
* 0 - my message 
* 1 - user message 
* 3 - system message 
* 4 - system json message 
* 100 - Open AI question message 
* 101 - Open AI answer message 
* 102 - Rav AI question message 
* 103 - Rav AI answer message 

In case of system json message, parsed json is sent in message body: 

<pre> 
{ 
    "userId": string 
    "userName": string 
    "roomId": string 
    "propId": string 
    "propName": string 
    "eventType": int 
} 
</pre> 

Field `event` could be one of: 
* 1 - user entered booth 
* 2 - user wrote to booth 
* 3 - user entered social circle 
* 4 - user wrote to social circle 



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
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-channel-messages-with-engagement"></a>

### List channel messages with engagement

**Method:** websocket

**Endpoint:** channel:listMessagesWithEngagement

**Description:** Api does the same as `listMessages` but also returns user votes for messages.

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

<a name="set-channel-last-read-message"></a>

### Set channel last read message

**Method:** websocket

**Endpoint:** channel:setChannelLastReadMessage

**Description:** Api updates last read timestamp for textchat channel participant.

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

<a name="set-vote-for-channel-message"></a>

### Set vote for channel message

**Method:** websocket

**Endpoint:** channel:setVoteForMessage

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

<a name="create-channel-poll-message"></a>

### Create channel poll message

**Method:** websocket

**Endpoint:** channel:createPollMessage

**Description:** Api creates a new poll message in a textchat channel.

**Request:** 

<pre>
{
    "data": {
        "id": string
        "channelId": string <span color="#1b1ef7"> // the channel the poll is in</span>
        "question": string <span color="#1b1ef7"> // question/description of the poll</span>
        "isMultiSelect": bool <span color="#1b1ef7"> // allow the users to select multiple choices</span>
        "isAnonymous": bool <span color="#1b1ef7"> // can users see who voted for what</span>
        "created": timestamp <span color="#1b1ef7"> // the time when poll was created</span>
        "closingTime": timestamp <span color="#1b1ef7"> // users cannot vote after the closing time, defaults to one day</span>
        "options": [ string ] <span color="#1b1ef7"> // list of options which the channel users vote for</span>
        "voteCounters": [ int ] <span color="#1b1ef7"> // calculated number of votes per option respectively</span>
        "subChannelId": string <span color="#1b1ef7"> // subchannel id, if message is sent to subchannel</span>
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

<a name="post-poll-vote"></a>

### Post poll vote

**Method:** websocket

**Endpoint:** channel:postPollVote

**Description:** Api casts a vote in the poll.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "pollId": string
        "options": [ string ] <span color="#1b1ef7"> // list of options to vote</span>
        "undo": bool <span color="#1b1ef7"> // true to retract the existing vote</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "pollId": string
        "userId": string
        "options": [ string ] <span color="#1b1ef7"> // list of options the user voted for</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-poll-stats"></a>

### Get poll stats

**Method:** websocket

**Endpoint:** channel:getPollStats

**Description:** Api gets a map of user votes for non-anonymous polls.

**Request:** 

<pre>
{
    "data": {
        "pollId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "usersPerOption": map[string][ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="react-to-message"></a>

### React to message

**Method:** websocket

**Endpoint:** channel:reactToMessage

**Description:** Api sends a reaction to the specified message in a textchat channel.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "messageId": string <span color="#1b1ef7"> // id the message to send reaction to</span>
        "emoji": string <span color="#1b1ef7"> // emoji in unicode v16 string, empty string will erase the existing one.</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "channelId": string
        "messageId": string
        "reactions": {
            "counters": [{ <span color="#1b1ef7"> // counter per reaction, in descending order</span>
                "emoji": string
                "count": int
            }]
            "userEmoji": string <span color="#1b1ef7"> // user's emoji reaction to the message</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-users-reacted-to-message"></a>

### List users reacted to message

**Method:** websocket

**Endpoint:** channel:listUsersReactedToMessage

**Description:** Api returns a list of users to reacted to the specified message in a textchat channel.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "messageId": string
        "emoji": string <span color="#1b1ef7"> // users reacted with the emoji</span>
        "cursor": string <span color="#1b1ef7"> // userId, return users created after the specified userId</span>
        "limit": int <span color="#1b1ef7"> // max number of messages to return (1-100)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "userList": [{ <span color="#1b1ef7"> // list of reacted users with ascending order by userId</span>
            "channelId": string
            "bucketId": string
            "messageId": string
            "userId": string
            "emoji": string
            "created": timestamp
        }]
        "hasMore": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-attachments-of-channel"></a>

### Search attachments of channel

**Method:** websocket

**Endpoint:** channel:searchAttachmentsOfChannel

**Request:** 

<pre>
{
    "data": {
        "channelId": string
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

<a name="create-sub-channel"></a>

### Create sub channel

**Method:** websocket

**Endpoint:** channel:createSubChannel

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "parentSubChannelId": string <span color="#1b1ef7"> // parent subchannel id, if nested</span>
        "title": string <span color="#1b1ef7"> // subchannel title</span>
        "contentDirectoryId": string <span color="#1b1ef7"> // content directory id for the sub channel, attachments will belong there</span>
        "options": [ string ] <span color="#1b1ef7"> // additional options for a subchannel, like 'events' or 'booth'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "subChannel": {
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
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-sub-channel"></a>

### Delete sub channel

**Method:** websocket

**Endpoint:** channel:deleteSubChannel

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "subChannelId": string <span color="#1b1ef7"> // subchannel id</span>
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

<a name="update-sub-channel"></a>

### Update sub channel

**Method:** websocket

**Endpoint:** channel:updateSubChannel

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "subChannelId": string
        "title": string
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

<a name="list-sub-channels"></a>

### List sub channels

**Method:** websocket

**Endpoint:** channel:listSubChannels

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "parentSubChannelId": string <span color="#1b1ef7"> // parent subchannel id, if nested</span>
        "fetchNested": bool <span color="#1b1ef7"> // if false - api fetches only first level of subchannels; if true - all nested subchannels</span>
    }
    "event": { "id": string, "date": timestamp }
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

<a name="get-sub-channel-and-parents"></a>

### Get sub channel and parents

**Method:** websocket

**Endpoint:** channel:getSubChannelAndParents

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "subChannelId": string <span color="#1b1ef7"> // subchannel id</span>
    }
    "event": { "id": string, "date": timestamp }
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

<a name="get-z-addresses-for-channel-participants"></a>

### Get z addresses for channel participants

**Method:** websocket

**Endpoint:** channel:getZAddressesForParticipants

**Description:** Api returns z-addresses of channel participants.

Api is now available only for direct and group channels.

Api returns map of userId -> zAddress for all channel participants. If user does not have z-address, empty string is returned for that userId. Participants with empty zAddress would not be able to decrypt messages in the channel. Application should detect this situation and inform user about it.

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "zAddresses": map[string]string <span color="#1b1ef7"> // map of zAddresses per userIds for channel participants</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-channel-encryption-epoch"></a>

### Create channel encryption epoch

**Method:** websocket

**Endpoint:** channel:createEncryptionEpoch

**<span color="red">DEPRECATED</span>** 

**Description:** Api creates new epoch for channel message encryption. Client application need to provide encrypted viewing key for each channel participant.

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "channelZAddress": string <span color="#1b1ef7"> // channel zAddress for epoch</span>
        "participants": [{ <span color="#1b1ef7"> // channel participants and viewing keys for epoch</span>
            "userId": string <span color="#1b1ef7"> // participant user id</span>
            "userZAddress": string <span color="#1b1ef7"> // participant zAddress for epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of channel epoch encrypted for participant</span>
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
            "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
            "channelZAddress": string <span color="#1b1ef7"> // channel zAddress for epoch</span>
            "epoch": int <span color="#1b1ef7"> // channel epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-channel-encryption-epoch"></a>

### Update channel encryption epoch

**Method:** websocket

**Endpoint:** channel:updateEncryptionEpoch

**<span color="red">DEPRECATED</span>** 

**Description:** Api updates epoch for participant in channel. This is useful in case when user has changed his zAddress and wants to update viewing keys correspondingly.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "epoch": int
        "userZAddress": string <span color="#1b1ef7"> // participant zAddress for epoch</span>
        "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
        "vkCypher": string <span color="#1b1ef7"> // viewing key of channel epoch encrypted for participant</span>
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

<a name="list-channel-encryption-epoches"></a>

### List channel encryption epoches

**Method:** websocket

**Endpoint:** channel:listEncryptionEpoches

**<span color="red">DEPRECATED</span>** 

**Description:** Api returns list of all epoches for provided channel.

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "epoches": [{
            "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
            "channelZAddress": string <span color="#1b1ef7"> // channel zAddress for epoch</span>
            "epoch": int <span color="#1b1ef7"> // channel epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
            "userId": string <span color="#1b1ef7"> // participant user id</span>
            "userZAddress": string <span color="#1b1ef7"> // participant zAddress for epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of channel epoch encrypted for participant</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-channel-encryption-epoches-by-tuples"></a>

### List channel encryption epoches by tuples

**Method:** websocket

**Endpoint:** channel:listEncryptionEpochesByTuples

**<span color="red">DEPRECATED</span>** 

**Description:** Api returns list of epoches for provided channels-epoch tuples.

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
            "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
            "channelZAddress": string <span color="#1b1ef7"> // channel zAddress for epoch</span>
            "epoch": int <span color="#1b1ef7"> // channel epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
            "userId": string <span color="#1b1ef7"> // participant user id</span>
            "userZAddress": string <span color="#1b1ef7"> // participant zAddress for epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of channel epoch encrypted for participant</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-channel-encryption-epoches-by-z-address"></a>

### List channel encryption epoches by z address

**Method:** websocket

**Endpoint:** channel:listEncryptionEpochesByZAddress

**<span color="red">DEPRECATED</span>** 

**Description:** Api returns list of epoches for provided user zAddress.

**Request:** 

<pre>
{
    "data": {
        "zAddress": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "epoches": [{
            "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
            "channelZAddress": string <span color="#1b1ef7"> // channel zAddress for epoch</span>
            "epoch": int <span color="#1b1ef7"> // channel epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
            "userId": string <span color="#1b1ef7"> // participant user id</span>
            "userZAddress": string <span color="#1b1ef7"> // participant zAddress for epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of channel epoch encrypted for participant</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-last-channel-encryption-epoch"></a>

### Get last channel encryption epoch

**Method:** websocket

**Endpoint:** channel:getLastEncryptionEpoch

**<span color="red">DEPRECATED</span>** 

**Description:** Api returns last epoch for participant in channel.

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "epoch": {
            "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
            "channelZAddress": string <span color="#1b1ef7"> // channel zAddress for epoch</span>
            "epoch": int <span color="#1b1ef7"> // channel epoch number</span>
            "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
            "userId": string <span color="#1b1ef7"> // participant user id</span>
            "userZAddress": string <span color="#1b1ef7"> // participant zAddress for epoch</span>
            "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
            "vkCypher": string <span color="#1b1ef7"> // viewing key of channel epoch encrypted for participant</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="request-new-encryption-epoch-for-channel"></a>

### Request new encryption epoch for channel

**Method:** websocket

**Endpoint:** channel:requestNewEncryptionEpoch

**Description:** Api marks channel as needing new encryption epoch.

**Request:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
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

<a name="on-message-created-event"></a>

### On message created event

**Event:** channel:onMessageCreated

**Description:** Event is triggered when a new message is created in a channel.

**Data:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "channelSource": string <span color="#1b1ef7"> // channel source (belonging) string</span>
        "message": { <span color="#1b1ef7"> // message model</span>
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
        "isLastMessage": bool <span color="#1b1ef7"> // true, if the last message in the channel</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-message-deleted-event"></a>

### On message deleted event

**Event:** channel:onMessageDeleted

**Description:** Event is triggered when message is deleted from a channel.

**Data:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "channelSource": string <span color="#1b1ef7"> // channel source (belonging) string</span>
        "messageId": string <span color="#1b1ef7"> // message id</span>
        "isLastMessage": bool <span color="#1b1ef7"> // true, if the last message in the channel</span>
        "subChannelPath": string <span color="#1b1ef7"> // ids of parent subchannels (if present)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-message-edited-event"></a>

### On message edited event

**Event:** channel:onMessageEdited

**Description:** Event is triggered when message body is updated in a channel.

**Data:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "channelSource": string <span color="#1b1ef7"> // channel source (belonging) string</span>
        "message": { <span color="#1b1ef7"> // message model</span>
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
        "isLastMessage": bool <span color="#1b1ef7"> // true, if the last message in the channel</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-message-blocked-status-updated-event"></a>

### On message blocked status updated event

**Event:** channel:onMessageBlockedStatusUpdated

**Description:** Event is triggered when message blocked status updated in a channel.

**Data:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "channelSource": string <span color="#1b1ef7"> // channel source (belonging) string</span>
        "message": { <span color="#1b1ef7"> // message model</span>
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
        "isLastMessage": bool <span color="#1b1ef7"> // true, if the last message in the channel</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-message-deleted-status-updated-event"></a>

### On message deleted status updated event

**Event:** channel:onMessageDeletedStatusUpdated

**Description:** Event is triggered when message deleted status updated in a channel.

**Data:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "channelSource": string <span color="#1b1ef7"> // channel source (belonging) string</span>
        "message": { <span color="#1b1ef7"> // message model</span>
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
        "isLastMessage": bool <span color="#1b1ef7"> // true, if the last message in the channel</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-message-read-event"></a>

### On message read event

**Event:** channel:onMessageRead

**Description:** Event is triggered when a user requests a message that has been previously not read by him.

**Data:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "channelSource": string <span color="#1b1ef7"> // channel source (belonging) string</span>
        "userId": string <span color="#1b1ef7"> // participant user id</span>
        "lastReadTs": timestamp <span color="#1b1ef7"> // participant last read message timestamp</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-unread-count-updated-event"></a>

### On unread count updated event

**Event:** channel:onUnreadCountUpdated

**Description:** Event is triggered when counter of unread channels for user is updated.

**Data:** 

<pre>
{
    "data": {
        "unreadChannelCount": int <span color="#1b1ef7"> // amount of user channels with unread messages</span>
        "highAlertCount": int <span color="#1b1ef7"> // amount of user channels on high alert with unread messages'</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-message-reaction-event"></a>

### On message reaction event

**Event:** channel:onMessageReaction

**Description:** Event is triggered when a new reaction is added to a message

**Data:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "channelSource": string <span color="#1b1ef7"> // channel source (belonging) string</span>
        "messageId": string <span color="#1b1ef7"> // message id</span>
        "userId": string <span color="#1b1ef7"> // participant's' user id who reacted to the message</span>
        "reactions": { <span color="#1b1ef7"> // updated reactions</span>
            "counters": [{ <span color="#1b1ef7"> // counter per reaction, in descending order</span>
                "emoji": string
                "count": int
            }]
            "userEmoji": string <span color="#1b1ef7"> // user's emoji reaction to the message</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-poll-vote-event"></a>

### On poll vote event

**Event:** channel:onPollVote

**Description:** Event is triggered when someone votes in a channel poll.

**Data:** 

<pre>
{
    "data": {
        "channelId": string
        "channelSource": string
        "poll": {
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
        "userVote": { <span color="#1b1ef7"> // optional, specified only if the poll is not anonymous</span>
            "userId": string
            "option": [ string ]
            "undo": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-sub-channel-created-event"></a>

### On sub channel created event

**Event:** channel:onSubChannelCreated

**Description:** Event is triggered when sub channel is created within channel.

**Data:** 

<pre>
{
    "data": {
        "subChannel": {
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
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-sub-channel-deleted-event"></a>

### On sub channel deleted event

**Event:** channel:onSubChannelDeleted

**Description:** Event is triggered when sub channel is deleted within channel.

**Data:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "subChannelId": string <span color="#1b1ef7"> // subchannel id</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-sub-channel-updated-event"></a>

### On sub channel updated event

**Event:** channel:onSubChannelUpdated

**Description:** Event is triggered when sub channel is updated within channel.

**Data:** 

<pre>
{
    "data": {
        "subChannel": {
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
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-channel-encryption-epoch-created-event"></a>

### On channel encryption epoch created event

**Event:** channel:onEpochCreated

**<span color="red">DEPRECATED</span>** 

**Description:** Event is triggered when new epoch is created within channel.

**Data:** 

<pre>
{
    "data": {
        "channelId": string <span color="#1b1ef7"> // textchat channel id</span>
        "channelZAddress": string <span color="#1b1ef7"> // channel zAddress for epoch</span>
        "epoch": int <span color="#1b1ef7"> // channel epoch number</span>
        "created": timestamp <span color="#1b1ef7"> // epoch creation time</span>
        "userId": string <span color="#1b1ef7"> // participant user id</span>
        "userZAddress": string <span color="#1b1ef7"> // participant zAddress for epoch</span>
        "vkEpk": string <span color="#1b1ef7"> // ephemeral public key for viewing key decryption</span>
        "vkCypher": string <span color="#1b1ef7"> // viewing key of channel epoch encrypted for participant</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-last-epoch-updated-event"></a>

### On last epoch updated event

**Event:** channel:onLastEpochUpdated

**Description:** Event is triggered when epoch info is changed in channel model (requested or created new epoch).

**Data:** 

<pre>
{
    "data": {
        "channelId": string
        "lastEpoch": int <span color="#1b1ef7"> // last encryption epoch number for a channel</span>
        "needNewEpoch": bool <span color="#1b1ef7"> // flag to point that channel encryption epoch should be changed on next message</span>
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

