const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shape extends Model {}

Shape.init(
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
    modelName: 'shape',
  }
);

module.exports = Shape;
