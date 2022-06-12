
# MariaDB database for country-info-backend

# What image should we base our image on?
#
#FROM mariadb:10.8.3
FROM bitnami/mysql:5.7.38

#RUN mkdir /run/secrets

#COPY ./country-info-db-src/secrets/* /run/secrets/

#ENV MYSQL_ROOT_HOST=localhost
#ENV MYSQL_ROOT_HOST=%
ENV MYSQL_PORT_NUMBER=$PORT
ENV MYSQL_DATABASE=countries
ENV ALLOW_EMPTY_PASSWORD=yes
ENV ALLOW_EMPTY_ROOT_PASSWORD=yes
ENV MYSQL_USER=countries-user
ENV MYSQL_PASSWORD=mYc0o73cret
ENV MYSQL_ROOT_PASSWORD=mYevenc0o7erS3cret

EXPOSE $PORT
