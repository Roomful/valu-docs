// Text and sample-data helpers shared by the Explorer components.

const ENTITIES = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
export const escapeHtml = s => String(s ?? '').replace(/[&<>"']/g, c => ENTITIES[c]);

const safeUrl = url => /^(https?:\/\/|\/|#)/.test(url);

/**
 * Inline markdown, the little the manifests and apidocs use: `code`, **bold**,
 * [text](url). Everything else is escaped, so the result is safe for v-html.
 */
export function inlineMd(text) {
  return String(text ?? '')
    .split(/(`[^`\n]*`)/g)
    .map(part => {
      if (part.length >= 2 && part.startsWith('`') && part.endsWith('`')) {
        return `<code>${escapeHtml(part.slice(1, -1))}</code>`;
      }
      return escapeHtml(part)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, label, url) => {
          if (!safeUrl(url)) return match;
          const external = /^https?:/.test(url);
          return `<a href="${url}"${external ? ' target="_blank" rel="noreferrer"' : ''}>${label}</a>`;
        });
    })
    .join('');
}

/** Paragraphs on blank lines, line breaks on single newlines. */
export function richText(text) {
  return String(text ?? '')
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map(p => `<p>${inlineMd(p.trim()).replace(/\n/g, '<br>')}</p>`)
    .join('');
}

/** The first sentence, for a one-line summary. */
export function firstSentence(text, max = 180) {
  const flat = String(text ?? '').replace(/\s+/g, ' ').trim();
  const end = flat.search(/[.!?](\s|$)/);
  const sentence = end > 0 ? flat.slice(0, end + 1) : flat;
  return sentence.length > max ? `${sentence.slice(0, max - 1).trimEnd()}…` : sentence;
}

/** A placeholder value of the declared type, for the Try it editor. */
export function sampleValue(param) {
  if (param.options?.length) return param.options[0].value;
  switch (param.type) {
    case 'number': return 0;
    case 'boolean': return false;
    case 'object': return {};
    case 'array':
    case 'string[]':
    case 'object[]': return [];
    case 'FileList': return null;
    default: return '';
  }
}

export const sampleParams = params =>
  Object.fromEntries((params?.required ?? []).map(p => [p.name, sampleValue(p)]));

// Words that mark an action as changing data. Used when the SDK catalogue has
// no `mutates` fact for the intent (application intents, newer services).
const WRITE_WORDS = new Set([
  'accept', 'add', 'archive', 'assign', 'cancel', 'checkout', 'claim', 'clear', 'create', 'decline',
  'delete', 'edit', 'end', 'invite', 'join', 'mark', 'message', 'paste', 'post', 'publish', 'rate',
  'release', 'remove', 'rename', 'request', 'save', 'send', 'set', 'transfer', 'unlist', 'update', 'upload',
]);

export function changesData(intent) {
  if (intent.server) return intent.server.mutates;
  return intent.action.split(/[-_]/).some(word => WRITE_WORDS.has(word));
}

export const camelCase = s => String(s).replace(/[-_]+([a-z0-9])/g, (_, c) => c.toUpperCase());

/** Pretty JSON for display; never throws on what a reply can hold. */
export function prettyJson(value) {
  if (value === undefined) return 'undefined — the call returned nothing';
  try {
    const seen = new WeakSet();
    return JSON.stringify(value, (key, v) => {
      if (v instanceof Error) return {name: v.name, message: v.message};
      if (typeof File !== 'undefined' && v instanceof File) return `[File ${v.name}, ${v.size} bytes]`;
      if (v && typeof v === 'object') {
        if (seen.has(v)) return '[circular]';
        seen.add(v);
      }
      return v;
    }, 2);
  } catch {
    return String(value);
  }
}

/** Case-insensitive AND match of every word in `query` against `haystack`. */
export function matches(haystack, query) {
  const words = String(query ?? '').toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return true;
  const text = haystack.toLowerCase();
  return words.every(w => text.includes(w));
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard is blocked in some frames; fall back to a selection copy.
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}
