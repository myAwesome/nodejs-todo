const { db } = require("../util/db");

class Resource {
  tableName;
  constructor(config, app) {
    this.tableName = `tbl_${config.name}`;
    this.defineRoutes(config, app);
    this.migration(config);
  }

  list = () => {
    return db(this.tableName).select();
  };

  create = (payload) => {
    return db(this.tableName).insert(payload, ["id"]);
  };

  get = (id) => {
    return db(this.tableName).select().where({ id });
  };

  update = (id, payload) => {
    return db(this.tableName).where({ id }).update(payload);
  };

  remove = (id) => {
    return db(this.tableName).where("id", id).del();
  };

  defineRoutes = (config, app) => {
    app.get(`/${config.name}s`, async (req, res) => {
      res.json(await this.list());
    });

    app.get(`/${config.name}/:id`, async (req, res) => {
      res.json(await this.get(req.params.id));
    });

    app.post(`/${config.name}`, async (req, res) => {
      res.status(201).json(await this.create(req.body));
    });

    app.put(`/${config.name}/:id`, async (req, res) => {
      res.status(201).json(await this.update(req.params.id, req.body));
    });

    app.delete(`/${config.name}/:id`, async (req, res) => {
      await this.remove(req.params.id);
      res.status(204).json();
    });
  };

  migration = (config) => {
    console.log(config.fields);
  };
}

module.exports = {
  Resource,
};
