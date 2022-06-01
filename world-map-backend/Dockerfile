
FROM node:lts-bullseye-slim

WORKDIR /app

COPY ./src/package*.json /app/

RUN [ "npm", "install" ]

COPY ./src/ /app/

RUN [ "npm", "run", "build" ]

USER node

CMD [ "npm", "start" ]
