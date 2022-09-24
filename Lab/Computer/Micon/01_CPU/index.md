---
title: 自作マイコン用CPU、RISC-K
---

RISC-V をベースに、16bit 向けに小細工をしました。

## レジスタ

|     |      | Func                 | 保持 |
| --- | ---- | -------------------- | ---- |
| x0  | zero | ゼロ固定             | -    |
| x1  | ra   | 戻りアドレス         | ✕    |
| x2  | sp   | スタック・ポインタ   | 〇   |
| x3  | gp   | グローバル・ポインタ | 〇   |
| x4  | s0   | 保存レジスタ         | 〇   |
| x5  | s1   | 保存レジスタ         | 〇   |
| x6  | s2   | 保存レジスタ         | 〇   |
| x7  | s3   | 保存レジスタ         | 〇   |
| x8  | t0   | 一時レジスタ         | ✕    |
| x9  | t1   | 一時レジスタ         | ✕    |
| x10 | t2   | 一時レジスタ         | ✕    |
| x11 | t3   | 一時レジスタ         | ✕    |
| x12 | a0   | 引数・返値           | ✕    |
| x13 | a1   | 引数・返値           | ✕    |
| x14 | a2   | 引数・返値           | ✕    |
| x15 | a3   | 引数・返値           | ✕    |

## 命令セット

### 命令フォーマット

即値が必要な場合は次のアドレスに書かれている。

|     | 15-12 | 11-8   | 7-4    | 3-0   |                                 |
| --- | ----- | ------ | ------ | ----- | ------------------------------- |
|     | OPC   | Reg R1 | Reg R2 | Reg W | Reg W = ALU_OPC(Reg R1, Reg R2) |
| IMM | IMM   | IMM    | IMM    | IMM   |
| R-M | OPC   | OPC    | OPC    | OPC   |
| P   | OPC   | OPC    | OPC    | OPC   |

### メモリアクセス

1. load x, y, z

メモリの「レジスタ y + 即値 z 」番地の値を、レジスタ x に書き込む。

y を zero レジスタとすることで、絶対参照ができる。

2. store x, y, z

レジスタ x の値を、メモリの「レジスタ y + 即値 z 」番地に書き込む。

### 演算命令

> add rd, rs1, rs2
> sub rd, rs1, rs2
> sll
> slt
> sltu
> xor
> srl
> sra
> or
> and

### 条件分岐

> beq rs1, rs2, offset

if(x[rs1]==x[rs2]) PC = PC + 4 + offset
(else PC = PC + 4)

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

https://inst.eecs.berkeley.edu/~cs61c/resources/RISCV_Calling_Convention.pdf

1. 退避するレジスタ数だけ、スタックポインタを減算
2. レジスタをスタックに退避
3. リターンアドレスをスタックに退避
4. 引数をレジスタにセット
5. レジスタが足りなければスタックにセット
6. サブルーチンにジャンプ

7. レジスタを復元
8. リターンアドレスを復元
9. スタックポインタを加算
10. リターンアドレスにジャンプ

### 割り込み処理

1. 全てのレジスタをスタックに退避
2. 割り込み番号に応じて、ジャンプ
3. 割り込み処理を行う
4. レジスタを復元
5. PC を戻す

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

## VFC/PFC アーキテクチャ

記憶されている値の移動を行う Value Flow Controller (VFC) と、

プログラムの制御を行う Program Flow Controller (PFC) からなるアーキテクチャ。

![](./img/arch.dio.svg)
