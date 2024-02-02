const router = require('express').Router();

const userRoutes = require('./userRoutes');
const letterRoutes = require('./letterRoutes');
const numberRoutes = require('./numberRoutes');
const shapeRoutes = require('./shapeRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/user', userRoutes);
router.use('/letters', letterRoutes);
router.use('/numbers', numberRoutes);
router.use('/shapes', shapeRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;
