% 半導体
%
%

## VLSI 設計

### MOS の特性

- OFF 時
  - 弱反転のリーク電流
- ON 時
  - 基盤バイアス効果
    - 閾値電圧が上がり電流が減り充放電時間がかかり速度が下がる
- たとえば，対称に見える NAND の二つの MOS の特性は全然違ってくる
- MOS の特性をいちいち考えると大変なので，モデル化する

### CMOS

- 反転論理
- 非反転論理
  - NMOS が ON のとき 1 が下がり，PMOS が ON のとき 0 が上がる．
  - 振幅が小さくなる
  - 非反転のインバータを繋げてくと，途中で飽和領域じゃなくなる
