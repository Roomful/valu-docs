<br>

<a name="community-api"></a>

## Community API



Community API handles communities and community channels (posts and discussions).

| Endpoint | Method | Description |
|-----|-----|-----|
| [community:createCommunity](#create-community) | websocket | Create community |
| [community:deleteCommunity](#delete-community) | websocket | Delete community |
| [community:updateCommunity](#update-community) | websocket | Update community |
| [community:searchCommunities](#search-communities) | websocket | Search communities |
| [community:searchCommunitiesForCMS](#search-communities-for-cms) | websocket | Search communities for cMS |
| ~~[community:searchOpenCommunities](#search-open-communities)~~ | websocket | Search open communities |
| ~~[community:searchUserCommunities](#search-user-communities)~~ | websocket | Search user communities |
| [community:getInfoAndSubscribe](#get-community-info-and-subscribe) | websocket | Get community info and subscribe |
| [community:joinCommunity](#join-community) | websocket | Join community |
| [community:leaveCommunity](#leave-community) | websocket | Leave community |
| [community:inviteToCommunity](#invite-to-community) | websocket | Invite to community |
| [community:cancelCommunityInvitationRequest](#cancel-community-invitation-request) | websocket | Cancel community invitation request |
| [community:updateCommunityParticipant](#update-community-participant) | websocket | Update community participant |
| [community:deleteCommunityParticipant](#delete-community-participant) | websocket | Delete community participant |
| [community:transferCommunityOwnership](#transfer-community-ownership) | websocket | Transfer community ownership |
| [community:searchCommunityParticipants](#search-community-participants) | websocket | Search community participants |
| [community:searchPendingCommunityParticipants](#search-pending-community-participants) | websocket | Search pending community participants |
| [community:requestCommunityJoin](#request-community-join) | websocket | Request community join |
| [community:cancelCommunityJoinRequest](#cancel-community-join-request) | websocket | Cancel community join request |
| [community:acceptCommunityJoinRequest](#accept-community-join-request) | websocket | Accept community join request |
| [community:declineCommunityJoinRequest](#decline-community-join-request) | websocket | Decline community join request |
| [community:searchPendingCommunityJoinRequests](#search-pending-community-join-requests) | websocket | Search pending community join requests |
| [community:pinCommunity](#pin-community) | websocket | Pin community |
| [community:unpinCommunity](#unpin-community) | websocket | Unpin community |
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
        "description": string
        "color": string
        "communitySettings": {
            "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
            "isDiscoverable": bool
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
            "ownerId": string
            "thumbnailId": string
            "communityTitle": string
            "description": string
            "color": string
            "communitySettings": {
                "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
                "isDiscoverable": bool
            }
            "channelCounter": int <span color="#1b1ef7"> // total amount of channels in a community</span>
            "participantCount": int <span color="#1b1ef7"> // total amount of participants in a community</span>
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the community has CBAC configured</span>
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
        "description": string
        "color": string
        "communitySettings": {
            "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
            "isDiscoverable": bool
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

<a name="search-communities"></a>

### Search communities

**Method:** websocket

**Endpoint:** community:searchCommunities

**Request:** 

<pre>
{
    "data": {
        "query": string <span color="#1b1ef7"> // search query</span>
        "filter": string <span color="#1b1ef7"> // discoverable / discoverableNoJoined / open / joined / pinned / recent / recentNoPinned (default: discoverable)</span>
        "cursor": string <span color="#1b1ef7"> // pagination cursor</span>
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
            "ownerId": string
            "thumbnailId": string
            "communityTitle": string
            "description": string
            "color": string
            "communitySettings": {
                "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
                "isDiscoverable": bool
            }
            "channelCounter": int <span color="#1b1ef7"> // total amount of channels in a community</span>
            "participantCount": int <span color="#1b1ef7"> // total amount of participants in a community</span>
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the community has CBAC configured</span>
                "policyId": string
                "badgeIds": [ string ]
                "badgeMatchMode": string
                "grantedPermission": string
            }]
            "joinStatus": string <span color="#1b1ef7"> // none / joined / requestPending / invited</span>
        }]
        "nextCursor": string <span color="#1b1ef7"> // pagination cursor for next page, empty if no more pages</span>
        "total": int <span color="#1b1ef7"> // total communities matching the search query and filter</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-communities-for-cms"></a>

### Search communities for cMS

**Method:** websocket

**Endpoint:** community:searchCommunitiesForCMS

**Description:** Same as community:searchCommunities, but additionally returns indexation state (filled by RAG) of each returned community's community:{communityId} belonging, keyed by communityId.

**Request:** 

<pre>
{
    "data": {
        "query": string <span color="#1b1ef7"> // search query</span>
        "filter": string <span color="#1b1ef7"> // discoverable / discoverableNoJoined / open / joined / pinned / recent / recentNoPinned (default: discoverable)</span>
        "cursor": string <span color="#1b1ef7"> // pagination cursor</span>
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
            "ownerId": string
            "thumbnailId": string
            "communityTitle": string
            "description": string
            "color": string
            "communitySettings": {
                "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
                "isDiscoverable": bool
            }
            "channelCounter": int <span color="#1b1ef7"> // total amount of channels in a community</span>
            "participantCount": int <span color="#1b1ef7"> // total amount of participants in a community</span>
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the community has CBAC configured</span>
                "policyId": string
                "badgeIds": [ string ]
                "badgeMatchMode": string
                "grantedPermission": string
            }]
            "joinStatus": string <span color="#1b1ef7"> // none / joined / requestPending / invited</span>
        }]
        "nextCursor": string <span color="#1b1ef7"> // pagination cursor for next page, empty if no more pages</span>
        "total": int <span color="#1b1ef7"> // total communities matching the search query and filter</span>
        "indexStates": map[string]{ <span color="#1b1ef7"> // maps communityId to indexation state of its community:{communityId} belonging</span>
            "belongingKey": string
            "state": map[string]{ custom structure }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-open-communities"></a>

### Search open communities

**Method:** websocket

**Endpoint:** community:searchOpenCommunities

**<span color="red">DEPRECATED</span>** 

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
            "ownerId": string
            "thumbnailId": string
            "communityTitle": string
            "description": string
            "color": string
            "communitySettings": {
                "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
                "isDiscoverable": bool
            }
            "channelCounter": int <span color="#1b1ef7"> // total amount of channels in a community</span>
            "participantCount": int <span color="#1b1ef7"> // total amount of participants in a community</span>
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the community has CBAC configured</span>
                "policyId": string
                "badgeIds": [ string ]
                "badgeMatchMode": string
                "grantedPermission": string
            }]
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

**<span color="red">DEPRECATED</span>** 

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
            "ownerId": string
            "thumbnailId": string
            "communityTitle": string
            "description": string
            "color": string
            "communitySettings": {
                "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
                "isDiscoverable": bool
            }
            "channelCounter": int <span color="#1b1ef7"> // total amount of channels in a community</span>
            "participantCount": int <span color="#1b1ef7"> // total amount of participants in a community</span>
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the community has CBAC configured</span>
                "policyId": string
                "badgeIds": [ string ]
                "badgeMatchMode": string
                "grantedPermission": string
            }]
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
            "ownerId": string
            "thumbnailId": string
            "communityTitle": string
            "description": string
            "color": string
            "communitySettings": {
                "joinPolicy": string <span color="#1b1ef7"> // OpenForAll / ByInvitation</span>
                "isDiscoverable": bool
            }
            "channelCounter": int <span color="#1b1ef7"> // total amount of channels in a community</span>
            "participantCount": int <span color="#1b1ef7"> // total amount of participants in a community</span>
            "cbacPolicies": [{ <span color="#1b1ef7"> // present only when the community has CBAC configured</span>
                "policyId": string
                "badgeIds": [ string ]
                "badgeMatchMode": string
                "grantedPermission": string
            }]
        }
        "communityRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
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

<a name="leave-community"></a>

### Leave community

**Method:** websocket

**Endpoint:** community:leaveCommunity

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
        "communityRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant, defaults to Participant</span>
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

<a name="cancel-community-invitation-request"></a>

### Cancel community invitation request

**Method:** websocket

**Endpoint:** community:cancelCommunityInvitationRequest

**Request:** 

<pre>
{
    "data": {
        "userId": string
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

<a name="update-community-participant"></a>

### Update community participant

**Method:** websocket

**Endpoint:** community:updateCommunityParticipant

**Request:** 

<pre>
{
    "data": {
        "communityId": string
        "userId": string
        "communityRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
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

<a name="delete-community-participant"></a>

### Delete community participant

**Method:** websocket

**Endpoint:** community:deleteCommunityParticipant

**Request:** 

<pre>
{
    "data": {
        "communityId": string
        "userId": string
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

<a name="transfer-community-ownership"></a>

### Transfer community ownership

**Method:** websocket

**Endpoint:** community:transferCommunityOwnership

**Request:** 

<pre>
{
    "data": {
        "communityId": string
        "newOwnerId": string <span color="#1b1ef7"> // userId of the existing community participant who will become the new owner</span>
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

<a name="search-community-participants"></a>

### Search community participants

**Method:** websocket

**Endpoint:** community:searchCommunityParticipants

**Request:** 

<pre>
{
    "data": {
        "communityId": string
        "roleFilter": string <span color="#1b1ef7"> // Admin / Moderator / Participant (default: all roles)</span>
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
        "users": [{
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
            "communityRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
            "isOwner": bool <span color="#1b1ef7"> // true if this participant is the current community owner</span>
            "joined": timestamp <span color="#1b1ef7"> // when the user joined the community (zero if not a member)</span>
        }]
        "total": int <span color="#1b1ef7"> // total participants matching the role filter</span>
        "cursor": string <span color="#1b1ef7"> // pagination cursor, use for fetching next page</span>
        "hasMore": bool <span color="#1b1ef7"> // indication if there are more items available for search</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-pending-community-participants"></a>

### Search pending community participants

**Method:** websocket

**Endpoint:** community:searchPendingCommunityParticipants

**Request:** 

<pre>
{
    "data": {
        "communityId": string
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
        "users": [{ <a href="#user-simple">user simple structure</a> }]
        "total": int <span color="#1b1ef7"> // total search result count</span>
        "cursor": string <span color="#1b1ef7"> // pagination cursor, use for fetching next page</span>
        "hasMore": bool <span color="#1b1ef7"> // indication if there are more items available for search</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="request-community-join"></a>

### Request community join

**Method:** websocket

**Endpoint:** community:requestCommunityJoin

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

<a name="cancel-community-join-request"></a>

### Cancel community join request

**Method:** websocket

**Endpoint:** community:cancelCommunityJoinRequest

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

<a name="accept-community-join-request"></a>

### Accept community join request

**Method:** websocket

**Endpoint:** community:acceptCommunityJoinRequest

**Request:** 

<pre>
{
    "data": {
        "userId": string <span color="#1b1ef7"> // user who requested to join</span>
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

<a name="decline-community-join-request"></a>

### Decline community join request

**Method:** websocket

**Endpoint:** community:declineCommunityJoinRequest

**Request:** 

<pre>
{
    "data": {
        "userId": string <span color="#1b1ef7"> // user who requested to join</span>
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

<a name="search-pending-community-join-requests"></a>

### Search pending community join requests

**Method:** websocket

**Endpoint:** community:searchPendingCommunityJoinRequests

**Request:** 

<pre>
{
    "data": {
        "communityId": string
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
        "users": [{ <a href="#user-simple">user simple structure</a> }]
        "total": int <span color="#1b1ef7"> // total search result count</span>
        "cursor": string <span color="#1b1ef7"> // pagination cursor, use for fetching next page</span>
        "hasMore": bool <span color="#1b1ef7"> // indication if there are more items available for search</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="pin-community"></a>

### Pin community

**Method:** websocket

**Endpoint:** community:pinCommunity

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

<a name="unpin-community"></a>

### Unpin community

**Method:** websocket

**Endpoint:** community:unpinCommunity

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
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin/Moderator)</span>
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
            "spawnUnreadCount": int <span color="#1b1ef7"> // count of unread AI agent spawned channels from this direct channel / not returned if empty</span>
            "spawnParentId": string <span color="#1b1ef7"> // parent channel id for spawned channel / not returned if empty</span>
            "spawnLastMessageTs": timestamp <span color="#1b1ef7"> // timestamp of last message in spawned channels</span>
        }
        "settings": { <span color="#1b1ef7"> // community channel settings</span>
            "beneficiaryVerus": string <span color="#1b1ef7"> // identity name to receive donations</span>
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin/Moderator)</span>
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
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin/Moderator)</span>
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
            "spawnUnreadCount": int <span color="#1b1ef7"> // count of unread AI agent spawned channels from this direct channel / not returned if empty</span>
            "spawnParentId": string <span color="#1b1ef7"> // parent channel id for spawned channel / not returned if empty</span>
            "spawnLastMessageTs": timestamp <span color="#1b1ef7"> // timestamp of last message in spawned channels</span>
        }
        "settings": { <span color="#1b1ef7"> // community channel settings</span>
            "beneficiaryVerus": string <span color="#1b1ef7"> // identity name to receive donations</span>
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin/Moderator)</span>
            "joinPolicy": string <span color="#1b1ef7"> // who can join (OpenForAll)</span>
        }
        "communityRole": string <span color="#1b1ef7"> // Admin / Moderator / Participant</span>
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
        "direction": string <span color="#1b1ef7"> // pagination direction: before (default), after, bilateral (both before and after), single (single message)</span>
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
        "direction": string <span color="#1b1ef7"> // pagination direction: before (default), after, bilateral (both before and after), single (single message)</span>
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
        "direction": string <span color="#1b1ef7"> // pagination direction: before (default), after, bilateral (both before and after), single (single message)</span>
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
            "spawnUnreadCount": int <span color="#1b1ef7"> // count of unread AI agent spawned channels from this direct channel / not returned if empty</span>
            "spawnParentId": string <span color="#1b1ef7"> // parent channel id for spawned channel / not returned if empty</span>
            "spawnLastMessageTs": timestamp <span color="#1b1ef7"> // timestamp of last message in spawned channels</span>
        }
        "settings": { <span color="#1b1ef7"> // community channel settings</span>
            "beneficiaryVerus": string <span color="#1b1ef7"> // identity name to receive donations</span>
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin/Moderator)</span>
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
            "spawnUnreadCount": int <span color="#1b1ef7"> // count of unread AI agent spawned channels from this direct channel / not returned if empty</span>
            "spawnParentId": string <span color="#1b1ef7"> // parent channel id for spawned channel / not returned if empty</span>
            "spawnLastMessageTs": timestamp <span color="#1b1ef7"> // timestamp of last message in spawned channels</span>
        }
        "settings": { <span color="#1b1ef7"> // community channel settings</span>
            "beneficiaryVerus": string <span color="#1b1ef7"> // identity name to receive donations</span>
            "writePolicy": string <span color="#1b1ef7"> // who can post (All/Admin/Moderator)</span>
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

