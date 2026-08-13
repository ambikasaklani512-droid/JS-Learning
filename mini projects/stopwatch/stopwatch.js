const display = document.getElementById("display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let timer = null;
let seconds = 0;

const startdisplay = () => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    display.textContent = String(hours).padStart(2, "0") + ":" +
        String(mins).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0");

    console.log(seconds);
}

startButton.addEventListener("click", () => {
    if (timer !== null) return;
    timer = setInterval(() => {
        seconds++;
        startdisplay();
    },
        1000);
});

pauseButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
})

resetButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    startdisplay();
})
