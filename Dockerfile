
FROM mongo:5.0.9-focal

CMD mongod --port $PORT --bind_ip_all
