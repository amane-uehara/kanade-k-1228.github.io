---
title: アセンブラ
---

## 命令一覧

| 命令           | アセンブリ        |                             |
| -------------- | ----------------- | --------------------------- |
| レジスタ演算   | add rd rs1 rs2    | rd = rs1 + rs2              |
| 即値演算       | addi rd rs1 imm   | rd = rs1 + imm              |
| ロード         | load rd rs1 imm   | rd = mem[rs1 + imm]         |
| ストア         | store rs1 rs2 imm | mem[rs1 + imm] = rs2        |
| 即値ロード     | loadi rd imm      | rd = imm                    |
| ジャンプ       | jump rd rs1 imm   | rd = PC + 1, PC = rs1 + imm |
| 条件分岐（＝） | breq rs1 rs2 imm  | if(rs1 = rs2) PC = imm      |
| 条件分岐（＜） | brlt rs1 rs2 imm  | if(rs1 < rs2) PC = imm      |

## アセンブラの実装

1. 一行づつ読み取る
   1. コメント、空行を削除
   2. 一語目を読む
      1. 命令の場合
         1. 命令の引数の型に従い、続く語を読む
         2. 引数にラベルがある場合、ラベルを記録して保留
      2. ラベルの場合
         1. ラベルの辞書に、ラベルの指すアドレスを記録
2. ラベルの置換（リロケーション
3. バイナリを出力

## 慣用句

### サブルーチン

[参考](https://inst.eecs.berkeley.edu/~cs61c/resources/RISCV_Calling_Convention.pdf)

| RKASM          |                                              |
| -------------- | -------------------------------------------- |
| subi sp sp 5   | スタックポインタを減算し、スタックを確保     |
| store s0 sp 0  | レジスタをスタックに退避                     |
| store s1 sp 1  |                                              |
| store s1 sp 2  |                                              |
| store s1 sp 3  |                                              |
| store ra sp 4  | リターンアドレスも退避                       |
| loadi a0 334   | 引数をレジスタにセット                       |
| loadi a1 2     | ※ 引数レジスタが足りなければスタックにセット |
| jump ra func   | サブルーチンにジャンプ                       |
|                | ここに戻ってくる                             |
|                |                                              |
| func:          |                                              |
| ---            | サブルーチンの処理                           |
| ---            |                                              |
| l ra sp 0      | レジスタを復元                               |
| l ra sp 1      |                                              |
| l ra sp 2      |                                              |
| l ra sp 3      |                                              |
| l ra sp 4      | リターンアドレスを復元                       |
| addi sp sp 5   | スタックポインタを加算                       |
| jump zero ra 0 | PC を戻す                                    |

### 割り込み処理

| ASM         |                                |
| ----------- | ------------------------------ |
| subi sp 16  | 全てのレジスタをスタックに退避 |
| s x1 sp 0   |                                |
| :           |                                |
| s x15 sp 14 |                                |
| j ra xxxx   | ジャンプ                       |
| :           |                                |
| :           | 割り込み処理を行う             |
| :           |                                |
| l x1 sp 0   | レジスタを復元                 |
| :           |                                |
| l x15 sp 14 |                                |
| jr ra 0     | PC を戻す                      |
