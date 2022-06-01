
FROM node:lts-bullseye-slim

WORKDIR /app

COPY ./src/package*.json /app/

RUN [ "npm", "install" ]

COPY ./src/ /app/

USER node

CMD [ "node", "backend/index.js" ]
