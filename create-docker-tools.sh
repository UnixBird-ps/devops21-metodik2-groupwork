#!/bin/sh

## Copy docker-tools-template to docker-tools
## but keep old ssh-key sub folder...
cp -r docker-tools/copy-to-docker-container/ssh-key ssh-key
rm -r docker-tools
cp -r docker-tools-template docker-tools
cp -r ssh-key docker-tools/copy-to-docker-container/
rm -r ssh-key
echo "./docker-tools/start.sh" > start
echo "./docker-tools/stop.sh" > stop
chmod 770 start
chmod 770 stop

echo ""
echo "Docker tools created! :)"
echo ""
