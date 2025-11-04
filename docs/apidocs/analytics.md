<br>

<a name="room-analytics-api"></a>

## Room Analytics API

| Endpoint | Method | Description |
|-----|-----|-----|
| [analytics:userEnteredBooth](#analytics-user-entered-booth) | websocket | Analytics: user entered booth |
| [analytics:userExitedBooth](#analytics-user-exited-booth) | websocket | Analytics: user exited booth |
| [analytics:userOpenedFileCabinet](#analytics-user-opened-file-cabinet) | websocket | Analytics: user opened file cabinet |
| [analytics:userOpenedPDF](#analytics-user-opened-pdf) | websocket | Analytics: user opened pDF |
| [analytics:userDownloadedPDF](#analytics-user-downloaded-pdf) | websocket | Analytics: user downloaded pDF |
| [analytics:userPrintedPDF](#analytics-user-printed-pdf) | websocket | Analytics: user printed pDF |
| [analytics:userListenedKaraokeSong](#analytics-user-listened-karaoke-song) | websocket | Analytics: user listened karaoke song |

<br>

<a name="analytics-user-entered-booth"></a>

### Analytics: user entered booth

**Method:** websocket

**Endpoint:** analytics:userEnteredBooth

**Request:** 

<pre>
{
    "data": {
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

<a name="analytics-user-exited-booth"></a>

### Analytics: user exited booth

**Method:** websocket

**Endpoint:** analytics:userExitedBooth

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "propId": string
        "resourceAnalytics": [{
            "resourceId": string
            "contentType": string
            "secondsSpent": int
        }]
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

<a name="analytics-user-opened-file-cabinet"></a>

### Analytics: user opened file cabinet

**Method:** websocket

**Endpoint:** analytics:userOpenedFileCabinet

**Request:** 

<pre>
{
    "data": {
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

<a name="analytics-user-opened-pdf"></a>

### Analytics: user opened pDF

**Method:** websocket

**Endpoint:** analytics:userOpenedPDF

**Request:** 

<pre>
{
    "data": {
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

<a name="analytics-user-downloaded-pdf"></a>

### Analytics: user downloaded pDF

**Method:** websocket

**Endpoint:** analytics:userDownloadedPDF

**Request:** 

<pre>
{
    "data": {
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

<a name="analytics-user-printed-pdf"></a>

### Analytics: user printed pDF

**Method:** websocket

**Endpoint:** analytics:userPrintedPDF

**Request:** 

<pre>
{
    "data": {
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

<a name="analytics-user-listened-karaoke-song"></a>

### Analytics: user listened karaoke song

**Method:** websocket

**Endpoint:** analytics:userListenedKaraokeSong

**Request:** 

<pre>
{
    "data": {
        "roomId": string
        "roomName": string
        "songId": string
        "songTitle": string
        "songArtist": string
        "duration": int
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

