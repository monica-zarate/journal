const mysql = require("sync-mysql");

const getEntries = () => {
  const password = process.env.password;
  const connection = new mysql({
    host: "localhost",
    user: "root",
    password: password,
    database: "my_journal",
  });

  let entriesData = [];
  let rows = connection.query(`SELECT entry.*, author.name  FROM 
                              entries as entry
                              join authors as author
                              on entry.author_id = author.id`);
  for (i = 0; i < rows.length; i++) {
    entriesData.push(rows[i]);
  }
  return entriesData;
};

module.exports = getEntries;
