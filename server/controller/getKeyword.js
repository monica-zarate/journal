const mysql = require("sync-mysql");

const getKeyword = (path) => {
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
