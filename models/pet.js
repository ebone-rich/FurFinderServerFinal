const { DataTypes } = require("sequelize");
const db = require("../db");

const PetModel = db.define("pet", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
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
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  posted: {
    type: DataTypes.STRING,
  },
  house_trained: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coat_length: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = PetModel;