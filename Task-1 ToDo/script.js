const taskDescription = document.getElementById("task");
const addButton = document.getElementById("addbtn");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
     const task = taskDescription.value;

     if (task === "") {
          alert("Please enter a task");
          return;
     }

     const li = document.createElement("li");
     li.innerHTML = task;
     const deleteBtn = document.createElement("button");
     deleteBtn.classList.add("btn-danger");
     deleteBtn.classList.add("btn");
     deleteBtn.innerHTML = "Delete";
     deleteBtn.addEventListener("click", deleteTask);
     li.appendChild(deleteBtn);
     
     const completeBtn = document.createElement("button");
     completeBtn.classList.add("btn-success");
     completeBtn.classList.add("btn");
     completeBtn.innerHTML = "Complete";
     completeBtn.addEventListener("click", completeTask);
     li.appendChild(completeBtn);
     
     taskList.appendChild(li);
     taskDescription.value = "";
}

function deleteTask(e) {
     const taskToDelete = e.target.parentNode;
     taskList.removeChild(taskToDelete);
}

function completeTask(e) {
     const taskToComplete = e.target.parentNode;
     taskToComplete.removeChild(e.target);
     const completedbtn = document.createElement("button");
     completedbtn.classList.add("btn-warning");
     completedbtn.classList.add("btn");
     completedbtn.innerHTML = "Completed";
     taskToComplete.appendChild(completedbtn);
}

