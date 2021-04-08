var express = require('express');
var router = express.Router();
const { User, Game, Review, Genre, Pro, Con } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, requireAuth } = require('../auth');

router.get('/:id', asyncHandler(async (req, res) => {
   const id = parseInt(req.params.id, 10);
   const hasReview = false;


   const game = await Game.findByPk(id, {
      include: [Review, Genre]
   });

   const reviews = await Review.findAll({
      where: { game_id: id },
      include: [User, Pro, Con]
   })

   let total = 0;
   let count = 0;

   for (let review of reviews) {
      total += review.score;
      count++;
      if(review.User.id === req.session.auth.userId) {
         hasReview = true;
      }
      console.log(review.User.id)
   }
   count *= 100;
   let score = Math.floor((total / count) * 100);

   // console.log(req.session.auth);
   // if(req.session.auth) {
   //    const sessionId = req.session.auth.userId;
   //    const sessionBoolean = true;
   // } else {
   //    const sessionBoolean = false;
   // }

   // console.log(req.session.auth.userId);
   res.render('game', { game, score, reviews, hasReview,  })
}));

module.exports = router;