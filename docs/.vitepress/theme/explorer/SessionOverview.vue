<template>
  <div class="vx vx-session">
    <BridgeStatus connected-hint="" off-text="Open Valu Docs inside Valu Social to see your session here.">
      <button
        v-if="connected"
        type="button"
        class="vx-link-button vx-status-action"
        :disabled="busy"
        @click="load"
      >{{ busy ? 'Loading…' : 'Refresh' }}</button>
    </BridgeStatus>

    <div class="vx-session-grid">
      <!-- ── who ───────────────────────────────────────────────────────── -->
      <section class="vx-panel" aria-labelledby="vx-you">
        <header class="vx-panel-head">
          <h2 id="vx-you" class="vx-panel-title">Signed in as</h2>
        </header>

        <PanelState :slot-state="calls.user" :connected="connected" idle="The user Valu Social signed in, as every application sees them.">
          <div class="vx-who">
            <span class="vx-avatar" aria-hidden="true">{{ initials }}</span>
            <div class="vx-who-text">
              <div class="vx-who-name">{{ fullName || 'Unnamed user' }}</div>
              <div class="vx-who-id">
                <code>{{ user.id }}</code>
                <CopyButton :text="user.id" label="Copy user id" />
              </div>
            </div>
          </div>
          <dl class="vx-facts">
            <template v-if="user.identityName">
              <dt>Verus ID</dt>
              <dd><code>{{ user.identityName }}</code> · {{ custody }}</dd>
            </template>
            <template v-if="user.emailVerified !== undefined">
              <dt>Email</dt>
              <dd>{{ user.emailVerified ? 'Verified' : 'Not verified' }}</dd>
            </template>
          </dl>
        </PanelState>

        <PanelSource :calls="[{label: 'Users.current', href: '/explorer/service-intents#users--current'}]" :raw="calls.user.data" />
      </section>

      <!-- ── authorization ─────────────────────────────────────────────── -->
      <section class="vx-panel" aria-labelledby="vx-auth">
        <header class="vx-panel-head">
          <h2 id="vx-auth" class="vx-panel-title">Authorization</h2>
          <span v-if="token.claims" class="vx-badge" :class="tokenLive ? 'green' : 'red'">
            {{ tokenLive ? `valid · ${countdown}` : 'expired' }}
          </span>
        </header>

        <PanelState :slot-state="calls.token" :connected="connected" idle="The identity token Valu Social issues to this application for you.">
          <p class="vx-panel-lead">
            Valu Social vouches for you to <code>{{ token.claims?.aud || applicationId || 'valu_docs' }}</code> with a signed
            identity token. An application's backend verifies it instead of running a login of its own.
          </p>
          <dl v-if="token.claims" class="vx-facts">
            <dt>Subject</dt>
            <dd>
              <code>{{ token.claims.sub }}</code>
              <span v-if="user.id && token.claims.sub === user.id" class="vx-muted"> — you</span>
              <span v-else-if="user.id" class="vx-error-text"> — not the signed-in user</span>
            </dd>
            <dt>Audience</dt>
            <dd><code>{{ token.claims.aud }}</code></dd>
            <dt>Issuer</dt>
            <dd><code>{{ token.claims.iss }}</code></dd>
            <template v-if="token.claims.iat">
              <dt>Issued</dt>
              <dd>{{ formatTime(token.claims.iat) }}</dd>
            </template>
            <template v-if="token.claims.exp">
              <dt>Expires</dt>
              <dd>{{ formatTime(token.claims.exp) }}</dd>
            </template>
            <template v-if="token.header">
              <dt>Signed</dt>
              <dd><code>{{ token.header.alg }}</code><template v-if="token.header.kid"> · key <code>{{ token.header.kid }}</code></template></dd>
            </template>
            <template v-for="(value, key) in token.extraClaims" :key="key">
              <dt>{{ key }}</dt>
              <dd><code>{{ typeof value === 'string' ? value : JSON.stringify(value) }}</code></dd>
            </template>
          </dl>
          <p v-else class="vx-error-text">The reply carried no token that could be read.</p>
          <div class="vx-panel-actions">
            <CopyButton v-if="token.raw" :text="token.raw" label="Copy token" button />
            <button type="button" class="vx-button" :disabled="calls.token.status === 'loading'" @click="loadToken">Issue a new one</button>
            <a class="vx-panel-link" href="/identity-token-validation">How a backend verifies it →</a>
          </div>
        </PanelState>

        <PanelSource
          :calls="[{label: 'Application.get-identity-token', href: '/explorer/service-intents#application--get-identity-token'}]"
          :raw="token.claims ? {header: token.header, claims: token.claims} : calls.token.data"
        />
      </section>

      <!-- ── rights ────────────────────────────────────────────────────── -->
      <section class="vx-panel wide" aria-labelledby="vx-rights">
        <header class="vx-panel-head">
          <h2 id="vx-rights" class="vx-panel-title">Rights</h2>
        </header>

        <PanelState :slot-state="calls.user" :connected="connected" idle="Your platform flags, the roles you hold and the badges that grant access in this network.">
          <div class="vx-flags">
            <span v-for="f in flags" :key="f.key" class="vx-flag" :class="{on: f.on}" :title="f.title">
              <span class="vx-flag-mark" aria-hidden="true">{{ f.on ? '✓' : '–' }}</span>{{ f.label }}
            </span>
          </div>

          <div class="vx-subhead">Roles <span class="vx-count">{{ roles.length }}</span></div>
          <p v-if="!roles.length" class="vx-muted">No roles — you act with the rights every member has.</p>
          <ul v-else class="vx-roles">
            <li v-for="r in roles" :key="`${r.id}:${r.targetType}:${r.targetId}`" class="vx-role">
              <div class="vx-role-head">
                <span class="vx-role-name">{{ r.roleName || r.id }}</span>
                <code class="vx-role-id">{{ r.id }}</code>
                <span v-if="r.isBuildIn" class="vx-badge gray" title="System role, cannot be overridden">built-in</span>
                <span class="vx-role-target">on {{ r.targetType || 'platform' }}<template v-if="r.targetId"> <code>{{ r.targetId }}</code></template></span>
              </div>
              <div v-if="r.permissions?.length" class="vx-options">
                <code v-for="p in r.permissions" :key="p">{{ p }}</code>
              </div>
            </li>
          </ul>

          <div class="vx-subhead">Badges in this network <span v-if="calls.badges.status === 'ok'" class="vx-count">{{ badges.length }}</span></div>
          <p v-if="calls.badges.status === 'loading' || calls.badges.status === 'idle'" class="vx-muted">Loading…</p>
          <p v-else-if="badgesError" class="vx-error-text">{{ badgesError }}</p>
          <p v-else-if="!badges.length" class="vx-muted">No badges. Badges grant rights through badge-based policies (CBAC).</p>
          <ul v-else class="vx-badge-list">
            <li v-for="b in badges" :key="b.badgeId" :title="b.badgeDescription">
              <strong>{{ b.badgeName }}</strong>
              <span v-if="b.badgeDescription" class="vx-muted"> — {{ b.badgeDescription }}</span>
            </li>
          </ul>
        </PanelState>

        <PanelSource
          :calls="[
            {label: 'Users.current', href: '/explorer/service-intents#users--current'},
            {label: 'Profile.get-user-badges', href: '/explorer/service-intents#profile--get-user-badges'},
          ]"
          :raw="calls.user.data ? {permissions: user.permissions, userRoles: user.userRoles, badges: calls.badges.data} : null"
        />
      </section>

      <!-- ── network ───────────────────────────────────────────────────── -->
      <section class="vx-panel wide" aria-labelledby="vx-network">
        <header class="vx-panel-head">
          <h2 id="vx-network" class="vx-panel-title">Network</h2>
        </header>

        <PanelState :slot-state="calls.network" :connected="connected" idle="The network this session runs in — every call above is scoped to it.">
          <div class="vx-who">
            <div class="vx-who-text">
              <div class="vx-who-name">{{ networkName }}</div>
              <div class="vx-who-id">
                <code>{{ networkId }}</code>
                <CopyButton :text="networkId" label="Copy network id" />
              </div>
            </div>
          </div>
          <dl class="vx-facts">
            <template v-if="networkInfo?.network?.type">
              <dt>Type</dt>
              <dd>{{ networkInfo.network.type }}</dd>
            </template>
            <template v-if="networkInfo?.network?.parentNetworkId">
              <dt>Parent</dt>
              <dd><code>{{ networkInfo.network.parentNetworkId }}</code></dd>
            </template>
            <template v-if="networkInfo && networkInfo.subscribed !== undefined">
              <dt>Membership</dt>
              <dd>{{ networkInfo.subscribed ? 'Subscribed' : 'Not subscribed' }}</dd>
            </template>
          </dl>
          <template v-if="settings.length">
            <div class="vx-subhead">Settings</div>
            <div class="vx-flags">
              <span v-for="s in settings" :key="s.key" class="vx-flag" :class="{on: s.on}" :title="s.key">
                <span class="vx-flag-mark" aria-hidden="true">{{ s.on ? '✓' : '–' }}</span>{{ s.label }}
              </span>
            </div>
          </template>
          <p v-else-if="calls.networkInfo.status === 'loading'" class="vx-muted">Loading the network's settings…</p>
          <p v-else-if="calls.networkInfo.status === 'error'" class="vx-error-text">{{ calls.networkInfo.error }}</p>
        </PanelState>

        <PanelSource
          :calls="[
            {label: 'Networks.get-current-network', href: '/explorer/service-intents#networks--get-current-network'},
            {label: 'network.get', href: ''},
          ]"
          :raw="calls.network.data ? {current: calls.network.data, info: calls.networkInfo.data} : null"
        />
      </section>
    </div>
  </div>
</template>

<script setup>
import {computed, defineComponent, h, onBeforeUnmount, onMounted, reactive, ref, watch} from 'vue';
import BridgeStatus from './BridgeStatus.vue';
import {copyText, prettyJson} from './format.mjs';
import {callService, runApi, settle, useValuBridge} from './valuBridge.mjs';

const {connected, applicationId} = useValuBridge();

// ── calls ───────────────────────────────────────────────────────────────

const blank = () => ({status: 'idle', data: null, error: ''});
const calls = reactive({user: blank(), token: blank(), network: blank(), networkInfo: blank(), badges: blank()});

/** Run one call into its slot; resolves to the value, or undefined when it failed. */
async function track(key, promise) {
  calls[key] = {status: 'loading', data: null, error: ''};
  try {
    const data = await promise;
    calls[key] = {status: 'ok', data, error: ''};
    return data;
  } catch (e) {
    calls[key] = {status: 'error', data: null, error: e?.message ?? String(e)};
    return undefined;
  }
}

const busy = computed(() => Object.values(calls).some(c => c.status === 'loading'));

const loadToken = () => track('token', settle(callService('Application', 'get-identity-token', {}).promise));

async function load() {
  if (!connected.value) return;
  const userCall = track('user', settle(callService('Users', 'current', {}).promise));
  const networkCall = track('network', settle(callService('Networks', 'get-current-network', {}).promise));
  loadToken();

  const [me, net] = await Promise.all([userCall, networkCall]);
  const id = net?.networkId;
  if (id) track('networkInfo', settle(runApi('network', 'get', id)));
  else calls.networkInfo = blank();
  if (me?.id) track('badges', settle(callService('Profile', 'get-user-badges', {userId: me.id, networkId: id || 'all'}).promise));
  else calls.badges = {status: 'error', data: null, error: 'Needs the signed-in user.'};
}

watch(connected, isConnected => { if (isConnected) load(); }, {immediate: true});

// ── who ─────────────────────────────────────────────────────────────────

const user = computed(() => calls.user.data ?? {});
const fullName = computed(() => user.value.fullName
  || [user.value.firstName, user.value.lastName].filter(Boolean).join(' ').trim());
const initials = computed(() => (fullName.value || '?')
  .split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join(''));

const CUSTODY = {1: 'self-sovereign (wallet-owned)', 2: 'shared custody (ValuLight)'};
const custody = computed(() => CUSTODY[user.value.identityCustody] ?? 'custody not set');

// ── authorization ───────────────────────────────────────────────────────

function decodePart(part) {
  const b64 = part.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(part.length / 4) * 4, '=');
  const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

const KNOWN_CLAIMS = new Set(['sub', 'aud', 'iss', 'iat', 'exp', 'nbf', 'jti']);

const token = computed(() => {
  const data = calls.token.data;
  const raw = typeof data === 'string' ? data : data?.token;
  if (typeof raw !== 'string' || raw.split('.').length !== 3) return {raw: '', header: null, claims: null, extraClaims: {}};
  try {
    const [header, claims] = raw.split('.').slice(0, 2).map(decodePart);
    const extraClaims = Object.fromEntries(Object.entries(claims).filter(([k]) => !KNOWN_CLAIMS.has(k)));
    return {raw, header, claims, extraClaims};
  } catch {
    return {raw, header: null, claims: null, extraClaims: {}};
  }
});

const now = ref(Date.now());
let clock = null;
onMounted(() => { clock = setInterval(() => { now.value = Date.now(); }, 1000); });
onBeforeUnmount(() => clearInterval(clock));

const tokenLive = computed(() => !token.value.claims?.exp || token.value.claims.exp * 1000 > now.value);
const countdown = computed(() => {
  const exp = token.value.claims?.exp;
  if (!exp) return 'no expiry';
  const s = Math.max(0, Math.round(exp - now.value / 1000));
  return `expires in ${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
});

const formatTime = seconds => new Date(seconds * 1000).toLocaleString(undefined, {
  dateStyle: 'medium', timeStyle: 'medium',
});

// ── rights ──────────────────────────────────────────────────────────────

const flags = computed(() => [
  {key: 'admin', label: 'Platform admin', on: Boolean(user.value.permissions?.admin), title: 'permissions.admin'},
  {key: 'developer', label: 'Developer', on: Boolean(user.value.permissions?.developer), title: 'permissions.developer'},
  ...[['superAdmin', 'Super admin'], ['networkAdmin', 'Network admin'], ['roomfulAdmin', 'Roomful admin']].map(([id, label]) => ({
    key: id, label, on: roles.value.some(r => r.id === id), title: `role ${id}`,
  })),
]);

const roles = computed(() => (Array.isArray(user.value.userRoles) ? user.value.userRoles : []));

const badges = computed(() => calls.badges.data?.badges ?? []);
// A Roomful ack carries `error` on success too; only `error.status` is a failure.
const badgesError = computed(() => {
  if (calls.badges.status === 'error') return calls.badges.error;
  const e = calls.badges.data?.error;
  return e?.status ? (e.message || 'The badges call failed.') : '';
});

// ── network ─────────────────────────────────────────────────────────────

const networkId = computed(() => calls.network.data?.networkId ?? '');
const networkInfo = computed(() => calls.networkInfo.data);
const networkName = computed(() => calls.network.data?.name || networkInfo.value?.network?.fullName || 'Unnamed network');

const SETTINGS = [
  ['allowAnonymous', 'Anonymous access'],
  ['onlyVerifiedAccounts', 'Verified accounts only'],
  ['enablePayments', 'Payments'],
  ['enableTokenomics', 'Tokenomics'],
  ['allUsersAreConnected', 'Everyone connected'],
  ['disableRoomCreation', 'Room creation off'],
  ['hideTextchat', 'Text chat hidden'],
  ['hideVideochat', 'Video chat hidden'],
  ['hasAnalytics', 'Analytics'],
  ['hasExpo', 'Expo'],
];
const settings = computed(() => {
  const defaults = networkInfo.value?.networkDefaults;
  if (!defaults) return [];
  return SETTINGS.filter(([key]) => key in defaults).map(([key, label]) => ({key, label, on: Boolean(defaults[key])}));
});

// ── small pieces ────────────────────────────────────────────────────────

/** Loading / error / not-connected states around a panel's body. */
const PanelState = defineComponent({
  props: {slotState: Object, connected: Boolean, idle: String},
  setup(props, {slots}) {
    return () => {
      const s = props.slotState;
      if (!props.connected) return h('p', {class: 'vx-muted vx-panel-idle'}, props.idle);
      if (s.status === 'error') return h('p', {class: 'vx-error-text'}, s.error);
      if (s.status !== 'ok') return h('p', {class: 'vx-muted vx-panel-idle'}, 'Asking Valu Social…');
      return slots.default?.();
    };
  },
});

/** Which calls fed a panel, linked to their explorer cards, plus the raw replies. */
const PanelSource = defineComponent({
  props: {calls: Array, raw: null},
  setup(props) {
    const open = ref(false);
    return () => h('footer', {class: 'vx-panel-source'}, [
      h('span', {class: 'vx-muted'}, 'From '),
      ...props.calls.flatMap((c, i) => [
        i ? h('span', {class: 'vx-muted'}, ' · ') : null,
        c.href ? h('a', {href: c.href}, h('code', c.label)) : h('code', c.label),
      ]),
      props.raw ? h('button', {
        type: 'button', class: 'vx-link-button vx-panel-raw-toggle', onClick: () => { open.value = !open.value; },
      }, open.value ? 'Hide reply' : 'Show reply') : null,
      open.value && props.raw ? h('pre', {class: 'vx-panel-raw'}, h('code', prettyJson(props.raw))) : null,
    ]);
  },
});

const CopyButton = defineComponent({
  props: {text: String, label: String, button: Boolean},
  setup(props) {
    const done = ref(false);
    const copy = async () => {
      if (!props.text || !(await copyText(props.text))) return;
      done.value = true;
      setTimeout(() => { done.value = false; }, 1500);
    };
    return () => h('button', {
      type: 'button',
      class: props.button ? 'vx-button' : 'vx-link-button',
      title: props.label,
      'aria-label': props.label,
      onClick: copy,
    }, done.value ? 'Copied' : (props.button ? props.label : 'Copy'));
  },
});
</script>
