#!/bin/sh

dirname="./src/components"

ls $dirname | while read file; do
  sed -i "$dirname/$file" -e "s,'/','/real/tsn',g" "$dirname/$file"
  sed -i "$dirname/$file" -e "s,'/play','/real/tsn/play',g" "$dirname/$file"
  sed -i "$dirname/$file" -e "s,'/rules','/real/tsn/rules',g" "$dirname/$file"
  sed -i "$dirname/$file" -e "s,'/history','/real/tsn/history',g" "$dirname/$file"
  sed -i "$dirname/$file" -e "s,'/solutions','/real/tsn/solutions',g" "$dirname/$file"
  sed -i "$dirname/$file" -e "s,src='/images,src='/real/tsn/images,g" "$dirname/$file"
done
