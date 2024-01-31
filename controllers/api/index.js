const router = require('express').Router();

const userRoutes = require('./userRoutes');
const letterRoutes = require('./letterRoutes');
const numberRoutes = require('./numberRoutes');
const shapeRoutes = require('./shapeRoutes');

router.use('/user', userRoutes);
router.use('/letters', letterRoutes);
router.use('/numbers', numberRoutes);
router.use('/shapes', shapeRoutes);

module.exports = router;
