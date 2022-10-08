---
title: 自作 CPU RK8
---

![](img/arch.dio.svg)

| op   |     |     |     |                      |
| ---- | --- | --- | --- | -------------------- |
| add  | rd  | rs1 | rs2 | R[rd]=R[rs1]+R[rs2]  |
| addi | rd  | rs1 | imm | R[rd]=R[rs1]+imm     |
| mov  | imm | rs1 | rs2 | R[rs1+imm]=R[rs2]    |
| br   | imm | rs1 | rs2 | if(rs1=rs2) PC = imm |

![](img/decode.dio.svg)

| op   | Stage 0      | Stage 1      | Stage 2      | Stage 3                |
| ---- | ------------ | ------------ | ------------ | ---------------------- |
| add  | rs1 = R[rs1] | rs2 = R[rs2] | R[rd] = alu  | pc++                   |
| addi | rs1 = R[rs1] | -            | R[rd] = alu  | pc++                   |
| mov  | rs1 = R[rs1] | rs2 = R[rs2] | R[alu] = rs2 | pc++                   |
| br   | rs1 = R[rs1] | rs2 = R[rs2] | -            | pc = flag ? imm : pc++ |

| op   | opc | S2_SEL     | DOUT_SEL | DADR_SEL  | JMP | COND | ALU  |
| ---- | --- | ---------- | -------- | --------- | --- | ---- | ---- |
| add  | 00  | 0- : REG2  | 1 : ALU  | 1 : CODE0 | 0   | -    | func |
| addi | 10  | 10 : CODE2 | 1 : ALU  | 0 : ALU   | 0   | -    | func |
| mov  | 11  | 11 : CODE1 | 0 : REG2 | 1 : CODE0 | 0   | -    | ADD  |
| br   | 01  | 0- : REG2  | -        | 1 : CODE0 | 1   | 0/1  | SUB  |

| ALU  | S3  | S2  | S1  | S0  | M   | CN  |
| ---- | --- | --- | --- | --- | --- | --- |
| ADD  | 1   | 0   | 0   | 1   | 0   | 0   |
| SUB  | 0   | 1   | 1   | 0   | 0   | 1   |
| AND  | 1   | 1   | 1   | 0   | 1   | -   |
| NAND | 0   | 0   | 0   | 1   | 1   | -   |
| OR   | 1   | 0   | 1   | 1   | 1   | -   |
| NOR  | 0   | 1   | 0   | 0   | 1   | -   |
| XOR  | 1   | 0   | 0   | 1   | 1   | -   |
| XNOR | 0   | 1   | 1   | 0   | 1   | -   |

| 品番                     | 個数 | 用途               |                                                       |
| ------------------------ | ---- | ------------------ | ----------------------------------------------------- |
| 74HC139 2to4 デコーダ    | 2    |                    |                                                       |
| 74HC161 バイナリカウンタ | 2    | プログラムカウンタ |                                                       |
| 74HC175 4bit DFF         | 1    | ステージカウンタ   |                                                       |
|                          |      |                    |                                                       |
| 分周器付き発振器         | 1    | クロック           | [秋月](https://akizukidenshi.com/catalog/g/gP-01685/) |
| 押しボタンスイッチ（赤） | 1    | 手動クロック       | [秋月](https://akizukidenshi.com/catalog/g/gP-11669/) |
| 押しボタンスイッチ（黒） | 1    | リセット           |                                                       |
| 切り替えスイッチ         | 1    | クロック切り替え   |                                                       |
| スライドスイッチ         | 4    | 周波数選択         |                                                       |
