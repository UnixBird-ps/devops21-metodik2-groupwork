
# Main webpage. Static HTML with iframes.

# What image should we base our image on?
#
FROM nginx:1.22.0-alpine

# What to copy to the image from the host?
#
COPY ./iframer-frontend/ /usr/share/nginx/html/
