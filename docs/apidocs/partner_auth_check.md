<br>

<a name="partner-authcheck-api"></a>

## Partner: AuthCheck API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/partnerRpc/authCheck.getUserBySessionId](#get-user-by-session-id) | jsonRpc | Get user by session id |

<br>

<a name="get-user-by-session-id"></a>

### Get user by session id

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/authCheck.getUserBySessionId

**Request:** 

<pre>
{
    "sessionId": string
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

