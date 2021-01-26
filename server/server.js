require("dotenv").config();
// Express and npm set-up
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

//Controllers
const getEntries = require("./controller/getEntries");
const getAuthors = require("./controller/getAuthors");
const getAuthor = require("./controller/getAuthor");
const getKeywords = require("./controller/getKeywords");
const getKeyword = require("./controller/getKeyword");
const getEntry = require("./controller/getEntry");
const getEntriesKeyword = require("./controller/getEntriesKeyword");

// Const App will be using Express method
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build")));
//Get All Entries Route

app.route("/api/entries").get((req, res) => {
  res.json(getEntries());
});

//Get Entry per Id Route

app.route("/api/entries/:path").get((req, res) => {
  let path = req.params.path;
  res.json(getEntry(path));
});

//Get Entries per Keywords

app.route("/api/entries/keywords/:path").get((req, res) => {
  let path = req.params.path;
  res.json(getEntriesKeyword(path));
});

//Get All Keywords Route

app.route("/api/keywords").get((req, res) => {
  res.json(getKeywords());
});

//Get Keyword per Title Route (using path)

app.route("/api/keywords/:path").get((req, res) => {
  let path = req.params.path;
  res.json(getKeyword(path));
});

//Get All Authors Route

app.route("/api/authors").get((req, res) => {
  res.json(getAuthors());
});

//Get Author per Id Route

app.route("/api/authors/:id").get((req, res) => {
  let id = req.params.id;
  res.json(getAuthor(id));
});

//
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

// App listening on local host
app.listen(5000, console.log("app is listening at http://localhost:5000"));
