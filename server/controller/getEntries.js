const fs = require("fs");

const getEntries = () => {
  const entriesData = JSON.parse(fs.readFileSync("./model/entries.json"));

  return entriesData;
};

module.exports = getEntries;
