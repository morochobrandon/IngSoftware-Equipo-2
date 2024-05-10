const { Person, PersonSchema } = require("./persons.model.js");

function setupModels(sequelize) {
  Person.init(PersonSchema, Person.config(sequelize));
}

module.exports = setupModels;
