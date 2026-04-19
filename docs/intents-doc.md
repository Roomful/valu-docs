# Intents Reference

> Auto-generated from application and service manifests.  
> Generated on: 2026-04-19

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
- [Groups Service (`Groups`)](#groups-service-groups)
- [Networks Service (`Networks`)](#networks-service-networks)
- [Resource Service (`Resources`)](#resource-service-resources)
- [Rooms Service (`Rooms`)](#rooms-service-rooms)
- [Server Status Service (`ServerStatus`)](#server-status-service-serverstatus)
- [Text Chat Service (`TextChat`)](#text-chat-service-textchat)
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

Sends a rich text message to a text-chat channel on behalf of an initiator (e.g. an AI agent or automated service). Silent — does NOT open or change the visible chat. Use channelId when you know it; otherwise provide userId for a direct message.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The message body to send. |
| `channelId` | string | No | Target channel ID. Takes precedence over userId. |
| `userId` | string | No | Target user ID for a direct message. Ignored if channelId is provided. |
| `buttons` | object[] | No | Optional interactive buttons to attach to the message as a rich card. |

---

### CMS (`cms`)

Content management module

#### `show-chat-channel`

Open and display the specified chat channel

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channelId` | string | Yes | The unique identifier of the chat channel to display |

#### `show-folder`

Navigate to and open a specific folder in the CMS by its folder ID

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folderId` | string | Yes | The unique identifier of the folder to open |

#### `preview-resource`

Open a resource (file) in the CMS preview viewer by its resource ID

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resourceId` | string | Yes | The unique identifier of the resource to preview |

#### `show-my-files`

Navigate to the user's own files in the CMS (the "My Files" / "My Content" view). Use this when the user asks about their files, uploads, or personal content — do not use show-folder for this.

*No parameters.*

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

#### `open-community`

Opens the community view and navigates to a community by its ID. Use when you only have a communityId and no specific channel to target — the app will land on the first available channel.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `communityId` | string | Yes | The community id. |

#### `show-channel`

Opens the community view and navigates to a specific channel. Use communityId from AI context. For a root channel: pass its id as rootChannelId, omit subChannelId. For a sub-channel: the sub-channel object in AI context has a rootChannelId field — pass that as rootChannelId, and the sub-channel id as subChannelId.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `communityId` | string | Yes | The community id from AI context. |
| `rootChannelId` | string | Yes | The top-level root channel id. Never a sub-channel id. |
| `subChannelId` | string | No | The sub-channel id to navigate into. Omit when navigating to the root channel itself. |

#### `show-post`

Opens the community view and navigates to a specific post. Use communityId from AI context. For a post in a root channel: pass the channel id as rootChannelId, omit subChannelId. For a post in a sub-channel: pass the sub-channel's rootChannelId as rootChannelId, and the sub-channel id as subChannelId. Pass the post id as messageId.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `communityId` | string | Yes | The community id from AI context. |
| `rootChannelId` | string | Yes | The top-level root channel id. Never a sub-channel id. |
| `messageId` | string | Yes | The post id from AI context. |
| `subChannelId` | string | No | The sub-channel id containing the post. Omit when the post is in the root channel itself. |

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

#### `open-chat`

Opens the Valu Guru app and navigates to a specific chat session by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `chatId` | string | Yes | The chat session ID to open. |

#### `open-agent`

Opens the Valu Guru app and navigates to a specific agent chat by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agentId` | string | Yes | The agent ID to open. |

---

### ValuVerse Application (`metaverse`)

#### `set-route`

initiate the opening of the Metaverse 3d application with spsific route

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `route` | string | Yes | The route to set. Defines the current view or action in the application. If not provided, the default application state will open. |

#### `open-room`

Open a specific room in the ValuVerse 3D environment. Both networkId and roomId are required. Use the networkId provided in context.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `networkId` | string | Yes | The network the room belongs to. Use the networkId from context. |
| `roomId` | string | Yes | The ID of the room to open. |

#### `preview-prop`

Navigate the camera to a specific prop in a room, opening the Metaverse view. networkId, roomId, and propId are all required. Only call this when the user explicitly asks to show, open, navigate to, or view a prop. Do not call this automatically when listing or describing props.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `networkId` | string | Yes | The network the room belongs to. Use the networkId from context. |
| `roomId` | string | Yes | The ID of the room containing the prop. |
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

Lists channels within a specific community. Returns {communityId, channels[]} where each channel has channelId, rootChannelId (same as channelId — use this for entity tags), title, and other properties.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `communityId` | string | Yes | The unique community identifier. |
| `limit` | number | No | Maximum number of channels to return. Defaults to 100. |

#### `get-posts`

Loads posts/messages in a specific channel or sub-channel. Returns {communityId?, rootChannelId, subChannelId?, messages[]}. The rootChannelId and subChannelId in the response are the exact values to use when constructing community-post or community-sub-channel-post entity tags — no need to track them separately.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channelId` | string | Yes | The root channel ID (use rootChannelId from get-channels result). |
| `communityId` | string | No | The community ID. Pass this so the response echoes it back for entity tag construction. |
| `subChannelId` | string | No | Sub-channel ID when loading posts from a nested channel. Use the subChannelId field from the app context sub-channel entry. |
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

### Groups Service (`Groups`)

Group management service for listing groups the current user belongs to and their participants.

*Source: `src/Services/Groups/GroupsService.js`*

#### `list-groups`

Returns groups the current user belongs to. Supports search and cursor-based pagination.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Search query to filter groups by name. |
| `limit` | number | No | Maximum number of groups to return. Defaults to 20. |
| `cursor` | string | No | Pagination cursor for fetching the next page of results. |

#### `list-group-participants`

Returns participants of a specific group. Supports search and cursor-based pagination.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `groupId` | string | Yes | The unique identifier of the group. |
| `query` | string | No | Search query to filter participants by name. |
| `limit` | number | No | Maximum number of participants to return. Defaults to 20. |
| `cursor` | string | No | Pagination cursor for fetching the next page of results. |

---

### Networks Service (`Networks`)

Network management service for retrieving information about the current network.

*Source: `src/Applications/NetworksApplication/Services/NetworksService.js`*

#### `get-current-network`

Returns the id and name of the network the user is currently in. Call this to get the current networkId before making any room or network-related calls.

*No parameters.*

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

Searches all public/discoverable rooms in the current network using the explorer service. Returns rooms anyone can find and join, regardless of membership. Use this when the user wants to discover or browse rooms.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Search query to filter rooms by name. |
| `offset` | number | No | Pagination offset. Defaults to 0. |
| `size` | number | No | Number of results to return. Defaults to 10. |

#### `search-my-rooms`

Searches rooms belonging to the current user within the current network — their joined rooms, favorites, or pending invitations. Use this when the user asks about their own rooms.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filter` | string | Yes | Room filter. Must be one of: "all" — all rooms the current user belongs to; "favourite" — user's favorite rooms only; "invites" — rooms the user has been invited to but not yet joined. |
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

#### `get-prop`

Returns details for a single prop by ID (name, type, contentCount, assetId) with no navigation or UI side effects. Use this to read prop data. Only use preview-prop when the user explicitly asks to show, open, or navigate to a prop.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `propId` | string | Yes | The unique prop identifier. |
| `roomId` | string | Yes | The room the prop belongs to. |
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

### Text Chat Service (`TextChat`)

Headless text-chat I/O for non-UI callers (agents, sub-agents, scripts). Read channel history and send messages without opening the TextChat application or changing the active channel. Encryption and decryption are handled automatically.

*Source: `src/Services/TextChat/TextChatService.js`*

#### `get-channel-history`

Fetches the most recent messages for a text-chat channel by channelId, decrypted and ready to read. Returns a plain list of messages with authorId, body, timestamp, and messageType. Does not open any UI or change the active channel.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channelId` | string | Yes | The text-chat channel ID to load messages from. |
| `limit` | number | No | Maximum number of messages to return. Defaults to 20. |
| `beforeMessageId` | string | No | Load messages older than this messageId (for paginating backwards). |
| `afterMessageId` | string | No | Load messages newer than this messageId (for paginating forwards). |

#### `send-message`

Sends a text message to a text-chat channel. You must provide EITHER a channelId (preferred when you already have one) OR a userId (for a direct message — the service resolves the direct channel automatically). Silent — does NOT open the TextChat application, does NOT change the active channel, does NOT affect any UI. Encryption is handled automatically if the channel is encrypted.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The message body to send. |
| `channelId` | string | No | Target channel ID. Use this when you already know the channel (e.g. from a platform event). Takes precedence over userId. |
| `userId` | string | No | Target user ID for a direct message. The service resolves the direct channel by calling channel:getDirectChannel under the hood. Ignored if channelId is also provided. |
| `buttons` | object[] | No | Optional interactive buttons to attach to the message as a rich card. |

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

