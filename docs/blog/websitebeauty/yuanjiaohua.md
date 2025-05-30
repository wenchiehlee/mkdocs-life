---
title: 網頁圓角化設計
hide:
  #  - navigation # 顯示右
  #  - toc #顯示左
  #  - footer
  #  - feedback  
tags:
  - Mkdocs
comments: false
---

## 示例  
![iShot_2024-04-26_12.17.20.png](https://s2.loli.net/2024/04/26/gvu7ASWfU8eKVOd.png)  
![image.png](https://s2.loli.net/2024/04/26/Czi9uAQhmbBlkfG.png)

## 如何設計
新建css檔案，在mkdocs.yml引入css  

```css
:root {
  --admonition-border-left-width: 0.2rem;
  --base-border-radius: 0.5rem;
}

/* Change font family of filename present on top of code block. */
/* .highlight span.filename {
  border-bottom: none;
  border-radius: var(--base-border-radius);
  display: inline;
  font-family: var(--md-code-font-family);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 5px;
  text-align: center;
}
.highlight span.filename + pre > code {
  border-radius: var(--base-border-radius);
  border-top-left-radius: 0;
}
.md-typeset pre > code {
  border-radius: var(--base-border-radius);
} */

/* Customize admonition layout */
/* .md-typeset .admonition {
  border-width: 0px;
  border-left-width: var(--admonition-border-left-width);
}

[dir="ltr"] .md-typeset blockquote {
  border-radius: 0.2rem;
  border-left-width: var(--admonition-border-left-width);
} */

/* Grid Cards */
.md-typeset .grid.cards > ul > li {
  border-radius: var(--base-border-radius);
}
.md-typeset .grid.cards > ul > li:hover {
  box-shadow: 0 0 0.2rem #ffffff40;
}

/* Markdown Button */
.md-typeset .md-button {
  border-radius: var(--base-border-radius);
}

/* Footer: Social Links */
.md-social__link svg {
  max-height: 1rem;
}


/* Forms */
.md-search__form {
  border-radius: var(--base-border-radius);
}

[data-md-toggle="search"]:checked ~ .md-header .md-search__form {
  border-top-right-radius: var(--base-border-radius);
  border-top-left-radius: var(--base-border-radius);
}

[dir="ltr"] .md-search__output {
  border-bottom-right-radius: var(--base-border-radius);
  border-bottom-left-radius: var(--base-border-radius);
}

/* Blog - index.md */
/* div.md-content header {
  display: none;
}

.md-post--excerpt {
  background-color: var(--md-accent-fg-color--transparent);
  box-shadow: 0 0 0 1rem var(--md-accent-fg-color--transparent);
  border-radius: var(--base-border-radius);
}

.md-post--excerpt .md-post__header {
  justify-content: center;
}

.md-post--excerpt .md-post__content > h2,
.md-post__action {
  text-align: center;
} */

/* Table */
.md-typeset table:not([class]) {
  border-radius: var(--base-border-radius);
}





.carousel {
  width: 60%;
  height: 100%;

  border-radius: 0.4rem;
  overflow: hidden;
  position: relative;

  /* 居中 */
  margin-left: auto;
  margin-right: auto;

  border: 0.075rem solid #7b7b7b7a;
  box-shadow: var(--md-shadow-z1);
}

.carousel-container {
  width: 100%;
  height: 100%;

  position: relative;
  left: 0;

  display: flex;

  /* 過渡動畫 1s */
  transition: all 1s;
}

.carousel-hover {
  height: 100%;
  width: 10%;
  position: absolute;
  top: 0;

  /* 子元素垂直居中 */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}
.carousel-hover.left {
  left: 0;
}
.carousel-hover.right {
  right: 0;
}

.carousel-hover button {
  background-color: var(--md-accent-fg-color);
  border-radius: 50%;

  cursor: pointer;

  opacity: 0;
  transition: opacity 0.3s;
}
.carousel-hover button::after {
  display: block;
  height: 1.5rem;
  width: 1.5rem;

  background-color: white;
  content: "";
  mask-position: center;
  -webkit-mask-position: center;
}
.carousel-hover.left button::after {
  mask-image: var(--md-tabbed-icon--prev);
  -webkit-mask-image: var(--md-tabbed-icon--prev);
}
.carousel-hover.right button::after {
  mask-image: var(--md-tabbed-icon--next);
  -webkit-mask-image: var(--md-tabbed-icon--next);
}

/* hover 外層 */
.carousel-hover:hover button {
  opacity: 0.5;
  transition: opacity 0.3s;
}
/* hover 內層 */
.carousel-hover button:hover {
  opacity: 0.8;
  transition: opacity 0.3s;
}

.carousel-container a {
  width: 100%;
  height: 100%;

  flex-shrink: 0;
}

.carousel-container img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  display: block;
}

.carousel-bottom {
  position: absolute;
  /* 寬度等同於內容寬度 */
  width: 100%;
  padding: 20px;

  bottom: 0;

  display: flex;
  justify-content: center;
  /* 指示器間距 */
  gap: 10px;

  opacity: 0;
  transition: opacity 0.3s;
}
.carousel-bottom:hover {
  opacity: 0.8;
  transition: opacity 0.3s;
}

.carousel-bottom .indicator {
  height: 5px;
  width: 20px;

  background-color: var(--md-accent-fg-color);

  opacity: 0.5;
  cursor: pointer;
}

.carousel:hover .bottom .indicator {
  opacity: 1;
}
.carousel:hover .shift .btn {
  opacity: 1;
}

@media screen and (max-width: 600px) {
  .carousel {
      width: 100%;
  }

  .carousel-hover button {
      opacity: 1;
  }
}

```



## 利用內建的grid cards

```markdown
<div class="grid cards" markdown>

-   :simple-materialformkdocs:{ .lg .middle } __Mkdocs教程__

    ---

    - [利用Mkdocs部署靜態網頁至GitHub pages](blog/Mkdocs/mkdocs1.md)
    - [Mkdocs部署配置說明(mkdocs.yml)](blog/Mkdocs/mkdocs2.md)
    - [如何給MKdocs新增友鏈](blog/websitebeauty/linktech.md)
    - [網站新增Mkdocs部落格](blog/Mkdocs/mkdocsblog.md)
    - [Blogger](blog/index.md)
</div>

```  

效果：  
<div class="grid cards" markdown>

-   :simple-materialformkdocs:{ .lg .middle } __Mkdocs教程__

    ---

    示例文字

</div>


## 按鈕

```
[Send Email :fontawesome-solid-paper-plane:](mailto:<wangkewen821@gmail.com>){.md-button}
```  
效果：  
[Send Email :fontawesome-solid-paper-plane:](mailto:<wangkewen821@gmail.com>){.md-button}