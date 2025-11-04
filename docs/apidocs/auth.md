<br>

<a name="authorization-api"></a>

## Authorization API

| Endpoint | Method | Description |
|-----|-----|-----|
| ~~[/auth/signout](#logout)~~ | webRequest | Logout |
| [/api/v1/auth/signout](#logout) | webRequest | Logout |
| ~~[/auth/isEmailVerified](#check-email-is-verified)~~ | webRequest | Check email is verified |
| [/api/v1/auth/isEmailVerified](#check-email-is-verified) | webRequest | Check email is verified |
| [/auth/link/openid-connect/{providerId}](#link-social-network-account-to-user-using-open-id-connect-oidc-protocol) | webRequest | Link social network account to user using Open Id Connect (OIDC) protocol |
| [/auth/link/apple](#link-apple-account-to-user) | webRequest | Link Apple account to user |
| [/auth/link/facebook](#link-facebook-account-to-user) | webRequest | Link Facebook account to user |
| [/auth/link/verus/idLogin](#link-account-with-verus) | webRequest | Link account with Verus |
| [/auth/link/verus/idLoginV2](#link-account-with-verus-v2-) | webRequest | Link account with Verus (v2) |
| [/auth/link/verus/idLogin/testnet](#link-account-with-verus-testnet-) | webRequest | Link account with Verus (TESTNET) |
| [/auth/link/verus/checkChallenge](#check-verus-challenge-for-link-account) | webRequest | Check Verus challenge for link account |
| ~~[/auth/check](#check-if-user-is-authorized)~~ | webRequest | Check if user is authorized |
| [/api/v1/auth/check](#check-if-user-is-authorized) | webRequest | Check if user is authorized |
| ~~[/auth/requestEmailVerification](#request-email-verification)~~ | webRequest | Request email verification |
| [/api/v1/auth/requestEmailVerification](#request-email-verification) | webRequest | Request email verification |
| ~~[/auth/isEmailAvailable](#check-email-availability)~~ | webRequest | Check email availability |
| [/api/v1/auth/isEmailAvailable](#check-email-availability) | webRequest | Check email availability |
| ~~[/auth/isEmailTaken](#check-email-is-taken)~~ | webRequest | Check email is taken |
| [/api/v1/auth/isEmailTaken](#check-email-is-taken) | webRequest | Check email is taken |
| [/auth/getRedirectUrlForOP](#get-redirect-url-for-openid-provider-authorization) | webRequest | Get redirect url for OpenID Provider authorization |
| [/auth/openid-connect/{providerId}](#authorize-user-using-open-id-connect-oidc-protocol) | webRequest | Authorize user using Open Id Connect (OIDC) protocol |
| [/auth/apple](#authorize-using-apple-code) | webRequest | Authorize using Apple code |
| [/auth/verus/idLogin](#authorize-user-with-verus) | webRequest | Authorize user with Verus |
| [/auth/verus/idLoginV2](#authorize-user-with-verus-v2-) | webRequest | Authorize user with Verus (v2) |
| [/auth/verus/idLogin/testnet](#authorize-user-with-verus-testnet-) | webRequest | Authorize user with Verus (TESTNET) |
| [/auth/verus/idLogin/testnetExt](#authorize-user-with-verus-testnet-) | webRequest | Authorize user with Verus (TESTNET) |
| [/auth/verus/idLoginResponseMobile](#send-verus-login-response-from-mobile-to-crypto-server) | webRequest | Send Verus login response from mobile to crypto server |
| [/auth/verus/idLoginResponseMobileTestnet](#send-verus-login-response-from-mobile-to-crypto-server-testnet-) | webRequest | Send Verus login response from mobile to crypto server (TESTNET) |
| [/auth/verus/checkChallenge](#check-verus-challenge-for-authorization) | webRequest | Check Verus challenge for authorization |
| ~~[/auth/signin](#regular-login)~~ | webRequest | Regular login |
| [/api/v1/auth/signin](#regular-login) | webRequest | Regular login |
| ~~[/auth/signup](#regular-registration)~~ | webRequest | Regular registration |
| [/api/v1/auth/signup](#regular-registration) | webRequest | Regular registration |
| ~~[/auth/registerByToken](#register-by-token)~~ | webRequest | Register by token |
| [/api/v1/auth/registerByToken](#register-by-token) | webRequest | Register by token |
| [/auth/requestPasswordRestore](#request-password-restore) | webRequest | Request password restore |
| ~~[/auth/sendRestorePasswordCode](#send-restore-password-code)~~ | webRequest | Send restore password code |
| [/api/v1/auth/sendRestorePasswordCode](#send-restore-password-code) | webRequest | Send restore password code |
| ~~[/auth/checkRestorePasswordCode](#check-restore-password-code)~~ | webRequest | Check restore password code |
| [/api/v1/auth/checkRestorePasswordCode](#check-restore-password-code) | webRequest | Check restore password code |
| ~~[/auth/restorePasswordByCode](#restore-password-by-code)~~ | webRequest | Restore password by code |
| [/api/v1/auth/restorePasswordByCode](#restore-password-by-code) | webRequest | Restore password by code |
| [/api/v1/auth/getOneTimeAuthToken](#get-one-time-auth-token) | webRequest | Get one time auth token |
| [/api/v1/auth/checkOneTimeAuthToken/{token}](#check-one-time-auth-token) | webRequest | Check one time auth token |
| [auth:verusIdLogin](#verus-id-login) | websocket | Verus ID Login |
| [auth:verusIdLoginTestnet](#verus-id-login-valuverse-testnet-) | websocket | Verus ID Login (VALUVERSE TESTNET) |
| [auth:verusIdLoginTestnetExt](#verus-id-login-verus-testnet-) | websocket | Verus ID Login (VERUS TESTNET) |
| [auth:verusLinkIdLogin](#link-verus-account-with-verus-id-login) | websocket | Link Verus account with Verus ID Login |
| [auth:verusLinkIdLoginTestnet](#link-verus-account-with-verus-id-login-valuverse-testnet-) | websocket | Link Verus account with Verus ID Login (VALUVERSE TESTNET) |
| [auth:verusLinkIdLoginTestnetExt](#link-verus-account-with-verus-id-login-verus-testnet-) | websocket | Link Verus account with Verus ID Login (VERUS TESTNET) |
| [auth:verusLinkPersonaAccount](#link-valuverse-persona-using-verus-id-login) | websocket | Link Valuverse persona using Verus ID Login |
| [auth:verusSimulateVerusIdLoginResponse](#simulate-verus-id-login-response-valuverse-testnet-) | websocket | Simulate Verus Id login response (VALUVERSE TESTNET) |
| [auth:verusAuthSuccess](#verus-authorization-success-event) | websocketEvent | Verus authorization success event |
| [auth:verusAuthError](#verus-authorization-error-event) | websocketEvent | Verus authorization error event |
| [auth:verusLinkSuccess](#verus-link-account-success-event) | websocketEvent | Verus link account success event |
| [auth:verusLinkError](#verus-link-account-error-event) | websocketEvent | Verus link account error event |

<br>

<a name="logout"></a>

### Logout

**HTTP Method:** POST

**Path:** /auth/signout

**<span color="red">DEPRECATED</span>** 

**Description:** Api drops users session.

**Headers:** 

X-Session-Id: sessionId

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="logout"></a>

### Logout

**HTTP Method:** POST

**Path:** /api/v1/auth/signout

**Description:** Api drops users session.

**Headers:** 

X-Session-Id: sessionId

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

<a name="check-email-is-verified"></a>

### Check email is verified

**HTTP Method:** POST

**Path:** /auth/isEmailVerified

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "isVerified": bool
}
</pre>

<br>

<a name="check-email-is-verified"></a>

### Check email is verified

**HTTP Method:** POST

**Path:** /api/v1/auth/isEmailVerified

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "isVerified": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="link-social-network-account-to-user-using-open-id-connect-oidc-protocol"></a>

### Link social network account to user using Open Id Connect (OIDC) protocol

**HTTP Method:** GET

**Path:** /auth/link/openid-connect/{providerId}

**Description:** API redirects to provider authorization page. API requires valid **redirect_uri** to client.

* On success provider redirects to valuverse server with authorization code. Then valuverse server validates authorization code with provider, fetches user info, links social account to user and redirects to **redirect_uri**.

* On failure, server redirects to **redirect_uri** with `error={error}` in query params.

Available providers:
* `google`
* `facebook`
* `apple`
* `epam`
* `epam.social`
* `merkos302`

In case when `epam.social` provider is selected, client must also select one of epam social networks (**socialId**): `google`, `facebook`, `linkedin`

**Parameters:** 

redirect_uri: string

socialId: string (used only for ```epam.social``` provider)

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Redirect to provider authorization page
</pre>

<br>

<a name="link-apple-account-to-user"></a>

### Link Apple account to user

**HTTP Method:** POST

**Path:** /auth/link/apple

**Request:** 

<pre>
{
    "appId": string
    "code": [ byte ]
    "idToken": [ byte ]
    "user": {
        "firstName": string
        "lastName": string
        "email": string
    }
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="link-facebook-account-to-user"></a>

### Link Facebook account to user

**HTTP Method:** POST

**Path:** /auth/link/facebook

**Request:** 

<pre>
{
    "token": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="link-account-with-verus"></a>

### Link account with Verus

**HTTP Method:** POST

**Path:** /auth/link/verus/idLogin

**Description:** Verus link account for mobile platforms. Endpoint creates Verus challenge and returns ```challengeId``` and ```deeplink```. Client opens Verus application with deeplink and authorizes with Verus account. After successful authorization, Verus application redirects client to ```redirectUrl```. When client returned to Valuverse application it should call ```/auth/link/verus/checkChallenge``` endpoint for checking Verus link account result.

**Request:** 

<pre>
{
    "redirectUrl": string
    "isMobile": bool
    "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
    "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
    "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
}
</pre>

**Response:** 

<pre>
{
    "challengeId": string
    "deepLink": string
}
</pre>

<br>

<a name="link-account-with-verus-v2-"></a>

### Link account with Verus (v2)

**HTTP Method:** POST

**Path:** /auth/link/verus/idLoginV2

**Description:** Verus link account for mobile platforms. Endpoint creates Verus challenge and returns ```challengeId``` and ```deeplink```. Client opens Verus application with deeplink and authorizes with Verus account. After successful authorization, Verus application redirects client to ```redirectUrl```. When client returned to Valuverse application it should call ```/auth/link/verus/checkChallenge``` endpoint for checking Verus link account result.

**Request:** 

<pre>
{
    "redirectUrl": string
    "isMobile": bool
    "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
    "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
    "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
}
</pre>

**Response:** 

<pre>
{
    "challengeId": string
    "deepLink": string
}
</pre>

<br>

<a name="link-account-with-verus-testnet-"></a>

### Link account with Verus (TESTNET)

**HTTP Method:** POST

**Path:** /auth/link/verus/idLogin/testnet

**Description:** Verus link account for mobile platforms. Endpoint creates Verus challenge and returns ```challengeId``` and ```deeplink```. Client opens Verus application with deeplink and authorizes with Verus account. After successful authorization, Verus application redirects client to ```redirectUrl```. When client returned to Valuverse application it should call ```/auth/link/verus/checkChallenge``` endpoint for checking Verus link account result.

**Request:** 

<pre>
{
    "redirectUrl": string
    "isMobile": bool
    "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
    "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
    "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
}
</pre>

**Response:** 

<pre>
{
    "challengeId": string
    "deepLink": string
}
</pre>

<br>

<a name="check-verus-challenge-for-link-account"></a>

### Check Verus challenge for link account

**HTTP Method:** POST

**Path:** /auth/link/verus/checkChallenge

**Description:** Checks Verus link account result after ```/auth/link/verus/idLogin```.

**Request:** 

<pre>
{
    "challengeId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="check-if-user-is-authorized"></a>

### Check if user is authorized

**HTTP Method:** GET

**Path:** /auth/check

**<span color="red">DEPRECATED</span>** 

**Description:** Api returns 200 Ok if user is authorized, and 401 Unauthorized if not.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="check-if-user-is-authorized"></a>

### Check if user is authorized

**HTTP Method:** GET

**Path:** /api/v1/auth/check

**Description:** Api returns ```401: Unauthorized``` error in case if user is not authorized.

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

<a name="request-email-verification"></a>

### Request email verification

**HTTP Method:** POST

**Path:** /auth/requestEmailVerification

**<span color="red">DEPRECATED</span>** 

**Description:** Returns http status 429 (StatusTooManyRequests) in case if email verification requests are more frequent than 1 per minute.

**Request:** 

<pre>
{
    "email": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="request-email-verification"></a>

### Request email verification

**HTTP Method:** POST

**Path:** /api/v1/auth/requestEmailVerification

**Description:** Api returns ```705: Too frequent request``` error in case if email verification requests are more frequent than 1 per minute.

**Request:** 

<pre>
{
    "email": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="check-email-availability"></a>

### Check email availability

**HTTP Method:** POST

**Path:** /auth/isEmailAvailable

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "email": string
}
</pre>

**Response:** 

<pre>
{
    "isAvailable": bool
}
</pre>

<br>

<a name="check-email-availability"></a>

### Check email availability

**HTTP Method:** POST

**Path:** /api/v1/auth/isEmailAvailable

**Request:** 

<pre>
{
    "email": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "isAvailable": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="check-email-is-taken"></a>

### Check email is taken

**HTTP Method:** POST

**Path:** /auth/isEmailTaken

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "email": string
}
</pre>

**Response:** 

<pre>
{
    "isTaken": bool
}
</pre>

<br>

<a name="check-email-is-taken"></a>

### Check email is taken

**HTTP Method:** POST

**Path:** /api/v1/auth/isEmailTaken

**Request:** 

<pre>
{
    "email": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "isTaken": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-redirect-url-for-openid-provider-authorization"></a>

### Get redirect url for OpenID Provider authorization

**HTTP Method:** GET

**Path:** /auth/getRedirectUrlForOP

**Parameters:** 

opAuthReqId: string

sessionId: string

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "redirectUrl": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="authorize-user-using-open-id-connect-oidc-protocol"></a>

### Authorize user using Open Id Connect (OIDC) protocol

**HTTP Method:** GET

**Path:** /auth/openid-connect/{providerId}

**Description:** API redirects to provider authorization page. API requires valid **redirect_uri** to client.

* On success provider redirects to valuverse server with authorization code. Then valuverse server validates authorization code with provider, fetches user info, creates new user if needed, creates user session and redirects to **redirect_uri** with `sessionId={sessionId}` and `isNew={true/false}` in query params.

* On failure, server redirects to **redirect_uri** with `error={error}` in query params.

Available providers:
* `google`
* `facebook`
* `apple`
* `epam`
* `epam.social`
* `merkos302`

In case when `epam.social` provider is selected, client must also select one of epam social networks (**socialId**): `google`, `facebook`, `linkedin`

**Parameters:** 

redirect_uri: string

networkId: string

deviceId: string

socialId: string (used only for ```epam.social``` provider)

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
Redirect to provider authorization page
</pre>

<br>

<a name="authorize-using-apple-code"></a>

### Authorize using Apple code

**HTTP Method:** POST

**Path:** /auth/apple

**Headers:** 

X-Network: networkId

X-Device-Id: deviceId

**Request:** 

<pre>
{
    "appId": string
    "code": [ byte ]
    "idToken": [ byte ]
    "user": {
        "firstName": string
        "lastName": string
        "email": string
    }
}
</pre>

**Response:** 

<pre>
{
    "session_token": string
    "is_new": bool
    "need_verification": bool
}
</pre>

<br>

<a name="authorize-user-with-verus"></a>

### Authorize user with Verus

**HTTP Method:** POST

**Path:** /auth/verus/idLogin

**Description:** Verus authorization for mobile platforms. Endpoint creates Verus challenge and returns ```challengeId``` and ```deeplink```. Client opens Verus application with deeplink and authorizes with Verus account. After successful authorization, Verus application redirects client to ```redirectUrl```. When client returned to Valuverse application it should call ```/auth/verus/checkChallenge``` endpoint for checking Verus authorization result.

**Request:** 

<pre>
{
    "redirectUrl": string
    "isMobile": bool
    "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
    "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
    "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
}
</pre>

**Response:** 

<pre>
{
    "challengeId": string
    "deepLink": string
}
</pre>

<br>

<a name="authorize-user-with-verus-v2-"></a>

### Authorize user with Verus (v2)

**HTTP Method:** POST

**Path:** /auth/verus/idLoginV2

**Description:** Verus authorization for mobile platforms. Endpoint creates Verus challenge and returns ```challengeId``` and ```deeplink```. Client opens Verus application with deeplink and authorizes with Verus account. After successful authorization, Verus application redirects client to ```redirectUrl```. When client returned to Valuverse application it should call ```/auth/verus/checkChallenge``` endpoint for checking Verus authorization result.

**Request:** 

<pre>
{
    "redirectUrl": string
    "isMobile": bool
    "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
    "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
    "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
}
</pre>

**Response:** 

<pre>
{
    "challengeId": string
    "deepLink": string
}
</pre>

<br>

<a name="authorize-user-with-verus-testnet-"></a>

### Authorize user with Verus (TESTNET)

**HTTP Method:** POST

**Path:** /auth/verus/idLogin/testnet

**Description:** Verus authorization for mobile platforms. Endpoint creates Verus challenge and returns ```challengeId``` and ```deeplink```. Client opens Verus application with deeplink and authorizes with Verus account. After successful authorization, Verus application redirects client to ```redirectUrl```. When client returned to Valuverse application it should call ```/auth/verus/checkChallenge``` endpoint for checking Verus authorization result.

**Request:** 

<pre>
{
    "redirectUrl": string
    "isMobile": bool
    "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
    "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
    "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
}
</pre>

**Response:** 

<pre>
{
    "challengeId": string
    "deepLink": string
}
</pre>

<br>

<a name="authorize-user-with-verus-testnet-"></a>

### Authorize user with Verus (TESTNET)

**HTTP Method:** POST

**Path:** /auth/verus/idLogin/testnetExt

**Description:** Verus authorization for mobile platforms. Endpoint creates Verus challenge and returns ```challengeId``` and ```deeplink```. Client opens Verus application with deeplink and authorizes with Verus account. After successful authorization, Verus application redirects client to ```redirectUrl```. When client returned to Valuverse application it should call ```/auth/verus/checkChallenge``` endpoint for checking Verus authorization result.

**Request:** 

<pre>
{
    "redirectUrl": string
    "isMobile": bool
    "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
    "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
    "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
}
</pre>

**Response:** 

<pre>
{
    "challengeId": string
    "deepLink": string
}
</pre>

<br>

<a name="send-verus-login-response-from-mobile-to-crypto-server"></a>

### Send Verus login response from mobile to crypto server

**HTTP Method:** POST

**Path:** /auth/verus/idLoginResponseMobile

**Request:** 

<pre>
{
    "queryParams": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="send-verus-login-response-from-mobile-to-crypto-server-testnet-"></a>

### Send Verus login response from mobile to crypto server (TESTNET)

**HTTP Method:** POST

**Path:** /auth/verus/idLoginResponseMobileTestnet

**Request:** 

<pre>
{
    "queryParams": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="check-verus-challenge-for-authorization"></a>

### Check Verus challenge for authorization

**HTTP Method:** POST

**Path:** /auth/verus/checkChallenge

**Description:** Checks Verus authorization result after ```/auth/verus/idLogin```.

**Request:** 

<pre>
{
    "challengeId": string
}
</pre>

**Response:** 

<pre>
{
    "session_token": string
    "is_new": bool
    "need_verification": bool
}
</pre>

<br>

<a name="regular-login"></a>

### Regular login

**HTTP Method:** POST

**Path:** /auth/signin

**<span color="red">DEPRECATED</span>** 

**Description:** Api returns 400 HTTP error in case of login failure.

**Headers:** 

X-Network: networkId  // creates session within provided network (alternatively use url param networkId)

X-Socket-Id: socketId // send anonymousAuthorized event after login (alternatively use url param socketId)

**Request:** 

<pre>
{
    "email": string
    "password": string
}
</pre>

**Response:** 

<pre>
{
    "session_token": string
    "is_new": bool
    "need_verification": bool
}
</pre>

<br>

<a name="regular-login"></a>

### Regular login

**HTTP Method:** POST

**Path:** /api/v1/auth/signin

**Headers:** 

X-Network: networkId  // creates session within provided network (alternatively use url param networkId)

X-Socket-Id: socketId // send anonymousAuthorized event after login (alternatively use url param socketId)

**Request:** 

<pre>
{
    "email": string
    "password": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "session_token": string
        "is_new": bool
        "need_verification": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="regular-registration"></a>

### Regular registration

**HTTP Method:** POST

**Path:** /auth/signup

**<span color="red">DEPRECATED</span>** 

**Description:** Api returns 400 HTTP error in case of registration failure. If verificationToken provided in request, api will try to register verified user. It will return error in case if verificationToken is invalid or mismatches with provided email.

**Headers:** 

X-Network: networkId // Creates session within provided network

**Request:** 

<pre>
{
    "email": string
    "password": string
    "phoneNumber": string
    "firstName": string
    "lastName": string
    "zipCode": string
    "verificationToken": string
    "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
    "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
}
</pre>

**Response:** 

<pre>
{
    "session_token": string
    "is_new": bool
    "need_verification": bool
}
</pre>

<br>

<a name="regular-registration"></a>

### Regular registration

**HTTP Method:** POST

**Path:** /api/v1/auth/signup

**Description:** If verificationToken provided in request, api will try to register verified user. It will return error in case if verificationToken is invalid or mismatches with provided email.

**Headers:** 

X-Network: networkId // Creates session within provided network

**Request:** 

<pre>
{
    "email": string
    "password": string
    "phoneNumber": string
    "firstName": string
    "lastName": string
    "zipCode": string
    "verificationToken": string
    "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
    "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "session_token": string
        "is_new": bool
        "need_verification": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="register-by-token"></a>

### Register by token

**HTTP Method:** POST

**Path:** /auth/registerByToken

**<span color="red">DEPRECATED</span>** 

**Description:** returns 400 HTTP error in case of registration failure. If verificationToken provided in request, api will try to register verified user. It will return error in case if verificationToken is invalid or mismatches with provided email.

**Headers:** 

X-Network: networkId // Creates session within provided network

**Request:** 

<pre>
{
    "email": string
    "password": string
    "phoneNumber": string
    "firstName": string
    "lastName": string
    "zipCode": string
    "verificationToken": string
    "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
    "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
}
</pre>

**Response:** 

<pre>
{
    "session_token": string
    "is_new": bool
    "need_verification": bool
}
</pre>

<br>

<a name="register-by-token"></a>

### Register by token

**HTTP Method:** POST

**Path:** /api/v1/auth/registerByToken

**Description:** If verificationToken provided in request, api will try to register verified user. It will return error in case if verificationToken is invalid or mismatches with provided email.

**Headers:** 

X-Network: networkId // Creates session within provided network

**Request:** 

<pre>
{
    "email": string
    "password": string
    "phoneNumber": string
    "firstName": string
    "lastName": string
    "zipCode": string
    "verificationToken": string
    "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
    "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "session_token": string
        "is_new": bool
        "need_verification": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="request-password-restore"></a>

### Request password restore

**HTTP Method:** POST

**Path:** /auth/requestPasswordRestore

**Description:** returns 400 HTTP error in case of request error

**Request:** 

<pre>
{
    "email": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="send-restore-password-code"></a>

### Send restore password code

**HTTP Method:** POST

**Path:** /auth/sendRestorePasswordCode

**<span color="red">DEPRECATED</span>** 

**Description:** Api sends an email message with 6-digit code that should be used in order to restore user password. Restore password code lives for 20 minutes and becomes invalid after that time. 

 * Api returns ```1021: User not found``` error in case when invalid email provided.

**Request:** 

<pre>
{
    "email": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="send-restore-password-code"></a>

### Send restore password code

**HTTP Method:** POST

**Path:** /api/v1/auth/sendRestorePasswordCode

**Description:** Api sends an email message with 6-digit code that should be used in order to restore user password. Restore password code lives for 20 minutes and becomes invalid after that time. 

 * Api returns ```1021: User not found``` error in case when invalid email provided.

**Request:** 

<pre>
{
    "email": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="check-restore-password-code"></a>

### Check restore password code

**HTTP Method:** POST

**Path:** /auth/checkRestorePasswordCode

**<span color="red">DEPRECATED</span>** 

**Description:** Api checks if provided restore password code is valid. 

 * Api returns ```1021: User not found``` error in case when invalid email provided. 

 * Api returns ```705: Too frequent request``` error in case when user tries to check code more than 5 times in 2 minutes. 

 * Api returns ```1051: Verification token not found``` error in case when invalid code provided.

**Request:** 

<pre>
{
    "email": string
    "code": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="check-restore-password-code"></a>

### Check restore password code

**HTTP Method:** POST

**Path:** /api/v1/auth/checkRestorePasswordCode

**Description:** Api checks if provided restore password code is valid. 

 * Api returns ```1021: User not found``` error in case when invalid email provided. 

 * Api returns ```705: Too frequent request``` error in case when user tries to check code more than 5 times in 2 minutes. 

 * Api returns ```1051: Verification token not found``` error in case when invalid code provided.

**Request:** 

<pre>
{
    "email": string
    "code": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="restore-password-by-code"></a>

### Restore password by code

**HTTP Method:** POST

**Path:** /auth/restorePasswordByCode

**<span color="red">DEPRECATED</span>** 

**Description:** Api changes user password using restore password code. 

 * Api returns ```1021: User not found``` error in case when invalid email provided. 

 * Api returns ```705: Too frequent request``` error in case when user tries to restore password more than 5 times in 2 minutes. 

 * Api returns ```1006: Invalid password``` error in case when invalid new password provided. 

 * Api returns ```1051: Verification token not found``` error in case when invalid code provided. 

 * Api returns ```1054: Verification token is already used``` error in case when restore code have already been used.

**Request:** 

<pre>
{
    "email": string
    "code": string
    "password": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="restore-password-by-code"></a>

### Restore password by code

**HTTP Method:** POST

**Path:** /api/v1/auth/restorePasswordByCode

**Description:** Api changes user password using restore password code. 

 * Api returns ```1021: User not found``` error in case when invalid email provided. 

 * Api returns ```705: Too frequent request``` error in case when user tries to restore password more than 5 times in 2 minutes. 

 * Api returns ```1006: Invalid password``` error in case when invalid new password provided. 

 * Api returns ```1051: Verification token not found``` error in case when invalid code provided. 

 * Api returns ```1054: Verification token is already used``` error in case when restore code have already been used.

**Request:** 

<pre>
{
    "email": string
    "code": string
    "password": string
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-one-time-auth-token"></a>

### Get one time auth token

**HTTP Method:** POST

**Path:** /api/v1/auth/getOneTimeAuthToken

**Request:** 

<pre>
map[string]{ custom structure }
</pre>

**Response:** 

<pre>
{
    "data": {
        "token": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="check-one-time-auth-token"></a>

### Check one time auth token

**HTTP Method:** POST

**Path:** /api/v1/auth/checkOneTimeAuthToken/{token}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "session_token": string
        "is_new": bool
        "need_verification": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-id-login"></a>

### Verus ID Login

**Method:** websocket

**Endpoint:** auth:verusIdLogin

**Description:** Endpoint returns deeplink that should be used for Verus authorization. After Verus authorization is finished, server sends ```auth:verusAuthSuccess``` or ```auth:verusAuthError``` event.

**Request:** 

<pre>
{
    "data": {
        "redirectUrl": string
        "isMobile": bool
        "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
        "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
        "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-id-login-valuverse-testnet-"></a>

### Verus ID Login (VALUVERSE TESTNET)

**Method:** websocket

**Endpoint:** auth:verusIdLoginTestnet

**Description:** Endpoint returns deeplink that should be used for Verus authorization. After Verus authorization is finished, server sends ```auth:verusAuthSuccess``` or ```auth:verusAuthError``` event.

**Request:** 

<pre>
{
    "data": {
        "redirectUrl": string
        "isMobile": bool
        "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
        "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
        "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-id-login-verus-testnet-"></a>

### Verus ID Login (VERUS TESTNET)

**Method:** websocket

**Endpoint:** auth:verusIdLoginTestnetExt

**Description:** Endpoint returns deeplink that should be used for Verus authorization. After Verus authorization is finished, server sends ```auth:verusAuthSuccess``` or ```auth:verusAuthError``` event.

**Request:** 

<pre>
{
    "data": {
        "redirectUrl": string
        "isMobile": bool
        "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
        "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
        "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="link-verus-account-with-verus-id-login"></a>

### Link Verus account with Verus ID Login

**Method:** websocket

**Endpoint:** auth:verusLinkIdLogin

**Description:** Endpoint returns deeplink that should be used for Verus authorization. After Verus authorization is finished, server sends ```auth:verusLinkSuccess``` or ```auth:verusLinkError``` event.

**Request:** 

<pre>
{
    "data": {
        "redirectUrl": string
        "isMobile": bool
        "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
        "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
        "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="link-verus-account-with-verus-id-login-valuverse-testnet-"></a>

### Link Verus account with Verus ID Login (VALUVERSE TESTNET)

**Method:** websocket

**Endpoint:** auth:verusLinkIdLoginTestnet

**Description:** Endpoint returns deeplink that should be used for Verus authorization. After Verus authorization is finished, server sends ```auth:verusLinkSuccess``` or ```auth:verusLinkError``` event.

**Request:** 

<pre>
{
    "data": {
        "redirectUrl": string
        "isMobile": bool
        "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
        "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
        "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="link-verus-account-with-verus-id-login-verus-testnet-"></a>

### Link Verus account with Verus ID Login (VERUS TESTNET)

**Method:** websocket

**Endpoint:** auth:verusLinkIdLoginTestnetExt

**Description:** Endpoint returns deeplink that should be used for Verus authorization. After Verus authorization is finished, server sends ```auth:verusLinkSuccess``` or ```auth:verusLinkError``` event.

**Request:** 

<pre>
{
    "data": {
        "redirectUrl": string
        "isMobile": bool
        "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
        "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
        "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="link-valuverse-persona-using-verus-id-login"></a>

### Link Valuverse persona using Verus ID Login

**Method:** websocket

**Endpoint:** auth:verusLinkPersonaAccount

**Description:** Endpoint returns deeplink that should be used for Verus authorization. After Verus authorization is finished, server sends ```auth:verusLinkPersonaAccountResult``` event.

**Request:** 

<pre>
{
    "data": {
        "identityName": string
        "redirectUrl": string
        "isMobile": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="simulate-verus-id-login-response-valuverse-testnet-"></a>

### Simulate Verus Id login response (VALUVERSE TESTNET)

**Method:** websocket

**Endpoint:** auth:verusSimulateVerusIdLoginResponse

**Request:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
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

<a name="verus-authorization-success-event"></a>

### Verus authorization success event

**Event:** auth:verusAuthSuccess

**Description:** Event is emitted after Verus login have been completed and crypto server verifies challengeId. Client should be reconnected with new session id (new socket connection required).

**Data:** 

<pre>
{
    "data": {
        "sessionId": string
        "isNew": bool
        "cypherData": string <span color="#1b1ef7"> // data from wallet encrypted for client public key or zAddress</span>
        "epk": string <span color="#1b1ef7"> // encryption epk, if used cypherData</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-authorization-error-event"></a>

### Verus authorization error event

**Event:** auth:verusAuthError

**Description:** Event is emitted in case if Verus login fails or challengeId verification fails.

**Data:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-link-account-success-event"></a>

### Verus link account success event

**Event:** auth:verusLinkSuccess

**Description:** Event is emitted after Verus link account have been completed and crypto server verifies challengeId.

**Data:** 

<pre>
{
    "data": {
        "cypherData": string <span color="#1b1ef7"> // data from wallet encrypted for client public key or zAddress</span>
        "epk": string <span color="#1b1ef7"> // encryption epk, if used cypherData</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-link-account-error-event"></a>

### Verus link account error event

**Event:** auth:verusLinkError

**Description:** Event is emitted in case if Verus link account fails or challengeId verification fails.

**Data:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

