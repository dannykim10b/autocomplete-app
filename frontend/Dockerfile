FROM node:13.12.0-alpine

WORKDIR /usr/src/app/frontend

COPY package*.json ./

COPY ./yarn.lock ./

RUN npm install

COPY . .

CMD ["npm", "start"]