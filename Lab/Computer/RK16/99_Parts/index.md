---
title: 使用する部品
---

## μPD 431016

　65536 word x 16 bits の NEC製SRAMです！サイズがぴったり！[若松](https://wakamatsu.co.jp/biz/products/detail.php?product_id=17010392) でいっぱい売ってる！

### 基本情報

- [データシート](./doc/UPD431016.pdf)
- アクセス時間は **15 ns**
- 電源電圧は 5 V
- 動作時消費電力は 240 mA
- パッケージは 44 Pin SOJ

### 使い方

標準的なSRAMの使い方と同じです。

ピン名の前の`!`は負論理を意味しています。名前の意味と逆ということです。

|     |              | 0            | 1            |
| --- | ------------ | ------------ | ------------ |
| !CS | Chip Sellect | 入出力可能   | HiZ          |
| !WE | Write Enable | 書き込み不可 | 書き込み状態 |
| !LB | Lower Byte   |              | IO1-IO8 HiZ  |
| !UB | Upper Byte   |              | IO9-IO16 HiZ |
| !OE | Out Enable   |              | IO HiZ       |

LB UB は 16 bit のIOを 8 bit ずつ制御できる信号です。

#### 読み出しサイクル

1. `!CS=!LB=!UB=0` `!OE=0` `!WE=1`
2. A0-A15 にアドレスを入力
3. tOH > 5 ns 間は前の出力が残る
4. tAA < 15 ns 後にはアドレスから読みだされる

#### 書き込みサイクル

1. `!CS=!LB=!UB=0` `!OE=1` `!WE=0`
2. A0-A15 にアドレスを、 IO0-IO15 にデータをセットする
3. `!WE=1` 立ち上がりでデータが書き込まれます

### RK16での使い方

RK16はRRWRの4ステージを繰り返すので、このような信号をSRAMの制御に与えればいいです。

![](./img/sram_timing.dio.svg)

また、アドレスの一部を別のデバイスに振り分けるために、アドレスの上位をデコーダICにつなぎます。

## ROM

## 74HC191

　バイナリカウンタです。

## 74HC181 & 74HC182