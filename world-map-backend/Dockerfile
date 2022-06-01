
FROM node:lts-bullseye-slim

WORKDIR /app

COPY package*.json ./

COPY ./src/ /app/

USER node

RUN [ "npm", "install" ]

CMD [ "node", "backend/index.js" ]
