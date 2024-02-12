const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
// Tested with Insomnia and working as expected Feb 1 2024 10:57PM
router.post('/', async (req, res) => {
  // try/catch req.session
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;

      res.status(200).json(dbUserData);
    });
    console.log('User created successfully!');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// LOGIN user
// Tested with Insomnia and working as expected Feb 1 2024 11:20PM
router.post('/login', async (req, res) => {
  // try/catch User.findOne- req.body.username
  try {
    // finds user by matching username
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    // if logic for incorrect username
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username! Please try again!' });
      return;
    }

    // verifies enter password matches stored password in database
    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }

    // sets up session variable `loggedIn` when user successfully logs in
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;
      req.session.username = dbUserData.username;
      res
        .status(200)
        .json({
          user: dbUserData,
          message: 'You are now logged in!',
          token: req.session.id,
        });
    });
    console.log('Logged in successfully!');
    // console.log(req.session);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// TODO- debug and get successful test
router.post('/logout', (req, res) => {
  // destroys session when user logs out
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).json({ message: 'You are now logged out!' });
    });
    console.log('Logged out successfully!');
    console.log(req.session);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
