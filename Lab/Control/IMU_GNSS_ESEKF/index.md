---
title: カルマンフィルタ
---

$$
\newcommand{\rot}{\mathrm{Rot}}
$$

IMUとGNSSを使ったカルマンフィルタによる自己位置推定を推定を実装します。

https://arxiv.org/abs/1711.02508

東京大学航空宇宙工学専攻の土屋研究室の方々が翻訳された論文

https://www.flight.t.u-tokyo.ac.jp/?p=800

## カルマンフィルタの基礎

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

| 状態                 | $x$        | $\dot{x}$                      | $\delta x$        | $\dot{\delta x}$                                                                   |
| -------------------- | ---------- | ------------------------------ | ----------------- | ---------------------------------------------------------------------------------- |
| 位置                 | $p$        | $\dot{p} = v$                  | $\delta p$        | $\dot{\delta p} = \delta v$                                                        |
| 姿勢                 | $q$        | $\dot{q} = \frac{1}{2}q\omega$ | $\delta \theta$   | $\dot{\delta \theta} = \rot(\delta \theta) \, \rot(q) \, (\omega + \delta \omega)$ |
| 速度                 | $v$        | $\dot{v} = \rot(q) \, a$       | $\delta v$        | $\dot{\delta v} = \rot(\delta \theta) \, \rot(q) \, (a + \delta a)$                |
| 加速度               | $a$        |                                | $\delta a$        |                                                                                    |
| 加速度センサバイアス | $a_b$      |                                | $\delta a_b$      |                                                                                    |
| 角速度               | $\omega$   |                                | $\delta \omega$   |                                                                                    |
| 角速度センサバイアス | $\omega_b$ |                                | $\delta \omega_b$ |                                                                                    |
