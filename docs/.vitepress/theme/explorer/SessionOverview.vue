<template>
  <div class="vx vx-session">
    <BridgeStatus off-text="Open Valu Docs inside Valu Social to see your session here." />

    <div class="vx-session-grid">
      <!-- ── who, and what the platform lets them do ───────────────────── -->
      <section class="vx-panel" aria-labelledby="vx-you">
        <header class="vx-panel-head">
          <h2 id="vx-you" class="vx-panel-title">Signed in as</h2>
        </header>

        <PanelState :slot-state="calls.user" :connected="connected">
          <div class="vx-who">
            <img
              v-if="avatarUrl && !avatarFailed"
              class="vx-avatar"
              :src="avatarUrl"
              alt=""
              @error="avatarFailed = true"
            />
            <span v-else class="vx-avatar" aria-hidden="true">{{ initials }}</span>
            <div class="vx-who-text">
              <div class="vx-who-name">{{ fullName || 'Unnamed user' }}</div>
              <div class="vx-who-id">
                <code>{{ user.id }}</code>
                <CopyButton :text="user.id" label="Copy user id" />
              </div>
            </div>
          </div>

          <!-- What valu.data.Users.current() returns: the user's own profile,
               no roles or account flags. -->
          <dl v-if="user.companyName || user.companyTitle" class="vx-facts">
            <template v-if="user.companyName">
              <dt>Company</dt>
              <dd>{{ user.companyName }}</dd>
            </template>
            <template v-if="user.companyTitle">
              <dt>Title</dt>
              <dd>{{ user.companyTitle }}</dd>
            </template>
          </dl>
        </PanelState>
      </section>

      <!-- ── authorization ─────────────────────────────────────────────── -->
      <section class="vx-panel" aria-labelledby="vx-auth">
        <header class="vx-panel-head">
          <h2 id="vx-auth" class="vx-panel-title">Authorization</h2>
          <span v-if="token.claims" class="vx-badge" :class="tokenLive ? 'green' : 'red'">
            {{ tokenLive ? `valid · ${countdown}` : 'expired' }}
          </span>
        </header>

        <PanelState :slot-state="calls.token" :connected="connected">
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
          <a class="vx-panel-link" href="/identity-token-validation">How a backend verifies it →</a>
        </PanelState>
      </section>

      <!-- ── badges ────────────────────────────────────────────────────── -->
      <section class="vx-panel" aria-labelledby="vx-badges">
        <header class="vx-panel-head">
          <h2 id="vx-badges" class="vx-panel-title">Badges in this network</h2>
          <span v-if="calls.badges.status === 'ok' && badges.length" class="vx-muted">{{ badges.length }}</span>
        </header>

        <PanelState :slot-state="calls.user" :connected="connected">
          <p v-if="calls.badges.status === 'loading' || calls.badges.status === 'idle'" class="vx-muted">Loading…</p>
          <p v-else-if="badgesError" class="vx-error-text">{{ badgesError }}</p>
          <p v-else-if="!badges.length" class="vx-muted">No badges.</p>
          <ul v-else class="vx-badge-list">
            <li v-for="b in badges" :key="b.badgeId" :title="b.badgeDescription">
              <strong>{{ b.badgeName }}</strong>
              <span v-if="b.badgeDescription" class="vx-muted"> — {{ b.badgeDescription }}</span>
            </li>
          </ul>
        </PanelState>
      </section>

      <!-- ── network ───────────────────────────────────────────────────── -->
      <section class="vx-panel" aria-labelledby="vx-network">
        <header class="vx-panel-head">
          <h2 id="vx-network" class="vx-panel-title">Network</h2>
        </header>

        <PanelState :slot-state="calls.network" :connected="connected">
          <div class="vx-who">
            <div class="vx-who-text">
              <div class="vx-who-name">{{ networkName }}</div>
              <div class="vx-who-id">
                <code>{{ networkId }}</code>
                <CopyButton :text="networkId" label="Copy network id" />
              </div>
            </div>
          </div>
        </PanelState>
      </section>

    </div>
  </div>
</template>

<script setup>
import {computed, defineComponent, h, onBeforeUnmount, onMounted, reactive, ref, watch} from 'vue';
import BridgeStatus from './BridgeStatus.vue';
import {copyText, decodeJwt} from './format.mjs';
import {callData, useValu} from './valuClient.mjs';

const {connected} = useValu();

// ── calls ───────────────────────────────────────────────────────────────

const blank = () => ({status: 'idle', data: null, error: ''});
const calls = reactive({user: blank(), avatar: blank(), token: blank(), network: blank(), badges: blank()});

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

// Each through valu-api, as an app calls them: valu.data.<Namespace>.<method>().
async function load() {
  if (!connected.value) return;
  const userCall = track('user', callData('Users.current').then(data => data?.user ?? data));
  const networkCall = track('network', callData('Networks.getCurrentNetwork'));
  track('token', callData('Application.getIdentityToken'));

  const [me, net] = await Promise.all([userCall, networkCall]);
  const id = net?.networkId || net?.id;
  if (me?.id) {
    avatarFailed.value = false;
    // `avatar` is the picture's resource id; Resources.getThumbnailUrl runs in the page.
    if (me.avatar) track('avatar', callData('Resources.getThumbnailUrl', {resourceId: me.avatar, thumbnailSize: 128}).then(d => d?.url ?? ''));
    else calls.avatar = {status: 'ok', data: '', error: ''};
    track('badges', callData('Profile.getUserBadges', {userId: me.id, networkId: id || 'all'}));
  } else {
    calls.badges = {status: 'error', data: null, error: 'Needs the signed-in user.'};
  }
}

watch(connected, isConnected => { if (isConnected) load(); }, {immediate: true});

// ── who ─────────────────────────────────────────────────────────────────

const user = computed(() => calls.user.data ?? {});
const fullName = computed(() => user.value.fullName
  || [user.value.firstName, user.value.lastName].filter(Boolean).join(' ').trim());
const initials = computed(() => (fullName.value || '?')
  .split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join(''));

// A thumbnail URL, or '' when the user has no picture.
const avatarUrl = computed(() => (typeof calls.avatar.data === 'string' ? calls.avatar.data : ''));
const avatarFailed = ref(false);

// ── authorization ───────────────────────────────────────────────────────

const KNOWN_CLAIMS = new Set(['sub', 'aud', 'iss', 'iat', 'exp', 'nbf', 'jti']);

const token = computed(() => {
  const data = calls.token.data;
  const decoded = decodeJwt(typeof data === 'string' ? data : data?.token);
  if (!decoded) return {header: null, claims: null, extraClaims: {}};
  const extraClaims = Object.fromEntries(Object.entries(decoded.claims).filter(([k]) => !KNOWN_CLAIMS.has(k)));
  return {header: decoded.header, claims: decoded.claims, extraClaims};
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

// ── badges ──────────────────────────────────────────────────────────────

const badges = computed(() => calls.badges.data?.badges ?? []);
// A Roomful ack carries `error` on success too; only `error.status` is a failure.
const badgesError = computed(() => {
  if (calls.badges.status === 'error') return calls.badges.error;
  const e = calls.badges.data?.error;
  return e?.status ? (e.message || 'The badges call failed.') : '';
});

// ── network ─────────────────────────────────────────────────────────────

const networkId = computed(() => calls.network.data?.networkId || calls.network.data?.id || '');
const networkName = computed(() => calls.network.data?.name || 'Unnamed network');

// ── small pieces ────────────────────────────────────────────────────────

/** Loading / error / not-connected states around a panel's body. */
const PanelState = defineComponent({
  props: {slotState: Object, connected: Boolean},
  setup(props, {slots}) {
    return () => {
      const s = props.slotState;
      if (!props.connected) return h('p', {class: 'vx-muted vx-panel-idle'}, '—');
      if (s.status === 'error') return h('p', {class: 'vx-error-text'}, s.error);
      if (s.status !== 'ok') return h('p', {class: 'vx-muted vx-panel-idle'}, 'Loading…');
      return slots.default?.();
    };
  },
});

const CopyButton = defineComponent({
  props: {text: String, label: String},
  setup(props) {
    const done = ref(false);
    const copy = async () => {
      if (!props.text || !(await copyText(props.text))) return;
      done.value = true;
      setTimeout(() => { done.value = false; }, 1500);
    };
    return () => h('button', {
      type: 'button',
      class: 'vx-link-button',
      title: props.label,
      'aria-label': props.label,
      onClick: copy,
    }, done.value ? 'Copied' : 'Copy');
  },
});
</script>
