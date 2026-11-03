---
outline: deep
---

# Miniapp Identity Token — Validation Guide

## Request the token

From the miniapp, call the `Application` service intent `get-identity-token` to obtain a signed JWT proving the current user's identity.

### Intent reference

| Field | Value |
| ----- | ----- |
| Service | `Application` |
| Action | `get-identity-token` |
| Availability | Developer |

**Parameters:** None — the target application is inferred from the calling mini-app.

**JWT claims returned:** `sub` = userId, `aud` = callingApplicationId, `iss` = platform, `exp` = 5 min from now.

### Usage example

```javascript
import { createValuApp } from "@arkeytyp/valu-api";

const valu = await createValuApp();

async function fetchIdentityToken() {
  // The payload; throws ValuServiceError when the call is refused (e.g. sign_in_required).
  const { token } = await valu.data.Application.getIdentityToken();

  // Send the token to your backend with each request
  const res = await fetch('https://your-backend.example.com/api/data', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
```

It works in both places an app runs: inside Valu Social, and at the app's own address once the user has signed in (`valu.auth.signIn()`). Its scope, `application:identity`, is basic: nobody is asked, but the app must list it in `valu-permissions.json`.

::: warning
The token is valid for **5 minutes**. You can reuse it for multiple requests within that window — just make sure to request a fresh one before it expires.
:::

## Fetch the public keys

Your backend fetches the JWKS once and caches it (keys change only on platform restart):

```
GET https://<platform-host>/.well-known/jwks.json
```

```json
{
  "keys": [{
    "kty": "RSA",
    "use": "sig",
    "alg": "RS256",
    "kid": "<key-id>",
    "n": "...",
    "e": "AQAB"
  }]
}
```

## Validate the token

Match the JWT `kid` header to the correct key in the JWKS, then verify:

| Check               | Expected value                                   |
| ------------------- | ------------------------------------------------ |
| Signature algorithm | `RS256`                                          |
| `iss`               | Platform issuer (e.g. `https://api.roomful.net`) |
| `aud`               | Your miniapp ID                                  |
| `exp`               | Must be in the future                            |

The `sub` claim contains the verified platform user ID.

### Node.js example (using jose)

```javascript
import { createRemoteJWKSet, jwtVerify } from "jose";

const JWKS = createRemoteJWKSet(
  new URL("https://<platform-host>/.well-known/jwks.json")
);

async function verifyIdentityToken(token) {
  const { payload } = await jwtVerify(token, JWKS, {
    issuer: "https://<platform-host>",
    audience: "YOUR_APP_ID",
  });
  return payload.sub; // platform user ID
}
```

## Security notes

::: danger
Never validate tokens client-side; signature verification must happen on your backend.
:::

- **Always verify `aud`** — a token issued for a different miniapp must be rejected.
- **Cache JWKS with a TTL** (e.g. 1 hour) but re-fetch when you encounter an unknown `kid`.
- **Do not accept expired tokens** — the 5-minute window is intentional; reject anything with `exp` in the past.
