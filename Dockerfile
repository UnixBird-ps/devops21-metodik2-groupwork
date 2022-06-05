
# Main webpage. Static HTML with iframes.

FROM nginx:1.22.0-alpine

COPY ./frontend-source/ /usr/share/nginx/html/
COPY ./nginx-conf-source/*.conf /etc/nginx/conf.d/

CMD \
sed -i.bak "s/^[[:space:]]*listen 80 default_server/listen $PORT default_server/" /etc/nginx/conf.d/default.conf \
&& nginx -g "daemon off;"
