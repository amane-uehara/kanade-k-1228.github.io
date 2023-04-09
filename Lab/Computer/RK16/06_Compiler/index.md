---
title: コンパイラ
---

自作マイコン用の自作言語、C-- (Cょゎょゎ) のコンパイラです。

> 組み込みシステムを作るために実用上十分な機能を持つこと

> コンパイラの実装が簡単になること

> 文法がわかりやすいこと

## 型

|            | 記法                          |
| ---------- | ----------------------------- |
| 整数型     | `int`                         |
| ポインタ型 | `*int`                        |
| 配列型     | `[N]int`                      |
| 構造体型   | `{m0 : int, m1 : int}`        |
| 関数型     | `(a0 : int, a1 : int) => int` |

```
type =
 | type_prim   = ident | "(" type ")"
 | type_ptr    = "*" type
 | type_arr    = "[" expr "]" type
 | type_struct = "{" (ident ":" type) % "," "}"
 | type_func   = "(" (ident ":" type) % "," ")" "=>" type
```

ポインタ `*`、配列 `[]` をベース型の前に置きます。

### 型の書き方

`var hoge : int`

コロンの後に型を書きます。これによって複合型の型がわかりやすくなります。

### 参照演算子・アドレス演算子

`a*` で `a` をポインタとみなして、`a` の指す値を得ます。

`a : *int` → `a* : int`

`a@` で `a` のアドレスを得ます。

`a : int` → `a@ : *int`

### キャスト演算子

`a : T`

変数の後に型を書いて、キャストができます。

`sizeof(a) == sizeof(T)`

メモリ上でサイズが同じならキャストができます。

後置演算子 `$` で変数をブーリアン型にします。

`a : int = 0` → `a$ = false`

### 整数型

16bit 整数。
符号付きか無しかについては未定。
ハードウェアとかの都合で決める。

### ポインタ型

ポインタ型は 16bit のアドレスです。
これはアドレス空間が 16bit であることに由来します。

アクセス演算子を適用すると、ベース型になります。

`hoge : *int` → `hoge* : int`

アドレス演算子を適用すると、ポインタ型になります。

`hoge : int` → `hoge@ : *int`

### 配列型

配列はコンパイル時にベース型の N 個分のメモリを確保します。

添字演算子を適用すると、ベースの型になります。

`hoge : [N]int` → `hoge[0] : int`

多次元配列は、このように表されます。

`hoge : [N][M]int`

C言語と異なり、配列とポインタの暗黙のキャストは行いません。

配列のアドレスが欲しい場合は、アドレス演算子を使います。

`hoge : [N]int` → `hoge@ : *[N]int`

配列の先頭の要素のアドレスは、このように取得します。

`hoge : [N]int` → `hoge[0]@ : *int`

これらのポインタの値は一致しますが、型は異なります。

### 構造体型

構造体のサイズはメンバの合計です。

メンバ演算子を適用すると、メンバの型になります。

`hoge : {a : int}` → `hoge.a : int`

### 関数型

関数型は関数の持つ型です。

関数呼び出し演算子を適用すると、返り値の型になります。

`hoge : (arg : Arg) => Ret` → `hoge(arg) : Ret`

関数型の変数は定義できません。かわりに関数ポインタ型を使います。

`var hoge_p : *(arg : Arg) => Ret = hoge@;` → `hoge_p*(arg) : Ret`

関数ポインタには関数のアドレスが入ってます。

## プログラム

|          | 記法                                                    |
| -------- | ------------------------------------------------------- |
| 変数定義 | `var  hoge : int;`                                      |
| 関数定義 | `func hoge : (a : int, b : int) => int { return a+b; }` |
| 型定義   | `type hoge : {x : int, y : int};`                       |

プログラムのトップレベルには、グローバル変数定義、関数定義、型定義が並びます。

```
program  =
 | gvar_def = "var"  ident ":" type ";"
 | func_def = "func" ident ":" type compound
 | type_def = "type" ident ":" type ";"
```

### 文

関数定義には複文 (compound satements) が続き、
その中には文 (statement) が並びます。

```
compound = "{" stmt* "}"

stmt =
空文
 | void_stmt = ";"
複文
 | compound  = "{" stmt* "}"
式文
 | expr_stmt = expr ";"
ローカル変数定義
 | lvar_def  = "var" ident ":" type ";"
代入文
 | assign    = expr "=" expr ";"
制御文
 | if        = "if" "(" expr ")" stmt
 | if_else   = "if" "(" expr ")" stmt "else" stmt
 | goto      = "goto" ident ";"
 | label     = ident ":"
 | return    = "return" expr ";"
繰り返し文
 | while     = "while" "(" expr ")" stmt
 | continue  = "continue" ";"
 | break     = "break" ";"
```

#### 式文

式を評価します。評価値は破棄されるため、実用上は副作用を実行するための文です。

#### 代入文

代入文が変数の値を書き換える唯一の方法です。

左辺はアドレス、右辺は値として評価できる必要があります。

`a : int = b : int`

という代入文は、実際には、

`a@ : *int <= b : int`

このような動作をしています。

#### goto label

関数呼び出しのABIを守るため、gotoは同一の関数内である必要がある。

ラベルの前に関数名を付記することで `<func-name>_<label-name>` 、
関数外へのgotoはアセンブラがエラーを出す。

アドホックですが、gotoはそんなに使わないのでこの程度のエラー処理でいいでしょう。

```
func main : ()=>int {
  goto hoge; //     jump zero zero main_hoge
hoge:      // main_hoge:
}
```

### 式

#### 演算

```
expr = cond = or ("?" expr ":" cond)?
or  = xor ("|" xor)*
xor = and ("^" and)*
and = equal ("&" equal)*
equal = relat ("==" relat | "!=" relat)*
relat = shift ("<" shift | "<=" shift | ">" shift | ">=" shift)*
shift = (shift "<<" | shift ">>")? add
add   = mul ("+" mul | "-" mul)*
mul   = prim ("**" prim | "//" prim | "%%" prim)*
```

#### 後置演算子

```
post =
 | prim
 | cast      = post ":" type
 | ref       = post "*"
 | addr      = post "@"
 | array     = post "[" expr "]" 
 | member    = post "." ident
 | func_call = post "(" expr % "," )"
```

###  値

```
prim =
 | num
 | ident
 | "(" expr ")"
 | "<" type ">" // sizeof
```

##  コンパイラの動作

###  トークン化

文字列をトークン列に変換します。

- コメントの除去
- 文字列リテラル

###  抽象構文木の構築

抽象構文木 (Abstract Syntax Tree : AST) は構造化されたソースコードです。

| Func       | `Node::Type` | `childs`  |           |            |         |
| ---------- | ------------ | --------- | --------- | ---------- | ------- |
| type       | TypeFunc     | arg[]     | ret       |            |         |
|            | TypeStruct   | member[]  |           |            |         |
|            | TypeArray    | base      | size      |            |         |
|            | TypePointer  | base      |           |            |         |
|            | TypePrim     | ident     |           |            |         |
| program    | Program      | defs      |           |            |         |
|            | FuncDef      | name      | type      | compound   |         |
|            | GVarDef      | name      | type      |            |         |
|            | TypeDef      | name      | type      |            |         |
| compound   | Compound     | stmt[]    |           |            |         |
| stmt       | VoidStmt     |           |           |            |         |
|            | ExprStmt     | expr      |           |            |         |
|            | LVarDef      | name      | type      |            |         |
|            | Assign       | expr      | expr      |            |         |
|            | UAssign      | expr      |           |            |         |
|            | If           | cond      | true_node |            |         |
|            | IfElse       | cond      | true_node | false_node |         |
|            | Goto         | name      |           |            |         |
|            | Label        | name      |           |            |         |
|            | Return       | expr      |           |            |         |
|            | While        | cond      | body      |            |         |
|            | DoWhile      | cond      | body      |            |         |
|            | For          | cond      | body      | init       | iterate |
|            | Continue     |           |           |            |         |
|            | Break        |           |           |            |         |
| **expr**   |              |           |           |            |         |
| cond       | Cond         | cond      | true_node | false_node |         |
| or         | Or           | :         | :         |            |         |
| xor        | Xor          | :         | :         |            |         |
| and        | And          | :         | :         |            |         |
| equality   | EQ           | :         | :         |            |         |
|            | NEQ          | :         | :         |            |         |
| relational | LT           | :         | :         |            |         |
|            | LEQ          | :         | :         |            |         |
|            | GT           | :         | :         |            |         |
|            | GEQ          | :         | :         |            |         |
| shift      | RShift       | :         | :         |            |         |
|            | LShift       | :         | :         |            |         |
| add        | Add          | :         | :         |            |         |
|            | Sub          | :         | :         |            |         |
| mul        | Mul          | :         | :         |            |         |
|            | Div          | :         | :         |            |         |
|            | Mod          | :         | :         |            |         |
| post       | Cast         | ident     | type      |            |         |
|            | Ref          | ident     |           |            |         |
|            | Addr         | ident     |           |            |         |
|            | Array        | ident     | expr      |            |         |
|            | Member       | ident     | ident     |            |         |
|            | FuncCall     | ident     |           |            |         |
| prim       | Num          | ***int*** |           |            |         |
|            | Ident        | ***str*** |           |            |         |
|            | SizeOf       | type      |           |            |         |

###  シンボルテーブル生成

| 種類 | 名前 | 型   | アドレス            | 関数本体 | ローカル |
| ---- | ---- | ---- | ------------------- | -------- | -------- |
| Func | name | type | addr (テキスト領域) | body     | lsymbol  |
| GVar | name | type | addr (静的領域)     |          |          |
| LVar | name | type | addr (スタック相対) |          |          |
| Type | name | type |                     |          |          |

###  ASTの再帰的評価

ASTの部分木を再帰的に評価することで、コード生成に必要なさまざまな情報を得ることができます。

####  型のサイズ

変数に必要なメモリを知るために型のサイズを計算します。

- 整数型 : 1 (16bit)
- ポインタ型 : 1 (16bit)
- 配列型 : ベース型の N 倍
- 構造体型 : メンバのサイズの合計
- 関数型 : 直接評価不可

#### 変数

#### アドレス

代入文の左辺を評価します。

#### 定数値

コンパイル時に値が決まっているべき部分を評価します。

### アセンブラコードの生成

### グローバル変数の配置

グローバル変数はデータ領域に配置されます。

### 関数のコード生成

#### 実行環境メモ

現在の位置を保持しながらコード生成をする。

| 関数 | ループ               |
| ---- | -------------------- |
| main | null / for_1 / for_1 |

return, break, continue に必要な情報。

関数のバイナリはテキスト領域に配置されます。

低レイヤの世界では「テキスト」は実行可能なバイナリのことを指します。

#### ローカル変数の配置

スタックのアドレスはフレームポインタからの相対アドレスです。

## 作業日誌

- 11/10
  - 四則演算の実装
    - 構文木構築
    - 再帰的評価

```
expr =  mul ("+" mul | "-" mul)*
mul = primary ("*" primary | "/" primary | "%" primary)*
primary = num | "(" expr ")"
```

- 11/13
  - 演算子の拡張
    - ? :, ||, &&, |, ^, &, ==, !=, <, <=, >, >=, <<, >>, \*, /, %, ++, --

- 11/15
  - 変数の実装

```
prim = num | ident | "(" expr ")"
```

- 11/16
  - 文の実装
  - 代入の実装

```
program = stmt*
stmt = ";"
     | "{" stmt* "}"
     | "if" "(" expr ")" stmt ("else" stmt)?
     | "while" "(" expr ")" stmt
     | "do" stmt "while" ( expr ) ";"
     | "for" "(" expr? ";" expr? ";" expr? ")" stmt
     | expr ";"
```

- 2/8
  - 関数定義

```
program = func*
func = ident "(" ident % "," ")" compound
compound = "{" stmt* "}"
```

- 2/9
  - 型
- 2/10
  - AST ノードの改良
    - child を vector にまとめメソッドでアクセスするようにした
- 2/12
  - 変数定義
- 2/14
  - 細かい文法を決めた
  - ドキュメントの整備
- 2/15
  - AST完成？
  - ポインタの\*と乗算の\*、アドレスの&と論理積の&の区別がつかない
    - 残された記号は @ と $
    - 論理演算とビット演算は同じにできるか？
    - アドレス演算子は@でいいかも。アドレスっぽいし
    - 乗除算は\*\*と//にする
      - 乗除算器を持たないので重いよという意味で
  - 文法を↑で変える。暫定的
- 2/16
  - ↑アホか？ポインタのポインタと競合するやんけ。
- 2/17
  - DFS、シンボルテーブルができた
  - シンボル、ローカルとグローバルを統一したいわね
  - Static変数も作りたい
- 2/20

## 参考

https://github.com/DoctorWkt/acwj

https://github.com/rui314/chibicc

https://www.sigbus.info/compilerbook

https://github.com/season1618/books/blob/main/c-compiler/index.md

