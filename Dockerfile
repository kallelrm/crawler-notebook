FROM node:18

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

COPY package* ./

RUN npm install

COPY . .
RUN npm run db:migrate

RUN npm run build

# RUN npm prune --production

EXPOSE 3333

CMD [ "node", "dist/server.js" ]
