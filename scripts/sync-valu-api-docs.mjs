// Copies the valu-api package's own docs into this site:
//
//   valu-api/README.md       → docs/valu-api.md
//   valu-api/valu-routing.md → docs/valu-routing.md
//
//   node scripts/sync-valu-api-docs.mjs ../valu-api
//
// The README links to the package's other docs relatively (`docs/connecting.md`,
// `examples/dedicated/`). Here those paths do not exist, and VitePress fails the
// build on a dead link, so every relative link is rewritten to the file on
// GitHub. Anchors (`#commerce`), absolute paths and URLs are left alone.

import {readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const GITHUB = 'https://github.com/Roomful/valu-api/blob/main/';
const FILES = [
  ['README.md', 'valu-api.md'],
  ['valu-routing.md', 'valu-routing.md'],
];

const source = process.argv[2];
if (!source) {
  console.error('usage: node scripts/sync-valu-api-docs.mjs <path to a valu-api checkout>');
  process.exit(1);
}
const docs = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs');

// `](target)` where target is not a URL, an anchor or a site path.
const RELATIVE_LINK = /\]\((?![a-z][a-z0-9+.-]*:|#|\/)([^)\s]+)\)/gi;

export const absolutize = markdown => markdown.replace(RELATIVE_LINK, (_, target) => `](${GITHUB}${target.replace(/^\.\//, '')})`);

for (const [from, to] of FILES) {
  const text = absolutize(readFileSync(path.join(source, from), 'utf8'));
  writeFileSync(path.join(docs, to), text);
  console.log(`${from} → docs/${to}`);
}
