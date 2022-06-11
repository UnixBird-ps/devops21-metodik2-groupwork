
FROM node:16.15.0-alpine3.15

#COPY source/ /app/

#CMD cd /app && npm install && npm run dev

CMD npm install && npm run dev
