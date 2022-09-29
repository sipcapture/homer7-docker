
<img src="https://user-images.githubusercontent.com/1423657/173144443-fc7ba783-d5bf-47f9-bf59-707693da5ed1.png" height=150 /><img src="https://user-images.githubusercontent.com/1423657/193056512-27d9d3e9-1de0-4cd1-a354-fed88daba855.png" height=100>

# 🔎 _homer + qryn oss polyglot demo_

The ultimate **qryn.js** + **hep** docker demo w/ sample _logs, traces and metrics_ - _batteries included!_

<br />
<a href="https://qryn.metrico.in" target="_blank">
<img src="https://github.com/metrico/qryn-docs/blob/main/docs/resources/images/qryn_logo_trans.png?raw=true" width=50 />&nbsp;
<img src="https://user-images.githubusercontent.com/1423657/184496222-ca95d80c-906f-4c77-a963-86f0b27a56b0.png" width=50 />&nbsp;
<img src="https://user-images.githubusercontent.com/1423657/184496304-4f35a365-efdc-4dca-9771-6b7b1deb9ae3.png" width=50 />&nbsp;
<img src="https://user-images.githubusercontent.com/1423657/184496174-aca323dd-f40e-489a-a584-fa7348c0eab0.png" width=50 />&nbsp;
<img src="https://user-images.githubusercontent.com/1423657/184496973-9f46e551-872d-4a25-877c-51a2e5f53e84.png" width=50 />&nbsp;
<img src="https://user-images.githubusercontent.com/1423657/184494381-15d20f5d-3d52-411b-9064-dfd2ccea7c1c.png" width=50 />&nbsp;
<img src="https://user-images.githubusercontent.com/1423657/184494438-17d7ceb0-a62a-4819-9b1c-43d7f0baf802.png" width=50 />&nbsp;
<img src="https://avatars.githubusercontent.com/u/54801242?s=200&v=4" width=50 /><br/>
</a>

[![184538094-13c11500-24ef-4468-9f33-dc9d564238e3](https://user-images.githubusercontent.com/1423657/186014786-165b18da-e808-4cf7-a6fc-eb90df705400.gif)](https://qryn.metrico.in)

<br>

### Usage

#### Setup
Clone the repository and launch the **qryn** polyglot demo using _docker-compose_

```bash
docker-compose pull 
docker-compose up -d
```

#### Send HEP 
Send some HEP traffic to the HEP socket on port 9060 or run `hepgen.js` to generate some

#### Login 
Access the preconfigured Grafana instance as `admin/admin`
```
http://localhost:3000
```
#### Explore
The demo generates correlated _logs, metrics and traces_ with autoconfigured datasources

  - ```Loki```
  - ```Tempo```
  - ```Prometheus```
  - ```Flux```

#### Go Pro
Loving it? Learn how to send your own data using our [online documentation](https://qryn.metrico.in) 

<br>

![image](https://user-images.githubusercontent.com/1423657/183254312-b52811e5-f563-440e-84e4-8312714a4c9b.png)

![image](https://user-images.githubusercontent.com/1423657/183254290-fac87747-51ce-4648-a7aa-073fdcdd6c10.png)

![image](https://user-images.githubusercontent.com/1423657/186708038-685467ee-a135-4fa0-af31-eae487da2139.png)

![image](https://user-images.githubusercontent.com/1423657/186280231-8fbcf1f1-69b7-43fe-91ad-7e6ee8389978.png)
