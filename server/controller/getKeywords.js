const mysql = require("sync-mysql");

const getKeywords = () => {
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

  let keywordsData = [];
  let rows = connection.query(
    "SELECT id, title, thumb, thumb_d, path FROM keywords"
  );
  for (i = 0; i < rows.length; i++) {
    keywordsData.push(rows[i]);
  }
  return keywordsData;
};

module.exports = getKeywords;
