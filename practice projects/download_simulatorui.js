const progressBar = document.querySelector("#progressBar");
const percentage = document.querySelector("#percentage");
const button = document.querySelector("#downloadBtn");
const status = document.querySelector("#status");

let count = 0;
button.addEventListener("click", function(){
    status.textContent = "downloading...";
    let progress = setInterval(function(){
        if(count <= 99){
            inccount = count++;
            progressBar.style.width = `${inccount}%`;
            percentage.textContent = `${inccount}%`;
        }
        else{
            status.textContent = "downloaded!";
            status.style.color = "green";
            percentage.textContent = "100%";
            clearInterval(progress);
        }
    }, 10000/100);
})