const router = require('express').Router();
const { Favorites } = require('../../models');
const withAuth = require('../../utils/auth');

// Adds to favorites
router.post('/', withAuth, async (req, res) => {
  try {
    const favoriteData = await Favorites.findOne({
      where: {
        user_id: req.session.user_id,
        letter_id: req.body.letter_id,
        number_id: req.body.number_id,
        shape_id: req.body.shape_id,
      },
    });

    if (!favoriteData) {
      const newFavorite = await Favorites.create({
        user_id: req.session.user_id,
        letter_id: req.body.letter_id,
        number_id: req.body.number_id,
        shape_id: req.body.shape_id,
      });
      return res.json(newFavorite);
    }
    res.json(favoriteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes from favorites
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const favoriteData = await Favorites.destroy({
      where: {
        user_id: req.session.user_id,
        letter_id: req.body.letter_id,
        number_id: req.body.number_id,
        shape_id: req.body.shape_id,
      },
    });
    if (!favoriteData) {
      res.status(404).json({ message: 'No favorite found with that ID' });
    }
    res
      .status(200)
      .json({
        favoriteData,
        message: `Successfully deleted favorite with id ${req.params.id}`,
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
