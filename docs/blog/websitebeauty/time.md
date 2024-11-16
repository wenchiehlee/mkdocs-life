---
title: 為MKdocs新增文章修訂時間戳
tags:
  - Mkdocs
comments: false  #評論，預設不開啟
---

![img](https://cn.mcecy.com/image/20240106/ee0ece547112ac1b67fb61ac7f9c1a90.png)  

參考方法：[git 修訂日期本地化](https://squidfunk.github.io/mkdocs-material/setup/adding-a-git-repository/#revisioning)

利用[git -revision-date-localized外掛](https://github.com/timvink/mkdocs-git-revision-date-localized-plugin)新增了對新增上次更新日期和在每個頁面底部建立文件的支援

## 安裝

```bash
pip install mkdocs-git-revision-date-localized-plugin
```

.github/workflows/下的ci.yml增加高亮的幾行：

```yaml hl_lines="14-15 26-28"
name: ci 
on:
  push:
    branches:
      - master 
      - main
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-python@v4
        with:
          python-version: 3.x
      - run: echo "cache_id=$(date --utc '+%V')" >> $GITHUB_ENV 
      - uses: actions/cache@v3
        with:
          key: mkdocs-material-${ env.cache_id }
          path: .cache
          restore-keys: |
            mkdocs-material-
      - run: pip install mkdocs-git-revision-date-localized-plugin
      - run: pip install mkdocs-git-authors-plugin
      # - run: pip install mkdocs-rss-plugin           
      - run: pip install mkdocs-material 
      - run: mkdocs gh-deploy --force
```

## 配置

然後將以下行新增到mkdocs.yml：
```yaml hl_lines="2 3"
plugins:
  - git-revision-date-localized:
      enable_creation_date: true
```

詳細的配置請看：[mkdocs-git-revision-date-localized-plugin](https://timvink.github.io/mkdocs-git-revision-date-localized-plugin/index.html)

可選的配置很多：
```yaml
plugins:
  - git-revision-date-localized:
      type: timeago #時間型別
      custom_format: "%d. %B %Y"  # 時間格式
      timezone: Europe/Amsterdam #時區
      locale: en #首選語言
      fallback_to_build_date: false #許回退到git 不可用時mkdocs build執行的時間
      enable_creation_date: true #是否啟用建立時間
      exclude:  #排除的頁面
          - index.md
      enabled: true #是否啟用
      strict: true
```

## 溫馨提示

對於大型單一的文件庫，執行`mkdocs serve`後的渲染速度明顯變慢，這是因為每次渲染都會檢查所有檔案的git歷史記錄。如果您不需要這個功能，可以透過將`enabled`設定為`false`來禁用它。