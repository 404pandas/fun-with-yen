const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Favorites extends Model {}

Favorites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    shape_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'shape',
        key: 'id',
      },
    },
    number_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'number',
        key: 'id',
      },
    },
    letter_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'letter',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorites',
  }
);

module.exports = Favorites;
