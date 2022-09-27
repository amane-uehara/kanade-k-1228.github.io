---
title: ロジックICで組む
---

## 使えそうなロジック IC

### D フリップフロップ

- 74HC273
  - 8 回路入り DFF
  - [秋月](https://akizukidenshi.com/catalog/g/gI-15412/)
  - [共エレ](https://eleshop.jp/shop/g/gT11541/)
- 74HC574
  - 8 回路入り DFF
  - 3 ステート出力
  - [共エレ](https://eleshop.jp/shop/g/gT11573/)

### 3 ステート

- 74HC541
  - 8 回路入り
  - [秋月](https://akizukidenshi.com/catalog/g/gI-03632/)
  - [共エレ](https://eleshop.jp/shop/g/gT11569/)

### マルチプレクサ

- 74HC157
  - 2 入力 4 回路入り
  - 16bit の MUX には、4 個必要になる
  - [共エレ](https://eleshop.jp/shop/g/gT11505/)
- 74HC153
  - 4 入力 2 回路入り
  - [共エレ](https://eleshop.jp/shop/g/gT11502/)

### 加算器

- 74HC283
  - [共エレ](https://eleshop.jp/shop/g/gT11544/)

### ALU

- 74HC181
  - 地球上に現存してる？
  - [アリエク](https://ja.aliexpress.com/i/32857333905.html)

### 比較演算器

- 74HC85
  - [樫木](https://www.kashinoki.shop/?pid=122479107)
  - べつにわざわざ専用 IC を使うまでもないか…

### SRAM

[Renesas 71256SA](https://www.renesas.com/jp/ja/products/memory-logic/srams/asynchronous-srams/71256sa-50v-32k-x-8-asynchronous-static-ram)

### EEPROM

[Atmel AT28C64B](https://www.microchip.com/en-us/product/AT28C64B)

8192 x 8bit

## Verilog
