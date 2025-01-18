const taskInput = document.getElementById("task-input");
const taskContainer = document.querySelector(".task-container");

function addTask() {
    if (taskInput.value == "") {
        alert("You must fill the task");
    } else {
        let task = document.createElement("li");
        task.innerHTML = taskInput.value;
        taskContainer.appendChild(task);
        taskInput.value = "";

        const trashImg = document.createElement("img");
        trashImg.src = "assets/delete.svg";
        task.appendChild(trashImg);

        saveData();
    }
}

taskContainer.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        } else if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
        }
        saveData();
    },
    false
);

function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML);
}

function showData() {
    taskContainer.innerHTML = localStorage.getItem("data");
}

showData();
