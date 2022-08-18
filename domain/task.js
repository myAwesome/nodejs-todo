const { db } = require("../util/db");

class Task {
  constructor(app) {
    this.defineRoutes(app);
  }

  list = () => {
    return db("tbl_task").select();
  };

  create = (payload) => {
    return db("tbl_task").insert(payload, ["id"]);
  };

  get = (id) => {
    return db("tbl_task").select().where({ id });
  };

  update = (id, payload) => {
    return db("tbl_task").where({ id }).update(payload);
  };

  remove = (id) => {
    return db("tbl_task").where("id", id).del();
  };

  defineRoutes = (app) => {
    app.get("/tasks", async (req, res) => {
      res.json(await this.list());
    });

    app.get("/task/:id", async (req, res) => {
      res.json(await this.get(req.params.id));
    });

    app.post("/task", async (req, res) => {
      res.status(201).json(await this.create(req.body));
    });

    app.put("/task/:id", async (req, res) => {
      res.status(201).json(await this.update(req.params.id, req.body));
    });

    app.delete("/task/:id", async (req, res) => {
      await this.remove(req.params.id);
      res.status(204).json();
    });
  };
}

module.exports = {
  Task,
};
