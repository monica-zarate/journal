const mysql = require("sync-mysql");

const getEntry = (path) => {
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

  let entryData = [];
  let rows = connection.query(`SELECT entry.*, author.name  FROM 
                              entries as entry
                              join authors as author
                              on entry.author_id = author.id where entry.path = '${path}'`);
  entryData.push(rows[0]);

  return entryData;
};

module.exports = getEntry;
