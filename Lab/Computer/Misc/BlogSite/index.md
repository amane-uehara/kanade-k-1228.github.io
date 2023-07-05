---
title: GitHubを使ったブログサイトの作り方
date: 2023-07-05
ogp: Lab/Computer/Misc/BlogSite
description: Twitterが終わった今こそ、各々がWebサイトを持っていた昔のインターネットに回帰しよう。
---

自由度が高く保守性も高いブログシステム（このサイト）が無料で簡単に作れちゃいます。

## Pandoc

Pandocはいろんな種類の文書を変換してくれるツールです。
今回は Markdown → HTML の変換をさせます。

### コマンドの使い方

Pandocはaptでインストールできます。

```
sudo apt update
sudo apt -y install pandoc
```

変換コマンドは、以下の通りです。

```
pandoc -f markdown -t html --template=template.html --toc --no-highlight --mathjax test.md >> test.html
```

`-f` で入力フォーマットを、`-t` で出力フォーマットを指定します。
このコマンドでは、入力形式にmarkdownを、出力形式にhtmlを指定しています。

`--template=` でテンプレートのHTMLを渡します。

`--toc` は目次を生成するオプションです。

`--no-highlight`と`--mathjax`については後述します。

最後に、変換するファイル `test.md` を渡してやります。

標準出力に出た変換結果をリダイレクトしてファイル `test.html` に保存します。

### テンプレートと変数

Pandocは、markdownの中身を読み取り、HTMLに変換し、
テンプレート中の `$body$` に流し込みます。

また、メタデータは、Pandoc変数を使ってテンプレートに書き込みます。

Markdown の先頭に `---` で囲まれた yaml でメタデータを書くと、Pandoc変数に代入されます。

以下に例を示します。
Markdownの先頭に、

```yaml
---
title: たいとる
date: 2000-00-00
description: せつめい
---
```

と書き、テンプレート中に、

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

また、上の例の`$keywords$`のように、if文を使って出力を制御することもできます。
この場合では、`keywords`変数が空なので、
`$if(keywords)$`~`$endif$`で囲まれた部分は出力されません。

詳細はドキュメント：[Pandoc User’s Guide 日本語版](https://pandoc-doc-ja.readthedocs.io/ja/latest/users-guide.html)を見てください。

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

## 数式

Mathjaxを使って、TeXの数式をきれいに表示します。

## コードのハイライト

highlight-js を使う

1. https://highlightjs.org/download/ から、必要な言語をポチポチして、ダウンロードする
2. サイトの[どこか](https://github.com/kanade-k-1228/kanade-k-1228.github.io/tree/main/hljs)にjsとcssをおいておく
3. html中にhljsをロードするjsを書き込む
4. Pandocのデフォルトのハイライタを使わない設定にする `pandoc --no-highlight ~options~ index.md`

## OGP

- [参考](https://speakerdeck.com/kubotak/ssgnasaitodeogphua-xiang-wodong-de-sheng-cheng-sitai)

## RSS ジェネレータ

[pandoc-rss-template](https://github.com/leosumi/pandoc-rss-template/)

RSS を YAML 形式で書くことができます。

各RSSタグの意味は[RSS 2.0タグリファレンス](http://www.openspc2.org/RSS/200/index.html)を見てください。

## 今後追加したい機能

- git にある差分から変更があったファイルだけ調べて変換をすると早くなるよね
- モバイル・デスクトップ両方にいい感じのスタイルを探す
- コメント欄を作る
