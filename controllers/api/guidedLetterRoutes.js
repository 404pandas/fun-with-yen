const router = require('express').Router();
const { GuidedLetter } = require('../../models/');

// tested and working as expected in Insomnia Feb 2 12:16PM
router.get('/', async (req, res) => {
  try {
    GuidedLetter.findAll().then((guidedLetterData) => {
      res.status(200).json(guidedLetterData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put('/:id', async (req, res) => {});

router.delete('/:id', async (req, res) => {});

module.exports = router;
