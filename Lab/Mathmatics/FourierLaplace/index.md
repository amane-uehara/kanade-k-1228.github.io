% フーリエ変換・ラプラス変換
%
%

$$
\newcommand{\R}{\mathbb{R}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\d}[2][]{\frac{\mathrm{d} #1}{\mathrm{d} #2}}
\newcommand{\dd}[2][]{\frac{\mathrm{d}^2 #1}{\mathrm{d} {#2}^2}}
\newcommand{\pd}[2][]{\frac{\partial #1}{\partial #2}}
\newcommand{\pdd}[2][]{\frac{\partial^2 #1}{\partial {#2}^2}}
\newcommand{\F}{\mathcal{F}}
\newcommand{\L}{\mathcal{L}}
$$

正規直交系をなす関数集合 $\{f_n\}$

$$
\int f_i f_j dx = \delta_{ij}
$$

を基底として

$$
f = \sum_n c_n f_n
$$

と関数を表す．

## フーリエ級数展開

### パーシバルの関係式

### 波動方程式の解法

### 熱伝達方程式の解法

## フーリエ変換

### 熱伝達方程式の解法

## ラプラス変換

### 振動

$$
f''(t) + 2 \zeta \omega f'(t) + \omega^2 f(t) = g(t)
$$

$$
(s^2F(s) - sf(0) - f'(0)) + 2 \zeta \omega (sF(s)-f(0)) + \omega^2 F(s) = G(s)
$$

$$
(s^2 + 2 \zeta \omega s + \omega^2) F(s) = G(s) + sf(0) + f'(0) + 2\zeta\omega f(0)
$$

#### 減衰なし $\zeta=0$

$$
(s^2 + \omega^2) F(s) = G(s) + sf(0) + f'(0)
$$

$$
F(s) = \frac{G(s)}{s^2 + \omega^2} + \frac{sf(0)}{s^2 + \omega^2} + \frac{f'(0)}{s^2 + \omega^2}
$$

積の逆ラプラス変換はコンボリューションとなり

$$
\L^{-1} \left[\frac{G(s)}{s^2 + \omega^2}\right] = \frac{1}{\omega}\sin(\omega t) * g(t) = \frac{1}{\omega} \int_0^t \sin(\omega (\tau - t)) * g(\tau) d\tau
$$

よって

$$
f(t) = \frac{1}{\omega} \int_0^t \sin(\omega (\tau - t))g(\tau) d\tau + f(0) \cos\omega t + f'(0) \frac{1}{\omega} \sin\omega t
$$
