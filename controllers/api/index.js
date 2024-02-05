const router = require('express').Router();

const userRoutes = require('./userRoutes');
const letterRoutes = require('./letterRoutes');
const guidedLetterRoutes = require('./guidedLetterRoutes');
const numberRoutes = require('./numberRoutes');
const guidedNumberRoutes = require('./guidedNumberRoutes');
const shapeRoutes = require('./shapeRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/user', userRoutes);
router.use('/letters', letterRoutes);
router.use('/guided-letters', guidedLetterRoutes);
router.use('/numbers', numberRoutes);
router.use('/guided-numbers', guidedNumberRoutes);
router.use('/shapes', shapeRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;
