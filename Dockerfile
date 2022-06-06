
#FROM node:lts-bullseye-slim
FROM node:16.15.0-alpine3.15

RUN [ "pwd" ]

COPY ./world-map-src/package*.json /app/

WORKDIR /app/

RUN [ "npm", "install" ]

RUN pwd \
&& ls -alF

COPY ./world-map-src/ /app/

CMD pwd \
&& ls -alF \
&& cd /app \
&& pwd \
&& ls -alF \
&& npm run dev

#CMD [ "node", "/app/backend-dummy/" ]
