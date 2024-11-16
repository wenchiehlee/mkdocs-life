---
title: 為網站新增評論系統
comments: true
tags:
  - Mkdocs
---
官方文件：[Adding a comment system](https://squidfunk.github.io/mkdocs-material/setup/adding-a-comment-system/)  

這裡我同樣推薦[giscus](https://giscus.app/zh-CN)


利用 GitHub Discussions 實現的評論系統，讓訪客藉助 GitHub 在你的網站上留下評論和反應吧！本專案深受 utterances 的啟發。

* 開源。🌏
* 無跟蹤，無廣告，永久免費。📡 🚫
* 無需資料庫。所有資料均儲存在 GitHub Discussions 中。:octocat:
* 支援自定義主題！🌗
* 支援多種語言。🌐
* 高可配置性。🔧
* 自動從 GitHub 拉取新評論與編輯。🔃
* 可自建服務！🤳

言歸正傳

## 第一步
mkdocs.yml中新增
```
theme:
  name: material
  custom_dir: docs/overrides  #主要是這一行
```
參考下圖新建overrides檔案，在此檔案下參考下圖新建覆蓋html檔案  
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

![img](https://s1.imagehub.cc/images/2024/02/02/214447b92070792905259a843de3e233.png)

在comments.html中

```html hl_lines="4-18"
{% if page.meta.comments %}
  <h2 id="__comments">{{ lang.t("meta.comments") }}</h2>
  <!-- Insert generated snippet here -->
  <script src="https://giscus.app/client.js"
  data-repo="你的倉庫名稱（如Wcowin/hexo-site-comments）"
  data-repo-id=" "
  data-category=" "
  data-category-id=" "
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="preferred_color_scheme"
  data-lang="zh-CN"
  crossorigin="anonymous"
  async>
</script>
  <!-- Synchronize Giscus theme with palette -->
  <script>
    var giscus = document.querySelector("script[src*=giscus]")

    // Set palette on initial load
    var palette = __md_get("__palette")
    if (palette && typeof palette.color === "object") {
      var theme = palette.color.scheme === "slate"
        ? "transparent_dark"
        : "light"

      // Instruct Giscus to set theme
      giscus.setAttribute("data-theme", theme) 
    }

    // Register event handlers after documented loaded
    document.addEventListener("DOMContentLoaded", function() {
      var ref = document.querySelector("[data-md-component=palette]")
      ref.addEventListener("change", function() {
        var palette = __md_get("__palette")
        if (palette && typeof palette.color === "object") {
          var theme = palette.color.scheme === "slate"
            ? "transparent_dark"
            : "light"

          // Instruct Giscus to change theme
          var frame = document.querySelector(".giscus-frame")
          frame.contentWindow.postMessage(
            { giscus: { setConfig: { theme } } },
            "https://giscus.app"
          )
        }
      })
    })
  </script>
{% endif %}
```
## 第二步
開啟<https://giscus.app/zh-CN>  走完這個頁面的流程就會得到(這會在你的Github建立新的倉庫，建議自己先去新建個 Discussions)
![](https://s1.imagehub.cc/images/2024/02/02/b0fabd6a0c967d5a846c087adea5b680.png)  

![](https://s1.imagehub.cc/images/2024/02/02/d0c7b4e08a714b5c2b60421f58159c62.png)  

```html
<script src="https://giscus.app/client.js"
        data-repo="[在此輸入倉庫]"
        data-repo-id="[在此輸入倉庫 ID]"
        data-category="[在此輸入分類名]"
        data-category-id="[在此輸入分類 ID]"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>
```

複製將此程式碼，替換最上面👆🏻comments.html中高亮的程式碼

終端裡`mkdocs server`一下

## 最後
在你想插入評論的地方的後設資料：`comments: true `

```
---
title: 留言板
hide:
  #  - navigation # 顯示右
  #  - toc #顯示左
  #  - footer
  #  - feedback  
comments: true  #預設不開啟評論
---
```
## 效果  

完美!快速相應  

<figure markdown >
  ![](https://s1.imagehub.cc/images/2024/02/02/0619f922f930e7649fb40405c7e49339.png)
  <figcaption>這是圖片↑↑↑</figcaption>
</figure>

## 其他評論系統

把想要內嵌的評論程式碼放在相應頁面即可
比如[twikoo](https://twikoo.js.org/)
去看它的官方配置文件很簡單就配置好了

```html
<head> 
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous" /> 
  <script defer="" src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous"></script> 
  <script defer="" src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous"></script> 
  
 </head>
<body>
  <div id="tcomment"></div> 
  <script src="https://cdn.staticfile.org/twikoo/1.6.21/twikoo.all.min.js"></script> 
  <script>
twikoo.init({
  envId: 'https://superb-salamander-e730b6.netlify.app/.netlify/functions/twikoo', // 騰訊雲環境填 envId；Vercel 環境填地址（https://xxx.vercel.app）
  el: '#tcomment', // 容器元素
   //region: 'ap-guangzhou', // 環境地域，預設為 ap-shanghai，騰訊雲環境填 ap-shanghai 或 ap-guangzhou；Vercel 環境不填
  // path: location.pathname, // 用於區分不同文章的自定義 js 路徑，如果您的文章路徑不是 location.pathname，需傳此引數
   //lang: 'zh-CN', // 用於手動設定評論區語言，支援的語言列表 https://github.com/twikoojs/twikoo/blob/main/src/client/utils/i18n/index.js
   onCommentLoaded: function () {
    console.log('評論載入完成');
  }
})
</script> 
```

<head> 
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous" /> 
  <script defer="" src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous"></script> 
  <script defer="" src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous"></script> 
  
 </head>
<body>
  <div id="tcomment"></div> 
  <script src="https://cdn.staticfile.org/twikoo/1.6.21/twikoo.all.min.js"></script> 
  <script>
twikoo.init({
  envId: 'https://superb-salamander-e730b6.netlify.app/.netlify/functions/twikoo', // 騰訊雲環境填 envId；Vercel 環境填地址（https://xxx.vercel.app）
  el: '#tcomment', // 容器元素
   //region: 'ap-guangzhou', // 環境地域，預設為 ap-shanghai，騰訊雲環境填 ap-shanghai 或 ap-guangzhou；Vercel 環境不填
  // path: location.pathname, // 用於區分不同文章的自定義 js 路徑，如果您的文章路徑不是 location.pathname，需傳此引數
   //lang: 'zh-CN', // 用於手動設定評論區語言，支援的語言列表 https://github.com/twikoojs/twikoo/blob/main/src/client/utils/i18n/index.js
   onCommentLoaded: function () {
    console.log('評論載入完成');
  }
})
</script> 

我感覺twikoo也好看！