Homer Elastic
========

#### BETA VERSION! PLEASE REPORT BUGS AND IMPROVEMENTS

This recipe will bring up a headless HOMER bundle, shipping RTC Events and Statistics to Elasticsearch.

#### This recipe is compatible with JANUS and MediaSoup events


## Setup

```bash
docker-compose up
```

to bring up:  

* HEPop localhost:8080 (json-only)
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
 
