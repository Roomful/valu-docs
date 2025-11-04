<br>

<a name="user-api"></a>

## User API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/rpc/user.info](#info) | jsonRpc | Info |
| [/api/v0/rpc/user.pluginPermissions](#plugin-permissions) | jsonRpc | Plugin permissions |
| [/api/v0/rpc/user.setSocketRoute](#set-socket-route) | jsonRpc | Set socket route |
| [user:editProfile](#edit-user-profile) | websocket | Edit user profile |
| [user:changeEmail](#change-user-email) | websocket | Change user email |
| [user:changePhone](#change-user-phone) | websocket | Change user phone |
| [user:changePassword](#change-user-password) | websocket | Change user password |
| [user:changeAvatar](#change-user-avatar) | websocket | Change user avatar |
| [user:changeAvatar3D](#change-user-avatar-3-d) | websocket | Change user avatar 3 d |
| [user:getRPMAvatarToken](#get-rpm-avatar-token) | websocket | Get RPM avatar token |
| [user:changeCompanyInfo](#change-user-company-info) | websocket | Change user company info |
| [user:deviceSettings](#device-settings) | websocket | Device settings |
| [user:setNetworkState](#set-user-network-state) | websocket | Set user network state |
| [user:setEmailSettings](#set-user-email-settings) | websocket | Set user email settings |
| [user:setNavigationSettings](#set-user-navigation-settings) | websocket | Set user navigation settings |
| [user:setCollisionSettings](#set-user-collision-settings) | websocket | Set user collision settings |
| [user:mergeByEmail](#merge-users-by-email) | websocket | Merge users by email |
| [user:mergeByFacebook](#merge-users-by-facebook) | websocket | Merge users by facebook |
| [user:setUserIsNotNew](#set-user-is-not-new) | websocket | Set user is not new |
| [user:sendUserEmailVerificationToken](#send-user-email-verification-token) | websocket | Send user email verification token |
| [user:getUserParams](#get-user-params) | websocket | Get user params |
| [user:setUserParams](#set-user-params) | websocket | Set user params |
| [user:listBadgesOfType](#list-badges-of-type) | websocket | List badges of type |
| [user:getLinkedSocialAccounts](#get-social-accounts-linked-to-user) | websocket | Get social accounts linked to user |
| ~~[user:getSocialAccounts](#get-social-accounts-linked-to-user-deprecated)~~ | websocket | Get social accounts linked to user: deprecated |
| [user:unlinkSocialAccount](#unlink-social-account-from-user) | websocket | Unlink social account from user |
| [user:listLinkedPersonaAccounts](#list-linked-persona-accounts) | websocket | List linked persona accounts |
| [user:disable](#disable-user) | websocket | Disable user |
| [user:getDataForSocketSwitch](#get-data-for-socket-switch) | websocket | Get data for socket switch |
| [user:initPubSubChannel](#init-user-pub-sub-channel) | websocket | Init user pub sub channel |
| [user:subscribeToPubSubChannel](#subscribe-to-user-pub-sub-channel) | websocket | Subscribe to user pub sub channel |
| [user:sendToPubSubChannel](#send-to-user-pub-sub-channel) | websocket | Send to user pub sub channel |
| [user:setZAddress](#set-user-z-address) | websocket | Set user z address |
| [user:listZAddresses](#list-user-z-addresses) | websocket | List user z addresses |
| [user:update](#user-updated-event) | websocketEvent | User updated event |
| [user:settingsUpdated](#user-settings-updated-event) | websocketEvent | User settings updated event |
| [user:avatarUpdated](#user-avatar-updated-event) | websocketEvent | User avatar updated event |
| [user:linkedToSocialAccount](#on-user-linked-to-social-account) | websocketEvent | On user linked to social account |
| [user:unlinkedFromSocialAccount](#on-user-unlinked-from-social-account) | websocketEvent | On user unlinked from social account |
| [user:publicRoomCountUpdated](#user-public-room-count-updated-event) | websocketEvent | User public room count updated event |
| [user:contactCountUpdated](#user-contact-count-updated-event) | websocketEvent | User contact count updated event |
| [user:newInvitationsCountUpdated](#user-new-invitations-count-updated-event) | websocketEvent | User new invitations count updated event |
| [user:pendingRequestCountUpdated](#user-pending-request-count-updated-event) | websocketEvent | User pending request count updated event |
| [user:newNotificationsCountUpdated](#user-new-notifications-count-updated-event) | websocketEvent | User new notifications count updated event |
| [user:idealMatchCountUpdated](#user-ideal-match-count-updated-event) | websocketEvent | User ideal match count updated event |
| [user:avatar3DChanged](#user-avatar-3-d-changed-event) | websocketEvent | User avatar 3 d changed event |
| [user:socketSwitchEvent](#socket-switch-event) | websocketEvent | Socket switch event |
| [user:onPubSubChannelEvent](#on-user-pub-sub-channel-event) | websocketEvent | On user pub sub channel event |
| [user:setSocketRoute](#set-route-for-user-socket) | websocketEvent | Set route for user socket |

<br>

<a name="info"></a>

### Info

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/user.info

**Headers:** 

X-Session-Id: sessionToken

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "user": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
            "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
            "firstName": string
            "lastName": string
            "birthday": string
            "hometown": string
            "education": string
            "zipCode": string
            "description": string
            "linkUrl": string
            "privacyMode": int <span color="#1b1ef7"> // 0 - Default, 1 - Incognito</span>
            "avatar": string <span color="#1b1ef7"> // url or resource id</span>
            "avatar3D": { <span color="#1b1ef7"> // asset of user 3D avatar</span>
                "assetId": string
                "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
                "avatarUrl": string <span color="#1b1ef7"> // url to gbl file (Ready Player Me)</span>
                "avatarUserId": string <span color="#1b1ef7"> // user id for session recovery (Ready Player Me)</span>
            }
            "params": map[string]{ custom structure } <span color="#1b1ef7"> // custom user parameters, for example link to Zoom conference</span>
            "identityType": int <span color="#1b1ef7"> // 0 - Not Assigned, 1 - SSID, 2 - VSSID</span>
            "identityName": string <span color="#1b1ef7"> // Verus identity name</span>
            "zAddress": string <span color="#1b1ef7"> // z-address of user, generated by client application using Verus scoped root key</span>
            "email": string
            "phoneNumber": string
            "permissions": {
                "admin": bool
                "developer": bool
            }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="plugin-permissions"></a>

### Plugin permissions

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/user.pluginPermissions

**Description:** Endpoint returns user permissions that are used by plugin page.

**Headers:** 

X-Session-Id: sessionToken

X-Network-Id: networkId

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

<a name="set-socket-route"></a>

### Set socket route

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/rpc/user.setSocketRoute

**Headers:** 

X-Session-Id: sessionToken

X-Network-Id: networkId

**Request:** 

<pre>
{
    "socketId": string
    "route": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="edit-user-profile"></a>

### Edit user profile

**Method:** websocket

**Endpoint:** user:editProfile

**Request:** 

<pre>
{
    "data": {
        "firstName": string
        "lastName": string
        "birthday": string
        "hometown": string
        "education": string
        "description": string
        "linkUrl": string
        "privacyMode": int
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

<a name="change-user-email"></a>

### Change user email

**Method:** websocket

**Endpoint:** user:changeEmail

**Request:** 

<pre>
{
    "data": {
        "email": string
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

<a name="change-user-phone"></a>

### Change user phone

**Method:** websocket

**Endpoint:** user:changePhone

**Request:** 

<pre>
{
    "data": {
        "phoneNumber": string
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

<a name="change-user-password"></a>

### Change user password

**Method:** websocket

**Endpoint:** user:changePassword

**Request:** 

<pre>
{
    "data": {
        "password": string
        "newPassword": string
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

<a name="change-user-avatar"></a>

### Change user avatar

**Method:** websocket

**Endpoint:** user:changeAvatar

**Request:** 

<pre>
{
    "data": {
        "avatar": string
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

<a name="change-user-avatar-3-d"></a>

### Change user avatar 3 d

**Method:** websocket

**Endpoint:** user:changeAvatar3D

**Request:** 

<pre>
{
    "data": {
        "avatar3D": {
            "assetId": string
            "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
            "avatarUrl": string <span color="#1b1ef7"> // url to gbl file (Ready Player Me)</span>
            "avatarUserId": string <span color="#1b1ef7"> // user id for session recovery (Ready Player Me)</span>
        }
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

<a name="get-rpm-avatar-token"></a>

### Get RPM avatar token

**Method:** websocket

**Endpoint:** user:getRPMAvatarToken

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "rpmToken": string <span color="#1b1ef7"> // token to recover avatar session (Ready Player Me)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="change-user-company-info"></a>

### Change user company info

**Method:** websocket

**Endpoint:** user:changeCompanyInfo

**Request:** 

<pre>
{
    "data": {
        "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
        "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
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

<a name="device-settings"></a>

### Device settings

**Method:** websocket

**Endpoint:** user:deviceSettings

**Request:** 

<pre>
{
    "data": {
        "settings": {
            "device_timezone": int
            "device_language": string
            "device_os": int
            "device_push_token": string <span color="#1b1ef7"> // token for push notifications</span>
            "device_application": string <span color="#1b1ef7"> // roomful/texhibition/valuverse/valusocial</span>
        }
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

<a name="set-user-network-state"></a>

### Set user network state

**Method:** websocket

**Endpoint:** user:setNetworkState

**Request:** 

<pre>
{
    "data": {
        "networkState": {
            "defaultSubNetworkId": string
            "data": map[string]{ custom structure }
        }
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

<a name="set-user-email-settings"></a>

### Set user email settings

**Method:** websocket

**Endpoint:** user:setEmailSettings

**Description:** Api sets user email preferences.

If ignoreNewTextchatMessage set to true, user will not receive emails about new textchat messages.

**Request:** 

<pre>
{
    "data": {
        "settings": {
            "ignoreNewTextchatMessage": bool
        }
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

<a name="set-user-navigation-settings"></a>

### Set user navigation settings

**Method:** websocket

**Endpoint:** user:setNavigationSettings

**Description:** Api sets user navigation settings.

<i>navigationMode</i> could be one of the following:

* 0 - classic
* 1 - advanced
* 2 - pro

<i>joystickSettings</i> could be one of the following:

* 0 - left
* 1 - right
* 2 - two joysticks

<i>helperButtonAppearance</i> could be one of the following:

* 0 - default (show buttons by now, may be use network settings in future)
* 1 - show
* 2 - hide



**Request:** 

<pre>
{
    "data": {
        "settings": {
            "navigationMode": int
            "verticalSensitivity": float
            "horizontalSensitivity": float
            "joystickSettings": int
            "helperButtonAppearance": int
        }
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

<a name="set-user-collision-settings"></a>

### Set user collision settings

**Method:** websocket

**Endpoint:** user:setCollisionSettings

**Request:** 

<pre>
{
    "data": {
        "objectCollision": int
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

<a name="merge-users-by-email"></a>

### Merge users by email

**Method:** websocket

**Endpoint:** user:mergeByEmail

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "email": string
        "password": string
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

<a name="merge-users-by-facebook"></a>

### Merge users by facebook

**Method:** websocket

**Endpoint:** user:mergeByFacebook

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "facebookToken": string
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

<a name="set-user-is-not-new"></a>

### Set user is not new

**Method:** websocket

**Endpoint:** user:setUserIsNotNew

**Description:** Client should call this endpoint once user entered application for the first time.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="send-user-email-verification-token"></a>

### Send user email verification token

**Method:** websocket

**Endpoint:** user:sendUserEmailVerificationToken

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-user-params"></a>

### Get user params

**Method:** websocket

**Endpoint:** user:getUserParams

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "params": map[string]{ custom structure }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-user-params"></a>

### Set user params

**Method:** websocket

**Endpoint:** user:setUserParams

**Request:** 

<pre>
{
    "data": {
        "userParams": map[string]{ custom structure }
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

<a name="list-badges-of-type"></a>

### List badges of type

**Method:** websocket

**Endpoint:** user:listBadgesOfType

**Request:** 

<pre>
{
    "data": {
        "badgeType": string
        "offset": int
        "size": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "badges": [{
            "userId": string
            "id": string
            "created": timestamp
            "updated": timestamp
            "badgeType": string
            "data": map[string]{ custom structure }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-social-accounts-linked-to-user"></a>

### Get social accounts linked to user

**Method:** websocket

**Endpoint:** user:getLinkedSocialAccounts

**Description:** Api returns list of social accounts linked to user.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "socialAccounts": [{
            "kind": string <span color="#1b1ef7"> // roomful/google/apple/facebook/epam/verus/merkos302</span>
            "socialId": string <span color="#1b1ef7"> // social account unique identifier</span>
            "identityName": string <span color="#1b1ef7"> // Verus identity name</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-social-accounts-linked-to-user-deprecated"></a>

### Get social accounts linked to user: deprecated

**Method:** websocket

**Endpoint:** user:getSocialAccounts

**<span color="red">DEPRECATED</span>** 

**Description:** Api returns list of social accounts connected to user.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "socialAccounts": [{
            "kind": string <span color="#1b1ef7"> // roomful/google/apple/facebook/epam/verus/merkos302</span>
            "socialId": string <span color="#1b1ef7"> // social account unique identifier</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="unlink-social-account-from-user"></a>

### Unlink social account from user

**Method:** websocket

**Endpoint:** user:unlinkSocialAccount

**Description:** Api unlinks social account.

**Request:** 

<pre>
{
    "data": {
        "socialKind": string <span color="#1b1ef7"> // google/facebook/apple/verus/merkos302</span>
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

<a name="list-linked-persona-accounts"></a>

### List linked persona accounts

**Method:** websocket

**Endpoint:** user:listLinkedPersonaAccounts

**Description:** Api returns list of social accounts linked to user.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "linkedAccounts": [{
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
            "identityType": int <span color="#1b1ef7"> // 0 - Not Assigned, 1 - SSID, 2 - VSSID</span>
            "identityName": string <span color="#1b1ef7"> // Verus identity name</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="disable-user"></a>

### Disable user

**Method:** websocket

**Endpoint:** user:disable

**Description:** Api changes user status to non-active. Disabled users cannot log in to the system, and they are ignored during the search.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-data-for-socket-switch"></a>

### Get data for socket switch

**Method:** websocket

**Endpoint:** user:getDataForSocketSwitch

**Description:** API returns the data that is required for a socket switch. It is recommended to create a new socket connection when switching a network or an account (instead of ```network:switch```).

If user wants to change a network, api checks if user is allowed in the network.

If user wants to switch a persona account, api creates a new sessionId for the account.

If user wants to switch to a network with a new session, the ```requestNewSessionId``` parameter should be provided.

**Request:** 

<pre>
{
    "data": {
        "accountId": string
        "networkId": string
        "requestNewSessionId": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "accountId": string
        "networkId": string
        "newSessionId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="init-user-pub-sub-channel"></a>

### Init user pub sub channel

**Method:** websocket

**Endpoint:** user:initPubSubChannel

**Description:** Api creates channel that could be used by different user sockets to communicate with each other, and subscribes current socket to it.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "channelId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="subscribe-to-user-pub-sub-channel"></a>

### Subscribe to user pub sub channel

**Method:** websocket

**Endpoint:** user:subscribeToPubSubChannel

**Description:** Api subscribes socket to channel that could be used by different user sockets to communicate with each other.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
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

<a name="send-to-user-pub-sub-channel"></a>

### Send to user pub sub channel

**Method:** websocket

**Endpoint:** user:sendToPubSubChannel

**Description:** Api sends data to pub-sub channel. Other user sockets, that are subscribed to the channel, will receive this data.

**Request:** 

<pre>
{
    "data": {
        "channelId": string
        "channelData": { custom structure }
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

<a name="set-user-z-address"></a>

### Set user z address

**Method:** websocket

**Endpoint:** user:setZAddress

**Request:** 

<pre>
{
    "data": {
        "zAddress": string <span color="#1b1ef7"> // zAddress for E2EE messaging</span>
        "title": string <span color="#1b1ef7"> // client title for provided zAddress</span>
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

<a name="list-user-z-addresses"></a>

### List user z addresses

**Method:** websocket

**Endpoint:** user:listZAddresses

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "zAddresses": [{
            "userId": string
            "zAddress": string
            "title": string
            "created": timestamp
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-updated-event"></a>

### User updated event

**Event:** user:update

**Data:** 

<pre>
{
    "data": {
        "user": {
            "id": string
            "created": timestamp
            "updated": timestamp
            "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
            "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
            "firstName": string
            "lastName": string
            "birthday": string
            "hometown": string
            "education": string
            "zipCode": string
            "description": string
            "linkUrl": string
            "privacyMode": int <span color="#1b1ef7"> // 0 - Default, 1 - Incognito</span>
            "avatar": string <span color="#1b1ef7"> // url or resource id</span>
            "avatar3D": { <span color="#1b1ef7"> // asset of user 3D avatar</span>
                "assetId": string
                "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
                "avatarUrl": string <span color="#1b1ef7"> // url to gbl file (Ready Player Me)</span>
                "avatarUserId": string <span color="#1b1ef7"> // user id for session recovery (Ready Player Me)</span>
            }
            "params": map[string]{ custom structure } <span color="#1b1ef7"> // custom user parameters, for example link to Zoom conference</span>
            "identityType": int <span color="#1b1ef7"> // 0 - Not Assigned, 1 - SSID, 2 - VSSID</span>
            "identityName": string <span color="#1b1ef7"> // Verus identity name</span>
            "zAddress": string <span color="#1b1ef7"> // z-address of user, generated by client application using Verus scoped root key</span>
            "publicRoomCount": int
            "contactCount": int
            "pendingContactCount": int
            "newInvitationsCount": int
            "pendingRequestCount": int
            "newNotificationsCount": int
            "idealMatchCount": int
            "isDisabled": bool
            "isNew": bool
            "email": string
            "emailVerified": bool
            "phoneNumber": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-settings-updated-event"></a>

### User settings updated event

**Event:** user:settingsUpdated

**Data:** 

<pre>
{
    "data": {
        "email": {
            "ignoreNewTextchatMessage": bool
        }
        "navigation": {
            "navigationMode": int
            "verticalSensitivity": float
            "horizontalSensitivity": float
            "joystickSettings": int
            "helperButtonAppearance": int
        }
        "objectCollision": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-avatar-updated-event"></a>

### User avatar updated event

**Event:** user:avatarUpdated

**Data:** 

<pre>
{
    "data": {
        "avatar": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-user-linked-to-social-account"></a>

### On user linked to social account

**Event:** user:linkedToSocialAccount

**Data:** 

<pre>
{
    "data": {
        "kind": string <span color="#1b1ef7"> // roomful/google/apple/facebook/epam/verus/merkos302</span>
        "socialId": string <span color="#1b1ef7"> // social account unique identifier</span>
        "identityName": string <span color="#1b1ef7"> // Verus identity name</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-user-unlinked-from-social-account"></a>

### On user unlinked from social account

**Event:** user:unlinkedFromSocialAccount

**Data:** 

<pre>
{
    "data": {
        "kind": string <span color="#1b1ef7"> // roomful/google/apple/facebook/epam/verus/merkos302</span>
        "socialId": string <span color="#1b1ef7"> // social account unique identifier</span>
        "identityName": string <span color="#1b1ef7"> // Verus identity name</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-public-room-count-updated-event"></a>

### User public room count updated event

**Event:** user:publicRoomCountUpdated

**Data:** 

<pre>
{
    "data": {
        "publicRoomCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-contact-count-updated-event"></a>

### User contact count updated event

**Event:** user:contactCountUpdated

**Data:** 

<pre>
{
    "data": {
        "contactCount": int
        "pendingContactCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-new-invitations-count-updated-event"></a>

### User new invitations count updated event

**Event:** user:newInvitationsCountUpdated

**Data:** 

<pre>
{
    "data": {
        "newInvitationsCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-pending-request-count-updated-event"></a>

### User pending request count updated event

**Event:** user:pendingRequestCountUpdated

**Data:** 

<pre>
{
    "data": {
        "pendingRequestCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-new-notifications-count-updated-event"></a>

### User new notifications count updated event

**Event:** user:newNotificationsCountUpdated

**Data:** 

<pre>
{
    "data": {
        "newNotificationsCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-ideal-match-count-updated-event"></a>

### User ideal match count updated event

**Event:** user:idealMatchCountUpdated

**Data:** 

<pre>
{
    "data": {
        "idealMatchCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="user-avatar-3-d-changed-event"></a>

### User avatar 3 d changed event

**Event:** user:avatar3DChanged

**Data:** 

<pre>
{
    "data": {
        "userId": string
        "avatar3D": {
            "assetId": string
            "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
            "avatarUrl": string <span color="#1b1ef7"> // url to gbl file (Ready Player Me)</span>
            "avatarUserId": string <span color="#1b1ef7"> // user id for session recovery (Ready Player Me)</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="socket-switch-event"></a>

### Socket switch event

**Event:** user:socketSwitchEvent

**Description:** Api sends event to user sockets with the same sessionId as current socket. Event is being sent when one of users' session sockets decides switch socket in order to change account or network (and receive new sessionId).

**Data:** 

<pre>
{
    "data": {
        "accountId": string
        "networkId": string
        "newSessionId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-user-pub-sub-channel-event"></a>

### On user pub sub channel event

**Event:** user:onPubSubChannelEvent

**Description:** Api sends event to user sockets subscribed to channel (except initiator socket).

**Data:** 

<pre>
{
    "data": {
        "channelId": string
        "channelData": { custom structure }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-route-for-user-socket"></a>

### Set route for user socket

**Event:** user:setSocketRoute

**Description:** Event contains route, that should be used by client to switch context.

**Data:** 

<pre>
{
    "data": {
        "route": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

