<br>

<a name="rbac-api"></a>

## Rbac API

| Endpoint | Method | Description |
|-----|-----|-----|
| [rbac:assignPermissions](#assign-permissions) | websocket | Assign permissions |
| [rbac:removePermissions](#remove-permissions) | websocket | Remove permissions |
| [rbac:listPermissionsForTarget](#list-permissions-for-target) | websocket | List permissions for target |
| [rbac:createAuthClient](#create-auth-client) | websocket | Create auth client |
| [rbac:listAuthClients](#list-auth-clients) | websocket | List auth clients |
| [rbac:updateAuthClientScope](#update-auth-client-scope) | websocket | Update auth client scope |

<br>

<a name="assign-permissions"></a>

### Assign permissions

**Method:** websocket

**Endpoint:** rbac:assignPermissions

**Request:** 

<pre>
{
    "data": {
        "actorType": string <span color="#1b1ef7"> // actor type to whom permissions belong to (like user or miniApp)</span>
        "actorId": string <span color="#1b1ef7"> // actor id to whom permissions belong to (like userId or miniAppId)</span>
        "targetType": string <span color="#1b1ef7"> // type of target (like network, room or prop)</span>
        "targetId": string <span color="#1b1ef7"> // id of target, path of object ids (like /networkId/roomId/propId)</span>
        "permissions": [ string ] <span color="#1b1ef7"> // list of permissions</span>
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

<a name="remove-permissions"></a>

### Remove permissions

**Method:** websocket

**Endpoint:** rbac:removePermissions

**Request:** 

<pre>
{
    "data": {
        "actorType": string <span color="#1b1ef7"> // actor type to whom permissions belong to (like user or miniApp)</span>
        "actorId": string <span color="#1b1ef7"> // actor id to whom permissions belong to (like userId or miniAppId)</span>
        "targetType": string <span color="#1b1ef7"> // type of target (like network, room or prop)</span>
        "targetId": string <span color="#1b1ef7"> // id of target, path of object ids (like /networkId/roomId/propId)</span>
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

<a name="list-permissions-for-target"></a>

### List permissions for target

**Method:** websocket

**Endpoint:** rbac:listPermissionsForTarget

**Request:** 

<pre>
{
    "data": {
        "targetType": string <span color="#1b1ef7"> // type of target (like network, room or prop)</span>
        "targetId": string <span color="#1b1ef7"> // id of target, path of object ids (like /networkId/roomId/propId)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "permissions": [{
            "actorType": string <span color="#1b1ef7"> // actor type to whom permissions belong to (like user or miniApp)</span>
            "actorId": string <span color="#1b1ef7"> // actor id to whom permissions belong to (like userId or miniAppId)</span>
            "roleId": string <span color="#1b1ef7"> // id of role template (if permissions are assigned via role)</span>
            "roleName": string <span color="#1b1ef7"> // name of role template (if permissions are assigned via role)</span>
            "permissions": [ string ] <span color="#1b1ef7"> // list of permissions</span>
            "targetType": string <span color="#1b1ef7"> // type of target (like network, room or prop)</span>
            "targetId": string <span color="#1b1ef7"> // id of target, path of object ids (like /networkId/roomId/propId)</span>
            "networkId": string <span color="#1b1ef7"> // id of network for which permissions are valid</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-auth-client"></a>

### Create auth client

**Method:** websocket

**Endpoint:** rbac:createAuthClient

**Description:** Creates a new auth client. If clientId is provided it must be unique; otherwise a random one is generated. Requires superadmin (all) permission.

**Request:** 

<pre>
{
    "data": {
        "clientId": string
        "clientName": string
        "scope": [ string ]
        "redirectUris": [ string ]
        "devMode": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "clientId": string
        "clientSecret": string
        "clientName": string
        "scope": [ string ]
        "redirectUris": [ string ]
        "authPageUrl": string
        "devMode": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-auth-clients"></a>

### List auth clients

**Method:** websocket

**Endpoint:** rbac:listAuthClients

**Description:** Returns all registered auth clients. Client secrets are hidden. Requires superadmin (all) permission.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "clients": [{
            "clientId": string
            "clientName": string
            "scope": [ string ]
            "redirectUris": [ string ]
            "authPageUrl": string
            "devMode": bool
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-auth-client-scope"></a>

### Update auth client scope

**Method:** websocket

**Endpoint:** rbac:updateAuthClientScope

**Description:** Updates the scope of an auth client. Requires superadmin (all) permission.

**Request:** 

<pre>
{
    "data": {
        "clientId": string
        "scope": [ string ]
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

