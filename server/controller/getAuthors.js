const mysql = require("sync-mysql");

const getAuthors = () => {
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

  let authorsData = [];
  let rows = connection.query("SELECT * FROM authors");
  for (i = 0; i < rows.length; i++) {
    authorsData.push(rows[i]);
  }
  return authorsData;
};

module.exports = getAuthors;
