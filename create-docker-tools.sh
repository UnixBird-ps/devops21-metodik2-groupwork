#!/bin/sh

## Copy docker-tools-template to docker-tools
## but keep old ssh-key sub folder...

chmod 777 ./docker-tools-template/start.sh
chmod 777 ./docker-tools-template/stop.sh

ln -s ./docker-tools-template/start.sh start
ln -s ./docker-tools-template/stop.sh stop

rm -r docker-tools
cp -r docker-tools-template docker-tools
cp -r ssh-key docker-tools/copy-to-docker-container/

#echo "./docker-tools/start.sh" > start
#echo "./docker-tools/stop.sh" > stop

#chmod 777 start
#chmod 777 stop

echo ""
echo "Docker tools created! :)"
echo ""
