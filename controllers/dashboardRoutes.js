const router = require('express').Router();
const {
  Letter,
  Number,
  Shape,
  GuidedNumber,
  GuidedLetter,
} = require('../models');
const { withGuard } = require('../utils/authGuard');

// GET all saved numbers for dashboard
router.get('/', withGuard, async (req, res) => {
  // console.log(req);
  // console.log('Dashboard route hit');
  try {
    const letterData = await Letter.findAll({
      where: { user_id: req.session.user_id },
    });
    const savedLetters = letterData.map((savedLetter) =>
      savedLetter.get({ plain: true })
    );
    const shapeData = await Shape.findAll({
      where: { user_id: req.session.user_id },
    });
    const savedShapes = shapeData.map((savedShape) =>
      savedShape.get({ plain: true })
    );
    const numberData = await Number.findAll({
      where: { user_id: req.session.user_id },
    });
    const savedNumbers = numberData.map((savedNumber) =>
      savedNumber.get({ plain: true })
    );
    const guidedGuidedLetterData = await GuidedLetter.findAll({
      where: { user_id: req.session.user_id },
    });
    const savedGuidedLetters = guidedGuidedLetterData.map((savedGuidedLetter) =>
      savedGuidedLetter.get({ plain: true })
    );
    const savedGuidedNumberData = await GuidedNumber.findAll({
      where: { user_id: req.session.user_id },
    });
    const savedGuidedNumbers = savedGuidedNumberData.map((savedGuidedNumber) =>
      savedGuidedNumber.get({ plain: true })
    );

    res.render('dashboard', {
      dashboard: true,
      savedLetters,
      savedNumbers,
      savedShapes,
      savedGuidedNumbers,
      savedGuidedLetters,
      loggedIn: req.session.logged_in,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
