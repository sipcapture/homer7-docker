#!/bin/bash
if [ "$1" == "yes" ]; then 

DB_USER=$2
DB_PASS=$3

curl -s https://packagecloud.io/install/repositories/qxip/sipcapture/script.deb.sh | sudo bash
sudo apt-get install -y homer-app heplify-server

sudo cp /usr/local/homer/etc/webapp_config.json.example /usr/local/homer/etc/webapp_config.json
sudo sed -i -e "s/homer_user/$DB_USER/g" /usr/local/homer/etc/webapp_config.json
sudo sed -i -e "s/homer_password/$DB_PASS/g" /usr/local/homer/etc/webapp_config.json
sudo sed -i -e "s/localhost/127.0.0.1/g" /usr/local/homer/etc/webapp_config.json
sudo homer-app -create-table-db-config 
sudo homer-app -populate-table-db-config
sudo sed -i -e "s/DBUser\s*=\s*\"postgres\"/DBUser          = \"$DB_USER\"/g" /etc/heplify-server.toml
sudo sed -i -e "s/DBPass\s*=\s*\"\"/DBPass          = \"$DB_PASS\"/g" /etc/heplify-server.toml
sudo sed -i -e "s/PromAddr\s*=\s*\".*\"/PromAddr        = \"0.0.0.0:9098\"/g" /etc/heplify-server.toml
sudo sed -i -e "s/HEPWSAddr\s*=\s*\".*\"/HEPWSAddr    = \"0.0.0.0:3050\"/g" /etc/heplify-server.toml
sudo sed -i -e "s/AlegIDs\s*=\s*\[\]/AlegIDs        = \[\"X-CID\"]/g" /etc/heplify-server.toml
sudo sed -i -e "s/CustomHeader\s*=\s*\[\]/CustomHeader        = \[\"X-Application-Sid\", \"X-Originating-Carrier\", \"X-MS-Teams-Tenant-FQDN\", \"X-Authenticated-User\"]/g" /etc/heplify-server.toml

sudo systemctl enable homer-app
sudo systemctl restart homer-app
sudo systemctl status homer-app

sudo systemctl enable heplify-server
sudo systemctl restart heplify-server
sudo systemctl status heplify-server

fi