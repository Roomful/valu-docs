# Intents Reference

> Auto-generated from application and service manifests.  
> Generated on: 2026-05-29

## Table of Contents

### Applications

- [Auth (`auth`)](#auth-auth)
- [Calendar (`events`)](#calendar-events)
- [Chats (`textchat`)](#chats-textchat)
- [CMS (`cms`)](#cms-cms)
- [Communities (`community`)](#communities-community)
- [Content Studio (`content-studio`)](#content-studio-content-studio)
- [Content Studio (`staging-content-studio`)](#content-studio-staging-content-studio)
- [Groups (`groups`)](#groups-groups)
- [LLM Activity (`llmactivity`)](#llm-activity-llmactivity)
- [My Connections (`contacts`)](#my-connections-contacts)
- [Profile (`profile`)](#profile-profile)
- [Resources Viewer (`preview`)](#resources-viewer-preview)
- [Rooms (`rooms`)](#rooms-rooms)
- [Valu Guru (`valuguru`)](#valu-guru-valuguru)
- [Valu Puzzles (`puzzles`)](#valu-puzzles-puzzles)
- [ValuVerse Application (`metaverse`)](#valuverse-application-metaverse)
- [Video Chat (`videochat`)](#video-chat-videochat)

### Services

- [Application Service (`Application`)](#application-service-application)
- [Application Storage Service (`ApplicationStorage`)](#application-storage-service-applicationstorage)
- [CMS Service (`CMS`)](#cms-service-cms)
- [Community Service (`Community`)](#community-service-community)
- [Data Provider Service (`DataProvider`)](#data-provider-service-dataprovider)
- [Events Service (`Events`)](#events-service-events)
- [Groups Service (`Groups`)](#groups-service-groups)
- [HTTP Service (`Http`)](#http-service-http)
- [Logging Service (`Logging`)](#logging-service-logging)
- [Networks Service (`Networks`)](#networks-service-networks)
- [Resource Service (`Resources`)](#resource-service-resources)
- [Rooms Service (`Rooms`)](#rooms-service-rooms)
- [Text Chat Service (`TextChat`)](#text-chat-service-textchat)
- [Time Service (`Time`)](#time-service-time)
- [Users Service (`Users`)](#users-service-users)
- [Valu Guru Service (`AiGuru`)](#valu-guru-service-aiguru)
- [Verus Wallet Service (`VerusWallet`)](#verus-wallet-service-veruswallet)

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

### Content Studio (`content-studio`)

#### `open-create`

Open the content upload page with an optional upload destination

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | No | ID of the room to upload to |
| `communityId` | string | No | ID of the community to upload to |
| `channelId` | string | No | ID of the channel to upload to |
| `groupId` | string | No | ID of the group to upload to |
| `label` | string | No | Label to apply to the content |
| `department` | string | No | Department associated with the content |
| `theme` | string | No | Theme to apply to the upload page |

#### `open-edit`

Open the edit page for a specific content item

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contentItemId` | string | Yes | ID of the content item to edit |
| `roomId` | string | No | ID of the room context |
| `communityId` | string | No | ID of the community context |
| `channelId` | string | No | ID of the channel context |
| `groupId` | string | No | ID of the group context |
| `label` | string | No | Label to apply to the content |
| `department` | string | No | Department associated with the content |
| `theme` | string | No | Theme to apply to the edit page |

#### `open-search`

Open the search page

*No parameters.*

#### `navigate`

Navigate to a specific route within Content Studio

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `route` | string | Yes | The route path to navigate to within Content Studio |

---

### Content Studio (`staging-content-studio`)

#### `open-create`

Open the content upload page with an optional upload destination

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | No | ID of the room to upload to |
| `communityId` | string | No | ID of the community to upload to |
| `channelId` | string | No | ID of the channel to upload to |
| `groupId` | string | No | ID of the group to upload to |
| `label` | string | No | Label to apply to the content |
| `department` | string | No | Department associated with the content |
| `theme` | string | No | Theme to apply to the upload page |

#### `open-edit`

Open the edit page for a specific content item

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contentItemId` | string | Yes | ID of the content item to edit |
| `roomId` | string | No | ID of the room context |
| `communityId` | string | No | ID of the community context |
| `channelId` | string | No | ID of the channel context |
| `groupId` | string | No | ID of the group context |
| `label` | string | No | Label to apply to the content |
| `department` | string | No | Department associated with the content |
| `theme` | string | No | Theme to apply to the edit page |

#### `open-search`

Open the search page

*No parameters.*

#### `navigate`

Navigate to a specific route within Content Studio

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `route` | string | Yes | The route path to navigate to within Content Studio |

---

### Groups (`groups`)

#### `open`

Opens the groups view and navigates to a specific group.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `groupId` | string | Yes | The unique identifier of the group to open. |

---

### LLM Activity (`llmactivity`)

#### `open-session`

Opens the LLM Activity app and preselects a specific debug session (chat, agent, or sub-agent) by its session ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sessionId` | string | Yes | The LLM debug session ID to preselect. |

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

#### `show-current-user`

Opens the profile view for the currently signed-in user.

*No parameters.*

#### `show-user`

Shows the profile view for a specific user, or the current user if no userId is provided.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | No | The unique identifier of the user whose profile to open. Defaults to the current user. |

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

### Valu Guru (`valuguru`)

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

### Valu Puzzles (`puzzles`)

Valu puzzle games

#### `start-puzzle`

Open Valu Puzzles and launch a specific puzzle, optionally with a score-to-beat challenge from another user.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `puzzleId` | string | Yes | Which puzzle to start. One of: "sliding" (Sliding Puzzle), "memory" (Memory Match), "sudoku" (Mini Sudoku), "wordscramble" (Word Scramble). |
| `scoreToBeat` | number | No | Target score (0–999) the recipient should try to beat. Shown as a challenge banner above the puzzle; if the player exceeds it the result screen reads "Beat <challengerName>!". |
| `challengerName` | string | No | Display name of the user who issued the challenge. Shown on the challenge banner alongside the target score. |

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

### Application Service (`Application`)

Issues short-lived signed identity JWTs for iFrame (mini-app) applications. Allows an embedded application to obtain a signed token proving the current user's identity to the mini-app's own backend.

*Source: `src/Services/Application/ApplicationService.js`*

#### `get-identity-token`

Issues a short-lived signed identity JWT for the calling mini-app. The target application is inferred from the intent sender — no parameters needed. Requires the user to be authenticated. JWT claims: sub=userId, aud=callingApplicationId, iss=platform, exp=5min.

*No parameters.*

#### `close_all`

Closes all currently loaded applications and clears all docks. Unlike the normal close flow, does not re-open the default application — the UI stays blank with no application displayed.

*No parameters.*

---

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

Opens an interactive picker so the END USER can choose ONE item (a room, contact, group, etc.) and returns their selection. BLOCKS until the user picks or cancels. Returns the selected item object (its shape depends on the provider — typically `{id, name, ...}`) or `null` if the user cancelled. Use this when the user's request needs an entity reference and they have NOT named a specific one — e.g. "share this in a group" without naming the group → call with providers: ["groups"]. Do not use to search programmatically; use the provider's own search/list service intent for that.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `providers` | string[] | Yes | Provider IDs to show as picker sources. Available IDs include: "rooms", "contacts", "groups", "communities", "props", "events". Pass one entry for a single-source picker, or multiple to let the user switch sources via tabs. Example: ["rooms"] or ["contacts", "groups"]. |
| `title` | string | No | Dialog title shown above the picker. Defaults to the provider's built-in title. |
| `width` | string | No | CSS width for the modal (desktop only). |
| `height` | string | No | CSS height for the modal (desktop only). |

#### `pick-multiple`

Same as pick-single but lets the END USER select MORE THAN ONE item. BLOCKS until they confirm or cancel. Returns an array of selected items (`[{id, name, ...}, ...]`) or `null` if cancelled. Use when the user's request implies multiple targets — e.g. "invite some people to the room" → call with providers: ["contacts"].

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `providers` | string[] | Yes | Provider IDs to show. Same set as pick-single. |
| `title` | string | No | Dialog title. |
| `confirmLabel` | string | No | Confirm button label (e.g. "Invite", "Share with"). Defaults to "Select". |
| `confirmIcon` | string | No | Confirm button icon class (Font Awesome, e.g. "fa-light fa-paper-plane-top"). |
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

### HTTP Service (`Http`)

Generic HTTP utility: reachability ping, GET, and POST against any URL. Requests are sent without user credentials (cookies are stripped); responses include status, headers, and body. Timeouts are capped server-side.

*Source: `src/Services/Http/HttpService.js`*

#### `ping`

Pings a URL with HEAD and returns whether it is reachable, the response latency in ms, and the HTTP status code (0 for cross-origin or unreachable servers). Returns: { up: boolean, latency: number, status: number, error?: string }.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The URL to ping. |
| `timeout` | number | No | Request timeout in milliseconds. Defaults to 10000, max 60000. |

#### `get`

Performs an HTTP GET against the URL and returns the response. Body is auto-parsed as JSON when the response Content-Type is application/json (or *+json), otherwise as text. Returns: { ok: boolean, status: number, statusText: string, headers: object, body: any, bodyType: "json"|"text", latency: number, error?: string }.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | Absolute URL to GET. |
| `headers` | object | No | Map of request headers to send (e.g. { "Accept": "application/json" }). |
| `timeout` | number | No | Request timeout in milliseconds. Defaults to 30000, max 60000. |
| `responseType` | string | No | How to parse the response body: "auto" (default — JSON if Content-Type matches, else text), "json", or "text". |

#### `post`

Performs an HTTP POST against the URL with the given body and returns the response (same shape as get). If `body` is a plain object it is JSON-stringified and Content-Type defaults to application/json; strings are sent verbatim with the supplied or existing Content-Type.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | Absolute URL to POST to. |
| `body` | object | No | Request body. Plain object → JSON-stringified; string → sent verbatim. Omit for an empty-body POST. |
| `headers` | object | No | Map of request headers to send. |
| `contentType` | string | No | Override the Content-Type header (defaults to application/json when `body` is an object). |
| `timeout` | number | No | Request timeout in milliseconds. Defaults to 30000, max 60000. |
| `responseType` | string | No | How to parse the response body: "auto" (default), "json", or "text". |

---

### Logging Service (`Logging`)

Exposes the in-memory console log buffer captured by ConsoleLogCapture for diagnostics and bug reporting.

*Source: `src/Services/Logging/LoggingService.js`*

#### `get-logs`

Returns the captured console log buffer (log, info, warn, error) since app start. Choose the format: "text" returns { format: "text", text: <string> } with one line per entry; "file" returns { format: "file", filename, mimeType, size, file: File } — the File is for direct callers (upload/download) and is omitted in the AI/MCP serialized response, which still includes filename, mimeType, and size.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `format` | string | No | Output format. Must be one of: "text", "file". Defaults to "text". |

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

#### `list-prop-team-members`

Lists all team member invitations for a prop in a room. Returns an array of invitation records, each containing the invited user's ID, their permissions (view/comment/contribute/edit/manage), and any stored custom metadata. Agent assignments are stored id-only as `customParams.agentInfo.id` (string). Older rows may still carry the full snapshot `customParams.agentInfo: { id, name, description, avatarUrl }` — only `id` is read; everything else is resolved from the live agent.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | Yes | The room the prop belongs to. |
| `propId` | string | Yes | The prop whose team members to list. |

#### `invite-to-prop`

Adds a user to a prop's team, or updates an existing team member's permissions and metadata. When called for a user already in the team this acts as an update — the invitation is replaced with the new permissions and customParams. Use list-prop-team-members first to check current membership before inviting.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | Yes | The room the prop belongs to. |
| `propId` | string | Yes | The prop to invite the user to. |
| `invitedUser` | string | Yes | User ID of the person to invite or update. |
| `permissions` | object | No | Permission flags for the team member: { view: boolean, comment: boolean, contribute: boolean, edit: boolean, manage: boolean }. Defaults to view-only (view: true, all others false) when omitted. |
| `customParams` | object | No | Arbitrary metadata stored on the invitation. To assign an AI agent to this team member, pass `customParams: { agentInfo: { id: "<agent-id>", avatarResourceId: "<picked-3d-avatar-resource-id>" | null } }` (id-only — do NOT include name/description/avatarUrl, those are resolved from the live agent). `avatarResourceId` is the team member's picked 3D avatar for this prop, or `null` when nothing has been picked — readers fall back to the user's own 3D profile avatar in that case. Pass `customParams: null` to clear a previously assigned agent. The full-snapshot shape `agentInfo: { id, name, description, avatarUrl }` is still read for backwards compatibility but only `id` is used. |

#### `delete-prop-invitation`

Removes a user from a prop's team by deleting their invitation. Use list-prop-team-members first to confirm the user is currently a team member.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `roomId` | string | Yes | The room the prop belongs to. |
| `propId` | string | Yes | The prop to remove the user from. |
| `invitedUser` | string | Yes | User ID of the team member to remove. |

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
| `buttons` | object[] | No | Optional interactive buttons rendered below the message body. Pass a real JSON array (NOT a JSON-stringified array). Each entry MUST be an object with this exact NESTED shape: `{text: string, intent: {applicationId: string, action: string, params?: object}}`. Do NOT flatten `applicationId`/`action` onto the button itself — `intent` is a sub-object. `text` is the visible label. Clicking dispatches `intent` via Application.run on the recipient's client (use an `applicationId` + `action` the recipient's app exposes — see other service manifests for valid pairs). Entries that are malformed are repaired-or-dropped by the service and reported back in `buttonWarnings`; check that field on the response and use the canonical shape going forward. Example: `[{"text":"Open profile","intent":{"applicationId":"valuguru","action":"open-agent","params":{"agentId":"agent_xxx"}}}]`. |

#### `send-agent-message`

Sends a message to a specific user authored by the AI agent itself (NOT by the agent's host/owner). Unlike send-message — which sends as the logged-in user — this delivers the text into the dedicated agent-to-user channel resolved from source `userAIAgent:{userId}:{agentId}`. The recipient sees the agent as the author. The channel is created on first use. Silent — does NOT open the TextChat application or change the active channel. The recipient may be any user, including the agent's own host.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | Recipient user ID. The user who will receive the message in their agent channel. |
| `agentId` | string | Yes | The calling agent's own ID. Used to address the dedicated `userAIAgent:{userId}:{agentId}` channel so the message is authored by this agent. |
| `text` | string | Yes | The message body to send. |
| `buttons` | object[] | No | Optional interactive buttons rendered below the message body. Pass a real JSON array (NOT a JSON-stringified array). Each entry MUST be an object with this exact NESTED shape: `{text: string, intent: {applicationId: string, action: string, params?: object}}`. Do NOT flatten `applicationId`/`action` onto the button itself — `intent` is a sub-object. `text` is the visible label. Clicking dispatches `intent` via Application.run on the recipient's client (use an `applicationId` + `action` the recipient's app exposes — see other service manifests for valid pairs). Entries that are malformed are repaired-or-dropped by the service and reported back in `buttonWarnings`; check that field on the response and use the canonical shape going forward. Example: `[{"text":"Open profile","intent":{"applicationId":"valuguru","action":"open-agent","params":{"agentId":"agent_xxx"}}}]`. |

---

### Time Service (`Time`)

Returns the current user's local clock context — local ISO with offset, UTC ISO for the same instant, IANA timezone, offset in minutes, day-of-week, and resolved locale. Use this before any "today"/"tomorrow"/"now" reasoning or when converting natural-language times to ISO strings.

*Source: `src/Services/Time/TimeService.js`*

#### `get-local-time`

Returns an object describing the user's current local time: { iso: local ISO 8601 with offset (e.g. "2026-05-28T13:45:30.000+02:00"), utcIso: same instant in UTC (e.g. "2026-05-28T11:45:30.000Z"), timezone: IANA name (e.g. "Europe/Berlin"), offsetMinutes: integer minutes ahead of UTC (e.g. 120), dayOfWeek: long English day name (e.g. "Thursday"), localDate: "YYYY-MM-DD" in local time, localTime: "HH:MM" in local time, locale: resolved BCP 47 locale (e.g. "en-US") }. Takes no parameters.

*No parameters.*

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

### Verus Wallet Service (`VerusWallet`)

Executes on-chain transfers from an AI agent's attached Verus wallet identity. Every call takes an agentId — the client resolves which wallet is attached to that agent. Returns an error if the agent has no wallet attached or the wallet has not finished being provisioned on-chain.

*Source: `src/Services/AiGuru/VerusWalletService.js`*

#### `transfer`

Send currency from the agent's attached Verus wallet to a destination address or identity. Call this when the user or agent needs to move funds out of an agent wallet. Fails if the agent has no wallet attached, or if the wallet is still pending creation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agentId` | string | Yes | ID of the AI agent performing the transfer. The service looks up which wallet identity is attached to this agent — NEVER pass a wallet ID or i-address here. |
| `destination` | string | Yes | Recipient address, i-address, or Verus identity (e.g. "alice@"). |
| `amount` | number | Yes | Amount to send (positive number). Interpreted in the selected currency — defaults to VRSC when currency is omitted. |
| `currency` | string | No | Currency ticker or identity (e.g. "VRSC", "VRSC-BTC"). Defaults to the native chain currency. |
| `memo` | string | No | Optional memo attached to the transaction. |

#### `get-balance`

Return the last-known balance of the wallet attached to the specified agent. Reads from the client cache — call verus:getAgentsBalance (via AiGuruStore.refreshAgentBalances) for a fresh value.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agentId` | string | Yes | ID of the AI agent whose wallet balance should be returned. |

---

