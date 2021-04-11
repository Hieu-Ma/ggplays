const express = require('express');
const router = express.Router();
const { Gameshelf, Game, User, Genre } = require('../db/models');
const { asyncHandler } = require('./utils');

router.get('/', asyncHandler(async (req, res, next) => {
    const games = await Game.findAll()

    const genres = await Genre.findAll()

    res.render('games-list', { genres, games })


}));

router.get('/:id', asyncHandler(async (req, res) => {
    const genreId = parseInt(req.params.id, 10);

    const games = await Game.findAll({
        where: { genre_id: genreId }
    })

    const genres = await Genre.findAll()


    res.render('games-list', { genres, games })

    
}));


module.exports = router
