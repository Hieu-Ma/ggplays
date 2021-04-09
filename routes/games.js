var express = require('express');
var router = express.Router();
const { User, Game, Review, Genre, Pro, Con, Gameshelf } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, requireAuth } = require('../auth');

router.get('/:id', asyncHandler(async (req, res) => {
   try{
      let userId;

      if(req.session.auth) {
         userId = req.session.auth.userId;
      } else {
         userId = 0;
      }

      const id = parseInt(req.params.id, 10);
      let hasReview = false;
      let userReview;
      const game = await Game.findByPk(id, {
         include: [Review, Genre]
      });

      const reviews = await Review.findAll({
         where: { game_id: id },
         include: [User, Pro, Con]
      })

      let gameshelves;
      let total = 0;
      let count = 0;

      if(req.session.auth) {
         for (let review of reviews) {
            total += review.score;
            count++;
            if(review.User.id === userId) {
               hasReview = true;
               userReview = review;
            } else {
               hasReview = false;
            }
         }
      gameshelves = await Gameshelf.findAll({
         where: { user_id: userId }
      })
      } else {
         for (let review of reviews) {
            total += review.score;
            count++;
         }
         gameshelves = await Gameshelf.findAll({
            where: { user_id: userId }
         })
      }
      count *= 100;
      let score = Math.floor((total / count) * 100);

      res.render('game', { game, score, reviews, hasReview, userId, userReview, gameshelves })

 } catch (e) {
   console.log(e)
 }
}));

router.get('/:id/review', asyncHandler(async (req, res) => {
   let userId = req.session.auth.userId;
   const id = parseInt(req.params.id, 10);

   let gameshelves = await Gameshelf.findAll({
      where: { user_id: userId }
   })

   let game = await Game.findByPk(id);
   
   let pros = await Pro.findAll()

   let cons = await Con.findAll()

   res.render('review', {game, gameshelves, cons, pros});
}));

router.post('/:id/review', asyncHandler(async (req, res) => {
   const userId = req.session.auth.userId; 
   // const id = parseInt(req.params.id, 10);
   const {review_title, game_review_score, review_description, pro_options, con_options, gameId} = req.body;
   let review = await Review.create({
      title: review_title,
      score: game_review_score,
      description: review_description,
      user_id: userId,
      game_id: gameId,
      pro_id: pro_options,
      con_id: con_options,
   })
   // console.log(review_title, game_review_score, review_description, pro_options, con_options, gameId, userId);
   // console.log("this property is,", game_review_score)
   // res.json(rating)
   // res.json({review});
   res.redirect(`/games/${gameId}`);
}));

module.exports = router;
