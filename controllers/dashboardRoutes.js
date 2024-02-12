const router = require('express').Router();
const {
  Letter,
  Number,
  Shape,
  GuidedNumber,
  GuidedLetter,
} = require('../models');
const { withGuard } = require('../utils/authGuard');

// const buttons = document.querySelectorAll('.favorite');
// buttons.addEventListener('click', async (event) => {
//   console.log('---------------- Favorite button clicked ----------------');
// });

// GET all saved numbers for dashboard
// /dashboard
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

    console.log('---------------- Dashboard route hit ----------------');
  } catch (err) {
    res.status(500).json(err);
  }
});
// TODO- build out switch case to take in which item
// /dashboard/:drawing-name
router.get('/:drawing-name', async (req, res) => {
  console.log(
    '---------------- Dashboard route for favorite requested---------------- '
  );
  try {
    //   // letter
    //   const letterResults = await Letter.findOne({
    //     where: {
    //       user_id: req.session.user_id,
    //       name: req.params['drawing-name'],
    //     },
    //   });
    //   console.log('Letter results after get');
    //   console.log(letterResults);
    //   const newLetterResults = letterResults.toJSON();
    // // number
    // const numberResults = await Number.findOne({
    //   where: {
    //     user_id: req.session.user_id,
    //     name: req.params['drawing-name'],
    //   },
    // });
    // const newNumberResults = numberResults.toJSON();
    // // shape
    // const shapeResults = await Shape.findOne({
    //   where: {
    //     user_id: req.session.user_id,
    //     name: req.params['drawing-name'],
    //   },
    // });
    // const newShapeResults = shapeResults.toJSON();
    // // guided number
    // const guidedNumberResults = await GuidedNumber.findOne({
    //   where: {
    //     user_id: req.session.user_id,
    //     name: req.params['drawing-name'],
    //   },
    // });
    // const newGuidedNumberResults = guidedNumberResults.toJSON();
    // // guided letter
    // const guidedLetterResults = await GuidedLetter.findOne({
    //   where: {
    //     user_id: req.session.user_id,
    //     name: req.params['drawing-name'],
    //   },
    // });
    // const newGuidedLetterResults = guidedLetterResults.toJSON();

    // res.render('home', {
    //   loggedIn: req.session.logged_in,
    //   username: req.session.username,
    //   letter: newLetterResults,
    //   // number: newNumberResults,
    //   // shape: newShapeResults,
    //   // guidedNumber: newGuidedNumberResults,
    //   // guidedLetter: newGuidedLetterResults,
    // });
    res.json('---------------- Success! ----------------');
  } catch (err) {
    console.log('---------------- There was an error! ----------------');
    res.status(500).json(err);
  }
});

module.exports = router;
