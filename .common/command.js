const urls = [
    "https://www.nicovideo.jp/watch/sm41256311",
    "https://www.nicovideo.jp/watch/sm41310470",
]

const arrow = (s) =>{
    if(s==="ArrowUp") return "U";
    else if(s==="ArrowDown") return "D";
    else if(s==="ArrowLeft") return "L";
    else if(s==="ArrowRight") return "R";
    else return s;
}

const command = "UUDDLRLRba";

let history = "";

document.addEventListener('keydown',(e)=>{
    const key = arrow(e.key);
    history = `${history}${key}`;
    if(history.length>10){
        history = history.slice(-10);
    }
    console.log(history);
    if(history === command){
        const rand_index = Math.floor(Math.random() * urls.length);
        window.open(urls.at(rand_index),'_blank').focus();
    }
})
