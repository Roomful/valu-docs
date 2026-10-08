<br>

<a name="partner-userinfo-api"></a>

## Partner: UserInfo API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/partnerRpc/userInfo.getUserInfo](#get-user-info) | jsonRpc | Get user info |

<br>

<a name="get-user-info"></a>

### Get user info

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/userInfo.getUserInfo

**Description:** Exchanges a short-lived identity token (obtained by the miniapp's client via appManifest:getIdentityToken) for user profile fields. The caller authenticates as the miniapp using the standard partnerRpc bearer (Authorization: Bearer {partner JWT}, HS256, iss=clientId). The identity token's audience must match that authenticated clientId, so a token issued for one miniapp cannot be redeemed by another. Response fields are gated by the caller's granted scopes: "email" is only populated if the authenticated client holds that scope.

**Request:** 

<pre>
{
    "identityToken": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "userId": string
        "email": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

