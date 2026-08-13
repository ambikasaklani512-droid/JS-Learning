let h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
    h1.style.color = "red";
});

let para = document.querySelector("p");

para.addEventListener("dblclick", function(){
    para.style.backgroundColor = "yellow";
});

let inp = document.querySelector("input");

inp.addEventListener("input", function(event){
    if(event.data !== null){
        console.log(event.data);
    }
});

let opt = document.querySelector("select");

let paramsg = document.createElement("p");
paramsg.textContent = "device is selected!";
paramsg.style.color = "green";

// opt.addEventListener("change", function(event){
//     console.log(event.target.value);
//     document.body.append(paramsg);
// })
opt.addEventListener("change", function(event){
    if(event.target.value !== null){
        paramsg.textContent = `${event.target.value} is selected !`;
        console.log(event.target.value);
        document.body.append(paramsg);
    }
    
})