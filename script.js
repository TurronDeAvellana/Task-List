document.getElementById("saveTaskB").addEventListener("click", addTask);  


//Object with the task name and time:
function Task(taskName, taskTime) {
    this.taskName = taskName;
    this.taskTime = taskTime;
}



function addTask(){

    //select the container 
    let targetDiv = document.getElementById("taskContainer");

    //Get the values from the input fields
    let taskName = document.getElementById("taskName").value;
    let taskTime = document.getElementById("taskTime").value;

    if (taskName == "" || taskTime == "" || isNaN(taskTime) || taskTime <= 0) {
        alert("Please enter a valid task name and time");
    } else {
        // Create a new task object
        const newTask = new Task(taskName, taskTime);

        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.value = newTask.taskName + " / " + newTask.taskTime;

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        // Delete button event listener
        deleteBtn.addEventListener("click", function () {
            targetDiv.removeChild(newInput); // Remove the task input from the div
            targetDiv.removeChild(deleteBtn); // Remove the delete button from the div
        });

        // Append the input to the target div
        targetDiv.appendChild(newInput);

        // Append the delete button to the target div
        targetDiv.appendChild(deleteBtn);

        // Clear the input fields
        document.getElementById("taskName").value = "";
        document.getElementById("taskTime").value = "";

        document.getElementById("show").addEventListener("click", createInputField);
    }
}






