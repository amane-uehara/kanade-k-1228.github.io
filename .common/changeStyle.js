const light = "https://kanade-k-1228.github.io/.common/light.css";
const dark = "https://kanade-k-1228.github.io/.common/dark.css";

window.addEventListener('load',()=>{
    console.log(allCookies)
    document.cookie
})

window.addEventListener('keydown',(e) => {
    const css = document.getElementById("style");
    if(e.key==="d"){
        css.href = dark;
    }if(e.key==="l"){
        css.href = light;
    }
})
