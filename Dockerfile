
FROM node:16.15.0-alpine3.15

WORKDIR /app

COPY ./package*.json ./backend/ ./public/ ./src/ ./index.html ./vite.config.js /app/

RUN \
pwd \
&& ls -al \
&& cd /app \
&& pwd \
&& ls -al \
&& npm install \
&& npm run dev

#CMD npm install && npm run dev
