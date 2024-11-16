---
title: JS實現滑鼠樣式
tags:
  - Mkdocs
---

不建議更改，因為預設就是最簡潔

<head>
<link rel="stylesheet" type="text/css" href="/stylesheets/shubiao.css">
<script src="/javascripts/shubiao.js"></script>
</head>

![](https://s1.vika.cn/space/2022/11/25/7b84e20eee214a5b956f2c96bcc115f4)  
在`docs/javascripts/extra.js`下複製貼上：
```java
var CURSOR;

Math.lerp = (a, b, n) => (1 - n) * a + n * b;

const getStyle = (el, attr) => {
    try {
        return window.getComputedStyle
            ? window.getComputedStyle(el)[attr]
            : el.currentStyle[attr];
    } catch (e) {}
    return "";
};

class Cursor {
    constructor() {
        this.pos = {curr: null, prev: null};
        this.pt = [];
        this.create();
        this.init();
        this.render();
    }

    move(left, top) {
        this.cursor.style["left"] = `${left}px`;
        this.cursor.style["top"] = `${top}px`;
    }

    create() {
        if (!this.cursor) {
            this.cursor = document.createElement("div");
            this.cursor.id = "cursor";
            this.cursor.classList.add("hidden");
            document.body.append(this.cursor);
        }

        var el = document.getElementsByTagName('*');
        for (let i = 0; i < el.length; i++)
            if (getStyle(el[i], "cursor") == "pointer")
                this.pt.push(el[i].outerHTML);

        document.body.appendChild((this.scr = document.createElement("style")));
        // 這裡改變滑鼠指標的顏色 由svg生成
        this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='.5'/></svg>") 4 4, auto}`;
    }

    refresh() {
        this.scr.remove();
        this.cursor.classList.remove("hover");
        this.cursor.classList.remove("active");
        this.pos = {curr: null, prev: null};
        this.pt = [];

        this.create();
        this.init();
        this.render();
    }

    init() {
        document.onmouseover  = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.add("hover");
        document.onmouseout   = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.remove("hover");
        document.onmousemove  = e => {(this.pos.curr == null) && this.move(e.clientX - 8, e.clientY - 8); this.pos.curr = {x: e.clientX - 8, y: e.clientY - 8}; this.cursor.classList.remove("hidden");};
        document.onmouseenter = e => this.cursor.classList.remove("hidden");
        document.onmouseleave = e => this.cursor.classList.add("hidden");
        document.onmousedown  = e => this.cursor.classList.add("active");
        document.onmouseup    = e => this.cursor.classList.remove("active");
    }

    render() {
        if (this.pos.prev) {
            this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.15);
            this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.15);
            this.move(this.pos.prev.x, this.pos.prev.y);
        } else {
            this.pos.prev = this.pos.curr;
        }
        requestAnimationFrame(() => this.render());
    }
}

(() => {
    CURSOR = new Cursor();
    // 需要重新獲取列表時，使用 CURSOR.refresh()
})();
```
其中比較重要的引數就是滑鼠的尺寸和顏色，已經在上圖中標出，目前發現顏色只支援RGB寫法和固有名稱寫法（例如red這種），其他引數也可以自行摸索：  

```java
* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='1.0' fill='rgb(57, 197, 187)'/></svg>") 4 4, auto}`
```

在docs/stylesheets/extra.css新增如下程式碼：
```css
/* 滑鼠樣式 */
#cursor {
  position: fixed;
  width: 16px;
  height: 16px;
  /* 這裡改變跟隨的底色 */
  background: var(--theme-color);
  border-radius: 8px;
  opacity: 0.25;
  z-index: 10086;
  pointer-events: none;
  transition: 0.2s ease-in-out;
  transition-property: background, opacity, transform;
}

#cursor.hidden {
  opacity: 0;
}

#cursor.hover {
  opacity: 0.1;
  transform: scale(2.5);
  -webkit-transform: scale(2.5);
  -moz-transform: scale(2.5);
  -ms-transform: scale(2.5);
  -o-transform: scale(2.5);
}

#cursor.active {
  opacity: 0.5;
  transform: scale(0.5);
  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  -ms-transform: scale(0.5);
  -o-transform: scale(0.5);
}
```
這裡比較重要的引數就是滑鼠跟隨的圓形顏色，可以根據自己的喜好進行更改：
```css
#cursor {
  /* 這裡改變跟隨的底色 */
  background: rgb(57, 197, 187);
}
```

!!! Note "注意⚠️"
    需要在mkdocs.yml中引入js和css
    ```
    extra_javascript:
      - javascripts/extra.js
      - javascripts/mathjax.js
    extra_css:
      - stylesheets/extra.css
    ```