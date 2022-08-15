const kenx = require("knex");
const db = kenx({
  client: "pg",
  connection: "postgres://user:pass@localhost:5433/todo",
});

module.exports = {
  db,
};
