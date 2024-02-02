const router = require('express').Router();
const { Letter } = require('../../models/');

// tested and working as expected in Insomnia Feb 2 12:16PM
router.get('/', async (req, res) => {
  try {
    Letter.findAll().then((letterData) => {
      res.status(200).json(letterData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put('/:id', async (req, res) => {});

router.delete('/:id', async (req, res) => {});

module.exports = router;
