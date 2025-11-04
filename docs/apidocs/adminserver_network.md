<br>

<a name="admin-network-api"></a>

## Admin Network API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/files/parseNetworkParticipantSpreadsheet](#parse-network-participant-spreadsheet) | webRequest | Parse network participant spreadsheet |
| [/files/generateNetworkPluginSettings/{networkId}.json](#generate-network-plugin-json) | webRequest | Generate network plugin json |
| [/jsonRpc/network.getNetworkModel](#get-network-model) | jsonRpc | Get network model |
| [/jsonRpc/network.getNetworkInfo](#get-network-info) | jsonRpc | Get network info |
| [/jsonRpc/network.getPrivateNetworkModel](#get-private-network-model) | jsonRpc | Get private network model |
| [/jsonRpc/network.getClusters](#get-clusters) | jsonRpc | Get clusters |
| [/jsonRpc/network.createNetwork](#create-network) | jsonRpc | Create network |
| [/jsonRpc/network.searchNetworkModels](#search-network-models) | jsonRpc | Search network models |
| [/jsonRpc/network.listNetworkModels](#list-network-models) | jsonRpc | List network models |
| [/jsonRpc/network.listActiveNetworkModels](#list-active-network-models) | jsonRpc | List active network models |
| [/jsonRpc/network.listUserNetworks](#list-user-networks) | jsonRpc | List user networks |
| [/jsonRpc/network.activateNetwork](#activate-network) | jsonRpc | Activate network |
| [/jsonRpc/network.disableNetwork](#disable-network) | jsonRpc | Disable network |
| [/jsonRpc/network.setNetworkThumbnail](#set-network-thumbnail) | jsonRpc | Set network thumbnail |
| [/jsonRpc/network.setNetworkSettings](#set-network-settings) | jsonRpc | Set network settings |
| [/jsonRpc/network.setNetworkPluginSettings](#set-network-plugin-settings) | jsonRpc | Set network plugin settings |
| [/jsonRpc/network.generateNetworkPluginSettings](#generate-network-plugin-settings) | jsonRpc | Generate network plugin settings |
| [/jsonRpc/network.isUserSubscribedToNetwork](#is-user-subscribed-to-network) | jsonRpc | Is user subscribed to network |
| [/jsonRpc/network.subscribeUserToNetwork](#subscribe-user-to-network) | jsonRpc | Subscribe user to network |
| [/jsonRpc/network.addNetworkParticipant](#add-network-participant) | jsonRpc | Add network participant |

<br>

<a name="parse-network-participant-spreadsheet"></a>

### Parse network participant spreadsheet

**HTTP Method:** POST

**Path:** /files/parseNetworkParticipantSpreadsheet

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
multipart form with xslx spreadsheet file
</pre>

**Response:** 

<pre>
[{
    "email": string
    "firstName": string
    "lastName": string
    "companyName": string
    "companyTitle": string
}]
</pre>

<br>

<a name="generate-network-plugin-json"></a>

### Generate network plugin json

**HTTP Method:** GET

**Path:** /files/generateNetworkPluginSettings/{networkId}.json

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
json network plugin settings
</pre>

<br>

<a name="get-network-model"></a>

### Get network model

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.getNetworkModel

**Permissions:** 

user subscribed to network

network.manage

network.listHidden

**Request:** 

<pre>
{
    "networkId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network">network structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-network-info"></a>

### Get network info

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.getNetworkInfo

**Permissions:** 

user subscribed to network

network.manage

network.listHidden

**Request:** 

<pre>
{
    "networkId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network">network structure</a> }
        "networkDefaults": {
            "metaverseCurrency": string <span color="#1b1ef7"> // in case when network has its own currency</span>
            "provisionCurrency": string <span color="#1b1ef7"> // currency that is used for Verus provisioning</span>
            "enablePayments": bool <span color="#1b1ef7"> // if true - client could purchase products; else - all products are free</span>
            "enableTokenomics": bool <span color="#1b1ef7"> // if true - user will mint or spend tokens for his actions (like placing content in room)</span>
            "disableBalance": bool <span color="#1b1ef7"> // DEPRECATED</span>
            "roomId": string <span color="#1b1ef7"> // default room in network (e.g. Agora in humanity)</span>
            "storylineVideoSound": bool <span color="#1b1ef7"> // enables video sound in storyline by default</span>
            "hasQuestionnaire": bool <span color="#1b1ef7"> // enables matchmaking questionnaire</span>
            "hasSearchCard": bool <span color="#1b1ef7"> // enables matchmaking search by search card</span>
            "hasGamingBalance": bool <span color="#1b1ef7"> // enables gaming balance</span>
            "hasAnalytics": bool <span color="#1b1ef7"> // enables analytics</span>
            "allUsersAreConnected": bool <span color="#1b1ef7"> // if true, all users in network are friends by default</span>
            "disableOwnerBadge": bool <span color="#1b1ef7"> // if true, disables room owner badge (crown) near avatar</span>
            "disableFavoriteRooms": bool <span color="#1b1ef7"> // if true, disables favorite room appearance on client</span>
            "disableShareRoom": bool <span color="#1b1ef7"> // if true, disables room sharing</span>
            "disableRoomCreation": bool <span color="#1b1ef7"> // if true, disables room creation on client</span>
            "orderByFirstComments": bool <span color="#1b1ef7"> // show first resource comments first</span>
            "hideTextchat": bool <span color="#1b1ef7"> // if true, client shouldn't show textchat UI</span>
            "hideVideochat": bool <span color="#1b1ef7"> // if true, client shouldn't show videochat UI</span>
            "hideSocialSessions": bool <span color="#1b1ef7"> // if true, client shouldn't show social sessions UI</span>
            "allowHostSetup": bool <span color="#1b1ef7"> // if true, allows user to setup personalised custom params for props in room</span>
            "socialCircleAsset": string <span color="#1b1ef7"> // id of default asset for dynamic social circle</span>
            "socialCircleLimit": int <span color="#1b1ef7"> // sets social circle limit, 0 = no limit</span>
            "allowAnonymous": bool <span color="#1b1ef7"> // if true, users can access network without authorization</span>
            "onlyVerifiedAccounts": bool <span color="#1b1ef7"> // if true, server would require to verify email before creating new user session</span>
            "singleScreenAuth": bool <span color="#1b1ef7"> // if true, show registration and authorization on the same scene</span>
            "requireZipCode": bool <span color="#1b1ef7"> // if true, zip code should be required field during registration</span>
            "paymentProviders": [ string ] <span color="#1b1ef7"> // restricts use of payment providers (stripe/braintree/apple) in network; if empty, all providers are available</span>
            "aiEndpoint": string <span color="#1b1ef7"> // address for AI server</span>
            "loadBalancerUrl": string <span color="#1b1ef7"> // url of load balancer for playgrounds</span>
            "gamificationParticlesIndex": int <span color="#1b1ef7"> // 0 - default, 1 - epam</span>
            "colorizationSchemeType": int <span color="#1b1ef7"> // 0 - Default, 1 - Fabuwood</span>
            "defaultNavigationMode": int <span color="#1b1ef7"> // 0 - classic, 1 - advanced, 2 - pro</span>
            "defaultButtonAppearance": int <span color="#1b1ef7"> // 0 - default, 1 - show, 2 - hide</span>
            "hasCascadeTextchatSkin": bool <span color="#1b1ef7"> // textchat cascade appearance in application</span>
            "animatedBackButton": bool <span color="#1b1ef7"> // animate back button icon in application</span>
            "hasExpo": bool <span color="#1b1ef7"> // informs clients that the network has expo</span>
            "expoStartDate": timestamp <span color="#1b1ef7"> // timestamp when conference starts</span>
            "expoEndDate": timestamp <span color="#1b1ef7"> // timestamp when conference ends</span>
            "hasAttendees": bool <span color="#1b1ef7"> // enables additional room privacy settings</span>
        }
        "subscribed": bool
        "subscriptionOptions": [{
            "type": string <span color="#1b1ef7"> // free/one_time_payment/subscription_week/subscription_month/subscription_year</span>
            "token": float <span color="#1b1ef7"> // subscription cost in tokens</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-private-network-model"></a>

### Get private network model

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.getPrivateNetworkModel

**Permissions:** 

network.listHidden

**Request:** 

<pre>
{
    "networkId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network-private">network private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-clusters"></a>

### Get clusters

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.getClusters

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
        "clusters": [{
            "clusterName": string
            "numberOfNetworks": int
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-network"></a>

### Create network

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.createNetwork

**Permissions:** 

all

**Request:** 

<pre>
{
    "network": { <a href="#network">network structure</a> }
    "subscriptionOptions": [{
        "type": string
        "action": string
    }]
    "settings": {
        "permissions": {
            "publishRoom": [ string ]
        }
        "general": {
            "countryId": int <span color="#1b1ef7"> // in case if network is dedicated to a country</span>
            "packageName": string <span color="#1b1ef7"> // in case if network has package specific content</span>
            "applicationName": string <span color="#1b1ef7"> // in case if network has its own application</span>
            "domainNames": [ string ] <span color="#1b1ef7"> // in case if network has dedicated domain names</span>
            "presentationDomain": string <span color="#1b1ef7"> // default domain for presentation (without redactor)</span>
            "studioDomain": string <span color="#1b1ef7"> // default domain for studio (with redactor)</span>
            "shareDomain": string <span color="#1b1ef7"> // domain for share server</span>
            "ssoProviders": [ string ] <span color="#1b1ef7"> // epam, epam.social[google,facebook,linkedin]</span>
            "loaderType": int <span color="#1b1ef7"> // 0 - logo, 1 - hybrid, 2 - slideshow, 3 - video</span>
            "logoUrl": string <span color="#1b1ef7"> // url</span>
            "loadingVideoUrl": string <span color="#1b1ef7"> // url or youtube id</span>
            "defaultPassword": string <span color="#1b1ef7"> // default password for conference</span>
            "autoVerification": bool <span color="#1b1ef7"> // if true, all newly registered users are verified by default</span>
            "disableEmailLogin": bool <span color="#1b1ef7"> // if true, client application shouldn't show email login option</span>
            "disableSsoLogin": bool <span color="#1b1ef7"> // if true, client application shouldn't show sso login options</span>
            "sendTextchatEmail": bool <span color="#1b1ef7"> // if true, send email that user has new direct textchat message</span>
            "templateStyles": [ string ] <span color="#1b1ef7"> // filter network templates by styles</span>
            "disableDefaultTemplates": bool <span color="#1b1ef7"> // if true, return room templates only from current network</span>
        }
        "defaults": {
            "metaverseCurrency": string <span color="#1b1ef7"> // in case when network has its own currency</span>
            "provisionCurrency": string <span color="#1b1ef7"> // currency that is used for Verus provisioning</span>
            "enablePayments": bool <span color="#1b1ef7"> // if true - client could purchase products; else - all products are free</span>
            "enableTokenomics": bool <span color="#1b1ef7"> // if true - user will mint or spend tokens for his actions (like placing content in room)</span>
            "disableBalance": bool <span color="#1b1ef7"> // DEPRECATED</span>
            "roomId": string <span color="#1b1ef7"> // default room in network (e.g. Agora in humanity)</span>
            "storylineVideoSound": bool <span color="#1b1ef7"> // enables video sound in storyline by default</span>
            "hasQuestionnaire": bool <span color="#1b1ef7"> // enables matchmaking questionnaire</span>
            "hasSearchCard": bool <span color="#1b1ef7"> // enables matchmaking search by search card</span>
            "hasGamingBalance": bool <span color="#1b1ef7"> // enables gaming balance</span>
            "hasAnalytics": bool <span color="#1b1ef7"> // enables analytics</span>
            "allUsersAreConnected": bool <span color="#1b1ef7"> // if true, all users in network are friends by default</span>
            "disableOwnerBadge": bool <span color="#1b1ef7"> // if true, disables room owner badge (crown) near avatar</span>
            "disableFavoriteRooms": bool <span color="#1b1ef7"> // if true, disables favorite room appearance on client</span>
            "disableShareRoom": bool <span color="#1b1ef7"> // if true, disables room sharing</span>
            "disableRoomCreation": bool <span color="#1b1ef7"> // if true, disables room creation on client</span>
            "orderByFirstComments": bool <span color="#1b1ef7"> // show first resource comments first</span>
            "hideTextchat": bool <span color="#1b1ef7"> // if true, client shouldn't show textchat UI</span>
            "hideVideochat": bool <span color="#1b1ef7"> // if true, client shouldn't show videochat UI</span>
            "hideSocialSessions": bool <span color="#1b1ef7"> // if true, client shouldn't show social sessions UI</span>
            "allowHostSetup": bool <span color="#1b1ef7"> // if true, allows user to setup personalised custom params for props in room</span>
            "socialCircleAsset": string <span color="#1b1ef7"> // id of default asset for dynamic social circle</span>
            "socialCircleLimit": int <span color="#1b1ef7"> // sets social circle limit, 0 = no limit</span>
            "allowAnonymous": bool <span color="#1b1ef7"> // if true, users can access network without authorization</span>
            "onlyVerifiedAccounts": bool <span color="#1b1ef7"> // if true, server would require to verify email before creating new user session</span>
            "singleScreenAuth": bool <span color="#1b1ef7"> // if true, show registration and authorization on the same scene</span>
            "requireZipCode": bool <span color="#1b1ef7"> // if true, zip code should be required field during registration</span>
            "paymentProviders": [ string ] <span color="#1b1ef7"> // restricts use of payment providers (stripe/braintree/apple) in network; if empty, all providers are available</span>
            "aiEndpoint": string <span color="#1b1ef7"> // address for AI server</span>
            "loadBalancerUrl": string <span color="#1b1ef7"> // url of load balancer for playgrounds</span>
            "gamificationParticlesIndex": int <span color="#1b1ef7"> // 0 - default, 1 - epam</span>
            "colorizationSchemeType": int <span color="#1b1ef7"> // 0 - Default, 1 - Fabuwood</span>
            "defaultNavigationMode": int <span color="#1b1ef7"> // 0 - classic, 1 - advanced, 2 - pro</span>
            "defaultButtonAppearance": int <span color="#1b1ef7"> // 0 - default, 1 - show, 2 - hide</span>
            "hasCascadeTextchatSkin": bool <span color="#1b1ef7"> // textchat cascade appearance in application</span>
            "animatedBackButton": bool <span color="#1b1ef7"> // animate back button icon in application</span>
            "hasExpo": bool <span color="#1b1ef7"> // informs clients that the network has expo</span>
            "expoStartDate": timestamp <span color="#1b1ef7"> // timestamp when conference starts</span>
            "expoEndDate": timestamp <span color="#1b1ef7"> // timestamp when conference ends</span>
            "hasAttendees": bool <span color="#1b1ef7"> // enables additional room privacy settings</span>
        }
        "dataCollection": {
            "useDefault": bool <span color="#1b1ef7"> // if true, network will use data collection server from default network</span>
            "clientUrl": string
            "systemUrl": string
            "clientId": string
            "authKey": string
        }
        "matchmaking": {
            "autoInviteSupportersToIdealMatchRoom": bool
        }
        "videochat": {
            "defaultVideochatSettings": {
                "videochatMode": string <span color="#1b1ef7"> // videochat/conference</span>
                "videochatType": string <span color="#1b1ef7"> // twilio only (peer-to-peer/group/group-small)</span>
                "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
                "videochatInitUser": string <span color="#1b1ef7"> // who can start the videochat (any/manager)</span>
                "excludeListeners": bool <span color="#1b1ef7"> // don't show non-promoted videochat users</span>
                "usePresentationBoard": bool <span color="#1b1ef7"> // use presentation board as share screen media</span>
                "enableStreaming": bool <span color="#1b1ef7"> // enable videochat streaming to non participants</span>
                "notificationMode": int <span color="#1b1ef7"> // notification mode for videochat events</span>
                "autoPromotion": {
                    "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
                    "autoPromotionLimit": int <span color="#1b1ef7"> // limit of participants with automatic voice permissions</span>
                    "autoDemoteOnLimit": bool <span color="#1b1ef7"> // demote participants that were automatically promoted</span>
                }
                "limitSettings": {
                    "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
                    "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
                }
            }
        }
    }
    "clusterName": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network-private">network private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-network-models"></a>

### Search network models

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.searchNetworkModels

**Permissions:** 

network.listHidden

**Request:** 

<pre>
{
    "text": string
    "offset": int
    "size": int
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "networks": [{ <a href="#network-private">network private structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-network-models"></a>

### List network models

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.listNetworkModels

**Permissions:** 

network.listHidden

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "networks": [{ <a href="#network-private">network private structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-active-network-models"></a>

### List active network models

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.listActiveNetworkModels

**Permissions:** 

network.listHidden

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "networks": [{ <a href="#network-private">network private structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-user-networks"></a>

### List user networks

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.listUserNetworks

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "networks": [{ <a href="#network">network structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="activate-network"></a>

### Activate network

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.activateNetwork

**Permissions:** 

all

**Request:** 

<pre>
{
    "networkId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network-private">network private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="disable-network"></a>

### Disable network

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.disableNetwork

**Permissions:** 

all

**Request:** 

<pre>
{
    "networkId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network-private">network private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-network-thumbnail"></a>

### Set network thumbnail

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.setNetworkThumbnail

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "networkId": string
    "thumbnail": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network-private">network private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-network-settings"></a>

### Set network settings

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.setNetworkSettings

**Permissions:** 

all

**Request:** 

<pre>
{
    "networkId": string
    "settings": {
        "permissions": {
            "publishRoom": [ string ]
        }
        "general": {
            "countryId": int <span color="#1b1ef7"> // in case if network is dedicated to a country</span>
            "packageName": string <span color="#1b1ef7"> // in case if network has package specific content</span>
            "applicationName": string <span color="#1b1ef7"> // in case if network has its own application</span>
            "domainNames": [ string ] <span color="#1b1ef7"> // in case if network has dedicated domain names</span>
            "presentationDomain": string <span color="#1b1ef7"> // default domain for presentation (without redactor)</span>
            "studioDomain": string <span color="#1b1ef7"> // default domain for studio (with redactor)</span>
            "shareDomain": string <span color="#1b1ef7"> // domain for share server</span>
            "ssoProviders": [ string ] <span color="#1b1ef7"> // epam, epam.social[google,facebook,linkedin]</span>
            "loaderType": int <span color="#1b1ef7"> // 0 - logo, 1 - hybrid, 2 - slideshow, 3 - video</span>
            "logoUrl": string <span color="#1b1ef7"> // url</span>
            "loadingVideoUrl": string <span color="#1b1ef7"> // url or youtube id</span>
            "defaultPassword": string <span color="#1b1ef7"> // default password for conference</span>
            "autoVerification": bool <span color="#1b1ef7"> // if true, all newly registered users are verified by default</span>
            "disableEmailLogin": bool <span color="#1b1ef7"> // if true, client application shouldn't show email login option</span>
            "disableSsoLogin": bool <span color="#1b1ef7"> // if true, client application shouldn't show sso login options</span>
            "sendTextchatEmail": bool <span color="#1b1ef7"> // if true, send email that user has new direct textchat message</span>
            "templateStyles": [ string ] <span color="#1b1ef7"> // filter network templates by styles</span>
            "disableDefaultTemplates": bool <span color="#1b1ef7"> // if true, return room templates only from current network</span>
        }
        "defaults": {
            "metaverseCurrency": string <span color="#1b1ef7"> // in case when network has its own currency</span>
            "provisionCurrency": string <span color="#1b1ef7"> // currency that is used for Verus provisioning</span>
            "enablePayments": bool <span color="#1b1ef7"> // if true - client could purchase products; else - all products are free</span>
            "enableTokenomics": bool <span color="#1b1ef7"> // if true - user will mint or spend tokens for his actions (like placing content in room)</span>
            "disableBalance": bool <span color="#1b1ef7"> // DEPRECATED</span>
            "roomId": string <span color="#1b1ef7"> // default room in network (e.g. Agora in humanity)</span>
            "storylineVideoSound": bool <span color="#1b1ef7"> // enables video sound in storyline by default</span>
            "hasQuestionnaire": bool <span color="#1b1ef7"> // enables matchmaking questionnaire</span>
            "hasSearchCard": bool <span color="#1b1ef7"> // enables matchmaking search by search card</span>
            "hasGamingBalance": bool <span color="#1b1ef7"> // enables gaming balance</span>
            "hasAnalytics": bool <span color="#1b1ef7"> // enables analytics</span>
            "allUsersAreConnected": bool <span color="#1b1ef7"> // if true, all users in network are friends by default</span>
            "disableOwnerBadge": bool <span color="#1b1ef7"> // if true, disables room owner badge (crown) near avatar</span>
            "disableFavoriteRooms": bool <span color="#1b1ef7"> // if true, disables favorite room appearance on client</span>
            "disableShareRoom": bool <span color="#1b1ef7"> // if true, disables room sharing</span>
            "disableRoomCreation": bool <span color="#1b1ef7"> // if true, disables room creation on client</span>
            "orderByFirstComments": bool <span color="#1b1ef7"> // show first resource comments first</span>
            "hideTextchat": bool <span color="#1b1ef7"> // if true, client shouldn't show textchat UI</span>
            "hideVideochat": bool <span color="#1b1ef7"> // if true, client shouldn't show videochat UI</span>
            "hideSocialSessions": bool <span color="#1b1ef7"> // if true, client shouldn't show social sessions UI</span>
            "allowHostSetup": bool <span color="#1b1ef7"> // if true, allows user to setup personalised custom params for props in room</span>
            "socialCircleAsset": string <span color="#1b1ef7"> // id of default asset for dynamic social circle</span>
            "socialCircleLimit": int <span color="#1b1ef7"> // sets social circle limit, 0 = no limit</span>
            "allowAnonymous": bool <span color="#1b1ef7"> // if true, users can access network without authorization</span>
            "onlyVerifiedAccounts": bool <span color="#1b1ef7"> // if true, server would require to verify email before creating new user session</span>
            "singleScreenAuth": bool <span color="#1b1ef7"> // if true, show registration and authorization on the same scene</span>
            "requireZipCode": bool <span color="#1b1ef7"> // if true, zip code should be required field during registration</span>
            "paymentProviders": [ string ] <span color="#1b1ef7"> // restricts use of payment providers (stripe/braintree/apple) in network; if empty, all providers are available</span>
            "aiEndpoint": string <span color="#1b1ef7"> // address for AI server</span>
            "loadBalancerUrl": string <span color="#1b1ef7"> // url of load balancer for playgrounds</span>
            "gamificationParticlesIndex": int <span color="#1b1ef7"> // 0 - default, 1 - epam</span>
            "colorizationSchemeType": int <span color="#1b1ef7"> // 0 - Default, 1 - Fabuwood</span>
            "defaultNavigationMode": int <span color="#1b1ef7"> // 0 - classic, 1 - advanced, 2 - pro</span>
            "defaultButtonAppearance": int <span color="#1b1ef7"> // 0 - default, 1 - show, 2 - hide</span>
            "hasCascadeTextchatSkin": bool <span color="#1b1ef7"> // textchat cascade appearance in application</span>
            "animatedBackButton": bool <span color="#1b1ef7"> // animate back button icon in application</span>
            "hasExpo": bool <span color="#1b1ef7"> // informs clients that the network has expo</span>
            "expoStartDate": timestamp <span color="#1b1ef7"> // timestamp when conference starts</span>
            "expoEndDate": timestamp <span color="#1b1ef7"> // timestamp when conference ends</span>
            "hasAttendees": bool <span color="#1b1ef7"> // enables additional room privacy settings</span>
        }
        "dataCollection": {
            "useDefault": bool <span color="#1b1ef7"> // if true, network will use data collection server from default network</span>
            "clientUrl": string
            "systemUrl": string
            "clientId": string
            "authKey": string
        }
        "matchmaking": {
            "autoInviteSupportersToIdealMatchRoom": bool
        }
        "videochat": {
            "defaultVideochatSettings": {
                "videochatMode": string <span color="#1b1ef7"> // videochat/conference</span>
                "videochatType": string <span color="#1b1ef7"> // twilio only (peer-to-peer/group/group-small)</span>
                "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
                "videochatInitUser": string <span color="#1b1ef7"> // who can start the videochat (any/manager)</span>
                "excludeListeners": bool <span color="#1b1ef7"> // don't show non-promoted videochat users</span>
                "usePresentationBoard": bool <span color="#1b1ef7"> // use presentation board as share screen media</span>
                "enableStreaming": bool <span color="#1b1ef7"> // enable videochat streaming to non participants</span>
                "notificationMode": int <span color="#1b1ef7"> // notification mode for videochat events</span>
                "autoPromotion": {
                    "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
                    "autoPromotionLimit": int <span color="#1b1ef7"> // limit of participants with automatic voice permissions</span>
                    "autoDemoteOnLimit": bool <span color="#1b1ef7"> // demote participants that were automatically promoted</span>
                }
                "limitSettings": {
                    "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
                    "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
                }
            }
        }
    }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network-private">network private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-network-plugin-settings"></a>

### Set network plugin settings

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.setNetworkPluginSettings

**Permissions:** 

all

**Request:** 

<pre>
{
    "networkId": string
    "pluginSettings": {
        "expoTitle": string
        "disclaimer": string
        "style": string
        "logoUrl": string
        "expositionDomain": string
        "scroll": string
        "appStoreId": string
        "googleStoreId": string
        "autoPlayOnClick": bool
        "autoPlayOnStart": bool
        "enablePlugin": bool
        "initRoute": {
            "room": string
            "prop": string
        }
        "menuItems": [{
            "directory": string
            "link": string
            "title": string
            "room": string
            "prop": string
            "target": string
            "onlyForAttendees": bool <span color="#1b1ef7"> // if true, menu item will be greyed out until user has network.attendee permission</span>
        }]
        "helpLink": {
            "link": string
            "title": string
            "target": string
        }
        "directory": [{ <span color="#1b1ef7"> // directory item could be nested or single</span>
            "title": string
            "room": string <span color="#1b1ef7"> // target room id</span>
            "prop": string <span color="#1b1ef7"> // target prop id</span>
            "tag": string <span color="#1b1ef7"> // fetch rooms with a tag</span>
            "tagSortBy": string <span color="#1b1ef7"> // popularity/userActivity</span>
            "target": string
            "onlyForAttendees": bool <span color="#1b1ef7"> // if true, directory item will be greyed out until user has network.attendee permission</span>
            "link": string <span color="#1b1ef7"> // link to specific route</span>
            "interactive": bool <span color="#1b1ef7"> // can be clicked if true</span>
            "icon": string <span color="#1b1ef7"> // empty if nested</span>
            "items": [{ NetworkPluginDirectoryItem structure }] <span color="#1b1ef7"> // same structure as directory, if nested; empty, if single'</span>
        }]
    }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "network": { <a href="#network-private">network private structure</a> }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="generate-network-plugin-settings"></a>

### Generate network plugin settings

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.generateNetworkPluginSettings

**Permissions:** 

all

**Request:** 

<pre>
{
    "networkId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "pluginSettings": {
            "expoTitle": string
            "disclaimer": string
            "style": string
            "logoUrl": string
            "expositionDomain": string
            "scroll": string
            "appStoreId": string
            "googleStoreId": string
            "autoPlayOnClick": bool
            "autoPlayOnStart": bool
            "enablePlugin": bool
            "initRoute": {
                "room": string
                "prop": string
            }
            "menuItems": [{
                "directory": string
                "link": string
                "title": string
                "room": string
                "prop": string
                "target": string
                "onlyForAttendees": bool <span color="#1b1ef7"> // if true, menu item will be greyed out until user has network.attendee permission</span>
            }]
            "helpLink": {
                "link": string
                "title": string
                "target": string
            }
            "directory": [{ <span color="#1b1ef7"> // directory item could be nested or single</span>
                "title": string
                "room": string <span color="#1b1ef7"> // target room id</span>
                "prop": string <span color="#1b1ef7"> // target prop id</span>
                "tag": string <span color="#1b1ef7"> // fetch rooms with a tag</span>
                "tagSortBy": string <span color="#1b1ef7"> // popularity/userActivity</span>
                "target": string
                "onlyForAttendees": bool <span color="#1b1ef7"> // if true, directory item will be greyed out until user has network.attendee permission</span>
                "link": string <span color="#1b1ef7"> // link to specific route</span>
                "interactive": bool <span color="#1b1ef7"> // can be clicked if true</span>
                "icon": string <span color="#1b1ef7"> // empty if nested</span>
                "items": [{ NetworkPluginDirectoryItem structure }] <span color="#1b1ef7"> // same structure as directory, if nested; empty, if single'</span>
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="is-user-subscribed-to-network"></a>

### Is user subscribed to network

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.isUserSubscribedToNetwork

**Description:** API checks if user is subscribed to network.

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "userId": string
    "networkId": string
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "isSubscribed": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="subscribe-user-to-network"></a>

### Subscribe user to network

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.subscribeUserToNetwork

**Description:** API subscribes user to network.

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "userId": string
    "networkId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="add-network-participant"></a>

### Add network participant

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /jsonRpc/network.addNetworkParticipant

**Description:** API creates new user (or takes existing one), subscribes him to network and sets company info.

**Permissions:** 

network.manage /networkId

**Request:** 

<pre>
{
    "participant": {
        "email": string
        "firstName": string
        "lastName": string
        "companyName": string
        "companyTitle": string
    }
    "networkId": string
    "password": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="models"></a>

## Models

<br>

<a name="network"></a>

#### Network

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "fullName": string
    "type": string <span color="#1b1ef7"> // Public/Matchmaking/BusinessSocial/NetworkConference/Humanity</span>
    "thumbnail": string <span color="#1b1ef7"> // resourceId</span>
    "parentNetworkId": string <span color="#1b1ef7"> // if not empty, current network is a sub network</span>
}
</pre>

<br>

<a name="network-private"></a>

#### Network Private

<pre>
{
    "id": string
    "created": timestamp
    "updated": timestamp
    "fullName": string
    "type": string <span color="#1b1ef7"> // Public/Matchmaking/BusinessSocial/NetworkConference/Humanity</span>
    "thumbnail": string <span color="#1b1ef7"> // resourceId</span>
    "parentNetworkId": string <span color="#1b1ef7"> // if not empty, current network is a sub network</span>
    "simpleName": string
    "clusterName": string
    "keyspaceName": string
    "searchIndexPrefix": string
    "isActive": bool
    "isDefault": bool
    "isHidden": bool <span color="#1b1ef7"> // do not return network when user requests for list of network (except for developers)</span>
    "subscriptionOptions": [{
        "type": string
        "action": string
    }]
    "settings": {
        "permissions": {
            "publishRoom": [ string ]
        }
        "general": {
            "countryId": int <span color="#1b1ef7"> // in case if network is dedicated to a country</span>
            "packageName": string <span color="#1b1ef7"> // in case if network has package specific content</span>
            "applicationName": string <span color="#1b1ef7"> // in case if network has its own application</span>
            "domainNames": [ string ] <span color="#1b1ef7"> // in case if network has dedicated domain names</span>
            "presentationDomain": string <span color="#1b1ef7"> // default domain for presentation (without redactor)</span>
            "studioDomain": string <span color="#1b1ef7"> // default domain for studio (with redactor)</span>
            "shareDomain": string <span color="#1b1ef7"> // domain for share server</span>
            "ssoProviders": [ string ] <span color="#1b1ef7"> // epam, epam.social[google,facebook,linkedin]</span>
            "loaderType": int <span color="#1b1ef7"> // 0 - logo, 1 - hybrid, 2 - slideshow, 3 - video</span>
            "logoUrl": string <span color="#1b1ef7"> // url</span>
            "loadingVideoUrl": string <span color="#1b1ef7"> // url or youtube id</span>
            "defaultPassword": string <span color="#1b1ef7"> // default password for conference</span>
            "autoVerification": bool <span color="#1b1ef7"> // if true, all newly registered users are verified by default</span>
            "disableEmailLogin": bool <span color="#1b1ef7"> // if true, client application shouldn't show email login option</span>
            "disableSsoLogin": bool <span color="#1b1ef7"> // if true, client application shouldn't show sso login options</span>
            "sendTextchatEmail": bool <span color="#1b1ef7"> // if true, send email that user has new direct textchat message</span>
            "templateStyles": [ string ] <span color="#1b1ef7"> // filter network templates by styles</span>
            "disableDefaultTemplates": bool <span color="#1b1ef7"> // if true, return room templates only from current network</span>
        }
        "defaults": {
            "metaverseCurrency": string <span color="#1b1ef7"> // in case when network has its own currency</span>
            "provisionCurrency": string <span color="#1b1ef7"> // currency that is used for Verus provisioning</span>
            "enablePayments": bool <span color="#1b1ef7"> // if true - client could purchase products; else - all products are free</span>
            "enableTokenomics": bool <span color="#1b1ef7"> // if true - user will mint or spend tokens for his actions (like placing content in room)</span>
            "disableBalance": bool <span color="#1b1ef7"> // DEPRECATED</span>
            "roomId": string <span color="#1b1ef7"> // default room in network (e.g. Agora in humanity)</span>
            "storylineVideoSound": bool <span color="#1b1ef7"> // enables video sound in storyline by default</span>
            "hasQuestionnaire": bool <span color="#1b1ef7"> // enables matchmaking questionnaire</span>
            "hasSearchCard": bool <span color="#1b1ef7"> // enables matchmaking search by search card</span>
            "hasGamingBalance": bool <span color="#1b1ef7"> // enables gaming balance</span>
            "hasAnalytics": bool <span color="#1b1ef7"> // enables analytics</span>
            "allUsersAreConnected": bool <span color="#1b1ef7"> // if true, all users in network are friends by default</span>
            "disableOwnerBadge": bool <span color="#1b1ef7"> // if true, disables room owner badge (crown) near avatar</span>
            "disableFavoriteRooms": bool <span color="#1b1ef7"> // if true, disables favorite room appearance on client</span>
            "disableShareRoom": bool <span color="#1b1ef7"> // if true, disables room sharing</span>
            "disableRoomCreation": bool <span color="#1b1ef7"> // if true, disables room creation on client</span>
            "orderByFirstComments": bool <span color="#1b1ef7"> // show first resource comments first</span>
            "hideTextchat": bool <span color="#1b1ef7"> // if true, client shouldn't show textchat UI</span>
            "hideVideochat": bool <span color="#1b1ef7"> // if true, client shouldn't show videochat UI</span>
            "hideSocialSessions": bool <span color="#1b1ef7"> // if true, client shouldn't show social sessions UI</span>
            "allowHostSetup": bool <span color="#1b1ef7"> // if true, allows user to setup personalised custom params for props in room</span>
            "socialCircleAsset": string <span color="#1b1ef7"> // id of default asset for dynamic social circle</span>
            "socialCircleLimit": int <span color="#1b1ef7"> // sets social circle limit, 0 = no limit</span>
            "allowAnonymous": bool <span color="#1b1ef7"> // if true, users can access network without authorization</span>
            "onlyVerifiedAccounts": bool <span color="#1b1ef7"> // if true, server would require to verify email before creating new user session</span>
            "singleScreenAuth": bool <span color="#1b1ef7"> // if true, show registration and authorization on the same scene</span>
            "requireZipCode": bool <span color="#1b1ef7"> // if true, zip code should be required field during registration</span>
            "paymentProviders": [ string ] <span color="#1b1ef7"> // restricts use of payment providers (stripe/braintree/apple) in network; if empty, all providers are available</span>
            "aiEndpoint": string <span color="#1b1ef7"> // address for AI server</span>
            "loadBalancerUrl": string <span color="#1b1ef7"> // url of load balancer for playgrounds</span>
            "gamificationParticlesIndex": int <span color="#1b1ef7"> // 0 - default, 1 - epam</span>
            "colorizationSchemeType": int <span color="#1b1ef7"> // 0 - Default, 1 - Fabuwood</span>
            "defaultNavigationMode": int <span color="#1b1ef7"> // 0 - classic, 1 - advanced, 2 - pro</span>
            "defaultButtonAppearance": int <span color="#1b1ef7"> // 0 - default, 1 - show, 2 - hide</span>
            "hasCascadeTextchatSkin": bool <span color="#1b1ef7"> // textchat cascade appearance in application</span>
            "animatedBackButton": bool <span color="#1b1ef7"> // animate back button icon in application</span>
            "hasExpo": bool <span color="#1b1ef7"> // informs clients that the network has expo</span>
            "expoStartDate": timestamp <span color="#1b1ef7"> // timestamp when conference starts</span>
            "expoEndDate": timestamp <span color="#1b1ef7"> // timestamp when conference ends</span>
            "hasAttendees": bool <span color="#1b1ef7"> // enables additional room privacy settings</span>
        }
        "dataCollection": {
            "useDefault": bool <span color="#1b1ef7"> // if true, network will use data collection server from default network</span>
            "clientUrl": string
            "systemUrl": string
            "clientId": string
            "authKey": string
        }
        "matchmaking": {
            "autoInviteSupportersToIdealMatchRoom": bool
        }
        "videochat": {
            "defaultVideochatSettings": {
                "videochatMode": string <span color="#1b1ef7"> // videochat/conference</span>
                "videochatType": string <span color="#1b1ef7"> // twilio only (peer-to-peer/group/group-small)</span>
                "videochatEngine": string <span color="#1b1ef7"> // twilio/agora/livekit</span>
                "videochatInitUser": string <span color="#1b1ef7"> // who can start the videochat (any/manager)</span>
                "excludeListeners": bool <span color="#1b1ef7"> // don't show non-promoted videochat users</span>
                "usePresentationBoard": bool <span color="#1b1ef7"> // use presentation board as share screen media</span>
                "enableStreaming": bool <span color="#1b1ef7"> // enable videochat streaming to non participants</span>
                "notificationMode": int <span color="#1b1ef7"> // notification mode for videochat events</span>
                "autoPromotion": {
                    "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
                    "autoPromotionLimit": int <span color="#1b1ef7"> // limit of participants with automatic voice permissions</span>
                    "autoDemoteOnLimit": bool <span color="#1b1ef7"> // demote participants that were automatically promoted</span>
                }
                "limitSettings": {
                    "useCustomSettings": bool <span color="#1b1ef7"> // if false, videochat will use server default settings</span>
                    "videochatLimit": int <span color="#1b1ef7"> // amount of identities allowed in videochat (0 means unlimited)</span>
                }
            }
        }
    }
    "pluginSettings": {
        "expoTitle": string
        "disclaimer": string
        "style": string
        "logoUrl": string
        "expositionDomain": string
        "scroll": string
        "appStoreId": string
        "googleStoreId": string
        "autoPlayOnClick": bool
        "autoPlayOnStart": bool
        "enablePlugin": bool
        "initRoute": {
            "room": string
            "prop": string
        }
        "menuItems": [{
            "directory": string
            "link": string
            "title": string
            "room": string
            "prop": string
            "target": string
            "onlyForAttendees": bool <span color="#1b1ef7"> // if true, menu item will be greyed out until user has network.attendee permission</span>
        }]
        "helpLink": {
            "link": string
            "title": string
            "target": string
        }
        "directory": [{ <span color="#1b1ef7"> // directory item could be nested or single</span>
            "title": string
            "room": string <span color="#1b1ef7"> // target room id</span>
            "prop": string <span color="#1b1ef7"> // target prop id</span>
            "tag": string <span color="#1b1ef7"> // fetch rooms with a tag</span>
            "tagSortBy": string <span color="#1b1ef7"> // popularity/userActivity</span>
            "target": string
            "onlyForAttendees": bool <span color="#1b1ef7"> // if true, directory item will be greyed out until user has network.attendee permission</span>
            "link": string <span color="#1b1ef7"> // link to specific route</span>
            "interactive": bool <span color="#1b1ef7"> // can be clicked if true</span>
            "icon": string <span color="#1b1ef7"> // empty if nested</span>
            "items": [{ NetworkPluginDirectoryItem structure }] <span color="#1b1ef7"> // same structure as directory, if nested; empty, if single'</span>
        }]
    }
}
</pre>

