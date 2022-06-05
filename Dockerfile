
#FROM node:lts-bullseye-slim
FROM node:16.15.0-alpine3.15

WORKDIR /app

COPY ./world-map-src/package*.json /app/

RUN [ "npm", "install" ]

COPY ./world-map-src/ /app/

#RUN [ "npm", "run", "build" ]

RUN [ "ls", "-alF", "/app/" ]

USER node

#CMD [ "npm", "run", "dev" ]

CMD [ "node", "/app/backend-dummy/" ]
