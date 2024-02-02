const router = require('express').Router();
const { Shape } = require('../../models/');

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
