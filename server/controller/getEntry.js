const mysql = require("sync-mysql");

const getEntry = (id) => {
  const password = process.env.password;
  const connection = new mysql({
    host: "localhost",
    user: "root",
    password: password,
    database: "my_journal",
  });

  let entryData = [];
  let rows = connection.query(`SELECT entry.*, author.name  FROM 
                              entries as entry
                              join authors as author
                              on entry.author_id = author.id where entry.id = ${id}`);
  entryData.push(rows[0]);

  return entryData;
};

module.exports = getEntry;
