---
outline: deep
---

# Valu API Snippets

## React Hook: useValuApi

A reusable React hook that initializes ValuApi as a singleton and returns `null` until the connection is ready. Use this in any component that needs to call Valu APIs.

```tsx
import { useEffect, useState } from 'react';
import { ValuApi } from '@arkeytyp/valu-api';

export const useValuApi = (): ValuApi | null => {
  const [valuApi, setValuApi] = useState<ValuApi | null>(null);

  useEffect(() => {
    // Singleton: reuse existing instance or create a new one
    let api = (globalThis as any).valuApi as ValuApi | undefined;
    if (!api) {
      api = (globalThis as any).valuApi = new ValuApi();
    }

    if (api.connected) {
      // Already connected
      setValuApi(api);
    } else {
      // Wait for connection
      api.addEventListener(ValuApi.API_READY, () => {
        setValuApi(api!);
      });
    }
  }, []);

  return valuApi;
};
```

**Usage in a component:**

```tsx
function MyComponent() {
  const valuApi = useValuApi();

  if (!valuApi) return <p>Connecting to Valu...</p>;

  // Safe to make API calls here
  return <p>Connected!</p>;
}
```

## React: Get Current User Info and Avatar

A complete example showing how to get the logged-in user's details and avatar inside a React component.

```tsx
import { useEffect, useState } from 'react';
import { useValuApi } from './useValuApi';

interface ValuUser {
  id: string;
  firstName: string;
  lastName: string;
  companyTitle?: string;
}

function UserProfile() {
  const valuApi = useValuApi();
  const [user, setUser] = useState<ValuUser | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  useEffect(() => {
    if (!valuApi) return;

    async function fetchUser() {
      const usersApi = await valuApi!.getApi('users');
      const currentUser = await usersApi.run('current');
      if (!currentUser) return;

      setUser({
        id: currentUser.id,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        companyTitle: currentUser.companyTitle,
      });

      // Avatar is a separate API call — not a field on the user object
      const icon = await usersApi.run('get-icon', { userId: currentUser.id });
      if (icon) setAvatarUrl(icon);
    }

    fetchUser();
  }, [valuApi]);

  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      {avatarUrl && <img src={avatarUrl} alt="avatar" />}
      <h2>{user.firstName} {user.lastName}</h2>
      {user.companyTitle && <p>{user.companyTitle}</p>}
    </div>
  );
}
```

## React: Detect Iframe Mode

Check whether your app is running standalone or embedded inside Valu Social.

```tsx
import { useMemo } from 'react';

function App() {
  const isIFrame = useMemo(() => window.self !== window.top, []);

  return (
    <div>
      {isIFrame ? (
        <p>Running inside Valu Social</p>
      ) : (
        <p>Running standalone</p>
      )}
    </div>
  );
}
```

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

> **Note:** For most apps, use the `@arkeytyp/valu-api` npm package instead.
> This vanilla snippet is only useful when you cannot add npm dependencies (e.g., WordPress, static sites, legacy apps).
