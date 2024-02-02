const router = require('express').Router();
const { withoutGuard } = require('../utils/authGuard');

// GET all numbers
router.get('/numbers', async (req, res) => {});

// GET all letters
router.get('/letters', async (req, res) => {});

// GET all shapes
router.get('/shapes', async (req, res) => {});

// GET login
router.get('/login', withoutGuard, (req, res) => {});

// GET signup
router.get('/signup', withoutGuard, (req, res) => {});

module.exports = router;
