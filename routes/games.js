var express = require('express');
var router = express.Router();
const { User, Game, Review, Genre } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/:id', asyncHandler(async (req, res) => {
   const id = parseInt(req.params.id, 10);
   const game = await Game.findByPk(id, {
      include: [Review, Genre]
   });

   const reviews = await Review.findAll({
      where: { game_id: id }
   })
   let total = 0;
   // keep count of how many reviews there are
   // add each score to total sum
   // find avg by dividing total by count of reviews
   let count = 0;
   for (let review of reviews) {
      total += review.score;
      count++;
   }
   count *= 100;
   let score = Math.floor((total / count) * 100);



   res.render('game', { game, score, reviews })
}));

module.exports = router;