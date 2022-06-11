
FROM node:16.15.0-alpine3.15

COPY ./source/package.json /app/

RUN cd /app && npm install

COPY ./source/ /app/

CMD cd /app && npm run dev

#CMD npm install && npm run dev
