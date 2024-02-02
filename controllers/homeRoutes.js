const router = require('express').Router();
const { Shape, Letter, Number } = require('../models/');
const { withoutGuard } = require('../utils/authGuard');

// GET home
router.get('/', async (req, res) => {
  try {
    const shapes = await Shape.findAll();
    const letters = await Letter.findAll();
    const numbers = await Number.findAll();

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
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET signup
router.get('/signup', withoutGuard, (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
