var express = require('express');
var router = express.Router();
const { User, Game, Review, Genre, Pro, Con, Gameshelf } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, requireAuth } = require('../auth');

router.get('/:id/review', asyncHandler(async(req, res) => {
   res.render('review');
}));


module.exports = router;