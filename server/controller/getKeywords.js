const fs = require("fs");

const getKeywords = () => {
  const keywordsData = JSON.parse(fs.readFileSync("./model/keywords.json"));

  return keywordsData;
};

module.exports = getKeywords;
