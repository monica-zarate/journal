const mysql = require("sync-mysql");

const getAuthors = () => {
  const password = process.env.password;
  const connection = new mysql({
    host: "localhost",
    user: "root",
    password: password,
    database: "my_journal",
  });

  let authorsData = [];
  let rows = connection.query("SELECT id, name, bio FROM authors");
  for (i = 0; i < rows.length; i++) {
    authorsData.push(rows[i]);
  }
  return authorsData;
};

module.exports = getAuthors;
