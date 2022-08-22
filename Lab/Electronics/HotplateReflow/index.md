---
title: 5000 円で作るリフロー装置
date: 2022-08-23
keywords: リフロー, 表面実装, ホットプレート
---

## 部品

- [ホットプレート](https://amzn.asia/d/dPVi2IT)
  - 1500 円
  - 750W
- [ソリッドステートリレー](https://akizukidenshi.com/catalog/g/gK-00203/)
  - 250 円
  - 25A
  - 要ヒートシンク
- [6V トランス](https://akizukidenshi.com/catalog/g/gP-08731/)
  - 1050 円
- ブリッジダイオード
- レギュレータ 7805
- サーミスタ
  - 50 円
- [Arduino](https://akizukidenshi.com/catalog/g/gK-10347/)
  - 950 円
- ファン
  - 500 円
- ファン制御用 MOSFET

## しくみ

![](img/about.dio.svg)

AC アダプタ買った方が安くないか？？？？？？←

制御プログラムは、Web Serial API を使ってブラウザで実装する。

SVG on React でグラフをリアルタイムで描画。

![](img/ui.dio.svg)
