const mysql = require("sync-mysql");

const getKeywords = () => {
  const password = process.env.password;
  const connection = new mysql({
    host: "localhost",
    user: "root",
    password: password,
    database: "my_journal",
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
