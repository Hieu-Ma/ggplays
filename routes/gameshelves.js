const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { Gameshelf, Game, User } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('./utils');

router.get('/', requireAuth, asyncHandler(async (req, res, next) => {
    const gameshelves = await Gameshelf.findAll()
    res.render('gameshelves', { gameshelves });

}));

const shelfValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Shelf Title')
        .isLength({ max: 30 })
        .withMessage('Title name cannot be more than 30 characters')
]

router.post('/create-shelf', requireAuth, shelfValidators, asyncHandler(async (req, res, next) => {
    const { userId } = req.session.auth;
    const {
        title,
    } = req.body;

    const newGameshelf = Gameshelf.build({
        title: title,
        user_id: userId,
    });
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await newGameshelf.save();
        res.redirect('/gameshelves');
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('gameshelves', { errors });
    }
}));

router.get('/edit', requireAuth, asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const gameshelves = await Gameshelf.findOne({
        where: { user_id: userId }
    });

    res.render('gameshelves-edit', { gameshelves });
}));

module.exports = router;
