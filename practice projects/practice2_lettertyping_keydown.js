
let letter = document.querySelector("h3");

window.addEventListener("keydown", function (event) {
    if (event.key == " ") {
        letter.textContent = "SPC";
    }
    else{
        letter.textContent = event.key;
    }
});