Homer Elastic
========

#### BETA VERSION! PLEASE REPORT BUGS AND IMPROVEMENTS

This recipe will bring up a headless HOMER bundle, with both data and statistics stored to Elasticsearch.

A Kibana [preset kit](https://raw.githubusercontent.com/sipcapture/homer-docker/master/heplify-server/hom7-elastic/conf/kibana-import.json) is provided and ready for manual <img src="https://i.imgur.com/qlrOlq9.png" width=80 valign=middle />


<img src="https://i.imgur.com/O1JQkRt.png" width=600 />

<img src="https://user-images.githubusercontent.com/39862433/42957981-366a966a-8b52-11e8-81fc-a8d386153f1d.png" width=600 />

<img src="https://i.imgur.com/kAgqZE3.png" width=600 />

<img src="https://user-images.githubusercontent.com/1423657/43161289-fbea4168-8f87-11e8-82a0-95d90f00cc21.gif" width=600 />


## Setup

```bash
docker-compose up
```

to bring up:  

* HEPlify-server localhost:9060 (hep-only)
* Telegraf
* Kibana localhost:9090 (admin/admin)
* Elasticsearch (hep-*), (heplify-*)


---------------
### Notes

#### Timelion Formulas
The following Timelion expressions can be used to graph CPS and RPS from HOMER statistics stored in Elasticsearch:
##### Registrations per Second
```
.es(index=hep-*, timefield=@timestamp,q='measurement_name:"heplify_method_response" AND tag.method:"REGISTER" AND tag.response:"200"', metric=max:heplify_method_response.counter).derivative().abs().mvavg(1m).scale_interval(1s).yaxis(min=0).color(orange).lines(fill=2,width=1).label("RPS").legend(position=nw,showTime=true)
```
##### Calls per Second
```
 .es(index=hep-*, timefield=@timestamp,q='measurement_name:"heplify_method_response" AND tag.method:"INVITE" AND tag.response:"200"', metric=avg:heplify_method_response.counter).derivative().mvavg(1m).scale_interval(1s).yaxis(min=0).color(green).lines(fill=1,width=1).label("CPS").legend(position=nw,showTime=true)
```
##### Failures per Second
```
 .es(index=hep-*, timefield=@timestamp,q='measurement_name:"heplify_method_response" AND tag.method:"INVITE" AND (tag.response:"407" or tag.response:"401")', metric=avg:heplify_method_response.counter).derivative().mvavg(1m).scale_interval(1s).yaxis(min=0).color(red).bars(stack=true).label("FPS").legend(position=nw,showTime=true)
```
 
