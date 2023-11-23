---
title: カルマンフィルタ
---

$$
\newcommand{\rot}{\mathrm{Rot}}
\newcommand{\w}{\omega}
$$

IMUとGNSSを使ったカルマンフィルタによる自己位置推定を推定を実装する。

[Joan Solà, Quaternion kinematics for the error-state Kalman filter](https://arxiv.org/abs/1711.02508)

東京大学航空宇宙工学専攻の土屋研究室の方々が翻訳された論文

[Joan Solá著”Quaternion kinematics for the error-state Kalman filter”の日本語翻訳の公開について | 土屋研究室 -東京大学](https://www.flight.t.u-tokyo.ac.jp/?p=800)

## カルマンフィルタの基礎

- 状態方程式: $x = Fx + Gw$, $w \sim N(0,Q)$
  - $x$: 状態
  - $P$: 状態の共分散行列
  - $F$: 状態遷移モデル
  - $w$: ホワイトノイズ
  - $Q$: ホワイトノイズの共分散行列
  - $G$: ノイズモデル
- 観測方程式: $z = H x + v$, $v \sim N(0,R)$
  - $z$: 観測値
  - $H$: 観測行列
  - $v$: 観測ノイズ
  - $R$: 観測ノイズの共分散行列

### 予測

現在 $t$ の推定値から次の時刻 $t+1$ の推定値は、状態方程式から単純に推定される。

$$
x_{t+1|t} = F x_{t|t}
$$

しかし、推定値には真値との誤差があり、推定によって誤差は増大する。

$$
P_{t+1|t} = F P_{t|t} F^T + G Q G^T
$$

第一項は現在の推定値の誤差による分散で、第二項はプロセスノイズによる分散である。

直感的にわかるように、予測だけのよって状態を推定していては、分散は次々と増大する。

$$
x_{t|t} \rightarrow x_{t+1|t} \rightarrow x_{t+2|t}
$$

$$
P_{t|t} \preceq P_{t+1|t} \preceq P_{t+2|t}
$$

そこで、観測によって推定状態を補正する。

### 観測

センサ値 $z$ が計測された。この値を基に、状態の推定値を補正する。

観測残差を求める。
$$
e_t = z_t - H x_{t|t-1}
$$
観測値と、予測されていた観測値の差を表している。

観測残差の分散を求める。
$$
S_t = R + HP_{t|t-1}H^T
$$
第一項はセンサのノイズに起因する分散で、第二項は予測誤差に起因する分散である。

カルマンゲインを求める。
$$
K_t = P_{t|t-1}H^TS_t
$$
観測値がどの程度信頼できるかを表している。

### 更新

カルマンゲインを使って、状態の推定値と、推定値の分散を更新する。
$$
x_{t|t} = x_{k|k-1} + K_t e_t
$$
予測値と観測値の「加重平均」をとることで、最も確からしい状態の推定値が得られる。

$$
P_{t|t} = (I-K_tH)P_{t|t-1}
$$

## 誤差状態カルマンフィルタ

### 状態方程式

真の状態 $x_t$ に対する状態方程式を $f$ とする。

$$
\dot{x_t} = f(x_t)
$$

真の状態 $x_t$ をノミナル状態 $x$ と誤差状態 $\delta x$ に分解する。

$$
x_t = x \oplus \delta x
$$

状態方程式も、状態方程式と誤差状態方程式に分解する。

$$
f(x_t) = f(x) \oplus f_e(x,\delta x)
$$

$$
\dot{x} = f(x)
$$

$$
\dot{\delta x} = f_e(x,\delta x)
$$

| 状態                 | $x$    | $\dot{x}$                   | $\delta x$      | $\dot{\delta x}$                                                           |
| :------------------- | :----- | :-------------------------- | :-------------- | :------------------------------------------------------------------------- |
| 位置                 | $p$    | $\dot{p} = v$               | $\delta p$      | $\dot{\delta p} = \delta v$                                                |
| 姿勢                 | $q$    | $\dot{q} = \frac{1}{2}q \w$ | $\delta \theta$ | $\dot{\delta \theta} = \rot(\delta \theta) \, \rot(q) \, (\w + \delta \w)$ |
| 速度                 | $v$    | $\dot{v} = \rot(q) a$       | $\delta v$      | $\dot{\delta v} = \rot(\delta \theta) \, \rot(q) \, (a + \delta a)$        |
| 加速度               | $a$    |                             | $\delta a$      |                                                                            |
| 加速度センサバイアス | $a_b$  |                             | $\delta a_b$    |                                                                            |
| 角速度               | $\w$   |                             | $\delta \w$     |                                                                            |
| 角速度センサバイアス | $\w_b$ |                             | $\delta \w_b$   |                                                                            |
