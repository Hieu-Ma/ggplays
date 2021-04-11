const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { Gameshelf, Game, Genre, Sequelize, Shelf } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('./utils');
const Op = Sequelize.Op;

router.get('/', requireAuth, asyncHandler(async (req, res, next) => {
    const { userId } = req.session.auth;
    // const shelves = await Gameshelf.findAll({
    //     // include: Game,
    //     where: { user_id: userId },
    // });
    const games = await Game.findAll({
        include: Genre,
        order: [
            'name'
        ]
    });

    const shelves = await Gameshelf.findAll({
        where: { user_id: userId },
        // include: [{
        //     model: Game,
        //     order: ['name']
        // }]
        include: [{
            model: Game,
            include: Genre
        }],
        order: [
            [{model: Game}, 'name']
        ]
    })
    // res.json({shelvesGames})
    res.render('gameshelves', { shelves, games});
}));

// router.post('/delete', requireAuth, asyncHandler(async (req, res, next) => {
//     const { userId } = req.session.auth;
//     const {gameId, gameshelf} = req.body;
//     // console.log(gameId, gameshelf)
//     // let newShelf = await Shelf.create({
//     //     game_id: gameId,
//     //     game_shelf_id: gameshelf
//     //  })

//     console.log("id's",gameId, gameshelf)
//     // let shelfToDestroy = await Shelf.findOne({
//     //     where: {
//     //         game_id: gameId,
//     //         game_shelf_id: gameshelf
//     //     }
//     // })

//     await Shelf.destroy({
//         where: {
//             game_shelf_id: gameshelf,
//             game_id: gameId,
//         }
//     })
//     // await shelfToDestroy.destroy();
//     // res.json({shelfToDestroy})
//     res.redirect(`/gameshelves`);
// }));
router.post('/', requireAuth, asyncHandler(async (req, res, next) => {
    const { userId } = req.session.auth;
    const {gameId, gameshelf} = req.body;
    console.log(gameId, gameshelf)
    let newShelf = await Shelf.create({
        game_id: gameId,
        game_shelf_id: gameshelf
     })
    res.redirect(`/gameshelves`)
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

    // const shelves = await Gameshelf.findAll({
    //     where: { user_id: userId }
    // });

    // const games = await Game.findAll({
    //     include: Genre
    // });

    const games = await Game.findAll({
        include: Genre,
        order: [
            'name'
        ]
    });

    const shelves = await Gameshelf.findAll({
        where: { user_id: userId },
        // include: [{
        //     model: Game,
        //     order: ['name']
        // }]
        include: [{
            model: Game,
            include: Genre
        }],

        order: [
            [{model: Game}, 'name']
        ]
    })

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
        res.render('gameshelves', { shelves, games, errors });
    }
}));

router.get('/edit', requireAuth, asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    // need to query for default shelves separately from custom shelves
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
        },
        order: [[
            "createdAt", "ASC"
        ]]
    })

    res.render('gameshelves-edit', { gameshelves, customShelves });
}));

router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
    const gameshelfId = parseInt(req.params.id, 10);
    const { userId } = req.session.auth;
    const gameshelf = await Gameshelf.findByPk(gameshelfId, {
        include: Game,
    })
    const games = await Game.findAll({
        include: Genre,
        order: [
            'name'
        ]
    });

    const shelves = await Gameshelf.findAll({
        where: { user_id: userId },
        // include: [{
        //     model: Game,
        //     order: ['name']
        // }]
        include: [{
            model: Game,
            include: Genre
        }],
        order: [
            [{model: Game}, 'name']
        ]
    })
    // const games = await Game.findAll({
    //     where: { gameshelfId: game_id }
    // })
    // console.log("these are our gameshelves" , gameshelf);
    // res.json({ gameshelf });
    // res.json(shelves);
    res.render('gameshelves-list', { shelves, gameshelf })
    // res.json({ gameshelf }); // amazing for seeing what you're working with
}));

module.exports = router;
