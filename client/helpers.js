// import Driver from 'node_modules/neo4j-driver/lib/v1/driver.js'

let rel = "WORKED_FOR";

function killUnderscore(string = "") {
  let result = string.replace("_", " ");
  return result.toLowerCase();
}

function getNameById(id, data) {
  for (let i = 0; i < data.nodes.length; i++) {
    const current = data.nodes[i];
    if (id === current.id) {
      return current.name;
    }
  }
}

function getIndexById(id, data) {
  for (let i = 0; i < data.nodes.length; i++) {
    const current = data.nodes[i];
    if (id === current.id) {
      return i;
    }
  }
}

module.exports = {
  killUnderscore: killUnderscore,
  getNameById: getNameById,
  getIndexById: getIndexById
};
