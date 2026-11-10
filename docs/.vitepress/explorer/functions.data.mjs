// The Explorer's Functions catalogue, read at build time from the valu-api
// package itself (package.json pins it), so the page lists exactly the
// functions the client that runs them knows: the service functions and the
// typed intents, namespace by namespace, as `valu.<Namespace>.<method>()`.
//
// Not listed: the intents only Valu Social's own apps may send
// (APPLICATION_ONLY_INTENTS) and the app intents with no typed form yet
// (UNTYPED_APPLICATION_INTENTS). The page says how many there are.

import {
  APPLICATION_ONLY_INTENTS,
  INTENT_DESCRIPTORS,
  SERVICE_DESCRIPTORS,
  UNTYPED_APPLICATION_INTENTS,
} from '@arkeytyp/valu-api/src/services/catalog.generated.js';
import {createRequire} from 'node:module';

const pkg = createRequire(import.meta.url)('@arkeytyp/valu-api/package.json');

const count = value => (Array.isArray(value) ? value.length : Object.keys(value ?? {}).length);

const param = p => ({
  name: p.name,
  type: p.type ?? 'unknown',
  description: p.description ?? '',
  ...(p.options?.length ? {options: p.options.map(o => (typeof o === 'object' ? o : {value: o, label: o}))} : {}),
});

function entry(d) {
  return {
    key: d.key,
    call: `${d.service}.${d.method}`,
    method: d.method,
    action: d.action,
    description: d.description ?? '',
    scopes: d.scopes ?? [],
    mutates: Boolean(d.mutates),
    channel: d.channel,
    // Typed intents only: where it works ('both', 'window', 'embedded-only',
    // 'embedded-served'); a service function runs in both modes.
    mode: d.mode ?? null,
    target: d.target ?? null,
    to: d.to ?? null,
    returns: d.returns ?? null,
    params: {
      required: (d.params?.required ?? []).map(param),
      optional: (d.params?.optional ?? []).map(param),
    },
  };
}

export default {
  load() {
    const groups = new Map();
    for (const d of [...SERVICE_DESCRIPTORS, ...INTENT_DESCRIPTORS]) {
      if (!groups.has(d.service)) {
        groups.set(d.service, {
          id: d.service,
          title: d.serviceTitle || d.service,
          description: d.serviceDescription ?? '',
          functions: [],
        });
      }
      groups.get(d.service).functions.push(entry(d));
    }
    const list = [...groups.values()].sort((a, b) => a.id.localeCompare(b.id));
    for (const g of list) g.functions.sort((a, b) => a.method.localeCompare(b.method));
    return {
      version: pkg.version,
      total: list.reduce((n, g) => n + g.functions.length, 0),
      groups: list,
      notListed: {
        applicationOnly: count(APPLICATION_ONLY_INTENTS),
        untyped: count(UNTYPED_APPLICATION_INTENTS),
      },
    };
  },
};
