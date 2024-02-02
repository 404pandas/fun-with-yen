const router = require('express').Router();
const { Shape } = require('../../models/');

// tested and working as expected in Insomnia Feb 2 12:16PM
router.get('/', async (req, res) => {
  try {
    Shape.findAll().then((shapeData) => {
      res.status(200).json(shapeData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {});

router.delete('/:id', async (req, res) => {});

module.exports = router;
