let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");
let cardcontainer = document.querySelector(".cardcontainer");

form.addEventListener("submit", function(event){
    // form submit pr reload na ho
    event.preventDefault();
    // print all values of input
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(inputs[2].value);
    console.log(inputs[3].value);

    
let card = document.createElement("div");
card.classList.add("card");

let profile = document.createElement("div");
profile.classList.add("profile");
let image = document.createElement("img");
image.setAttribute("src",inputs[0].value);

let name = document.createElement("h3");
name.textContent = inputs[1].value;
let about = document.createElement("h5");
about.textContent = inputs[2].value;
let desc = document.createElement("p");
desc.textContent = inputs[3].value;


profile.appendChild(image);
card.appendChild(profile);
card.appendChild(name);
card.appendChild(about);
card.appendChild(desc);

cardcontainer.appendChild(card);

main.appendChild(cardcontainer);

// after all the elements created, through all the info from the inputs, the card is generated.
// after which we want the input to be cleared after submitting.
inputs.forEach(function(inp){
    if(inp.type !== "submit"){
    inp.value = "";
    }
});

});



