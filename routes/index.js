const express = require('express');
const router = express.Router();
const { Genre, Game } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const fps = await Game.findAll({
    where: {
      genre_id: 1
    }
  })
  // console.log("checking game", fps);
  res.render('index', { fps });

}));

module.exports = router;
