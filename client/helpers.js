// import Driver from 'node_modules/neo4j-driver/lib/v1/driver.js'

let rel = "WORKED_FOR";

function killUnderscore(string = "") {
  let result = string.replace("_", " ");
  return result.toLowerCase();
}

module.exports = {
  killUnderscore: killUnderscore
};
