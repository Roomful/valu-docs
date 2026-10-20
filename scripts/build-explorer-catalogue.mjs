#!/usr/bin/env node
// Builds the two catalogues the in-app Explorer pages read:
//
//   docs/.vitepress/explorer/intents.json          application intents (valuApi.sendIntent)
//   docs/.vitepress/explorer/service-intents.json  service intents (valuApi.callService)
//
// Source: a valusocial-web checkout next to this repo (the same layout the
// "Update Intents Documentation" workflow uses) — src/Configs/Application_
// Manifests.js and Service_Manifests.js, the manifests the platform registers,
// so the authority on which intents exist and what they take.
//
// The service catalogue holds only what an iframe application may call over
// the bridge: intents whose availability includes `developer`. The rest are
// offered to AI agents alone.
//
// The REST catalogue is not built here: it comes from the running platform
// (Developer.list-application-apis) when the page opens.
//
// No timestamps or commit ids go into the output, on purpose: the workflow
// commits only when `git diff` sees a change, and a field that changes on every
// run would turn each dispatch into a commit.
//
// Usage: node scripts/build-explorer-catalogue.mjs [--web <dir>]

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

function requireFile(file, hint) {
  if (!fs.existsSync(file)) {
    console.error(`Missing ${file}\n${hint}`);
    process.exit(1);
  }
  return file;
}

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

// INTENT_AVAILABILITY.DEVELOPER — "available to developers (dev portal, API bridge)".
const bridgeCallable = intent => (intent.availability ?? []).includes('developer');

const services = SERVICE_MANIFESTS
  .map(svc => ({
    id: String(svc.id),
    title: String(svc.title || svc.id),
    description: String(svc.description ?? ''),
    intents: svc.intents.filter(bridgeCallable).map(normalizeIntent),
  }))
  .filter(svc => svc.intents.length)
  .sort(byTitle);

fs.mkdirSync(outDir, {recursive: true});

const write = (name, data) => {
  const file = path.join(outDir, name);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
  return path.relative(root, file);
};

const count = list => list.reduce((n, x) => n + x.intents.length, 0);
console.log(`${write('intents.json', {applications})}: ${count(applications)} intents in ${applications.length} applications`);
console.log(`${write('service-intents.json', {services})}: ${count(services)} bridge-callable intents in ${services.length} services`);
