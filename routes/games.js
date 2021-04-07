var express = require('express');
var router = express.Router();
const { User, Game, Review } = require('../db/models');
const {csrfProtection, asyncHandler} = require('./utils');

router.get('/:id', asyncHandler(async (req, res) => {
   const id = parseInt(req.params.id, 10);
   const game = await Game.findByPk(id, {
      include: Review
   });
   // console.log(game);
   res.render('game', {game})
}));

module.exports = router;