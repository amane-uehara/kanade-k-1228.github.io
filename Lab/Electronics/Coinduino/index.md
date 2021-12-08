% 超小型 Arduino 互換ボード Coinduino 製作記
%
%

- 超小型 (3cm x 3 cm)
- リチウムバッテリー搭載
- ワイヤレス給電可能
  - 水密
- ATMEGA 32U4 搭載
  - Arduino Leonald 互換

## 回路構成

![](./img/about.dio.svg)

## 部品選定

### 充電 IC

- ワイヤレス給電・USB 給電の両方を制御できる
- リチウム電池を充電できる
- できればレギュレータも内臓しててほしい

- Renesas
- AD
  - [LTC4124](https://www.analog.com/en/products/LTC4124.html)
  - [LTC4126](https://www.analog.com/en/products/ltc4126.html)
    - 出力 1.2 V なので ✕
- TI
  - [BQ5105xB](https://www.tij.co.jp/product/jp/BQ51050B)
    - 充電電圧ごと型番の x が違う
- ST
  - [STWLC68](https://www.st.com/ja/power-management/stwlc68.html)
- SEMTECH
  - [TS51224](https://www.semtech.com/products/wireless-charging/linkcharge-ics/ts51224)

AnalogDevices の LTC4123 ！君に決めた！

単価 851 円ってマ？壊れるなぁ…
[Digikey](https://www.digikey.jp/ja/products/detail/analog-devices-inc/LTC4124EV-TRMPBF/9990337)

[TRMPBF suffix vs. TRPBF suffix in Linear Technology parts](https://forum.digikey.com/t/trmpbf-suffix-vs-trpbf-suffix-in-linear-technology-parts/218)

### バッテリー

リチウムのボタン電池

ホルダー

リチウムポリマーのボタン電池はあんまりないみたいだね…

### レギュレータ

まず回路全体の消費電力を推定する

## PCB 設計

### 部品を揃える

### 回路図を引く

### ボード図を引く

PCB 業者のデザインルールを確認

サーマルパッドをはんだ付けするために、via を打ち、レジストを塗らない

## 発注＆実装
