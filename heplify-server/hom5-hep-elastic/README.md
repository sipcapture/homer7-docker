Homer 5, heplify-server, Elasticsearch
========

## Setup

```bash
docker-compose up
```

to bring up:  

* HEPlify-server localhost:9060 (hep-only)
* Homer localhost:9080 (admin/test123) 
  * Telegraf
* Kibana localhost:9070
  * Elasticsearch


### Notes
#### Timelion CPS and RPS
The following Timelion expression can be used to graph CPS and RPS from HOMER statistics stored in Elasticsearch:
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
 
 <img src="https://user-images.githubusercontent.com/39862433/42957981-366a966a-8b52-11e8-81fc-a8d386153f1d.png">
