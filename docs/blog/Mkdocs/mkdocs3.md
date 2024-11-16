---
title: 解決 mkdocs部署 Github Pages 自定義域名失效的問題
tags:
  - Mkdocs
---

在/docs目錄下建立一個 CNAME 的 無字尾 檔案，然後在裡面填入你的域名  
![](https://s1.imagehub.cc/images/2024/02/02/d23082e5d3ebb839dba8b589a1cb5b7c.png)

因為每次在 Custom domain 新增後都會給我們生成一個 CNAME 的檔案，但是因為專案我們沒有 pull 到本地，所以造成了，每次 push 之後 CNAME 資訊被 clear 了


