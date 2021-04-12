var express = require('express');
var router = express.Router();
const { asyncHandler } = require('./utils');
const { User, Game, Gameshelf, Shelf } = require('../db/models');



router.post(`/:id`, asyncHandler(async (req, res) => {
    const { userId } = req.session.auth
    const { gameId, shelfId } = req.body;

    let gameshelves = await Gameshelf.findAll({
        where: { user_id: userId }
    })

    // gets an array of all the gameshelf ids for user
    gameshelves = gameshelves.map((shelf) => {
        return shelf.id
    })

    // adding game to game shelf
    await Shelf.create({
        game_id: gameId,
        game_shelf_id: shelfId
    })

    res.json({
        success: "success"
    })

}));



module.exports = router