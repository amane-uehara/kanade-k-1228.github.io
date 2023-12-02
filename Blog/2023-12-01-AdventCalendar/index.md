---
title: 第２回自作CPUを語る会やるよ！
date: 2023-12-01
author: Kanade
---

この記事は [自作CPU Advent Calendar 2023](https://adventar.org/calendars/8916) 1 日目の記事です。

こんにちは！Kanadeです。

計算機、作ってますか？作りましょう！

ということで、自作CPUを語る会の第２回を、12/3（日）にサイボウズ東京オフィス（日本橋）にて開催します！

参加登録はこちらから → [connpass](https://connpass.com/event/287012/)

計算機を作っている方、ぜひその計算機について存分に語ってください！これから計算機を作ってみたいと思ってる方、聞きに来てください！

## 第１回のふりかえり

第２回の前に、第１回のふりかえりをしていきましょう！
ハッシュタグ [#make_cpu](https://twitter.com/search?q=%23make_cpu&src=typed_query) への投稿、ありがとうございました！

### Kanadeの発表

最初は Kanade から、この会を開くに至った経緯をお話しました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">CPUを作ったことがある人が挙手する異常な空間。作ったことが無い人も、ぜひ自作CPUの沼へ... <a href="https://twitter.com/hashtag/make_cpu?src=hash&amp;ref_src=twsrc%5Etfw">#make_cpu</a></p>&mdash; きー坊 💉💉💉💉 (@jnkykn) <a href="https://twitter.com/jnkykn/status/1667747695195484160?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="qht" dir="ltr"><a href="https://twitter.com/hashtag/make_cpu?src=hash&amp;ref_src=twsrc%5Etfw">#make_cpu</a> <a href="https://t.co/C8ek0DytdG">https://t.co/C8ek0DytdG</a></p>&mdash; 湯村 翼 Tsubasa YUMURA (@yumu19) <a href="https://twitter.com/yumu19/status/1667750446075879424?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">確かにMFTとかで展示されてて「わー、すごいですね」とか当たり障りない会話をしつつ「レジスタは何bitが何個ですか？命令セットは？クロックサイクルは？」とか聞きたくなったりしてたから聞けるの楽しい。<a href="https://twitter.com/hashtag/make_cpu?src=hash&amp;ref_src=twsrc%5Etfw">#make_cpu</a></p>&mdash; TEFSOM (@Si_SJ_MOSFET) <a href="https://twitter.com/Si_SJ_MOSFET/status/1667751061363503105?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

というわけで、自分のCPUのアーキテクチャについて語らせてもらいました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ハードウェアの加算器の部分を減算器にしたり乗算器にすると、同じソフトで「一般化されたフィボナッチ数列」を計算できる。ハードとソフトの双対性。 <a href="https://twitter.com/hashtag/make_cpu?src=hash&amp;ref_src=twsrc%5Etfw">#make_cpu</a></p>&mdash; uchan (@uchan_nos) <a href="https://twitter.com/uchan_nos/status/1667751717474291712?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ハードウェアを変更して動作を変更するという考え方、リレーコンピュータらしくてめっちゃおもろいっすね... <a href="https://twitter.com/hashtag/make_cpu?src=hash&amp;ref_src=twsrc%5Etfw">#make_cpu</a></p>&mdash; /\/asTTYなすちゃん (@ethllc4) <a href="https://twitter.com/ethllc4/status/1667752205666099208?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### あおとさんの発表

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/make_cpu?src=hash&amp;ref_src=twsrc%5Etfw">#make_cpu</a><br>「自分もリレーでCPUを作って持ってきたんですけど…」<br><br>↑！？！？！？</p>&mdash; せながおぢさん【大阪カンファ共同代表】 (@Seyanaga) <a href="https://twitter.com/Seyanaga/status/1667754186380034048?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">リレーで作ってる人多すぎて草 <a href="https://twitter.com/hashtag/make_cpu?src=hash&amp;ref_src=twsrc%5Etfw">#make_cpu</a></p>&mdash; ミタ式アンプ (@mtyk1t) <a href="https://twitter.com/mtyk1t/status/1667754596335521793?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### ちぇりたくさんの発表

### うーちゃんさんの発表

### 交流会＆LT会

### 会を終えて

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">FPGAでCPU組んでるので低レイヤーだと思っていたら、他の発表者がリレーだったりNANDだったりで感覚麻痺してるの面白すぎる <a href="https://twitter.com/hashtag/make_cpu?src=hash&amp;ref_src=twsrc%5Etfw">#make_cpu</a></p>&mdash; 甘なお (@amanao_) <a href="https://twitter.com/amanao_/status/1667767990748860417?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">おもろかったわ<br>第2回はもうちょっと高レイヤになることを期待()<a href="https://twitter.com/hashtag/make_cpu?src=hash&amp;ref_src=twsrc%5Etfw">#make_cpu</a></p>&mdash; Y.M.D オフライン (@YMD_Glasses) <a href="https://twitter.com/YMD_Glasses/status/1667849437245505542?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

第１回は超低レイヤな会でしたが高レイヤ（FPGAなど）の発表も大歓迎です！というかなんでこんなハードウェア寄りなんですか！普通自作CPUってFPGAじゃないんですか！？

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/make_cpu?src=hash&amp;ref_src=twsrc%5Etfw">#make_cpu</a><br>さて……… <a href="https://t.co/5t3BwpxjNP">pic.twitter.com/5t3BwpxjNP</a></p>&mdash; せながおぢさん【大阪カンファ共同代表】 (@Seyanaga) <a href="https://twitter.com/Seyanaga/status/1667799531742990336?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
