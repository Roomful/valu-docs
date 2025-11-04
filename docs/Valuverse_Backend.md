# Valuverse Backend Server Infrastructure

* Production endpoint: https://api.valuverse.io

* Development endpoint: https://dev.valuverse.io

## Services:

* **Webui** - handles requests from application;
 manages authorization, session management, video chat and text chat.
* **Agent** - handles resource and asset management.
* **Meta** - handles core functionality and database communication.
* **Admin** - handles requests from admin panel.
* **Share** - directs client to appropriate web page or mobile application.
* **Data Collection** - collects analytics data.
* **OpenID Provider** - handles authorization requests from third party applications using OAuth 2.0.

<img src="/images/server-structure.png?raw=true" width="800" alt="Roomful Server Structure">

## Deployment

#### Prerequisites:

* Golang 1.23
* Docker
* Access to google cloud project