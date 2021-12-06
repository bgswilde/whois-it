FROM node:16-slim

WORKDIR /app

COPY package.json ./

RUN cd server & npm install & cd ../client & npm install

COPY . .

CMD ["npm", "start"]