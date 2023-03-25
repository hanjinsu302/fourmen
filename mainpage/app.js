const express = require("express");
const app = express();

const port = 8000;
app.set("view engine", "ejs");
app.set("/view", "views");
app.use("/static", express.static(__dirname + "/static"));

app.locals.cdata = require("./static/playerList.json"); // player data

app.get("/statics", function (req, res) {
  res.render("statics.ejs");
});

app.get("/index/staticsTwo", function (req, res) {
  res.render("staticsTwo.ejs");
});

app.get("/", function (request, response) {
  response.render("index");
});

app.get("/index", function (request, response) {
  response.render("index");
});

app.get("/matches", function (req, res) {
  res.render("matches");
});

app.get("/index/matches", function (req, res) {
  res.render("matches.ejs");
});

app.get("/players", function (req, res) {
  res.render("players");
});

app.get("/index/players", function (req, res) {
  res.render("players.ejs");
});

app.get("/blog", function (req, res) {
  res.render("blog");
});

app.get("/index/blog", function (req, res) {
  res.render("blog.ejs");
});

app.get("/chelsea", function (req, res) {
  res.render("chelsea");
});

app.get("/index/chelsea", function (req, res) {
  res.render("chelsea.ejs");
});

app.get("/tottenum", function (req, res) {
  res.render("tottenum");
});

app.get("/index/tottenum", function (req, res) {
  res.render("tottenum.ejs");
});

app.listen(port, () => {
  console.log(port + " is open!");
});
