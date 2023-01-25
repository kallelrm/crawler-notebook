#! /bin/bash

workdir=`pwd`;

cd ~;
curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh;
sudo bash nodesource_setup.sh;
sudo apt-get install -y nodejs;
sudo apt-get install gcc g++ make;

node -v;

cd $workdir;

docker run --name postgres -e POSTGRES_PASSWORD=123 -e POSTGRES_USER=postgres -p 5433:5433 -d postgres;

npm install;
npm run build;
npx sequelize db:migrate;

npm install -g pm2

npm prune --production
npm start;