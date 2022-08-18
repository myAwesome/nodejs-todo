Simple api example
- NodeJs 
- PostgreSql
- Express, Knex
-----
Run 
- `docker-compose up -d`
-  exec `init.sql` script
- `npm install`
- `node app.js`
-----
Usage

- `GET http://localhost:8082/tasks`
- `POST http://localhost:8082/task/`

   body: `{"description": "create server"}`
- `PUT http://localhost:8082/task/:id`

  body: `{"description": "create nodejs server", "done": true}`
- `GET http://localhost:8082/task/:id`
- `DELETE http://localhost:8082/task/:id`
