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

## 命令・変数・定数のラベル

一般的なアセンブラには、ラベルというものがあります。

```
   jump label
~~~
label:
   addi s0 s0 4
```

プログラム中のある命令を指定します。

```
0x0010:
0x0011: 0x
```

この機能を拡張して、変数と定数を定義できるようにします。

```
@0xf010 hoge
#0x0334 hanshin
```

ちょっと機能を追加して、アセンブリのコーディングが楽になるようにします。

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

## 関数呼び出し

　関数呼び出しの前後で変更していいレジスタと、いけないレジスタがあります。

[参考１](https://valinux.hatenablog.com/entry/20210624)
[参考２](https://inst.eecs.berkeley.edu/~cs61c/resources/RISCV_Calling_Convention.pdf)

| RKASM     |                                |
| :-------- | :----------------------------- |
|           | 関数呼び出し側の仕事 ←①        |
| push t0   | 一時レジスタを退避             |
| push t1   | 関数呼び出し後に使わないなら   |
| push t2   | 退避する必要なし               |
| push t3   |                                |
| push ra   | RAを退避 (callで上書きされる)  |
| push fp   | FPを退避 (FPは引数のポインタ)  |
| mov fp sp | SPを退避                       |
| mov a0 xx | 引数を引数レジスタに入れる     |
| mov a1 yy |                                |
| push zz   | 入らない引数はスタックに入れる |
| push ww   |                                |
| call func | サブルーチンにジャンプ ←②      |
|           | ここに戻ってくる ←③            |
| mov sp fp | SPを復元                       |
| pop fp    | FPを復元                       |
| pop ra    | RAを復元 ←④                    |
| pop t3    |                                |
| pop t2    |                                |
| pop t1    |                                |
| pop t0    |                                |
|           |                                |
| func:     |                                |
| push s0   | 保存レジスタの退避             |
| push s1   | 関数内で上書きしなければ       |
| push s2   | 退避する必要なし               |
| push s3   |                                |
| nop       | 関数の処理                     |
| pop s3    | 保存レジスタを復元             |
| pop s2    |                                |
| pop s1    |                                |
| pop s0    |                                |
| ret       | 元の処理に戻る                 |

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
