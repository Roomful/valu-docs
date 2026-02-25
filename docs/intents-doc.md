# Intents Reference

> Auto-generated from application and service manifests.  
> Generated on: 2026-02-25

## Table of Contents

### Applications

- [Auth (`auth`)](#auth-auth)
- [Calendar (`events`)](#calendar-events)
- [Chats (`textchat`)](#chats-textchat)
- [CMS (`cms`)](#cms-cms)
- [Communities (`community`)](#communities-community)
- [Groups (`groups`)](#groups-groups)
- [My Connections (`contacts`)](#my-connections-contacts)
- [Profile (`profile`)](#profile-profile)
- [Resources Viewer (`preview`)](#resources-viewer-preview)
- [Rooms (`rooms`)](#rooms-rooms)
- [ValuVerse Application (`metaverse`)](#valuverse-application-metaverse)
- [Video Chat (`videochat`)](#video-chat-videochat)

### Services

- [Application Storage Service (`ApplicationStorage`)](#application-storage-service-applicationstorage)
- [CMS Service (`CMS`)](#cms-service-cms)
- [Resource Service (`Resources`)](#resource-service-resources)

---

## Application Intents

### Auth (`auth`)

User login flow

#### `logout`

Logout from system

*No parameters.*

---

### Calendar (`events`)

#### `open-calendar`

Opens the calendar view filtered by a specific source type (room, group, user, or community event).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | string | Yes | The source type for the calendar filter. Must be one of: room, group, user, community. |
| `id` | string | No | The unique identifier of the room, group, or user. |
| `fullName` | string | No | The display name of the room, group, or user. |
| `communityId` | string | No | The unique identifier of the community (used when source is community). |
| `communityFullName` | string | No | The display name of the community. |
| `eventId` | string | No | The unique identifier of the community event. |
| `eventFullName` | string | No | The display name of the community event. |

---

### Chats (`textchat`)

#### `open-channel`

Opens a text chat session based on channel, user, group, room, or prop.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channelId` | string | No | The unique identifier of the text channel to open. |
| `userId` | string | No | The unique identifier of the user for a direct chat. |
| `groupId` | string | No | The unique identifier of the group to open a group chat. |
| `roomId` | string | No | The unique identifier of the room to open a room chat. |
| `propId` | string | No | The unique identifier of the prop to open a prop-specific chat. |

#### `options`

Sets the text‑chat view layout (e.g. wide or narrow mode).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `isWide` | boolean | Yes | Whether to enable wide‑mode layout in the chat view. |

#### `open-room-ai-chat`

Opens an AI‑powered chat session scoped to a specific room.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | Yes | The unique identifier of the room in which to start the AI chat. |

---

### CMS (`cms`)

Content management module

#### `show-chat-channel`

Open and display the specified chat channel

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channelId` | string | Yes | The unique identifier of the chat channel to display |

#### `show-community-channel`

Open and display the specified community channel

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `communityId` | string | Yes | The unique identifier of the community |
| `communityChannelId` | string | Yes | The unique identifier of the channel within the community |

---

### Communities (`community`)

#### `create-post`

Open view and open post editor

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resourceId` | string | Yes | Resource id for post attachment |
| `rootChannel` | object | Yes | Root chanel of community |
| `community` | object | Yes | Community data |
| `path` | string | Yes | Full path to channel or subchannel |

#### `create-channel`

Opens the community view and starts channel creation in a specific community context.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `community` | object | Yes | Community data object. |
| `contentDirectoryId` | string | No | The content directory identifier for the new channel. |
| `rootChannel` | object | No | Root channel of the community. |
| `subChannelId` | string | No | The sub-channel identifier to navigate to. |
| `mode` | string | No | The creation mode for the channel. |
| `contentDirectoryTitle` | string | No | Display title for the content directory. |

#### `show-channel`

Opens the community view and navigates to a specific channel.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `community` | object | Yes | Community data object. |
| `rootChannel` | object | Yes | Root channel of the community. |
| `subChannelId` | string | No | The sub-channel identifier to navigate to. |

#### `show-post`

Opens the community view and navigates to a specific post within a channel.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `community` | object | Yes | Community data object. |
| `rootChannel` | object | Yes | Root channel of the community. |
| `subChannelId` | string | No | The sub-channel identifier to navigate to. |
| `messageId` | string | No | The unique identifier of the post message to display. |

---

### Groups (`groups`)

#### `open`

Opens the groups view and navigates to a specific group.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `groupId` | string | Yes | The unique identifier of the group to open. |

---

### My Connections (`contacts`)

Manage and chat with your personal connections.

#### `show-user`

Open view for the specified user

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | The unique identifier of the user to display |

---

### Profile (`profile`)

Your user profile

#### `openForUser`

Opens the profile view for a specific user, or the current user if no userId is provided.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | No | The unique identifier of the user whose profile to open. Defaults to the current user. |

#### `openForUserWithMode`

Opens the profile view for a user and optionally navigates to a specific mode such as the marketplace.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | No | The unique identifier of the user whose profile to open. Defaults to the current user. |
| `offerId` | string | No | The identifier of the marketplace offer to display. |

---

### Resources Viewer (`preview`)

#### `preview`

Opens the resource viewer to preview a specific resource.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resourceId` | string | Yes | The unique identifier of the resource to preview. |

---

### Rooms (`rooms`)

View and manage rooms

#### `invite-to-room`

Opens the room invitation dialog for a specific room.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | Yes | The unique identifier of the room to invite users to. |

---

### ValuVerse Application (`metaverse`)

#### `set-route`

initiate the opening of the Metaverse 3d application with spsific route

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `route` | string | Yes | The route to set. Defines the current view or action in the application. If not provided, the default application state will open. |

---

### Video Chat (`videochat`)

#### `connect-to-meeting`

Connects to a specific meeting by room, prop, group, or user and manages video chat and presentation settings.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | No | The unique identifier of the room to connect to. |
| `propId` | string | No | The unique identifier of the prop to connect to. |
| `groupId` | string | No | The unique identifier of the group to connect to. |
| `userId` | string | No | The unique identifier of the user to connect to. |
| `withLocalTracks` | boolean | No | If true, view shared screens or presenter content without joining the video chat. |
| `autoConnectToVideochat` | boolean | No | If true, automatically join the video chat after connecting. |

---

## Service Intents

### Application Storage Service (`ApplicationStorage`)

Per-application file storage service for uploading, searching, and deleting resources scoped to the calling application and current user.

*Source: `src/Services/UploadManager/ApplicationStorageService.js`*

#### `resource-upload`

Uploads files to the calling application's storage for the current user.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `files` | FileList | Yes | The files to upload. |

#### `resource-search`

Searches resources in the calling application's storage for the current user.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | number | No | Maximum number of results to return. Defaults to 10. |
| `query` | string | No | Search query string. |
| `cursor` | string | No | Pagination cursor for fetching the next page of results. |

#### `resource-delete`

Deletes a resource from the calling application's storage.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resourceId` | string | Yes | The unique identifier of the resource to delete. |

---

### CMS Service (`CMS`)

Content management service for uploading, searching, and deleting resources scoped to rooms, props, communities, and channels.

*Source: `src/Services/CMS/CMSService.js`*

#### `resource-upload`

Uploads files to a resource storage scoped by belonging (room, prop, community, channel, or post).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `files` | FileList | Yes | The files to upload. |
| `communityId` | string | No | The community to associate the uploaded resources with. |
| `channelId` | string | No | The channel to associate the uploaded resources with. |
| `postId` | string | No | The post to attach the uploaded resources to. |
| `roomId` | string | No | The room to associate the uploaded resources with. |
| `propId` | string | No | The prop to move the uploaded resources into. |

#### `resource-search`

Searches for resources within a given scope (room, prop, community, channel, or post).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `communityId` | string | No | The community to search resources in. |
| `channelId` | string | No | The channel to search resources in. |
| `postId` | string | No | The post to load resources for. |
| `roomId` | string | No | The room to search resources in. |
| `propId` | string | No | The prop to search resources in. |
| `limit` | number | No | Maximum number of results to return. Defaults to 10. |
| `query` | string | No | Search query string. |
| `cursor` | string | No | Pagination cursor for fetching the next page of results. |

#### `resource-delete`

Deletes a resource or removes it from a prop or post.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resourceId` | string | Yes | The unique identifier of the resource to delete. |
| `communityId` | string | No | The community the resource belongs to. |
| `channelId` | string | No | The channel the resource belongs to. |
| `postId` | string | No | The post to remove the resource from (removes association, does not delete the resource). |
| `roomId` | string | No | The room the resource belongs to. |
| `propId` | string | No | The prop to remove the resource from (removes association, does not delete the resource). |

---

### Resource Service (`Resources`)

Low-level resource service for generating URLs (thumbnails, public links, direct downloads) for resources.

*Source: `src/Services/Resources/ResourceService.js`*

#### `get-thumbnail-url`

Returns a thumbnail URL for a resource at the specified size.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resourceId` | string | Yes | The unique identifier of the resource. |
| `thumbnailSize` | number | No | The desired thumbnail size in pixels. Defaults to 256. |

#### `generate-public-url`

Generates a public preview URL for a resource.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resourceId` | string | Yes | The unique identifier of the resource. |

#### `generate-best-view-url`

Generates an optimized view URL for a resource.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resourceId` | string | Yes | The unique identifier of the resource. |

#### `generate-direct-public-url`

Generates a direct public API URL for downloading a resource.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resourceId` | string | Yes | The unique identifier of the resource. |

---

