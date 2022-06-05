
# If Debian
#FROM node:16.15-buster

# If Alpine
FROM node:16.15.0-alpine3.15

# Install git
# If Debian
#RUN apt update
#RUN apt install git

# If Alpine
RUN apk --no-cache add git

# Set a work dir (working directory)
WORKDIR /app

# Run the git-cloner.js file from git-cloner-docker-container
CMD node git-cloner.js