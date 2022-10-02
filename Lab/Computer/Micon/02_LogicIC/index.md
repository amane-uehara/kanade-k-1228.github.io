---
title: ロジックICで組む
---

## 使えそうな部品

[共エレ 74](https://eleshop.jp/shop/pages/search_74.aspx)

| 品番                                                                                                                                        | 機能             | 通販                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [74HC273](https://toshiba.semicon-storage.com/info/TC74HC273AP_datasheet_ja_20140301.pdf?did=14587&prodName=TC74HC273AP)                    | DFF x8           | [秋月](https://akizukidenshi.com/catalog/g/gI-15412/) / [共エレ](https://eleshop.jp/shop/g/gT11541/)                      |
| [74HC574](https://toshiba.semicon-storage.com/info/TC74HC574AF_datasheet_ja_20140301.pdf?did=16412&prodName=TC74HC574AF)                    | DFF x8 3-state   | [共エレ](https://eleshop.jp/shop/g/gT11573/)                                                                              |
| [74HC541](https://toshiba.semicon-storage.com/info/TC74HC541AP_datasheet_ja_20140301.pdf?did=16392&prodName=TC74HC541AP)                    | 3-state x8       | [秋月](https://akizukidenshi.com/catalog/g/gI-03632/) / [共エレ](https://eleshop.jp/shop/g/gT11569/)                      |
| [74HC157](https://toshiba.semicon-storage.com/info/TC74HC157AP_datasheet_ja_20140301.pdf?did=10663&prodName=TC74HC157AP)                    | 2MUX x4          | [共エレ](https://eleshop.jp/shop/g/gT11505/)                                                                              |
| [74HC153](https://toshiba.semicon-storage.com/info/TC74HC153AP_datasheet_ja_20140301.pdf?did=10307&prodName=TC74HC153AP)                    | 4MUX x2          | [共エレ](https://eleshop.jp/shop/g/gT11502/)                                                                              |
| [74HC283](https://toshiba.semicon-storage.com/info/TC74HC283AP_datasheet_ja_20140301.pdf?did=15440&prodName=TC74HC283AP)                    | 4bit Adder       | [共エレ](https://eleshop.jp/shop/g/gT11544/)                                                                              |
| [74HC181](https://doctor-pasquale.com/wp-content/uploads/2017/05/74181-ALU.pdf)                                                             | 4bit ALU         | [アリエク](https://ja.aliexpress.com/i/32857333905.html)                                                                  |
| [74HC85](https://toshiba.semicon-storage.com/info/TC74HC85AF_datasheet_ja_20140301.pdf?did=16736&prodName=TC74HC85AF)                       | Compare          | [樫木](https://www.kashinoki.shop/?pid=122479107)                                                                         |
| [74HC193](https://toshiba.semicon-storage.com/info/TC74HC193AF_datasheet_ja_20140301.pdf?did=12347&prodName=TC74HC193AF)                    | 4bit bin cnt     | [共エレ](https://eleshop.jp/shop/g/gT11522/)                                                                              |
| [74HC191](https://toshiba.semicon-storage.com/info/TC74HC191AF_datasheet_ja_20140301.pdf?did=12133&prodName=TC74HC191AF)                    |                  | [共エレ](https://eleshop.jp/shop/g/gT11520/)                                                                              |
| SRAM                                                                                                                                        |                  |                                                                                                                           |
| [Renesas 71256SA](https://www.renesas.com/jp/ja/products/memory-logic/srams/asynchronous-srams/71256sa-50v-32k-x-8-asynchronous-static-ram) | 64k x 16 bit dip | [Mouser](https://www.mouser.jp/ProductDetail/Renesas-IDT/71256SA15TPGI?qs=SmUuHNCnblpoMjjkYC0fsw%3D%3D)                   |
| NOR Flash                                                                                                                                   |                  |                                                                                                                           |
| SST39VF200A                                                                                                                                 | 128k x 16 bit    | [Mouser](https://www.mouser.jp/ProductDetail/Microchip-Technology/SST39VF200A-70-4C-B3KE?qs=FY5l1181cfDUkmgn1A4zBw%3D%3D) |
| VRAM (Dual Port SRAM)                                                                                                                       |                  |                                                                                                                           |
|                                                                                                                                             |                  |                                                                                                                           |
| EEPROM                                                                                                                                      |                  |                                                                                                                           |
| [Atmel AT28C64B](https://www.microchip.com/en-us/product/AT28C64B)                                                                          | 8k x 8bit        |                                                                                                                           |

- MUX を 3 ステートで作るか、MUX の IC で作るか問題
  - 157 は A/B の選択に加え、出力を 0 にする ST ピンがある
  - 541 はピン配置が綺麗なので基板の配線が楽になる

入手性を考えて、できるだけ少ない種類で実装したい。
高機能 IC は入手性が悪いので単純な IC で作りたい。

## プログラムメモリ

- アドレス/16
- 入出力バス/16
- R/W 信号
- 書き込みクロック信号
- リセット信号

アドレスの一部が別のデバイスに割り当てられているので、スイッチする必要がある。

### 書き込み回路

プログラムメモリと定数メモリの EEPROM に書き込み回路

## ALU

74HC181 を使って、plus・minus・not・and・or・xor の演算ができる。

シフト演算は、MUX の 0 出力を使う？

左シフトは、(A and not B) plus A を使って、B = imm = 0 の lsi として実装

## ID

## PFC

### タイミングチャート

- ジャンプなし
  - COUNT UP に POSEDGE を入れる
- ジャンプあり
  - DATA INPUT に次のアドレスをセットして、!LOAD に NEGEDGE を入れる

## 部品メモ

- [ボックスピンヘッダ](https://akizukidenshi.com/catalog/g/gP-01137/)
- [フラットケーブル](https://akizukidenshi.com/catalog/g/gC-08931/)
