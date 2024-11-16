---
title: 自定義Mkdocs顯示字型(霞鶩文楷)
tags:
  - Mkdocs
---

我目前在用的字型：[霞鶩文楷](https://github.com/lxgw/LxgwWenKai){target=_blank}  
想必你可以直觀從我的網站感受到，[這款字型](https://chawyehsu.github.io/lxgw-wenkai-webfont/)的美觀程度。  

[快速教程]
[快速教程]: #mkdocs
***  

**以下是摘錄的部分字型官方介紹文件**

> **注意事項**
> 
> - 添字請在 [Issue #33](https://github.com/lxgw/LxgwWenKai/issues/33) 反饋，字形調整請在 [Issue #14](https://github.com/lxgw/LxgwWenKai/issues/14) 反饋，不要另開議題，以便於整理。
> - 若需要在網站上使用這款字型，請參閱 [Issue #24](https://github.com/lxgw/LxgwWenKai/issues/24)。
> - 有關 Magisk 字型模組等手機字型替換有關的問題，請移步[模組模板](https://github.com/lxgw/advanced-cjk-font-magisk-module-template)的 Issues 裡反饋，不要在本專案開議題。
> - 更多版本 *（可能會隨時變動）* ：
>   - [霞鶩文楷螢幕閱讀版 / LXGW WenKai Screen](https://github.com/lxgw/LxgwWenKai-Screen)：適用於 PC 和 Android 手機螢幕顯示且無需特別切換到粗體。
>   - [霞鶩文楷 輕便版 / LXGW WenKai Lite](https://github.com/lxgw/LxgwWenKai-Lite)：與完整版相比剔除一些較不常用的字元，便於開發者將字型嵌入軟體中。
>   - [霞鶩文楷 GB / LXGW WenKai GB](https://github.com/lxgw/LxgwWenkaiGB)：進一步調整字形和筆形，符合 G 源字形規範。包含《通用規範漢字表》8105 個漢字。
>   - [霞鶩文楷 TC / LXGW WenKai TC](https://github.com/lxgw/LxgwWenkaiTC)：舊字形版參考「一點字坊」的「傳承字形標準化檔案」對部件進行修改，適用於繁體中文使用者及舊字形愛好者。
>   - [LXGW Bright](https://github.com/lxgw/LxgwBright)：與 [Ysabeau 系列字型](https://github.com/CatharsisFonts/Ysabeau) 搭配的中英文合併字型。

# LXGW WenKai / 霞鶩文楷

An open-source Chinese font derived from Fontworks' Klee One. 一款開源中文字型，基於 FONTWORKS 出品字型 Klee One 衍生。  

[![開源授權](https://img.shields.io/github/license/lxgw/LxgwWenKai?style=flat-square)](https://github.com/lxgw/LxgwWenKai)
[![最新版](https://img.shields.io/github/release/lxgw/LxgwWenKai?style=flat-square)](https://github.com/lxgw/LxgwWenKai/releases/latest)
[![貓啃網](https://shields.io/badge/%E7%8C%AB%E5%95%83%E7%BD%91-fe5e52?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAfCAMAAABeSlSAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHyUExURQAAAAAA//8AAAAA//8AAAAA/wAA//8AAAAA//8AAAAA//8A//8AAAAA//8AAAAA//8AAAAA/wD///8AAAD/////AAD/////AP//AP//////AAD/////AAD/////AP///wD/////AP//AP//////AP//////AP///wD//////wD//wD/////////AP///wD//wD//wD/////AP///////////wD/////AP///wD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f////39/f39/f39/f39/f39/f7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v///y6UHskAAACldFJOUwADAwQEBQYGBwcICAkLCwwMDQ0NDhESEhMWFxgYGRkbHBwdHR8hIyQlJygpKSwsLS4yMjQ1Njc3ODk6PD5BQkNFRkdNUFFTVldaXF1fYGdqbnBxcnZ4eXt8gIGEhYaJio6RkpWXmJqbnJ2goqOlpqirrrCxs7S1trm7vr/BwsTHyMvMzc/Q0tPU2Nrb3N3f4uTm5+jp6+zt7vDx8vP19vf4+/z9/iyQxCoAAAAJcEhZcwAAFxEAABcRAcom8z8AAAHPSURBVDhPvZDpOxtRFIdvCJ1olaCLoqW1BF1U2tpJSlpFiK17NNE1DbGVoFVL20TRoMFUDDKS83+6Z+6tJjx9Hp+8X+b+fued88xcckLcmnl9nR8PkfVizoDPewHYcRYqVRQZr0TYfYinii0A2LReVOoDEiwrtN5txPNtMTj2B8BTH6OMGHc/A0huaduEoXg52FwwIEPY+7a1+opalV5uts/KEPp0s07aqkIj2wMv1XHmDbo0AqlTQ9rklRtoJI3DWLJ+MsxHf5mtFT7A98toCG/A9/jQBkR6/gNGzqJBLHu8O4pVrRgGiecjBJsUgeiWWPYNOtwBWk99dHlZs17KDO24Ep3nVHdMlV7ffaNRI/SEsPLkMENwYApUkUfb0K/XW0N7XTElv7GbSGZGghOTWBpno29dpT8PfWd0vxQjlRmJw8yItwPM52onAPq5MX3huIbw/n8GvzBC75+mzbJIo3iZVuFn7MIIKcIX5I7TEUZLkFb+ci6Q2G5cstrQC7CQf/4rgKtmEVfYNFwgJO0dXpAs0vbLKLXFHRrBfYmPkZQe3BpFyJXJhwxV/Tc+4fw0n+KjA+Ibhvx8CmvDjf8+IYprJsuTp+0P8ng8OQjZB5l3H1123DZyAAAAAElFTkSuQmCC)](https://www.maoken.com/freefonts/9704.html)

## 專案簡介

2020 年 12 月，日本著名字型廠商 FONTWORKS 在 GitHub 上釋出了 [7 款日文字型](https://github.com/fontworks-fonts)，分別為 **Train、Klee、Stick、Rock-n-Roll、Reggae、Rampart 和 DotGothic16**，根據 SIL Open Font License 1.1 授權許可開源。7 款開源日文字型各有各的特點，而這 7 款字型中，字元數量最多的是 [Klee](https://github.com/fontworks-fonts/Klee)。

這是一款有著日本教科書體風格的字型，兼有仿宋和楷體的特點，可讀性高。一些 DIY 字型愛好者曾先後用仿宋等字型補全這款字型，作為手機系統的美化字型移植在 iOS、Android 等手機系統中，受到很多玩機發燒友的歡迎。不過這樣補全的字型有一些不足之處。 **第一**，原有字型和後補字型之間有著一定的差異，致使一些不同的文字（如 Klee 原有漢字與後補簡體字）混排之後會有一定的違和感。 **第二**，由於補字所用的字型為商業版權字型，補全之後不可用於商業用途，還會有侵權的風險。此外，目前現有的開源中文字型檔裡，楷體類寥寥無幾，仿宋類則幾乎沒有。

鑑於此，也為了豐富開源中文字型中的楷體門類，2021 年 1 月 20 日起，本人開始了為 Klee One 這一高質量的日文開源字型補全簡繁常用字的嘗試。因該字型具有一定的「文藝氣息」，命名 **「霞鶩文楷」***（其實當初是感覺這款字型適合正文閱讀定名「文楷」，後來發現這款字型可能並不太適合大段正文排版，相比之下更加適合詩詞之類的中等長度文字排版，或者註釋排版）*。由於 Klee One 字型的 Regular 字重太細不太適合閱讀，選取原字型 SemiBold 字重作為 Regular 字重。經過長時間的積累，目前已發展成簡繁日韓均支援的 3 字重字型家族 ~~（雖然拙劣粗糙了點）~~ 。

有關補字過程的更多資訊，請參閱本人 GitHub.io 部落格裡的文章：[《為 Klee 試製簡化字》](https://lxgw.github.io/2021/01/28/Klee-Simpchin/)。

## 字型預覽

![](https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-1.png)

![](https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-2.png)

![](https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-3.png)

![](https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-4.png)

![](https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-5.png)

![](https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-6.png)

![](https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-7.png)

![](https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-8.png)

![](https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-9.png)

<!-- [檢視詳細更新記錄。](https://github.com/lxgw/LxgwWenKai/blob/main/History.md) -->
歷史版本的 Release，請在 [Release](https://github.com/lxgw/LxgwWenKai/releases) 頁面檢視。文字版本的更新記錄 `HISTORY.MD` 不再維護，敬請諒解。

## 補字計劃

### 主要漢字部分

請參閱[「霞鶩文楷 輕便版」加字計劃](https://github.com/lxgw/LxgwWenKai-Lite#%E5%8A%A0%E5%AD%97%E8%AE%A1%E5%88%92)。

### 其他部分

- [x] 補完 CJK 統一漢字基本區 20992 個漢字（簡繁） *（目前完整版有 6857 個字形由 zi2zi 深度學習生成，字形較粗糙。）* ；
- [x] 補全常用諺文（韓語/朝鮮語）音節 2367 個。 *（做得比較拙劣。Lite 版不包含。）*

[點選此處檢視後續加字及調整計劃。](https://github.com/lxgw/LxgwWenKai/projects)

## 獲取字型

### ⅰ. 直接下載

1. 進入 [Release](https://github.com/lxgw/LxgwWenKai/releases) 介面下載對應版本的 TTF 格式檔案，或在本倉庫 `fonts/TTF` 資料夾中下載。
2. 在 [Gitee 官方映象倉庫](https://gitee.com/mirrors/lxgw-wenkai) `fonts/TTF` 資料夾中下載。
3. 進入 [貓啃網](https://www.maoken.com/freefonts/9704.html)、[Zfont.cn](https://zfont.cn/cn/font_286.html)、[自由字型](https://ziyouziti.com/mianfeiziti-302.html) 進行下載。GitHub 專案更新後，會聯絡站長進行更新，更新會稍晚些。 **注意：** 其它收錄免費商用字型的網站上可能也收錄了本字型，但可能不是最新版。 
4. [永碩Ｅ盤](http://lxgw.ysepan.com/)、[藍奏雲（密碼：8ppk）](https://lxgw.lanzoui.com/b0cqwpt3i) 會在 GitHub 專案更新後 72 小時之內更新。
5. 如果您使用 macOS，已經安裝過 [Homebrew](https://brew.sh/)，可以在終端輸入命令：`brew tap homebrew/cask-fonts && brew install font-lxgw-wenkai` 來安裝本字型。
6. 如果您使用 Windows，已經安裝過 [Scoop](https://scoop.sh/)，可以在終端輸入命令：`scoop bucket add nerd-fonts && scoop install LXGWWenKai` 或者 `scoop bucket add nerd-fonts && scoop install LXGWWenKaiMono` 來安裝本字型。亦可檢視微軟官方教程：[如何在 Windows 中安裝或刪除字型](https://support.microsoft.com/zh-cn/windows/如何在-windows-中安裝或刪除字型-f12d0657-2fc8-7613-c76f-88d043b334b8)。

### ⅱ. 從原始碼生成

請執行 `./sources/build.bat` 或 `./sources/build.sh`。需要安裝 [`fontmake`](https://github.com/googlefonts/fontmake)：`pip3 install fontmake` 和 [`fontTools`](https://github.com/fonttools/fonttools)：`pip3 install fonttools`。

## 注意事項

1. 截至目前，完整版本字型含有全部 CJK 基本區漢字，以及零星擴充套件 A~G 區漢字。 **如有補字需求，請在 [Issue #33](https://github.com/lxgw/LxgwWenKai/issues/33) 提出，不要另開 Issue**，以便於整理。 
2. 本人並不是專業的設計師，並未考慮設計美感，所以看起來可能略醜，補進去的字與原版可能略有違和感，且在 Bold 字重中部分字的輪廓曲線會有毛刺，Light 字重中部分字的輪廓會存在飛點；此外由於時間倉促，並沒有多餘的時間細修，部分字的部件拼接會很生硬。**如有字形最佳化建議，請在 [Issue #14](https://github.com/lxgw/LxgwWenKai/issues/14) 提出，不要另開 Issue**，以便於整理。 *（以上兩個 issue 均已加上 long term 標籤，且均已在 Issues 頁面置頂。）*
3. **若需要在網站上使用這款字型，請參閱 [Issue #24](https://github.com/lxgw/LxgwWenKai/issues/24)。**
4. 對於搭配的西文字型，個人推薦 [Ysabeau](https://github.com/CatharsisFonts/Ysabeau) 系列字型。另有 Ysabeau Office 與霞鶩文楷輕便版的合併字型 [LXGW Bright](https://github.com/lxgw/LxgwBright)，採用 [字型合併補全工具](https://github.com/nowar-fonts/Warcraft-Font-Merger) 將兩款字型合併而成，提供 TTF、OTF、WOFF、WOFF2 四種格式。
5. 該字型的更多版本 *（可能會隨時變動）*
   1. [霞鶩文楷螢幕閱讀版 / LXGW WenKai Screen](https://github.com/lxgw/LxgwWenKai-Screen) 由於原版「霞鶩文楷」Regular 字重在 PC 和 Android 螢幕上顯示較細，而 Bold 字重需要在粗體模式下才能呼叫，特製作以 Bold 字重為基礎的，加粗後的「霞鶩文楷」與 Windows 預設英文字型 Segoe UI Regular 粗細相當，PC 和 Android 手機螢幕閱讀更加舒適，無需特別切換到粗體模式。
   2. [霞鶩文楷 輕便版 / LXGW WenKai Lite](https://github.com/lxgw/LxgwWenKai-Lite)：剔除 v1.100 版本增補的一些較不常用的漢字，便於開發者將字型嵌入軟體中。若完整版有字形最佳化或特性更新，精簡版也將會跟進。精簡版不包含諺文。
   3. [霞鶩文楷 GB / LXGW WenKai GB](https://github.com/lxgw/LxgwWenkaiGB)：在文楷基礎上進一步調整字形和筆形，符合 G 源字形規範。包含《通用規範漢字表》8105 個漢字。另有與「芫荽」等同源字型合併的[「縫合楷」](https://github.com/lxgw/FusionKai)，及使用本專案字型補全的 [GB 融合版](https://github.com/lxgw/LxgwWenkaiGB-Fusion)。
   4. [霞鶩文楷 TC / LXGW WenKai TC](https://github.com/lxgw/LxgwWenkaiTC)：供繁體中文使用者和舊字形愛好者使用，基於輕便版製作，採用舊字形寫法，主要採用 Klee One 的隱藏字形，部分部件手動修改 （大部分部件參考[一點字坊「傳承字形標準化檔案」](https://github.com/ichitenfont/inheritedglyphs)，藉助[「漢文博士」](https://www.cnblogs.com/hanbox/)[「國學迷」](http://www.guoxuemi.com/zidian/bujian/)[「字統網」](http://zi.tools) 等工具按部件查字，對字形進行修改）。此外已有基於 Klee One 改造的繁體中文字型 [芫荽 / Iansui](https://github.com/ButTaiwan/iansui)，採用臺灣地區的教育標準字形；另有采用香港地區字形標準的 [芫茜雅楷 / JyunsaiKaai](https://github.com/ItMarki/jyunsaikaai)。
6. **本專案為字型專案，有關 Magisk 字型模組等手機字型替換有關的問題，請移步[模組模板](https://github.com/lxgw/advanced-cjk-font-magisk-module-template)的 Issues 裡反饋，不要在本專案開議題。**



## 授權資訊

本字型是基於 SIL Open Font License 1.1 改造的 FONTWORKS 開發併發布的 [Klee](https://github.com/fontworks-fonts/Klee) 開源專案。Klee 是 FONTWORKS 的商標。

> [貓啃網](https://www.maoken.com/)提供 SIL Open Font License 1.1 非官方[簡體中文譯本](https://www.maoken.com/ofl)便於理解，僅供參考。

### 許可

- 這款字型無論是個人還是企業都可以自由商用，無需付費，也無需知會或者標明原作者。 *（但如果告知，我會很感激。）*
- 這款字型可以自由傳播、分享，或者將字型安裝於系統、軟體或APP中也是允許的，可以與任何軟體捆綁再分發以及／或一併銷售。
- 這款字型可以自由修改、改造，製作衍生字型。修改或改造後的字型也必須同樣以 [SIL OFL](https://scripts.sil.org/OFL) 公開。

### 限制

- 在製作衍生字型時，字型名稱不可使用原有字型的「保留名稱」。本字型保留名稱「霞鶩」「LXGW」，基於本字型二次衍生的字型，名稱不可出現「霞鶩」或「LXGW」字樣；而在沒有對字型原始碼進行修改的情況下，重新編譯出來的字型，可以繼續使用本字型的保留名稱「霞鶩」「LXGW」。
- 根據 [SIL Open Font License 1.1](https://scripts.sil.org/OFL) 許可與條件中 第一條的規定， **禁止單獨出售字型檔案(OTF/TTF檔案)的行為。**
- 該字型不可在 [SIL Open Font License 1.1](https://scripts.sil.org/OFL) 以外的授權許可下發行。

**以上是摘錄的部分字型官方介紹文件**
***

## 基於Mkdocs的網站字型美化用法

1. 在mkdocs.yml中新增以下內容
```yaml
extra_css:
  - https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css
  # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-lite-webfont@1.1.0/style.css
  # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-tc-webfont@1.0.0/style.css
  # - https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-webfont@1.1.0/style.css
```

然後在extra.css中新增以下內容
```css
body {
      font-family: "LXGW WenKai", sans-serif;
      /* Lite version */
      /* font-family: "LXGW WenKai Lite", sans-serif; */
      /* TC version */
      /* font-family: "LXGW WenKai TC", sans-serif; */
      /* Screen version */
      /* font-family: "LXGW WenKai Screen", sans-serif; */
    }
```

四選一，mkdocs.yml和extra.css相互對應  

不懂extra_css的用法的可以看一下我寫的[extra_css部分](../Mkdocs/mkdocs2.md#extra_javascript-extra_css)教程

!!!tip
    切換字型後可能返回頂部按鈕會在個別瀏覽器顯示異常
    建議在extra.css里加入
    ```css
    button.md-top {
      font-family: LXGW WenKai; /* 修改字型 */
      font-size: 16px; /* 修改字型大小 */
      font-weight: bold; /* 修改字型粗細 */
      color: #518FC1; /* 修改字型顏色 */
    }
    ```