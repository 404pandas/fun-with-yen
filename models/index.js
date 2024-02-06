const User = require('./User');
const Letter = require('./Letter');
const GuidedLetter = require('./GuidedLetter');
const GuidedNumber = require('./GuidedNumber');
const Shape = require('./Shape');
const Number = require('./Number');
const Favorites = require('./Favorites');

User.hasMany(Favorites, { foreignKey: 'user_id', onDelete: 'CASCADE' });
User.hasMany(Letter, { foreignKey: 'letter_id', onDelete: 'CASCADE' });
User.hasMany(Shape, { foreignKey: 'shape_id', onDelete: 'CASCADE' });
User.hasMany(Number, { foreignKey: 'number_id', onDelete: 'CASCADE' });

Favorites.belongsTo(User, { foreignKey: 'user_id' });
Favorites.hasMany(Letter, { foreignKey: 'letter_id' });
Favorites.hasMany(Shape, { foreignKey: 'shape_id' });
Favorites.hasMany(Number, { foreignKey: 'number_id' });

Letter.belongsTo(Favorites, { foreignKey: 'letter_id', onDelete: 'CASCADE' });
Letter.belongsTo(User, { foreignKey: 'user_id' });
Shape.belongsTo(Favorites, { foreignKey: 'shape_id', onDelete: 'CASCADE' });
Shape.belongsTo(User, { foreignKey: 'user_id' });
Number.belongsTo(Favorites, { foreignKey: 'number_id', onDelete: 'CASCADE' });
Number.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
  User,
  Letter,
  Shape,
  Number,
  Favorites,
  GuidedLetter,
  GuidedNumber,
};
