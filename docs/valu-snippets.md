---
outline: deep
---

# Valu API Snippets

## Valu API routing updater, without any dependencies (VanillaJS):

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
      window.dispatchEvent(new CustomEvent('valu_api-ready', {detail: {}}));
      console.info(`Valu API Ready, from: ${applicationId}`);
      break;
    }
  }
});

const postToValuApplication = (name, message) => {
  const data = {name, message};
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
  observer.observe(body, {childList: true, subtree: true});
  pushRoute(document.location.pathname);
});
```
