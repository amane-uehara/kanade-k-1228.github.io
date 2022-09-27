---
title: FPGAで動かしてみる
---

CPU をロジック IC で組む前に、FPGA でテストします。

## 回路設計

メインメモリの SRAM、プログラム ROM 用と、定数記憶用の EEPROM の使い方も確かめたいので、これらを FPGA に接続して使います。

### SRAM

[Renesas 71256SA](https://www.renesas.com/jp/ja/products/memory-logic/srams/asynchronous-srams/71256sa-50v-32k-x-8-asynchronous-static-ram)

### EEPROM

[Atmel AT28C64B](https://www.microchip.com/en-us/product/AT28C64B)

8192 x 8bit

## Verilog
