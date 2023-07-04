---
title: GitHubとPandocで超簡単にブログサイトを作る
date: 2021-06-20
description: Twitterが終わった今こそ昔のインターネットに回帰しよう。
---

自由度が高く保守性も高いブログシステム（このサイト）が無料で簡単に作れちゃいます。

## GitHub Pages

GitHub で静的サイトをホスティングできるサービスです。

1. [User Name].github.io という名前のリポジトリを作る。
2. リポジトリの Settings > Pages > Source を None から Main に変更。Main ブランチ以下が https://[UserName].github.io/ にデプロイされたよ。

## GitHub Actions

GitHubにPushされると、`.github/workflows/main.yml` に書かれたコマンドが実行されます。

[ソースコード](https://github.com/kanade-k-1228/kanade-k-1228.github.io/blob/main/.github/workflows/main.yml)

1. Ubuntu を立ち上げて Pandoc をインストール
2. ディレクトリ内の index.md を探して index.html に変換
3. gh-pages にデプロイ

## Pandoc

このシステムの肝がPandocです。いろんな種類の文書を変換してくれるソフトなのですが、今回は Markdown → HTML の変換をさせます。

aptでインストールできます。

```
sudo apt update
sudo apt -y install pandoc
```

変換コマンドは、これです。

```
pandoc -f markdown -t html --template=.common/template.html --toc --no-highlight --mathjax "${i}" >> "${i%.md}.html"
```

`-f` で入力フォーマット、`-t` で出力フォーマットを指定します。

`--template` でテンプレートのHTMLを渡します。

Pandocは、markdownの中身を読み取って、テンプレートに流し込みます。
また、メタデータは、Pandoc変数を使ってテンプレートに書き込みます。

Markdown の先頭に yaml 形式でメタデータを書くと、Pandoc変数に代入されます。

```yaml
---
title: たいとる
date: 2000-00-00
description: せつめい
---
```

テンプレート中に、

```html
$if(date)$
<meta name="dcterms.date" content="$date$" />
$endif$ $if(keywords)$
<meta name="keywords" content="$for(keywords)$$keywords$$sep$, $endfor$" />
$endif$ $if(description)$
<meta name="description" content="$description$" />
$endif$
<title>$if(title)$$title$$endif$ | Kanade's Website</title>
```

と書いておくと、`$title$`が、`たいとる` に置換されて書き込まれます。
上の例のように、if文を使うこともできます。

詳細はドキュメント：[Pandoc User’s Guide 日本語版](https://pandoc-doc-ja.readthedocs.io/ja/latest/users-guide.html)を見てください。

## 他の機能

### 数式

Mathjaxを使って、TeXの数式をきれいに表示します。

### Syntax Highlight

highlight-js を使う

1. https://highlightjs.org/download/ から、必要な言語をポチポチして、ダウンロードする
2. サイトの[どこか](https://github.com/kanade-k-1228/kanade-k-1228.github.io/tree/main/hljs)にjsとcssをおいておく
3. html中にhljsをロードするjsを書き込む
4. Pandocのデフォルトのハイライタを使わない設定にする `pandoc --no-highlight ~options~ index.md`

### OGP

- [参考](https://speakerdeck.com/kubotak/ssgnasaitodeogphua-xiang-wodong-de-sheng-cheng-sitai)

### 追加予定

- git にある差分から変更があったファイルだけ調べて変換をすると早くなるよね
- モバイル・デスクトップ両方にいい感じのスタイルを探す
- コメント欄を作る
