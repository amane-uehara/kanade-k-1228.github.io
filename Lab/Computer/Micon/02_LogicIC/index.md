---
title: ロジックICで組む
---

## 使えそうな部品

| 74      | 機能           | 通販                                                     |
| ------- | -------------- | -------------------------------------------------------- |
| 74HC273 | DFF x8         | [秋月](https://akizukidenshi.com/catalog/g/gI-15412/)    |
|         |                | [共エレ](https://eleshop.jp/shop/g/gT11541/)             |
| 74HC574 | DFF x8 3-state | [共エレ](https://eleshop.jp/shop/g/gT11573/)             |
| 74HC541 | 3-state x8     | [秋月](https://akizukidenshi.com/catalog/g/gI-03632/)    |
|         |                | [共エレ](https://eleshop.jp/shop/g/gT11569/)             |
| 74HC157 | 2MUX x4        | [共エレ](https://eleshop.jp/shop/g/gT11505/)             |
| 74HC153 | 4MUX x2        | [共エレ](https://eleshop.jp/shop/g/gT11502/)             |
| 74HC283 | 4bit Adder     | [共エレ](https://eleshop.jp/shop/g/gT11544/)             |
| 74HC181 | 4bit ALU       | [アリエク](https://ja.aliexpress.com/i/32857333905.html) |
| 74HC85  | Compare        | [樫木](https://www.kashinoki.shop/?pid=122479107)        |

### SRAM

64k x 16

[Renesas 71256SA](https://www.renesas.com/jp/ja/products/memory-logic/srams/asynchronous-srams/71256sa-50v-32k-x-8-asynchronous-static-ram)

### Dual Port SRAM

### EEPROM

[Atmel AT28C64B](https://www.microchip.com/en-us/product/AT28C64B)

8192 x 8bit

## メモリ回路

- アドレス/16
- 入出力バス/16
- R/W 信号
- 書き込みクロック信号
- リセット信号

アドレスの一部が別のデバイスに割り当てられているので、スイッチする必要がある。

### 書き込み回路

プログラムメモリと定数メモリの EEPROM に書き込み回路

## ALU

## ID

## PFC
