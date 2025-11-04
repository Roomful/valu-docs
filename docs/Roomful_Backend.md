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

<img src="/images/valuverse-server-structure.png?raw=true" width="800" alt="Roomful Server Structure">

## Deployment

#### Prerequisites:

* Golang 1.23
* Docker
* Access to google cloud project

#### Build docker images:

Authentication to [gcloud](https://cloud.google.com/sdk/gcloud/):
```
gcloud auth configure-docker
```

Download Go dependencies:
```
cd Roomful/roomful
export GOPRIVATE=github.com/Roomful/*
go mod download
```

Build docker images and push to docker registry:
```
# production images (webui, agent and meta)
./deploy-prod.sh

# development images (webui, agent and meta)
./deploy-dev.sh

# share server
./deploy-prod.sh share

# postupload server
./deploy-prod.sh postupload

# data collection server
./deploy-prod.sh data_collection

# admin server
./deploy-prod.sh admin

# openid provider server
./deploy-prod.sh openid_provider

# all server images
./deploy-prod.sh webui agent meta share postupload data_collection admin openid_provider
```

#### Restart services:

Connect to the server using SSH:
```
ssh -i path/to/Roomful/key.pem ubuntu@demo.roomful.co
```

Go to folder:
```
# production
cd server

# development
cd dev-server
```

Pull images from docker registry and restart Roomful services:
```
# single service image
docker compose pull meta
docker compose rm -f -s meta
docker compose up -d meta

# base services
docker compose pull webui agent meta
docker compose rm -f -s webui agent meta
docker compose up -d webui agent meta

# all services
docker compose pull webui agent meta data_collection admin share openid_provider
docker compose rm -f -s webui agent meta data_collection admin share openid_provider
docker compose up -d webui agent meta data_collection admin share openid_provider
```

Check that all services were restarted correctly. 

In order to restart other services (like redis or elasticsearch),
execute the same commands with correct service name.
See `docker-compose.yml` file for more info.


