# Intents Reference

> Auto-generated from application and service manifests.  
> Generated on: 2026-04-10

## Table of Contents

### Applications

- [Auth (`auth`)](#auth-auth)
- [Calendar (`events`)](#calendar-events)
- [Chats (`textchat`)](#chats-textchat)
- [CMS (`cms`)](#cms-cms)
- [Communities (`community`)](#communities-community)
- [Content Studio (`staging-content-studio`)](#content-studio-staging-content-studio)
- [Groups (`groups`)](#groups-groups)
- [My Connections (`contacts`)](#my-connections-contacts)
- [Profile (`profile`)](#profile-profile)
- [Resources Viewer (`preview`)](#resources-viewer-preview)
- [Rooms (`rooms`)](#rooms-rooms)
- [Valu Guru (`aiguru`)](#valu-guru-aiguru)
- [ValuVerse Application (`metaverse`)](#valuverse-application-metaverse)
- [Video Chat (`videochat`)](#video-chat-videochat)

### Services

- [Application Storage Service (`ApplicationStorage`)](#application-storage-service-applicationstorage)
- [CMS Service (`CMS`)](#cms-service-cms)
- [Community Service (`Community`)](#community-service-community)
- [Data Provider Service (`DataProvider`)](#data-provider-service-dataprovider)
- [Events Service (`Events`)](#events-service-events)
- [Resource Service (`Resources`)](#resource-service-resources)
- [Rooms Service (`Rooms`)](#rooms-service-rooms)
- [Server Status Service (`ServerStatus`)](#server-status-service-serverstatus)
- [Users Service (`Users`)](#users-service-users)
- [Valu Guru Service (`AiGuru`)](#valu-guru-service-aiguru)

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

#### `send-message`

Sends a rich text message with optional interactive buttons to a direct channel. Buttons trigger app intents when clicked.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | The target user ID to send the message to (direct channel). |
| `text` | string | Yes | The text body of the rich message. |
| `buttons` | object | No | Array of interactive buttons. Each button has {text: string, intent: {applicationId: string, action: string, params?: object}}. |

#### `send-message-with-approve`

Sends a rich text message with optional interactive buttons to a direct channel after approval. Buttons trigger app intents when clicked.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | The target user ID to send the message to (direct channel). |
| `text` | string | Yes | The text body of the rich message. |
| `buttons` | object | No | Array of interactive buttons. Each button has {text: string, intent: {applicationId: string, action: string, params?: object}}. |

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

Opens the community view and navigates to a specific channel. IMPORTANT: rootChannel MUST always be the top-level (root) channel — never a sub-channel, never empty. Use subChannelId only when navigating deeper inside a root channel. Case 1 — navigating to a root channel: set rootChannel.channelId to the channel ID, omit subChannelId. Case 2 — navigating to a sub-channel: set rootChannel.channelId to the PARENT root channel ID, and set subChannelId to the target sub-channel ID. The RAG args channelId always refers to the currently selected channel (root or sub). Check the loaded channels tree in the AI context to determine if the target is a root channel or a sub-channel.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `community` | object | Yes | Community object. Required fields: communityId (string), communityTitle (string). Use values from RAG args or AI context. |
| `rootChannel` | object | Yes | Top-level root channel object. MUST NOT be empty. Required fields: channelId (string) — the root channel ID, title (string). Never put a sub-channel ID here. |
| `subChannelId` | string | No | ID of the sub-channel to navigate to within the rootChannel. Only provide this when the target is a sub-channel. Omit entirely when navigating to the root channel itself. |

#### `show-post`

Opens the community view and navigates to a specific post within a channel. IMPORTANT: rootChannel MUST always be the top-level (root) channel — never a sub-channel, never empty. Use subChannelId only when the post lives inside a sub-channel. Case 1 — post is in a root channel: set rootChannel.channelId to the channel ID, omit subChannelId. Case 2 — post is in a sub-channel: set rootChannel.channelId to the PARENT root channel ID, and set subChannelId to the sub-channel ID. Check the loaded channels tree in the AI context to determine the correct hierarchy. Use messageId from the RAG args or AI context to identify the target post.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `community` | object | Yes | Community object. Required fields: communityId (string), communityTitle (string). Use values from RAG args or AI context. |
| `rootChannel` | object | Yes | Top-level root channel object. MUST NOT be empty. Required fields: channelId (string) — the root channel ID, title (string). Never put a sub-channel ID here. |
| `subChannelId` | string | No | ID of the sub-channel containing the post. Only provide when the post lives inside a sub-channel. Omit entirely when the post is in the root channel itself. |
| `messageId` | string | No | The unique identifier of the post to display. Use the value from AI context. |

---

### Content Studio (`staging-content-studio`)

#### `toggle`

Toggle the floating navigation menu (show if hidden, hide if visible)

*No parameters.*

#### `show`

Show the floating navigation menu

*No parameters.*

#### `hide`

Hide the floating navigation menu

*No parameters.*

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

#### `show-user-connections`

Open the connections view for the specified user

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | The unique identifier of the user to display |

---

### Profile (`profile`)

Your user profile

#### `show-user`

Shows the profile view for a specific user, or the current user if no userId is provided.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | The unique identifier of the user whose profile to open. |

#### `open-profile-with-mode`

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

### Valu Guru (`aiguru`)

#### `start-session`

Opens the Valu Guru app and starts a brand-new conversation session with an initial message. Always creates a new session regardless of existing ones.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `message` | string | Yes | The initial user message to send in the new session. |
| `agentId` | string | No | Agent ID to use for the new session. Defaults to the currently active agent. |

#### `show-agents`

Opens the Valu Guru app and switches to the Agents tab in the left panel.

*No parameters.*

---

### ValuVerse Application (`metaverse`)

#### `set-route`

initiate the opening of the Metaverse 3d application with spsific route

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `route` | string | Yes | The route to set. Defines the current view or action in the application. If not provided, the default application state will open. |

#### `open-room`

Open a specific room in the ValuVerse 3D environment by room ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | Yes | The ID of the room to open. |

#### `preview-prop`

Navigate the camera to a specific prop in the current room.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `propId` | string | Yes | The ID of the prop to navigate to. |

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

Content management service for uploading, searching, and deleting resources scoped to rooms, props, communities, channels, and directories.

*Source: `src/Services/CMS/CMSService.js`*

#### `resource-upload`

Uploads files to a resource storage scoped by belonging (room, prop, community, channel, directory, or post).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `files` | FileList | Yes | The files to upload. |
| `communityId` | string | No | The community to associate the uploaded resources with. |
| `channelId` | string | No | The channel to associate the uploaded resources with. |
| `directoryId` | string | No | The directory to associate the uploaded resources with. If omitted and channelId is provided, it is resolved automatically from the channel's contentDirectoryId. |
| `postId` | string | No | The post to attach the uploaded resources to. |
| `roomId` | string | No | The room to associate the uploaded resources with. |
| `propId` | string | No | The prop to move the uploaded resources into. |

#### `resource-search`

Searches for resources within a given scope (room, prop, community, channel, directory, or post).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `communityId` | string | No | The community to search resources in. |
| `channelId` | string | No | The channel to search resources in. |
| `directoryId` | string | No | The directory to search resources in. If omitted and channelId is provided, it is resolved automatically from the channel's contentDirectoryId. |
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

### Community Service (`Community`)

Community service for browsing communities, listing channels, and loading posts within channels.

*Source: `src/Services/Community/CommunityService.js`*

#### `search-communities`

Search for available communities. Returns community objects with communityId, name, description, and other properties.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Search query to filter communities by name. |
| `limit` | number | No | Number of results to return. Defaults to 10. |
| `afterCommunityId` | string | No | Pagination cursor — ID of the last community from previous page. |

#### `get-community-info`

Retrieves detailed information about a specific community by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `communityId` | string | Yes | The unique community identifier. |

#### `get-channels`

Lists channels within a specific community. Returns channel objects with channelId, title, and other properties.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `communityId` | string | Yes | The unique community identifier. |
| `limit` | number | No | Maximum number of channels to return. Defaults to 100. |

#### `get-posts`

Loads posts/messages in a specific channel. Returns message objects with messageId, messageTitle, messageBody, authorId, created, attachments, upVoteCount, downVoteCount, and other properties.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channelId` | string | Yes | The channel ID to load posts from (use originId from get-channels result). |
| `subChannelId` | string | No | Sub-channel ID if loading from a nested channel. |
| `limit` | number | No | Number of posts to return. Defaults to 10. |
| `afterMessageId` | string | No | Pagination cursor — ID of the last message from previous page. |

---

### Data Provider Service (`DataProvider`)

Picker service for selecting items from data providers (rooms, contacts, etc.) via modal or inline overlay.

*Source: `src/Services/DataProvider/DataProviderService.js`*

#### `pick-single`

Opens a single-select data-provider picker. Returns the selected item or null on cancel.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `providers` | string[] | Yes | Provider IDs to show (e.g. ['rooms', 'contacts']). |
| `title` | string | No | Dialog title. |
| `width` | string | No | CSS width for the modal (desktop only). |
| `height` | string | No | CSS height for the modal (desktop only). |

#### `pick-multiple`

Opens a multi-select data-provider picker. Returns an array of selected items or null on cancel.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `providers` | string[] | Yes | Provider IDs to show. |
| `title` | string | No | Dialog title. |
| `confirmLabel` | string | No | Confirm button label. |
| `confirmIcon` | string | No | Confirm button icon class. |
| `width` | string | No | CSS width for the modal (desktop only). |
| `height` | string | No | CSS height for the modal (desktop only). |

---

### Events Service (`Events`)

Calendar service for listing, creating, and editing meetings.

*Source: `src/Applications/EventsApplication/Services/EventsService.js`*

#### `list-events`

Returns a list of calendar events for the specified date range and optional meeting filter, sorted by start time ascending.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `range` | string | No | Date range to fetch. Must be one of: day, week, month, year. Defaults to month. |
| `startDate` | string | No | ISO 8601 anchor date (e.g. "2026-04-07"). Defaults to today. |
| `filter` | string | No | Meeting source filter. Must be one of: all, room, group, user, community. Defaults to all. |
| `id` | string | No | ID of the room, group, user, or community. Used when filter is not all. |

#### `create-meeting`

Creates a new meeting on the calendar with the specified title, type, time range, and optional participants, description, color, and recurrence.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the meeting. |
| `type` | string | Yes | The meeting type. Must be one of: room, group, community, direct (private). |
| `startDate` | string | No | The meeting start date/time as a UTC ISO 8601 string (e.g. "2026-04-10T14:00:00.000Z"). Always use UTC — convert from local time if needed. Defaults to today's current time rounded up to the next 15-minute mark. |
| `endDate` | string | No | The meeting end date/time as a UTC ISO 8601 string (e.g. "2026-04-10T15:00:00.000Z"). Always use UTC — convert from local time if needed. Defaults to 1 hour after startDate. |
| `description` | string | No | An optional description for the meeting. |
| `color` | string | No | Hex color code for the meeting (e.g. "#4299f5"). Defaults to the type's default color when omitted. |
| `participants` | string[] | No | Array of user IDs to invite to the meeting. For private meetings with multiple participants, a group is created automatically. |
| `recurringWeekly` | boolean | No | If true, the meeting repeats every week at the same time. Not supported for community meetings. |
| `roomId` | string | No | The room ID. Required when type is "room". |
| `groupId` | string | No | The group ID. Required when type is "group". |
| `communityId` | string | No | The community ID. Required when type is "community". |
| `globalEventId` | string | No | The community global event ID. Required when type is "community". |

#### `edit-meeting`

Updates an existing meeting's fields (title, description, time, participants, or color) by meeting ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meetingId` | string | Yes | The unique identifier of the meeting to update. |
| `title` | string | No | New title for the meeting. |
| `description` | string | No | New description for the meeting. |
| `startDate` | string | No | New start date/time as a UTC ISO 8601 string (e.g. "2026-04-10T14:00:00.000Z"). Always use UTC — convert from local time if needed. |
| `endDate` | string | No | New end date/time as a UTC ISO 8601 string (e.g. "2026-04-10T15:00:00.000Z"). Always use UTC — convert from local time if needed. |
| `color` | string | No | New hex color code for the meeting (e.g. "#4299f5"). |
| `participants` | string[] | No | Updated list of invited participant user IDs. |

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

### Rooms Service (`Rooms`)

Room management service for searching rooms, retrieving room details, and checking permissions.

*Source: `src/Applications/RoomsApplication/Services/RoomsService.js`*

#### `search-rooms`

Search for rooms by name within the current network. Returns room objects with id, name, and other properties. Use this to find a room ID when you only know the room name.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filter` | string | Yes | Room filter. Must be one of: "all" — all rooms the current user belongs to; "favourite" — user's favorite rooms only; "open" — public rooms open for anyone to join; "invites" — rooms the user has been invited to. |
| `query` | string | No | Search query to filter rooms by name. |
| `offset` | number | No | Pagination offset. Defaults to 0. |
| `size` | number | No | Number of results to return. Defaults to 10. |

#### `get-room`

Retrieves basic room model data by room ID including name, description, settings, and metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | Yes | The unique room identifier. |
| `networkId` | string | No | Network ID the room belongs to. |

#### `get-permissions`

Retrieves the current user permissions for a room (view, comment, contribute, edit, manage).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | Yes | The unique room identifier. |

#### `get-room-props`

Lists all props (interactive objects) in a room. Returns prop objects with id, name, type, contentCount, and assetId.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | Yes | The unique room identifier. |
| `networkId` | string | No | Network ID the room belongs to. |

---

### Server Status Service (`ServerStatus`)

Checks whether a remote URL is reachable by sending a HEAD request and returning up/down status with latency.

*Source: `src/Services/ServerStatus/ServerStatusService.js`*

#### `ping`

Pings a URL and returns whether it is reachable, the response latency in ms, and the HTTP status code (0 for cross-origin or unreachable servers).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The URL to ping. |
| `timeout` | number | No | Request timeout in milliseconds. Defaults to 10000. |

---

### Users Service (`Users`)

User management service for getting current user info, looking up users by ID, searching contacts/followers/following, and managing connection requests.

*Source: `src/Services/Users/UsersService.js`*

#### `current`

Returns the currently authenticated user info (id, firstName, lastName, etc.).

*No parameters.*

#### `get`

Retrieves a user by their unique ID. Returns user object with id, firstName, lastName, etc.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | The unique user identifier. |

#### `search-users`

Search for users within existing connections (contacts, followers, or following). Use this to find a user ID when you only know their name and they are already in your network. To discover new users outside your network, use find-user instead.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filter` | string | Yes | User filter. Must be one of: "contacts" — current user's friends/connections; "followers" — users who follow the current user; "following" — users the current user follows. |
| `query` | string | No | Search query to filter users by name. |
| `offset` | number | No | Pagination offset. Defaults to 0. |
| `size` | number | No | Number of results to return. Defaults to 10. |

#### `find-user`

Discover new users to connect with by searching by name. Uses a suggestion engine — distinct from search-users which searches within existing connections.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Search query to filter users by name. |
| `offset` | number | No | Pagination offset. Defaults to 0. |
| `size` | number | No | Number of results to return. Defaults to 10. |

#### `send-connection-request`

Sends a connection request to a user by their ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | The unique identifier of the user to send a connection request to. |

#### `accept-connection-request`

Accepts a pending connection request from a user.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | The unique identifier of the user whose connection request to accept. |

#### `decline-connection-request`

Declines a pending connection request from a user.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | The unique identifier of the user whose connection request to decline. |

#### `cancel-connection-request`

Cancels a pending connection request that the current user previously sent.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | The unique identifier of the user to whom the connection request was sent. |

---

### Valu Guru Service (`AiGuru`)

System service for managing applications via AI. Provides tools to open, close, list, and check application status.

*Source: `src/Services/AiGuru/AiGuruService.js`*

#### `open`

Opens (loads) an application by its ID into the dock.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `applicationId` | string | Yes | The unique identifier of the application to open. |

#### `close`

Closes (unloads) an application by its ID from the dock.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `applicationId` | string | Yes | The unique identifier of the application to close. |

#### `has-application`

Checks whether an application with the given ID exists in the registry.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `applicationId` | string | Yes | The unique identifier of the application to check. |

#### `get-applications`

Returns a list of all registered applications with their id, slug, icon, and title.

*No parameters.*

#### `is-application-loaded`

Checks whether an application with the given ID is currently loaded (open) in the dock.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `applicationId` | string | Yes | The unique identifier of the application to check. |

#### `get-chat-history`

Returns the in-memory message history for a chat session. Omit chatId to get the currently active session.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `chatId` | string | No | ID of the chat session. Omit to use the currently active session. |

#### `get-agent-history`

Returns the in-memory message history for a background agent.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agentId` | string | Yes | ID of the background agent whose message history to retrieve. |

---

