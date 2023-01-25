#! /bin/bash

docker run --name postgres -e POSTGRES_PASSWORD=123 -d -p 5432:5432 postgres;

npm install;
npm run build;
npx sequelize db:migrate;
npm start;