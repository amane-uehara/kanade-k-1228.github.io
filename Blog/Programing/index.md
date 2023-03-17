% プログラミング勉強したいんだけど何したらいいんって聞かれたときに見せるページ
%
%


よく聞かれるので考えをまとめておく

## プログラミングをおすすめしたい人

- 作りたいものがある人
- こだわりが強い人
- バックグラウンド / 別の分野の知識がある人
- 思想（世界はこうあるべき，みたいな）を持ってる人

> 変態に技術を与えた結果がこれだよ！

## プログラミングできたほうが有利？

- 「プログラミングができる」だけだとダメなのか？
  - 世の中で稼働しているプログラムが増えれば保守要員が必要
  - そもそも慢性的な人手不足なので
  - ただ，クリエイティブなことをしたいならこだわりがあると強い
- プログラミング的な思考は便利
  - [教養としてのプログラミング](#教養としてのプログラミング)

## どの言語がおすすめなん？

何かひとつをしっかり勉強しておけば転向しても応用できる．モチベーションに合わせて選べば良いと思う． ~~艦これの初期艦から性癖がわかるやつ~~

どうやれば作りたいものが作れるか簡単に説明します（独断と偏見でおすすめな方法を書きます）

### 共通のツール

#### 開発環境

- プログラムを作るためのツールを入れたパソコンのこと
  - エディタ（コードを書くための凄いメモ帳）
  - コンパイラ or ランタイム（プログラムを実行してテストするためのツール）
  - デバッガ（プログラムのバグを探すためのツール）

#### GitHub

- プログラムの変更履歴を記録できる
  - 資料.pptx, 資料改.pptx, 資料最終版.pptx, 資料最終版2.pptx,,, みたいなことをしなくてよくなる
- プログラムの共同編集が圧倒的に楽になる

#### Linux

- OS (Windows, Mac, ) のひとつ
- プログラマは基本的に Linux を使っているので，だいたいツールが Linux 向けに作られてる
- ただ最近は Windows でも十分な環境が作れるようになってきてはいる

### Webサイトを作りたい

- ○ このウェブサイトみたいなブログ
- ○ Appleのサイト
- × 2ch
- × Amazon

いつだれが見ても同じサイトは作れます．逆に，ユーザごとに違う情報を表示したり，ログインがあるようなサイトはこの方法では作れません．（次項）

Webサイトは文字と画像を縦の巻物に配置して作ります．

1. HTML
   - 非常に質素なサイトが作れます
2. CSS
   - サイトを装飾します
   - 簡単なアニメーションなど，シャレたサイトは HTML + CSS でだいたいできます
3. ※ SVG
   - 凝ったデザインや動きをつけたいときに使えます
   - 高画質なイラストを表示できる
   - デザイナーをやりたい場合は勉強しとくと良いと思われる
4. JavaScript
   - 複雑な機能をつけたいときに使います
   - ログインとか
5. サーバー
   - 作ったウェブサイトを公開します
   - GitHubPagesを使えばタダで簡単に公開できます

### Webアプリを作りたい

- ○ SNS
- ○ パズルゲーム 
- × グラフィックがすごい対戦ゲーム
- × 高速なゲーム


ユーザ間でデータをやりとりしたり，たくさんのデータを扱うにはサーバーが必要です．

HTML, CSS, JavaScript は必要 ↑

1. Typescript
   - JavaScript の問題を
2. React 

### スマホアプリを作りたい

Webアプリと同じ方法で作ることができます．

### ゲームを作りたい

フレームワーク：Unity

言語：C#

### シュミレーションをしたい

- 力学シュミレーションなら Unity が簡単
- 科学計算なら　Python, Go
- 統計だと R がいいらしい（あんま詳しくない

### ハッカーみたいに黒い画面をいじりたい

(๑•ૅㅁ•๑) 

あの人たちは OS・ネットワーク といった，情報システムの根幹にある技術を駆使してます．


### リアルで動くものを作りたい

ロボットとかIoTモノとか

1. Arduino
2. RaspberryPi
3. C / C++ / Rust

### コンピュータを作りたい

(๑•ૅㅁ•๑)


## Web上の教材

![](./gugurekas.png)

1. チュートリアル
   - とりあえず 言語名 + チュートリアル で調べてると，公式のチュートリアルが出てくる
   - Youtube でチュートリアルの実況プレイがある
   - だいたい英語だけど画面を見ながら
2. Qiita
   - 日本語記事が多い
3. リファレンス・ドキュメント
   - 最後はこれ
   - 必ずどこかに答えがある~~はず~~
   - ただ読むのが難しい
   - Web系なら [MDN](https://developer.mozilla.org/ja/)

## 教養としてのプログラミング

- プログラミング言語は強力な思考・認知のフレームワーク
- 過去の最先端の研究内容が高校で教えられるようになったようになったのは，フレームワークが充実したから
  - ニュートンの原論文は普通に難しい
    - 詳細は [ファインマンさん,力学を語る](https://www.amazon.co.jp/dp/4000059394/ref=cm_sw_r_tw_dp_044MTSR28NSYPFY0Y8B3)
  - 数学が発達して $F=m\ddot{a}$ と簡単に扱えるようになった
  - 思考が数式として **記号化** されたから
  - 複雑な思考を，記号の機械的処理に置き換えた
    - integrate f with respect to x is ~
    - $\int f dx$
  - より本質的な部分にエネルギーを割ける
- プログラミング言語で思考を記号化できる

