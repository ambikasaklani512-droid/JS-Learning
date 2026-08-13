let input1 = document.querySelector("#first");
let count = document.querySelector(".maxcount");

let input2 = document.querySelector("#second")
let leftcount = document.querySelector(".leftcount");

input1.addEventListener("input",function(dets){
    length = input1.value.length;
    count.textContent = length;
    if(length > 30){
        count.style.color = "red";
    }
    else{
        count.style.color = "white";
    }
})

input2.addEventListener("input", function(){
    llength = 30 - input2.value.length;
    leftcount.textContent = llength;
    if(llength < 0){
        leftcount.style.color = "red";
    }
    else{
        leftcount.style.color = "white";
    }
})