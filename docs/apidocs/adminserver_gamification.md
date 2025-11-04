<br>

<a name="adminserver-gamification-api"></a>

## Adminserver: Gamification API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/jsonRpc/gamification.getGamificationRanking](#get-gamification-ranking) | jsonRpc | Get gamification ranking |
| [/jsonRpc/gamification.searchGamificationRanking](#search-gamification-ranking) | jsonRpc | Search gamification ranking |
| [/jsonRpc/gamification.deleteUserGamificationRanking](#delete-user-gamification-ranking) | jsonRpc | Delete user gamification ranking |
| [/jsonRpc/gamification.deleteAllGamificationRankings](#delete-all-gamification-rankings) | jsonRpc | Delete all gamification rankings |

<br>

<a name="get-gamification-ranking"></a>

### Get gamification ranking

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/gamification.getGamificationRanking

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "ranking": {
            "top": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "rank": int
                "points": float
            }]
            "own": {
                "user": { <a href="#user-simple">user simple structure</a> }
                "rank": int
                "points": float
            }
            "total": int
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-gamification-ranking"></a>

### Search gamification ranking

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/gamification.searchGamificationRanking

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "text": string
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "ranking": {
            "top": [{
                "user": { <a href="#user-simple">user simple structure</a> }
                "rank": int
                "points": float
            }]
            "own": {
                "user": { <a href="#user-simple">user simple structure</a> }
                "rank": int
                "points": float
            }
            "total": int
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-user-gamification-ranking"></a>

### Delete user gamification ranking

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/gamification.deleteUserGamificationRanking

**Permissions:** 

network.manage /networkId (permission not needed for deleting user own ranking)

**Request:** 

<pre>
{
    "userId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="delete-all-gamification-rankings"></a>

### Delete all gamification rankings

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/gamification.deleteAllGamificationRankings

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
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

