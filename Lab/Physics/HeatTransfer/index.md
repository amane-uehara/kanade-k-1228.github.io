% 伝熱工学
%
%

## 伝熱の形態

### 熱伝導 
  - フーリエの法則
    $$ q = \frac{dQ}{dA} = -\lambda \frac{dT}{dx} $$
    熱流束 = 断面あたりの熱量 = - 温度勾配
### 熱伝達 (Convective Heat Transfer)
  - 分子の集団が移動
  - 強制対流（ファン）
  - 自然対流
  - ニュートンの冷却法則
    $$ q = h(T_w-T_\infty) $$
  - 速度境界層
  - 温度境界層
### 熱放射 (Thermal Radiation)
  - ステファン-ボルツマンの式（黒体の熱放射）
    $$ q_b = \sigma T^4 $$
  - Gray Body
### いろいろ
  - 相変化
  - 物質移動
  - 高速
  - 希薄
  - マイクロ
  - 極低温：超流動
  - 超高速：非フーリエ
  - バイオ：食品
## 熱伝導率・温度伝導率
### 気体
  $$ \alpha = \frac{\lambda}{\rho c}=\frac{1}{3}vl $$
  - 理想気体
### 液体
  $$ \alpha = a l_0 $$
  - $a$ : 音速 
  - $l_0^3$ : 分子が占める体積
### 固体
  $$ \lambda = \lambda_p + \lambda_e $$
  - $\lambda_p$ : フォノン（格子振動）
  - $\lambda_e=\frac{1}{3}\rho c$? : 自由電子
  - 金属
  - 常温の金属では $\lambda_e>>\lambda_p$
  - 格子振動による散乱
    - 界面・欠陥などによる散乱
    - $$ \lambda_e = \frac{1}{aT^2 + b/T}$$
  - Wiedemann-Franz-Lorenz式（熱伝導率と電気伝導率の関係）
  $$ \frac{\lambda_e}{\sigma T} = \frac{\pi^2}{3}\left(\frac{k}{e}\right)^2 = 2.45\times10^{-8}\left[\frac{V^2}{K^2}\right] $$
  - 格子振動
  $$ \lambda_p=\frac{1}{3}\rho c v_p l_p $$
  - $c$ : フォノンの比熱
  - $\rho$ : 
  - $c$ :

## 熱伝導方程式
$$
\rho c \partial_t T = \partial_i(\lambda^i \, \partial^i T) + w
$$

### 等方性材料 ($\lambda_x=\lambda_y=\lambda_z=\lambda$)
$$
\rho c \partial_t T = \partial_i(\lambda \, \partial^i T) + w
$$

### 定物性
$$
\partial_t T = \alpha \partial_i\partial^i T +  \frac{w}{\rho c}\\
温度伝導率\alpha:=\frac{\lambda}{\rho c}
$$

### 定常

$$
 \partial_i\partial^i T +  \frac{w}{\lambda}=0
$$

ポアソン型の偏微分方程式

### 内部発熱なし

$$
 \partial_i\partial^i T =0
$$
ラプラス方程式

### 初期条件
$$
T(t=0)=T(x,y,z)
$$

### 境界条件
表面のある微小面$s$でのエネルギーバランスを考える．微小面の法線方向の軸$n$，加熱量$q_s$，外界の無限遠点までの熱伝達率$h$とすると，
$$
-\lambda\frac{\partial T}{\partial n} - h (T_s - T_\infty) + q_s=0
$$

- 第1種 : 温度 : $h\rightarrow \infty$
$$
T_s=T_\infty
$$

- 第2種 : 熱流束 : $h\rightarrow 0$
$$
\lambda\partial_n T = q_s
$$

- 第3種 : 熱伝達 : $q_s = 0$
$$
-\lambda\partial_n T = h (T_s-T_\infty)
$$

### 無次元化

## 1次元定常熱伝導
対称な空間（平板，円柱，球殻）の熱伝導
$$
\frac{1}{r^\sigma}\partial_r(\lambda r^\sigma\partial_r T) + w = 0
$$

### $\sigma=0$
$$
\partial_x (\lambda \partial_x T) + w = 0
$$
xで積分して，
$$
\lambda\partial_x T + \int_0^x w dx = c_1
$$
熱伝導率・内部発熱が一定の場合は，
$$
\lambda\partial_x T + w x = c_1
$$
xで積分して，
$$
T = -\frac{w}{2\lambda}x^2 + c_1 x + c_2
$$
境界条件
-  $T(x_1)=T_1\quad T(x_2)=T_2$

- $T(0)=T_1\quad -\lambda\partial_x T = h(T_2-T_\infty)$


## 熱伝達

物体表面（温度 $T_S$）から雰囲気（$T_\infty$）への熱流束を単純に表すと

$$
q=h(T_S-T_\infty)
$$

熱伝達率 $h$ は複雑な条件を代表した値

物体表面で流速が 0 であれば，フーリエの法則から

$$
q=-\lambda\left(\frac{\partial T}{\partial n}\right)_{n=0}
$$

よって熱伝達率は流体の温度勾配によって定まる

$$
h=-\frac{\lambda}{T_S-T_\infty}\left(\frac{\partial T}{\partial n}\right)_{n=0}
$$

### 層流・乱流

レイノルズ数 $Re=ux/\nu$ が流れの様子を代表する．

レイノルズ数が小さい領域では層流であるが，限界レイノルズ数 $Re_C$ を超えるあたりで乱流に遷移する．

乱流は熱や運動量の輸送が大きい．


### 熱伝達の基礎方程式

- 解析の仮定
  - 非圧縮
  - 定常流
  - 定物性
  - 内部発熱なし
  - 圧力仕事・粘性散逸を無視
- 連続の式
$$
\partial_x u + \partial_y v = 0
$$
- 運動方程式
$$
\begin{aligned}
u \partial_x u + v \partial_y u = \frac{1}{\rho} \partial_x p + \nu (\partial_x^2 u + \partial_y^2 u) + \frac{F_x}{\rho} \\
u \partial_x v + v \partial_y v = \frac{1}{\rho} \partial_y p + \nu (\partial_x^2 v + \partial_y^2 v) + \frac{F_y}{\rho}   
\end{aligned}
$$
- エネルギー保存則
$$
u \partial_x T + v \partial_y T = \alpha (\partial_x^2 T + \partial_y^2 T)
$$

温度伝導率 $\alpha:=\frac{\lambda}{\rho c_P}$

### 境界層近似

> 速度境界層 $\delta$ は十分薄い 
> $$
> \delta(x) \ll x
> $$

- 連続の式
$$
\partial_x u + \partial_y v = 0
$$
- 運動方程式
$$
\begin{aligned}
u \partial_x u + v \partial_y u &= \frac{1}{\rho} \partial_x p + \nu \partial_y^2 u + \frac{F_x}{\rho} \\
\frac{1}{\rho} \partial_y p &= 0
\end{aligned}
$$
- エネルギー式
$$
u \partial_x T + v \partial_y T = \alpha \partial_y^2 T
$$






