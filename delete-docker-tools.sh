#!/bin/bash

# Remove docker-tools only if we already have the ssh-key
[ -d ssh-key ] && rm -r docker-tools

[ ! -d ssh-key ] \
&& [ -d docker-tools/copy-to-docker-container/ssh-key ] \
&& cp --preserve=mode,timestamps -rf docker-tools/copy-to-docker-container/ssh-key ssh-key \
&& rm -r docker-tools

rm start
rm stop

echo ""
echo "Docker tools removed! ;|"
echo ""
