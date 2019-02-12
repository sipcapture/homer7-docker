# <img src="https://user-images.githubusercontent.com/1423657/38167420-070b1a0c-3535-11e8-8d25-be0f38779b7b.png"/>

# RTC Homer
This compose demo outlines the basics to connect RTC server and browser-side events to an HEP collector w/ Loki support



## Components
* HOMER 7 HEPOP (http TCP/9080)
* LOKI (http TCP/3100)
* GRAFANA (http TCP/3000)

![image](https://user-images.githubusercontent.com/1423657/52523365-e3c8a100-2c90-11e9-9bb6-c9d8f81f3866.png)

## Janus Config
This demo supports Janus Event handlers to index events and produce statistics about streams:
```
  [general]
  enabled = yes
  events = all
  grouping = yes
  backend = https://localhost:8080
```

## Jitsi Web Config
This supports Jitsi web `"analytics handlers"` to inject an event shipper into the live application:
```
  analyticsScriptUrls: [
	 "https://cdn.jsdelivr.net/gh/lmangani/jitsi-hep@production/jitsi-hep.js"
  ],
```

![image](https://user-images.githubusercontent.com/1423657/52583339-a4848680-2e2f-11e9-865a-5b2a26ad5169.png)

![image](https://user-images.githubusercontent.com/1423657/52584363-28d80900-2e32-11e9-90fb-ec412a177879.png)


### Notice
  * Browser might return CORS related events when running on different domains/hosts
  * Events are as-is without correlation, identifiers, etc
