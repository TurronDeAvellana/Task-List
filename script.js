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

    //Create a new task object
    const newTask = new Task(taskName, taskTime);


    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = newTask.taskName + " / " + newTask.taskTime;

    //Append the input to the target div
    targetDiv.appendChild(newInput);

    //Clear the input fields
    document.getElementById("taskName").value = "";
    document.getElementById("taskTime").value = "";

    document.getElementById("show").addEventListener("click", createInputField);

}



/*
//This function takes the parameters from the input 
function addTask() {
    let taskName = document.getElementById("taskName").value;
    let taskTime = document.getElementById("taskTime").value;
    
    const newTask = new Task(taskName, taskTime);

    document.getElementById("showTasks").value = newTask.taskName + " / " + newTask.taskTime;
}

*/
