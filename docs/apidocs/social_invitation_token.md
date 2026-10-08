<br>

<a name="social-invitationtoken-api"></a>

## Social: InvitationToken API

| Endpoint | Method | Description |
|-----|-----|-----|
| [social:createInvitationToken](#create-invitation-token) | websocket | Create invitation token |
| [social:getInvitationToken](#get-invitation-token) | websocket | Get invitation token |
| [social:listInvitationTokensCreatedByUser](#list-invitation-tokens-created-by-user) | websocket | List invitation tokens created by user |
| [social:revokeInvitationToken](#revoke-invitation-token) | websocket | Revoke invitation token |
| [social:redeemInvitationToken](#redeem-invitation-token) | websocket | Redeem invitation token |
| [social:listInvitationTokenUsages](#list-invitation-token-usages) | websocket | List invitation token usages |

<br>

<a name="create-invitation-token"></a>

### Create invitation token

**Method:** websocket

**Endpoint:** social:createInvitationToken

**Description:** Creates an invitation token that can be redeemed by other users to perform certain actions (e.g., join a room, join a group, etc.). The token can be created with specific sources (e.g., room, group) and client routes (e.g., room page, group page) to direct users to the appropriate place after redeeming the token. The token can also have an expiration time and can be revoked by the creator.

**Request:** 

<pre>
{
    "data": {
        "tokenName": string <span color="#1b1ef7"> // human-readable name for the invitation token</span>
        "usageType": string <span color="#1b1ef7"> // oneTime / dueToDate / open</span>
        "clientRoute": string <span color="#1b1ef7"> // the client route to redirect to after redeeming the token</span>
        "expires": timestamp <span color="#1b1ef7"> // timestamp when the token expires (usageType == dueToDate)</span>
        "sources": [{ <span color="#1b1ef7"> // list of sources (e.g., room, group) token grants permissions to</span>
            "sourceType": string <span color="#1b1ef7"> // room / group / community</span>
            "sourceId": string
            "permissions": {
                "view": bool
                "comment": bool
                "contribute": bool
                "edit": bool
                "manage": bool
            }
        }]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "token": {
            "tokenId": string
            "tokenName": string <span color="#1b1ef7"> // human-readable name for the invitation token</span>
            "created": timestamp
            "usageType": string <span color="#1b1ef7"> // oneTime / dueToDate / open</span>
            "usageStatus": string <span color="#1b1ef7"> // active / expired / revoked</span>
            "createdBy": string <span color="#1b1ef7"> // userId of the token creator</span>
            "clientRoute": string <span color="#1b1ef7"> // the client route to redirect to after redeeming the token</span>
            "expires": timestamp <span color="#1b1ef7"> // timestamp when the token expires (usageType == dueToDate)</span>
            "sources": [{ <span color="#1b1ef7"> // list of sources (e.g., room, group) where user grants permissions to</span>
                "sourceType": string <span color="#1b1ef7"> // room / group / community</span>
                "sourceId": string
                "permissions": {
                    "view": bool
                    "comment": bool
                    "contribute": bool
                    "edit": bool
                    "manage": bool
                }
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-invitation-token"></a>

### Get invitation token

**Method:** websocket

**Endpoint:** social:getInvitationToken

**Request:** 

<pre>
{
    "data": {
        "tokenId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "token": {
            "tokenId": string
            "tokenName": string <span color="#1b1ef7"> // human-readable name for the invitation token</span>
            "created": timestamp
            "usageType": string <span color="#1b1ef7"> // oneTime / dueToDate / open</span>
            "usageStatus": string <span color="#1b1ef7"> // active / expired / revoked</span>
            "createdBy": string <span color="#1b1ef7"> // userId of the token creator</span>
            "clientRoute": string <span color="#1b1ef7"> // the client route to redirect to after redeeming the token</span>
            "expires": timestamp <span color="#1b1ef7"> // timestamp when the token expires (usageType == dueToDate)</span>
            "sources": [{ <span color="#1b1ef7"> // list of sources (e.g., room, group) where user grants permissions to</span>
                "sourceType": string <span color="#1b1ef7"> // room / group / community</span>
                "sourceId": string
                "permissions": {
                    "view": bool
                    "comment": bool
                    "contribute": bool
                    "edit": bool
                    "manage": bool
                }
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-invitation-tokens-created-by-user"></a>

### List invitation tokens created by user

**Method:** websocket

**Endpoint:** social:listInvitationTokensCreatedByUser

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "tokens": [{
            "tokenId": string
            "tokenName": string <span color="#1b1ef7"> // human-readable name for the invitation token</span>
            "created": timestamp
            "usageType": string <span color="#1b1ef7"> // oneTime / dueToDate / open</span>
            "usageStatus": string <span color="#1b1ef7"> // active / expired / revoked</span>
            "createdBy": string <span color="#1b1ef7"> // userId of the token creator</span>
            "clientRoute": string <span color="#1b1ef7"> // the client route to redirect to after redeeming the token</span>
            "expires": timestamp <span color="#1b1ef7"> // timestamp when the token expires (usageType == dueToDate)</span>
            "sources": [{ <span color="#1b1ef7"> // list of sources (e.g., room, group) where user grants permissions to</span>
                "sourceType": string <span color="#1b1ef7"> // room / group / community</span>
                "sourceId": string
                "permissions": {
                    "view": bool
                    "comment": bool
                    "contribute": bool
                    "edit": bool
                    "manage": bool
                }
            }]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="revoke-invitation-token"></a>

### Revoke invitation token

**Method:** websocket

**Endpoint:** social:revokeInvitationToken

**Request:** 

<pre>
{
    "data": {
        "tokenId": string
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

<a name="redeem-invitation-token"></a>

### Redeem invitation token

**Method:** websocket

**Endpoint:** social:redeemInvitationToken

**Request:** 

<pre>
{
    "data": {
        "tokenId": string
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

<a name="list-invitation-token-usages"></a>

### List invitation token usages

**Method:** websocket

**Endpoint:** social:listInvitationTokenUsages

**Request:** 

<pre>
{
    "data": {
        "tokenId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "usages": [{
            "tokenId": string
            "userId": string
            "redeemed": timestamp
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

