{
  "id" : "HEPop101",
  "socket": "http",
  "port": 8080,
  "address": "0.0.0.0",
  "queue": {
    "timeout": 2000,
    "maxSize": 1000,
    "useInterval": true
  },
  "dbName": "homer_data",
  "tableName": "hep",
  "db": {
        "rawSize": 8000,
	"loki" : {
	  "url": "http://loki:3100/api/prom/push"
	}
  },
  "metrics": {
        "disabled_influx":{
          "period": 30000,
          "expire": 300000,
          "dbName": "hep",
          "hostname": "telegraf:8094"
        }
  },
  "debug": true
}

