document.getElementById("saveTaskB").addEventListener("click", addTask);  
document.getElementById("saveBreak").addEventListener("click", addBreak);







function addTask(){

    //select the container 
    let targetDiv = document.getElementById("taskContainer");

    //Get the values from the input fields
    let taskName = document.getElementById("taskName").value;
    let taskTime = document.getElementById("taskTime").value;

    if (taskName == "" || isNaN(taskName) == false || taskTime == "" || isNaN(taskTime) || taskTime <= 0) {
        alert("Please enter a valid task name and time");
    } else {
        // Create a new task object
        

        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.value = taskName + " / " + taskTime;

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


function addBreak(){

    //select the container 
    let targetDiv = document.getElementById("taskContainer");

    //Get the values from the input fields
    let breakTime = document.getElementById("breakTime").value;

    if (breakTime > 0 && !isNaN(breakTime)  && breakTime == "") {
        let newInput = document.createElement("input");
        newInput.type = "text";       
        newInput.value = "break" + " / " + breakTime;

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
        document.getElementById("breakTime").value = "";

        document.getElementById("saveBreak").addEventListener("click", createInputField);
    
    }else{
        alert("Please enter a valid break time ")
    }
}






