const mysql = require("sync-mysql");

const getEntriesKeyword = (path) => {
  const password = process.env.password;
  const connection = new mysql({
    host: "localhost",
    user: "root",
    password: password,
    database: "my_journal",
  });

  let rows = connection.query(
    `select entry.*, key_1.title as title1, key_2.title as title2, key_3.title as title3 from entries as entry
      join keywords as key_1 on entry.keyword1_id = key_1.id
      left join keywords as key_2 on entry.keyword2_id = key_2.id
      left join keywords as key_3 on entry.keyword3_id = key_3.id
      where key_1.path = '${path}'
      or key_2.path = '${path}'
      or key_3.path = '${path}'`
  );

  console.log(rows);

  return rows;
};

module.exports = getEntriesKeyword;
