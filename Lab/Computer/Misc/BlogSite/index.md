% Pandoc と GitHub で超簡単にサイトを作る
%
% 2021-06-20

自由度が高く保守性も高いブログシステムがタダで作れます

## システムの使い方

1.  記事を Markdown で書く
1.  Git に Push すると HTML に変換 & デプロイ
1.  で　ぎ　だ　！（アル中カラカラ

## Pandoc

- いろんな種類の文書を変換してくれる神
- 今回は Markdown → HTML の変換をさせる
- テンプレート上に流しこんでくれる

### テンプレート.HTML

## GitHub Pages

GitHub で静的サイトを作れる。楽。

1. [User Name].github.io という名前のリポジトリを作る。
2. リポジトリの Settings > Pages > Source を None から Main に変更。Main ブランチ以下が https://[UserName].github.io/ にデプロイされたよ。

## GitHub Actions

[ソースコード](https://github.com/kanade-k-1228/kanade-k-1228.github.io/blob/main/.github/workflows/main.yml)

Push されると、

1. Ubuntu を立ち上げて Pandoc をインストール
2. ディレクトリ内の index.md を探して index.html に変換
3. gh-pages にデプロイ

これをリポジトリの `/.github/workflows/` 以下に置くと、勝手に実行してくれます。

## 課題

- git にある差分から変更があったファイルだけ調べて変換をすると早くなるよね
- OGP を設定する
  - [参考](https://speakerdeck.com/kubotak/ssgnasaitodeogphua-xiang-wodong-de-sheng-cheng-sitai)
- モバイル・デスクトップ両方にいい感じのスタイルを探す
- コメント欄を作る
