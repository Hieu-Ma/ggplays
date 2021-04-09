const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { Gameshelf, Game, User, Genre } = require('../db/models');
const { asyncHandler } = require('./utils');

router.get('/', asyncHandler(async(req, res, next) => {
    const games = await Genre.findAll({
        include: [Game]
    })

    res.render('games-list', { games })
}));



module.exports = router