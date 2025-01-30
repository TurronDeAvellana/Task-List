document.getElementById("saveTaskB").addEventListener("click", addTask);  


//Object with the task name and time:
function Task(taskName, taskTime) {
    this.taskName = taskName;
    this.taskTime = taskTime;
}


//This function takes the parameters from the input 
function addTask() {
    let taskName = document.getElementById("taskName").value;
    let taskTime = document.getElementById("taskTime").value;
    
    const newTask = new Task(taskName, taskTime);

    document.getElementById("showTasks").value = newTask.taskName + " / " + newTask.taskTime;
}



