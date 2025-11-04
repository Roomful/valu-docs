<br>

<a name="partner-badge-api"></a>

## Partner: Badge API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/partnerRpc/badge.createUserBadge](#create-user-badge) | jsonRpc | Create user badge |
| [/api/v0/partnerRpc/badge.listUserBadges](#list-user-badges) | jsonRpc | List user badges |

<br>

<a name="create-user-badge"></a>

### Create user badge

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/badge.createUserBadge

**Request:** 

<pre>
{
    "userId": string
    "badge": {
        "badgeType": string
        "data": map[string]{ custom structure }
    }
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="list-user-badges"></a>

### List user badges

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/badge.listUserBadges

**Request:** 

<pre>
{
    "userId": string
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "badges": [{
            "userId": string
            "id": string
            "created": timestamp
            "updated": timestamp
            "badgeType": string
            "data": map[string]{ custom structure }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

