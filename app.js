const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  dotenv = require("dotenv");
dotenv.config();
app.use(bodyParser.json());

const { Task } = require("./domain/task");
new Task(app);

// server port connection
app.listen(process.env.PORT, () =>
  console.log("app is running on port " + process.env.PORT)
);
