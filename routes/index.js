const express = require('express');
const router = express.Router();
const { Genre, Game } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  
  const fps = await Game.findAll({
    include: Genre,
    where: {
      genre_id: 1
    }
  })

  // console.log("checking game", fps);

  const action = await Game.findAll({
    where: {
      genre_id: 2
    }
  })

  const sports = await Game.findAll({
    where: {
      genre_id: 3
    }
  })

  const rpg = await Game.findAll({
    where: {
      genre_id: 4
    }
  })

  res.render('index', { fps, action, sports, rpg });

}));

module.exports = router;
