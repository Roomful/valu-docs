// The Explorer's half of the Valu API bridge: request/response over postMessage
// with the Valu Social application that frames this site.
//
// The handshake itself lives in the inline head script (config.mts), because
// `api:ready` can arrive before the Vue app mounts. It leaves the host's window
// and origin on `window.__valuBridge`; this module only sends requests to that
// window and matches the replies by requestId.
//
// The protocol is the host's (valusocial-web src/Stores/IFrame/IFrameStore.js):
//
//   api:run-intent      {applicationId, action, params, requestId}  → api:run-completed
//   api:service-intent  {applicationId, action, params, requestId}  → api:run-console-completed
//   api:create-pointer  {api, version?, guid, requestId}            → api:pointer-created
//   api:run             {apiPointerId, functionName, params, requestId} → api:run-completed
//
// A failure comes back as the reply's message `{error}`.

import {onMounted, readonly, ref} from 'vue';
import {decodeJwt} from './format.mjs';

const framed = ref(false);
const connected = ref(false);
const applicationId = ref('');

const pending = new Map();
let installed = false;
let counter = 0;

const bridgeState = () => (typeof window === 'undefined' ? null : window.__valuBridge);

function sync() {
  const state = bridgeState();
  connected.value = Boolean(state?.ready);
  applicationId.value = state?.applicationId ?? '';
}

function onMessage(event) {
  const state = bridgeState();
  // Replies only from the window that sent api:ready.
  if (!state?.source || event.source !== state.source) return;
  const data = event.data;
  if (data?.target !== 'valuApi' || !data.requestId) return;
  const entry = pending.get(data.requestId);
  if (!entry) return;
  pending.delete(data.requestId);
  entry.resolve(data.message);
}

function install() {
  if (installed || typeof window === 'undefined') return;
  installed = true;
  framed.value = window.self !== window.top;
  sync();
  window.addEventListener('valu_api-ready', () => {
    pointers.clear();
    sync();
  });
  window.addEventListener('message', onMessage);
}

/** Reactive bridge status for a component. */
export function useValuBridge() {
  onMounted(install);
  return {
    framed: readonly(framed),
    connected: readonly(connected),
    applicationId: readonly(applicationId),
  };
}

/**
 * Send one request to the host.
 *
 * @return {{promise: Promise<any>, cancel: () => void}} `cancel` stops waiting;
 *   the host may still finish the call (a picker the user has open, say).
 */
function request(name, message) {
  const state = bridgeState();
  if (!state?.ready || !state.source) {
    return {promise: Promise.reject(new Error('Not connected to Valu Social.')), cancel: () => {}};
  }

  const requestId = `valu-docs-${Date.now().toString(36)}-${++counter}`;
  let cancel = () => {};
  const promise = new Promise((resolve, reject) => {
    pending.set(requestId, {resolve});
    cancel = () => {
      if (!pending.delete(requestId)) return;
      reject(new Error('Stopped waiting for a reply.'));
    };
  });

  state.source.postMessage({name, message: {...message, requestId}}, state.origin);
  return {promise, cancel};
}

/** valuApi.sendIntent — an application intent. */
export const runIntent = (applicationId, action, params) =>
  request('api:run-intent', {applicationId, action, params});

/** valuApi.callService — a service intent. */
export const callService = (serviceId, action, params) =>
  request('api:service-intent', {applicationId: serviceId, action, params});

// One pointer per API name, created on first use and dropped when the host
// connects again (a new api:ready means a fresh pointer table on its side).
const pointers = new Map();

function pointerFor(api) {
  if (!pointers.has(api)) {
    const guid = `valu-docs-${api}-${Date.now().toString(36)}`;
    const created = request('api:create-pointer', {api, guid}).promise.then(reply => {
      const error = replyError(reply);
      if (error) throw new Error(error);
      return guid;
    });
    created.catch(() => pointers.delete(api));
    pointers.set(api, created);
  }
  return pointers.get(api);
}

/** `(await valuApi.getApi(api)).run(functionName, params)` — a system API call. */
export async function runApi(api, functionName, params) {
  const apiPointerId = await pointerFor(api);
  return request('api:run', {apiPointerId, functionName, params}).promise;
}

/** A reply as a value: the bridge's `{error}` envelope becomes a thrown Error. */
export async function settle(promise) {
  const reply = await promise;
  const error = replyError(reply);
  if (error) throw new Error(error);
  return reply;
}

let tokenCache = null;

/**
 * The platform's identity token for the signed-in user, issued to this app
 * (Application.get-identity-token), reused until 30 s before it expires.
 */
export async function identityToken() {
  if (tokenCache && tokenCache.exp * 1000 - Date.now() > 30_000) return tokenCache.token;
  const reply = await settle(callService('Application', 'get-identity-token', {}).promise);
  const token = typeof reply === 'string' ? reply : reply?.token;
  if (typeof token !== 'string') throw new Error('Valu Social returned no identity token.');
  tokenCache = {token, exp: decodeJwt(token)?.claims?.exp ?? 0};
  return token;
}

/** The reply is a failure when it is the bridge's `{error}` envelope and nothing else. */
export function replyError(reply) {
  if (!reply || typeof reply !== 'object' || Array.isArray(reply)) return null;
  const keys = Object.keys(reply);
  if (keys.length !== 1 || keys[0] !== 'error') return null;
  const error = reply.error;
  if (error instanceof Error) return error.message || String(error);
  if (typeof error === 'string') return error;
  return error?.message ?? JSON.stringify(error);
}
