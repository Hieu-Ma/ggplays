var express = require('express');
var router = express.Router();
const { User, Game, Review, Genre, Pro, Con, Gameshelf, Shelf } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, requireAuth } = require('../auth');

router.get('/:id', asyncHandler(async (req, res) => {
   try {
      let userId;

      if (req.session.auth) {
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

      if (req.session.auth) {
         for (let review of reviews) {
            total += review.score;
            count++;
            if (review.User.id === userId) {
               hasReview = true;
               userReview = review;
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

      // getting all pros and cons for a specific game
      let prosArray = []
      let consArray = []

      if (reviews) {
         for (let i = 0; i < reviews.length; i++) {
            let review = reviews[i]
            let proId = review.pro_id
            let conId = review.con_id

            const pro = await Pro.findByPk(proId)
            const con = await Con.findByPk(conId)

            if (prosArray.includes(pro.content)) {
               continue
            } else {
               prosArray.push(pro.content)
            }

            if (consArray.includes(con.content)) {
               continue
            } else {
               consArray.push(con.content)
            }
         }
      }


      res.render('game', { game, score, reviews, hasReview, userId, userReview, gameshelves, prosArray, consArray })

   } catch (e) {
      console.log(e)
   }
}));

router.post('/:id', asyncHandler(async (req, res) => {
   let userId = req.session.auth.userId;
   const id = parseInt(req.params.id, 10);
   console.log('afewfwafawfawef', userId);
   let reviewToDestroy = await Review.findOne({
      where: {
         user_id: userId,
         game_id: id
      }
   })
   await reviewToDestroy.destroy()
   res.redirect(`/games/${id}`);
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

   res.render('review', { game, gameshelves, cons, pros });
}));

router.post('/:id/review', asyncHandler(async (req, res) => {
   const userId = req.session.auth.userId;
   const { review_title, game_review_score, review_description, pro_options, con_options, gameId, gameshelf } = req.body;
   let review = await Review.create({
      title: review_title,
      score: game_review_score,
      description: review_description,
      user_id: userId,
      game_id: gameId,
      pro_id: pro_options,
      con_id: con_options,
   })

   let newShelf = await Shelf.create({
      game_id: gameId,
      game_shelf_id: gameshelf
   })
   res.redirect(`/games/${gameId}`);
}));

router.get('/:id/review/edit', asyncHandler(async (req, res) => {

   let userId = req.session.auth.userId;

   const id = parseInt(req.params.id, 10);

   let gameshelves = await Gameshelf.findAll({
      where: { user_id: userId }
   })

   let game = await Game.findByPk(id);

   let pros = await Pro.findAll()

   let cons = await Con.findAll()

   let userReview = await Review.findOne({
      where: {
         user_id: userId,
         game_id: id
      }
   })

   res.render('review-edit', { userReview, game, gameshelves, cons, pros })
}));

router.post('/:id/review/edit', asyncHandler(async (req, res) => {
   const userId = req.session.auth.userId;
   const id = parseInt(req.params.id, 10);

   const { review_title, game_review_score, review_description, pro_options, con_options, gameId, gameshelf } = req.body;
   await Review.destroy({
      where: {
         user_id: userId,
         game_id: gameId
      }
   })

   let review = await Review.create({
      title: review_title,
      score: game_review_score,
      description: review_description,
      user_id: userId,
      game_id: gameId,
      pro_id: pro_options,
      con_id: con_options,
   })

   let newShelf = await Shelf.create({
      game_id: gameId,
      game_shelf_id: gameshelf
   })
   res.redirect(`/games/${gameId}`);
}));

module.exports = router;
