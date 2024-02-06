const router = require('express').Router();
const {
  Shape,
  Letter,
  Number,
  GuidedLetter,
  GuidedNumber,
} = require('../models/');
const { withoutGuard } = require('../utils/authGuard');

// GET home
router.get('/', async (req, res) => {
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
    console.log('Guided numbers mapped');

    res.render('home', {
      shapes,
      letters,
      numbers,
      guidedLetters,
      guidedNumbers,
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
