const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { Gameshelf, Game, User, Sequelize } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('./utils');
const Op = Sequelize.Op;

router.get('/', requireAuth, asyncHandler(async (req, res, next) => {
    const shelves = await Gameshelf.findAll()
    const { userId } = req.session.auth;
    const shelves = await Gameshelf.findAll({
        where: { user_id: userId }
    });
    res.render('gameshelves', { shelves });
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
    const gameshelves = await Gameshelf.findAll({
        where: { 
            user_id: userId,
            title: ['Currently Playing', 'Want to Play', 'Played']
        }
    });

    const customShelves = await Gameshelf.findAll({
        where: {
            user_id: userId,
            title: {
                [Op.notIn]: ['Currently Playing', 'Want to Play', 'Played']
            }
        }
    })

    console.log(gameshelves);
    res.render('gameshelves-edit', { gameshelves, customShelves });
}));

// rename
// router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
//     const { userId } = req.session.auth;
//     const customShelfId = parseInt(req.params.id, 10);
//     const customShelf = await Gameshelf.findOne({
//         where: {
//             user_id: userId,
//             title: {
//                 [Op.notIn]: ['Currently Playing', 'Want to Play', 'Played']
//             },
//             id: customShelfId
//         }
//     });

//     await customShelf.update({
//         where: { title: req.body.message }
//     });
//     res.json({ customShelf });
// }))

// router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
//     const { userId } = req.session.auth;
//     // click event for delete associated with game shelf
//     const customShelfId = parseInt(req.params.id, 10);
//     const customShelf = await Gameshelf.findOne({
//         where: {
//             user_id: userId,
//             title: {
//                 [Op.notIn]: ['Currently Playing', 'Want to Play', 'Played']
//             },
//             id: customShelfId
//         }
//     });
//     await customShelf.destroy();
// }))

module.exports = router;
