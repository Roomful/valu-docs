<br>

<a name="group-api"></a>

## Group API

| Endpoint | Method | Description |
|-----|-----|-----|
| [group:createGroup](#create-group) | websocket | Create group |
| [group:deleteGroup](#delete-group) | websocket | Delete group |
| [group:updateGroup](#update-group) | websocket | Update group |
| [group:getGroup](#get-group) | websocket | Get group |
| [group:getGroupMember](#get-group-member) | websocket | Get group member |
| [group:joinGroup](#join-group) | websocket | Join group |
| [group:addGroupMembers](#add-group-members) | websocket | Add group members |
| [group:deleteGroupMembers](#delete-group-members) | websocket | Delete group members |
| [group:updateMemberRole](#update-member-role) | websocket | Update member role |
| [group:searchUserGroups](#search-user-groups) | websocket | Search user groups |
| [group:searchGroupMembers](#search-group-members) | websocket | Search group members |
| [group:discoverGroups](#discover-groups-by-cbac) | websocket | Discover groups by cbac |
| [group:onGroupCreated](#on-group-created-event) | websocketEvent | On group created event |
| [group:onGroupDeleted](#on-group-deleted-event) | websocketEvent | On group deleted event |
| [group:onGroupUpdated](#on-group-updated-event) | websocketEvent | On group updated event |
| [group:onGroupMembersAdded](#on-group-members-added-event) | websocketEvent | On group members added event |
| [group:onGroupMembersDeleted](#on-group-members-deleted-event) | websocketEvent | On group members deleted event |
| [group:onGroupMemberUpdated](#on-group-member-updated-event) | websocketEvent | On group member updated event |

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
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the group has CBAC configured</span>
                "policyId": string
                "badgeIds": [ string ]
                "badgeMatchMode": string
                "grantedPermission": string
            }]
            "userId": string
            "joined": timestamp
            "groupRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
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
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the group has CBAC configured</span>
                "policyId": string
                "badgeIds": [ string ]
                "badgeMatchMode": string
                "grantedPermission": string
            }]
            "userId": string
            "joined": timestamp
            "groupRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-group-member"></a>

### Get group member

**Method:** websocket

**Endpoint:** group:getGroupMember

**Description:** Returns a single group member's role and join time. The calling user must have view access to the group.

**Request:** 

<pre>
{
    "data": {
        "groupId": string
        "userId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "userId": string
        "joined": timestamp
        "groupRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="join-group"></a>

### Join group

**Method:** websocket

**Endpoint:** group:joinGroup

**Description:** Joins the calling user to the specified group via CBAC. The user must hold a badge that satisfies CBAC policy on the target group.

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
        "groupRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
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
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the group has CBAC configured</span>
                "policyId": string
                "badgeIds": [ string ]
                "badgeMatchMode": string
                "grantedPermission": string
            }]
            "userId": string
            "joined": timestamp
            "groupRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
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
            "groupRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
            "joined": timestamp
        }]
        "cursor": string <span color="#1b1ef7"> // pagination cursor, use for fetching next page</span>
        "hasMore": bool <span color="#1b1ef7"> // indication if there are more items available for search</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="discover-groups-by-cbac"></a>

### Discover groups by cbac

**Method:** websocket

**Endpoint:** group:discoverGroups

**Description:** Returns groups that the caller can join via CBAC. Lists the caller's badges, finds all group targets reachable by those badges, and returns the matching group models with cbacPolicies populated.

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
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the group has CBAC configured</span>
                "policyId": string
                "badgeIds": [ string ]
                "badgeMatchMode": string
                "grantedPermission": string
            }]
            "userId": string
            "joined": timestamp
            "groupRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
        }]
        "cursor": string <span color="#1b1ef7"> // pagination cursor, use for fetching next page</span>
        "hasMore": bool <span color="#1b1ef7"> // indication if there are more items available for search</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-group-created-event"></a>

### On group created event

**Event:** group:onGroupCreated

**Data:** 

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
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the group has CBAC configured</span>
                "policyId": string
                "badgeIds": [ string ]
                "badgeMatchMode": string
                "grantedPermission": string
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-group-deleted-event"></a>

### On group deleted event

**Event:** group:onGroupDeleted

**Data:** 

<pre>
{
    "data": {
        "groupId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-group-updated-event"></a>

### On group updated event

**Event:** group:onGroupUpdated

**Data:** 

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
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the group has CBAC configured</span>
                "policyId": string
                "badgeIds": [ string ]
                "badgeMatchMode": string
                "grantedPermission": string
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-group-members-added-event"></a>

### On group members added event

**Event:** group:onGroupMembersAdded

**Data:** 

<pre>
{
    "data": {
        "groupId": string
        "members": [{
            "userId": string
            "joined": timestamp
            "groupRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-group-members-deleted-event"></a>

### On group members deleted event

**Event:** group:onGroupMembersDeleted

**Data:** 

<pre>
{
    "data": {
        "groupId": string
        "memberIds": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-group-member-updated-event"></a>

### On group member updated event

**Event:** group:onGroupMemberUpdated

**Data:** 

<pre>
{
    "data": {
        "groupId": string
        "member": {
            "userId": string
            "joined": timestamp
            "groupRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
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
        "avatarResourceId": string <span color="#1b1ef7"> // resource id (in case of avatar uploaded to user3DAvatar belonging)</span>
        "avatarUrl": string <span color="#1b1ef7"> // url to gbl file (Ready Player Me)</span>
        "avatarUserId": string <span color="#1b1ef7"> // user id for session recovery (Ready Player Me)</span>
    }
    "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
    "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
}
</pre>

