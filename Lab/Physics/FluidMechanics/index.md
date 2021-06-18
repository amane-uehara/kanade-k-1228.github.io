% 流体力学
%
%

## 場
- $u$ : 速度
- $\omega$ : 渦度
- $\sigma$ : 応力
- $\rho$ : 密度
- $p$ : 圧力
- $g$ : 外力加速度

## 条件
- 非圧縮
  - マッハ数が小さい
- 非粘性
- 非回転
- 定常・発達

## 質量保存則（連続の式）
$$
\partial_t\rho+\partial_i(\rho u_i)=0
$$
### 非圧縮
$$
\partial_iu_i=0
$$

## 運動量保存則（運動方程式）

$$
\partial_t(\rho u_i)+\partial_j(\rho u_i u_j)=\partial_i\sigma_{ii}+\rho g_i
$$

## ニュートン流体の構成方程式

$$
\sigma_{ij}=(-p+\lambda\partial_ku_k)\delta_{ij}+\mu d_{(ij)}
$$

静圧 $p$

速度勾配 $d_{ij}:=\partial_ju_i$ 

対称速度勾配 $d_{(ij)}:=(d_{ij}+d_{ji})/2$

## ナビエストークス方程式

$$
\partial_t(\rho u_i)+\partial_j(\rho u_iu_j)=-\partial_i\left(p+\frac{2}{3}\mu\partial_ku_k\right)+\mu\partial_j(\partial_ju_i+\partial_iu_j)+\rho g_i
$$

実在流れ

$$
\rho \partial_t u_i + \rho u_j \partial_j u_i = -\partial_i p + \mu \partial_j \partial_j u_i + \rho g_i
$$

無次元化 $D,V,L$ 

$$
\rho \partial_t u_i + \rho u_j \partial_j u_i = -\partial_i p + \frac{\mu}{DVL} \partial_j \partial_j u_i + \rho g_i
$$

レイノルズ数 $Re:=\frac{\rho V L}{\mu}$ と外力場 $g_i$ が同じなら相似な流れになる．

## ※π定理

法則が $n$ 個の変数 $(q_1,q_2,,,q_n)$ で表現されていて，変数が $k$ 個の独立な基本単位で表されるとき，

|       | $e_1$ | ...   | $e_k$ |
| :---: | ----- | ----- | ----- |
| $q_1$ |       |       |       |
|   :   |       | $\Mu$ |       |
| $q_n$ |       |       |       |

$k=\mathrm{rank}\,\Mu$

無次元数の数 $=\mathrm{null}\,\Mu$

## 平行平板（ボアズイユ流・クェット流）

## 円管

## 境界層

### 平板上非定常

$$
\partial_t u + u \partial_x u + v \partial_y u = - \frac{1}{\rho} \partial_x p + \mu ( \partial_x^2u + \partial_y^2u )\\
\partial_x u + \partial_y v = 0
$$

条件

$$
\begin{aligned}
u(x,y,0)&=0\\
u(x,0,t)&=U_0 (t>0)\\
u(x,\infty,t)&=0\\
\partial_x u &= 0\\
\partial_x p &= 0
\end{aligned}
$$

解

$$
\partial_tu=\mu\partial_y^2u
$$

境界層

$$
\delta(t)=\sqrt{\mu t}
$$

## 渦度


## 
