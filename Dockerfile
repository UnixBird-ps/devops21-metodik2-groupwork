
FROM node:16.15.0-alpine3.15

COPY source/ /app/

RUN \
pwd \
&& ls -al \
&& cd /app \
&& pwd \
&& ls -al \
&& npm install \
&& npm run dev

#CMD npm install && npm run dev
