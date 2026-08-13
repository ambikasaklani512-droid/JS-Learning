let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let mins = document.querySelector("#minutes");
let secs = document.querySelector("#seconds");
let dateInput = document.querySelector("#dateInput");
let startBtn = document.querySelector("#startBtn");
let resetBtn = document.querySelector("#resetBtn");

// globally initializing timer
let timer;

// function for start timer
function startTimer() {
    let targettime = new Date(dateInput.value).getTime();

    if (isNaN(targettime)) {
        alert("please enter your target time !!");
        return;
    }

    clearInterval(timer);
    
    // function to update timer
    function updateTime() {
        //getting current time everytime the fnc runs including hours,mins,secs,days,etc
        let date = new Date();

        // getting the diffrernce time btw current and target time in miliseconds
        let difference_time = targettime - date.getTime();

        // when timer ends
        if (difference_time <= 0) {
            clearInterval(timer);
            updateDisplay("00", "00", "00", "00");
            return;
        }

        // getting days,hrs,mins,secs from miliseconds
        const days = Math.floor(difference_time / (1000 * 60 * 60 * 24));
        const hours = Math.floor(difference_time / (1000 * 60 * 60) % 24);
        const mins = Math.floor(difference_time / (1000 * 60) % 60);
        const secs = Math.floor(difference_time / (1000) % 60);

        // updating on screen
        updateDisplay(days, hours, mins, secs);
    }

    // runs and updates the timer
    updateTime();
    timer = setInterval(updateTime, 1000);
}

function updateDisplay(ndays, nhours, nmins, nsecs) {
    days.textContent = ndays;
    hours.textContent = nhours;
    mins.textContent = nmins;
    secs.textContent = nsecs;
}

// eventlistener for start and reset button
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", (e) => {
    clearInterval(timer);
    updateDisplay("00", "00", "00", "00");
    dateInput.value = "";
})
