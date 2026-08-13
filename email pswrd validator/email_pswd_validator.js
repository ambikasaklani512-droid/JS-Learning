let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    document.querySelector("#emailMessage").textContent = "";
    document.querySelector("#passwordMessage").textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    let emailans = emailRegex.test(email.value);
    let pswdans = passwordRegex.test(password.value);
    
    console.log(emailans);
    console.log(pswdans);

    let isValid = true;

    if (!emailans) {
        document.querySelector("#emailMessage").textContent = "email is incorrect!";
        document.querySelector(".message").style.display = "initial";
        isValid = false;
    }

    if (!pswdans) {
        document.querySelector("#passwordMessage").textContent = "password is incorrect!";
        document.querySelector(".message").style.display = "initial";
        isValid = false;
    }

    if (isValid){
        document.querySelector("#resultMsg").textContent = "Everything is correct!";
    }
});