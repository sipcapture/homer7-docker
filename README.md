
<img src=http://i.imgur.com/ViXcGAD.png width=500>

# HOMER Docker Containers
http://sipcapture.org

This repository provides ready-to-run [HOMER](https://github.com/sipcapture/homer/tree/homer) recipes using `Docker` and [docker-compose](https://docs.docker.com/compose/install/)

### Choosing a Capture Server & Backend
HOMER is all about options and easy integrations. Choose your preferred flavour to proceed:

* [HOMER 7](https://github.com/sipcapture/homer/tree/homer7) _development_
  * [HEPlify-Server](https://github.com/sipcapture/homer7-docker/tree/master/heplify-server)
    * [HEPlify + Prometheus ](https://github.com/sipcapture/homer7-docker/tree/master/heplify-server/hom7-hep-prom-graf)
    * [HEPlify + Prometheus + Loki ](https://github.com/sipcapture/homer7-docker/tree/master/heplify-server/hom7-hep-prom-loki-graf)
    * [HEPlify + InfluxDB ](https://github.com/sipcapture/homer7-docker/tree/master/heplify-server/hom7-hep-influx) 
    * [HEPlify + InfluxDB + LoudML](https://github.com/sipcapture/homer7-docker/tree/master/heplify-server/hom7-hep-influx)
    * [HEPlify + Elastic ](https://github.com/sipcapture/homer7-docker/tree/master/heplify-server/hom7-hep-elastic) 
    * [HEPlify + Elastic Headless](https://github.com/sipcapture/homer7-docker/tree/master/heplify-server/hom7-elastic)
    
  * [HEPop Server](https://github.com/sipcapture/homer7-docker/tree/master/hepop)
    * [HEPop + InfluxDB](https://github.com/sipcapture/homer7-docker/tree/master/hepop/hom7-hep-influx)
    * [HEPop + InfluxDB + LoudML](https://github.com/sipcapture/homer7-docker/tree/master/hepop/hom7-loudml-influx)
    * [HEPop + InfluxDB + JSON](https://github.com/sipcapture/homer7-docker/tree/master/hepop/hom7-json-influx) for Janus/Mediasoup
    * [HEPop + Elasticsearch + JSON](https://github.com/sipcapture/homer7-docker/tree/master/hepop/hom7-elastic-only) for Janus/Mediasoup


* [HOMER 5](https://github.com/sipcapture/homer/tree/homer5) _legacy_
  * [HEPlify-Server](https://github.com/sipcapture/homer7-docker/tree/master/heplify-server)
    * [HEPlify-S + Prometheus ](https://github.com/sipcapture/homer7-docker/tree/master/heplify-server/hom5-hep-prom-graf)
    * [HEPlify-S + InfluxDB ](https://github.com/sipcapture/homer7-docker/tree/master/heplify-server/hom5-hep-influx)
    * [HEPlify-S + Elasticsearch ](https://github.com/sipcapture/homer7-docker/tree/master/heplify-server/hom5-hep-elastic)
    
  * [OpenSIPS + sipcapture](https://github.com/sipcapture/homer7-docker/tree/master/opensips-everything)
  * [Kamailio + sipcapture](https://github.com/sipcapture/homer7-docker/tree/master/kamailio)

### Running Containers

To start your own bundle or choice, just run the following command inside the selected directory:

```bash
$ docker-compose up -d
```

#### Data Mapping

The `docker-compose` scheme will map container data into local directory volumes. Check and extend the provided examples accordingly.


----

#### Made by Humans
This Open-Source project is made possible by actual Humans without corporate sponsors, angels or patreons.<br>
If you use this software in production, please consider supporting its development with contributions or [donations](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=donation%40sipcapture%2eorg&lc=US&item_name=SIPCAPTURE&no_note=0&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHostedGuest)

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=donation%40sipcapture%2eorg&lc=US&item_name=SIPCAPTURE&no_note=0&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHostedGuest) 
