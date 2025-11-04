<br>

<a name="social-api"></a>

## Social API

| Endpoint | Method | Description |
|-----|-----|-----|
| [social:sendRequest](#send-friend-request) | websocket | Send friend request |
| [social:acceptRequest](#accept-friend-request) | websocket | Accept friend request |
| [social:declineRequest](#decline-friend-request) | websocket | Decline friend request |
| [social:deleteRequest](#delete-friend-request) | websocket | Delete friend request |
| ~~[social:searchFriends](#search-friends)~~ | websocket | Search friends |
| [social:searchUserFriends](#search-user-friends) | websocket | Search user friends |
| [social:deleteFriend](#delete-friend) | websocket | Delete friend |
| [social:searchUsers](#search-users) | websocket | Search users |
| [social:searchSimpleUsers](#search-simple-users) | websocket | Search simple users |
| [social:searchUsersByContacts](#search-users-by-contacts) | websocket | Search users by contacts |
| [social:getUserSimpleInfo](#get-user-simple-info) | websocket | Get user simple info |
| [social:getUserByVerusName](#get-user-by-verus-name) | websocket | Get user by verus name |
| [social:getUserByVerusIAddress](#get-user-by-verus-i-address) | websocket | Get user by verus i address |
| [social:getVerusIdentityOfUser](#get-verus-identity-of-user) | websocket | Get verus identity of user |
| [social:getUserProfileInfo](#get-user-profile-info) | websocket | Get user profile info |
| [social:getUsersSimpleInfo](#get-users-simple-info) | websocket | Get users simple info |
| [social:getSuggestedFriends](#get-suggested-friends) | websocket | Get suggested friends |
| [social:emailFriendRequest](#friend-request-by-email) | websocket | Friend request by email |
| [social:shareContactsWithUser](#share-contacts-with-user) | websocket | Share contacts with user |
| [social:shareContactsWithBoothOwners](#share-contacts-with-booth-owners) | websocket | Share contacts with booth owners |
| [social:followUser](#follow-user) | websocket | Follow user |
| [social:unfollowUser](#unfollow-user) | websocket | Unfollow user |
| [social:searchUserFollowers](#search-user-followers) | websocket | Search user followers |
| [social:searchUserFollowings](#search-user-followings) | websocket | Search user followings |
| [social:friendDeleted](#friend-deleted-event) | websocketEvent | Friend deleted event |
| [social:followingStatusChanged](#following-status-changed-event) | websocketEvent | Following status changed event |

<br>

<a name="send-friend-request"></a>

### Send friend request

**Method:** websocket

**Endpoint:** social:sendRequest

**Description:** Api does not create duplicated requests. It ignores request if it was sent before. It accepts request if it was received before. It returns 4003 status code if users are already friends.

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
        "targetUser": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="accept-friend-request"></a>

### Accept friend request

**Method:** websocket

**Endpoint:** social:acceptRequest

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="decline-friend-request"></a>

### Decline friend request

**Method:** websocket

**Endpoint:** social:declineRequest

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-friend-request"></a>

### Delete friend request

**Method:** websocket

**Endpoint:** social:deleteRequest

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-friends"></a>

### Search friends

**Method:** websocket

**Endpoint:** social:searchFriends

**<span color="red">DEPRECATED</span>** 

**Description:** Deprecated, use social:searchUserFriends instead.

**Request:** 

<pre>
{
    "data": {
        "forUser": string
        "query": string
        "exclude": [ string ]
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
        "friends": [{ <a href="#user-simple">user simple structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-user-friends"></a>

### Search user friends

**Method:** websocket

**Endpoint:** social:searchUserFriends

**Description:** Friend list is ordered by first, last name

**Request:** 

<pre>
{
    "data": {
        "forUser": string
        "query": string
        "exclude": [ string ]
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
        "users": [{
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
            "isFriend": bool
            "friendRequestSent": bool
            "friendRequestReceived": bool
            "follow": bool
        }]
        "total": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-friend"></a>

### Delete friend

**Method:** websocket

**Endpoint:** social:deleteFriend

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
        "targetUser": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-users"></a>

### Search users

**Method:** websocket

**Endpoint:** social:searchUsers

**Description:** API returns list of users found by provided query. API additionally requests publicRoomCount and contactCount for each resulting user. Use `social:searchSimpleUsers` if counts are not required.

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
        "users": [{
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
            "publicRoomCount": int
            "contactCount": int
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-simple-users"></a>

### Search simple users

**Method:** websocket

**Endpoint:** social:searchSimpleUsers

**Description:** API returns list of users found by provided query.

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
        "users": [{ <a href="#user-simple">user simple structure</a> }]
        "total": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-users-by-contacts"></a>

### Search users by contacts

**Method:** websocket

**Endpoint:** social:searchUsersByContacts

**Request:** 

<pre>
{
    "data": {
        "email": [ string ]
        "phone": [ string ]
        "facebook": [ string(fbAppId:fbUserId) ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "users": [{ <a href="#user-simple">user simple structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-simple-info"></a>

### Get user simple info

**Method:** websocket

**Endpoint:** social:getUserSimpleInfo

**Description:** Returns simple user info.

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
        "user": { <a href="#user-simple">user simple structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-by-verus-name"></a>

### Get user by verus name

**Method:** websocket

**Endpoint:** social:getUserByVerusName

**Description:** Returns simple user info by verus name.

**Request:** 

<pre>
{
    "data": {
        "verusName": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "user": { <a href="#user-simple">user simple structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-by-verus-i-address"></a>

### Get user by verus i address

**Method:** websocket

**Endpoint:** social:getUserByVerusIAddress

**Description:** Returns simple user info by verus identity IAddress.

**Request:** 

<pre>
{
    "data": {
        "verusIAddress": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "user": { <a href="#user-simple">user simple structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-verus-identity-of-user"></a>

### Get verus identity of user

**Method:** websocket

**Endpoint:** social:getVerusIdentityOfUser

**Description:** Returns Verus identity by user id.

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
        "identity": string
        "iAddress": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-profile-info"></a>

### Get user profile info

**Method:** websocket

**Endpoint:** social:getUserProfileInfo

**Description:** Returns extended user info for profile page. 

Counts user visit, subtracts token from source user and adds token to target user.

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
        "user": {
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
            "isFriend": bool
            "friendRequestSent": bool
            "friendRequestReceived": bool
            "sharedEmail": string
            "sharedPhone": string
            "follow": bool
            "birthday": string
            "hometown": string
            "education": string
            "description": string
            "linkUrl": string
            "identityType": int <span color="#1b1ef7"> // 0 - Not Assigned, 1 - SSID, 2 - VSSID</span>
            "identityName": string <span color="#1b1ef7"> // Verus identity name</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-users-simple-info"></a>

### Get users simple info

**Method:** websocket

**Endpoint:** social:getUsersSimpleInfo

**Description:** Returns list of simple user infos.

**Request:** 

<pre>
{
    "data": {
        "ids": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "users": [{ <a href="#user-simple">user simple structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-suggested-friends"></a>

### Get suggested friends

**Method:** websocket

**Endpoint:** social:getSuggestedFriends

**Description:** Returns users that have most friends in common with current user. If suggested friend list is empty - returns social:searchUsers result.

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
        "users": [{
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
            "isFriend": bool
            "friendRequestSent": bool
            "friendRequestReceived": bool
            "common": int
            "follow": bool
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="friend-request-by-email"></a>

### Friend request by email

**Method:** websocket

**Endpoint:** social:emailFriendRequest

**Description:** Function sends friend request email to target address. In addition, if target user exists - creates friend request.

**Request:** 

<pre>
{
    "data": {
        "email": string
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

<a name="share-contacts-with-user"></a>

### Share contacts with user

**Method:** websocket

**Endpoint:** social:shareContactsWithUser

**Description:** UserA can share its contacts (email/phone) with UserB, so UserB could see this data in UserA profile page.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "shareEmail": bool
        "sharePhone": bool
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

<a name="share-contacts-with-booth-owners"></a>

### Share contacts with booth owners

**Method:** websocket

**Endpoint:** social:shareContactsWithBoothOwners

**Description:** Api sends email to booth owners with current user information (email, first/last name, company name/title)

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
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

<a name="follow-user"></a>

### Follow user

**Method:** websocket

**Endpoint:** social:followUser

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="unfollow-user"></a>

### Unfollow user

**Method:** websocket

**Endpoint:** social:unfollowUser

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-user-followers"></a>

### Search user followers

**Method:** websocket

**Endpoint:** social:searchUserFollowers

**Description:** Api returns people who are following current user.

**Request:** 

<pre>
{
    "data": {
        "forUser": string
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
        "users": [{
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
            "isFriend": bool
            "friendRequestSent": bool
            "friendRequestReceived": bool
            "follow": bool
        }]
        "total": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-user-followings"></a>

### Search user followings

**Method:** websocket

**Endpoint:** social:searchUserFollowings

**Description:** Api returns people who are being followed by current user.

**Request:** 

<pre>
{
    "data": {
        "forUser": string
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
        "users": [{
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
            "isFriend": bool
            "friendRequestSent": bool
            "friendRequestReceived": bool
            "follow": bool
        }]
        "total": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="friend-deleted-event"></a>

### Friend deleted event

**Event:** social:friendDeleted

**Data:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="following-status-changed-event"></a>

### Following status changed event

**Event:** social:followingStatusChanged

**Data:** 

<pre>
{
    "data": {
        "userId": string
        "targetUserId": string
        "isFollowing": bool
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

