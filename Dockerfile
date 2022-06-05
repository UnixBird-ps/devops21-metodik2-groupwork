
FROM nginx:1.21.6

RUN rm /usr/share/nginx/html/*

COPY ./nginx-conf-source/*.conf.template /etc/nginx/templates/

ENV NGINX_PORT=4000
ENV IFRAMER_PORT=4001
ENV WORLD_MAP_PORT=4002
ENV COUNTRY_INFO_PORT=4003
ENV CAPITALS_PORT=4004
