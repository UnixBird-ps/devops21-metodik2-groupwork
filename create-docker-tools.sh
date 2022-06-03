#!/bin/sh

## Copy docker-tools-template to docker-tools
## but keep old ssh-key sub folder...

chmod 744 ./docker-tools-template/start.sh
chmod 744 ./docker-tools-template/stop.sh

[ -d docker-tools/copy-to-docker-container/ssh-key ] \
&& cp -rf docker-tools/copy-to-docker-container/ssh-key ssh-key

[ -d ssh-key ] && rm -r docker-tools

cp -r docker-tools-template docker-tools

[ -d ssh-key ] \
&& cp -r ssh-key docker-tools/copy-to-docker-container/

echo "./docker-tools/start.sh" > start
echo "./docker-tools/stop.sh" > stop

chmod 744 start
chmod 744 stop

echo ""
echo "Docker tools created! :)"
echo ""
