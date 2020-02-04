<img src="https://user-images.githubusercontent.com/1423657/55069501-8348c400-5084-11e9-9931-fefe0f9874a7.png" width=200/>

# HOMER + TimescaleDB + Grafana

![image](https://i.imgur.com/Atdig3X.gif)
![image](https://user-images.githubusercontent.com/1423657/68542499-87281d00-03ad-11ea-8c4c-fbccdc8c023b.png)
![image](https://user-images.githubusercontent.com/1423657/50036716-4bed6480-000b-11e9-98bd-81a78cd54251.png)

#### BETA VERSION! PLEASE REPORT BUGS AND IMPROVEMENTS

--------

## Setup

```bash
docker-compose up
```

to bring up:  

* [Homer]   localhost:9080 (admin/sipcapture)
* [TimescaleDB]   localhost:5432 (root/homerSeven)
* [Grafana]      localhost:3000 (admin/admin)
* [Alertmanager] localhost:9093 (admin/admin)

When the Grafana dashboard autoprovisioning does not work for you make sure you have no old grafana volumes.

## Configuration

When you change some files inside the Prometheus or Alertmanager folder you can reload them without interruption.

#### Prometheus
```bash
curl -s -XPOST localhost:9090/-/reload -u admin:admin
```

#### Alertmanager
```bash
curl -s -XPOST localhost:9093/-/reload -u admin:admin
```

#### Service
When you need to change the docker-compose file i.e to setup smtp for Grafana:
```bash
docker-compose up -d
```
Docker will only restart the service you changed inside the docker-compose file. 
