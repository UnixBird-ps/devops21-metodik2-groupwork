
FROM node:lts-bullseye-slim

WORKDIR /app

COPY ./world-map-src/package*.json /app/

RUN [ "npm", "install" ]

COPY ./world-map-src/ /app/

RUN [ "npm", "run", "build" ]

USER node

CMD [ "npm", "start" ]
