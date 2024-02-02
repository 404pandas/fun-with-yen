const router = require('express').Router();
const { Favorites } = require('../../models');
const { withGuard } = require('../../utils/authGuard');

// Adds to favorites
router.post('/', withGuard, async (req, res) => {
  console.log('Favorite attempting to be added');
  try {
    const favoriteData = await Favorites.findOne({
      where: {
        user_id: req.session.user_id,
        letter_id: req.body.letter_id,
        // number_id: req.body.number_id,
        // shape_id: req.body.shape_id,
      },
    });
    console.log('favoriteData');
    console.log(favoriteData);
    if (!favoriteData) {
      const newFavorite = await Favorites.create({
        user_id: req.session.user_id,
        letter_id: req.body.letter_id,
        // number_id: req.body.number_id,
        // shape_id: req.body.shape_id,
      });
      console.log('newFavorite');
      console.log(newFavorite);

      return res.json(newFavorite);
    }
    res.json(favoriteData);
  } catch (err) {
    console.log('There was an error');
    res.status(500).json(err);
  }
});

// Deletes from favorites
router.delete('/:id', withGuard, async (req, res) => {
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
    res.status(200).json({
      favoriteData,
      message: `Successfully deleted favorite with id ${req.params.id}`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
