% フーリエ変換・ラプラス変換
%
%

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

### ガウス関数

$$
\begin{aligned}
\F[\exp(-\alpha t^2)]
&= \f{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} \exp(-at^2) \exp(-i\omega t) dt \\
&= \f{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} \exp\l\{-a\l(t+\f{i\omega}{2\alpha}\r)^2-\f{\omega^2}{4\alpha}\r\} dt \\
&= \f{1}{\sqrt{2\pi}} \exp\l(-\f{\omega^2}{4\alpha}\r) \int_{-\infty}^{\infty} \exp(-a\tau^2) d\tau \\
&= \f{1}{\sqrt{2\pi}} \exp\l(-\f{\omega^2}{4\alpha}\r) \sqrt{\f{\pi}{\alpha}} \\
&= \f{1}{\sqrt{2\alpha}} \exp\l(-\f{\omega^2}{4\alpha}\r)
\end{aligned}
$$

途中でガウス積分の公式

$$
\int_{-\infty}^{\infty} \exp(-ax^2) dx = \sqrt{\f{\pi}{a}}
$$

を用いた。

求めたい積分を $I=\int_{-\infty}^{\infty} \exp(-ax^2) dx$ とする。

$$
\begin{aligned}
I^2
&= \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \exp(-ax^2) \exp(-ay^2) dx dy \\
&= \int_0^{\infty} \int_{-\pi}^{\pi} \exp(-ar^2) r d\theta dr \\
&= 2\pi \int_0^{\infty} r\exp(-ar^2) dr\\
&= 2\pi \l[-\f{1}{2a} \exp(-ar^2)\r]_0^{\infty} \\
&= \f{\pi}{a}
\end{aligned}
$$

よって

$$
I=\sqrt{\f{\pi}{a}}
$$

### 熱伝達方程式の解法

## ラプラス変換

## ラプラス変換による微分方程式の解法

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

積の逆ラプラス変換は畳み込み

$$
\L^{-1} \left[\frac{G(s)}{s^2 + \omega^2}\right] = \frac{1}{\omega}\sin(\omega t) * g(t) = \frac{1}{\omega} \int_0^t \sin(\omega (\tau - t)) * g(\tau) d\tau
$$

$$
f(t) = \frac{1}{\omega} \int_0^t \sin(\omega (\tau - t))g(\tau) d\tau + f(0) \cos\omega t + f'(0) \frac{1}{\omega} \sin\omega t
$$

### 二階線形微分方程式

$$
f''(t) + P(t) f'(t) + Q(t) f(t) + R(t) = 0
$$

#### 固有関数

$$
\dd[u]{x} = -\lambda u \quad (0 < x < 1 , \lambda \geq 0,)
$$

自由端（$u'(0)=u'(1)=0$）

- $\lambda = 0$ の場合 $u(x)=0$
- $\lambda \neq 0$ の場合

$$
(s^2 U(s) - su(0) - u'(0)) + \lambda U(s) = 0
$$

$$
U(s) = \frac{s}{s^2+\lambda} u(0) + \frac{1}{s^2+\lambda} u'(0)
$$

$$
u(x) = u(0) \cos(\sqrt{\lambda}t) + \frac{u'(0)}{\sqrt{\lambda}} \sin(\sqrt{\lambda}t)
$$

境界条件から

$$
u(x) = u(0) \cos(\sqrt{\lambda}x)
$$

$$
u'(1) = - u(0) \sqrt{\lambda} \sin(\sqrt{\lambda}) = 0
$$

- $u(0)=0$ の場合 $u(x)=0$
- $\sin(\sqrt{\lambda})=0$ の場合 $\sqrt{\lambda} = n\pi$

$$
u(x) = u(0) \cos(n\pi x)
$$

#### 例１

$$
f''(t) + P(t) f'(t) + Q(t) f(t) + R(t) = 0
$$
