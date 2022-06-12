
# MariaDB database for country-info-backend

# What image should we base our image on?
#
FROM mariadb:10.8.3

RUN mkdir /run/secrets

COPY ./country-info-db-src/secrets/* /run/secrets/

#ENV MYSQL_ROOT_HOST=localhost
#ENV MYSQL_USER=countries-user
#ENV MYSQL_DATABASE=countries
#ENV MYSQL_PASSWORD_FILE=/run/secrets/countries-user
#ENV MYSQL_ROOT_PASSWORD_FILE=/run/secrets/mysql-root
ENV MYSQL_PORT_NUMBER=$PORT
ENV ALLOW_EMPTY_PASSWORD=yes

#EXPOSE $PORT
