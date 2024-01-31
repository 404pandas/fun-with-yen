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
    file_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'shape',
    timestamps: false, // Disable timestamps for this model
  }
);

module.exports = Shape;
