---
title: 2024網站更新記錄
authors: [Wcowin]
date: 2024-01-01
categories:
  - 網站更新記錄
readtime: 2
---
## </p><h1 id="01" name="01"><strong>2024-07-21</strong></h1><p>
* 最佳化網站流暢度（玄學）


## </p><h1 id="01" name="01"><strong>2024-07-21</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 最佳化了網站的UI和訪問速度，啟用 CDN 加速
* 學業繁重

## </p><h1 id="01" name="01"><strong>2024-06-27</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 美化了Blog頁面, 使更加簡潔美觀,如你所見
* 內心豐盈者，獨行也獨眾，心有山海，靜而不爭


## </p><h1 id="01" name="01"><strong>2024-06-20</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 最佳化多處UI
* 刪減了部分拖慢網站速度的JS/CSS程式碼
* 更新了[MKdocs補充系列教程](https://blog.csdn.net/m0_63203517/article/details/139814216?spm=1001.2014.3001.5501)
* 近期略有時間，所以更文變得高產


## </p><h1 id="01" name="01"><strong>2024-06-19</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 期末結束
* 刪減了冗餘程式碼

## </p><h1 id="01" name="01"><strong>2024-06-2</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 近期學業繁重

## </p><h1 id="01" name="01"><strong>2024-06-2</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 過了六一

## </p><h1 id="01" name="01"><strong>2024-05-15</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 全站引入自動在新標籤頁開啟，倉庫地址：[mkdocs-open-in-new-tab](https://newtab.kubaandrysek.cz/)
<details><summary>Show source code</summary>
<p>

Look at this source <a href="https://github.com/JakubAndrysek/mkdocs-open-in-new-tab/blob/main/open_in_new_tab/js/open_in_new_tab.js">open_in_new_tab.js</a>:

```js
// Description: Open external links in a new tab and PDF links in a new tab
// Source: https://jekyllcodex.org/without-plugin/new-window-fix/

//open external links in a new window
function external_new_window() {
    for(let c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
        let b = c[a];
        if(b.getAttribute("href") && b.hostname !== location.hostname) {
            b.target = "_blank";
            b.rel = "noopener";
        }
    }
}
//open PDF links in a new window
function pdf_new_window ()
{
    if (!document.getElementsByTagName) {
      return false;
    }
    let links = document.getElementsByTagName("a");
    for (let eleLink=0; eleLink < links.length; eleLink ++) {
    if ((links[eleLink].href.indexOf('.pdf') !== -1)||(links[eleLink].href.indexOf('.doc') !== -1)||(links[eleLink].href.indexOf('.docx') !== -1)) {
        links[eleLink].onclick =
        function() {
            window.open(this.href);
            return false;
        }
    }
    }
}

function apply_rules() {
    external_new_window();
    pdf_new_window();
}

if (typeof document$ !== "undefined") {
    // compatibility with mkdocs-material's instant loading feature
    // based on code from https://github.com/timvink/mkdocs-charts-plugin
    // Copyright (c) 2021 Tim Vink - MIT License
    // fixes [Issue #2](https://github.com/JakubAndrysek/mkdocs-open-in-new-tab/issues/2)
    document$.subscribe(function() {
        apply_rules();
        console.log("Applying rules");
    })
}
```
</p>
</details>

## </p><h1 id="01" name="01"><strong>2024-05-05</strong></h1><p>
* 釋出[Mkdocs-Wcowin主題|3.0版本](https://github.com/Wcowin/Mkdocs-Wcowin/releases/tag/3.0){target=“_blank”}！！！
* 最佳化網站流暢度（玄學）
* 和小王一起吃了好吃的
* 感謝王鵬老哥的打賞

## </p><h1 id="01" name="01"><strong>2024-04-22</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 看了更多的貓咪
* 最佳化佈局
* 新增圓角化設計教程

## </p><h1 id="01" name="01"><strong>2024-04-22</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 網站全面貼合圓角設計，非常好看

## </p><h1 id="01" name="01"><strong>2024-04-13</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 重寫主頁index.md,更加美觀，貼合圓角設計

## </p><h1 id="01" name="01"><strong>2024-04-12</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 感謝W1ndys提出的[使用軟編碼配置友鏈介面](https://github.com/Wcowin/Mkdocs-Wcowin/pull/9)，使得友鏈新增更加規範化

## </p><h1 id="01" name="01"><strong>2024-04-06</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 主頁引入天氣元件，搜尋框/按鈕圓角化
* 刪除冗餘JS/CSS檔案
* 感謝[Anshul Raj Verma](https://arv-anshul.github.io/)在[Discussions#7](https://github.com/Wcowin/Wcowin.github.io/discussions/7)上提出的網站最佳化建議


## </p><h1 id="01" name="01"><strong>2024-04-02</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 在mkdocs.yml的plugins模組中引入`!ENV [CI, false]`語句，極大縮短`mkdocs serve`靜態預覽時間（3-5s）
* 本Mkdocs-Wcowin主題得到以下兩位的使用：
    - [Lenny's Web](https://lennychen.top) 
    - [tkqtang's Web](https://tkqtang.site/)

## </p><h1 id="01" name="01"><strong>2024-03-14</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 3月14日（March 14th）是公曆一年中的第73天（閏年第74天），離全年的結束還有292天。是國際圓周率日。其中歷史上發生的大事件有阿爾伯特·愛因斯坦的出生。 [10]卡爾·馬克思、斯蒂芬·威廉·霍金的逝世。

## </p><h1 id="01" name="01"><strong>2024-02-20</strong></h1><p>
* 最佳化頁尾“本站訪問量和萌ICP備20230640號”顯示方式
* 最佳化網站流暢度（玄學）

## </p><h1 id="01" name="01"><strong>2024-02-02</strong></h1><p>
* 網站圖片全部遷移至[smms](https://smms.app/)(更加穩定流暢)
* 著手改寫MKdocs教程，使得條理更加清晰
* 最佳化網站流暢度（玄學）
* 刪除大量繁瑣無用程式碼

## </p><h1 id="01" name="01"><strong>2024-02-01</strong></h1><p>
* 改進網頁程式碼顯示效果
* 最佳化網站流暢度（玄學）

## </p><h1 id="01" name="01"><strong>2024-01-30</strong></h1><p>
* 友鏈數量達到16位
* 修復了一些bugs
* 本網站已經被百度/谷歌收錄（確信，使用百度/谷歌搜尋Wcowin字樣即可）
* 最佳化網站流暢度（玄學）

## </p><h1 id="01" name="01"><strong>2024-01-05</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 引入[git-revision-date-localized-plugin](https://timvink.github.io/mkdocs-git-revision-date-localized-plugin/)外掛，以便記錄文件建立和最後一次修改時間
* 和小王一起看了更多的貓咪  

