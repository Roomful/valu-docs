// Copies the valu-api package's own docs into this site:
//
//   valu-api/README.md            → docs/valu-api.md
//   valu-api/valu-routing.md      → docs/valu-routing.md
//   valu-api/docs/service-api.md  → docs/valu-api-functions.md (generated there from
//                                   valu-api's catalogue: every function, typed
//                                   intents included; it replaces the Intents Reference)
//
//   node scripts/sync-valu-api-docs.mjs ../valu-api
//
// The README links to the package's other docs relatively (`docs/connecting.md`,
// `examples/dedicated/`). Here those paths do not exist, and VitePress fails the
// build on a dead link, so every relative link is rewritten to the file on
// GitHub, from the folder of the file it is in. Anchors (`#commerce`), absolute
// paths and URLs are left alone.

import {readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const GITHUB = 'https://github.com/Roomful/valu-api/blob/main/';
const FILES = [
  ['README.md', 'valu-api.md'],
  ['valu-routing.md', 'valu-routing.md'],
  ['docs/service-api.md', 'valu-api-functions.md', {escapeTags: true}],
];

/** The tags the generated reference writes itself; any other `<` in its prose is text. */
const OWN_TAGS = /<(?!\/?(?:sub|details|summary|br)\b)/g;

/**
 * The generated reference quotes the platform's manifest descriptions, which say
 * things like `@[application:<appId>|<Name>]`. VitePress compiles a page as a Vue
 * template, where `<appId>` is an element that never ends and fails the build, so
 * outside code spans and fences such a `<` is written `&lt;`.
 */
export const escapeTags = markdown => {
  let fenced = false;
  return markdown.split('\n').map(line => {
    if (line.startsWith('```')) {
      fenced = !fenced;
      return line;
    }
    if (fenced) return line;
    return line.split('`').map((part, i) => (i % 2 ? part : part.replace(OWN_TAGS, '&lt;'))).join('`');
  }).join('\n');
};

const source = process.argv[2];
if (!source) {
  console.error('usage: node scripts/sync-valu-api-docs.mjs <path to a valu-api checkout>');
  process.exit(1);
}
const docs = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs');

// `](target)` where target is not a URL, an anchor or a site path.
const RELATIVE_LINK = /\]\((?![a-z][a-z0-9+.-]*:|#|\/)([^)\s]+)\)/gi;

export const absolutize = (markdown, dir = '') => markdown.replace(
  RELATIVE_LINK,
  (_, target) => `](${GITHUB}${path.posix.normalize(path.posix.join(dir, target.replace(/^\.\//, '')))})`,
);

for (const [from, to, options = {}] of FILES) {
  const dir = path.posix.dirname(from);
  const linked = absolutize(readFileSync(path.join(source, from), 'utf8'), dir === '.' ? '' : dir);
  const text = options.escapeTags ? escapeTags(linked) : linked;
  writeFileSync(path.join(docs, to), text);
  console.log(`${from} → docs/${to}`);
}
