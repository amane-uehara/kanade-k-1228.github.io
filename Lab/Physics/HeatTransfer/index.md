% 伝熱工学
%
%

## 伝熱の形態

### 熱伝導 
  - フーリエの法則
    $$
    \begin{aligned}
      &q &=& \frac{dQ}{dA} &=& -\lambda \frac{dT}{dx}\\
     &熱流束 &=& 断面あたりの通過熱量 &=& - 温度勾配
    \end{aligned}
    $$

### 熱伝達 (Convective Heat Transfer)
  - 分子の集団が移動しながら熱エネルギーを伝える
  - ニュートンの冷却法則
    $$ 
    q = h(T_w-T_\infty) 
    $$
  - 強制対流（ファン）
  - 自然対流
  
### 熱放射 (Thermal Radiation)
  - ステファン-ボルツマンの式（黒体の熱放射）
    $$
    q_b = \sigma T^4
    $$
  - 実際は黒体ほどではない Gray Body 

### いろいろ
  - 相変化，
  - 物質移動
  - 高速
  - 希薄
  - マイクロ
  - 極低温
  - 超流動
  - 超高速
  - 非フーリエ
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


## 熱伝導

### 熱伝導方程式
$$
\rho c \partial_t T = \partial_i(\lambda^i \, \partial^i T) + w
$$

#### 等方性材料 ($\lambda_x=\lambda_y=\lambda_z=\lambda$)
$$
\rho c \partial_t T = \partial_i(\lambda \, \partial^i T) + w
$$

#### 定物性
$$
\partial_t T = \alpha \partial_i\partial^i T +  \frac{w}{\rho c}\\
温度伝導率\alpha:=\frac{\lambda}{\rho c}
$$

#### 定常
$$
 \partial_i\partial^i T +  \frac{w}{\lambda}=0
$$
ポアソン型の偏微分方程式

#### 内部発熱なし
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

#### 第1種 : 温度 : $h\rightarrow \infty$
$$
T_s=T_\infty
$$

#### 第2種 : 熱流束 : $h\rightarrow 0$
$$
\lambda\partial_n T = q_s
$$

#### 第3種 : 熱伝達 : $q_s = 0$
$$
-\lambda\partial_n T = h (T_s-T_\infty)
$$

### 無次元化

## 1次元定常熱伝導
対称な空間（平板，円柱，球殻）の熱伝導
$$
\frac{1}{r^\sigma}\partial_r(\lambda r^\sigma\partial_r T) + w = 0
$$

### 平板

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

物体表面 $T_S$から雰囲気 $T_\infty$ への熱流束を単純に表すと

$$
q=h(T_S-T_\infty)
$$

熱伝達率 $h$ は複雑な条件を代表した値

物体表面で流速が 0 であれば，フーリエの法則から

$$
q=-\lambda\left(\frac{\partial T}{\partial n}\right)_{n=0}
$$

よって熱伝達率は境界面の温度勾配によって定まる

$$
h=-\frac{\lambda}{T_S-T_\infty}\left(\frac{\partial T}{\partial n}\right)_{n=0}
$$

#### ヌッセント数

$$
Nu=\frac{hL}{\lambda}=\frac{h(T_S-T_\infty)}{\lambda \frac{T_S-T_\infty}{L}}
$$

表面から流体へ流れ出る熱のうち，熱伝達と熱伝導の比を表す


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
u \partial_x u + v \partial_y u = \frac{1}{\rho} \partial_x p + \nu \partial_y^2 u + \frac{F_x}{\rho} \\
\partial_y p = 0
$$
- エネルギー式
$$
u \partial_x T + v \partial_y T = \alpha \partial_y^2 T
$$

### 無次元数

代表速度 $U_\infty$ 代表長さ $L$ で無次元化する

※ 定数ではなく添え字が引数の関数

#### $Re$ : レイノルズ数

運動方程式の無次元数

$$
Re_L = \frac{U_\infty L}{\nu}=\frac{\rho U_\infty^2}{\mu U_\infty/L}
$$

慣性力と粘性剪断力の比（$Re=\infty$はサラサラ）

#### $Pe$ : ペクレ数

エネルギー式の無次元数

$$
Pe_L = \frac{U_\infty L}{\alpha}
$$

#### $Pr$ : プラントル数

$$
Pr=\frac{Pe}{Re}=\frac{\nu}{\alpha}=\frac{\delta}{\delta_t}
$$

物性値

通常は $Pr=1$ すなわち速度境界層と温度境界層は近い厚さ

### レイノルズのアナロジー

無次元化された運動方程式とエネルギー式

$$

$$

### 乱流

レイノルズ数 $Re=ux/\nu$ が流れの様子を代表する．レイノルズ数が小さい領域では層流であるが，限界レイノルズ数 $Re_C$ を超えるあたりで乱流に遷移する．乱流は熱や運動量の輸送が大きい．

乱流では速度が不規則に変動するので，速度の時間平均値についてのNS方程式を考える．


## 強制対流熱伝導


平板上を流れる流体

### 速度分布：プラジウスの解



### 温度分布：ポールハウゼンの解

yを無次元化して

$$
\nu = \frac{y}{\delta}
$$

温度を無次元化して

$$
\theta=\frac{T_S-T}{T_S-T_\theta}
$$

としたときのエネルギー式は

$$
\frac{d^2\theta}{d\nu^2}+\frac{Pr}{2}f\frac{d\theta}{d\nu}=0
$$

これを境界条件 $\theta(\nu=0)=T_S,\theta(\nu=\infty)=T_\infty$ で解くと，

$$
\theta = 
$$

### 熱伝達率

$$
h=-\frac{\lambda}{T_S-T_\infty}\left(\frac{\partial T}{\partial n}\right)_{n=0}
$$

を無次元化して

$$
Nu_x=\sqrt{Re_x}\left(\frac{\partial \theta}{\partial \nu}\right)_{\nu=0}
$$

を解く

プラントル数によって解が異なるが概ね

$$
N\!u_x = 0.332 Pr^{1/3}Re_x^{1/2}
$$

$$
h_x = \frac{\lambda}{L}N\!u_x
$$


<script>
function calcNu(){
  const coef = document.getElementById("nu-coef").value;
  const re = document.getElementById("nu-re").value;
  const l = document.getElementById("nu-l").value;
  const lam = document.getElementById("nu-lam").value;
  const ts = document.getElementById("nu-ts").value;
  const tinf = document.getElementById("nu-tinf").value;
  const pr = document.getElementById("nu-pr").value;
  const nu = coef*(re**(1/2))*(pr**(1/3));
  const h = lam*nu/l;
  document.getElementById("nu-nu").innerHTML=nu;
  document.getElementById("nu-h").innerHTML=h;
}
</script>

|            |                                                         |
| ---------- | ------------------------------------------------------- |
| 係数       | <input type="number" id="nu-coef" value="0.33"></input> |
| $Re_L$     | <input type="number" id="nu-re" value="1000"></input>   |
| $L$        | <input type="number" id="nu-l" value="0.1"></input>     |
| $\lambda$  | <input type="number" id="nu-lam" value="0.4"></input>   |
| $T_S$      | <input type="number" id="nu-ts"></input>                |
| $T_\infty$ | <input type="number" id="nu-tinf"></input>              |
| $Pr$       | <input type="number" id="nu-pr" value="8"></input>      |


<button onclick="calcNu()">計算</button>                


|          |                            |                             |
| -------- | -------------------------- | --------------------------- |
| $N\!u_L$ | $0.332 Pr^{1/3}Re_x^{1/2}$ | <span id="nu-nu">aaa</span> |
| $h_L$    | $\frac{\lambda}{L}N\!u_L$  | <span id="nu-h">aaa</span>  |


## 自然対流熱伝導

## 熱放射

