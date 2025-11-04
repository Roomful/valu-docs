<br>

<a name="-api"></a>

##  API

| Endpoint | Method | Description |
|-----|-----|-----|
| [rbac:onRoleAdded](#on-role-added) | websocketEvent | On role added |
| [rbac:onRoleRemoved](#on-role-removed) | websocketEvent | On role removed |

<br>

<a name="on-role-added"></a>

### On role added

**Event:** rbac:onRoleAdded

**Description:** Event notifies that a role was added to user.

**Data:** 

<pre>
{
    "data": {
        "role": {
            "id": string
            "roleName": string
            "targetType": string <span color="#1b1ef7"> // optional, type of object role could be linked to, like network/room/prop</span>
            "isBuildIn": bool <span color="#1b1ef7"> // true for system build in roles (cannot be deleted)</span>
            "permissions": [ string ]
            "targetId": string <span color="#1b1ef7"> // optional, id of object role is linked to</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-role-removed"></a>

### On role removed

**Event:** rbac:onRoleRemoved

**Description:** Event notifies that a role was removed from user.

**Data:** 

<pre>
{
    "data": {
        "role": {
            "id": string
            "roleName": string
            "targetType": string <span color="#1b1ef7"> // optional, type of object role could be linked to, like network/room/prop</span>
            "isBuildIn": bool <span color="#1b1ef7"> // true for system build in roles (cannot be deleted)</span>
            "permissions": [ string ]
            "targetId": string <span color="#1b1ef7"> // optional, id of object role is linked to</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

