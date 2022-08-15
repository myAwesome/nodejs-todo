const { db } = require("../util/db");

const list = () => {
  return db("tbl_task").select({
    id: "id",
    description: "description",
  });
};

const create = (payload) => {
  return {};
};

const get = (id) => {
  return db("tbl_task")
    .select({
      id: "id",
      description: "description",
    })
    .where({ id });
};

const update = (id, payload) => {
  return {};
};

const remove = (id) => {
  return {};
};

module.exports = {
  list,
  get,
  create,
  update,
  remove,
};
