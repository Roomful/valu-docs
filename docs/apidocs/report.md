<br>

<a name="report-api"></a>

## Report API

| Endpoint | Method | Description |
|-----|-----|-----|
| [report:createReport](#create-report) | websocket | Create report |

<br>

<a name="create-report"></a>

### Create report

**Method:** websocket

**Endpoint:** report:createReport

**Description:** API creates a bug report as a GitHub issue.

**Request:** 

<pre>
{
    "data": {
        "title": string
        "description": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "issueUrl": string
        "issueNumber": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

