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
  console.log('---------- Sequelize synced');
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('---------- Users created');
  for (const number of numberData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log('---------- Random user for number');
    console.log(randomUser.id);
    await Number.create({
      ...number,
      user_id: randomUser.id,
    });
    console.log(number);
  }
  console.log('---------- Numbers created');
  for (const letter of letterData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log('---------- Random user for letter');
    console.log(randomUser.id);
    await Letter.create({
      ...letter,
      user_id: randomUser.id,
    });
    console.log(letter);
  }
  console.log('---------- Letters created');
  for (const shape of shapeData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log('---------- Random user for shape');
    console.log(randomUser.id);
    await Shape.create({
      ...shape,
      user_id: randomUser.id,
    });
    console.log(shape);
  }
  console.log('---------- Shapes created');
  for (const guidedLetter of guidedLetterData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log('---------- Random user for guided letter');
    console.log(randomUser.id);

    await GuidedLetter.create({
      ...guidedLetter,
      user_id: randomUser.id,
    });
    console.log(guidedLetter);
  }
  console.log('---------- Guided letters created');
  for (const guidedNumber of guidedNumberData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log('---------- Random user for guided number');
    console.log(randomUser.id);

    await GuidedNumber.create({
      ...guidedNumber,
      user_id: randomUser.id,
    });
    console.log(guidedNumber);
  }
  console.log('---------- Guided numbers created');
  for (const favorite of favoritesData) {
    // Find the user for the favorite
    const user = users.find((u) => u.id === favorite.user_id);
    if (!user) {
      console.error(`User with id ${favorite.user_id} not found.`);
      continue;
    }

    // Create a favorite for the user
    const newFavorite = await Favorites.create({ user_id: user.id });

    // Associate numbers with the favorite
    for (const numberId of favorite.number_ids) {
      const number = await Number.findByPk(numberId);
      if (!number) {
        console.error(`Number with id ${numberId} not found.`);
        continue;
      }
      await newFavorite.addNumbers([number]);
    }
    // Associate shapes with the favorite
    for (const shapeId of favorite.shape_ids) {
      const shape = await Shape.findByPk(shapeId);
      if (!shape) {
        console.error(`Shape with id ${shapeId} not found.`);
        continue;
      }
      await newFavorite.addShapes([shape]);
    }
    // Associate letters with the favorite
    for (const letterId of favorite.letter_ids) {
      const letter = await Letter.findByPk(letterId);
      if (!letter) {
        console.error(`Letter with id ${letterId} not found.`);
        continue;
      }
      await newFavorite.addLetters([letter]);
    }

    console.log(`Favorite created for User ${user.id}`);
  }

  console.log('----------- Favorites data added successfully');
  console.log(favoritesData);
  process.exit(0);
};

seedDatabase();
