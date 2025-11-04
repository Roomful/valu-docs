<br>

<a name="karaoke-api"></a>

## Karaoke API

| Endpoint | Method | Description |
|-----|-----|-----|
| [karaoke:searchSongs](#karaoke-search-songs) | websocket | Karaoke: search songs |
| [karaoke:getSongUrl](#karaoke-get-song-url) | websocket | Karaoke: get song url |
| [karaoke:getSongById](#karaoke-get-song-by-id) | websocket | Karaoke: get song by id |

<br>

<a name="karaoke-search-songs"></a>

### Karaoke: search songs

**Method:** websocket

**Endpoint:** karaoke:searchSongs

**Request:** 

<pre>
{
    "data": {
        "query": string
        "offset": int
        "size": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "songs": [{
            "id": string <span color="#1b1ef7"> // song id in catalog</span>
            "path": string <span color="#1b1ef7"> // song path in the bucket</span>
            "extension": string <span color="#1b1ef7"> // song extension (-C,-D)</span>
            "title": string
            "artist": string
            "writers": [ string ]
            "genres": [ string ]
            "decade": string
            "key": string <span color="#1b1ef7"> // tonic note (chord)</span>
            "length": int <span color="#1b1ef7"> // length in seconds</span>
            "barIntro": string
            "isrc": [ string ]
            "hfaSongCode": [ string ]
        }]
        "total": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="karaoke-get-song-url"></a>

### Karaoke: get song url

**Method:** websocket

**Endpoint:** karaoke:getSongUrl

**Request:** 

<pre>
{
    "data": {
        "songId": string
        "mediaType": string <span color="#1b1ef7"> // one of: mp4/mp3</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "songUrl": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="karaoke-get-song-by-id"></a>

### Karaoke: get song by id

**Method:** websocket

**Endpoint:** karaoke:getSongById

**Request:** 

<pre>
{
    "data": {
        "songId": string
        "mediaType": string <span color="#1b1ef7"> // one of: mp4/mp3</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "song": {
            "id": string <span color="#1b1ef7"> // song id in catalog</span>
            "path": string <span color="#1b1ef7"> // song path in the bucket</span>
            "extension": string <span color="#1b1ef7"> // song extension (-C,-D)</span>
            "title": string
            "artist": string
            "writers": [ string ]
            "genres": [ string ]
            "decade": string
            "key": string <span color="#1b1ef7"> // tonic note (chord)</span>
            "length": int <span color="#1b1ef7"> // length in seconds</span>
            "barIntro": string
            "isrc": [ string ]
            "hfaSongCode": [ string ]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

