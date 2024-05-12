const { Model, DataTypes } = require("sequelize");

const PERSON_TABLE = "persons";

class Person extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PERSON_TABLE,
      modeloName: "Person",
      timestamps: true,
    }
  }
}



const PersonSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "name",
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "address",
  },
  phone: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "phone",
  },
};

module.exports = { Person, PersonSchema };
