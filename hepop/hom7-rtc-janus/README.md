<img src="https://www.januscon.it/assets/images/januscon.png" width=300>

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

<img src="https://user-images.githubusercontent.com/1423657/64474359-6278b480-d174-11e9-8b12-2555063534c8.png" width=200>

Proceed to `advanced` options and choose to proceed and accept the certificate.

##### Janus Demos
To access the Janus demos, browse to:
```
https://YOUR-SERVER:8080
```

##### Grafana Demo
To access the Janus Events and Logs, access Grafana by browsing to:
```http://YOUR-SERVER:3000``` 


![image](https://user-images.githubusercontent.com/1423657/64474329-0877ef00-d174-11e9-8e08-ea1b3f7d9e21.png)

![image](https://user-images.githubusercontent.com/1423657/64474342-25acbd80-d174-11e9-9dcd-3b2b0608ae1b.png)




