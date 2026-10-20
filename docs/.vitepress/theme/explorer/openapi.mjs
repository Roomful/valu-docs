// An OpenAPI 3.x document → the operations the REST playground lists.
//
// Applications declare their API in the manifest and describe it with an
// OpenAPI document (the Developer Portal requires one). The gateway serves that
// document at `{gateway}/{address}/openapi.json`; this module turns it into
// what a person browses: one entry per method and path, with its parameters,
// body and responses, `$ref`s resolved.

const METHODS = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'];

/** `#/components/schemas/Note` → that node, or undefined. Local refs only. */
function resolvePointer(doc, ref) {
  if (typeof ref !== 'string' || !ref.startsWith('#/')) return undefined;
  return ref.slice(2).split('/')
    .map(part => part.replace(/~1/g, '/').replace(/~0/g, '~'))
    .reduce((node, key) => (node == null ? undefined : node[key]), doc);
}

/** Follow `$ref`s at the top of a node (a chain, not the whole tree). */
export function deref(doc, node, seen = new Set()) {
  let current = node;
  while (current && typeof current === 'object' && typeof current.$ref === 'string') {
    if (seen.has(current.$ref)) return {};
    seen.add(current.$ref);
    current = resolvePointer(doc, current.$ref);
  }
  return current;
}

/** A schema with every `$ref` inside it resolved, cycles cut short. */
export function resolveSchema(doc, schema, depth = 0, seen = new Set()) {
  if (!schema || typeof schema !== 'object' || depth > 8) return schema;
  if (typeof schema.$ref === 'string') {
    if (seen.has(schema.$ref)) return {description: `(recursive: ${schema.$ref.split('/').pop()})`};
    const next = new Set(seen).add(schema.$ref);
    return resolveSchema(doc, resolvePointer(doc, schema.$ref), depth + 1, next);
  }
  if (Array.isArray(schema)) return schema.map(item => resolveSchema(doc, item, depth + 1, seen));
  return Object.fromEntries(Object.entries(schema).map(([k, v]) => [k, resolveSchema(doc, v, depth + 1, seen)]));
}

/** The form kind a parameter schema asks for. */
export function schemaKind(schema) {
  if (Array.isArray(schema?.enum) && schema.enum.length) return 'enum';
  const type = Array.isArray(schema?.type) ? schema.type.find(t => t !== 'null') : schema?.type;
  if (type === 'boolean') return 'boolean';
  if (type === 'integer' || type === 'number') return 'number';
  if (type === 'array' || type === 'object') return 'json';
  return 'text';
}

/** A short type label: `string`, `integer`, `string[]`, `Note`… */
export function schemaLabel(schema) {
  if (!schema) return 'any';
  const type = Array.isArray(schema.type) ? schema.type.filter(t => t !== 'null').join(' | ') : schema.type;
  if (type === 'array') return `${schemaLabel(schema.items)}[]`;
  if (schema.format && type) return `${type} (${schema.format})`;
  return type || (schema.properties ? 'object' : 'any');
}

/** A plausible value for a schema: its example, default or first enum, else one by type. */
export function sampleFromSchema(schema, depth = 0) {
  if (!schema || depth > 6) return null;
  if (schema.example !== undefined) return schema.example;
  if (Array.isArray(schema.examples) && schema.examples.length) return schema.examples[0];
  if (schema.default !== undefined) return schema.default;
  if (Array.isArray(schema.enum) && schema.enum.length) return schema.enum[0];
  const variants = schema.oneOf ?? schema.anyOf;
  if (Array.isArray(variants) && variants.length) return sampleFromSchema(variants[0], depth + 1);
  if (Array.isArray(schema.allOf)) {
    return schema.allOf.reduce((acc, part) => {
      const value = sampleFromSchema(part, depth + 1);
      return value && typeof value === 'object' && !Array.isArray(value) ? {...acc, ...value} : acc;
    }, {});
  }
  const type = Array.isArray(schema.type) ? schema.type.find(t => t !== 'null') : schema.type;
  if (type === 'object' || schema.properties) {
    return Object.fromEntries(Object.entries(schema.properties ?? {})
      .filter(([, prop]) => !prop?.readOnly)
      .map(([name, prop]) => [name, sampleFromSchema(prop, depth + 1)]));
  }
  if (type === 'array') return schema.items ? [sampleFromSchema(schema.items, depth + 1)] : [];
  if (type === 'integer' || type === 'number') return 0;
  if (type === 'boolean') return false;
  if (type === 'string') {
    if (schema.format === 'date-time') return new Date(0).toISOString();
    if (schema.format === 'date') return '1970-01-01';
    return '';
  }
  return null;
}

function parametersOf(doc, shared, own) {
  const byKey = new Map();
  for (const raw of [...(shared ?? []), ...(own ?? [])]) {
    const p = deref(doc, raw);
    if (!p?.name || !p.in) continue;
    const schema = resolveSchema(doc, p.schema ?? {});
    byKey.set(`${p.in}:${p.name}`, {
      name: p.name,
      in: p.in,
      required: Boolean(p.required) || p.in === 'path',
      description: p.description ?? schema?.description ?? '',
      schema,
      type: schemaLabel(schema),
      kind: schemaKind(schema),
      options: Array.isArray(schema?.enum) ? schema.enum.map(String) : undefined,
      example: p.example ?? schema?.example,
      deprecated: Boolean(p.deprecated),
    });
  }
  // Path first, then query, header, cookie: the order a person reads a URL.
  const order = {path: 0, query: 1, header: 2, cookie: 3};
  return [...byKey.values()].sort((a, b) => (order[a.in] ?? 9) - (order[b.in] ?? 9));
}

function bodyOf(doc, raw) {
  const body = deref(doc, raw);
  if (!body?.content) return null;
  const types = Object.keys(body.content);
  const contentType = types.find(t => /json/i.test(t)) ?? types[0];
  const media = body.content[contentType] ?? {};
  const schema = resolveSchema(doc, media.schema ?? {});
  const example = media.example
    ?? Object.values(media.examples ?? {}).map(e => deref(doc, e)?.value).find(v => v !== undefined)
    ?? sampleFromSchema(schema);
  return {required: Boolean(body.required), contentType, schema, example, description: body.description ?? ''};
}

function responsesOf(doc, responses) {
  return Object.entries(responses ?? {}).map(([status, raw]) => {
    const r = deref(doc, raw) ?? {};
    const types = Object.keys(r.content ?? {});
    const contentType = types.find(t => /json/i.test(t)) ?? types[0] ?? '';
    const schema = contentType ? resolveSchema(doc, r.content[contentType]?.schema ?? null) : null;
    return {status, description: r.description ?? '', contentType, schema};
  });
}

const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/**
 * Every operation in the document, in path order.
 *
 * @param {object} doc an OpenAPI 3.x document
 * @return {Array<object>}
 */
export function operationsOf(doc) {
  const out = [];
  for (const [path, rawItem] of Object.entries(doc?.paths ?? {})) {
    const item = deref(doc, rawItem) ?? {};
    for (const method of METHODS) {
      const op = item[method];
      if (!op) continue;
      out.push({
        id: `${method}-${slug(path) || 'root'}`,
        method: method.toUpperCase(),
        path,
        operationId: op.operationId ?? '',
        summary: op.summary ?? '',
        description: op.description ?? '',
        tags: op.tags ?? [],
        deprecated: Boolean(op.deprecated),
        scopes: op['x-valu']?.scopes ?? [],
        params: parametersOf(doc, item.parameters, op.parameters),
        body: bodyOf(doc, op.requestBody),
        responses: responsesOf(doc, op.responses),
      });
    }
  }
  return out;
}

/** True for a method that, by HTTP's own rules, changes nothing. */
export const isSafeMethod = method => ['GET', 'HEAD', 'OPTIONS'].includes(String(method).toUpperCase());
