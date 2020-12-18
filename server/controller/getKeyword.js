const mysql = require("sync-mysql");

const getKeyword = (id) => {
  const password = process.env.password;
  const connection = new mysql({
    host: "localhost",
    user: "root",
    password: password,
    database: "my_journal",
  });

  let keywordData = [];
  let rows = connection.query("SELECT id, title FROM keywords WHERE id=" + id);
  keywordData.push(rows[0]);

  return keywordData;
};

module.exports = getKeyword;
