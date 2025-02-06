create DATABASE task_manager;


\connect task_manager;

CREATE TABLE Task(

    taskName VARCHAR(50) PRIMARY KEY,
    taskTime int NOT NULL,  --time in seconds
    status VARCHAR(50) DEFAULT 'pending',  --pending, in progress, finished
    
)

CREATE TABLE break(
    breakId int PRIMARY KEY AUTO_INCREMENT,
    breakTime int NOT NULL,  --time in seconds
)

CREATE TABLE TaskList(
    taskListName VARCHAR(50) PRIMARY KEY,
    taskName VARCHAR(50) FOREIGN KEY REFERENCES Task(taskName),
    status VARCHAR(50) DEFAULT 'pending',  --pending, in progress, finished
)

CREATE TABLE User(
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(50) NOT NULL,
    TaskListName VARCHAR(50) FOREIGN KEY REFERENCES TaskList(taskListName)
)
CREATE TABLE Task_TaskList(
    taskName VARCHAR(50) FOREIGN KEY REFERENCES Task(taskName),
    taskListName VARCHAR(50) FOREIGN KEY REFERENCES TaskList(taskListName),
    PRIMARY KEY (taskName, taskListName)
);