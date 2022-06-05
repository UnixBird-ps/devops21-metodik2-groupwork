
# Main webpage. Static HTML with iframes.

FROM nginx:1.22.0-alpine

ENV NGINX_HOST=localhost
ENV NGINX_PORT=$PORT

COPY ./frontend-source/ /usr/share/nginx/html/
COPY ./nginx-conf-source/*.conf /etc/nginx/conf.d/

CMD \
echo ${PORT} \
&& sed -i.bak "/^[[:space:]]*#*listen 80 default_server/I,${s//listen $PORT default_server/;b};$q100" /etc/nginx/conf.d/default.conf \
&& nginx -g "daemon off"
