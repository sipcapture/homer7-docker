<img src="https://user-images.githubusercontent.com/1423657/55069501-8348c400-5084-11e9-9931-fefe0f9874a7.png" width=200/>

# HOMER + InfluxDB + Grafana

This bundle provides the latest HEP/HOMER monitoring stack alongside Grafana and InfluxDB/Telegraf to provide DataDog-like statsd functionality out of the box.

## Setup

```bash
docker-compose up
```

to bring up:  

* `HEPlify-server` localhost:9060 (hep-only)
* `Homer` localhost:9080 (admin/sipcapture) 
* `Grafana` localhost:3000 (admin/admin)
* `InfluxDB` localhost:8086
* `Telegraf` localhost:8084 (influx), localhost:8125 (statsd)

