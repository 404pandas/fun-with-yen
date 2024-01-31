const User = require('./User');
const Letter = require('./Letter');
const Shape = require('./Shape');
const Number = require('./Number');

User.hasMany(Letter, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Shape, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Number, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Letter.belongsTo(User, {
  foreignKey: 'user_id',
});

Shape.belongsTo(User, {
  foreignKey: 'user_id',
});

Number.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Letter, Shape, Number };
