//form ko authenticate kro 
//form ka data local storage me save kro 
//local storage se hi cards ko show kro 
//action buttons k use se stack me cards change kro


//variables 
let addBtn = document.querySelector("#addBtn");
let formcontainer = document.querySelector(".form-container");
let form = document.querySelector("form");
let cardscontainer = document.querySelector(".container");
let closeBtn = document.querySelector(".close-btn");
let createBtn = document.querySelector(".create-btn");
let cardsStack = document.querySelector(".card-stack");
let upBtn = document.querySelector("#upBtn");
let downBtn = document.querySelector("#downBtn");

// Image URL
const imageUrlInput = document.querySelector('input[placeholder="https://example.com/photo.jpg"]');

// Full Name
const fullNameInput = document.querySelector('input[placeholder="Enter full name"]');

// Home Town
const homeTownInput = document.querySelector('input[placeholder="Enter home town"]');

// Purpose
const purposeInput = document.querySelector('input[placeholder="e.g., Quick appointment note"]');

// Category radio buttons
const emergencyRadio = document.querySelector('input[name="category"]:nth-of-type(1)');
const importantRadio = document.querySelector('input[name="category"]:nth-of-type(2)');
const urgentRadio = document.querySelector('input[name="category"]:nth-of-type(3)');
const noRushRadio = document.querySelector('input[name="category"]:nth-of-type(4)');

// Or get all category radios
const categoryRadios = document.querySelectorAll('input[name="category"]');


//code starts here 

addBtn.addEventListener("click", function () {
    // document.body.style.backgroundColor = "#262626";
    formcontainer.style.display = "flex";
    cardscontainer.style.display = "none";
})

closeBtn.addEventListener("click", function () {
    formcontainer.style.display = "none";
    cardscontainer.style.display = "flex";
})

//function for saving in local storage
function saveToLocalStorage(obj) {
    //if there is no data in the local storage
    if (localStorage.getItem("tasks") === null) {
        let Tasks = [];
        Tasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(Tasks));
    }
    //if there is already data in the local storage
    else {
        let oldTaskss = localStorage.getItem("tasks");
        oldTaskss = JSON.parse(oldTaskss);
        oldTaskss.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTaskss));
    }
}

// function to show cards on the cards stack
function showCards() {
    //get all the tasks data from local storage in its original form
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    tasks.forEach(function (task) {

        // Card
        const card = document.createElement("div");
        card.classList.add("card");

        // Image
        const img = document.createElement("img");
        img.src = task.imageUrl;
        img.alt = "profile";

        // Name
        const h2 = document.createElement("h2");
        h2.textContent = task.fullName;

        // Home Town
        const info1 = document.createElement("div");
        info1.classList.add("info");

        const homeLabel = document.createElement("span");
        homeLabel.textContent = "Home town";

        const homeValue = document.createElement("span");
        homeValue.textContent = task.homeTown;

        info1.append(homeLabel, homeValue);

        // Purpose
        const info2 = document.createElement("div");
        info2.classList.add("info");

        const purposeLabel = document.createElement("span");
        purposeLabel.textContent = "Purpose";

        const purposeValue = document.createElement("span");
        purposeValue.textContent = task.purpose;

        info2.append(purposeLabel, purposeValue);

        // Buttons
        const buttons = document.createElement("div");
        buttons.classList.add("buttons");

        const callBtn = document.createElement("button");
        callBtn.classList.add("call");
        callBtn.innerHTML = `<i class="ri-phone-line"></i> Call`;

        const msgBtn = document.createElement("button");
        msgBtn.classList.add("msg");
        msgBtn.textContent = "Message";

        buttons.append(callBtn, msgBtn);

        // Append everything to card
        card.append(img, h2, info1, info2, buttons);

        // Append card to stack
        cardsStack.appendChild(card);

        // return cardsStack;
    })
}
showCards();

// form submission code
form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let imageUrl = imageUrlInput.value.trim();
    let fullName = fullNameInput.value.trim();
    let homeTown = homeTownInput.value.trim();
    let purpose = purposeInput.value.trim();

    let selected = false;
    categoryRadios.forEach(function (category) {
        if (category.checked) {
            selected = category.value;
        }
    })

    if (imageUrl === "") {
        alert("enter the image url");
        return; //iske aage code nhi chalega
    }
    if (fullName === "") {
        alert("please enter your name");
        return;
    }
    if (homeTown === "") {
        alert("enter your howetown");
        return;
    }
    if (purpose === "") {
        alert("enter the required purpose");
        return;
    }
    if (!selected) {
        alert("please select a category");
        return;
    }

    //saving the data to the local storage in the form of object
    saveToLocalStorage({
        imageUrl,
        fullName,
        homeTown,
        purpose,
        selected
    })

    //form resets after entering details
    form.reset();
    //form disappears at last
    formcontainer.style.display = "none";
    //cards display appears
    cardscontainer.style.display = "flex";
})

// action button code
let cards = [...cardsStack.children];

let lastcard = cardsStack.lastElementChild;
let firstcard = cardsStack.firstElementChild;

function updateStack() {
    cards.forEach(function (card, index) {
        card.style.zIndex = cards.length - index;
        card.style.transform = `translateY(${index * 15}px) scale(${1 - index * 0.03})`;
    })
}

//upbtn or downbtn code
upBtn.addEventListener("click", function () {
    console.log(lastcard);
    //if last card is present
    if (lastcard) {
        // insert first card before last card
        // cardsStack.insertBefore(lastcard, firstcard);
        const last = cards.pop(); //removes last card
        cards.unshift(last); //adds to start

        //update
        updateStack();
    }
})

downBtn.addEventListener("click", function () {
    console.log(firstcard);
    //if first card is present
    if (firstcard) {
        const first = cards.shift(); //removes first card
        cards.push(first); //adds to end

        //update
        updateStack();
    }
})