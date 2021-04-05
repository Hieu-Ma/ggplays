const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const {csrfProtection, asyncHandler} = require('./utils');

router.get('/sign-up', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('sign-up', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken(),
  });
});

const userValidators = [

];

router.post('/sign-up', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body;

  const user = db.User.build({
    username,
    email,
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
