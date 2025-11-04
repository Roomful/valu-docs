<br>

<a name="group-api"></a>

## Group API

| Endpoint | Method | Description |
|-----|-----|-----|
| [group:createGroup](#create-group) | websocket | Create group |
| [group:deleteGroup](#delete-group) | websocket | Delete group |
| [group:updateGroup](#update-group) | websocket | Update group |
| [group:getGroup](#get-group) | websocket | Get group |
| [group:addGroupMembers](#add-group-members) | websocket | Add group members |
| [group:deleteGroupMembers](#delete-group-members) | websocket | Delete group members |
| [group:updateMemberRole](#update-member-role) | websocket | Update member role |
| [group:searchUserGroups](#search-user-groups) | websocket | Search user groups |
| [group:searchGroupMembers](#search-group-members) | websocket | Search group members |

<br>

<a name="create-group"></a>

### Create group

**Method:** websocket

**Endpoint:** group:createGroup

**Request:** 

<pre>
{
    "data": {
        "groupName": string
        "groupType": uint32
        "thumbnailId": string
        "memberUserIds": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "group": {
            "groupId": string
            "groupName": string
            "groupType": uint32
            "created": timestamp
            "networkId": string
            "thumbnailId": string
            "membersCount": int
            "userId": string
            "joined": timestamp
            "groupRole": string <span color="#1b1ef7"> // Admin / Participant</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-group"></a>

### Delete group

**Method:** websocket

**Endpoint:** group:deleteGroup

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
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-group"></a>

### Update group

**Method:** websocket

**Endpoint:** group:updateGroup

**Request:** 

<pre>
{
    "data": {
        "groupId": string
        "groupName": string
        "groupType": uint32
        "thumbnailId": string
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

<a name="get-group"></a>

### Get group

**Method:** websocket

**Endpoint:** group:getGroup

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
        "group": {
            "groupId": string
            "groupName": string
            "groupType": uint32
            "created": timestamp
            "networkId": string
            "thumbnailId": string
            "membersCount": int
            "userId": string
            "joined": timestamp
            "groupRole": string <span color="#1b1ef7"> // Admin / Participant</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="add-group-members"></a>

### Add group members

**Method:** websocket

**Endpoint:** group:addGroupMembers

**Request:** 

<pre>
{
    "data": {
        "groupId": string
        "memberUserIds": [ string ]
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

<a name="delete-group-members"></a>

### Delete group members

**Method:** websocket

**Endpoint:** group:deleteGroupMembers

**Request:** 

<pre>
{
    "data": {
        "groupId": string
        "memberUserIds": [ string ]
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

<a name="update-member-role"></a>

### Update member role

**Method:** websocket

**Endpoint:** group:updateMemberRole

**Request:** 

<pre>
{
    "data": {
        "groupId": string
        "memberId": string
        "groupRole": string <span color="#1b1ef7"> // Admin / Participant</span>
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

<a name="search-user-groups"></a>

### Search user groups

**Method:** websocket

**Endpoint:** group:searchUserGroups

**Request:** 

<pre>
{
    "data": {
        "query": string <span color="#1b1ef7"> // search query</span>
        "cursor": string <span color="#1b1ef7"> // pagination cursor, skip previous search results</span>
        "limit": int <span color="#1b1ef7"> // maximum amount to return</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "searchResult": [{
            "groupId": string
            "groupName": string
            "groupType": uint32
            "created": timestamp
            "networkId": string
            "thumbnailId": string
            "membersCount": int
            "userId": string
            "joined": timestamp
            "groupRole": string <span color="#1b1ef7"> // Admin / Participant</span>
        }]
        "cursor": string <span color="#1b1ef7"> // pagination cursor, use for fetching next page</span>
        "hasMore": bool <span color="#1b1ef7"> // indication if there are more items available for search</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-group-members"></a>

### Search group members

**Method:** websocket

**Endpoint:** group:searchGroupMembers

**Request:** 

<pre>
{
    "data": {
        "groupId": string
        "query": string <span color="#1b1ef7"> // search query</span>
        "cursor": string <span color="#1b1ef7"> // pagination cursor, skip previous search results</span>
        "limit": int <span color="#1b1ef7"> // maximum amount to return</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "searchResult": [{
            "user": { <a href="#user-simple">user simple structure</a> }
            "groupRole": string <span color="#1b1ef7"> // Admin / Participant</span>
            "joined": timestamp
        }]
        "cursor": string <span color="#1b1ef7"> // pagination cursor, use for fetching next page</span>
        "hasMore": bool <span color="#1b1ef7"> // indication if there are more items available for search</span>
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

