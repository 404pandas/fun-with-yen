const router = require('express').Router();
const {
  Shape,
  Letter,
  Number,
  GuidedLetter,
  GuidedNumber,
} = require('../models/');
const { withoutGuard } = require('../utils/authGuard');

// Function needed to check if user has favorited an item
async function hasUserFavoritedItem(userId, itemId, itemType) {
  switch (itemType) {
    case 'Shape':
      itemType = Shape;
      break;
    case 'Letter':
      itemType = Letter;
      break;
    case 'Number':
      itemType = Number;
      break;
    case 'GuidedLetter':
      itemType = GuidedLetter;
      break;
    default:
      itemType = GuidedNumber;
  }
  console.log('Favorites started mapping');
  try {
    // Check if there is a favorite entry for the user and the item
    const favorite = await itemType.findOne({
      where: {
        user_id: userId,
        id: itemId,
      },
    });
    return !!favorite; // Return true if favorite exists, false otherwise
  } catch (err) {
    console.error('Error checking favorite:', err);
    return false; // Return false if an error occurs
  }
}

// GET home
router.get('/', async (req, res) => {
  console.log('on home route');
  try {
    const shapesData = await Shape.findAll();
    console.log('Shape data found');
    const lettersData = await Letter.findAll();
    console.log('Letter data found');
    const numbersData = await Number.findAll();
    console.log('Number data found');
    const guidedLettersData = await GuidedLetter.findAll();
    console.log('Guided letter data found');
    const guidedNumbersData = await GuidedNumber.findAll();
    console.log('Guided number data found');

    const shapes = shapesData.map((shape) => shape.get({ plain: true }));
    console.log('Shapes mapped');
    const letters = lettersData.map((letter) => letter.get({ plain: true }));
    console.log('Letters mapped');
    const numbers = numbersData.map((number) => number.get({ plain: true }));
    console.log('Numbers mapped');
    const guidedLetters = guidedLettersData.map((guidedLetter) =>
      guidedLetter.get({ plain: true })
    );
    console.log('Guided letters mapped');
    const guidedNumbers = guidedNumbersData.map((guidedNumber) =>
      guidedNumber.get({ plain: true })
    );

    const savedLetterData = await Letter.findAll({
      where: { user_id: req.session.user_id },
    });
    const savedLetters = await Promise.all(
      savedLetterData.map(async (savedLetter) => {
        const letter = savedLetter.get({ plain: true });
        if (
          hasUserFavoritedItem(
            req.session.user_id,
            letter.id,
            letter.itemType
          ) === true
        ) {
          console.log('Favotited letter found for id ' + letter.id);
          letter.hasFavorited = true;
        } else {
          letter.hasFavorited = false;
        }
        return letter;
      })
    );
    const savedShapeData = await Shape.findAll({
      where: { user_id: req.session.user_id },
    });
    const savedShapes = await Promise.all(
      savedShapeData.map(async (savedShape) => {
        const shape = savedShape.get({ plain: true });
        shape.hasFavorited = await hasUserFavoritedItem(
          req.session.user_id,
          shape.id,
          'Shape'
        );
        return shape;
      })
    );
    const savedNumberData = await Number.findAll({
      where: { user_id: req.session.user_id },
    });
    const savedNumbers = await Promise.all(
      savedNumberData.map(async (savedNumber) => {
        const number = savedNumber.get({ plain: true });
        number.hasFavorited = await hasUserFavoritedItem(
          req.session.user_id,
          number.id,
          'Number'
        );
        return number;
      })
    );
    const savedGuidedLetterData = await GuidedLetter.findAll({
      where: { user_id: req.session.user_id },
    });
    const savedGuidedLetters = await Promise.all(
      savedGuidedLetterData.map(async (savedGuidedLetter) => {
        const guidedLetter = savedGuidedLetter.get({ plain: true });
        guidedLetter.hasFavorited = await hasUserFavoritedItem(
          req.session.user_id,
          guidedLetter.id,
          'GuidedLetter'
        );
        return guidedLetter;
      })
    );
    const savedGuidedNumberData = await GuidedNumber.findAll({
      where: { user_id: req.session.user_id },
    });
    const savedGuidedNumbers = await Promise.all(
      savedGuidedNumberData.map(async (savedGuidedNumber) => {
        const guidedNumber = savedGuidedNumber.get({ plain: true });
        guidedNumber.hasFavorited = await hasUserFavoritedItem(
          req.session.user_id,
          guidedNumber.id,
          'GuidedNumber'
        );
        return guidedNumber;
      })
    );

    console.log('Guided numbers mapped');
    console.log('----------saved items----------');
    console.log(savedLetters);
    console.log(savedShapes);
    console.log(savedNumbers);
    console.log(savedGuidedLetters);
    console.log(savedGuidedNumbers);

    res.render('home', {
      shapes,
      letters,
      numbers,
      guidedLetters,
      guidedNumbers,
      savedLetters,
      savedShapes,
      savedNumbers,
      savedGuidedLetters,
      savedGuidedNumbers,
      hasFavorited: savedLetters.hasFavorited,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all numbers
router.get('/numbers', async (req, res) => {});

// GET all letters
router.get('/letters', async (req, res) => {});

// GET all shapes
router.get('/shapes', async (req, res) => {});

// GET login
router.get('/login', withoutGuard, (req, res) => {
  try {
    res.render('login-signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET signup
router.get('/signup', withoutGuard, (req, res) => {
  try {
    res.render('login-signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
