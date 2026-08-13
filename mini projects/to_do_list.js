let inp = document.querySelector("input");
let addbtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

let edittasks = null;

//function to update (for - edit, complete, delete)
const updateTodo = function (evt) {
    // for complete button
    if (evt.target.classList.contains("complete-btn")) {
        if (confirm("Do you want to mark this completed ?")) {

            let li = evt.target.closest("li");  //it picks the list for which the button belongs

            let taskText = (li.querySelector("span")).textContent; //it picks the text from the list

            let savedTasks = JSON.parse(localStorage.getItem("savedTasks")) || [];

            //change the value of completed task 
            savedTasks.forEach(task => {
                if (task.text === taskText) {
                    task.completed = true;
                }
            });

            //save completed tasks to local storage
            localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
            location.reload();
        }
    }

    // for delete button
    if (evt.target.classList.contains("delete-btn")) {
        if (confirm("Do you want to delete this task ?")) {
            const li = evt.target.closest("li");
            taskList.removeChild(li);
            deletefromLocalStorage(li);
        }
    }

    //  for edit button
    if (evt.target.classList.contains("edit-btn")) {
        edittasks = evt.target.closest("li");
        let tasktext = (edittasks.querySelector("span")).textContent;
        inp.value = tasktext;
        inp.focus();
        addbtn.textContent = "Update";
    }
}

// function to add task 
const addTodo = function () {

    //checking input value if empty
    const input = inp.value.trim();
    if (input.length <= 0) {
        alert("please write something..");
        return false;
    }

    //check if the task is editing
    if (edittasks) {
        let oldText = (edittasks.querySelector("span")).textContent;
        // assign new text from input to list
        edittasks.querySelector("span").textContent = inp.value;
        // update new text to local storage
        updateLocalStorage(oldText, inp.value);
        // reassign the null value so that edit function do not run again
        edittasks = null;
        // reassign Add 
        addbtn.textContent = "Add";

        inp.value = "";

        return;
    }

    //if not empty, the input will be added in todo list
    else {
        let li = document.createElement("li");

        let task = document.createElement("span");
        task.textContent = inp.value;

        let btndiv = document.createElement("div");

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "edit";

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "🗑";

        let completeBtn = document.createElement("button");
        completeBtn.classList.add("complete-btn");
        completeBtn.textContent = "✔";

        btndiv.appendChild(completeBtn);
        btndiv.appendChild(editBtn);
        btndiv.appendChild(deleteBtn);

        li.appendChild(task);
        li.appendChild(btndiv);

        taskList.appendChild(li);

        //saveto local storage
        saveToLocalStorage(inp.value);

        inp.value = "";
    }
}



//save to local storage
const saveToLocalStorage = (task) => {
    let savedTasks;
    if (localStorage.getItem("savedTasks") === null) {
        savedTasks = [];
    }
    else {
        savedTasks = JSON.parse(localStorage.getItem("savedTasks"));
    }

    savedTasks.push({
        text: task,
        completed: false
    });

    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
    console.log(savedTasks);
}

//get tasks from local storage
const getTasksLocalStorage = () => {
    let savedTasks;
    if (localStorage.getItem("savedTasks") === null) {
        savedTasks = [];
    }
    else {
        savedTasks = JSON.parse(localStorage.getItem("savedTasks"));
        savedTasks.forEach(tasks => {
            let li = document.createElement("li");

            let task = document.createElement("span");
            task.textContent = tasks.text;

            let btndiv = document.createElement("div");

            let editBtn = document.createElement("button");
            editBtn.classList.add("edit-btn");
            editBtn.textContent = "edit";

            let deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-btn");
            deleteBtn.textContent = "🗑";

            let completeBtn = document.createElement("button");
            completeBtn.classList.add("complete-btn");
            completeBtn.textContent = "✔";

            if (tasks.completed) {
                //mark as completed
                li.classList.add("completed");
                //disable buttons
                editBtn.disabled = true;
                completeBtn.disabled = true;
            }

            btndiv.appendChild(completeBtn);
            btndiv.appendChild(editBtn);
            btndiv.appendChild(deleteBtn);

            li.appendChild(task);
            li.appendChild(btndiv);

            taskList.appendChild(li);
        })
        console.log(savedTasks);
    }
}

//delete tasks from local storage
const deletefromLocalStorage = (task) => {
    let savedTasks;
    savedTasks = JSON.parse(localStorage.getItem("savedTasks"));

    //return only remaining tasks into savedTasks
    let taskcontent = task.querySelector("span").textContent;
    savedTasks = savedTasks.filter(tasks => tasks.text !== taskcontent);
    console.log(savedTasks);

    //update the array into local storage
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
}

// save edit tasks to local storage
const updateLocalStorage = (oldText, newText) => {
    let savedTasks = JSON.parse(localStorage.getItem("savedTasks"));

    savedTasks.forEach(task => {
        if (task.text === oldText) {
            task.text = newText;
        }
    });

    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
}

// event listeners
document.addEventListener("DOMContentLoaded", getTasksLocalStorage);
addbtn.addEventListener("click", addTodo);
taskList.addEventListener("click", updateTodo);