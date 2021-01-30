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
  let rows = connection.query(
    `select entry.*, key_1.title as title1, key_2.title as title2, key_3.title as title3, author.name as name, key_1.path as path1, key_2.path as path2, key_3.path as path3
    from entries as entry
    join keywords as key_1 on entry.keyword1_id = key_1.id
    left join keywords as key_2 on entry.keyword2_id = key_2.id
    left join keywords as key_3 on entry.keyword3_id = key_3.id
    join authors as author on entry.author_id = author.id
    where entry.path = '${path}'`
  );
  entryData.push(rows[0]);

  return entryData;
};

module.exports = getEntry;
