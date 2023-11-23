---
title: 姿勢と回転の表現形式と変換
---

ロボットの制御には、位置と姿勢の制御が必要である。位置・速度は慣れ親しんだxyzの空間で表現できるが、姿勢・角速度は回転群で表現する必要がある。

## 表現形式

回転は数学的には特殊ユニタリ群SO(3)と呼ばれる群であり、この表現として以下の3つの表現がよく使われている。

### オイラー角

xyz軸周りの回転を順番に表したものである。
自然な表現ではあるが、大きな回転を表そうとすると無理が生じる。基本的には小さな回転を表現するのに適した形式であることを気に留めておきたい。

### 回転行列

座標系A→座標系Bの変換が回転行列であることを

- 基底ベクトルが直交を保つ
- 基底ベクトルが長さを保つ
- 右手系・左手系が一致する

### クオータニオン

## 回転の合成

## 四元数の代数

### オイラーの公式