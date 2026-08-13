// it is need to be repeated!

let count = document.querySelector(".countdown");
let container = document.querySelector(".container");
let button = document.querySelector("button");

let startcount = 10;
count.textContent = startcount;


button.addEventListener("click", function (dets) {
    let countdown = setInterval(function () {
        if (startcount < 0) {
            let successtext = document.createElement("p");
            successtext.textContent = "countdown stops here successfully!";
            successtext.style.color = "green";
            container.appendChild(successtext);

            clearInterval(countdown);

            count.textContent = 10;
        }
        else {
            console.log(startcount--);
            if (startcount >= 0) {
                count.textContent = startcount;
            }
        }
    }, 1000);
});
