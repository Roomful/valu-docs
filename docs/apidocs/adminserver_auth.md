<br>

<a name="adminserver-auth-api"></a>

## Adminserver: Auth API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/auth/logout](#logout) | webRequest | Logout |
| [/auth/check](#auth-check) | webRequest | Auth check |
| [/auth/getOneTimeAuthToken](#get-one-time-auth-token) | webRequest | Get one time auth token |
| [/auth/login](#login) | webRequest | Login |

<br>

<a name="logout"></a>

### Logout

**HTTP Method:** POST

**Path:** /auth/logout

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="auth-check"></a>

### Auth check

**HTTP Method:** POST

**Path:** /auth/check

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-one-time-auth-token"></a>

### Get one time auth token

**HTTP Method:** POST

**Path:** /auth/getOneTimeAuthToken

**Request:** 

<pre>
map[string]{ custom structure }
</pre>

**Response:** 

<pre>
{
    "token": string
}
</pre>

<br>

<a name="login"></a>

### Login

**HTTP Method:** POST

**Path:** /auth/login

**Description:** 

Api sets session to cookies and also returns session id in response. 

Session id could be set to header `X-Session-Id: {sessionId}` to authorize following api requests.

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
    "sessionId": string
    "userId": string
    "preferredNetworkId": string <span color="#1b1ef7"> // network with the most powerful user role</span>
    "preferredNetworkName": string
}
</pre>

