<br>

<a name="textchat-api"></a>

## Textchat API



Textchat API is deprecated. Use [Channel API](channel.md) instead .

| Endpoint | Method | Description |
|-----|-----|-----|
| ~~[textchat:getTextchatForRoom](#get-textchat-for-room)~~ | websocket | Get textchat for room |
| ~~[textchat:getTextchatForProp](#get-textchat-for-prop)~~ | websocket | Get textchat for prop |
| ~~[textchat:getTextchatForVideochat](#get-textchat-for-videochat)~~ | websocket | Get textchat for videochat |
| ~~[textchat:getTextchatForUser](#get-textchat-for-user-direct-textchat-)~~ | websocket | Get textchat for user (direct textchat) |
| ~~[textchat:getLastMessage](#get-last-textchat-message)~~ | websocket | Get last textchat message |
| ~~[textchat:listMessages](#list-textchat-messages)~~ | websocket | List textchat messages |
| ~~[textchat:markTextchatAsRead](#mark-textchat-as-read)~~ | websocket | Mark textchat as read |
| ~~[textchat:listTextchats](#list-textchats)~~ | websocket | List textchats |
| ~~[textchat:listRoomTextchats](#list-room-textchats)~~ | websocket | List room textchats |
| ~~[textchat:listDirectTextchats](#list-direct-textchats)~~ | websocket | List direct textchats |
| ~~[textchat:searchTextchats](#search-textchats)~~ | websocket | Search textchats |
| ~~[textchat:searchDirectTextchats](#search-direct-textchats)~~ | websocket | Search direct textchats |
| ~~[textchat:getDirectCounter](#get-unread-direct-textchat-counter)~~ | websocket | Get unread direct textchat counter |
| ~~[textchat:sendMessage](#send-textchat-message)~~ | websocket | Send textchat message |
| ~~[textchat:sendNewMessage](#send-new-textchat-message)~~ | websocket | Send new textchat message |
| ~~[textchat:editMessage](#edit-textchat-message)~~ | websocket | Edit textchat message |
| ~~[textchat:blockMessage](#block-textchat-message)~~ | websocket | Block textchat message |
| ~~[textchat:unblockMessage](#unblock-textchat-message)~~ | websocket | Unblock textchat message |
| ~~[textchat:deleteMessage](#delete-textchat-message)~~ | websocket | Delete textchat message |
| ~~[textchat:restoreMessage](#restore-textchat-message)~~ | websocket | Restore textchat message |
| ~~[textchat:sendMessageToRoom](#send-textchat-message-to-room)~~ | websocket | Send textchat message to room |
| ~~[textchat:sendMessageToVideochat](#send-textchat-message-to-videochat)~~ | websocket | Send textchat message to videochat |
| ~~[textchat:listMessagesInRoom](#list-textchat-messages-in-room)~~ | websocket | List textchat messages in room |
| ~~[textchat:listMessagesInVideochat](#list-textchat-messages-in-videochat)~~ | websocket | List textchat messages in videochat |
| ~~[textchat:setTextchatAsImportant](#set-textchat-as-important)~~ | websocket | Set textchat as important |
| ~~[textchat:setTextchatAsNotImportant](#set-textchat-as-not-important)~~ | websocket | Set textchat as not important |
| ~~[textchat:deleteTextchat](#delete-textchat)~~ | websocket | Delete textchat |
| ~~[textchat:onMessage](#on-textchat-message)~~ | websocketEvent | On textchat message |
| ~~[textchat:onMessageEdited](#on-textchat-message-edited)~~ | websocketEvent | On textchat message edited |
| ~~[textchat:onMessageBlocked](#on-textchat-message-blocked)~~ | websocketEvent | On textchat message blocked |
| ~~[textchat:onMessageUnblocked](#on-textchat-message-unblocked)~~ | websocketEvent | On textchat message unblocked |
| ~~[textchat:onMessageDeleted](#on-textchat-message-deleted)~~ | websocketEvent | On textchat message deleted |
| ~~[textchat:onMessageRestored](#on-textchat-message-restored)~~ | websocketEvent | On textchat message restored |
| ~~[textchat:onMessagesRead](#on-textchat-messages-read)~~ | websocketEvent | On textchat messages read |
| ~~[textchat:directCounterUpdated](#on-unread-direct-textchat-count-updated)~~ | websocketEvent | On unread direct textchat count updated |
| ~~[textchat:onMessageInRoom](#on-textchat-message-in-room)~~ | websocketEvent | On textchat message in room |
| ~~[textchat:onMessageInVideochat](#on-textchat-message-in-videochat)~~ | websocketEvent | On textchat message in videochat |

<br>

<a name="get-textchat-for-room"></a>

### Get textchat for room

**Method:** websocket

**Endpoint:** textchat:getTextchatForRoom

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api gets/creates textchat for room and subscribes socket to that textchat.

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
        "textchat": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
            "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
                "roomId": string
                "propId": string
                "videochatId": string
            }
            "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
            "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
            "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
            "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-textchat-for-prop"></a>

### Get textchat for prop

**Method:** websocket

**Endpoint:** textchat:getTextchatForProp

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api gets/creates textchat for prop and subscribes socket to that textchat.

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
        "textchat": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
            "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
                "roomId": string
                "propId": string
                "videochatId": string
            }
            "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
            "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
            "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
            "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-textchat-for-videochat"></a>

### Get textchat for videochat

**Method:** websocket

**Endpoint:** textchat:getTextchatForVideochat

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api gets/creates textchat for videochat and subscribes socket to that textchat.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "textchat": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
            "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
                "roomId": string
                "propId": string
                "videochatId": string
            }
            "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
            "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
            "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
            "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-textchat-for-user-direct-textchat-"></a>

### Get textchat for user (direct textchat)

**Method:** websocket

**Endpoint:** textchat:getTextchatForUser

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api gets/creates direct textchat with user and subscribes socket to that textchat. User can have textchat with himself by putting his own user id to <i>targetUser</i> field.

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
        "textchat": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
            "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
                "roomId": string
                "propId": string
                "videochatId": string
            }
            "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
            "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
            "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
            "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-last-textchat-message"></a>

### Get last textchat message

**Method:** websocket

**Endpoint:** textchat:getLastMessage

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api returns last message of textchat (does not update last read timestamp).

**Request:** 

<pre>
{
    "data": {
        "textchatId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-textchat-messages"></a>

### List textchat messages

**Method:** websocket

**Endpoint:** textchat:listMessages

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api subscribes socket to textchat events and returns list of textchat messages. 

Field `messageType` could be one of: 
* 0 - my messages 
* 1 - user messages 
* 3 - system messages 
* 4 - system json messages 

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
        "textchatId": string
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
        "messages": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
        }]
        "participants": map[string]{ <a href="#user-simple">user simple structure</a> } <span color="#1b1ef7"> // dictionary of users who participate in textchat</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="mark-textchat-as-read"></a>

### Mark textchat as read

**Method:** websocket

**Endpoint:** textchat:markTextchatAsRead

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api sets lastReadMessage to current time for textchat.

**Request:** 

<pre>
{
    "data": {
        "textchatId": string
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

<a name="list-textchats"></a>

### List textchats

**Method:** websocket

**Endpoint:** textchat:listTextchats

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api returns list of all textchats depending on filters.

Filter could be one of the following:
* important - return textchats marked as important 
* all - return all textchats 
* direct - return direct textchats 
* group - return all non-direct textchats 
* allWithinRoom - return all non-direct textchats within the room 
* rooms - return only room textchats 
* noProps - return all textchats (excluding prop textchats) 



**Request:** 

<pre>
{
    "data": {
        "filter": string
        "roomId": string <span color="#1b1ef7"> // in case if filter is set to 'allWithinRoom'</span>
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
        "textchats": [{
            "textchat": {
                "id": string
                "created": timestamp
                "updated": timestamp
                "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
                "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
                    "roomId": string
                    "propId": string
                    "videochatId": string
                }
                "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
                "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
                "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
                "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
                "unreadMessageCount": int <span color="#1b1ef7"> // current users' unread message count (direct chat only)</span>
                "lastReadMessageTime": timestamp <span color="#1b1ef7"> // current users' last read message timestamp</span>
                "isImportant": bool <span color="#1b1ef7"> // marked by user or system</span>
            }
            "opponentUser": { <span color="#1b1ef7"> // only in case if textchatMode is direct</span>
                "user": { <a href="#user-simple">user simple structure</a> }
                "lastReadMessageTime": timestamp <span color="#1b1ef7"> // opponent users' last read message timestamp</span>
            }
        }]
        "textchatCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-room-textchats"></a>

### List room textchats

**Method:** websocket

**Endpoint:** textchat:listRoomTextchats

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api returns list of textchats in the room (including prop textchats) where user have been participated. Textchats are sorted by last message time, starting from newest.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
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
        "textchats": [{
            "textchat": {
                "id": string
                "created": timestamp
                "updated": timestamp
                "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
                "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
                    "roomId": string
                    "propId": string
                    "videochatId": string
                }
                "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
                "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
                "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
                "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
                "unreadMessageCount": int <span color="#1b1ef7"> // current users' unread message count (direct chat only)</span>
                "lastReadMessageTime": timestamp <span color="#1b1ef7"> // current users' last read message timestamp</span>
                "isImportant": bool <span color="#1b1ef7"> // marked by user or system</span>
            }
            "opponentUser": { <span color="#1b1ef7"> // only in case if textchatMode is direct</span>
                "user": { <a href="#user-simple">user simple structure</a> }
                "lastReadMessageTime": timestamp <span color="#1b1ef7"> // opponent users' last read message timestamp</span>
            }
        }]
        "textchatCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-direct-textchats"></a>

### List direct textchats

**Method:** websocket

**Endpoint:** textchat:listDirectTextchats

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api returns list of direct textchats where user have been participated. Textchats are sorted by last message time, starting from newest.

**Request:** 

<pre>
{
    "data": {
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
        "textchats": [{
            "textchat": {
                "id": string
                "created": timestamp
                "updated": timestamp
                "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
                "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
                    "roomId": string
                    "propId": string
                    "videochatId": string
                }
                "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
                "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
                "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
                "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
                "unreadMessageCount": int <span color="#1b1ef7"> // current users' unread message count (direct chat only)</span>
                "lastReadMessageTime": timestamp <span color="#1b1ef7"> // current users' last read message timestamp</span>
                "isImportant": bool <span color="#1b1ef7"> // marked by user or system</span>
            }
            "opponentUser": { <span color="#1b1ef7"> // only in case if textchatMode is direct</span>
                "user": { <a href="#user-simple">user simple structure</a> }
                "lastReadMessageTime": timestamp <span color="#1b1ef7"> // opponent users' last read message timestamp</span>
            }
        }]
        "textchatCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-textchats"></a>

### Search textchats

**Method:** websocket

**Endpoint:** textchat:searchTextchats

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api returns list of all textchats depending on filters.

Filter could be one of the following:
* important - return textchats marked as important 
* all - return all textchats 
* direct - return direct textchats 
* group - return all non-direct textchats 
* allWithinRoom - return all non-direct textchats within the room 
* rooms - return only room textchats 
* noProps - return all textchats (excluding prop textchats) 



**Request:** 

<pre>
{
    "data": {
        "query": string
        "filter": string
        "roomId": string <span color="#1b1ef7"> // in case if filter is set to 'allWithinRoom'</span>
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
        "textchats": [{
            "textchat": {
                "id": string
                "created": timestamp
                "updated": timestamp
                "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
                "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
                    "roomId": string
                    "propId": string
                    "videochatId": string
                }
                "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
                "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
                "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
                "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
                "unreadMessageCount": int <span color="#1b1ef7"> // current users' unread message count (direct chat only)</span>
                "lastReadMessageTime": timestamp <span color="#1b1ef7"> // current users' last read message timestamp</span>
                "isImportant": bool <span color="#1b1ef7"> // marked by user or system</span>
            }
            "opponentUser": { <span color="#1b1ef7"> // only in case if textchatMode is direct</span>
                "user": { <a href="#user-simple">user simple structure</a> }
                "lastReadMessageTime": timestamp <span color="#1b1ef7"> // opponent users' last read message timestamp</span>
            }
        }]
        "textchatCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-direct-textchats"></a>

### Search direct textchats

**Method:** websocket

**Endpoint:** textchat:searchDirectTextchats

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api returns list of direct textchats where user have been participated. Textchats are filtered by opponent first or last name parts present in search query. Textchats are sorted by last message time, starting from newest.

**Request:** 

<pre>
{
    "data": {
        "query": string
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
        "textchats": [{
            "textchat": {
                "id": string
                "created": timestamp
                "updated": timestamp
                "textchatMode": string <span color="#1b1ef7"> // room/videochat/prop/direct</span>
                "textchatSource": { <span color="#1b1ef7"> // object textchat is related to</span>
                    "roomId": string
                    "propId": string
                    "videochatId": string
                }
                "textchatSourceType": string <span color="#1b1ef7"> // direct/room/prop/booth/social circle</span>
                "lastMessageTime": timestamp <span color="#1b1ef7"> // timestamp of last message in textchat</span>
                "title": string <span color="#1b1ef7"> // room/prop title, only in case if room/prop textchatMode</span>
                "thumbnail": string <span color="#1b1ef7"> // room/prop thumbnail resource id, only in case if room/prop textchatMode</span>
                "unreadMessageCount": int <span color="#1b1ef7"> // current users' unread message count (direct chat only)</span>
                "lastReadMessageTime": timestamp <span color="#1b1ef7"> // current users' last read message timestamp</span>
                "isImportant": bool <span color="#1b1ef7"> // marked by user or system</span>
            }
            "opponentUser": { <span color="#1b1ef7"> // only in case if textchatMode is direct</span>
                "user": { <a href="#user-simple">user simple structure</a> }
                "lastReadMessageTime": timestamp <span color="#1b1ef7"> // opponent users' last read message timestamp</span>
            }
        }]
        "textchatCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-unread-direct-textchat-counter"></a>

### Get unread direct textchat counter

**Method:** websocket

**Endpoint:** textchat:getDirectCounter

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Api returns amount of unread direct textchat channels.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "unreadTextchatCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="send-textchat-message"></a>

### Send textchat message

**Method:** websocket

**Endpoint:** textchat:sendMessage

**<span color="red">DEPRECATED</span>** 

**Description:** This endpoint is deprecated as it sends new message event to initiator socket, use textchat:sendNewMessage instead.

**Request:** 

<pre>
{
    "data": {
        "textchatId": string
        "message": string
        "messageType": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="send-new-textchat-message"></a>

### Send new textchat message

**Method:** websocket

**Endpoint:** textchat:sendNewMessage

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Request:** 

<pre>
{
    "data": {
        "textchatId": string
        "message": string
        "messageType": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="edit-textchat-message"></a>

### Edit textchat message

**Method:** websocket

**Endpoint:** textchat:editMessage

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Request:** 

<pre>
{
    "data": {
        "textchatId": string
        "messageId": string
        "message": string
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

<a name="block-textchat-message"></a>

### Block textchat message

**Method:** websocket

**Endpoint:** textchat:blockMessage

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Request:** 

<pre>
{
    "data": {
        "textchatId": string
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

<a name="unblock-textchat-message"></a>

### Unblock textchat message

**Method:** websocket

**Endpoint:** textchat:unblockMessage

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Request:** 

<pre>
{
    "data": {
        "textchatId": string
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

<a name="delete-textchat-message"></a>

### Delete textchat message

**Method:** websocket

**Endpoint:** textchat:deleteMessage

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Request:** 

<pre>
{
    "data": {
        "textchatId": string
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

<a name="restore-textchat-message"></a>

### Restore textchat message

**Method:** websocket

**Endpoint:** textchat:restoreMessage

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Request:** 

<pre>
{
    "data": {
        "textchatId": string
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

<a name="send-textchat-message-to-room"></a>

### Send textchat message to room

**Method:** websocket

**Endpoint:** textchat:sendMessageToRoom

**<span color="red">DEPRECATED</span>** 

**Description:** Api function is deprecated, use textchat:getTextchatForRoom and textchat:sendMessage instead.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "message": string
        "messageType": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="send-textchat-message-to-videochat"></a>

### Send textchat message to videochat

**Method:** websocket

**Endpoint:** textchat:sendMessageToVideochat

**<span color="red">DEPRECATED</span>** 

**Description:** Api function is deprecated, use textchat:getTextchatForVideochat and textchat:sendMessage instead.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "message": string
        "messageType": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-textchat-messages-in-room"></a>

### List textchat messages in room

**Method:** websocket

**Endpoint:** textchat:listMessagesInRoom

**<span color="red">DEPRECATED</span>** 

**Description:** Api function is deprecated, use textchat:getTextchatForRoom and textchat:listMessages instead.

**Request:** 

<pre>
{
    "data": {
        "roomId": string
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
        "messages": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
        }]
        "participants": map[string]{ <a href="#user-simple">user simple structure</a> } <span color="#1b1ef7"> // dictionary of users who participate in textchat</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-textchat-messages-in-videochat"></a>

### List textchat messages in videochat

**Method:** websocket

**Endpoint:** textchat:listMessagesInVideochat

**<span color="red">DEPRECATED</span>** 

**Description:** Api function is deprecated, use textchat:getTextchatForVideochat and textchat:listMessages instead.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
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
        "messages": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
        }]
        "participants": map[string]{ <a href="#user-simple">user simple structure</a> } <span color="#1b1ef7"> // dictionary of users who participate in textchat</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-textchat-as-important"></a>

### Set textchat as important

**Method:** websocket

**Endpoint:** textchat:setTextchatAsImportant

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Request:** 

<pre>
{
    "data": {
        "textchatId": string
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

<a name="set-textchat-as-not-important"></a>

### Set textchat as not important

**Method:** websocket

**Endpoint:** textchat:setTextchatAsNotImportant

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Request:** 

<pre>
{
    "data": {
        "textchatId": string
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

<a name="delete-textchat"></a>

### Delete textchat

**Method:** websocket

**Endpoint:** textchat:deleteTextchat

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

API deletes direct textchat.

**Request:** 

<pre>
{
    "data": {
        "textchatId": string
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

<a name="on-textchat-message"></a>

### On textchat message

**Event:** textchat:onMessage

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Data:** 

<pre>
{
    "data": {
        "textchatId": string
        "textchatMode": string
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
            "user": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-textchat-message-edited"></a>

### On textchat message edited

**Event:** textchat:onMessageEdited

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Data:** 

<pre>
{
    "data": {
        "textchatId": string
        "textchatMode": string
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
            "user": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-textchat-message-blocked"></a>

### On textchat message blocked

**Event:** textchat:onMessageBlocked

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Data:** 

<pre>
{
    "data": {
        "textchatId": string
        "textchatMode": string
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
            "user": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-textchat-message-unblocked"></a>

### On textchat message unblocked

**Event:** textchat:onMessageUnblocked

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Data:** 

<pre>
{
    "data": {
        "textchatId": string
        "textchatMode": string
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
            "user": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-textchat-message-deleted"></a>

### On textchat message deleted

**Event:** textchat:onMessageDeleted

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Data:** 

<pre>
{
    "data": {
        "textchatId": string
        "textchatMode": string
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
            "user": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-textchat-message-restored"></a>

### On textchat message restored

**Event:** textchat:onMessageRestored

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Data:** 

<pre>
{
    "data": {
        "textchatId": string
        "textchatMode": string
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
            "user": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-textchat-messages-read"></a>

### On textchat messages read

**Event:** textchat:onMessagesRead

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 



**Data:** 

<pre>
{
    "data": {
        "textchatId": string
        "userId": string
        "lastReadMessageTime": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-unread-direct-textchat-count-updated"></a>

### On unread direct textchat count updated

**Event:** textchat:directCounterUpdated

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, Use [Channel API](channel.md) instead . 

Event is triggered when counter of unread direct textchat channels is updated.

**Data:** 

<pre>
{
    "data": {
        "unreadTextchatCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-textchat-message-in-room"></a>

### On textchat message in room

**Event:** textchat:onMessageInRoom

**<span color="red">DEPRECATED</span>** 

**Description:** Api event is deprecated, use textchat:onMessage instead.

**Data:** 

<pre>
{
    "data": {
        "textchatId": string
        "textchatMode": string
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
            "user": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-textchat-message-in-videochat"></a>

### On textchat message in videochat

**Event:** textchat:onMessageInVideochat

**<span color="red">DEPRECATED</span>** 

**Description:** Api event is deprecated, use textchat:onMessage instead.

**Data:** 

<pre>
{
    "data": {
        "textchatId": string
        "textchatMode": string
        "message": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "userId": string
            "messageBody": string
            "messageType": int
            "isBlocked": bool
            "isDeleted": bool
            "user": { <a href="#user-simple">user simple structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="user-simple"></a>

#### User Simple

<pre>
{
    "id": string
    "firstName": string
    "lastName": string
    "privacyMode": int <span color="#1b1ef7"> // 0 - Default, 1 - Incognito</span>
    "avatar": string
    "avatar3D": { <span color="#1b1ef7"> // field is not returned if empty</span>
        "assetId": string
        "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
        "avatarUrl": string <span color="#1b1ef7"> // url to gbl file (Ready Player Me)</span>
        "avatarUserId": string <span color="#1b1ef7"> // user id for session recovery (Ready Player Me)</span>
    }
    "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
    "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
}
</pre>

