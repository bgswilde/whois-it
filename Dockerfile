FROM node:16-slim

WORKDIR /app

COPY package.json ./

RUN npm install & npm run install

COPY . .

CMD ["npm", "start"]