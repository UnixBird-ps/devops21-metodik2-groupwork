
# Main page. Static HTML-file with iframes.


# What image should we base our image on?
#
FROM nginx:1.22.0-alpine


# What to copy to the image from the host?
#
COPY ./static-html/* /usr/share/nginx/html/
