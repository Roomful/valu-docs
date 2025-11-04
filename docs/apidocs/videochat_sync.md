<br>

<a name="presentation-api"></a>

## Presentation API



API is used to synchronize presentation between conference participants.

| Endpoint | Method | Description |
|-----|-----|-----|
| [videochat:sync:presentationStarted](#presentation-started) | websocket | Presentation started |
| [videochat:sync:presentationStopped](#presentation-stopped) | websocket | Presentation stopped |
| [presentation:updateStateProperties](#update-presentation-state-properties) | websocket | Update presentation state properties |
| [presentation:getState](#get-presentation-state) | websocket | Get presentation state |
| [videochat:sync:requestLastSyncEvent](#presentation-request-last-sync-event) | websocket | Presentation request last sync event |
| [videochat:sync:propClicked](#presentation-prop-clicked) | websocket | Presentation prop clicked |
| [videochat:sync:backButtonClicked](#presentation-back-button-clicked) | websocket | Presentation back button clicked |
| [videochat:sync:propClickedDetailedView](#presentation-prop-clicked-detailed-view) | websocket | Presentation prop clicked detailed view |
| [videochat:sync:backButtonClickedDetailedView](#presentation-back-button-clicked-detailed-view) | websocket | Presentation back button clicked detailed view |
| [videochat:sync:propWebViewClicked](#presentation-prop-web-view-clicked) | websocket | Presentation prop web view clicked |
| [videochat:sync:propActionStarted](#presentation-prop-action-started) | websocket | Presentation prop action started |
| [videochat:sync:propVideoStarted](#presentation-prop-video-started) | websocket | Presentation prop video started |
| [videochat:sync:propVideoPaused](#presentation-prop-video-paused) | websocket | Presentation prop video paused |
| [videochat:sync:propVideoContinued](#presentation-prop-video-continued) | websocket | Presentation prop video continued |
| [videochat:sync:propResourceClicked](#presentation-prop-resource-clicked) | websocket | Presentation prop resource clicked |
| [videochat:sync:resourceOpened](#presentation-resource-opened) | websocket | Presentation resource opened |
| [videochat:sync:resourceClosed](#presentation-resource-closed) | websocket | Presentation resource closed |
| [videochat:sync:resourcePageChanged](#presentation-resource-page-changed) | websocket | Presentation resource page changed |
| [videochat:sync:pdfTextSelected](#presentation-pdf-text-selected) | websocket | Presentation pdf text selected |
| [videochat:sync:storylineLoaded](#presentation-storyline-loaded) | websocket | Presentation storyline loaded |
| [videochat:sync:storylineExited](#presentation-storyline-exited) | websocket | Presentation storyline exited |
| [videochat:sync:storylineStarted](#presentation-storyline-started) | websocket | Presentation storyline started |
| [videochat:sync:storylinePaused](#presentation-storyline-paused) | websocket | Presentation storyline paused |
| [videochat:sync:storylineMovedToElement](#presentation-storyline-moved-to-element) | websocket | Presentation storyline moved to element |
| [videochat:sync:roomChanged](#presentation-room-changed) | websocket | Presentation room changed |
| [videochat:sync:cameraPositionSet](#presentation-camera-position-set) | websocket | Presentation camera position set |
| [videochat:sync:propCameraPositionSet](#presentation-prop-camera-position-set) | websocket | Presentation prop camera position set |
| [videochat:sync:pointerPositionSet](#presentation-pointer-position-set) | websocket | Presentation pointer position set |
| [videochat:sync:routeChanged](#presentation-route-changed) | websocket | Presentation route changed |
| [videochat:sync:presentationAction](#presentation-action) | websocket | Presentation action |
| [videochat:sync:presentationStarted](#presentation-started-event) | websocketEvent | Presentation started event |
| [videochat:sync:presentationStopped](#presentation-stopped-event) | websocketEvent | Presentation stopped event |
| [presentation:statePropertiesUpdated](#presentation-state-properties-updated-event) | websocketEvent | Presentation state properties updated event |
| [videochat:sync:propClicked](#presentation-prop-clicked-event) | websocketEvent | Presentation prop clicked event |
| [videochat:sync:backButtonClicked](#presentation-back-button-clicked-event) | websocketEvent | Presentation back button clicked event |
| [videochat:sync:propClickedDetailedView](#presentation-prop-clicked-detailed-view-event) | websocketEvent | Presentation prop clicked detailed view event |
| [videochat:sync:backButtonClickedDetailedView](#presentation-back-button-clicked-detailed-view-event) | websocketEvent | Presentation back button clicked detailed view event |
| [videochat:sync:propWebViewClicked](#presentation-prop-web-view-clicked-event) | websocketEvent | Presentation prop web view clicked event |
| [videochat:sync:propActionStarted](#presentation-prop-action-started-event) | websocketEvent | Presentation prop action started event |
| [videochat:sync:propVideoStarted](#presentation-prop-video-started-event) | websocketEvent | Presentation prop video started event |
| [videochat:sync:propVideoPaused](#presentation-prop-video-paused-event) | websocketEvent | Presentation prop video paused event |
| [videochat:sync:propVideoContinued](#presentation-prop-video-continued-event) | websocketEvent | Presentation prop video continued event |
| [videochat:sync:propResourceClicked](#presentation-prop-resource-clicked-event) | websocketEvent | Presentation prop resource clicked event |
| [videochat:sync:resourceOpened](#presentation-resource-opened-event) | websocketEvent | Presentation resource opened event |
| [videochat:sync:resourceClosed](#presentation-resource-closed-event) | websocketEvent | Presentation resource closed event |
| [videochat:sync:resourcePageChanged](#presentation-resource-page-changed-event) | websocketEvent | Presentation resource page changed event |
| [videochat:sync:pdfTextSelected](#presentation-pdf-text-selected-event) | websocketEvent | Presentation pdf text selected event |
| [videochat:sync:storylineLoaded](#presentation-storyline-loaded-event) | websocketEvent | Presentation storyline loaded event |
| [videochat:sync:storylineExited](#presentation-storyline-exited-event) | websocketEvent | Presentation storyline exited event |
| [videochat:sync:storylineStarted](#presentation-storyline-started-event) | websocketEvent | Presentation storyline started event |
| [videochat:sync:storylinePaused](#presentation-storyline-paused-event) | websocketEvent | Presentation storyline paused event |
| [videochat:sync:storylineMovedToElement](#presentation-storyline-moved-to-element-event) | websocketEvent | Presentation storyline moved to element event |
| [videochat:sync:roomChanged](#presentation-room-changed-event) | websocketEvent | Presentation room changed event |
| [videochat:sync:cameraPositionSet](#presentation-camera-position-set-event) | websocketEvent | Presentation camera position set event |
| [videochat:sync:propCameraPositionSet](#presentation-prop-camera-position-set-event) | websocketEvent | Presentation prop camera position set event |
| [videochat:sync:pointerPositionSet](#presentation-pointer-position-set-event) | websocketEvent | Presentation pointer position set event |
| [videochat:sync:routeChanged](#presentation-route-changed-event) | websocketEvent | Presentation route changed event |
| [videochat:sync:presentationAction](#presentation-action-event) | websocketEvent | Presentation action event |

<br>

<a name="presentation-started"></a>

### Presentation started

**Method:** websocket

**Endpoint:** videochat:sync:presentationStarted

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "serverTime": timestamp <span color="#1b1ef7"> // current server time in UTC timezone</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-stopped"></a>

### Presentation stopped

**Method:** websocket

**Endpoint:** videochat:sync:presentationStopped

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-presentation-state-properties"></a>

### Update presentation state properties

**Method:** websocket

**Endpoint:** presentation:updateStateProperties

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "updateStateProperties": map[string]{ custom structure }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-presentation-state"></a>

### Get presentation state

**Method:** websocket

**Endpoint:** presentation:getState

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "presenterId": string
        "state": map[string]{ custom structure }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-request-last-sync-event"></a>

### Presentation request last sync event

**Method:** websocket

**Endpoint:** videochat:sync:requestLastSyncEvent

**Description:** Request last synchronization event. If event exists, its data will be sent to socket. If event doesn't exist, nothing happens.

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-clicked"></a>

### Presentation prop clicked

**Method:** websocket

**Endpoint:** videochat:sync:propClicked

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propViewContext": {
            "propId": string
            "resourceId": string
            "resourceIndex": int
            "innerPropIndex": int
            "focusPointIndex": int
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-back-button-clicked"></a>

### Presentation back button clicked

**Method:** websocket

**Endpoint:** videochat:sync:backButtonClicked

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-clicked-detailed-view"></a>

### Presentation prop clicked detailed view

**Method:** websocket

**Endpoint:** videochat:sync:propClickedDetailedView

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-back-button-clicked-detailed-view"></a>

### Presentation back button clicked detailed view

**Method:** websocket

**Endpoint:** videochat:sync:backButtonClickedDetailedView

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-web-view-clicked"></a>

### Presentation prop web view clicked

**Method:** websocket

**Endpoint:** videochat:sync:propWebViewClicked

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-action-started"></a>

### Presentation prop action started

**Method:** websocket

**Endpoint:** videochat:sync:propActionStarted

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "triggerName": string
        "triggerValue": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-video-started"></a>

### Presentation prop video started

**Method:** websocket

**Endpoint:** videochat:sync:propVideoStarted

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-video-paused"></a>

### Presentation prop video paused

**Method:** websocket

**Endpoint:** videochat:sync:propVideoPaused

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-video-continued"></a>

### Presentation prop video continued

**Method:** websocket

**Endpoint:** videochat:sync:propVideoContinued

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-resource-clicked"></a>

### Presentation prop resource clicked

**Method:** websocket

**Endpoint:** videochat:sync:propResourceClicked

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-resource-opened"></a>

### Presentation resource opened

**Method:** websocket

**Endpoint:** videochat:sync:resourceOpened

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-resource-closed"></a>

### Presentation resource closed

**Method:** websocket

**Endpoint:** videochat:sync:resourceClosed

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-resource-page-changed"></a>

### Presentation resource page changed

**Method:** websocket

**Endpoint:** videochat:sync:resourcePageChanged

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
        "page": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-pdf-text-selected"></a>

### Presentation pdf text selected

**Method:** websocket

**Endpoint:** videochat:sync:pdfTextSelected

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
        "page": int
        "anchorNodeIndex": int
        "focusNodeIndex": int
        "startRangeOffset": int
        "endRangeOffset": int
        "length": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-storyline-loaded"></a>

### Presentation storyline loaded

**Method:** websocket

**Endpoint:** videochat:sync:storylineLoaded

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "storylineId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-storyline-exited"></a>

### Presentation storyline exited

**Method:** websocket

**Endpoint:** videochat:sync:storylineExited

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "storylineId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-storyline-started"></a>

### Presentation storyline started

**Method:** websocket

**Endpoint:** videochat:sync:storylineStarted

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "storylineId": string
        "storylineElement": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-storyline-paused"></a>

### Presentation storyline paused

**Method:** websocket

**Endpoint:** videochat:sync:storylinePaused

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "storylineId": string
        "storylineElement": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-storyline-moved-to-element"></a>

### Presentation storyline moved to element

**Method:** websocket

**Endpoint:** videochat:sync:storylineMovedToElement

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "storylineId": string
        "storylineElement": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-room-changed"></a>

### Presentation room changed

**Method:** websocket

**Endpoint:** videochat:sync:roomChanged

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-camera-position-set"></a>

### Presentation camera position set

**Method:** websocket

**Endpoint:** videochat:sync:cameraPositionSet

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "cameraSettings": {
            "position": { <a href="#xyz">xyz structure</a> }
            "rotation": { <a href="#xyz">xyz structure</a> }
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-camera-position-set"></a>

### Presentation prop camera position set

**Method:** websocket

**Endpoint:** videochat:sync:propCameraPositionSet

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "cameraSettings": {
            "position": { <a href="#xyz">xyz structure</a> }
            "rotation": { <a href="#xyz">xyz structure</a> }
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-pointer-position-set"></a>

### Presentation pointer position set

**Method:** websocket

**Endpoint:** videochat:sync:pointerPositionSet

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "pointer": {
            "positions": [{ <a href="#xyz">xyz structure</a> }]
            "timings": [ timestamp ]
            "isPointerOn": bool
        }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-route-changed"></a>

### Presentation route changed

**Method:** websocket

**Endpoint:** videochat:sync:routeChanged

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "route": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-action"></a>

### Presentation action

**Method:** websocket

**Endpoint:** videochat:sync:presentationAction

**Request:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "route": string
        "action": string
        "data": map[string]{ custom structure }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-started-event"></a>

### Presentation started event

**Event:** videochat:sync:presentationStarted

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "presenterId": string
        "serverTime": timestamp <span color="#1b1ef7"> // current server time in UTC timezone</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-stopped-event"></a>

### Presentation stopped event

**Event:** videochat:sync:presentationStopped

**Data:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-state-properties-updated-event"></a>

### Presentation state properties updated event

**Event:** presentation:statePropertiesUpdated

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "presenterId": string
        "updatedStateProperties": map[string]{ custom structure }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-clicked-event"></a>

### Presentation prop clicked event

**Event:** videochat:sync:propClicked

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propViewContext": {
            "propId": string
            "resourceId": string
            "resourceIndex": int
            "innerPropIndex": int
            "focusPointIndex": int
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-back-button-clicked-event"></a>

### Presentation back button clicked event

**Event:** videochat:sync:backButtonClicked

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-clicked-detailed-view-event"></a>

### Presentation prop clicked detailed view event

**Event:** videochat:sync:propClickedDetailedView

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-back-button-clicked-detailed-view-event"></a>

### Presentation back button clicked detailed view event

**Event:** videochat:sync:backButtonClickedDetailedView

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-web-view-clicked-event"></a>

### Presentation prop web view clicked event

**Event:** videochat:sync:propWebViewClicked

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-action-started-event"></a>

### Presentation prop action started event

**Event:** videochat:sync:propActionStarted

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "triggerName": string
        "triggerValue": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-video-started-event"></a>

### Presentation prop video started event

**Event:** videochat:sync:propVideoStarted

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-video-paused-event"></a>

### Presentation prop video paused event

**Event:** videochat:sync:propVideoPaused

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-video-continued-event"></a>

### Presentation prop video continued event

**Event:** videochat:sync:propVideoContinued

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-resource-clicked-event"></a>

### Presentation prop resource clicked event

**Event:** videochat:sync:propResourceClicked

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-resource-opened-event"></a>

### Presentation resource opened event

**Event:** videochat:sync:resourceOpened

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-resource-closed-event"></a>

### Presentation resource closed event

**Event:** videochat:sync:resourceClosed

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-resource-page-changed-event"></a>

### Presentation resource page changed event

**Event:** videochat:sync:resourcePageChanged

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
        "page": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-pdf-text-selected-event"></a>

### Presentation pdf text selected event

**Event:** videochat:sync:pdfTextSelected

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "resourceId": string
        "page": int
        "anchorNodeIndex": int
        "focusNodeIndex": int
        "startRangeOffset": int
        "endRangeOffset": int
        "length": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-storyline-loaded-event"></a>

### Presentation storyline loaded event

**Event:** videochat:sync:storylineLoaded

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "storylineId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-storyline-exited-event"></a>

### Presentation storyline exited event

**Event:** videochat:sync:storylineExited

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "storylineId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-storyline-started-event"></a>

### Presentation storyline started event

**Event:** videochat:sync:storylineStarted

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "storylineId": string
        "storylineElement": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-storyline-paused-event"></a>

### Presentation storyline paused event

**Event:** videochat:sync:storylinePaused

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "storylineId": string
        "storylineElement": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-storyline-moved-to-element-event"></a>

### Presentation storyline moved to element event

**Event:** videochat:sync:storylineMovedToElement

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "storylineId": string
        "storylineElement": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-room-changed-event"></a>

### Presentation room changed event

**Event:** videochat:sync:roomChanged

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-camera-position-set-event"></a>

### Presentation camera position set event

**Event:** videochat:sync:cameraPositionSet

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "cameraSettings": {
            "position": { <a href="#xyz">xyz structure</a> }
            "rotation": { <a href="#xyz">xyz structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-prop-camera-position-set-event"></a>

### Presentation prop camera position set event

**Event:** videochat:sync:propCameraPositionSet

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "propId": string
        "cameraSettings": {
            "position": { <a href="#xyz">xyz structure</a> }
            "rotation": { <a href="#xyz">xyz structure</a> }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-pointer-position-set-event"></a>

### Presentation pointer position set event

**Event:** videochat:sync:pointerPositionSet

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "pointer": {
            "positions": [{ <a href="#xyz">xyz structure</a> }]
            "timings": [ timestamp ]
            "isPointerOn": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-route-changed-event"></a>

### Presentation route changed event

**Event:** videochat:sync:routeChanged

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "route": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="presentation-action-event"></a>

### Presentation action event

**Event:** videochat:sync:presentationAction

**Data:** 

<pre>
{
    "data": {
        "videochatId": string
        "roomId": string
        "route": string
        "action": string
        "data": map[string]{ custom structure }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="xyz"></a>

#### XYZ

<pre>
{
    "x": float
    "y": float
    "z": float
}
</pre>

