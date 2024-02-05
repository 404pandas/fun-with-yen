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
    const lettersData = await Letter.findAll();
    const numbersData = await Number.findAll();
    const guidedLettersData = await GuidedLetter.findAll();
    const guidedNumbersData = await GuidedNumber.findAll();

    const shapes = shapesData.map((shape) => shape.get({ plain: true }));
    const letters = lettersData.map((letter) => letter.get({ plain: true }));
    const numbers = numbersData.map((number) => number.get({ plain: true }));
    const guidedLetters = guidedLettersData.map((guidedLetter) =>
      guidedLetter.get({ plain: true })
    );
    const guidedNumbers = guidedNumbersData.map((guidedNumber) =>
      guidedNumber.get({ plain: true })
    );

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
