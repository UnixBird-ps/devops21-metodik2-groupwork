
# Country info page.

# What image should we base our image on?
#
FROM php:8.1.6-apache-bullseye

RUN docker-php-ext-install mysqli

RUN mkdir /etc/apache2/secrets

# What to copy to the image from the host?
#
COPY ./country-info-backend-src/frontend/ /var/www/html/
COPY ./country-info-backend-src/my-apache2.conf /etc/apache2/apache2.conf
COPY ./country-info-backend-src/mysqli_secrets.conf /etc/apache2/secrets/

CMD echo "Listen $PORT" > /etc/apache2/ports.conf \
&& apache2-foreground
