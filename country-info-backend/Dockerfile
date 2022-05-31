
# Country info page.

# What image should we base our image on?
#
FROM php:8.1.6-apache-bullseye


# What to copy to the image from the host?
#
COPY ./frontend/* /var/www/html/
COPY ./my-apache2.conf /etc/apache2/apache2.conf
COPY ./my-ports.conf /etc/apache2/ports.conf
