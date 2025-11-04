<br>

<a name="adminserver-rbac-api"></a>

## Adminserver: Rbac API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/jsonRpc/rbac.listPermissions](#list-permissions) | jsonRpc | List permissions |
| [/jsonRpc/rbac.createRole](#create-role) | jsonRpc | Create role |
| [/jsonRpc/rbac.deleteRole](#delete-role) | jsonRpc | Delete role |
| [/jsonRpc/rbac.setRolePermissions](#set-role-permissions) | jsonRpc | Set role permissions |
| [/jsonRpc/rbac.listRoles](#list-roles) | jsonRpc | List roles |
| [/jsonRpc/rbac.addUserRole](#add-user-role) | jsonRpc | Add user role |
| [/jsonRpc/rbac.deleteUserRole](#delete-user-role) | jsonRpc | Delete user role |
| [/jsonRpc/rbac.listAssignedUserRoles](#list-assigned-user-roles) | jsonRpc | List assigned user roles |
| [/jsonRpc/rbac.listNetworkUserRoles](#list-network-user-roles) | jsonRpc | List network user roles |

<br>

<a name="list-permissions"></a>

### List permissions

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/rbac.listPermissions

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "permissions": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-role"></a>

### Create role

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/rbac.createRole

**Permissions:** 

all

**Request:** 

<pre>
{
    "id": string
    "roleName": string
    "targetType": string <span color="#1b1ef7"> // optional, type of object role could be linked to, like network/room/prop</span>
    "isBuildIn": bool <span color="#1b1ef7"> // true for system build in roles (cannot be deleted)</span>
    "permissions": [ string ]
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "role": {
            "id": string
            "roleName": string
            "targetType": string <span color="#1b1ef7"> // optional, type of object role could be linked to, like network/room/prop</span>
            "isBuildIn": bool <span color="#1b1ef7"> // true for system build in roles (cannot be deleted)</span>
            "permissions": [ string ]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-role"></a>

### Delete role

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/rbac.deleteRole

**Permissions:** 

all

**Request:** 

<pre>
{
    "roleId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="set-role-permissions"></a>

### Set role permissions

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/rbac.setRolePermissions

**Permissions:** 

all

**Request:** 

<pre>
{
    "roleId": string
    "permissions": [ string ]
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "role": {
            "id": string
            "roleName": string
            "targetType": string <span color="#1b1ef7"> // optional, type of object role could be linked to, like network/room/prop</span>
            "isBuildIn": bool <span color="#1b1ef7"> // true for system build in roles (cannot be deleted)</span>
            "permissions": [ string ]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-roles"></a>

### List roles

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/rbac.listRoles

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "roles": [{
            "id": string
            "roleName": string
            "targetType": string <span color="#1b1ef7"> // optional, type of object role could be linked to, like network/room/prop</span>
            "isBuildIn": bool <span color="#1b1ef7"> // true for system build in roles (cannot be deleted)</span>
            "permissions": [ string ]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="add-user-role"></a>

### Add user role

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/rbac.addUserRole

**Request:** 

<pre>
{
    "userId": string
    "roleId": string
    "targetId": string <span color="#1b1ef7"> // /networkId/roomId/propId</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="delete-user-role"></a>

### Delete user role

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/rbac.deleteUserRole

**Request:** 

<pre>
{
    "userId": string
    "roleId": string
    "targetId": string <span color="#1b1ef7"> // /networkId/roomId/propId</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="list-assigned-user-roles"></a>

### List assigned user roles

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/rbac.listAssignedUserRoles

**Request:** 

<pre>
{
    "userId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roles": [{
            "id": string
            "roleName": string
            "targetType": string <span color="#1b1ef7"> // optional, type of object role could be linked to, like network/room/prop</span>
            "isBuildIn": bool <span color="#1b1ef7"> // true for system build in roles (cannot be deleted)</span>
            "permissions": [ string ]
            "targetId": string <span color="#1b1ef7"> // optional, id of object role is linked to</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-network-user-roles"></a>

### List network user roles

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/rbac.listNetworkUserRoles

**Description:** API returns all user roles in network, including room/prop admin roles if user owns rooms/props in network.

**Permissions:** 

all (permission not needed for listing user own roles)

**Request:** 

<pre>
{
    "userId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roles": [{
            "id": string
            "roleName": string
            "targetType": string <span color="#1b1ef7"> // optional, type of object role could be linked to, like network/room/prop</span>
            "isBuildIn": bool <span color="#1b1ef7"> // true for system build in roles (cannot be deleted)</span>
            "permissions": [ string ]
            "targetId": string <span color="#1b1ef7"> // optional, id of object role is linked to</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

