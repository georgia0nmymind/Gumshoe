const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const neo4j = require("neo4j-driver");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "test")
);
const session = driver.session();

app.get("/", (req, res) => {
  session
    .run("Match (a:Person) return a")
    .then(result => {
      result.records.forEach(record =>
        console.log(record._fields[0].properties)
      );
    })
    .catch(err => console.log(err));
  res.send("and yet it moves...");
});

app.listen(3000);
console.log("server on port 3000");

module.exports = app;
