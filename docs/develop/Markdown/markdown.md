---
title: Markdown語法學習 精簡版
comments: false
tags:
  - Markdown
---

# :simple-markdown: [Markdown語法學習](https://www.markdown.xyz/) 精簡版

> <span id="top">**文章開頭**</span>  

介紹一下Markdown：  
Markdown 是一種輕量級標記語言，它允許人們使用易讀易寫的純文字格式編寫檔案。Markdown 語言在 2004 由約翰·格魯伯（英語：John Gruber）建立。  
Markdown 編寫的檔案可以匯出 HTML 、Word、影象、PDF、Epub 等多種格式的檔案。Markdown 編寫的檔案字尾為 .md, .markdown。  

此筆記學習摘抄自[Markdown語法學習 精簡版](https://github.com/Yang-Xijie/yang-xijie.github.io/blob/main/docs/BLOG/Markdown/grammars.md?plain=1)，學習借鑑大佬之經驗（Ctrl C+V）

**也推薦看:[Markdown中文指南](https://www.markdown.xyz/)**

一些Markdown檔案創作工具：
<ul>
  <li><strong>Mac:</strong> <a href="/tools/macdown/">MacDown</a>, <a href="/tools/ia-writer/">iA Writer</a> 或 <a href="/tools/marked-2/">Marked 2</a></li>
  <li><strong>iOS / Android:</strong> <a href="/tools/ia-writer/">iA Writer</a></li>
  <li><strong>Windows:</strong> <a href="https://wereturtle.github.io/ghostwriter/">ghostwriter</a> 或 <a href="https://markdownmonster.west-wind.com/">Markdown Monster</a></li>
  <li><strong>Linux:</strong> <a href="https://github.com/retext-project/retext">ReText</a> 或 <a href="https://wereturtle.github.io/ghostwriter/">ghostwriter</a></li>
  <li><strong>Web:</strong> <a href="/tools/dillinger/">Dillinger</a> 或 <a href="/tools/stackedit/">StackEdit</a></li>
</ul>

## 最常用

### 分級標題

```
# 一級標題 (注意有空格)
## 二級標題
### 三級標題
#### 四級標題
##### 五級標題
###### 六級標題  <!--最多6級標題-->
```

### 目錄

在任意位置插入 `[toc]` 顯示全文<span id="catalog">**目錄**</span>結構

示例見文章開頭（點選[這裡](#top)跳轉到開頭檢視目錄）

### 斜體/粗體/刪除線/下劃線/背景高亮

```
*斜體*    _斜體_
**粗體**    __粗體__
***加粗斜體***    ___加粗斜體___
~~刪除線~~
<u>下劃線</u>
==背景高亮==
```

*斜體*    _斜體_

**粗體**    __粗體__

***加粗斜體***    ___加粗斜體___

~~刪除線~~

<u>下劃線</u>

==背景高亮==

### 無序列表/有序列表

#### 無序列表

```
* 無序列表項 一
+ 無序列表項 二
- 無序列表項 三
```

* 無序列表項 一
+ 無序列表項 二
- 無序列表項 三

#### 多級無序列表

```
* 今天`* + 空格鍵`
* 明天
    * 學習 `TAB(或4個空格) + * + 空格鍵`
	* 購物
	    * 麵包
	    * 牛奶
* 後天
```

* 今天`* + 空格鍵`
* 明天
    * 學習 `TAB(或4個空格) + * + 空格鍵`
	* 購物
	    * 麵包
	    * 牛奶
* 後天

#### 有序列表/多級有序列表

```
1. 有序列表項 一 `數字 + . + 空格鍵`
2. 有序列表項 二
    1. 有序列表項 二(1) `TAB(或4個空格) + 數字 + . + 空格鍵`
    2. 有序列表項 二(2)
        1. 有序列表項 二(2).1
3. 有序列表項 三
```

1. 有序列表項 一 `數字 + . + 空格鍵`
2. 有序列表項 二
    1. 有序列表項 二(1) `TAB(或4個空格) + 數字 + . + 空格鍵`
    2. 有序列表項 二(2)
        1. 有序列表項 二(2).1
3. 有序列表項 三

### 任務列表

```
- [ ] 任務一 未做任務 `- + 空格 + [ ]`
- [x] 任務二 已做任務 `- + 空格 + [x]`
```

- [ ] 任務一 未做任務 `- + 空格 + [ ]`
- [x] 任務二 已做任務 `- + 空格 + [x]`

### 表格

第一行為表頭，第二行分隔表頭和主體部分(如果表格無法顯示可以嘗試把第二行的 `-` 變為 `---` )，可以指定所在列的對齊方式，第三行開始每一行為一個表格行。列與列之間用 `|` 隔開。(注：原生方式的表格每一行的兩邊也要有 `|` )

**對齊方式** `:- 左對齊` `- 中心對齊` `-: 右對齊`

```
第一列|第二列|第三列
:-|-|-:
a11|a12|a13
a21|a22|a33
a31|a32|a33
```

|表頭一|表頭二|表頭三
:-|-|-:
a11|a12|a13
a21|a22|a33
a31|a32|a33

### 超連結

[ ]裡寫連結文字，( )裡寫連結地址, ( )中的" "中可以為連結指定title屬性，title屬性可加可不加。title屬性的效果是滑鼠懸停在連結上會出現指定的 title文字，連結地址與title前有一個空格。

```
右邊是連結[連結文字](連結 "title")
```

```
右邊是連結[GitHub](https://github.com "GitHub")
```

右邊是連結[GitHub](https://github.com "GitHub")

### 插入圖片

**格式**：`!` `[圖片標題]` `(圖片地址 "圖片Title”)`

其中`圖片標題`會被某些網站和編輯器顯示在圖片下方

### 插入影片

**格式**：
```
<iframe height= width= src="連結">
```


### 程式碼塊

#### 行內程式碼塊

用“ \` ”左右包裹程式碼  
```
`printf()` 函式  
```
顯示為`printf()` 函式
#### 多行程式碼塊

用“ \`\`\` ”上下包裹程式碼，在第一個“ \`\`\` ”後新增語言名稱獲得不同的高亮效果

如：cpp，python，swift

### 對齊方式

```
<center>行中心對齊</center>
<p align="left">行左對齊</p>
<p align="right">行右對齊</p>
```

<center>行中心對齊</center>
<p align="left">行左對齊</p>
<p align="right">行右對齊</p>

### 分割線

```
* * *
***
- - -
---
```

* * *

***

- - -

---

### 換行

不同markdown編輯器可能有不同的換行方式，最簡單為直接敲回車

markdown文字內的連續兩個或多個回車會被替換為一個回車

## 高階

### 設定字型/顏色

```
<font face="宋體" color=blue size=5>藍色的字～</font>
```

<font face="宋體" color=blue size=5>藍色的字～</font>

#### 常用顏色

瀏覽器支援的所有顏色請跳轉參考

[現代瀏覽器支援的140種已命名的顏色](https://htmlcolorcodes.com/zh/yanse-ming  "htmlcolorcodes.com")

常用顏色名稱:
* 按網站順序排列
* orange pink  gold yellow purple greenyellow lightgreen green aqua lightblue blue wheat brown white snow linen silver gray black

最常用|其他
-|-
<font color=red>red</font>|<font color=greenyellow>greenyellow</font>
<font color=orange>orange</font>|<font color=lightgreen>lightgreen</font>
<font color=yellow>yellow</font>|<font color=lightblue>lightblue</font>
<font color=green>green</font>|<font color=pink>pink</font>
<font color=aqua>aqua</font>|<font color=gold>gold</font>
<font color=blue>blue</font>|<font color=silver>silver</font>
<font color=purple>purple</font>|<font color=brown>brown</font>
||<font color=wheat>wheat</font>|
||<font color=linen>linen</font>|
||<font color=snow>snow</font>|
||<font color=gray>gray</font>|
||<font color=black>black</font>|

### 錨點

也就是 `跳轉`

```
1. [點選這裡跳轉到第一段](#jump1)
2. [點選這裡跳轉到第二段](#jump2）

### <span id="jump1">第一段</span>

### <span id="jump2">第二段</span>
```

```
<span id="now">當前位置</span>
點選[這裡](#top)跳轉到開頭
點選[這裡](#bottom)跳轉到結尾
```

<span id="now">**當前位置**</span>

點選[這裡](#top)跳轉到開頭

點選[這裡](#bottom)跳轉到結尾  

### 註腳

```
使用 Markdown[^1]可以效率的書寫檔案, 直接轉換成 HTML[^2]。

[^1]:Markdown是一種純文字標記語言
[^2]:HyperText Markup Language 超文字標記語言
```

使用 Markdown[^1]可以效率的書寫檔案, 直接轉換成 HTML[^2]。

點選[這裡](#bottom)跳轉到結尾檢視<span id="footnote">**註腳**</span>的顯示效果

[^1]:Markdown是一種純文字標記語言
[^2]:HyperText Markup Language 超文字標記語言

### 多級引用

```
>>> 請問 Markdwon 怎麼用？ - 小白

>> 自己看教程！ - 憤青

> 教程在哪？ - 小白

`[^_^]: # 無法顯示時記得空行`
```

不同編輯器的顯示情況不同

>>> 請問 Markdwon 怎麼用？ - 小白

>> 自己看教程！ - 憤青

> 教程在哪？ - 小白
### LaTeX公式

* 在數學公式的前後加`$`是行內公式

```
我們在初中數學課上已經對一次函式$y=x+a$有所瞭解。
```

我們在初中數學課上已經對一次函式$y=x+a$有所瞭解。

* 在數學公式的前後加`$$`是獨佔一行的公式
```
下面我們來認識一下二次函式$$y=ax^2+bx+c$$
```
下面我們來認識一下二次函式$$y=ax^2+bx+c$$

- - -

```
行內公式：$\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$
塊級公式：
$$	x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$
$$ \frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} =
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
{1+\frac{e^{-8\pi}} {1+\ldots} } } } $$
```

行內公式：$\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$

塊級公式：

$$x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

$$\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}{1+\frac{e^{-8\pi}} {1+\ldots} } } }$$
***
來看看兩個重要極限  

$$\displaystyle\lim_{x \rightarrow 0}\frac{\sin x}{x} = 1$$

$$\displaystyle\lim_{x \rightarrow + \infty}(1 + \frac{1}{x})^x = e$$
## 其他

### 跳脫字元

透過在Markdown字元前使用\來忽略（或轉義）Markdown格式。

Markdown允許您使用反斜槓轉義來生成文字字元，否則這些字元在Markdown的格式化語法中具有特殊含義。 例如，如果您想用文字星號包圍一個單詞，則可以在星號之前使用反斜槓，如`\*literal asterisks\*`  \*literal asterisks\*

Markdown為以下字元提供反斜槓轉義(但是CSDN不太支援)：

\\反斜槓 \`反引號 \*星號 \_下劃線 \{\}大括號 \[\]中括號 \(\)小括號  \#井號 \+加號 \-減號 \.英文句號 \!英文感嘆號

### 內聯 HTML 語法/特殊字元自動轉義

對於 Markdown 中未包含的標籤, 可以直接使用 HTML標籤，例如用 HTML `<a>` 標籤替代 Markdown 的連結語法

在 HTML 中, 有一些字元需要特殊對待，如果你想將它們用作字面量, 則需要將它們轉義為字元實體

特殊字元|程式碼
-|-
&amp;|`&amp;`
&lt;|`&lt;`
&gt;|`&gt;`
&quot;|`&quot;` `&#34;`
&apos;|`&apos;` `&#39;`

### 註釋

```
<div style='display: none'>
註釋
</div>
```

```
<!-- 註釋 -->
```

```
[//]: # (哈哈我是最強註釋1，不會在瀏覽器中顯示。)
[^_^]: # (哈哈我是最萌註釋2，不會在瀏覽器中顯示。)
```

### 空格

```
【1】 &nbsp; 半形的不斷行的空白格（推薦使用）
【2】 &ensp; 半形的空格
【3】 &emsp; 全形的空格
```

* 【1】 &nbsp; 半形的不斷行的空白格（推薦使用）
* 【2】 &ensp; 半形的空格
* 【3】 &emsp; 全形的空格

---
<p>同時推薦這個網站去學習基礎markdown語法：<a href="http://www.runoob.com/">runoob.com</a></p>

<span id="bottom"></span>