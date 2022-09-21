---
title: FPGAで動かしてみる
---

CPU をロジック IC で組む前に、FPGA でテストします。

## 回路設計

プログラム ROM 用の Flash、メインメモリの SRAM、定数記憶用の EEPROM の使い方も確かめたいので、これらを FPGA に接続して使います。

Flash と EEPROM への書き込み回路も作って、

んで、できた回路がこれです。

## Verilog
