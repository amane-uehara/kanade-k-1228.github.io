---
title: 自作 RISC-V マイコンを Rust で動かす
---

いままで C++ でマイコンをプログラミングしていましたが、最近 Rust をちゃんと使い始め、良い概念でハマってるので、自作マイコンのプログラミングで使うために調べました。
OS のない世界でどの程度 Rust の恩恵が受けられるのか未知ですが、きっと nostdlib でも良い概念なんでしょう。

以下の本を参考にしています。

[Embedded Rust Techniques](https://tomoyuki-nakabayashi.github.io/embedded-rust-techniques/)

[The Embedded Rust Book](https://tomoyuki-nakabayashi.github.io/book/)

[Rust 裏本 高度で危険な Rust Programming のための闇の技法](https://doc.rust-jp.rs/rust-nomicon-ja/)

## コンパイラ

以下のコマンドで使いたいマシンが対応してるか調べることができます。

```
$ rustc --print target-list
> riscv32imc-unknown-none-elf
```

以下のコマンドでクロスコンパイラをインストールします。

```
$ rustup target add riscv32imc-unknown-none-elf
```

## ABI

Rust には安定した ABI がない [Define a Rust ABI #600](https://github.com/rust-lang/rfcs/issues/600) そうです。

最適化の自由度を残すためにも、統一的な ABI を定義し使い続けるということはないんだろうなと思っています。少なくとも rustc の世界で完結している限り、ABI について気にすることはそんなにありません。

組み込み領域ではきちんと定義された ABI が不可欠です。
C 的人間がこのような関数を見たら、引数は順番にスタックに push されると考えがちですが、Rust ではそこに取り決めはないようです。最適化の中でフィールドの順番が入れ替わっているかもしれません。

```
fn hoge(a: u8, b: u32, c: u8) -> u32 {
    a + b + c
}
```

TODO バイナリを見る

なので `extern "C"` で C の ABI を拝借します。

```
extern "C" {
}
```

また構造体も同じように、上から順番にメモリに配置されるわけではなく、入れ替えられる可能性があります。
`repr(C)` で C と同様に上から順番に配置できます。

```
#[repr(C)]
struct Hoge{
    a: u8,
    b: u32,
    c: u8
}
```

## リンカ

リンカは GCC の ld を使用できるため、今まで通りのリンカスクリプトを使用できます。

```lds:
MEMORY
{
    RAM   (rw) : ORIGIN = 0x00000000, LENGTH = 0x00002000 /* 8 KiB */
    FLASH (rx) : ORIGIN = 0x00050000, LENGTH = 0x00100000 /* entire flash, 1 MiB */
}

SECTIONS {
    /* 略 */
    .bss :
    {
        . = ALIGN(4);
        _sbss = .;
        *(.bss .bss.* .sbss .sbss.*)
        *(COMMON)
        . = ALIGN(4);
        _ebss = .;
    } >RAM
    /* 略 */
}
```

リンカスクリプト中で定義したシンボルを Rust 中で使用するには `static` 変数として宣言します。

```rs:
extern "C" {
    static mut _sbss: u32;
    static mut _ebss: u32;
}
```

たとえば BSS 領域を 0 で初期化するには `ptr::write_bytes` (C の`memset`) を使用し以下のようにします。

```rs:
let count = &_ebss as *const u8 as usize - &_sbss as *const u8 as usize;
ptr::write_bytes(&mut _sbss as *mut u8, 0, count);
```

Attribute としてシンボル名とセッションを指定できます。

```rs:
#[export_name = "foo"]
```

## アセンブラ

### 外部ファイル

外部のアセンブラファイル `.s` を別途アセンブルし、rust とリンクします。
ここは通常の C と同じ方法でできます。

Rust は Makefile みたいなビルドスクリプトを Rust で記述できます。いいね。

TODO ビルドスクリプトを書く

### インラインアセンブラ

インラインアセンブラは以下のように書きます。

```rs:
asm!(
    "mov {tmp}, {x}",
    x = inout(reg) x,
    tmp = out(reg) _,
);
```

詳細は[Rust リファレンス](https://doc.rust-lang.org/reference/inline-assembly.html)を参照してください。

### 拡張命令

独自の拡張命令をラップしたアセンブラマクロ

```
#define my_opr(rs1,rs2,rd) .word(/* 略 */)
```

を使用するには `global_asm!` を使用します。

TODO 試す

## スタートアップルーチン

ベアメタルのプログラムのエントリポイントは、割り込みベクタの先頭にあるリセットベクタになります。ここから、環境を整えて `main` 関数へと引き渡すまでの部分を、スタートアップルーチンと言います。

上で説明した `extern "C"` と `#[no_mangle]` を使用しシンボル名を同じにすることで、 C で開発していたものと同じアセンブラを使用できます。

## 割り込みハンドラ

## ペリフェラル

ここ [The Embedded Rust Book | ペリフェラル](https://tomoyuki-nakabayashi.github.io/book/peripherals/index.html) にだいたいのことが書いてあります。

有名なハードウェアに対しては、それをラップするクレートを実装してくれています。
が、自作マイコンの場合、それらを自分で書く必要があります。

今回は CPU に PicoRV32 というそこそこ有名なものを使用しているので、CPU のクレートは見つかりました。

[picorv32-rt](https://github.com/ilya-epifanov/picorv32-rt)

CPU 以外のペリフェラルの部分は独自なので、自分で実装する必要があります。

まず、機能ごとにレジスタをまとめた構造体を定義します。

```
#[repr(C)]
struct GPIO {
    pub iosel: u32,
    pub in: u32,
    pub out: u32,
}
```

メモリのアドレスを指定して書き換えるには、

## L チカ

以上で自作マイコンのプログラミング言語を C++ から Rust に移行するための道具は揃ったと思うので、実際にやっていきます。

### コンパイルスクリプト

### シミュレータ

iverilog でマイコンを動かして main 関数に到達していることを確認します。

## アセンブリの比較

最後に、C++ と Rust の吐いたアセンブリを比べてみます。
以下のコマンドでアセンブリを出力できます。

```
$ rustc --emit asm main.rs
```
