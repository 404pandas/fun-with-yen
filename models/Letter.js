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
    file_path: {
      type: DataTypes.STRING,
      allowNull: false,
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
