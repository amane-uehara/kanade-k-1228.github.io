const history = [];
const command = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
const url = "https://example.com";
document.addEventListener('keypress',(e)=>{
    history = [...history, e.key];
    console.log(history);
    if(history === command){
        window.open(url,'_blank').focus();
    }
})
