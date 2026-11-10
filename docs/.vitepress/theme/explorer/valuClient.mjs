// The Explorer's line to Valu Social: the valu-api package itself, as any app
// uses it. `createValuApp()` in a frame is embedded mode: every call is one
// `api:call` that Valu Social answers with valu-api's own function, typed
// intents included, so the code a page shows is the call it just ran.
//
// Loaded on the client only (VitePress also renders these pages in Node), and
// once per page load: the same client serves every component.

import {onMounted, readonly, ref} from 'vue';
import {decodeJwt} from './format.mjs';

const framed = ref(false);
const connected = ref(false);
const failed = ref('');

let client = null;

/**
 * Dev only: a Valu Social on this machine is not one of the origins valu-api
 * trusts by default. `?hostOrigins=http://localhost:3005,` names it (the
 * trailing comma keeps what Valu Social appends out of the value); without
 * it, a parent on localhost (the frame's referrer) is trusted.
 */
function devHostOrigins() {
  if (!import.meta.env.DEV) return undefined;
  const raw = new URLSearchParams(window.location.search).get('hostOrigins');
  const list = (raw ?? '').split(',').map(s => s.trim()).filter(s => /^https?:\/\//.test(s));
  if (list.length) return list;
  try {
    const parent = new URL(document.referrer).origin;
    if (/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(parent)) return [parent];
  } catch { /* no referrer */ }
  return undefined;
}

/** The one valu-api client of this page, created on first use (in the browser only). */
export function getValu() {
  if (typeof window === 'undefined') return Promise.reject(new Error('Not in a browser.'));
  if (!client) {
    framed.value = window.self !== window.top;
    client = import('@arkeytyp/valu-api').then(async ({createValuApp}) => {
      const hostOrigins = devHostOrigins();
      const valu = await createValuApp(hostOrigins ? {hostOrigins} : {});
      if (valu.mode !== 'embedded') return valu;
      valu.ready.then(
        () => { connected.value = true; },
        error => { failed.value = error?.message || String(error); },
      );
      return valu;
    });
  }
  return client;
}

/** Reactive connection status for a component. */
export function useValu() {
  onMounted(() => {
    framed.value = window.self !== window.top;
    // Outside Valu Social there is nothing to connect to: the pages are a reference.
    if (framed.value) getValu().catch(error => { failed.value = error?.message || String(error); });
  });
  return {framed: readonly(framed), connected: readonly(connected), failed: readonly(failed)};
}

/**
 * `valu.call(name, params)`: the envelope `{data} | {error}`, never a throw.
 * `name` is `Namespace.method`, as `valu.<Namespace>.<method>()` names it.
 */
export async function call(name, params = {}, options) {
  const valu = await getValu();
  return valu.call(name, params, options);
}

/** The payload of `valu.call`, or a thrown Error with the envelope's message. */
export async function callData(name, params = {}, options) {
  const reply = await call(name, params, options);
  const message = errorOf(reply);
  if (message) throw new Error(message);
  return reply?.data;
}

/** The envelope's failure as text, or '' when it is not one. */
export function errorOf(reply) {
  const error = reply?.error;
  if (!error || error.status === false) return '';
  // valu-api's refusals: `message` is the name (`forbidden`), `description` the sentence.
  const parts = [error.description ? `${error.description} — ${error.message}` : error.message || 'The call failed.'];
  if (error.code !== undefined) parts.push(`(${error.code})`);
  if (error.scope) parts.push(`scope ${error.scope}`);
  return parts.join(' ');
}

let tokenCache = null;
let tokenPending = null;

/**
 * The platform's identity token for the signed-in user, issued to this app
 * (`valu.data.Application.getIdentityToken()`), reused until 30 s before it
 * expires. Calls made while one is on its way share it.
 */
export function identityToken() {
  if (tokenCache && tokenCache.exp * 1000 - Date.now() > 30_000) return Promise.resolve(tokenCache.token);
  tokenPending ??= callData('Application.getIdentityToken')
    .then(data => {
      const token = typeof data === 'string' ? data : data?.token;
      if (typeof token !== 'string') throw new Error('Valu Social returned no identity token.');
      tokenCache = {token, exp: decodeJwt(token)?.claims?.exp ?? 0};
      return token;
    })
    .finally(() => { tokenPending = null; });
  return tokenPending;
}
