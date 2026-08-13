let box = document.querySelector(".box");

box.addEventListener("mouseover",function(){
    box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "red";
});

window.addEventListener("mousemove", function(dets){
    box.style.top = dets.clientY + "px";
    box.style.left = dets.clientX + "px";
})