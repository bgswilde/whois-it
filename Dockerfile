FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm run install

COPY . .

CMD ["npm", "start"]