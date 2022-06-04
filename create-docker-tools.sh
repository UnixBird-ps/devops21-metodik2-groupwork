#!/bin/bash

chmod 700 ./docker-tools-template/start.sh
chmod 700 ./docker-tools-template/stop.sh

## Copy docker-tools-template to docker-tools
## but keep old ssh-key sub folder...

[ -f docker-tools/copy-to-docker-container/ssh-key/id_ed25519.pub ] \
&& [ -f docker-tools/copy-to-docker-container/ssh-key/id_ed25519 ] \
&& cp --preserve=mode,timestamps -rf docker-tools/copy-to-docker-container/ssh-key ssh-key 2> /dev/null

rm -rf docker-tools 2> /dev/null

cp -r --preserve=mode,timestamps docker-tools-template docker-tools 2> /dev/null

echo "./docker-tools/start.sh" > start
echo "./docker-tools/stop.sh" > stop

chmod 700 start
chmod 700 stop

echo ""
echo "Docker tools created! :)"
echo ""
