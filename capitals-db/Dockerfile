FROM mongo:Latest

### With mongod (the mongo daemon used to start mongoDB
### you can specify port, but must also specify a bind_ip
### (the external ip of the server) OR bind all ip numbers.
### Since we don't know what ip number Docker assigns the
### container in Docker's internal network we use -bind_ip_all

ENV MONGO_INITDB_ROOT_USERNAME=user
ENV MONGO_INITDB_ROOT_PASSWORD=password 

CMD mongod --port=$PORT --bind_ip_all
