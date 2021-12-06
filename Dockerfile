FROM node:16-slim

WORKDIR /app

COPY package.json ./

COPY . .

WORKDIR /server

RUN npm install

WORKDIR /client

RUN npm install

WORKDIR /app

CMD ["npm", "start"]