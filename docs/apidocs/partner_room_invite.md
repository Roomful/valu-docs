<br>

<a name="partner-roominvite-api"></a>

## Partner: RoomInvite API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/partnerRpc/roomInvite.inviteToRoom](#invite-to-room) | jsonRpc | Invite to room |

<br>

<a name="invite-to-room"></a>

### Invite to room

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/roomInvite.inviteToRoom

**Description:** API is used to dynamically invite users without room owner interaction. Requesting client (i.e. mini-app) should have assigned invite permissions to a specific room by a room owner.

**Request:** 

<pre>
{
    "invitedUserId": string
    "roomId": string
    "permissions": {
        "view": bool
        "comment": bool
        "contribute": bool
        "edit": bool
        "manage": bool
    }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

