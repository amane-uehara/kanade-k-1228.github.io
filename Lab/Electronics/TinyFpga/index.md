# TinyFPGA BX の使い方

TinyFPGA BX は Lattice 社製の FPGA、iCE40LP8K を搭載した開発ボードです。

[せんごくネット通販 - TinyFPGA BX](https://www.sengoku.co.jp/mod/sgk_cart/detail.php?code=EEHD-5C6J)

[TinyFPGA BX ユーザーガイド](https://tinyfpga.com/b-series-guide.html)

## ブートローダのアップデート

Python と pip が必要なのでインストールしておきましょう。

TinyFPGA に必要なツールをインストールします。依存するモジュールをインストールしろと言われたらインストールします。

```
pip install tinyprog
```

TinyFPGA ボードを PC に接続して、ドライバが認識されたのを確認します。

Windows 10 以前のバージョンを使っている場合、[Virtual Serial Port](https://www.pjrc.com/teensy/usb_serial.html) が必要なようです。

TinyFPGA のブートローダのアップデートをします。

```
tinyprog --update-bootloader
```

※ TinyFPGA BX にはプログラマ基板が不要です。その代わり、FPGA の一部にプログラマ回路が書き込まれています。間違えて上書きしてしまった場合、Arduino を使ってブートローダを復元することができます。[Programming with an Arduino](https://github.com/tinyfpga/TinyFPGA-B-Series/tree/master/programmer_arduino)

## 開発環境

- Lattice の iCEcube2 ← ユーザーガイドに書かれてる方法
- APIO (Atom プラグイン)
  - [APIO ドキュメント](https://apiodoc.readthedocs.io/en/stable/source/installation.html)
- Icestorm
  - [tinyFPGA-BX board に Terminal のみで build とボードへの書き込みを行った](https://qiita.com/KYhei/items/0b8fb029bb8813c8cbd6)
- Icestudio ← 今回はこれ

[Icestudio](https://icestudio.io/#lk-download)をインストールします。インストーラに従うだけなので省略。

Icestudio を開いて、

ボードの選択画面が出てきたら、TinyFPGA BX を選択。

右下のポップアップに従って必要なツールをインストール。

## L チカ

サンプルコードから、L チカを選択。

![](./img/01.png)

Convert を選択。

![](./img/02.png)

LED を接続するピンを選択。

![](./img/03.png)

TinyFPGA ボードを接続して、右下の Upload をクリック。

![](./img/04.png)

L チカしました。

<iframe width="560" height="315" src="https://www.youtube.com/embed/hzZ5VPpSlpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

※ うまくいかない場合、**USB アダプタに接続して電源のみを供給** すると、L チカするはずです。PC に接続すると、ブートローダは通信待機状態で起動してしまい、ユーザーイメージを読み込みません。
