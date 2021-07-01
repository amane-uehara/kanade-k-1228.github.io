% ロジック
%
%

## ステートマシン

``` typescript
type State = any;
type Transition = (s: State) => State;

let s: State;
let f: Transition;

while (true) {
  s = f(s);
}
```

![](fig01.drawio.svg)

### 入力を受け付けるステートマシン

### スイッチをONするとOFFするロボット

![](https://m.media-amazon.com/images/I/41o0i4rIKNL._SL500_.jpg)

![](fig02.drawio.svg)

``` typescript
type State = "on" | "off";
type Transition = (s: State) => State;

let s: State = "off";
let f: Transition = (s: State) => "off";
let readInput: () => State;

while (true) {
  s = f(s);
  s = readInput();
}
```

## プログラマブルステートマシン

``` typescript
type State = any;
type Transition = (s: State) => State;

let s: State;
let F: Transition[];
let i: number = 0;

while (true) {
  s = F[i](s);
  i++;
}
```


### 条件分岐

``` typescript
type State = any;
type Transition = (s: State) => [State, number];

let s: State;
let F: Transition[];
let i: number = 0;

while (true) {
  [s,i] = F[i](s);
}
```


