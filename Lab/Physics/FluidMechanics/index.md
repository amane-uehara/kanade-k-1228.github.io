% 流体力学
%
%

## 基礎方程式
### 場
- $u$ : 速度
- $\omega$ : 渦度
- $\sigma$ : 応力
- $\rho$ : 密度
- $p$ : 圧力
- $g$ : 外力加速度

### 条件
- 非圧縮
  - マッハ数が小さい
- 非粘性
- 非回転
- 定常・発達

### 質量保存則（連続の式）
$$
\partial_t\rho+\partial_i(\rho u_i)=0
$$

非圧縮
$$
\partial_iu_i=0
$$

### 運動量保存則（運動方程式）

$$
\partial_t(\rho u_i)+\partial_j(\rho u_i u_j)=\partial_i\sigma_{ii}+\rho g_i
$$

### ニュートン流体の構成方程式

$$
\sigma_{ij}=(-p+\lambda\partial_ku_k)\delta_{ij}+\mu d_{(ij)}
$$

静圧 $p$

速度勾配 $d_{ij}:=\partial_ju_i$ 

対称速度勾配 $d_{(ij)}:=(d_{ij}+d_{ji})/2$

### ナビエストークス方程式

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

### π定理

法則が $n$ 個の変数 $(q_1,q_2,,,q_n)$ で表現されていて，変数が $k$ 個の独立な基本単位で表されるとき，

|       | $e_1$ | ... | $e_k$ |
| :---: | ----- | --- | ----- |
| $q_1$ |       |     |       |
|   :   |       | $M$ |       |
| $q_n$ |       |     |       |

$k=\mathrm{rank}\,M$

無次元数の数 $=\mathrm{null}\,M$

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

## 流体の運動学

### 運動の記述

- 速度場 $u$
- 速度勾配テンソル $d_{ij} := \partial_ju_i$
- 変形速度テンソル $s_{ij} := d_{(ij)}$
  - 圧縮引張
    - 対称テンソルなので主軸が存在する
    - 体積変化は $(1+\lambda_1)(1+\lambda_2)(1+\lambda_3) \sim 1 + \lambda_1+\lambda_2+\lambda_3 = 1 + \Lambda$
    - 非圧縮の場合，トレース $\Lambda=0$ 
  - ずり変形 
    - 非対格成分はひし形状の変形を表す
    - 体積は保存
- 渦度 $\omega_k := \epsilon_{ijk}d_{ij}$
  - 速度勾配テンソルの反対称成分 $\Omega_{ij}:=d_{[ij]}=\epsilon_{ijk}\omega_k$
  - 回転を表すソレノイダル場（ $\partial_k\omega_k=0$）
- 渦線
  - 渦度ベクトルを繋いだ線
  - 渦線の接ベクトルが渦度ベクトルと一致する
  - $\frac{dx_i}{\omega_i}=\mathrm{const}$
- 渦菅
  - ある閉曲線を通過する渦線のなす閉曲面
  - 渦菅表面から渦度の出入りはない（渦菅表面の法線ベクトルと渦度ベクトルは直交）
- 渦糸
  - 断面積が微小な渦菅
  - 渦菅は曲線とみなせる
  - 渦菅内の渦度は一定（Helmholtzの第三法則）
  
### Helmholtzの法則

#### 第一法則（渦度方程式）

### 第二法則


