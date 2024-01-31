const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Number extends Model {}

Number.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'number',
  }
);

module.exports = Number;
