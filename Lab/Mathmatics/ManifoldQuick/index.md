% 速習 多様体
%
%

$$
\newcommand{\R}{\mathbb{R}}
\newcommand{\d}[2][]{\frac{\mathrm{d} #1}{\mathrm{d} #2}}
\newcommand{\dd}[2][]{\frac{\mathrm{d}^2 #1}{\mathrm{d} {#2}^2}}
\newcommand{\pd}[2][]{\frac{\partial #1}{\partial #2}}
\newcommand{\pdd}[2][]{\frac{\partial^2 #1}{\partial {#2}^2}}
$$

## 微分形式

- 置換積分で「形式的に $dy=xdx$ とする」という謎の説明
- 「$dx$ は要するに微小な数のことで通常の計算ができる」という感覚

この $dx$ について数学的に説明したのが微分形式

- 「微小にすると線形になる」

### $\d[f]{x}$ の意味

- $dx$ は $x$ 軸方向の微小量
- 同様に $df$ も $f$ 軸方向の微小量と考える
- $f$ 軸って何？
  - 座標変換
    - $x$ 座標の値で$x$ 軸上の点を指定できる
    - $f$ が狭義単調なとき，$f(x)$ の値を用いても $x$ 軸上の点を指定できる
  - 局所座標
    - $f$ が単調じゃない関数でも，ある程度まで範囲を狭めれば $f$ は単調になる
    - つまり，ある程度範囲を絞れば $x$ と $f(x)$ のどちらの値でもその範囲の点を指定できる
  - 局所座標の問題
    - しかし，$f(x)$ を住所として使うことはできない
    - 番地だけ書いてもどの町なのかわからない
    - 「大域的な情報が失われてしまった」
    - 局所的に，隣接する場所を指定するのに，$f$ と $x$ のどちらを使っても大丈夫だが，
    - どの局所座標なのか依然として $x$ は必要
    - なので，範囲を極めて小さくした微小領域を考えると，どんな $f$ についても必ず単調になっている
- $d$ って何？
- $x$ 軸と $f$ 軸の目盛り幅の変換を表している

### $df=\pd[f]{x}dx+\pd[f]{y}dy$ の意味

- $df$ は $dx,dy$ の線形結合

$\d[f]{x}$

$dx$ に対して，

0 形式はスカラー

1 形式は一階微分

### 微分形式

$T^p(M)$

### 外微分