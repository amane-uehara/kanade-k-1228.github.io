% 微分方程式
%
%

## 線形微分方程式

線形微分演算子 $L$ について、微分方程式

$$
L[y(x)]=f(x)
$$

を線形微分方程式という。特に$f(x)=0$のとき、同次微分方程式という。

逆演算子 $L^{-1}$ が求まれば、$y=L^{-1}[f(x)]$だが、一般に逆演算子を求めるのは難しい。

#### 演算子

$L$は関数を引数に取り関数を返す関数（演算子）。フーリエ変換・ラプラス変換と同じタイプ。

線形演算子は、線形性

1. $L[cy(x)]=cL[y(x)] \t (c\in \R)$
2. $L[y_1(x)+y_2(x)]=L[y_1(x)]+L[y_1(x)]$

を満たす。

線形微分演算子は一般に

$$
L=a_n(x)\dn{}{x}{n}+a_{n-1}(x)\dn{}{x}{n-1}+...+a_1(x)\d{}{x}+a_0(x)
$$

と書ける。

#### 関数空間

関数空間は線形空間になっている。

内積を

$$
\inner{f}{g}=\int_{-\infty}^{\infty}f(x)g(x)dx
$$

とする。

微分演算子は

$$
\begin{aligned}
\inner{\d{}{x}f}{g}
&= \int_{-\infty}^{\infty}\d{}{x}f(x)g(x)dx \\
&= [f(x)g(x)]_{-\infty}^{\infty} - \int_{-\infty}^{\infty}\d{}{x}f(x)g(x)dx \\
&= -\inner{f}{\d{}{x}g}
\end{aligned}
$$

$f(x),g(x)$ は $\pm\infty$ で $0$ になるものだけを扱う。

### 解の任意性

非同次方程式$L[y(x)]=f(x)$の解に、同次方程式$L[y_0(x)]=0$の解を加えても、線形性から、

$$
L[y(x)+cy_0(x)]=f(x) \t (c\in \R)
$$

を満たす。つまり、線形微分方程式の解は無数にあることになる。

### 同次線形微分方程式

同次形の線形微分方程式は一般に

$$
a_n(x)\dn{y}{x}{n}+a_{n-1}(x)\dn{y}{x}{n-1}+...+a_1(x)\d{y}{x}+a_0(x)y
$$

### グリーン関数

非同次微分方程式

$$
L[y(x)]=f(x)
$$

を解きたい。

逆演算子 $L^{-1}$ を求めて、

$$
y(x)=L^{-1}[f(x)]
$$

としたいが、一般に逆演算子を求めるのは難しい。

そのため、 $f(x)$ をスライスする。

$$
f(x) =\int_{-\infty}^{\infty} f(\xi)\delta(x-\xi) d\xi = f(x) * \delta(x)
$$

$f(x)$ のかわりに、デルタ関数 $\delta(x-\xi)$ について、

$$
G_{\xi}(x)=L^{-1}[\delta(x-\xi)]
$$

を解く。この解 $G_{\xi}(x)$ のことをグリーン関数という。

グリーン関数を$f(x)$で加重積分してもとの$f(x)$を戻してやると、解が得られる

$$
\begin{aligned}
y(x) &= L^{-1}[f(x)] \\
&= L^{-1}\l[\int_{-\infty}^{\infty} f(\xi)\delta(x-\xi) d\xi\r] \\
&= \int_{-\infty}^{\infty} f(\xi) L^{-1}[\delta(x-\xi)] d\xi \\
&= \int_{-\infty}^{\infty} f(\xi) G_{\xi}(x) d\xi
\end{aligned}
$$

### グリーン関数の求め方

フーリエ変換を使う。

グリーン関数の逆フーリエ変換式

$$
G(x)=\f{1}{2\pi}\int_{-\infty}^{\infty}G(k)\exp(ikx)dk
$$

デルタ関数の逆フーリエ変換式

$$
\delta(x)=\f{1}{2\pi}\int_{-\infty}^{\infty}\exp(ikx)dk
$$

これをグリーン関数の式

$$
L[G(x)]=\delta(x)
$$

に代入して、

$$
L\l[\f{1}{2\pi}\int_{-\infty}^{\infty}G(k)\exp(ikx)dk\r]=\f{1}{2\pi}\int_{-\infty}^{\infty}\exp(ikx)dk
$$

$L$ は $x$ に対して作用するので、

$$
\int_{-\infty}^{\infty}G(k)L[\exp(ikx)]dk=\int_{-\infty}^{\infty}\exp(ikx)dk
$$

$L$ は $\exp(ikx)$ に作用すると、

$$
\dn{}{x}{n} \ra (ik)^n
$$

と数に変換される。

$$
L \ra L(k)
$$

とおくと、

$$
\int_{-\infty}^{\infty}G(k)L(k)\exp(ikx)dk=\int_{-\infty}^{\infty}\exp(ikx)dk
$$

両辺の被積分関数を比較して、

$$
L(k)G(k)=1
$$

$k$空間のグリーン関数$G(k)$が求まったので、$x$空間に戻すと、

$$
G(x)=\f{1}{2\pi}\int_{-\infty}^{\infty}\f{1}{L(k)}\exp(ikx)dk
$$

半円形の経路で複素積分して求める。円弧の部分は $0$ になる。

## ラプラス方程式

$$
\nabla^2 \phi = 0
$$

$$
L=\nabla^2
$$

### 直交座標

### 円筒座標

ベッセル関数

### 球座標

球面調和関数

## ポアソン方程式

$$
\nabla^2 \phi = f
$$

$$
L = \nabla^2
$$

## ヘルムホルツ方程式

$$
\nabla^2 u + \alpha^2 u = 0
$$

$$
L=\nabla^2+\alpha^2
$$

## 拡散方程式

$$
\pd{}{t} \phi = D\nabla^2 \phi
$$

$$
L = D \nabla^2 - \pd{}{t}
$$

### グリーン関数

$$
\begin{aligned}
G(x,t;\xi,\tau)
&=L^{-1}[\delta(x-\xi)\delta(t-\tau)] \\
&=-\f{1}{2\pi\sqrt{\pi D (t-\tau)}}\exp\l(-\f{(x-\xi)^2}{4D(t-\tau)}\r)
\end{aligned}
$$

## 波動方程式

$$
\pdd{}{t}u = c^2\nabla^2 u
$$

$$
L = c^2\nabla^2 - \pdd{}{t}
$$

### グリーン関数

$$
\begin{aligned}
G(x,t;\xi,\tau)
&=L^{-1}[\delta(x-\xi)\delta(t-\tau)] \\
&=-\f{1}{2\pi\sqrt{\pi D (t-\tau)}}\exp\l(-\f{(x-\xi)^2}{4D(t-\tau)}\r)
\end{aligned}
$$

## ラプラス方程式

$$
\nabla^2 \phi = 0
$$

## ポアソン方程式

$$
\nabla^2 \phi = \rho
$$
