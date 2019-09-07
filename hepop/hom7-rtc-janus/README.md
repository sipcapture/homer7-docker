# RTC Homer & Janus
This magic bundle provides a fully working Janus + HOMER (headless) setup for tracking statistics and events via Grafana.


## Components
* JANUS GATEWAY (https TCP/8088/8089/8080)
* HOMER 7 HEPOP (http TCP/9080)
* INFLUXDB (http TCP/8086)
* LOKI (http TCP/3100)
* GRAFANA (http TCP/3000)

#### Janus Demo

##### Self-Signed
This demo uses self-signed certificates. Before using the demo, those must be accepted by browsing to:
```
https://YOUR-SERVER:8089
```
##### Janus Demos
To access the Janus demos, browse to:
```
https://YOUR-SERVER:8080
```

##### Grafana Demo
```
To access the Janus Events and Logs, access Grafana by browsing to:
```
http://YOUR-SERVER:3000
```



