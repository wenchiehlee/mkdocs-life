---
title: Git 實用技巧
tags:
  - 技術分享
---
!!! info
    原文地址:[Git 實用技巧](https://www.iszy.cc/posts/git/#more){target="_blank"}

# Git 實用技巧
## 一、基本操作
### 1. 新建 git 倉庫
```git
git init
```

![](https://img.iszy.xyz/1669185106451.png)  

```git
git init -b main

git config --global init.defaultBranch main

git branch -m main
```


### 2. 克隆遠端倉庫
```git
git clone http://git.example.com/someone/test.git

git clone http://git.example.com/someone/test.git test

git clone http://git.example.com/someone/test.git --depth=1 -b main
```

### 3. 提交程式碼
```
git add -a

git add -u

git add .

git commit

git commit -m "first commit"

git commit -am "first commit"
```


### 4. 檢視倉庫狀態
 
```git
git status
```

![](https://img.iszy.xyz/1669185760241.png)  

```
git status -s
```

![](https://img.iszy.xyz/1669185789446.png)  


### 5. 檢視提交歷史

<https://git-scm.com/docs/git-log>{target="_blank"}

```git
git log
```

![](https://img.iszy.xyz/1669185798311.png)

### 6. 新建分支
```git
git branch test

git checkout test

git checkout -b test
```

![Alt text](https://img.iszy.xyz/1669185814401.png)

### 7. 合併分支
```git
git checkout main

git merge test
```

![Alt text](https://img.iszy.xyz/1669185829746.png)

### 8. 刪除分支
```git
git branch -d test-not-need
```

![Alt text](https://img.iszy.xyz/1669185836945.png)  

### 9. 合併衝突

![Alt text](https://img.iszy.xyz/1669185846981.png)  

當兩個分支都對同一行進行了修改，git 便會產生衝突，並標記為未合併

![Alt text](https://img.iszy.xyz/1669185854676.png)  

此時將每個檔案進行修改，確認最後的內容，使用 git add 方法標記為衝突已解決
```git
git add .\A.txt
```
在所有檔案的衝突均已解決後，使用 commit 提交此次修改。

![Alt text](https://img.iszy.xyz/1669185864622.png)

```git
git merge --abort
```

### 10. 遠端倉庫

```git
git remote
```

預設應該為空

```git
git remote add origin http://git.example.com/someone/test.git

git push origin main

git fetch --all

git fetch origin

git branch --set-upstream-to=origin/main main

git branch -u origin/main main
```


![Alt text](https://img.iszy.xyz/1669186022128.png)

```
git push -u origin main

git pull

git pull origin main
```

## 二、常見技巧  

### 1. 臨時儲存成果

```
git stash
```


![Alt text](https://img.iszy.xyz/1669186037294.png)  

```git
git stash pop
```

![Alt text](https://img.iszy.xyz/1669186045214.png)

### 2. 合併分支靈活選擇 rebase/merge

```git
git merge test

git rebase test
```


![Alt text](https://img.iszy.xyz/1669186058175.png)

### 3. cherry-pick
適合 hotfix

```git
git cherry-pick 12d654f1d701cbf7cd9abb98ce84eeef460a24a7
```

![Alt text](https://img.iszy.xyz/1669186102974.png)
![Alt text](https://img.iszy.xyz/1669186072778.png)

### 4. 修改上次提交

```
git commit --amend
```

會同時提交暫存的檔案

### 5. 取消檔案修改
```git
git checkout .\C.txt
```


![Alt text](https://img.iszy.xyz/1669186116701.png)

### 6. 棄用提交

```
保留檔案
git reset --soft 12d654f1d701cbf7cd9abb98ce84eeef460a24a7

丟棄修改
git reset --hard 12d654f1d701cbf7cd9abb98ce84eeef460a24a7
```

### 7. 補丁檔案
```git
git
git diff [file] > a.patch
git apply a.patch
```

