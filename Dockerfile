FROM node:18

WORKDIR /usr/src/app

COPY package.json ./

COPY . .

RUN npm install
RUN npm run build

RUN chmod +x entrypoint.sh 
ENTRYPOINT [ "./entrypoint.sh" ]
RUN npm prune --production

EXPOSE 3333

RUN npm start 
