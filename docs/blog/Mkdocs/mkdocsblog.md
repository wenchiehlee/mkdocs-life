---
title: 網站新增Mkdocs部落格
tags:
  - Mkdocs
---

官方文件：[Built-in blog plugin](https://squidfunk.github.io/mkdocs-material/plugins/blog/)

與所有內建外掛一樣，部落格外掛的入門非常簡單。只需將以下行新增到mkdocs.yml

```
plugins:
  - blog
```

**然後在/docs/blog/posts下寫md檔案即可**（無需再mkdocs.yml配置，如沒有post檔案，新建一個即可）
但是bolg資料夾下要有index.md檔案(沒有這個檔案新建即可)！

在mkdocs.yml中這樣寫
```
  - Blogger:
    - index: blog/index.md
```

元標籤參考：
```
---
title: 
authors: [Wcowin]  #作者
date: 2023-10-04   #時間
draft: true   # 是否為草稿
categories:  #分類
  - Hello
---
```
作者資訊在docs/blog/.authors.yml裡配置（沒有.authors.yml新建即可）  


```yml
authors:
  Wcowin:
    name: Wang Kewen    # Author name
    description: Free and casual # Author description
    avatar: https://s1.imagehub.cc/images/2024/02/02/91a767e93d1a344e44c69936464c583e.png          # Author avatar

```

```
結束
