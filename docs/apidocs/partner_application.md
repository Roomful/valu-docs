<br>

<a name="partner-application-api"></a>

## Partner: Application API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/partnerRpc/application.issueResourceGrant](#issue-resource-grant) | jsonRpc | Issue resource grant |

<br>

<a name="issue-resource-grant"></a>

### Issue resource grant

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/application.issueResourceGrant

**Description:** Lets an application issue itself a single-use grant to create one resource in its own applicationPublic belonging, so its third-party backend can hand the returned token to an end user without that user needing an application Owner/Admin role. The requesting client's own id (the JWT issuer) is the application the grant is for.

**Request:** 

<pre>
{
    "expiresInSeconds": int <span color="#1b1ef7"> // how long the grant remains redeemable; defaults to 15min if zero</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "grantToken": string
        "permission": string
        "targetId": string
        "issuedBy": string
        "createdAt": timestamp
        "expiresAt": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

