#!/bin/sh

## Copy docker-tools-template to docker-tools
## but keep old ssh-key sub folder...

chmod 700 ./docker-tools-template/start.sh
chmod 700 ./docker-tools-template/stop.sh

[ -d docker-tools/copy-to-docker-container/ssh-key ] \
&& cp --preserve=mode,timestamps -rf docker-tools/copy-to-docker-container/ssh-key ssh-key

[ -d ssh-key ] && rm -r docker-tools

cp -r --preserve=mode,timestamps docker-tools-template docker-tools

[ -d ssh-key ] \
&& cp -r --preserve=mode,timestamps ssh-key docker-tools/copy-to-docker-container/

echo "./docker-tools/start.sh" > start
echo "./docker-tools/stop.sh" > stop

chmod 700 start
chmod 700 stop

echo ""
echo "Docker tools created! :)"
echo ""
