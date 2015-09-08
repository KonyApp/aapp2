#!/bin/bash
PATTERN=conflict
FILE=2.txt
git status >2.txt
if grep -q $PATTERN $FILE;
 then
     git mergetool -t kdiff3
 else
     echo "Success: The are no merge conflicts in the project"
     echo "Exiting..."
     exit 0
fi
rm -rf 2.txt
