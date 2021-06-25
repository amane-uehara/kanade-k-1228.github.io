% WSLに接続したVSCodeにclang-formatを追加する
%
% 2021-01-06

### LLVMをインストール

[LLVM](https://releases.llvm.org/download.html) のclang-format.exeを使う

### WSL側からLLVMへのパスを通して

```sh
export PATH=$PATH:/mnt/c/'Program Files'/LLVM/bin
```

### clang-format の拡張機能をインストールして

[https://marketplace.visualstudio.com/items?itemName=xaver.clang-format:embed:cite]


### settings.json

```json
"clang-format.executable": "/mnt/c/Program Files/LLVM/bin/clang-format.exe"
```

（VSCodeにclang-formatの場所を教える）

```json 
"[c]": {
    "editor.defaultFormatter": "xaver.clang-format"
  },
```

（言語ごとのフォーマッタの設定）

を追加すればおｋ

ついでに

```json 
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
```

を設定しとくと編集時・保存時にフォーマットしてくれるよ


