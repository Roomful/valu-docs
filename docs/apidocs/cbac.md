<br>

<a name="cbac-api"></a>

## Cbac API

| Endpoint | Method | Description |
|-----|-----|-----|
| [cbac:createPolicy](#create-cbac-policy) | websocket | Create cbac policy |
| [cbac:updatePolicy](#update-cbac-policy) | websocket | Update cbac policy |
| [cbac:getPolicy](#get-cbac-policy) | websocket | Get cbac policy |
| [cbac:listPolicies](#list-cbac-policies) | websocket | List cbac policies |
| [cbac:deletePolicy](#delete-cbac-policy) | websocket | Delete cbac policy |

<br>

<a name="create-cbac-policy"></a>

### Create cbac policy

**Method:** websocket

**Endpoint:** cbac:createPolicy

**Description:** Creates a new CBAC policy on a target entity (room, community, or group). Multiple independent policies can coexist on the same target — each with its own badge requirement and granted permission level. Requires manage permission on the target. 

Valid grantedPermission values per target type: 
* room      — room.view, room.comment, room.contribute, room.edit 
* community — community.join 
* group     — group.join 



**Request:** 

<pre>
{
    "data": {
        "networkId": string <span color="#1b1ef7"> // id of the network the target belongs to</span>
        "targetType": string <span color="#1b1ef7"> // type of the target entity (room, community, or group)</span>
        "targetId": string <span color="#1b1ef7"> // id of the target entity</span>
        "badgeIds": [ string ] <span color="#1b1ef7"> // one or more badge ids required to gain access; must not be empty</span>
        "badgeMatchMode": string <span color="#1b1ef7"> // how badges are evaluated: 'any' (one badge suffices) or 'all' (every badge required)</span>
        "grantedPermission": string <span color="#1b1ef7"> // permission level granted when the user meets the badge requirement (must be a CBAC-grantable permission)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "policy": { <span color="#1b1ef7"> // the CBAC policy</span>
            "policyId": string
            "networkId": string
            "targetType": string
            "targetId": string
            "badgeIds": [ string ]
            "badgeMatchMode": string
            "grantedPermission": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-cbac-policy"></a>

### Update cbac policy

**Method:** websocket

**Endpoint:** cbac:updatePolicy

**Description:** Replaces an existing CBAC policy identified by policyId. Requires manage permission on the target.

**Request:** 

<pre>
{
    "data": {
        "policyId": string <span color="#1b1ef7"> // id of the policy to update</span>
        "networkId": string <span color="#1b1ef7"> // id of the network the target belongs to</span>
        "targetType": string <span color="#1b1ef7"> // type of the target entity (room, community, or group)</span>
        "targetId": string <span color="#1b1ef7"> // id of the target entity</span>
        "badgeIds": [ string ] <span color="#1b1ef7"> // one or more badge ids required to gain access; must not be empty</span>
        "badgeMatchMode": string <span color="#1b1ef7"> // how badges are evaluated: 'any' (one badge suffices) or 'all' (every badge required)</span>
        "grantedPermission": string <span color="#1b1ef7"> // permission level granted when the user meets the badge requirement (must be a CBAC-grantable permission)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "policy": { <span color="#1b1ef7"> // the CBAC policy</span>
            "policyId": string
            "networkId": string
            "targetType": string
            "targetId": string
            "badgeIds": [ string ]
            "badgeMatchMode": string
            "grantedPermission": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-cbac-policy"></a>

### Get cbac policy

**Method:** websocket

**Endpoint:** cbac:getPolicy

**Description:** Returns a single CBAC policy identified by policyId.

**Request:** 

<pre>
{
    "data": {
        "policyId": string <span color="#1b1ef7"> // id of the policy to retrieve or delete</span>
        "networkId": string <span color="#1b1ef7"> // id of the network the target belongs to</span>
        "targetType": string <span color="#1b1ef7"> // type of the target entity (room, community, or group)</span>
        "targetId": string <span color="#1b1ef7"> // id of the target entity</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "policy": { <span color="#1b1ef7"> // the CBAC policy</span>
            "policyId": string
            "networkId": string
            "targetType": string
            "targetId": string
            "badgeIds": [ string ]
            "badgeMatchMode": string
            "grantedPermission": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-cbac-policies"></a>

### List cbac policies

**Method:** websocket

**Endpoint:** cbac:listPolicies

**Description:** Returns all CBAC policies configured for a target entity.

**Request:** 

<pre>
{
    "data": {
        "networkId": string <span color="#1b1ef7"> // id of the network the target belongs to</span>
        "targetType": string <span color="#1b1ef7"> // type of the target entity (room, community, or group)</span>
        "targetId": string <span color="#1b1ef7"> // id of the target entity</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "policies": [{ <span color="#1b1ef7"> // all CBAC policies configured for this target</span>
            "policyId": string
            "networkId": string
            "targetType": string
            "targetId": string
            "badgeIds": [ string ]
            "badgeMatchMode": string
            "grantedPermission": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-cbac-policy"></a>

### Delete cbac policy

**Method:** websocket

**Endpoint:** cbac:deletePolicy

**Description:** Removes a single CBAC policy identified by policyId. Requires manage permission on the target.

**Request:** 

<pre>
{
    "data": {
        "policyId": string <span color="#1b1ef7"> // id of the policy to retrieve or delete</span>
        "networkId": string <span color="#1b1ef7"> // id of the network the target belongs to</span>
        "targetType": string <span color="#1b1ef7"> // type of the target entity (room, community, or group)</span>
        "targetId": string <span color="#1b1ef7"> // id of the target entity</span>
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

