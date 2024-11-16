---
title: Mkdocs部署靜態網頁至GitHub pages配置說明(mkdocs.yml)
comments: false
tags:
  - Mkdocs
---

官方檔案：[Changing the colors - Material for MkDocs](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/)

**建議詳細學習一下上面的官方網站↑↑↑**

我把我目前的配置檔案mkdocs.yml程式碼寫在下面👇🏻

??? note "點選展開"
    ```yaml
    #[Info]
    site_name: Mkdocs-Wcowin中文主題 #your site name 顯示在左上角
    site_url: http://wcowin.work/Mkdocs-Wcowin
    site_author: Wcowin # your name
    #[UI]
    theme:
      name: material
      custom_dir: docs/overrides #覆寫路徑
      # font: #谷歌字型，自行搜尋
      #   text: Bitter  #文字字型
      #   code: Roboto Mono  #程式碼字型
      # logo: assets/favicon.png #左上角logo，可插入圖片連結

      favicon: https://s2.loli.net/2024/04/26/PmRdM9iGnvOJHgu.png # 網頁icon

      palette:
        - media: "(prefers-color-scheme)"
          toggle:
            icon: material/link
            name: 關閉自動模式
        #primary: blue grey
        - media: "(prefers-color-scheme: light)"
          scheme: default # 日間模式
          primary: blue grey # 上方的
          accent: blue # 連結等可互動元件的高亮色
          # teal
          toggle:
            icon: material/toggle-switch # 圖示
            name: 切換至夜間模式 # 滑鼠懸浮提示
        - media: "(prefers-color-scheme: dark)"
          scheme: slate # 夜間模式
          primary: black
          accent: indigo
          # teal
          toggle:
            icon: material/toggle-switch-off-outline
            name: 切換至日間模式

      features:
        - announce.dismiss #呈現可標記為由使用者讀取的臨時公告，可以包含一個用於取消當前公告的按鈕
        # - navigation.instant
        #- header.autohide  #自動隱藏
        - navigation.tracking #位址列中的 URL 將自動更新為在目錄中突出顯示的活動錨點
        - navigation.tabs #頂級部分將呈現在上面視口標題下方的選單層中，但在移動裝置上保持原樣
        # - navigation.tabs.sticky  #啟用粘性選項卡後，導航選項卡將鎖定在標題下方，並在向下滾動時始終保持可見
        - navigation.sections #啟用部分後，頂級部分在邊欄中呈現為1220px以上視口的組，但在移動裝置上保持原樣
        - navigation.top # 返回頂部的按鈕 在上滑時出現
        - navigation.footer #頁尾將呈現在邊欄中，但在移動裝置上保持原樣
        - search.suggest # 搜尋輸入一些字母時推薦補全整個單詞
        - search.highlight # 搜尋出的文章關鍵詞加入高亮
        - search.share #搜尋分享按鈕
        - navigation.expand # 開啟Tab時左側目錄全部展開
        - navigation.indexes #啟用節索引頁後，可以將文件直接附加到節
        - content.tabs.link
        - content.tooltips
        - content.code.copy #程式碼複製
        - content.action.edit
        - content.action.view
        - content.code.annotate
      language: zh # 一些提示性的文字會變成中文

      icon:
        repo: fontawesome/brands/github #右上角圖示
        logo: logo
    edit_uri: edit/main/docs # 編輯按鈕跳轉的連結
    repo_url: https://github.com/Wcowin/Mkdocs-Wcowin # 右上角點選跳轉的連結
    repo_name: Mkdocs-Wcowin # 右上角的名字

    # [Navigtion]
    nav:   #目錄

      - 標籤: tag.md
      - 留言板: liuyanban.md
      - Blogger:
          - index: blog/index.md
      - 友鏈:
          - 友鏈: about/link.md
      - 關於:
          - 作者個人簡介: about/geren.md
          - 功能測試: about/test.md

    copyright: Copyright &copy; 2022~2024 Wcowin/All Rights Reserved. # 左下角的版權宣告

    extra:
      generator: true #是否刪除頁尾顯示“使用 MkDocs 材料製造”
      social:
        - icon: fontawesome/brands/x-twitter #聯絡方式圖示 : https://fontawesome.com/ 去這裡找圖示
          link: https://twitter.com/wcowin_
        - icon: fontawesome/brands/github
          link: https://github.com/Wcowin

        - icon: fontawesome/regular/envelope #聯絡方式圖示
          link: mailto:<wangkewen821@gmail.com> #郵件聯絡方式
        - icon: fontawesome/brands/bilibili
          link: https://space.bilibili.com/1407028951?spm_id_from=333.1007.0.0
      analytics:
        provider: google #谷歌分析
        property:

        # 網頁底部反饋
        feedback:
          title: 此頁面有幫助嗎？
          ratings:
            - icon: material/thumb-up-outline #圖示可自定義
              name: This page was helpful
              data: 1
              note: >-
                謝謝你的反饋！
            - icon: material/thumb-down-outline
              name: This page could be improved
              data: 0
              note: >-
                Thanks for your feedback! Help us improve this page by
                using our <a href="https://marketingplatform.google.com/about/analytics/" target="_blank" rel="noopener">feedback form</a>.
      # cookies設定（可選）
      # consent:
      #   title: Cookie consent
      #   description: >-
      #     我們也使用cookies來識別您的重複訪問和偏好來衡量我們文件的有效性以及使用者是否找到他們要找的東西。
      #     如果你同意,你可以幫助我們讓我們的網站更好

    plugins:
      - search #搜尋配置
      - git-committers:
          enabled: !ENV [CI, false]
          repository: Wcowin/Mkdocs-Wcowin
          branch: main
          exclude:
            - index.md
            - tag.md
            - waline.md
            - blog/posts/update.md
            - blog/posts/wkw.md
            - about/link.md
      - git-revision-date-localized:
          enabled: !ENV [CI, false]
          type: iso_date
          enable_creation_date: false
          exclude:
            - index.md
            - tag.md
            - liuyanban.md
            - blog/posts/update.md
            - blog/posts/wkw.md
            - about/link.md
            - websitebeauty/linktech.md
      - blog: #部落格配置
          post_date_format: full #時間
          draft: true
          draft_if_future_date: true #自動將具有未來日期的帖子標記為草稿
          post_readtime: true
          post_readtime_words_per_minute: 265 #計算帖子的閱讀時間時讀者每分鐘預計閱讀的字數
          post_url_format: "{date}/{slug}"
          # categories_slugify: !!python/object/apply:pymdownx.slugs.slugify
          #   kwds:
          #     case: lower
          pagination_url_format: "page/{page}"
          authors_file: "{blog}/.authors.yml" #作者資訊
      - tags:
          tags_file: tag.md #分類標籤

    markdown_extensions: #詳見https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown-extensions/ 和 https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown/
      - abbr
      - attr_list
      - admonition
      - def_list
      - footnotes
      - md_in_html
      # - meta # 支援Markdown檔案上方自定義標題標籤等
      - pymdownx.caret
      - pymdownx.betterem
      - pymdownx.critic
      - pymdownx.details
      - pymdownx.inlinehilite
      - pymdownx.keys
      - pymdownx.mark
      - pymdownx.snippets
      - pymdownx.smartsymbols
      - pymdownx.tilde

      - pymdownx.superfences:
          custom_fences:
            - name: mermaid
              class: mermaid
              format:
                !!python/name:pymdownx.superfences.fence_code_format # 程式碼塊高亮外掛

      - pymdownx.arithmatex: # latex支援
          generic: true
      - toc:
          permalink: true # 固定標題位置為當前位置
      - pymdownx.highlight: # 程式碼塊高亮
          anchor_linenums: true
          linenums: true # 顯示行號
          # auto_title: true # 顯示程式語言名稱
      - pymdownx.emoji:
          emoji_index: !!python/name:material.extensions.emoji.twemoji
          emoji_generator: !!python/name:material.extensions.emoji.to_svg
      - pymdownx.tabbed:
          alternate_style: true
      - pymdownx.tasklist:
          custom_checkbox: true
      # - markdown.extensions.toc:
      #     slugify: !!python/object/apply:pymdownx.slugs.slugify {kwds: {case: lower}}
      #     permalink: "\ue157"

    extra_javascript:
      - javascripts/extra.js #自定義javascript
      - javascripts/mathjax.js #Latex支援
      - https://polyfill.io/v3/polyfill.min.js?features=es6 #Latex支援
      - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js #Latex支援
      # - ckplayer/js/ckplayer.js #播放器配置
      # - https://cdn.jsdelivr.net/npm/gitalk@latest/dist/gitalk.min.js  #gitalk支援
      - https://cdn.jsdelivr.net/npm/mermaid@10.0.2/dist/add-html-label-6e56ed67.min.js #忘了

    extra_css:
      - stylesheets/extra.css # 自定義CSS
      - stylesheets/link.css #友鏈配置
      - stylesheets/customize.css # 搜尋圓角最佳化

      # - stylesheets/video.css #播放器可選配置
      # - https://cdn.jsdelivr.net/npm/gitalk@latest/dist/gitalk.css #gitalk支援
      # - ckplayer/css/ckplayer.css   #播放器配置
      - https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css # font-awesome表情支援
      # - https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css  #分享支援

      - https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css #字型
      # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-lite-webfont@1.1.0/style.css #字型
      # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-tc-webfont@1.0.0/style.css  #字型
      # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-webfont@1.1.0/style.css  #字型

    ```
***
從頭開始分析 

## 開頭
```yaml
site_name: 網站名字
site_url: 網站網址
site_author: 作者名字
```
**無須多言**

## theme部分  

### 頂部顏色
```yaml
theme:
  palette:
    primary: yellow #頂部顏色
```
primary後面是網站頂部欄目的顏色（也用於標題、邊欄、文字連結和其他幾個元件）  
目前支援下面幾個顏色：
![img](https://s1.imagehub.cc/images/2024/02/02/c7eb8b52d0b17c8e5321cbd21d9710a0.png)

### 明暗主題按鈕
![img](https://s1.imagehub.cc/images/2024/02/02/9efed1213b8512fad00679bcab80f3e2.png)

```yaml
theme:
  palette: 
 
    # Palette toggle for light mode
    - scheme: default
      toggle:
        icon: material/brightness-7 
        name: Switch to dark mode
 
    # Palette toggle for dark mode
    - scheme: slate
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
```
此配置將在搜尋欄旁邊呈現調色盤切換。請注意，您還可以為每個調色盤的primary和accent定義單獨的設定。

按鈕圖示可以改變（修改icon後面的程式碼）：
![img](https://s1.imagehub.cc/images/2024/02/02/3fbb40519a69d5c5600c49ee83987802.png)

***
### features
```yaml
features:
    - navigation.instant   #- header.autohide  #自動隱藏
    #- announce.dismiss   #呈現可標記為由使用者讀取的臨時公告，可以包含一個用於取消當前公告的按鈕
    - navigation.tracking   #位址列中的 URL 將自動更新為在目錄中突出顯示的活動錨點
    - navigation.tabs   #頂級部分將呈現在上面視口標題下方的選單層中，但在移動裝置上保持原樣
    #- navigation.tabs.sticky    #啟用粘性選項卡後，導航選項卡將鎖定在標題下方，並在向下滾動時始終保持可見
    #- navigation.sections   #啟用部分後，頂級部分在邊欄中呈現為1220px以上視口的組，但在移動裝置上保持原樣
    - navigation.top   # 返回頂部的按鈕 在上滑時出現
    - search.suggest   # 搜尋輸入一些字母時推薦補全整個單詞
    - search.highlight   # 搜尋出的文章關鍵詞加入高亮
    - navigation.expand   # 開啟Tab時左側目錄全部展開
    #- navigation.indexes   #啟用節索引頁後，可以將文件直接附加到節
    - search.share   #搜尋分享按鈕
```
看我所做的註釋就很好理解，feature部分讓網站擁有了目錄，增加了搜尋專案的功能，返回頂部等功能，註釋裡很簡明介紹了
![png](https://s1.imagehub.cc/images/2024/02/02/2f7149a07d26e17934e626b7915cc74a.png)
![png](https://s1.imagehub.cc/images/2024/02/02/0e5f75464543f1c9785f54a1b7271e47.png)
![img](https://s1.imagehub.cc/images/2024/02/02/95d1df12503d37cb74c967a6cb9a2f96.png)
![img](https://s1.imagehub.cc/images/2024/02/02/0d19f89ece3fca54db038ff7d9644d61.png)
## nav部分 
這一部分就是目錄
![img](https://s1.imagehub.cc/images/2024/02/02/02da4022bd8af67b670e4da0dffbe95f.png)

```yaml
nav: 
  - 部落格:
    - 好用/好玩網站分享: blog/Webplay.md  #.md檔案的相對路徑
  - 開發: 
    - Markdown: develop/markdown.md
```
依照上面的模版為例，你可以在頂部欄目建立部落格和開發兩個大標籤
```
- 內容標題: 檔案路徑
```
內容標題效果：
![img](https://s1.imagehub.cc/images/2024/02/02/ab0212029567b7a6cd3fb4089de888cf.png)

.md檔案路徑(相對路徑)：
![img](https://s1.imagehub.cc/images/2024/02/02/0361e9d863ccb15e83006feac1b12c0a.png)  

可能看起比較複雜，總結一下就是：我想寫一篇文章在docs/blog下寫一篇名為`Wcowin最帥`的文章，首先在docs/blog下新建一個`xxx.md`檔案，裡面寫寫東西，再去mkdocs.yml裡找到nav，這樣寫：
```yaml
nav: 
  - 部落格:
    - Wcowin最帥: blog/xxx.md  #.md檔案的相對路徑
```  
nav才是最終決定這篇文章位置的配置，docs下的md檔案只是存放功能  

***
這裡也注意：**所有檔案都在docs檔案下，檔案型別除CSS，Javascript,yml等都是.md結尾的檔案**

所以強烈推薦您去學習Markdown、Html5、CSS3、Javascript等知識，這樣您就可以自定義您的網站了。

到這裡先檢查一下檔案樹狀圖(xx.md代表你的md檔案)：

```
$ tree -a
.
├── .github
│   ├── .DS_Store
│   └── workflows
│       └── PublishMySite.yml
├── docs
│   └── index.md
│   └──blog
│       └──xxx.md
│
└── mkdocs.yml
```
***
## extra部分
```yaml
extra:
  # tags:
  #   HTML5: html
  #   JavaScript: js
  #   CSS: css
  alternate:
    - name: English
      link: https://wcowin-work.translate.goog/?_x_tr_sl=zh-CN&_x_tr_tl=en&_x_tr_hl=zh-CN&_x_tr_pto=wapp 
      lang: en
    - name: 中國(臺灣)
      link: https://wcowin-work.translate.goog/?_x_tr_sl=zh-CN&_x_tr_tl=zh-TW&_x_tr_hl=zh-CN&_x_tr_pto=wapp
      lang: zh-TW
  generator: false  #刪除頁尾顯示“使用 MkDocs 材料製造”
  social:
    - icon: fontawesome/brands/twitter 
      link: https://twitter.com/wcowin_
    - icon: fontawesome/brands/github
      link: https://github.com/Wcowin
    - icon: fontawesome/brands/bilibili
      link: https://space.bilibili.com/1407028951?spm_id_from=333.1007.0.0
    - icon: fontawesome/solid/paper-plane
      link: mailto:<1135801806@qq.com> #聯絡方式
```
### alternate
可以設定網頁翻譯 
```yaml
  alternate:
    - name: English
      link: https://wcowin-work.translate.goog/?_x_tr_sl=zh-CN&_x_tr_tl=en&_x_tr_hl=zh-CN&_x_tr_pto=wapp 
      lang: en
    - name: 中國(臺灣)
      link: https://wcowin-work.translate.goog/?_x_tr_sl=zh-CN&_x_tr_tl=zh-TW&_x_tr_hl=zh-CN&_x_tr_pto=wapp
      lang: zh-TW
```
### generator 
設定為`generator: false`可以刪除頁尾顯示“使用 MkDocs 材料製造”     
### social  
可設定網站右下角的社交連結（icon是小圖示，link後填自己連結即可）： 
![img](https://s1.imagehub.cc/images/2024/02/02/73179baf6402e27c92afc51eb59645a6.png)


### cookie consent
```yaml
analytics: 
    provider: google
    property: G-XXXXXXXXXX  #你的Google Analytics ID
    feedback:
      title: 此頁面有幫助嗎？
      ratings:
        - icon: material/thumb-up-outline
          name: This page was helpful
          data: 1
          note: >-
            謝謝你的反饋！
        - icon: material/thumb-down-outline
          name: This page could be improved
          data: 0
          note: >- 
            Thanks for your feedback! Help us improve this page by
            using our <a href="https://marketingplatform.google.com/about/analytics/" target="_blank" rel="noopener">feedback form</a>.
  
  consent:
    title: Cookie consent
    description: >- 
      我們也使用cookies來識別您的重複訪問和偏好來衡量我們文件的有效性以及使用者是否找到他們要找的東西。
      如果你同意,你可以幫助我們讓我們的網站更好

```
![img](https://s1.imagehub.cc/images/2024/02/02/a303166e7a67a2bc7bddde77c3d1277a.png)  

![img](https://s1.imagehub.cc/images/2024/02/02/79d1f726b8105e0657cea3e2cef628ce.png)
注意property: G-XXXXXXXXXX  #你的Google Analytics ID，這裡的G-XXXXXXXXXX是你的Google Analytics ID，你可以在Google Analytics中找到，如果你不想使用Google Analytics，可以刪除這一部分。

## Plugins部分
```yaml
plugins:
  # - glightbox
  - search
  - offline
  - git-revision-date-localized:
      type: iso_date
      enable_creation_date: false
      exclude:
        - index.md 
        - tag.md
        - waline.md
        - blog/posts/update.md
        - blog/posts/wkw.md
        - about/link.md
  # - git-authors:
  #     exclude:
  #       - index.md
  - blog:
      post_date_format: full #時間
      draft: true
      draft_if_future_date: true #自動將具有未來日期的帖子標記為草稿
      post_readtime: true
      post_readtime_words_per_minute: 265  #計算帖子的閱讀時間時讀者每分鐘預計閱讀的字數
      post_url_format: "{date}/{slug}"
      # categories_slugify: !!python/object/apply:pymdownx.slugs.slugify
      #   kwds:
      #     case: lower
      # categories_toc: true
      # pagination_per_page: 5
      pagination_url_format: "page/{page}"
      authors_file: "{blog}/.authors.yml"  #作者資訊
  - tags:
      tags_file: tag.md  #分類標籤
```

`- search`開啟搜尋功能
![img](https://s1.imagehub.cc/images/2024/02/02/0e5f75464543f1c9785f54a1b7271e47.png)  

`-blog` 即部落格，可以在docs/blog/posts裡直接寫md檔案（不需要在nav裡寫路徑）,然後在上述nav裡寫
```
nav:
  - Blog:
    - blog/index.md
```   
部落格效果：   
![](https://s1.imagehub.cc/images/2024/02/02/cee8d935a920668b738593850c7eb7f8.png)  
詳細配置可以去看[新增Mkdocs部落格](mkdocsblog.md)

`- tags`就是標籤
```yaml
plugins:
  - tags:
      tags_file: tag.md  #分類標籤
```
![img](https://s1.imagehub.cc/images/2024/02/02/d20f0562838a8396724f18bfd09e19e8.png)

docs資料夾下新建tags.md檔案，會自動在tags.md檔案中生成標籤列表  
![](https://s1.imagehub.cc/images/2024/02/02/d9fa43225a6dd3932c36038c605954a4.png)

但是每個.md檔案(你寫的markdown檔案)最開始的地方(稱為meta)都需要新增標籤，否則不會顯示在tags.md檔案中
![img](https://s1.imagehub.cc/images/2024/02/02/2732b6ccefefb44d93b34f5108b3d050.png)

meta格式：

```yaml
---
title: #文章標題
tags:
  - 你的標籤名字
hide:
  #- navigation # 顯示右側導航
  #- toc #顯示左側導航
comments: false  #評論，預設不開啟
---

```

***
## markdown_extensions部分
```yaml
markdown_extensions:
  - abbr
  - attr_list
  - admonition
  - def_list
  - footnotes
  - md_in_html
  - meta # 支援Markdown檔案上方自定義標題標籤等
  - pymdownx.caret
  - pymdownx.betterem
  - pymdownx.critic
  - pymdownx.details
  - pymdownx.inlinehilite
  - pymdownx.keys
  - pymdownx.mark
  - pymdownx.snippets
  - pymdownx.smartsymbols
  - pymdownx.tilde
  - pymdownx.superfences:
      custom_fences:
        - name: mermaid
          class: mermaid
          format: !!python/name:pymdownx.superfences.fence_code_format # 程式碼塊高亮外掛
  - pymdownx.arithmatex:  # latex支援
      generic: true
  - toc:
      permalink: true # 固定標題位置為當前位置
  - pymdownx.highlight: # 程式碼塊高亮
      anchor_linenums: true
      linenums: true # 顯示行號
      # auto_title: true # 顯示程式語言名稱
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.tasklist:
      custom_checkbox: true
  - markdown.extensions.toc:
      slugify: !!python/object/apply:pymdownx.slugs.slugify {kwds: {case: lower}}
      permalink: "\ue157"
```
這部分是對markdown語法的擴充套件，註釋裡也有簡述 ，**建議直接複製貼上**

***
## extra_javascript 和extra_css
```yaml
extra_javascript:
  - javascripts/extra.js  #自定義javascript
  - javascripts/mathjax.js  #Latex支援
  - https://polyfill.io/v3/polyfill.min.js?features=es6   #Latex支援
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js   #Latex支援
  - ckplayer/js/ckplayer.js #播放器配置
  - https://cdn.jsdelivr.net/npm/gitalk@latest/dist/gitalk.min.js  #gitalk支援
  - https://cdn.jsdelivr.net/npm/mermaid@10.0.2/dist/add-html-label-6e56ed67.min.js #忘了

extra_css:
  - stylesheets/extra.css # 自定義CSS
  - stylesheets/link.css  #友鏈配置
  # - stylesheets/video.css #播放器可選配置
  - https://cdn.jsdelivr.net/npm/gitalk@latest/dist/gitalk.css #gitalk支援
  - ckplayer/css/ckplayer.css   #播放器配置
  - https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css  # font-awesome表情支援
  # - https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css  #分享支援

  - https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css  #字型
  # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-lite-webfont@1.1.0/style.css #字型
  # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-tc-webfont@1.0.0/style.css  #字型
  # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-webfont@1.1.0/style.css  #字型
```
javascripts/mathjax.js裡有對數學公式的擴充套件，extra_css裡是CSS的知識了，及自定義網站格式顏色等  

如果你想自定義網站的樣式，可以看這幾篇文章：  

[JS實現滑鼠樣式](../websitebeauty/shubiao.md)   

[背景特效](../websitebeauty/backgroud.md)  

[自定義網站字型](../websitebeauty/mkdocsfont.md)  

[新增友鏈](../websitebeauty/linktech.md)

[新增評論系統](../websitebeauty/mkcomments.md)  

[為MKdocs新增文章修訂時間戳](../websitebeauty/time.md)
