FROM node:18

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY . ./

RUN npm install
RUN npm run build
RUN npx sequelize db:migrate

RUN npm prune --production

EXPOSE 3333

CMD [ "/bin/node", "npm start" ]