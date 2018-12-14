# <img src="https://user-images.githubusercontent.com/1423657/38167420-070b1a0c-3535-11e8-8d25-be0f38779b7b.png"/>

**HEPop** is a prototype stand-alone [HEP](https://github.com/sipcapture/hep) Capture Server designed for [HOMER7](https://github.com/sipcapture/homer) capable of emitting indexed datasets and tagged timeseries to multiple backends in bulks. HEPop is developed using `NodeJS` and distributed using `npm`.

HOMER-App, HEPop, TICK Stack
========

#### BETA VERSION! PLEASE REPORT BUGS AND IMPROVEMENTS

## Setup

```bash
docker-compose up
```

to bring up:  

* HEPop Server localhost:9060 (hep-only)
* Homer localhost:9080 (admin/sipcapture) 
* Chronograf localhost:9090 (admin/admin)
  * InfluxDB
  * Kapacitor
  * Telegraf

