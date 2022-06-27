let addBtn = document.getElementById("add_btn");
addBtn.addEventListener("click", addTask);
let parentList = document.getElementById("parentList");

//   console.log(parentList.children[0].className);
function addTask(e) {
  if (
    parentList.children[0].className == "d-flex justify-content-center emptyMsg"
  ) {
    parentList.children[0].remove();
  }
  let currentBtn = e.currentTarget;
  let currentInput = currentBtn.previousElementSibling;
  let currentTask = currentInput.value;

  let newLi = document.createElement("li");
  // newLi.classList.add("list-group-item");
  newLi.className = "list-group-item d-flex justify-content-between";
  newLi.innerHTML = `<h4 class="flex-grow-1">${currentTask}</h4>
      <button class="btn btn-warning mx-1" onclick="editTask(this)">
        <span class="material-symbols-outlined"> edit </span>
      </button>
      <button class="btn btn-danger" onclick="removeTask(this)">
        <span class="material-symbols-outlined"> delete </span>
      </button>`;
  parentList.appendChild(newLi);
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
    //   console.log(parentList.children[0].className);
  }
}

function editTask(currElement) {
  // console.log(currElement.children[0]);
  // // console.log(currElement.textContent);
  // console.log(currElement.children[0].innerHTML)
  if (currElement.children[0].innerHTML == "done") {
    currElement.children[0].innerHTML = "edit";
    let currTask = currElement.previousElementSibling.value;
    let currHeading = document.createElement("h4");
    currHeading.className = "flex-grow-1";
    currHeading.textContent = currTask;
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
}
