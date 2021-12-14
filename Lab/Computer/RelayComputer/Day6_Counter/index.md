% カウンタ回路を作ってみる
%
% 2021-12-06

これは [リレーから始める CPU 自作 Advent Calendar 2021](https://adventar.org/calendars/7052) 6 日目の記事です。[<<< 5 日目](../Day5_DFF/)

## 分周器

DFF を使った回路で一番シンプルなのが分周器です。

![](./img/Divider.dio.svg)

Q と D が反転するようになっています。

![](img/DividerTimingChart.dio.svg)

クロック信号の周波数を半分にします。

## カウンタ

この分周器を複数繋げて、クロックを半分、半分、にしていくと、

![](img/CounterTiming.dio.svg)

[>>> 7 日目](../Day7_Clock/)
