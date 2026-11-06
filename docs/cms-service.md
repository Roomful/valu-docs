# CMS Service API

The **CMS Service** (`CMS`) allows your application to manage files and resources across different contexts in Valu Social:

- **Community channels** — manage content within a channel's CMS directory
- **Post attachments** — attach or remove files from community posts
- **Room props** — manage content attached to props inside rooms

You call it through `@arkeytyp/valu-api`, as functions on the app object:

```javascript
import { createValuApp } from "@arkeytyp/valu-api";

const valu = await createValuApp();

// valu.data.CMS.* resolves the result and throws ValuServiceError on a refusal;
// valu.CMS.* resolves the envelope {data} | {error} and never throws.
const { resources } = await valu.data.CMS.resourceSearch({ communityId, channelId });
```

The same calls work inside Valu Social and at the app's own address. Their scopes are `cms:read` (search) and `cms:write` (upload, delete): list them in your app's `valu-permissions.json`. At the app's own address they are consent scopes, so the user approves them once (a call made from a click opens the approval itself).

> Older code calls `valuApi.callService(new Intent('CMS', 'resource-search', params))`. That still works inside Valu Social. `sendIntent` is wrong for CMS: it is for opening applications, not for calling a service.

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
const result = await valu.data.CMS.resourceUpload({
  communityId: '<communityId>',
  channelId: '<channelId>',
  files: fileList
});
```

**To a community channel using directory ID:**

```javascript
const result = await valu.data.CMS.resourceUpload({
  directoryId: '<directoryId>',
  files: fileList
});
```

**To a specific post (attach files):**

When uploading to a post, provide all three IDs. The uploaded files will be automatically attached to the post.

```javascript
const result = await valu.data.CMS.resourceUpload({
  communityId: '<communityId>',
  channelId: '<channelId>',
  postId: '<postId>',
  files: fileList
});
```

**To a room prop:**

```javascript
const result = await valu.data.CMS.resourceUpload({
  roomId: '<roomId>',
  propId: '<propId>',
  files: fileList
});
```

### Search Resources (`resource-search`)

Search for resources within a given scope.

**In a community channel:**

```javascript
const result = await valu.data.CMS.resourceSearch({
  communityId: '<communityId>',
  channelId: '<channelId>',
  query: 'search term',
  limit: 10,
  cursor: ''
});
```

**In a post (list attachments):**

When `postId` is provided, returns all resources attached to that post.

```javascript
const result = await valu.data.CMS.resourceSearch({
  communityId: '<communityId>',
  channelId: '<channelId>',
  postId: '<postId>'
});
```

**Using directory ID:**

```javascript
const result = await valu.data.CMS.resourceSearch({
  directoryId: '<directoryId>',
  query: '',
  limit: 10
});
```

### Delete Resources (`resource-delete`)

Delete a resource or remove it from a post/prop.

**Delete the resource itself:**

Without a post or prop, the resource is deleted wherever it is.

```javascript
const result = await valu.data.CMS.resourceDelete({
  resourceId: '<resourceId>'
});
```

**Remove attachment from a post:**

This removes the association between the resource and the post. The resource itself is **not** deleted.

```javascript
const result = await valu.data.CMS.resourceDelete({
  communityId: '<communityId>',
  channelId: '<channelId>',
  postId: '<postId>',
  resourceId: '<resourceId>'
});
```

**Remove from a room prop:**

This removes the resource from the prop. The resource itself is **not** deleted.

```javascript
const result = await valu.data.CMS.resourceDelete({
  roomId: '<roomId>',
  propId: '<propId>',
  resourceId: '<resourceId>'
});
```

### Let an Admin Pick a File (`pick-resource`)

Opens Valu Social's file picker over the network's resources and waits until a network admin picks one file or cancels. Inside Valu Social only: at the app's own address it is skipped (`{data: {skipped: true}}`), so hide the control when `valu.mode === 'dedicated'`.

```javascript
const picked = await valu.data.CMS.pickResource({
  sources: ['networkResources'],   // the only source today
  accept: ['image/*'],
  title: 'Choose a cover image'
});
// {id, title, contentType, thumbnailUrl}, or null when the user cancels
```

It is refused, and nothing opens, for anyone who is not an admin of the network. The full parameter list is in [Valu API Functions](/valu-api-functions#cms).

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
