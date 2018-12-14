# <img src="https://user-images.githubusercontent.com/1423657/38167420-070b1a0c-3535-11e8-8d25-be0f38779b7b.png"/>

**HEPop** is a prototype stand-alone [HEP](https://github.com/sipcapture/hep) Capture Server designed for [HOMER7](https://github.com/sipcapture/homer) capable of emitting indexed datasets and tagged timeseries to multiple backends in bulks. HEPop is developed using `NodeJS` and distributed using `npm`.

![image](https://user-images.githubusercontent.com/1423657/47257858-83201900-d493-11e8-9242-49f5f38854c6.png)

HOMER-App, HEPop JSON, TICK Stack
========

#### BETA VERSION! PLEASE REPORT BUGS AND IMPROVEMENTS

## Setup

```bash
docker-compose up
```

to bring up:  

* HEPop HTTP Server localhost:8080 (JSON-only)
* Homer localhost:9080 (admin/sipcapture) 
* TICK Stack
  * Chronograf localhost:9090 (admin/admin)
  * InfluxDB
  * Kapacitor
  * Telegraf

