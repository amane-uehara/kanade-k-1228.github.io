---
title: 5000 円で作るリフロー装置
date: 2022-08-23
keywords: リフロー, 表面実装, ホットプレート
---

## 回路図

![](img/reflow_schematic.png)

|            |                                                                                 | 値段      | 備考                     |
| ---------- | ------------------------------------------------------------------------------- | --------- | ------------------------ |
| HOTPLATE   | [ホットプレート](https://amzn.asia/d/dPVi2IT)                                   | 1518      | 750W                     |
|            | [SSR キット](https://akizukidenshi.com/catalog/g/gK-00203/)                     | 250       |                          |
| IC1        | [フォトトライアック](https://akizukidenshi.com/catalog/g/gI-07634/)             | -         | SSR キット               |
| IC2        | [秋月 Arduino](https://akizukidenshi.com/catalog/g/gK-10347/)                   | 950       |                          |
| Q1         | [トライアック](https://akizukidenshi.com/catalog/g/gI-01017/)                   | -         | SSR キット               |
| Q2         | [MOSFET](https://akizukidenshi.com/catalog/g/gI-15751/)                         | 50        | お好きな MOSFET をどうぞ |
| R1         | 100Ω                                                                            | -         | SSR キット               |
| R2         | 330Ω                                                                            | -         | SSR キット               |
| R3         | [100Ω](https://akizukidenshi.com/catalog/g/gR-25101/)                           | 100/100=1 | MOSFET ゲート抵抗        |
| R4         | [10kΩ](https://akizukidenshi.com/catalog/g/gR-25103/)                           | 100/100=1 | MOSFET ゲート-ソース抵抗 |
| R5         | [75Ω 金属皮膜](https://akizukidenshi.com/catalog/g/gR-16620/)                   | 300/100=3 | サーミスタ分圧           |
| C1         | [0.1μF セラコン](https://akizukidenshi.com/catalog/g/gP-10149/)                 | 20        | モーターノイズ用         |
| ZNR        | [バリスタ](https://akizukidenshi.com/catalog/g/gP-12563/)                       | -         | SSR キット               |
|            | [ターミナル](https://akizukidenshi.com/catalog/g/gP-01306/)                     | 20\*3=60  |                          |
| FAN        | [DC ファン](https://akizukidenshi.com/catalog/g/gP-16828/)                      | 280       | DC 5V 0.3A               |
| THERMISTOR | [NT サーミスタ](https://akizukidenshi.com/catalog/g/gP-11896/)                  | 50        |                          |
| POWER      | [5V 電源](https://akizukidenshi.com/catalog/g/gM-06096/)                        | 600       |                          |
| POWER      | [DC ジャック](https://akizukidenshi.com/catalog/g/gC-09408/)                    | 30        |                          |
|            | [ヒートシンク（トライアック用）](https://akizukidenshi.com/catalog/g/gP-05050/) | 60        |                          |
|            | [ヒートシンク（FET 用）](https://akizukidenshi.com/catalog/g/gP-05052/)         | 35        | 不要かも                 |
|            | [絶縁放熱シート](https://akizukidenshi.com/catalog/g/gP-12791/)                 | 20\*2=40  |                          |
|            | [M3 プラネジ](https://akizukidenshi.com/catalog/g/gP-03583/)                    | 400/100=4 |                          |
| 合計       |                                                                                 | 3952      |                          |

[一括注文リンク＠秋月](https://akizukidenshi.com/catalog/cart/cart.aspx?goods=K-00203,K-10347,I-15751,R-25101,R-25103,R-16620,P-10149,P-01306,P-16828,P-11896,M-06096,C-09408,P-05050,P-05052,P-12791,P-03583&qty=1,1,1,1,1,1,1,3,1,1,1,1,1,1,2,1)

K-00203 1
K-10347 1
I-15751 1
R-25101 1
R-25103 1
R-16620 1
P-10149 1
P-01306 3
P-16828 1
P-11896 1
M-06096 1
C-09408 1
P-05050 1
P-05052 1
P-12791 2
P-03583 1

## メモ

![](img/about.dio.svg)

制御プログラムは、Web Serial API を使ってブラウザで実装する。

SVG on React で温度グラフをリアルタイムで描画。

![](img/ui.dio.svg)

### 温度制御

- 温度プロファイル
  1. △ 2 ~ 3 °C/sec
  2. 150 ~ 175 °C / 60 ~ 120 sec
  3. △ 4 °C/sec
  4. 250 °C / 60 ~ 90 sec
  5. ファンで急冷
- サーミスタの特性
  - [データシート](https://www.semitec.co.jp/uploads/2021/11/nt_thermistor2015.pdf)
  - exp(exp())っぽい特性
  - 160 度で 134Ω
  - 260 度で 23Ω
  - 47Ω ぐらいの抵抗を使うとよさそう？
  - ダイナミックレンジを広げたいなら、トランジスタの exp 特性を使うのがよさそう

### プログラム

1. GUI でプロファイル指定
2. RUN
3. 温度モニタリング
