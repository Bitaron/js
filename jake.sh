 #!/bin/bash
 jakeFile="node_modules/.bin/jake"
 [ ! -f "$jakeFile" ] && echo "Building npm modules .." && npm rebuild

 if [ "$1" = "ctr" ]; then
 echo "Running continuous test"
 watch -c -d  -n1  ./node_modules/.bin/jake -f build/scripts/build.jakefile.js simpleTest --color  --differences
 else
 echo "Running jake"
 ./node_modules/.bin/jake -f build/scripts/build.jakefile.js $*
 fi
