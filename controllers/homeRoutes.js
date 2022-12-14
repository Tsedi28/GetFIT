const router = require('express').Router();
const { User, Workouts } = require('../models');
const withAuth = require('../utils/auth');

// Not logged in user flag - hide homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['user_name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Logged in user flag - show homepage
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If session exists, redirect request to homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});




module.exports = router;