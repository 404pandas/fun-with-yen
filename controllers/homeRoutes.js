const router = require('express').Router();
const { Shape, Letter, Number } = require('../models/');
const { withoutGuard } = require('../utils/authGuard');

// GET home
router.get('/', async (req, res) => {
  try {
    const shapesData = await Shape.findAll();
    const lettersData = await Letter.findAll();
    const numbersData = await Number.findAll();

    const shapes = shapesData.map((shape) => shape.get({ plain: true }));
    const letters = lettersData.map((letter) => letter.get({ plain: true }));
    const numbers = numbersData.map((number) => number.get({ plain: true }));

    res.render('home', { shapes, letters, numbers });
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
