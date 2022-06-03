#!/bin/bash
#set -e # exit on failed commands

# Get the dir path of the dir where this script is located
DIRNAME=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

# Get the repo dir path
REPO_DIR="$(dirname "$DIRNAME")"

# Cd to the dir where this script is located
cd $DIRNAME

### get the name of the repository
REPO_NAME=$(basename -s .git `git config --get remote.origin.url`)

## get the name of the checked out branch
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

## dockerSettings.json file path
DOCKER_SETTINGS_FILE="$REPO_DIR/dockerSettings.json"

if [ ! -f "$DOCKER_SETTINGS_FILE" ]; then
  echo ""
  echo "Can not compose containers because there is no"
  echo "dockerSettings.json file found in this branch..."
  echo ""
  echo "Please create one. This is an example:"
  echo ""
  cat ./dockerSettingsExample.json
  echo ""
  echo ""
  exit 1
fi

## copy dockerSettings.json into the copy-to-docker-folder
rm copy-to-docker-container/dockerSettings.json
cp $DOCKER_SETTINGS_FILE copy-to-docker-container/dockerSettings.json

echo ""
echo "CREATING DOCKER VOLUME $REPO_NAME-storage"

### remove volume if it exists already
docker volume rm -f $REPO_NAME-storage

### create volume
docker volume create $REPO_NAME-storage

# build image from Dockerfile
docker build -f git-cloner.Dockerfile -t $REPO_NAME-git-cloner .

### run the git cloner image as container
docker run \
--name $REPO_NAME-git-cloner \
--mount type=bind,source="$DIRNAME/copy-to-docker-container",target=/app \
-v $REPO_NAME-storage:/storage \
-e GIT_REPO_URL=$(git remote get-url origin) \
-e GIT_USERNAME="$(git config --global user.name)" \
-e GIT_EMAIL="$(git config --global user.email)" \
-e GIT_REPO_NAME=$REPO_NAME \
-e GIT_BRANCH_NAME=$BRANCH_NAME \
$REPO_NAME-git-cloner

### start the syncer container
### build image from Dockerfile
docker build -f syncer.Dockerfile -t $REPO_NAME-syncer .

### run the syncer image as container
echo ""
echo "Starting syncer!"
docker run -d \
--name $REPO_NAME-syncer \
--mount type=bind,source="$DIRNAME/copy-to-docker-container",target=/app \
--mount type=bind,source="$REPO_DIR",target=/repo-bind-mount \
-v $REPO_NAME-storage:/storage \
$REPO_NAME-syncer

if [ $? -ne 0 ]; then
  # There was an error with git cloner
  # Probably no SSH key - the JS script will
  # instruct the user...
  # Now: Remove container silently and exit
  docker container rm -f $REPO_NAME-git-cloner > /dev/null
  docker image rm -f $REPO_NAME-git-cloner > /dev/null
  exit 1
fi

### remove container
echo "REMOVING THE CONTAINER $REPO_NAME-git-cloner";
docker container rm -f $REPO_NAME-git-cloner

### remove image
echo ""
echo "REMOVING THE IMAGE $REPO_NAME-git-cloner";
docker image rm -f $REPO_NAME-git-cloner
echo ""

### create a container based on the official docker image
### that runs docker (mounted as a socket)
### and docker and docker compose commands inside it
### Run docker compose on dynamically created yml file.

### Important: We mount a unix socket that makes the Docker CLI
### in the container use the Docker daemon on the host...
### unix sockets must be written with one start slash in MacOS/Linux
### and two start slashes in Windows:
SOCKET_PATH="/var/run/docker.sock"
if [[ "$OSTYPE" =~ ^msys ]]; then
  SOCKET_PATH="/$SOCKET_PATH"
fi

echo "CREATING THE CONTAINER $REPO_NAME-composer-runner"
echo "--> running docker-compose up -d"
docker run \
--name $REPO_NAME-composer-runner \
-v $REPO_NAME-storage:/storage \
--mount type=bind,source="$SOCKET_PATH",target="/var/run/docker.sock" \
docker \
sh -c "cd /storage/branches && export COMPOSE_PROJECT_NAME=$REPO_NAME && docker-compose up -d"

### remove the docker composer-runner container
echo ""
echo "REMOVING THE CONTAINER $REPO_NAME-composer-runner"
docker container rm -f $REPO_NAME-composer-runner

### we are done
echo ""
echo "Up and running! :)"
echo ""