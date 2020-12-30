const mysql = require("sync-mysql");

const getEntriesKeyword = (id) => {
  const password = process.env.password;
  const connection = new mysql({
    host: "localhost",
    user: "root",
    password: password,
    database: "my_journal",
  });

  let rows = connection.query(
    "select * from entries where keyword1_id = " +
      id +
      " or keyword2_id = " +
      id +
      " or keyword3_id = " +
      id +
      ";"
  );

  console.log(rows);

  return rows;
};

module.exports = getEntriesKeyword;
