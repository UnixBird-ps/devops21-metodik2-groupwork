
#FROM node:lts-bullseye-slim
FROM node:16.15.0-alpine3.15

COPY ./world-map-src/package*.json /app/

WORKDIR /app/

RUN cd /app \
&& npm install

COPY ./world-map-src/ /app/

#&& npm run build \

CMD cd /app \
&& npm run dev

#CMD [ "node", "/app/backend-dummy/" ]
