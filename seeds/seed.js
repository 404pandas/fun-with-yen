const sequelize = require('../config/connection');
const { User, Number, Shape, Letter, Favorites } = require('../models');

const userData = require('./userData.json');
const numberData = require('./numberData.json');
const shapeData = require('./shapeData.json');
const letterData = require('./letterData.json');
const favoritesData = require('./favoriteData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const number of numberData) {
    await Number.create({
      ...number,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const letter of letterData) {
    await Letter.create({
      ...letter,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const shape of shapeData) {
    await Shape.create({
      ...shape,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const favorite of favoritesData) {
    await Favorites.create({
      ...favorite,
    });
  }
  process.exit(0);
};

seedDatabase();
