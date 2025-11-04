<br>

<a name="adminserver-karaoke-api"></a>

## Adminserver: Karaoke API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/files/parseAndImportKaraokeSongsFromSpreadsheet](#parse-and-import-karaoke-songs-from-spreadsheet) | webRequest | Parse and import karaoke songs from spreadsheet |
| [/jsonRpc/karaoke.getKaraokeInfo](#get-karaoke-info) | jsonRpc | Get karaoke info |

<br>

<a name="parse-and-import-karaoke-songs-from-spreadsheet"></a>

### Parse and import karaoke songs from spreadsheet

**HTTP Method:** POST

**Path:** /files/parseAndImportKaraokeSongsFromSpreadsheet

**Description:** Endpoint receives karaoke manifest file and imports songs to karaoke index. Endpoint doesn't wait for server to finish work and responds immediately, as import process could take a lot of time (depending on amount of entries). User can check if process was successful by comparing results of ```karaoke.getKaraokeInfo``` responses.

**Permissions:** 

all

**Request:** 

<pre>
multipart form with xslx spreadsheet file
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-karaoke-info"></a>

### Get karaoke info

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/karaoke.getKaraokeInfo

**Permissions:** 

all

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "lastAddedAt": timestamp
        "totalCount": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

