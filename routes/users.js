const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { User } = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');


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
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post('/user/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      // TODO Attempt to login the user.
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

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
