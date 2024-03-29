const mysql = require("sync-mysql");

const getEntries = () => {
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

  let entriesData = [];
  let rows = connection.query(`SELECT entry.*, author.name  FROM 
                              entries as entry
                              join authors as author
                              on entry.author_id = author.id`);
  for (i = 0; i < rows.length; i++) {
    entriesData.push(rows[i]);
  }
  let printData = entriesData.reverse();
  return printData;
};

module.exports = getEntries;
