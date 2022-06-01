
FROM node:lts-bullseye-slim

WORKDIR /app

COPY ./src/package*.json /app/

RUN [ "npm", "install" ]

COPY ./src/ /app/

RUN [ "npm", "build" ]

USER node

CMD [ "npm", "start" ]
