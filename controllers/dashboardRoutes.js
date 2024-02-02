const router = require('express').Router();
const { Letter, Number, Shape, User, Favorites } = require('../models');
const { withGuard } = require('../utils/authGuard');
const Sequelize = require('sequelize');

// GET all saved numbers for dashboard
router.get('/savedNumbers', withGuard, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Favorites }, { model: Number }],
    });

    const user = userData.get({ plain: true });
    const favoriteId = [];
    user.favorites.forEach((favorite) => favoriteId.push(favorite.number_id));

    // Saved numbers logic
    const savedNumbersData = await Number.findAll({
      where: {
        id: favoriteId,
      },
      include: {
        model: User,
        include: [{ model: Favorites, include: [{ model: Number }] }],
      },
      attributes: {
        include: [
          [
            Sequelize.literal(`(
                                    SELECT COUNT(*)
                                    FROM Favorites AS favorites
                                    WHERE
                                        number.id = number_id
                                )`),
            'favoritesCount',
          ],
          [
            Sequelize.literal(`(
                                          SELECT COUNT(*) FROM Favorites AS checks WHERE number.id = number_id AND ${req.session.user_id} = user_id
                                      )`),
            'hasFavorited',
          ],
        ],
      },
    });

    const numberSaved = savedNumbersData.map((number) =>
      number.get({ plain: true })
    );
    const numbers = numberSaved.reverse();

    const currentUser = {
      user_id: req.session.user_id,
      username: req.session.username,
    };
    // TODO- build out partial for favorites
    res.render('favorites', {
      currentUser,
      numbers,

      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all saved letters for dashboard
router.get('/savedLetters', withGuard, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Favorites }, { model: Letter }],
    });

    const user = userData.get({ plain: true });
    const favoriteId = [];
    user.favorites.forEach((favorite) => favoriteId.push(favorite.letter_id));

    const savedLettersData = await Letter.findAll({
      where: {
        id: favoriteId,
      },
      include: {
        model: User,
        include: [{ model: Favorites, include: [{ model: Letter }] }],
      },
      attributes: {
        include: [
          [
            Sequelize.literal(`(
                                      SELECT COUNT(*)
                                      FROM Favorites AS favorites
                                      WHERE
                                          letter.id = letter_id
                                  )`),
            'favoritesCount',
          ],
          [
            Sequelize.literal(`(
                                            SELECT COUNT(*) FROM Favorites AS checks WHERE letter.id = letter_id AND ${req.session.user_id} = user_id
                                        )`),
            'hasFavorited',
          ],
        ],
      },
    });

    const letterSaved = savedLettersData.map((letter) =>
      letter.get({ plain: true })
    );
    const letters = letterSaved.reverse();

    const currentUser = {
      user_id: req.session.user_id,
      username: req.session.username,
    };
    // TODO- build out partial for favorites
    res.render('favorites', {
      currentUser,
      letters,

      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all saved shapes for dashboard
router.get('/savedShapes', withGuard, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Favorites }, { model: Shape }],
    });

    const user = userData.get({ plain: true });
    const favoriteId = [];
    user.favorites.forEach((favorite) => favoriteId.push(favorite.shape_id));

    const savedShapesData = await Shape.findAll({
      where: {
        id: favoriteId,
      },
      include: {
        model: User,
        include: [{ model: Favorites, include: [{ model: Shape }] }],
      },
      attributes: {
        include: [
          [
            Sequelize.literal(`(
                                        SELECT COUNT(*)
                                        FROM Favorites AS favorites
                                        WHERE
                                            shape.id = shape_id
                                    )`),
            'favoritesCount',
          ],
          [
            Sequelize.literal(`(
                                              SELECT COUNT(*) FROM Favorites AS checks WHERE shape.id = shape_id AND ${req.session.user_id} = user_id
                                          )`),
            'hasFavorited',
          ],
        ],
      },
    });

    const shapeSaved = savedShapesData.map((shape) =>
      shape.get({ plain: true })
    );
    const shapes = shapeSaved.reverse();

    const currentUser = {
      user_id: req.session.user_id,
      username: req.session.username,
    };
    // TODO- build out partial for favorites
    res.render('favorites', {
      currentUser,
      shapes,

      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
