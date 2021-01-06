const mysql = require("sync-mysql");

const getKeyword = (path) => {
  const password = process.env.password;
  const connection = new mysql({
    host: "localhost",
    user: "root",
    password: password,
    database: "my_journal",
  });

  let keywordData = [];
  let rows = connection.query(
    "SELECT id, title, thumb, thumb_d, path FROM keywords WHERE title='" +
      path +
      "'"
  );
  keywordData.push(rows[0]);

  return keywordData;
};

module.exports = getKeyword;
