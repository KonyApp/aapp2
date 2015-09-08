#!/bin/bash
PATTERN=conflict
FILE=2.txt
git status >2.txt
if grep -q $PATTERN $FILE;
 then
     git mergetool -t kdiff3
 else
     echo "Error: The Pattern '$PATTERN' was NOT Found in '$FILE'"
     echo "Exiting..."
     exit 0
fi
rm -rf 2.txt
