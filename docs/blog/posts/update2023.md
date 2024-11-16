---
title: 2023網站更新記錄
authors: [Wcowin]
date: 2023-12-21
categories:
  - 網站更新記錄
readtime: 2
---

## </p><h1 id="01" name="01"><strong>2023-12-21</strong></h1><p>
* 最佳化網站流暢度（玄學）
* 脫單了;手執煙火以謀生，心懷詩意以謀愛  

<div>
<div id="rcorners2" >
  <div id="rcorners1">
    <!-- <i class="fa fa-calendar" style="font-size:100"></i> -->
    <body>
    <font color="#4351AF">
    <p style="text-align: center; ">
            <span>我們已經在一起</span>
            <span id='box1'></span>
</p>
  <div id="box1"></div>
  <script>
    function timingTime(){
      let start = '2023-12-21 00:00:00'
      let startTime = new Date(start).getTime()
      let currentTime = new Date().getTime()
      let difference = currentTime - startTime
      let m =  Math.floor(difference / (1000))
      let mm = m % 60  // 秒
      let f = Math.floor(m / 60)
      let ff = f % 60 // 分鐘
      let s = Math.floor(f/ 60) // 小時
      let ss = s % 24
      let day = Math.floor(s  / 24 ) // 天數
      return day + "天" + ss + "時" + ff + "分" + mm +'秒'
    }
    setInterval(()=>{
      document.getElementById('box1').innerHTML = timingTime()
    },1000)
  </script>
  </font>
</body>
    <!-- <b><span id="time"></span></b> -->
  </div>
</div>
</div>

## </p><h1 id="01" name="01"><strong>2023-12-14</strong></h1><p>
* 最佳化個別網頁標籤的顯示問題
* 最佳化網站圖片載入流暢度（玄學）
* 看了更多的貓咪 

## </p><h1 id="01" name="01"><strong>2023-12-09</strong></h1><p>
* 首次引入人工智慧問答機器人:<https://wcowin.work/about/geren/>，缺點是每月25條訊息限制，優點是可以智慧回覆本站所有資訊，包括但不限於：個人資訊，技術分享，部落格，留言板，友鏈等等
* 最佳化網站流暢度
* 擼了更多的貓咪

## </p><h1 id="01" name="01"><strong>2023-11-22</strong></h1><p>
* 更新了**王冰冰**的簡歷和美照；我的心是冰冰的
* 修復翻譯問題
* 最佳化移動端效果
* 提升網站流暢度（玄學）

## </p><h1 id="01" name="01"><strong>2023-11-11</strong></h1><p>
* 新增多語言支援，特別新增中國臺灣語言支援
* 順祝雙11快樂
* 新增國內映象網址:[https://wcowin.gitee.io/](https://wcowin.gitee.io/wcowin.github.io/){target="_blank"}

## </p><h1 id="01" name="01"><strong>2023-11-08</strong></h1><p>
* 緊急修復圖片不顯示的重大Bug

## </p><h1 id="01" name="01"><strong>2023-10-14</strong></h1><p>

* 正式建立[Mkdocs-Wcowin主題](https://github.com/Wcowin/Mkdocs-Wcowin){target="_blank"}
* 最佳化網頁渲染速度
## </p><h1 id="01" name="01"><strong>2023-10-12</strong></h1><p>

* 增加[友鏈版塊](https://wcowin.work/about/link/)
## </p><h1 id="01" name="01"><strong>2023-10-08</strong></h1><p>

* 修復Latex渲染不了的bug
## </p><h1 id="01" name="01"><strong>2023-10-05</strong></h1><p>

* 新增Blog版塊
* **新增了Latex渲染不了的bug**
* 新增留言板，整合了giscus評論系統
* 新增首次訪問網站的頂部通知欄功能

## </p><h1 id="01" name="01"><strong>2023-08-11</strong></h1><p>
* 最佳化主頁設計，圓比方好，寬比豎好
* 引入圖片懶載入
* 新增頁面底部 "下一頁/上一頁"

## </p><h1 id="01" name="01"><strong>2023-07-19</strong></h1><p>

* 修改網頁字型為[霞鶩文楷](https://github.com/lxgw/LxgwWenKai){target=_blank} 
* 修復滑鼠上滑"回到頁面頂部"不適配問題

## <h1 id="01" name="01"><strong>2023-01-12</strong></h1>

* 重寫[mkdocs.yml](https://wcowin.work/blog/Mkdocs/mkdocs2/)，增加中文註釋
* 支援Latex
* 引入個性化標籤，[Markdown擴充套件](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown-extensions/#inlinehilite)
* 新增網站搜尋功能

