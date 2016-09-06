#!/bin/bash
jakeFile="node_modules/.bin/jake"
[ ! -f "$jakeFile" ] && echo "Building npm modules .." && npm rebuild
./node_modules/.bin/jake -f build/scripts/build.jakefile.js $*