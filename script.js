document.getElementById("saveTaskB").addEventListener("click", addTask);  

function addTask() {
    let taskName = parseFloat(document.getElementById("taskName").value);
    let taskTime = parseFloat(document.getElementById("taskTime").value);
    
    sum = taskName + taskTime;

    document.getElementById("show").value = sum;
}



