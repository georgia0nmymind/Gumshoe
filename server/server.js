const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const neo4j = require("neo4j-driver");
const app = express();
const helper = require("../client/helpers.js");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("build"));

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "test")
);
const session = driver.session();

app.get("/", (req, res) => {
  //serve page
  res.status(200).sendFile(path.resolve(__dirname, "../src/index.html"));
});

app.get("/data", (req, res) => {
  //retrieve/update all data route
  let data = { nodes: [], rel: [] };
  let rels = [];
  session
    .run("Match a= ()--() return a")
    .then(result => {
      result.records.forEach(record => {
        // let rel = helper.killUnderscore(
        //   record._fields[0].segments[0].relationship.type.replace("_", " ")
        // );
        // console.log(
        //   `${record._fields[0].start.properties.Name} ${rel} ${record._fields[0].end.properties.Name}`
        // );
        // console.log("...");
        let duple = false;
        data.nodes.forEach(entry => {
          if (entry.name === record._fields[0].start.properties.Name) {
            duple = true;
          }
        });
        if (!duple) {
          data.nodes.push({
            name: record._fields[0].start.properties.Name,
            occ: record._fields[0].start.properties.Occupation,
            scope: record._fields[0].start.properties.Scope,
            id: record._fields[0].start.identity.low,
            sig: record._fields[0].start.properties.sig
          });
        }
        rels.push({
          start: record._fields[0].segments[0].relationship.start.low,
          type: helper.killUnderscore(
            record._fields[0].segments[0].relationship.type
          ),
          end: record._fields[0].segments[0].relationship.end.low
        });
      });
      session.close();
    })
    .then(result => {
      console.log("going into push func");
      rels.forEach(rel => {
        const link = {
          source: helper.getIndexById(rel.start, data),
          type: rel.type,
          target: helper.getIndexById(rel.end, data)
        };
        data.rel.push(link);
      });
    })
    .catch(err => console.log(err))
    .then(() => res.status(200).json(data));
});

app.post("/addChar", (req, res) => {
  //for adding a character node
  session
    .run(
      "CREATE (n:Person {Name: $name, Occupation: $occ, Scope: $scope}) RETURN n",
      {
        name: req.body.Name,
        occ: req.body.Occupation,
        scope: req.body.Scope
      }
    )
    .then(result => {
      console.log("successfully added");
      res.redirect("/");
      // session.close();
    })
    .catch();
});

app.post("/addRel", (req, res) => {
  session
    .run(
      "MATCH (a), (b) WHERE a.Name = $start AND b.Name = $end MERGE (a)-[r:" +
        req.body.rel +
        "]->(b) return r",
      {
        start: req.body.start,
        end: req.body.end
      }
    )
    .then(result => {
      res.redirect("/");

      console.log("add rel is working!");
    })
    .catch(e => console.log(e));
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);
console.log("server on port 3000");

module.exports = app;
