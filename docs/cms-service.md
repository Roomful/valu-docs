# CMS Service API

The **CMS Service** (`CMS`) allows your application to manage files and resources across different contexts in Valu Social:

- **Community channels** — manage content within a channel's CMS directory
- **Post attachments** — attach or remove files from community posts
- **Room props** — manage content attached to props inside rooms

All interactions use intents sent via `valu-api`.

## Identifying Channels

### Community URL IDs

When browsing a community channel, the URL contains the `communityId` and `channelId`:

```
/community/<communityId>/channel/<channelId>
```

For example:

```
/community/18594bab-b382-8e1c-81a0-ac6d6cfc8d22/channel/18621196-2f49-86f3-b3a2-64527f4d4528
```

From this URL you can extract:
- `communityId` = `18594bab-b382-8e1c-81a0-ac6d6cfc8d22`
- `channelId` = `18621196-2f49-86f3-b3a2-64527f4d4528`

You can use these two IDs directly with the CMS Service — it will automatically resolve the channel's content directory.

### CMS Directory ID

When you open the same channel inside the CMS application, the URL shows a different ID:

```
cms/community/18621191-5a48-88f6-83a0-7dd333d1a87f
```

This is the **CMS Directory ID** (`directoryId`). It identifies the channel's content directory directly.

- Use `communityId` + `channelId` when working from community URLs
- Use `directoryId` when working from CMS URLs

Both approaches are supported. When you provide `communityId` + `channelId`, the service resolves the `directoryId` automatically.

## Actions

### Upload Files (`resource-upload`)

Upload files to a channel, post, or room prop.

**To a community channel:**

```javascript
import { Intent } from "@arkeytyp/valu-api";

const intent = new Intent('CMS', 'resource-upload', {
  communityId: '<communityId>',
  channelId: '<channelId>',
  files: fileList
});
const result = await valuApi.sendIntent(intent);
```

**To a community channel using directory ID:**

```javascript
const intent = new Intent('CMS', 'resource-upload', {
  directoryId: '<directoryId>',
  files: fileList
});
const result = await valuApi.sendIntent(intent);
```

**To a specific post (attach files):**

When uploading to a post, provide all three IDs. The uploaded files will be automatically attached to the post.

```javascript
const intent = new Intent('CMS', 'resource-upload', {
  communityId: '<communityId>',
  channelId: '<channelId>',
  postId: '<postId>',
  files: fileList
});
const result = await valuApi.sendIntent(intent);
```

**To a room prop:**

```javascript
const intent = new Intent('CMS', 'resource-upload', {
  roomId: '<roomId>',
  propId: '<propId>',
  files: fileList
});
const result = await valuApi.sendIntent(intent);
```

### Search Resources (`resource-search`)

Search for resources within a given scope.

**In a community channel:**

```javascript
const intent = new Intent('CMS', 'resource-search', {
  communityId: '<communityId>',
  channelId: '<channelId>',
  query: 'search term',
  limit: 10,
  cursor: ''
});
const result = await valuApi.sendIntent(intent);
```

**In a post (list attachments):**

When `postId` is provided, returns all resources attached to that post.

```javascript
const intent = new Intent('CMS', 'resource-search', {
  communityId: '<communityId>',
  channelId: '<channelId>',
  postId: '<postId>'
});
const result = await valuApi.sendIntent(intent);
```

**Using directory ID:**

```javascript
const intent = new Intent('CMS', 'resource-search', {
  directoryId: '<directoryId>',
  query: '',
  limit: 10
});
const result = await valuApi.sendIntent(intent);
```

### Delete Resources (`resource-delete`)

Delete a resource or remove it from a post/prop.

**Delete from channel directory:**

```javascript
const intent = new Intent('CMS', 'resource-delete', {
  directoryId: '<directoryId>',
  resourceId: '<resourceId>'
});
const result = await valuApi.sendIntent(intent);
```

**Remove attachment from a post:**

This removes the association between the resource and the post. The resource itself is **not** deleted.

```javascript
const intent = new Intent('CMS', 'resource-delete', {
  communityId: '<communityId>',
  channelId: '<channelId>',
  postId: '<postId>',
  resourceId: '<resourceId>'
});
const result = await valuApi.sendIntent(intent);
```

**Remove from a room prop:**

This removes the resource from the prop. The resource itself is **not** deleted.

```javascript
const intent = new Intent('CMS', 'resource-delete', {
  roomId: '<roomId>',
  propId: '<propId>',
  resourceId: '<resourceId>'
});
const result = await valuApi.sendIntent(intent);
```

## Parameters Reference

| Parameter | Type | Description |
|-----------|------|-------------|
| `files` | FileList | The files to upload. |
| `communityId` | string | The community identifier (from the community URL). |
| `channelId` | string | The channel identifier (from the community URL). |
| `directoryId` | string | The CMS directory identifier (from the CMS URL). |
| `postId` | string | The post identifier. Required for post attachment operations. |
| `roomId` | string | The room identifier. |
| `propId` | string | The prop identifier within a room. |
| `resourceId` | string | The identifier of the resource to delete or remove. |
| `query` | string | Search query string. Defaults to empty. |
| `limit` | number | Maximum number of results to return. Defaults to 10. |
| `cursor` | string | Pagination cursor for fetching the next page of results. |
