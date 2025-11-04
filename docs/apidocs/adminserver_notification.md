<br>

<a name="adminserver-notification-api"></a>

## Adminserver: Notification API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/jsonRpc/notification.getNotificationCounts](#get-notification-counts) | jsonRpc | Get notification counts |

<br>

<a name="get-notification-counts"></a>

### Get notification counts

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/notification.getNotificationCounts

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "textchat": {
            "count": int
            "time": timestamp
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

