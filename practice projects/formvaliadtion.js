let form = document.querySelector("form");
let input = document.querySelector("input");
let nm = document.querySelector("#name");
let nmalert = document.querySelector("#namealert");
let email = document.querySelector("#email");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    console.log(emailRegex.test("john@example.com")); // true

    const usernameRegex = /^[A-Za-z0-9_]{3,20}$/;

    console.log(usernameRegex.test("john_123")); // true

    if (nm.value.length < 3) {
        nmalert.style.display = "initial";
    }
    else {
        nmalert.style.display = "none";
    }
})