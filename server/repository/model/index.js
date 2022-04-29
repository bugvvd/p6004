const mongoose = require("./db");
const { schemas } = require("./schema");

//
const models = {};

schemas.forEach((schema) => {
  const name = Object.keys(schema)[0];
  models[name] = mongoose.model(name, schema[name], name);
});

module.exports = { models };
