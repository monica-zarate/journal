const mysql = require("sync-mysql");

const getAuthor = (id) => {
  const password = process.env.password;
  const connection = new mysql({
    host: "localhost",
    user: "root",
    password: password,
    database: "my_journal",
  });

  let authorData = [];
  let rows = connection.query(
    "SELECT id, name, bio FROM authors WHERE id=" + id
  );
  authorData.push(rows[0]);

  return authorData;
};

module.exports = getAuthor;
