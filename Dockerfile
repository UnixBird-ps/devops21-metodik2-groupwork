
FROM nginx:1.21.6

RUN rm /usr/share/nginx/html/*

COPY ./nginx-conf-source/*.conf /etc/nginx/conf.d/
