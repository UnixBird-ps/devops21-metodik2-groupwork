
FROM node:16.15.0-alpine3.15

COPY package*.json ./backend/ ./public/ ./src/ ./index.html ./vite.config.js /app/

RUN cd /app && npm install && npm run dev

#CMD npm install && npm run dev
