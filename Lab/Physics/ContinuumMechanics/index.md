% 連続体力学
%
%

[Book](https://ocw.kyoto-u.ac.jp/course/9/)

## 登場人物

- $v$ 速度
- $\sigma$ 応力（面積力）
- $K$ 体積力

## 連続体上の微分

連続体中の点を指定するには，初期状態での位置か，変位後の位置のどちらかを与えればいい（連続体の変位がわかれば変換できる）．連続体上の場は，初期位置をインデックスとして$F(t,\bold{x}_0)$または現在位置をインデックスとして$f(t,\bold{x})$と表現される．

$$
F(t,\bold{x}_0)=f(t,\bold{x}(\bold{x}_0,t))
$$

$$
\frac{d}{dt}F=\left(\frac{\partial}{\partial t}+\frac{dx_i}{d t}\frac{\partial}{\partial x_i}\right)f
$$

$$
D_t:=\partial_t+v_i\partial_i
$$

## 保存則

### 質量保存則

$$
\begin{aligned}
\partial_t\rho&+\partial_i(\rho v_i)&=0\\
D_t\rho&+\rho\partial_iv_i&=0
\end{aligned}
$$

### 運動量保存則（運動方程式）

$$
D_tv_i=\frac{1}{\rho}\partial_j\sigma_{ji}+K_i
$$

### エネルギー保存則

検査体積について，dt (運動エネルギー + 内部エネルギー) = 体積力による仕事率 + 面積力による仕事率 - 熱流束

$$
\frac{d}{dt}\int_V \left(\frac{1}{2}\rho v^2 + \rho\epsilon\right) dV = \int_V \left(\rho K \cdot v\right) dV + \int_S ((\sigma\cdot n)\cdot v) dS - \int_S (q \cdot n) dS
$$

$$
\begin{aligned}
D_t \left(\frac{1}{2}\rho v^2\right)&=v_j\partial_i\sigma_{ij}+\rho K_iv_i \\
D_t \left(\rho\epsilon\right)       &= \sigma_{ij}\partial_i v_j - \partial_i q_i \\
D_t \left(\frac{1}{2}\rho v^2 + \rho\epsilon\right)&=\partial_i(\sigma_{ij} v_i - q_i)+\rho K_iv_i \\
\end{aligned}
$$

