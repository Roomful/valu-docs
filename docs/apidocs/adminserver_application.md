<br>

<a name="admin-application-api"></a>

## Admin Application API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/jsonRpc/application.listDefaultApplications](#list-default-applications) | jsonRpc | List default applications |
| [/jsonRpc/application.setDefaultApplication](#set-default-application) | jsonRpc | Set default application |
| [/jsonRpc/application.removeDefaultApplication](#remove-default-application) | jsonRpc | Remove default application |
| [/jsonRpc/application.searchPublishedApplicationsInNetwork](#search-published-applications-in-network) | jsonRpc | Search published applications in network |

<br>

<a name="list-default-applications"></a>

### List default applications

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/application.listDefaultApplications

**Permissions:** 

application.release

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "applications": [{
            "networkId": string
            "category": string
            "application": {
                "applicationId": string
                "version": string
                "name": string
                "description": string
                "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data from the released version: icons, client/interface settings, permissions, etc</span>
                "networks": [ string ] <span color="#1b1ef7"> // ['all'] or specific network ids the app is published in</span>
                "excludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
                "publishedAt": timestamp
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-default-application"></a>

### Set default application

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/application.setDefaultApplication

**Permissions:** 

application.release

**Request:** 

<pre>
{
    "networkId": string
    "category": string <span color="#1b1ef7"> // app/auth; defaults to 'app'</span>
    "applicationId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "networkId": string
        "category": string
        "applicationId": string
        "updated": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="remove-default-application"></a>

### Remove default application

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/application.removeDefaultApplication

**Permissions:** 

application.release

**Request:** 

<pre>
{
    "networkId": string
    "category": string <span color="#1b1ef7"> // app/auth; defaults to 'app'</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="search-published-applications-in-network"></a>

### Search published applications in network

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/application.searchPublishedApplicationsInNetwork

**Request:** 

<pre>
{
    "networkId": string
    "query": string <span color="#1b1ef7"> // case-insensitive substring match against the application name; empty matches everything</span>
    "cursor": string <span color="#1b1ef7"> // pagination cursor; omit for the first page, otherwise pass back the previous response's NextCursor</span>
    "limit": int <span color="#1b1ef7"> // page size; omit for the default</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applications": [{
            "applicationId": string
            "version": string
            "name": string
            "description": string
            "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data from the released version: icons, client/interface settings, permissions, etc</span>
            "networks": [ string ] <span color="#1b1ef7"> // ['all'] or specific network ids the app is published in</span>
            "excludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
            "publishedAt": timestamp
        }]
        "nextCursor": string <span color="#1b1ef7"> // opaque; pass back as Cursor to fetch the next page. Empty means no more results</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

