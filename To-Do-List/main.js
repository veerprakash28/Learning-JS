// Save the task list to local storage
function saveToLocalStorage() {
  localStorage.setItem("taskList", parentList.innerHTML);
}

// Retrieve the task list from local storage
function retrieveFromLocalStorage() {
  if (localStorage.getItem("taskList")) {
    parentList.innerHTML = localStorage.getItem("taskList");
  }
}

// ////////////////////////////////////////////

// Input
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("add_btn");

// Add event listener to the input element
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTaskFromInput();
  }
});

// Add event listener to the Add button
addBtn.addEventListener("click", addTaskFromInput);

let parentList = document.getElementById("parentList");

// Call the retrieve function when the page loads
document.addEventListener("DOMContentLoaded", retrieveFromLocalStorage);

// Function to add task using the input value
function addTaskFromInput() {
  let currentTask = taskInput.value.trim();

  if (currentTask !== "") {
    let newLi = document.createElement("li");
    newLi.className = "list-group-item d-flex justify-content-between";
    newLi.innerHTML = `<button class="btn btn-success mx-1 btn-sm" onclick="checkTask(this)">
        <span class="material-symbols-outlined">Check</span>
        </button>
        <h4 class="flex-grow-1">${currentTask}</h4>
        <button class="btn btn-warning mx-1" onclick="editTask(this)">
          <span class="material-symbols-outlined"> edit </span>
        </button>
        <button class="btn btn-danger" onclick="removeTask(this)">
          <span class="material-symbols-outlined"> delete </span>
        </button>`;
    parentList.insertBefore(newLi, parentList.firstChild);

    taskInput.value = "";
    saveToLocalStorage();
  }
}

function removeTask(currElement) {
  currElement.parentElement.remove();
  if (parentList.children.length <= 0) {
    let newEmptyMsg = document.createElement("h3");

    newEmptyMsg.textContent = "Nothing is Here. Please Add Some Tasks";
    newEmptyMsg.style.color = "green";
    newEmptyMsg.className = "d-flex justify-content-center";
    newEmptyMsg.classList.add("emptyMsg");
    parentList.appendChild(newEmptyMsg);

    saveToLocalStorage();
  } else {
    saveToLocalStorage(); // Update local storage after deleting a task
  }
}

function editTask(currElement) {
  if (currElement.children[0].innerHTML == "done") {
    currElement.children[0].innerHTML = "edit";
    let currTask = currElement.previousElementSibling.value;
    let currHeading = document.createElement("h4");
    currHeading.className = "flex-grow-1";
    currHeading.textContent = currTask;
    if (currElement.parentElement.classList.contains("changeColour")) {
      currHeading.classList.add("strikethrough");
    }
    currElement.parentElement.replaceChild(
      currHeading,
      currElement.previousElementSibling
    );
  } else {
    currElement.children[0].innerHTML = "done";
    let currTask = currElement.previousElementSibling.textContent;
    let currInput = document.createElement("input");
    currInput.type = "text";
    currInput.placeholder = "Your TO-DO";
    currInput.className = "form-control";
    currInput.value = currTask;

    currElement.parentElement.replaceChild(
      currInput,
      currElement.previousElementSibling
    );
  }

  saveToLocalStorage();
}

function checkTask(currElement) {
  var currentLi = currElement.parentElement;
  currentLi.classList.toggle("changeColour");
  var h4 = currElement.parentNode.querySelector("h4");
  h4.classList.toggle("strikethrough");
  saveToLocalStorage();
}

const dragArea = document.querySelector("#parentList");
const sortable = new Sortable(dragArea, {
  animation: 250,
});

// Save the new order to local storage after dragging
sortable.option("onEnd", function (event) {
  saveToLocalStorage();
});
