# start with a debian node container
#FROM node:16.15-buster
FROM node:16.15.0-bullseye-slim

# Set a work dir (working directory)
WORKDIR /app

# Run the syncer.js file from syncer-docker-container
CMD npm install chokidar@3.5.3 && node syncer.js