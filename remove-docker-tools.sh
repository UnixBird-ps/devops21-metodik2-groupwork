#!/bin/bash

rm start
rm stop

[ ! -f ssh-key/id_ed25519.pub ] \
&& [ ! -f ssh-key/id_ed25519 ] \
&& [ -f docker-tools/copy-to-docker-container/ssh-key/id_ed25519.pub ] \
&& [ -f docker-tools/copy-to-docker-container/ssh-key/id_ed25519 ] \
&& cp --preserve=mode,timestamps -rf docker-tools/copy-to-docker-container/ssh-key ssh-key 2> /dev/null

rm -rf docker-tools 2> /dev/null

echo ""
echo "Docker tools removed! ;|"
echo ""
