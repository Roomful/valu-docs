<br>

<a name="webui-server"></a>

## WebUI Server



WebUI server is responsible for all requests that are coming to server. It manages authorization and routing to all services. 

#### Domains 

* https://api.roomful.net - production server endpoint 

* https://dev.roomful.net - development server endpoint 

#### Configuration 

Server can be started in two modes (configured by serverType option): 

* standalone (default) - server is run by itself; 

* external - server is run in pair with high level web service (e.g. nginx or apache). 



