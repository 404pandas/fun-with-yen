const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Letter extends Model {}

Letter.init(
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
    modelName: 'letter',
  }
);

module.exports = Letter;
