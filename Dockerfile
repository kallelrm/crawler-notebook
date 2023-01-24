FROM node:18

WORKDIR /

COPY package*.json ./
RUN npm ci --only=production

COPY . .
EXPOSE 8080

CMD [ "node", "server.js"]
