
#FROM node:lts-bullseye-slim
FROM node:16.15.0-alpine3.15

RUN [ "pwd" ]

COPY ./world-map-src/package*.json /app/

WORKDIR /app/

RUN [ "npm", "install" ]

COPY ./world-map-src/ /app/

CMD cd /app \
&& npm run build \
&& npm run dev

#CMD [ "node", "/app/backend-dummy/" ]
