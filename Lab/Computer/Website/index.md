% Pandoc と GitHub で超簡単にサイトを作る
%
% 2021-06-20

自由度が高く保守性も高いブログシステムができたのでメモしておきます

## システムの使い方

1. 記事を Markdown で書く
2. Git に Push すると HTML に変換＆デプロイ
3. で　ぎ　だ　！（アル中カラカラ

## Pandoc

- いろんな種類の文書を変換してくれる神
- 今回は Markdown → HTML の変換をさせる
- テンプレート上に流しこんでくれる

### テンプレート.HTML


## GitHub Pages
GitHub で静的サイトを作れる．サーバーいらないので楽やで．

1. (User Name).github.io という名前のリポジトリを作る．
2. リポジトリの Settings > Pages > Source を None から Main に変更．Main ブランチ以下が https://(UserName).github.io/ にデプロイされたよ．

## GitHub Actions

- [ソースコード（これ見たらだいたいわかるはず）](https://github.com/kanade-k-1228/kanade-k-1228.github.io/blob/main/.github/workflows/main.yml)
- Push されるとディレクトリ内を全部探索して Markdown を HTML に変換
- gh-pages にデプロイ

## 課題

- diff から変更があったファイルだけ調べて変換をすると早くなるよね
  