---
outline: deep
---

# Valu API Snippets

All snippets use `createValuApp()`, the package's one entry point. The same code runs inside Valu Social (*embedded*) and at the app's own address (*dedicated*, where the user signs in through a Valu popup). Install from GitHub until version 2 is on npm:

```bash
npm install github:Roomful/valu-api#b951fb7
```

## React Hook: useValu

Creates the app object once per page and returns `null` until it is ready. Use it in any component that calls Valu.

```tsx
import { useEffect, useState } from 'react';
import { createValuApp } from '@arkeytyp/valu-api';

type ValuApp = Awaited<ReturnType<typeof createValuApp>>;

// One app object per page, even when React mounts twice (StrictMode).
let starting: Promise<ValuApp> | null = null;
const startValu = () =>
  (starting ??= createValuApp().then(async valu => {
    await valu.ready;
    return valu;
  }));

export function useValu(): ValuApp | null {
  const [valu, setValu] = useState<ValuApp | null>(null);

  useEffect(() => {
    let live = true;
    startValu().then(
      app => live && setValu(app),
      error => console.error('Valu did not answer:', error.code),
    );
    return () => { live = false; };
  }, []);

  return valu;
}
```

**Usage in a component:**

```tsx
function MyComponent() {
  const valu = useValu();

  if (!valu) return <p>Connecting to Valu...</p>;

  return <p>Connected ({valu.mode})</p>;
}
```

## React Hook: useValuAuth

The signed-in state, kept current. At the app's own address it starts signed out until the user signs in; inside Valu Social it is Valu Social's user.

```tsx
import { useEffect, useState } from 'react';
import { useValu } from './useValu';

export function useValuAuth() {
  const valu = useValu();
  const [auth, setAuth] = useState(() => valu?.auth.state ?? null);

  useEffect(() => {
    if (!valu) return;
    setAuth(valu.auth.state);
    return valu.auth.on('change', setAuth); // returns the way to stop
  }, [valu]);

  return { valu, auth };
}
```

## React: Sign-In Button

Only needed at the app's own address. The browser opens the popup only from a click, so call `signIn()` first thing in the handler, with no `await` before it.

```tsx
import { useState } from 'react';
import { useValuAuth } from './useValuAuth';

function SignInButton() {
  const { valu, auth } = useValuAuth();
  const [error, setError] = useState('');

  if (!valu || valu.mode !== 'dedicated' || auth?.signedIn) return null;

  return (
    <>
      <button onClick={() => valu.auth.signIn().catch(e => setError(e.code))}>
        Sign in with Valu
      </button>
      {error && <p>Sign-in failed: {error}</p>}
    </>
  );
}
```

`error.code` is one of `popup_blocked`, `cancelled`, `timeout`, `not_a_member`, `invalid_token`, `unavailable`, `master_mismatch`.

## React: Get Current User Info

```tsx
import { useEffect, useState } from 'react';
import { displayNameOf } from '@arkeytyp/valu-api';
import { useValuAuth } from './useValuAuth';

function UserProfile() {
  const { valu, auth } = useValuAuth();
  const [user, setUser] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    if (!valu || !auth?.signedIn) return;
    // valu.data.* resolves the payload and throws on an error;
    // valu.Users.current() would resolve the envelope {data} | {error} instead.
    valu.data.Users.current().then(({ user }) => setUser(user));
  }, [valu, auth?.signedIn]);

  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      <h2>{displayNameOf(user)}</h2>
      <p>Network: {auth?.network?.name}</p>
    </div>
  );
}
```

`displayNameOf(user)` reads whichever name fields the record has. `auth.user` (`{id, name}`) is enough for a greeting; `Users.current()` gives the full record.

## React: Embedded or Dedicated

`valu.mode` says where the app runs. Hide what only Valu Social can do (expand, close, the dock pickers, opening other apps) when it is `dedicated`.

```tsx
function Toolbar() {
  const valu = useValu();
  if (!valu) return null;

  return (
    <div>
      {valu.mode === 'embedded' && (
        <button onClick={() => valu.Application.expandApplication()}>Expand</button>
      )}
      <button onClick={() => valu.Commerce.openCart()}>My Cart</button>
    </div>
  );
}
```

`valu.Commerce.openCart()` works in both modes: at the app's own address it opens Valu Social in a tab, showing the cart.

## Vanilla JS: Routing Updater (No Dependencies)

For non-React apps that only need route synchronization with Valu Social, without importing the full `@arkeytyp/valu-api` package. This listens for the raw `postMessage` events and pushes route changes back to the host.

```js
let applicationId, source, origin;

window.addEventListener('message', event => {
  if (event.data?.target !== 'valuApi') return;

  const message = event.data.message;

  switch (event.data.name) {
    case 'api:ready': {
      applicationId = message.applicationId;
      source = event.source;
      origin = event.origin;
      window.dispatchEvent(new CustomEvent('valu_api-ready', { detail: {} }));
      console.info(`Valu API Ready, from: ${applicationId}`);
      break;
    }
  }
});

const postToValuApplication = (name, message) => {
  const data = { name, message };
  source.postMessage(data, origin);
};

const pushRoute = path => {
  postToValuApplication('api:run-command', {
    command: 'pushRoute',
    data: path,
  });
};

window.addEventListener('valu_api-ready', async () => {
  let oldPath = document.location.pathname;
  const body = document.querySelector('body');
  const observer = new MutationObserver(() => {
    if (oldPath !== document.location.pathname) {
      pushRoute(document.location.pathname);
      oldPath = document.location.pathname;
    }
  });
  observer.observe(body, { childList: true, subtree: true });
  pushRoute(document.location.pathname);
});
```

> **Note:** For most apps, use `createValuApp()` from `@arkeytyp/valu-api` instead (routes: `valu.bridge.pushRoute(path)`, see [Valu Routing](/valu-routing)).
> This vanilla snippet is only useful when you cannot add npm dependencies (e.g., WordPress, static sites, legacy apps), and it works inside Valu Social only.
