% 2048 on リレーコンピュータ
%
%

![](./algo.drawio.svg)


![](./reduct.drawio.svg)



|                       |                       |                       |                       |
| --------------------- | --------------------- | --------------------- | --------------------- |
| <span id="11"></span> | <span id="12"></span> | <span id="13"></span> | <span id="14"></span> |
| <span id="21"></span> | <span id="22"></span> | <span id="23"></span> | <span id="24"></span> |
| <span id="31"></span> | <span id="32"></span> | <span id="33"></span> | <span id="34"></span> |
| <span id="41"></span> | <span id="42"></span> | <span id="43"></span> | <span id="44"></span> |


<script>
    let board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

    function randomPut(){
        var i, j, count=[];
        for(i=0;i<4;i++) for(j=0;j<4;j++) if(board[i][j]===0) count.push([i,j]);
        const k = Math.floor(Math.random()*count.length);
        board[count[k][0]][count[k][1]]=2;
    }

    function show(){
        let i,j;
        for(i=1;i<=4;i++)for(j=1;j<=4;j++)if(board[i-1][j-1]){
            document.getElementById(""+i+j).innerHTML=board[i-1][j-1];
        }
    }

    function reduct(input){
        if(input[0]===0) return input.slice(1);
        else if(input[0]===input[1]) return [input[0]*2, ...input.slice(2)];
        else return input;
    }

    function reductLine(input){
        const out0 = reduct(input);
        const out1 = reduct(out0.slice(1));
        const out2 = reduct(out1.slice(1));
        return [out0[0],out1[0],out2[0],out2[1]];
    }

    function init(){
        board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        randomPut();
        show();
    }

    function up(){
        reductLine(board)
    }

</script>

<button onclick="init()">Init</button>
<button onclick="show()">↑</button>
<button onclick="show()">↓</button>
<button onclick="show()">→</button>
<button onclick="show()">←</button>



