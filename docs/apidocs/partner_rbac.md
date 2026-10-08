<br>

<a name="partner-rbac-api"></a>

## Partner: Rbac API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/partnerRpc/rbac.listAssignedUserRoles](#list-assigned-user-roles) | jsonRpc | List assigned user roles |
| [/api/v0/partnerRpc/rbac.getUserRolesLastModified](#get-user-roles-last-modified) | jsonRpc | Get user roles last modified |

<br>

<a name="list-assigned-user-roles"></a>

### List assigned user roles

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/rbac.listAssignedUserRoles

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
            "id": string <span color="#1b1ef7"> // id of role template</span>
            "roleName": string <span color="#1b1ef7"> // name of role template</span>
            "targetType": string <span color="#1b1ef7"> // type of target (like network, room or prop)</span>
            "isBuildIn": bool <span color="#1b1ef7"> // is system build in role (cannot be overridden)</span>
            "permissions": [ string ] <span color="#1b1ef7"> // list of role permissions</span>
            "targetId": string <span color="#1b1ef7"> // optional, id of object role is linked to</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-roles-last-modified"></a>

### Get user roles last modified

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/rbac.getUserRolesLastModified

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
        "lastModified": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

