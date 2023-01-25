#! /bin/bash

workdir=`pwd`;

cd ~;
curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh;
sudo bash nodesource_setup.sh;
sudo apt install nodejs;

node -v;

cd $workdir

docker run --name postgres -e POSTGRES_PASSWORD=321 -e POSTGRES_USER=postgres -p 5432:5432 -d postgres;

npm install;
npm run build;
npx sequelize db:migrate;
npm start;