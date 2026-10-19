#!/usr/bin/env node
// Builds the two catalogues the in-app Explorer pages read:
//
//   docs/.vitepress/explorer/intents.json         application intents (valuApi.sendIntent)
//   docs/.vitepress/explorer/server-intents.json  service intents (valuApi.callService), with
//                                                 what serves each one outside the browser
//
// Sources, both checked out next to this repo (the same layout the
// "Update Intents Documentation" workflow uses):
//
//   valusocial-web  src/Configs/Application_Manifests.js, Service_Manifests.js —
//                   the manifests the platform registers, so the authority on
//                   which intents exist and what they take.
//   valu-api        docs/parity-matrix.csv, docs/parity.md — which service intents
//                   the SDK also runs over a socket (on the Valu Guru server, in a
//                   Node agent), which only the application can serve, and the
//                   server tools no manifest declares.
//
// The REST catalogue is not built here: docs/apidocs lives in this repo, so a
// VitePress data loader reads it at build time and it can never go stale.
//
// No timestamps or commit ids go into the output, on purpose: the workflow
// commits only when `git diff` sees a change, and a field that changes on every
// run would turn each dispatch into a commit.
//
// Usage: node scripts/build-explorer-catalogue.mjs [--web <dir>] [--valu-api <dir>]

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'docs/.vitepress/explorer');

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

const webDir = path.resolve(root, arg('web', process.env.VALUSOCIAL_WEB || '../valusocial-web'));
const valuApiDir = path.resolve(root, arg('valu-api', process.env.VALU_API || '../valu-api'));

function requireFile(file, hint) {
  if (!fs.existsSync(file)) {
    console.error(`Missing ${file}\n${hint}`);
    process.exit(1);
  }
  return file;
}

// ── manifests ───────────────────────────────────────────────────────────────

const appManifests = requireFile(
  path.join(webDir, 'src/Configs/Application_Manifests.js'),
  'Point --web at a valusocial-web checkout.',
);
const serviceManifests = requireFile(
  path.join(webDir, 'src/Configs/Service_Manifests.js'),
  'Point --web at a valusocial-web checkout.',
);

const {PREDEFINED_APPLICATIONS} = await import(pathToFileURL(appManifests).href);
const {SERVICE_MANIFESTS} = await import(pathToFileURL(serviceManifests).href);

/** A param's `options` come as plain strings or `{value, label}`; the page wants one shape. */
function normalizeOptions(options) {
  if (!Array.isArray(options) || !options.length) return undefined;
  return options.map(o => (o && typeof o === 'object')
    ? {value: String(o.value), label: String(o.label ?? o.value)}
    : {value: String(o), label: String(o)});
}

function normalizeParam(p) {
  const param = {name: String(p.name), type: String(p.type ?? 'any'), description: String(p.description ?? '')};
  const options = normalizeOptions(p.options);
  if (options) param.options = options;
  return param;
}

function normalizeIntent(intent) {
  const out = {
    action: String(intent.action),
    description: String(intent.description ?? ''),
    availability: [...(intent.availability ?? [])],
    permissions: [...(intent.permissions ?? [])],
    params: {
      required: (intent.params?.required ?? []).map(normalizeParam),
      optional: (intent.params?.optional ?? []).map(normalizeParam),
    },
  };
  if (intent.headless) out.headless = true;
  return out;
}

const byTitle = (a, b) => (a.title || a.id).localeCompare(b.title || b.id) || a.id.localeCompare(b.id);

const applications = PREDEFINED_APPLICATIONS
  .filter(app => app.intents?.length)
  .map(app => ({
    id: String(app.id),
    title: String(app.title || app.id),
    description: String(app.description ?? ''),
    group: app.group ? String(app.group) : undefined,
    intents: app.intents.map(normalizeIntent),
  }))
  .sort(byTitle);

// ── parity (valu-api) ──────────────────────────────────────────────────────

const parityCsv = requireFile(
  path.join(valuApiDir, 'docs/parity-matrix.csv'),
  'Point --valu-api at a Roomful/valu-api checkout.',
);
const parityMd = requireFile(
  path.join(valuApiDir, 'docs/parity.md'),
  'Point --valu-api at a Roomful/valu-api checkout.',
);
const valuApiPkg = JSON.parse(fs.readFileSync(path.join(valuApiDir, 'package.json'), 'utf8'));

/** RFC 4180-ish: quoted fields, "" for a quote, commas inside quotes. */
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some(f => f !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  const [header, ...body] = rows;
  return body.map(r => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ''])));
}

const parity = new Map();
for (const row of parseCsv(fs.readFileSync(parityCsv, 'utf8'))) {
  parity.set(`${row.service}.${row.function}`, {
    channel: row.channel,
    mutates: row.mutates === 'write',
    cache: row.cache,
    scopes: row.scopes ? row.scopes.split(/\s+/).filter(Boolean) : [],
    serverTool: row.server_tool || undefined,
    returns: row.returns || undefined,
    status: row.status,
  });
}

/** The body of one `## …` section of parity.md, heading excluded. */
function section(md, headingStart) {
  const start = md.split('\n').findIndex(l => l.startsWith(`## ${headingStart}`));
  if (start < 0) return [];
  const lines = md.split('\n').slice(start + 1);
  const end = lines.findIndex(l => l.startsWith('## '));
  return end < 0 ? lines : lines.slice(0, end);
}

const parityText = fs.readFileSync(parityMd, 'utf8');

// "Declared, and deliberately not here": declared in the manifest, but only the
// application can serve them (they open a dock, render a picker, …).
const appOnly = new Set(
  section(parityText, 'Declared, and deliberately not here')
    .map(l => l.match(/^- `([^`]+)`/)?.[1])
    .filter(Boolean),
);

// "Server-only tools": tools the Valu Guru server runs that no manifest declares.
const serverOnlyTools = [];
{
  let current = null;
  for (const line of section(parityText, 'Server-only tools')) {
    const head = line.match(/^### `([^`]+)`\s*[—-]\s*(\S+)/);
    if (head) {
      current = {name: head[1], kind: head[2], summary: '', equivalents: []};
      serverOnlyTools.push(current);
      continue;
    }
    if (!current) continue;
    const eq = line.match(/^Declared equivalent:\s*(.+)$/);
    if (eq) {
      current.equivalents = [...eq[1].matchAll(/`([^`]+)`/g)].map(m => m[1]);
    } else if (line.trim() && !current.summary) {
      current.summary = line.trim();
    }
  }
}

// ── services ───────────────────────────────────────────────────────────────

const declared = new Set();
const services = SERVICE_MANIFESTS
  .map(svc => ({
    id: String(svc.id),
    title: String(svc.title || svc.id),
    description: String(svc.description ?? ''),
    source: svc.source ? String(svc.source) : undefined,
    intents: svc.intents.map(intent => {
      const key = `${svc.id}.${intent.action}`;
      declared.add(key);
      const out = normalizeIntent(intent);
      const facts = parity.get(key);
      if (facts) out.server = facts;
      if (appOnly.has(key)) out.appOnly = true;
      return out;
    }),
  }))
  .sort(byTitle);

// Functions the SDK declares itself (scripts/extensions.js) — callable over a
// socket, absent from the platform manifest, so not reachable by callService.
const sdkOnly = [...parity.entries()]
  .filter(([key]) => !declared.has(key))
  .map(([key, facts]) => {
    const [service, action] = key.split('.');
    return {service, action, server: facts};
  })
  .sort((a, b) => a.service.localeCompare(b.service) || a.action.localeCompare(b.action));

// ── write ──────────────────────────────────────────────────────────────────

fs.mkdirSync(outDir, {recursive: true});

const write = (name, data) => {
  const file = path.join(outDir, name);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
  return path.relative(root, file);
};

const intentsFile = write('intents.json', {applications});
const serverFile = write('server-intents.json', {
  sdk: {package: valuApiPkg.name, version: valuApiPkg.version},
  services,
  sdkOnly,
  serverOnlyTools,
});

const count = list => list.reduce((n, x) => n + x.intents.length, 0);
console.log(`${intentsFile}: ${count(applications)} intents in ${applications.length} applications`);
console.log(
  `${serverFile}: ${count(services)} intents in ${services.length} services, `
  + `${parity.size} SDK functions, ${appOnly.size} application-only, ${serverOnlyTools.length} server-only tools`,
);
