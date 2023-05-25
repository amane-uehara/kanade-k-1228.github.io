const light = "https://kanade-k-1228.github.io/.common/light.css";
const dark = "https://kanade-k-1228.github.io/.common/dark.css";

window.addEventListener('load',()=>{
    console.log(allCookies)
    document.cookie
})

const changeStyle = ()=>{
    const css = document.getElementById("style");
    css.href = css.href === light ? dark : light;
}
