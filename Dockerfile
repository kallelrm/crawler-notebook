FROM node:18

WORKDIR /usr/src/app

COPY package.json ./

COPY . .

RUN npm install
RUN npm run build
RUN npx sequelize db:migrate

RUN npm prune --production

EXPOSE 3333

CMD [ "npm" "start" ]