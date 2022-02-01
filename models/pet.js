const { DataTypes } = require("sequelize");
const db = require("../db");

const ChoreModel = db.define("chore", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deadline: {
    type: DataTypes.DATE,
  },
  assign: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  complete: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = ChoreModel;