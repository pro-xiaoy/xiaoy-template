#!/bin/sh

echo 'star'
# 打包
npm run build
# 移動至到打包後的dist目錄 
cd dist
git add -A
git commit -m '$1'
git push

echo 'end💗💗💗💗💗'
