const mysql = require("sync-mysql");

const getAuthor = (id) => {
  const host = process.env.host;
  const user = process.env.user;
  const password = process.env.password;
  const database = process.env.database;
  const connection = new mysql({
    host: host,
    user: user,
    password: password,
    database: database,
  });

  let authorData = [];
  let rows = connection.query("SELECT * FROM authors WHERE id=" + id);
  authorData.push(rows[0]);

  return authorData;
};

module.exports = getAuthor;
