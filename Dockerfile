FROM php:apache-bullseye

### Install PHP driver for MySQL
RUN docker-php-ext-install pdo pdo_mysql

### Start Apache 
#   1) delete the real Apache root folder /var/www/html
#   2) make a symbolic link /var/www/html pointing to our work dir
#   3) replace port 80 (the default apache port)
#      with our port in two Apache config files
#   4) start Apache
CMD rm -r /var/www/html \
  && ln -s $(pwd) /var/www/html \
  && sed -i "s/80/$PORT/" /etc/apache2/sites-enabled/000-default.conf \
  && sed -i "s/80/$PORT/" /etc/apache2/ports.conf \
  && apache2-foreground