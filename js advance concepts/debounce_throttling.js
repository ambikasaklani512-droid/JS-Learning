let inp = document.querySelector("input");

// debouncing - jb bhi specified delay hoga code me tb specified action occur hoga

function debounce(fnc, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fnc(...args);
        }, delay);
    }
}

//throttling - ye interval pr chlta h, code chalte time specified interval pr koi action occur hoga

function throttle(fnc, delay) {
    let timer = 0;
    return function (...args) {
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...args);
        }
    }
}

inp.addEventListener("input", throttle(function () {
    console.log(Date.now());
}, 2000));



