let button = document.querySelector("#themeBtn");
let matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

function updateMode() {
    button.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
}

function setOSDarkOrLight() {
    // if my OS is in dark mode, 
    if (matchMedia.matches) {
        document.body.classList.add("dark");
    }
    else {
        document.body.classList.remove("dark");
    }
    updateMode();
}

//load saved theme
const savedtheme = localStorage.getItem("theme");


//if there is any saved theme, apply the toggle otherwise if there is no saved theme then apply OStheme.
if(savedtheme){
    document.body.classList.add(savedtheme);
}
else{
    setOSDarkOrLight();
}
updateMode();

// if our OS display changes, we want our website  screen to also change accordingly.
matchMedia.addEventListener("change", setOSDarkOrLight);

//toggle theme
button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.removeItem("theme");
    }
    updateMode();
});