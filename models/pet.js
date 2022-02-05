const { DataTypes } = require("sequelize");
const db = require("../db");

const PetModel = db.define("pet", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  posted: {
    type: DataTypes.DATE,
  },
  house_trained: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  Coat_length: {
    type: DataTypes.STRING,
    allowNull: false,
  },
   Coat_length: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = PetModel;