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

// Favorites.belongsTo(User, { foreignKey: 'user_id' });
User.belongsToMany(Letter, {
  through: 'favorite_letters',
  foreignKey: 'user_id',
});
User.belongsToMany(Shape, {
  through: 'favorite_shapes',
  foreignKey: 'user_id',
});
User.belongsToMany(Number, {
  through: 'favorite_numbers',
  foreignKey: 'user_id',
});

Letter.belongsToMany(User, {
  through: 'favorite_letters',
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
Shape.belongsToMany(User, {
  through: 'favorite_shapes',
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
Number.belongsToMany(User, {
  through: 'favorite_numbers',
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Letter,
  Shape,
  Number,
  Favorites,
  GuidedLetter,
  GuidedNumber,
};
