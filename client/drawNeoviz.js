const NeoVis = require("../node_modules/neovis.js/dist/neovis.js");
function draw() {
  const config = {
    container_id: "viz",
    server_url: "bolt://localhost:7687",
    server_user: "neo4j",
    server_password: "test",
    labels: {
      Person: {
        caption: "Name",
        size: "sig",
        title_properties: ["Name", "Occupation"]
      }
    },
    relationships: {},
    initial_cypher: "MATCH p=()-->() RETURN p"
  };
  const viz = new NeoVis.default(config);
  viz.render();
}

const body = document.getElementById("body");
body.onload(draw());
