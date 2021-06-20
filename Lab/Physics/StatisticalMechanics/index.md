% 統計力学
%
%

## 熱力学の復習

### 基本法則

第一法則 
$$ dU = δQ + δW $$
第二法則 
$$ \oint δQ/T \leq 0 $$

- 準静的 
  $$ δW = -pdV $$
- 可逆 
  $$ dS = δQ/T = 0 $$
- 準静的・可逆 
  $$ dU = TdS - pdV $$
- 物質の増減 
  $$ dU = TdS - pdV + \mu dN $$

### マクスウェルの関係式

1. エネルギー $U(S,V)$
   $$ dU = TdS - pdV $$

   $$
   dU = \left(\frac{\partial U}{\partial V}\right)dV + \left(\frac{\partial U}{\partial S}\right)dS
   $$

   を比較すると，

   $$ -p = \left(\frac{\partial U}{\partial V}\right) $$
   $$ T = \left(\frac{\partial U}{\partial S}\right) $$

   U が C^2 以上なら二階微分は可換で

   $$
   \left(\frac{\partial p}{\partial S}\right)_V = -\left(\frac{\partial T}{\partial V}\right)_S
   $$

2. ヘルムホルツエネルギー $F(T,V) = U - TS$
3. ギブスエネルギー $G = U - TS + pV$

### 一般の熱力学的状態方程式

エネルギー保存

$$
dU=Tds-PdV
$$

$$
\left(\frac{\partial U}{\partial V}\right)_T=T\left(\frac{\partial S}{\partial V}\right)_T-P
$$

マクスウェルの関係式

$$
\left(\frac{\partial S}{\partial V}\right)_T=\left(\frac{\partial P}{\partial T}\right)_V
$$

より，

$$
\left(\frac{\partial U}{\partial V}\right)_T=T\left(\frac{\partial P}{\partial T}\right)_V-P
$$

※ $U,p,V,T$ の関係式

## ミクロカノニカル分布

$N$ 個の粒子があり，全エネルギーが $E$ の系について，エネルギー状態 $E_i$ にある粒子の数 $N_i$ を知りたい．

$$
\sum_i N_i  = N \\
\sum_i E_i N_i  = E
$$

粒子ひとつひとつを区別した，微視的状態は等確率に出現するが， 
粒子を区別せずに巨視的状態として見たときは，分布に偏りがある．

ある巨視的状態に含まれる微視的状態の数は

$$
W(N_0,N_1,,,)=\frac{N!}{N_0!N_1!...}
$$

最もよく出現する巨視的状態 $(N_0,N_1,,,)$ は $W$ が最大となる状態で，

$$
N_i = C\exp\left(-\frac{E_i}{k_BT}\right)
$$

これをボルツマン分布という．

Nが十分大きいとき，粒子系はボルツマン分布になっている．

導出：

## エントロピー

ある微視的状態 $i$ が出現する確率 $P_i$

$$
S=-k_B\sum_i P_i\ln P_i
$$

ミクロカノニカルの場合 $P_i=1/W$ なので，

$$
S=k_B\ln W
$$

エントロピー：熱力学 と 微視的状態数：統計力学 を結びつける式になっている．

ボルツマン分布の場合

$$
S = k_B (N\ln N - \sum_i N_i \ln N_i) = k_B N\ln N - k_B N \ln C + \frac{E}{T}
$$

### 配置エントロピー

$\mathbb{N}$ マスの空間（１マスの体積$v$）に $n$ 個の分子を排他的に配置する．

微視的状態数
$$
W=\frac{N^n}{n!}
$$

配置エントロピー
$$
S=k_b\ln(\frac{N^n}{n!})
$$

$$
\frac{d S}{d V} = \frac{k_B}{v}\frac{d}{dN}\{n\ln N-\ln(n!)\} = \frac{k_B n}{V}
$$

一方，熱力学から
$$
\left(\frac{\partial S}{\partial V}\right)_U=\frac{P}{T}
$$

状態方程式

$$
PV=nk_BT
$$

## カノニカル分布（カノニカルアンサンブル）（正準分布）

熱浴Bとそれに接する系A

$$
N_A+N_B=N\\
E_A+E_B=E\\
W(E_A,E_B)=W_A(E_A)W_B(E-E_A)
$$

$$
W(E)=\sum_{E_A+E_B=E}W(E_A,E_B)=\sum_{E_A}W_A(E_A)W_B(E-E_A)=W_A*W_B
$$

## 気体分子運動論


