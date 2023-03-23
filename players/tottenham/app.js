const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 1234;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname + "/static"));

app.use(express.static("static"));

app.locals.cdata = require('./static/players.json')

app.get("/", (req, res) => {
  res.render("content");
});

app.listen(PORT, () => {
  console.log(PORT + " port가 연결되었습니다.");
});
