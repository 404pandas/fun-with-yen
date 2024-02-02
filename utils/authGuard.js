// route guard for api routes/actions that require a logged in user
const withGuard = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    res.status(403).json({ msg: 'you must login to perform this action' });
  } else {
    next();
  }
};

// login/signup route redirect that require a logged in user
const withoutGuard = (req, res, next) => {
  if (!req.session.logged_in) {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = { withGuard, withoutGuard };
