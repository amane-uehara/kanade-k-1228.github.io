# オペアンプ回路

## オペアンプの動作

$$ V_{out}=A (V_+ - V_-) $$

仮定

$$ A\rightarrow \infty $$

実際に，増幅度は数万のオーダです．ただし，オペアンプの動作電源の電圧以上の出力電圧は出せません．

$$
I_+,I_-=0 \\
-\infty \lt I_{out} \lt \infty
$$

入力電流=0，出力電流はいくらでも取り出せると仮定します．

### バーチャルショート

オペアンプは $V_+=V_-$ となるように働きます．ただ電流は流れないのでバーチャルショートと言われます．

## 増幅回路

$$
V_{out}=-\frac{1}{1+\frac{1}{A}+\frac{R_2}{R_1}\frac{1}{A}}\frac{R_2}{R_1}V_{in}\rightarrow -\frac{R_2}{R_1}V_{in}
$$

## 微分回路

$$
V_{out}=-\frac{1}{1+\frac{1}{A}}RC\frac{dV_{in}}{dt}\rightarrow -RC\frac{dV_{in}}{dt}
$$

## 積分回路

$$
V_{out}\rightarrow -\frac{1}{RC}\int_0^t V_{in} dt
$$

## 加算回路

$$
V_{out}=\rightarrow -R_f\sum_{i=1}^n \frac{V_i}{R_i}
$$