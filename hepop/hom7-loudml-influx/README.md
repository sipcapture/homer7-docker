Homer 7, HEPop server, TICK Stack + LoudML
========


![ezgif com-optimize 11](https://user-images.githubusercontent.com/1423657/47255154-c915b680-d46c-11e8-9ccb-882a0ed86f4a.gif)

This example bundles HOMER 7 + LoudML 1-Click predictions using InfluxDB and Chronograf

For instructions and inspiration, see https://www.youtube.com/watch?v=qP910YmFpeQ


#### BETA VERSION! PLEASE REPORT BUGS AND IMPROVEMENTS

## Setup

```bash
docker-compose up -d
```

to bring up:  

* HEPop server localhost:9060 (hep-only)
* Homer localhost:9080 (admin/sipcapture) 
* TICK Stack
  * Chronograf localhost:9090 (admin/admin)
  * InfluxDB
  * Kapacitor
  * Telegraf
* LoudML


