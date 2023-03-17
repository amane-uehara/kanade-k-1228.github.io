---
title: コンパイラ
---

https://github.com/DoctorWkt/acwj

https://github.com/rui314/chibicc

https://www.sigbus.info/compilerbook

https://github.com/season1618/books/blob/main/c-compiler/index.md

C 言語を簡単にした C--（よわよわ）でプログラムを書き、自作マイコンで実行できるようにします。

## アセンブラの改良とリンカ

前作ったアセンブラは、ひとつのファイルで完結する

複数のファイルに分割したい場合、リンカが必要になる。

アセンブリファイル → アセンブラ → オブジェクトファイル → リンカ → 実行ファイル → ROM ライタ → ROM

オブジェクトファイルには、未解決のシンボルと、シンボルの位置、シンボルの種類（絶対、相対、などアドレスに必要な情報）が含まれる。

## 言語仕様

- 型
  - 16bit 符号付き整数 int
  - ポインタ int \*
  - 配列 int[N]
- 条件分岐
  - if(){}else{}
- ループ
  - for(;;){}
  - while(){}
- 関数
  - int f(){}
- 関数ポインタ

## 構文解析

```C:
int main(){

}
```

抽象構文木（Abstract Syntax Tree, AST）を

データ依存関係
