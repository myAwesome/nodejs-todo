const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  dotenv = require("dotenv");

dotenv.config();
app.use(bodyParser.json());

const task = require("./service/task");
app.get("/tasks", async (req, res) => {
  res.json(await task.list());
});

app.get("/task/:id", async (req, res) => {
  res.json(await task.get(req.params.id));
});

app.post("/task", async (req, res) => {
  res.status(201).json(await task.create(req.body));
});

app.put("/task/:id", async (req, res) => {
  res.status(201).json(await task.update(req.params.id, req.body));
});

app.delete("/task/:id", async (req, res) => {
  await task.remove(req.params.id);
  res.status(204).json();
});

// server port connection
app.listen(process.env.PORT, () =>
  console.log("app is running on port " + process.env.PORT)
);
