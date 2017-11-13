#!/bin/bash

dirname="./src/components"

ls $dirname | while read file; do
  sed -i "$dirname/$file" -e "s,'/','/tsn',g" "$dirname/$file"
  sed -i "$dirname/$file" -e "s,'/play','/tsn/play',g" "$dirname/$file"
  sed -i "$dirname/$file" -e "s,'/rules','/tsn/rules',g" "$dirname/$file"
  sed -i "$dirname/$file" -e "s,'/history','/tsn/history',g" "$dirname/$file"
  sed -i "$dirname/$file" -e "s,'/solutions','/tsn/solutions',g" "$dirname/$file"
  sed -i "$dirname/$file" -e "s,src='/images,src='/tsn/images,g" "$dirname/$file"
done
