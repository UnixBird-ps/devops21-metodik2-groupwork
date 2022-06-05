
# If Debian
#FROM node:16.15-buster
FROM node:16.15.0-bullseye-slim

# Install git
RUN apt-get update
RUN apt-get -y install git

# Set a work dir (working directory)
WORKDIR /app

# Run the git-cloner.js file from git-cloner-docker-container
CMD node git-cloner.js