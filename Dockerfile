FROM node:8.16.0-alpine

RUN mkdir /data
RUN mkdir /data/db

RUN apk add --no-cache mongodb

RUN apk add --update tzdata
ENV TZ="America/Sao_Paulo"

WORKDIR /home/node
COPY . /home/node

RUN npm install --production

CMD npm start
