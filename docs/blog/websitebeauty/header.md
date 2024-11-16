---
title: 新增頂部公告欄
# 隱藏的模組
hide:
  #  - navigation # 隱藏左邊導航
  #  - toc #隱藏右邊導航
  #  - footer #隱藏翻頁
  #  - feedback  #隱藏反饋
tags:
  - Mkdocs
comments: false  #評論，預設不開啟
---
![image.png](https://s2.loli.net/2024/02/02/mvCEgeP4lANuXI8.png)

docs/overrides下新建main.html ，針對main.html檔案    
樹狀結構如下:  
```
$ tree -a
.
├── .github
│   ├── .DS_Store
│   └── workflows
│       └── PublishMySite.yml
├── docs
│   └── index.md
│   └──overrides
│       └──assets
│       └──main.html
│       └──partials
│          └──comments.html
│
└── mkdocs.yml
``` 

```html
{#-
    This file was automatically generated - do not edit
  -#}
  {% extends "base.html" %}
  {% block extrahead %}
    <link rel="stylesheet" href="{{ 'assets/stylesheets/custom.00c04c01.min.css' | url }}">
  {% endblock %}
  {% block announce %}
     Follow <strong>@Wcowin</strong> on
    <a rel="me" href="https://space.bilibili.com/1407028951?spm_id_from=333.1007.0.0">
      <span class="twemoji bilibili">
        {% include ".icons/fontawesome/brands/bilibili.svg" %}
      </span>
      <strong>Bilibili</strong>
    </a>
    and
    <a href="https://twitter.com/Wcowin_">
      <span class="twemoji twitter">
        {% include ".icons/fontawesome/brands/twitter.svg" %}
      </span>
      <strong>Twitter</strong>
    </a>
  {% endblock %}
  {% block scripts %}
    {{ super() }}
    <script src="{{ 'assets/javascripts/custom.9458f965.min.js' | url }}"></script>
  {% endblock %}
```


自行修改即可
