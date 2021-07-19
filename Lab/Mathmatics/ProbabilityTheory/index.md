% 確率論
%
%

$$
\newcommand{\bs}{\backslash}
\newcommand{\R}{\mathbb{R}}
\newcommand{\F}{\mathcal{F}}
$$

## 確率空間

測度空間 $(\Omega,\F,P)$ が $P(\Omega)=1$ を満たすとき，$P$ を確率，$(\Omega,\F,P)$ を確率空間とよぶ．

### 確率変数

$X:\Omega\rightarrow\R$ が確率変数であるとは， $X$ が $\F$ -可測 であること

確率変数の$P$に関する積分を

$$
E[X] = \int X(\omega) dP(\omega)
$$

$A\in\F$ について

$$
E[X,A] = E[X1_A]
$$
