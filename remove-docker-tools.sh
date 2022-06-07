#!/bin/bash

rm start 2> /dev/null
rm stop 2> /dev/null

[[ ! -f ssh-key/id_ed25519.pub || ! -f ssh-key/id_ed25519 ]] \
&& cp -r docker-tools/copy-to-docker-container/ssh-key ssh-key 2> /dev/null

rm -r docker-tools 2> /dev/null

echo ""
echo "Docker tools removed! ;|"
echo ""
