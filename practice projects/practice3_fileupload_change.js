let btn = document.querySelector("#uploadbtn");
let fileinput = document.querySelector("#file");

btn.addEventListener("click", function(){
    fileinput.click();
});

fileinput.addEventListener("change", function(dets){
    console.log(dets.target.files[0]);
    const file = dets.target.files[0];
    if(file){
    btn.textContent = file.name;
    }
});