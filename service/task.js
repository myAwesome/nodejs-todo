const { db } = require("../util/db");

const list = () => {
  return db("tbl_task").select();
};

const create = (payload) => {
  return db("tbl_task").insert(payload, ["id"]);
};

const get = (id) => {
  return db("tbl_task").select().where({ id });
};

const update = (id, payload) => {
  return db("tbl_task").where({ id }).update(payload);
};

const remove = (id) => {
  return db("tbl_task").where("id", id).del();
};

module.exports = {
  list,
  get,
  create,
  update,
  remove,
};
