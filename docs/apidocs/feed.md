<br>

<a name="feed-api"></a>

## Feed API

| Endpoint | Method | Description |
|-----|-----|-----|
| [feed:listGlobalFeed](#list-global-feed) | websocket | List global feed |

<br>

<a name="list-global-feed"></a>

### List global feed

**Method:** websocket

**Endpoint:** feed:listGlobalFeed

**Request:** 

<pre>
{
    "data": {
        "feedSource": string <span color="#1b1ef7"> // one of: 'networkGlobalFeed:{networkId}' (default), 'networkUserFeed:{networkId}:{userId}'</span>
        "filter": string <span color="#1b1ef7"> // optional filter: 'following' (posts from users I follow), 'friends' (posts from my friends)</span>
        "cursor": string <span color="#1b1ef7"> // pagination cursor, if not set, the most recent items will be returned</span>
        "limit": int <span color="#1b1ef7"> // number of items to return</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "messages": [{
            "channelId": string
            "bucketId": string
            "messageId": string
            "authorId": string
            "agentId": string
            "networkId": string
            "created": timestamp
            "updated": timestamp
            "messageType": int <span color="#1b1ef7"> // 0 - my, 1 - user, 3 - system, 4 - system JSON, 6 - request JSON, 7 - endorsement JSON, 8 - activity JSON, 9 - card JSON, 100-199 - AI messages</span>
            "messageBody": string
            "messageTitle": string
            "isBlocked": bool
            "isDeleted": bool
            "attachments": [{
                "resourceId": string
                "fileName": string
                "fileSize": int
                "contentType": string
                "durationFloat": float
                "updated": timestamp
                "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
            }]
            "replyMessage": {
                "channelId": string
                "messageId": string
                "authorId": string
                "created": timestamp
                "messageType": int
                "messageBody": string
                "attachments": [{
                    "resourceId": string
                    "fileName": string
                    "fileSize": int
                    "contentType": string
                    "durationFloat": float
                    "updated": timestamp
                    "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                    "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                    "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
                }]
                "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
            }
            "forwardMessage": {
                "channelId": string
                "messageId": string
                "authorId": string
                "created": timestamp
                "messageType": int
                "messageBody": string
                "attachments": [{
                    "resourceId": string
                    "fileName": string
                    "fileSize": int
                    "contentType": string
                    "durationFloat": float
                    "updated": timestamp
                    "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                    "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                    "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
                }]
                "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
                "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
                "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
            }
            "subChannelPath": string
            "subChannelTitles": [ string ]
            "options": [ string ]
            "customParams": map[string]{ custom structure }
            "reactions": {
                "counters": [{ <span color="#1b1ef7"> // counter per reaction, in descending order</span>
                    "emoji": string
                    "count": int
                }]
                "userEmoji": string <span color="#1b1ef7"> // user's emoji reaction to the message</span>
            }
            "pollId": string
            "userPoll": {
                "poll": { <span color="#1b1ef7"> // channel's poll</span>
                    "id": string
                    "channelId": string <span color="#1b1ef7"> // the channel the poll is in</span>
                    "question": string <span color="#1b1ef7"> // question/description of the poll</span>
                    "isMultiSelect": bool <span color="#1b1ef7"> // allow the users to select multiple choices</span>
                    "isAnonymous": bool <span color="#1b1ef7"> // can users see who voted for what</span>
                    "created": timestamp <span color="#1b1ef7"> // the time when poll was created</span>
                    "closingTime": timestamp <span color="#1b1ef7"> // users cannot vote after the closing time, defaults to one day</span>
                    "options": [ string ] <span color="#1b1ef7"> // list of options which the channel users vote for</span>
                    "voteCounters": [ int ] <span color="#1b1ef7"> // calculated number of votes per option respectively</span>
                }
                "vote": { <span color="#1b1ef7"> // user's vote in the poll'</span>
                    "pollId": string
                    "userId": string
                    "options": [ string ] <span color="#1b1ef7"> // list of options the user voted for</span>
                }
            }
            "threadChannelId": string
            "threadMessageCount": int
            "viewCount": int
            "upVoteCount": int
            "downVoteCount": int
            "encryptionVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v1'</span>
            "encryptionEpoch": int <span color="#1b1ef7"> // epoch defines key bundle that was used for encryption</span>
            "encryptionEpk": string <span color="#1b1ef7"> // ephemeral public key that should be used to decrypt cypher data</span>
        }]
        "nextCursor": string
        "hasMore": bool
        "userVotes": map[string]int <span color="#1b1ef7"> // user votes per message id (if set)</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

