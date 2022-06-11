
FROM node:16.15.0-alpine3.15

#WORKDIR /app/

RUN mkdir /app

COPY package*.json backend public src index.html vite.config /app/

RUN cd /app && npm install && npm run dev

#CMD npm install && npm run dev
