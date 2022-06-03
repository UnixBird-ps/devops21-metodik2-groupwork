#!/bin/sh

# Get the dir path of the dir where this script is located
DIRNAME=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

# Get the repo dir path
REPO_DIR="$(dirname "$DIRNAME")"

# Cd to the dir where this script is located
cd $DIRNAME

### get the name of the repository
REPO_NAME=$(basename -s .git `git config --get remote.origin.url`)

### remove containers with names starting with the REPO_NAME
echo ""
echo "Removing containers..."
docker ps --filter=name="$REPO_NAME*"
docker rm -f $(docker ps -a --filter=name="$REPO_NAME*" -q)

### remove images with references starting with th REPO__NAME
echo ""
echo "Removing images..."
docker images -a --filter=reference="$REPO_NAME*"
### (the xargs part removes duplicate id:s)
docker rmi -f $(docker images -a --filter=reference="$REPO_NAME*" -q | xargs -n1 | sort -u | xargs)

### remove volume
echo ""
echo "Removing volume..."
docker volume rm -f $REPO_NAME-storage

### clean up git-ignored things ofen installed
### (for now node_modules)
echo ""
echo "Removing node_modules folder (if it exists)"
rm -r $REPO_DIR/node_modules

echo ""
echo "Containers, images and volume removed!"
echo "(Kept the docker image to speed up next start...)"
echo ""


