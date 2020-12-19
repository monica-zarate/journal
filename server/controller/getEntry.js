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
  let rows = connection.query("SELECT * FROM entries WHERE id=" + id);
  entryData.push(rows[0]);

  return entryData;
};

module.exports = getEntry;
