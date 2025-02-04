document.getElementById("saveTaskB").addEventListener("click", addTask);  
document.getElementById("saveBreak").addEventListener("click", addBreak);
document.getElementById("next").addEventListener("click",nextButton);
document.getElementById("toMain").addEventListener("click",toMainPage);







function addTask(){

    //select the container 
    let targetDiv = document.getElementById("taskContainer");

    //Get the values from the input fields
    let taskName = document.getElementById("taskName").value;
    let taskTime = document.getElementById("taskTime").value;

    if (taskName == "" || isNaN(taskName) == false || taskTime == "" || isNaN(taskTime) || taskTime <= 0) {
        alert("Please enter a valid task name and time");
    } else {
        
        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.readOnly = true; // Make the input field non editable 
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

    if (breakTime > 0) {
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

//Buttom next function 

function nextButton(){

   // Save information to localStorage
    let tasks = [];
    let taskContainer = document.getElementById("taskContainer");
    let inputs = taskContainer.getElementsByTagName("input");

    for (let input of inputs) {
        tasks.push(input.value);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));


    //to the other page 
    window.location.href = "timerList.html";


}








