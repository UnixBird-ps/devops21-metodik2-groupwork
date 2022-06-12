FROM bitnami/mysql:5.7.38

### Allow empty password 
### (= easier connection settings during development)
ENV ALLOW_EMPTY_PASSWORD=yes

### Set the port to start the MySQL server on
ENV MYSQL_PORT_NUMBER=$PORT