// all buttons
let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let string = "";

// to select each button
buttons.forEach(function (button) {
    //click event on button
    button.addEventListener("click", function (evt) {
        console.log(evt);

        const value = evt.target.innerHTML;

        if (evt.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        }
        else if (value === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if(value === "="){
            try{
                string = Function( `return ${string}`)();
                input.value = string;
            }
            catch{
                input.value = "error";
                string = "";
            }
        }
        else {
            string = string + value;
            input.value = string;
        }
    });
})
