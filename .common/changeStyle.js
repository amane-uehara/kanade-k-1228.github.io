const changeStyle = ()=>{
    const css = document.getElementById("style");
    const light = "https://kanade-k-1228.github.io/.common/style.css";
    const dark = "https://kanade-k-1228.github.io/.common/dark.css";
    css.href = css.href === light ? dark : light;
}
