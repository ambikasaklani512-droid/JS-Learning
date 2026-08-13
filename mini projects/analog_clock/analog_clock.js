let hr = document.querySelector("#hour");
let min = document.querySelector("#minute");
let sec = document.querySelector("#second");

function displayTime(){
    //getting  real time date data including hours,mins,secs,days,etc
    let date = new Date();

    //getting new hours, mins, and secs from date
    let getHr = date.getHours();
    let getMin = date.getMinutes();
    let getSec = date.getSeconds();

    //calculating rotation for hours, mins, and secs
    let hrotation = getHr*30 + getMin*0.5;
    let mrotation = getMin*6 ;
    let srotation = getSec*6;

    //adding rotation to css
    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}

//calling the function once initially so that the time does not wait for 1 sec before starting 
displayTime();
setInterval(displayTime, 1000);