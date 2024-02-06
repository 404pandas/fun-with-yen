const sequelize = require('../config/connection');
const {
  User,
  Number,
  Shape,
  Letter,
  Favorites,
  GuidedNumber,
  GuidedLetter,
} = require('../models');

const userData = require('./userData.json');
const numberData = require('./numberData.json');
const shapeData = require('./shapeData.json');
const guidedNumberData = require('./guidedNumberData.json');
const guidedLetterData = require('./guidedLetterData.json');
const letterData = require('./letterData.json');
const favoritesData = require('./favoriteData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('Sequelize synced');
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('Users created');
  for (const number of numberData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log('Random user for number');
    console.log(randomUser.id);
    await Number.create({
      ...number,
      user_id: randomUser.id,
    });
    console.log(number);
  }
  console.log('Numbers created');
  for (const letter of letterData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log('Random user for letter');
    console.log(randomUser.id);
    await Letter.create({
      ...letter,
      user_id: randomUser.id,
    });
    console.log(letter);
  }
  console.log('Letters created');
  for (const shape of shapeData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log('Random user for shape');
    console.log(randomUser.id);
    await Shape.create({
      ...shape,
      user_id: randomUser.id,
    });
    console.log(shape);
  }
  console.log('Shapes created');
  for (const guidedLetter of guidedLetterData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log('Random user for guided letter');
    console.log(randomUser.id);

    await GuidedLetter.create({
      ...guidedLetter,
      user_id: randomUser.id,
    });
    console.log(guidedLetter);
  }
  console.log('Guided letters created');
  for (const guidedNumber of guidedNumberData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log('Random user for guided number');
    console.log(randomUser.id);

    await GuidedNumber.create({
      ...guidedNumber,
      user_id: randomUser.id,
    });
    console.log(guidedNumber);
  }
  console.log('Guided numbers created');
  for (const favorite of favoritesData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    // console.log('Random user for favorite');
    // console.log(randomUser.id);

    await Favorites.create({
      ...favorite,
      user_id: randomUser.id,
    });
    // console.log(favorite);
  }
  process.exit(0);
};

seedDatabase();
