FROM node:18

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app

COPY . 	/usr/src/app/

RUN npm install
RUN npm run build
RUN npm run db:migrate

# RUN npm prune --production

EXPOSE 3333

CMD [ "node", "dist/server.js" ]
