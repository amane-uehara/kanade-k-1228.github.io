---
title: フーリエ変換
---

## フーリエ級数展開

> 周期 $T$
>
> $$
> a_n = \f{2}{T}\int_{0}^{T} f(t)\cos\f{2\pi nt}{T} dt
> $$
>
> $$
> b_n = \f{2}{T}\int_{0}^{T} f(t)\sin\f{2\pi nt}{T} dt
> $$
>
> $$
> f(t) = \f{a_0}{2} + \sum_n \l\{a_n\cos\f{2\pi nt}{T} + b_n\sin\f{2\pi nt}{T}\r\}
> $$

## 複素フーリエ級数展開

> 周期$T$
>
> $$
> c_n = \f{1}{T} \int_0^T \exp\l(-2\pi i\f{nt}{T}\r) dt
> $$
>
> $$
> f(t) = \sum_{n=-\infty}^{+\infty} c_n \exp\l(2\pi i\f{nt}{T}\r)
> $$

## フーリエ変換

> $$
> \F [f(t)] = \f{1}{\sqrt{2\pi}} \intinf f(t)\exp(-ikt) dt
> $$
>
> $$
> \F^{-1} [f(k)] = \f{1}{\sqrt{2\pi}} \intinf \exp(ikx) dk
> $$
