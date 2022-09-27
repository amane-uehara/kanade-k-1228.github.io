---
title: 自作マイコン用CPU、RISC-K
---

RISC-V をベースに、16bit 向けに小細工をしました。

## レジスタ

|        |      | 機能                 | 保持 |
| ------ | ---- | -------------------- | ---- |
| x0     | zero | ゼロ固定             | -    |
| x1     | ra   | 戻りアドレス         | ✕    |
| x2     | sp   | スタック・ポインタ   | 〇   |
| x3     | gp   | グローバル・ポインタ | 〇   |
| x4-7   | s0-3 | 保存レジスタ         | 〇   |
| x8-11  | t0-3 | 一時レジスタ         | ✕    |
| x12-15 | a0-3 | 引数・返値           | ✕    |
| -      | pc   | プログラムカウンタ   | -    |

## 命令セット

|       | rd  | rs1 | rs2 | imm |
| ----- | --- | --- | --- | --- |
| add   | 〇  | 〇  | 〇  | -   |
| addi  | 〇  | 〇  | -   | 〇  |
| load  | 〇  | 〇  | -   | 〇  |
| store | -   | 〇  | 〇  | 〇  |
| beq   | -   | 〇  | 〇  | 〇  |

### 命令フォーマット

|     | 15-12 | 11-8 | 7-4 | 3-0 |
| --- | ----- | ---- | --- | --- |
|     | OPC   | rd   | rs1 | rs2 |

16bit に即値フィールドが取れない問題

RISC-V では特殊な機能をもったレジスタはなく、命令の引数に自由なレジスタをとることができる。
対して x86 では特定の機能ってレジスタが強固に結びついている。
自由度が上がるものの実際はコンパイラは機能とレジスタの対応をとる。
実装上、そうしたほうが良いプロセッサ現在多い。

なので、命令

### レジスタ間演算

> add rd, rs1, rs2
>
> x[rd] = x[rs1] + x[rs2]

|     | 演算                   |
| --- | ---------------------- |
| +   | add                    |
| -   | sub                    |
| ^   | xor                    |
| \|  | or                     |
| &   | and                    |
| <   | less than              |
| <   | less than unsigned     |
| >>  | shift left logical     |
| >>  | shift left arithmetic  |
| <<  | shift right logical    |
| <<  | shift right arithmetic |

### 即値演算

> addi rd, rs, imm_8
>
> x[rd] = x[rs] + imm_8

8bit の即値と演算します。

16bit で演算する場合は即値ロードをした後演算をする。

### 即値ロード

> lim rd, imm_16
>
> x[rd] = imm_16

### メモリアクセス

> load rd, rs1, imm_12
>
> x[rd] = m[ x[rs1] + imm_12 ]

メモリの「レジスタ rs + 即値 imm_12 」番地の値を、レジスタ rd に書き込む。

rs を zero レジスタとすることで、絶対参照ができる。

> store rs1, rs2, imm_12
>
> m[ x[rs1] + imm_12] = x[rs2]k

レジスタ rd の値を、メモリの「レジスタ rs + 即値 imm 」番地に書き込む。

### 条件分岐

> beq rs1, rs2, imm_12

if(x[rs1]==x[rs2]) PC = PC + 4 + imm_12
(else PC = PC + 4)

> bneq rs1, rs2, imm_12

### ジャンプ

> jal rd, offset

1. 戻りアドレス（PC + 4）を rd に保存

   x[rd] = PC + 4

2. 「PC + offset」にジャンプ

   PC += offset

> jalr rd, rs1, offset

1. 戻りアドレス（PC + 4）を rd に保存

   x[rd] = PC + 4

2. 「レジスタ rs1 + offset」にジャンプ

   PC = x[rs1] + offset

### 割り込み

> intr xxxxx

割り込みフラグを設定する。

### サブルーチン

[参考](https://inst.eecs.berkeley.edu/~cs61c/resources/RISCV_Calling_Convention.pdf)

| ASM            |                                                          |
| -------------- | -------------------------------------------------------- |
| subi sp sp 5   | 退避するレジスタ数＋引数の数だけ、スタックポインタを減算 |
| store s0 0(sp) | レジスタをスタックに退避                                 |
| store s1 1(sp) |                                                          |
| store s1 2(sp) |                                                          |
| store s1 3(sp) |                                                          |
| store ra 4(sp) | リターンアドレスも退避                                   |
| loadi a0 334   | 引数をレジスタにセット                                   |
|                | レジスタが足りなければスタックにセット                   |
| jal            | サブルーチンにジャンプ                                   |
|                |                                                          |
| :              | サブルーチンの処理                                       |
|                |                                                          |
| load ra 0(sp)  | レジスタを復元                                           |
| load ra 1(sp)  |                                                          |
| load ra 2(sp)  |                                                          |
| load ra 3(sp)  |                                                          |
| load ra 4(sp)  | リターンアドレスを復元                                   |
| addi sp sp 5   | スタックポインタを加算                                   |
| jr ra          | PC を戻す                                                |

### 割り込み処理

| ASM              |                                |
| ---------------- | ------------------------------ |
| subi sp 16       | 全てのレジスタをスタックに退避 |
| store x1 0(sp)   |                                |
| :                |                                |
| store x15 14(sp) |                                |
| jal              | ジャンプ                       |
|                  |                                |
| :                | 割り込み処理を行う             |
|                  |                                |
| load x1 0{sp}    | レジスタを復元                 |
| :                |                                |
| load x15 14(sp)  |                                |
| jr ra            | PC を戻す                      |

### 割り込み

## メモリ空間

| Addr | Function |
| ---- | -------- |
|      | IO       |
|      | VRAM     |
|      | EEPROM   |
|      | RAM      |

### IO

各 IO に必要なパラメタ数がわからないので、仮です。

#### GPIO

#### ADC

#### DAC

#### PWM

#### UART

#### SPI

#### I2C

### VRAM (Dual access SRAM)

表示の候補として、

- 300 x 400 画素 : RGB 4 段階 (6bit)
- 300 x 400 画素 : 白黒 2 段階 (1bit)
- テキスト表示（フォントを EEPROM に置いておく）

### ROM (EEPROM)

### RAM (SRAM)

## 回路

![](./img/arch.dio.svg)

### ID

命令デコーダ。機械語命令をもとに、マルチプレクサを切り替えて、データの経路を決める。

### Next-PC
