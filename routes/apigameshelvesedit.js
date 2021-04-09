const express = require('express');
const router = express.Router();

const { Gameshelf, Game, User } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('./utils');

// rename
router.put('/', requireAuth, asyncHandler(async (req, res) => {
  // console.log('hello');
  const { newName, shelfId } = req.body;
  console.log(newName, shelfId);
  const customShelf = await Gameshelf.findByPk(shelfId);

  customShelf.title = newName;
  await customShelf.save();
  // await customShelf.update({ title: newName });

  res.json({ customShelf });
}))

router.delete('', requireAuth, asyncHandler(async (req, res) => {
  
}))

module.exports = router;