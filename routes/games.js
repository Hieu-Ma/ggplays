var express = require('express');
var router = express.Router();
const { User, Game, Review, Genre, Pro, Con, Gameshelf } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, requireAuth } = require('../auth');

router.get('/:id', asyncHandler(async (req, res) => {
   const id = parseInt(req.params.id, 10);
   let hasReview = false;
   const {userId} = req.session.auth;
   console.log(userId)
   const game = await Game.findByPk(id, {
      include: [Review, Genre]
   });

   const reviews = await Review.findAll({
      where: { game_id: id },
      include: [User, Pro, Con]
   })

   const gameshelves = await Gameshelf.findAll({
      where: { user_id: userId}
   })
   console.log("list of shelves" + gameshelves, "userId" + userId);
   
   let total = 0;
   let count = 0;

   for (let review of reviews) {
      total += review.score;
      count++;
      // if(review.User.id === req.session.auth.userId) {
      //    hasReview = true;
      // } else {
      //    hasReview = false;
      // }
      // console.log(review.User.id)
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
   res.render('game', { game, score, reviews, hasReview, userId, gameshelves })
}));

module.exports = router;