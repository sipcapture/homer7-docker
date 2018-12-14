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
        "elastic" : {
          "target": "http://elasticsearch:9200",
          "max_bulk_qtty": 10,
          "max_request_num": 20,
          "index": "homer"
        }
  },
  "metrics": {
        "influx":{
          "period": 30000,
          "expire": 300000,
          "dbName": "hep",
          "hostname": "telegraf:8094"
        }
  },
  "debug": false
}
