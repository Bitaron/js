"use strict";

module.exports = {
    significand : 2,
    exponent : 2,
    base : 10
}
/*
 #!/bin/bash
 jakeFile="node_modules/.bin/jake"
 [ ! -f "$jakeFile" ] && echo "Building npm modules .." && npm rebuild

 if [ '$1'=="ctr" ]; then
 echo "Running continuous test"
 watch -n1 ./node_modules/.bin/jake -f build/scripts/build.jakefile.js simpleTest --color
 else
 echo "Running jake"
 ./node_modules/.bin/jake -f build/scripts/build.jakefile.js $*
 fi
 */