const kenx = require("knex");
const db = kenx({
  client: "pg",
  connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SCHEME}`,
});

module.exports = {
  db,
};
