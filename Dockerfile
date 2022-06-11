
FROM node:16.15.0-alpine3.15

WORKDIR /app/

COPY ./package*.json /app/

RUN cd /app \
&& npm install

COPY ./capitals-backend-source/ /app/

CMD \
cd /app \
&& npm run dev
