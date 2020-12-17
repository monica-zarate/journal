// Express and npm set-up
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

//Controllers
const getEntries = require("./controller/getEntries");
const getAuthors = require("./controller/getAuthors");
const getKeywords = require("./controller/getKeywords");

// Const App will be using Express method
const app = express();

app.use(express.json());
app.use(cors());

//Get All Entries Route

app.route("/entries").get((req, res) => {
  res.json(getEntries());
});

//Get All Keywords Route

app.route("/keywords").get((req, res) => {
  res.json(getKeywords());
});

//Get All Authors Route

app.route("/authors").get((req, res) => {
  res.json(getAuthors());
});

// App listening on local host
app.listen(5000, console.log("app is listening at http://localhost:5000"));
