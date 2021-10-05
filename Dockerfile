FROM node:12.19.0-alpine3.9

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 3001

COPY . .