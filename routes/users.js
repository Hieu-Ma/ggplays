const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const { User } = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser, requireAuth } = require('../auth');
const db = require('../db/models');
const { Gameshelf, Review, Game } = require('../db/models');

router.get('/sign-up', csrfProtection, asyncHandler(async (req, res) => {
  const user = User.build();
  res.render('sign-up', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken(),
  });
}));

const userValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid username')
    .isLength({ max: 30 })
    .withMessage('Username must not be more than 30 characters')
    .custom(value => {
      return User.findOne({ where: { username: value } }).then(user => {
        if (user) {
          return Promise.reject('Username is already in use');
        }
      });
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid email')
    .isLength({ max: 30 })
    .withMessage('Email must not be more than 30 characters')
    .isEmail({ checkFalsy: true })
    .withMessage('Input must be a valid email')
    .custom(value => {
      return User.findOne({ where: { email: value } }).then(user => {
        if (user) {
          return Promise.reject('Email is already in use');
        }
      });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    })
];

router.post('/sign-up', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body;

  const user = User.build({
    username,
    email,
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashed_password = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    const { userId } = req.session.auth;

    await db.Gameshelf.create(
      { title: "Want to Play", user_id: userId },
    );
    await db.Gameshelf.create(
      { title: "Currently Playing", user_id: userId },
    );
    await db.Gameshelf.create(
      { title: "Played", user_id: userId },
    );

    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('sign-up', {
      title: 'Sign Up',
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
  }

}));

router.get('/login', csrfProtection, (req, res) => {
  res.render('login', {
    title: "Login",
    csrfToken: req.csrfToken(),
  })
});

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post('/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    // console.log(req.body);

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await User.findOne({ where: { email: email } });

      if (user !== null) {
        // If the user exists then compare their password
        // to the provided password.
        const passwordMatch = await bcrypt.compare(password, user.hashed_password.toString());

        if (passwordMatch) {
          // If the password hashes match, then login the user
          // and redirect them to the default route.
          loginUser(req, res, user);
          return res.redirect('/');
        }
      }

      errors.push('Login failed for the provided email address and password');

    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('login', {
      title: 'Login',
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  }));

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/users/login');
});

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/profile', requireAuth, asyncHandler(async (req, res, next) => {
  // const userId = parseInt(req.params.userId, 10);
  // res.locals.user
  console.log("gameshelf", Gameshelf);
  const { userId } = req.session.auth;
  const user = await User.findByPk(userId);
  const gameshelves = await Gameshelf.findAll({
    where: { user_id: userId }
  });
  const reviews = await Review.findAll({
    where: { user_id: userId },
    include: Game
  })
  console.log("reviews", reviews);
  // console.log("test log " + user.username);
  // const username = await User.findByPk(userId);
  // let user = User;
  res.render('profile', { user, gameshelves, reviews });
}));

router.post('/demo-user',)

module.exports = router;
