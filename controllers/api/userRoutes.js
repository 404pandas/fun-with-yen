const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  // try/catch req.session
});

// LOGIN user
router.post('/login', async (req, res) => {
  // try/catch User.findOne- req.body.username
  // if logic for incorrect username
  // if logic for invalid password
  // req.session.save
  // 200 status for success
});

router.post('/logout', (req, res) => {
  // req.session.destroy
});

module.exports = router;
