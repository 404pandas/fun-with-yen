const router = require('express').Router();
const { Number } = require('../../models/');

router.get('/', async (req, res) => {
  try {
    Number.findAll().then((numberData) => {
      res.status(200).json(numberData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {});

router.delete('/:id', async (req, res) => {});

module.exports = router;
