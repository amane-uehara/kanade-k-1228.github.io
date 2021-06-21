% 材料力学
%
%



## 引張・圧縮


### ポアソン比

## せん断

## 曲げ

### オイラーベルヌーイの仮定

## ねじり

## たわみ

### 幾何条件

![](./tawami.drawio.svg)

$$
ds = \rho ( -d \theta )
$$

$$
dx = \cos \theta ds
$$

$$
\theta = \tan^{-1} \frac{dv}{dx}
$$

$$
\frac{d\theta}{dx} = \frac{1}{1+\left(\frac{dx}{dv}\right)^2}
$$

$\theta<<1$ のとき

$$
\frac{1}{\rho}=-\frac{d^2v}{dx^2}
$$

### 曲げ応力

$$
\frac{1}{\rho}=\frac{M}{EI}
$$

### たわみの基礎式



## 座屈

たわみ $v(x)$ 荷重 $P$

$$
\frac{d^2v}{dx^2}=-\frac{M}{EI}=-\frac{P}{EI}v
$$

$\alpha=\sqrt{P/EI}$ と置いて，$\frac{d^2v}{dx^2}+\alpha^2v=0$ を 境界条件 $v(0)=0,v(L)=0$ で解くと，$n$ をパラメタとして，

$$
P=\frac{n^2\pi^2}{L^2}EI,\quad v=c_1\sin\frac{n\pi}{L}x
$$

$n=1$ のときの $P$ が限界荷重

$$
P_{CR}=\frac{\pi^2}{L^2}EI,\quad v_{CR}=c_1\sin\frac{\pi}{L}
$$

$c_1$ が残るので変位はわからんが限界荷重はわかる





