
FROM nginx:1.21.6

RUN rm /usr/share/nginx/html/*

COPY ./nginx-conf-source/*.conf /etc/nginx/conf.d/

ENV NGINX_PORT=4000
ENV IFRAMER_PORT=4001
ENV WORLD_MAP_PORT=4002
ENV COUNTRY_INFO_PORT=4003
# 4004 is reserved
ENV CAPITALS_PORT=4015
# 4006 is reserved

CMD \
sed -i.bak "s/__NGINX_PORT__/$NGINX_PORT/" /etc/nginx/conf.d/default.conf \
&& sed -i.bak "s/__IFRAMER_PORT__/$IFRAMER_PORT/" /etc/nginx/conf.d/default.conf \
&& sed -i.bak "s/__WORLD_MAP_PORT__/$WORLD_MAP_PORT/" /etc/nginx/conf.d/default.conf \
&& sed -i.bak "s/__COUNTRY_INFO_PORT__/$COUNTRY_INFO_PORT/" /etc/nginx/conf.d/default.conf \
&& sed -i.bak "s/__CAPITALS_PORT__/$CAPITALS_PORT/" /etc/nginx/conf.d/default.conf \
&& nginx -g "daemon off;"
