const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

let tasks = [
    { id: 1, task: "That is Task 1.", completed: true },
    { id: 2, task: "That is Task 2.", completed: true },
    { id: 3, task: "That is Task 3.", completed: false },
    { id: 4, task: "That is Task 4.", completed: false },
    { id: 5, task: "That is Task 5.", completed: false },
];

// Get all tasks
app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

// Add new Task
app.post("/api/tasks", (req, res) => {
    const newTask = { id: tasks.length + 1, ...req.body, completed: false };
    tasks.push(newTask);

    console.log(tasks);
    res.json(newTask);
});

// Change task completed property
app.patch("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);
    const task = tasks[index];
    task.completed = req.body.completed;

    res.json(task);
});

// Delete Specific task
app.delete("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== id);

    res.json({ id });
});

app.listen(5000, () => console.log("Server running on port 5000"));
