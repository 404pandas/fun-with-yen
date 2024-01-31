const User = require('./User');
const Letter = require('./Letter');
const Shape = require('./Shape');
const Number = require('./Number');

User.hasMany(Letter, { as: 'savedLetters' });
User.hasMany(Shape, { as: 'savedShapes' });
User.hasMany(Number, { as: 'savedItems' });

Letter.belongsTo(User);

Shape.belongsTo(User);

Number.belongsTo(User);

module.exports = { User, Letter, Shape, Number };
