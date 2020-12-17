const fs = require("fs");

const getAuthors = () => {
  const authorsData = JSON.parse(fs.readFileSync("./model/authors.json"));

  return authorsData;
};

module.exports = getAuthors;
