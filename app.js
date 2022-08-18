const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  dotenv = require("dotenv");
dotenv.config();
app.use(bodyParser.json());
const { Resource } = require("./util/resource");
const { resources } = require("./resources");

const initResources = resources.map((resource) => {
  return new Resource(resource, app);
});

app.listen(process.env.PORT, () =>
  console.log("app is running on port " + process.env.PORT)
);
