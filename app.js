const express = require("express");
const task = require("./service/task");
const app = express();

app.get("/tasks", async (req, res) => {
  res.json(await task.list());
});

app.get("/task/:id", async (req, res) => {
  res.send(await task.get(req.params.id));
});

app.post("/task", async (req, res) => {
  res.send(await task.create({}));
});

app.put("/task/:id", async (req, res) => {
  res.send(await task.update(req.params.id, {}));
});

app.delete("/task/:id", async (req, res) => {
  res.send(await task.remove(req.params.id));
});

// server port connection
app.listen(8082, () => console.log("app is running on port 8082"));
