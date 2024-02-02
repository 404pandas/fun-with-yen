const User = require('./User');
const Letter = require('./Letter');
const Shape = require('./Shape');
const Number = require('./Number');
const Favorites = require('./Favorites');

User.hasMany(Favorites, { foreignKey: 'user_id', onDelete: 'CASCADE' });

Favorites.belongsTo(User, { foreignKey: 'user_id' });
Favorites.belongsTo(Letter, { foreignKey: 'letter_id' });
// Favorites.belongsTo(Shape, { foreignKey: 'shape_id' });
// Favorites.belongsTo(Number, { foreignKey: 'number_id' });

Letter.hasMany(Favorites, { foreignKey: 'letter_id', onDelete: 'CASCADE' });
// Shape.hasMany(Favorites, { foreignKey: 'shape_id', onDelete: 'CASCADE' });
// Number.hasMany(Favorites, { foreignKey: 'number_id', onDelete: 'CASCADE' });

module.exports = { User, Letter, Shape, Number, Favorites };
