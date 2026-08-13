const techprofiles = [
    {
        img: "https://i.pravatar.cc/150?img=1",
        name: "Alice Johnson",
        profile: "Frontend Developer",
    },
    {
        img: "https://i.pravatar.cc/150?img=2",
        name: "Michael Brown",
        profile: "Backend Developer",
    },
    {
        img: "https://i.pravatar.cc/150?img=2",
        name: "Michael Brown",
        profile: "Backend Developer",
    },
    {
        img: "https://i.pravatar.cc/150?img=1",
        name: "Alice Johnson",
        profile: "Frontend Developer",
    },
    {
        img: "https://i.pravatar.cc/150?img=3",
        name: "Armor Williams",
        profile: "UI/UX Designer",
    },
    {
        img: "https://i.pravatar.cc/150?img=4",
        name: "Daniel Miller",
        profile: "Software Engineer",
    },
    {
        img: "https://i.pravatar.cc/150?img=5",
        name: "Emma Davis",
        profile: "DATA SCIENTIST",
    },
    {
        img: "https://i.pravatar.cc/150?img=6",
        name: "James Wilson",
        profile: "DevOps Engineer",
    },
    {
        img: "https://i.pravatar.cc/150?img=4",
        name: "Daniel Miller",
        profile: "Software Engineer",
    },
    {
        img: "https://i.pravatar.cc/150?img=6",
        name: "James Wilson",
        profile: "DevOps Engineer",
    },
];

//outer card
let profiles = document.querySelector(".profiles");

function showProfiles(arr) {
    // forEach loop for each employeee card
    arr.forEach(function (employee) {

        //each card
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = employee.img;

        const name = document.createElement("h2");
        name.classList.add("profile-name");
        name.textContent = employee.name;

        const profile = document.createElement("p");
        profile.textContent = employee.profile;

        //appending elements to the card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(profile);

        //appending elements to the outer card
        profiles.appendChild(card);
    });

};

//calling the function by passing the techprofiles array
showProfiles(techprofiles);

// event listener to input
let searchinput = document.querySelector("input");

searchinput.addEventListener("input", function () {
    // getting new filtered array 
    let searchedprofiles = techprofiles.filter(function (employee) {
        //returns the profile name if it starts with the input we are typing, to the new array
        return employee.name.toLowerCase().includes(searchinput.value.toLowerCase());
    })

    //clear previous cards or messages
    profiles.innerHTML = "";

    //if no profiles found, then show message
    if (searchedprofiles.length == 0) {
        let msg = document.createElement("p");
        msg.textContent = "No result found !";
        msg.style.color = "grey";
        msg.style.textAlign = "center";
        msg.style.fontSize = "20px";

        profiles.appendChild(msg);
    }
    else {
        //pass the new filtered array to the function and show the searched profile
        showProfiles(searchedprofiles);
    }


})

