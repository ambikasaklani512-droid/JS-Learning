let list = document.querySelector("ul");

list.addEventListener("click", function (event) {
    console.log(event);
    event.target.classList.toggle("lt");
});