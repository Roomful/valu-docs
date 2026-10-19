// Build-time catalogue of the backend's HTTP endpoints, read straight out of
// docs/apidocs so the REST APIs explorer can never disagree with the reference
// pages it links to.
//
// An apidocs page is generated, so its shape is regular: an endpoint table at
// the top (`| [name](#anchor) | kind | description |`, struck through when
// deprecated), then one `<a name>` + `### Title` section per endpoint with
// `**Field:** value` blocks. Only sections that carry an `**HTTP Method:**` are
// HTTP endpoints; the rest are websocket calls and events.

import fs from 'node:fs';
import path from 'node:path';

const KINDS = {
  webRequest: 'REST',
  publicRpc: 'Public RPC',
  jsonRpc: 'Admin JSON-RPC',
};

const decode = s => s
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/&amp;/g, '&');

/** The text of a `<pre>` block: tags (inline colour spans) removed, entities decoded. */
function preText(value) {
  const m = value.match(/<pre>([\s\S]*?)<\/pre>/);
  const raw = m ? m[1] : value;
  return decode(raw.replace(/<[^>]+>/g, '')).replace(/^\n+|\s+$/g, '');
}

/** Same-page anchors point at the reference page, which is where they resolve. */
const absolutize = (text, page) => text.replace(/\]\(#([^)]+)\)/g, `](/apidocs/${page}#$1)`);

function parseFields(lines) {
  const fields = {};
  let key = null;
  for (const line of lines) {
    const m = line.match(/^\*\*([A-Za-z ]+):\*\*\s*(.*)$/);
    if (m) {
      key = m[1].trim();
      fields[key] = m[2];
    } else if (key) {
      fields[key] += '\n' + line;
    }
  }
  for (const k of Object.keys(fields)) fields[k] = fields[k].replace(/^\s+|\s+$/g, '');
  return fields;
}

function parsePage(file) {
  const page = path.basename(file, '.md');
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split('\n');

  const title = (lines.find(l => l.startsWith('## ')) ?? `## ${page}`).slice(3).trim();

  // Endpoint table: kind and deprecation per anchor.
  const table = new Map();
  for (const line of lines) {
    const m = line.match(/^\|\s*(~~)?\[([^\]]+)\]\(#([^)]+)\)(?:~~)?\s*\|\s*([^|]+?)\s*\|/);
    if (m) table.set(m[3], {deprecated: Boolean(m[1]), kind: m[4]});
  }

  const endpoints = [];
  // Some pages reuse an anchor (the testnet twin of an auth call, the Verus
  // proxies); the id must still be unique, the link can only reach the first.
  const ids = new Set();
  const uniqueId = base => {
    let id = base;
    for (let n = 2; ids.has(id); n++) id = `${base}-${n}`;
    ids.add(id);
    return id;
  };

  for (let i = 0; i < lines.length; i++) {
    const head = lines[i].match(/^### (.+)$/);
    if (!head) continue;

    let anchor = '';
    for (let j = i - 1; j >= Math.max(0, i - 4); j--) {
      const a = lines[j].match(/<a name="([^"]+)"><\/a>/);
      if (a) { anchor = a[1]; break; }
    }

    let end = i + 1;
    while (end < lines.length && !/^#{2,3} /.test(lines[end]) && !/<a name="/.test(lines[end])) end++;
    const fields = parseFields(lines.slice(i + 1, end));
    if (!fields['HTTP Method']) continue;

    const row = table.get(anchor);
    const kind = fields.Method || row?.kind || 'webRequest';
    endpoints.push({
      id: uniqueId(`${page}--${anchor || endpoints.length}`),
      page,
      anchor,
      title: head[1].trim(),
      kind,
      kindLabel: KINDS[kind] ?? kind,
      method: fields['HTTP Method'].toUpperCase(),
      path: fields.Path ?? '',
      deprecated: Boolean(row?.deprecated),
      description: fields.Description ? absolutize(fields.Description, page) : '',
      permissions: fields.Permissions ?? '',
      headers: fields.Headers ? fields.Headers.split('\n').map(s => s.trim()).filter(Boolean) : [],
      parameters: fields.Parameters ? fields.Parameters.split('\n').map(s => s.trim()).filter(Boolean) : [],
      request: fields.Request ? preText(fields.Request) : '',
      response: fields.Response ? preText(fields.Response) : '',
    });
  }

  return endpoints.length ? {page, title, endpoints} : null;
}

export default {
  watch: ['../../apidocs/*.md'],
  load(files) {
    const apis = files
      .filter(f => path.basename(f) !== 'Readme.md')
      .map(parsePage)
      .filter(Boolean)
      .sort((a, b) => a.title.localeCompare(b.title));
    return {apis};
  },
};
