<br>

<a name="websocket-event-manager"></a>

## Websocket event manager



Websocket event manager is responsible for repeated events handling. 

Each websocket request has in its structure the following field: 

<pre> "event": { "id": string, "date": timestamp } </pre> 

Event manager looks in its cache if the last request from a client device has the same event id: 

* If it has - event manager returns result for previous event with this id, skipping server work; 

* If it doesn't have - request is handled by the server; 

* If event id is empty, event manager skips its check. 

Event manager is implemented for request handling in case of network problems. Use different event ids for different requests!

