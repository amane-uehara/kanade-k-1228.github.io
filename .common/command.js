const urls = [
    "https://www.nicovideo.jp/watch/sm41310470",
    "https://www.nicovideo.jp/watch/sm41256311"
]

const keyToChar = (s) =>{
    if(s==="ArrowUp") return "U";
    else if(s==="ArrowDown") return "D";
    else if(s==="ArrowLeft") return "L";
    else if(s==="ArrowRight") return "R";
    else if(s==="Control") return "C";
    else if(s==="Shift") return "S";
    else if(s==="Alt") return "A";
    else return s;
}

const command = "UUDDLRLRba";

let history = "";

document.addEventListener('keydown',(e)=>{
    const key = keyToChar(e.key);
    history = `${history}${key}`;
    if(history.slice(-command.length) === command){
        const rand_index = Math.floor(Math.random() * urls.length);
        window.open(urls.at(rand_index),'_blank').focus();
    }
})
