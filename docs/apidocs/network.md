<br>

<a name="network-api"></a>

## Network API

| Endpoint | Method | Description |
|-----|-----|-----|
| [network:list](#get-networks) | websocket | Get networks |
| [network:listOrdered](#get-networks-ordered) | websocket | Get networks ordered |
| [network:searchNetworks](#search-networks) | websocket | Search networks |
| [network:searchTexhibitionNetworks](#search-texhibition-networks) | websocket | Search texhibition networks |
| [network:getNetworkInfoForUser](#get-network-info-for-user) | websocket | Get network info for user |
| [network:subscribe](#subscribe-to-network) | websocket | Subscribe to network |
| [network:switch](#switch-network) | websocket | Switch network |
| [network:searchUserNetworks](#search-user-networks) | websocket | Search user networks |
| [network:getNetworksForCountries](#get-networks-for-countries) | websocket | Get networks for countries |
| [network:subscriptionCreated](#network-subscription-created-event) | websocketEvent | Network subscription created event |
| [network:subscriptionUpdated](#network-subscription-updated-event) | websocketEvent | Network subscription updated event |
| [network:subscriptionRemoved](#network-subscription-removed-event) | websocketEvent | Network subscription removed event |

<br>

<a name="get-networks"></a>

### Get networks

**Method:** websocket

**Endpoint:** network:list

**Description:** API returns list of networks that are available to user.

**Request:** 

<pre>
{
    "data": {
        "type": string
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
        "networks": [{
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
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-networks-ordered"></a>

### Get networks ordered

**Method:** websocket

**Endpoint:** network:listOrdered

**Description:** Function returns networks in next order: 

1) default network 

2) current user network 

3) subscribed networks 

4) non subscribed networks

**Request:** 

<pre>
{
    "data": {
        "exclude": [ string ]
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
        "networks": [{
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
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-networks"></a>

### Search networks

**Method:** websocket

**Endpoint:** network:searchNetworks

**Description:** API returns list of networks (according to search query) that are available to user.

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
        "networks": [{
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
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-texhibition-networks"></a>

### Search texhibition networks

**Method:** websocket

**Endpoint:** network:searchTexhibitionNetworks

**Description:** API returns list of texhibition networks (hasExpo == true) that are available to user.

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
        "networks": [{
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
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-network-info-for-user"></a>

### Get network info for user

**Method:** websocket

**Endpoint:** network:getNetworkInfoForUser

**Description:** API returns network info for user.

**Request:** 

<pre>
{
    "data": {
        "networkId": string
    }
    "event": { "id": string, "date": timestamp }
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

<a name="subscribe-to-network"></a>

### Subscribe to network

**Method:** websocket

**Endpoint:** network:subscribe

**Description:** API subscribes user to the network.

**Request:** 

<pre>
{
    "data": {
        "networkId": string
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

<a name="switch-network"></a>

### Switch network

**Method:** websocket

**Endpoint:** network:switch

**Description:** API switches user context to another network. All following requests will be handled in context of new network. 

If ```requestNewSessionId``` parameter provided - client will receive new session. Old session id could be used to operate in another browser tab in old network.

**Request:** 

<pre>
{
    "data": {
        "networkId": string
        "requestNewSessionId": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "networkId": string
        "sessionId": string <span color="#1b1ef7"> // sessionId is not empty only when requestNewSessionId is true</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-user-networks"></a>

### Search user networks

**Method:** websocket

**Endpoint:** network:searchUserNetworks

**Description:** API searches networks user is subscribed to.

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
        "networks": [{ <a href="#network">network structure</a> }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-networks-for-countries"></a>

### Get networks for countries

**Method:** websocket

**Endpoint:** network:getNetworksForCountries

**Description:** API returns list of networks with non-empty ```settings.general.countryId```. (Humanity API)

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "networks": [{
            "network": { <a href="#network">network structure</a> }
            "country": {
                "countryId": int <span color="#1b1ef7"> // numeric country code as defined in ISO3166-1</span>
                "countryName": string
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="network-subscription-created-event"></a>

### Network subscription created event

**Event:** network:subscriptionCreated

**Data:** 

<pre>
{
    "data": { <a href="#network">network structure</a> }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="network-subscription-updated-event"></a>

### Network subscription updated event

**Event:** network:subscriptionUpdated

**Data:** 

<pre>
{
    "data": { <a href="#network">network structure</a> }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="network-subscription-removed-event"></a>

### Network subscription removed event

**Event:** network:subscriptionRemoved

**Data:** 

<pre>
{
    "data": { <a href="#network">network structure</a> }
    "error": { "status": bool, "code": int, "message": string }
}
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

