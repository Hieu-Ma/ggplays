const express = require('express');
const router = express.Router();

const { Gameshelf, Shelf } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('./utils');

// rename
router.put('/', requireAuth, asyncHandler(async (req, res) => {
  const { newName, shelfId } = req.body;

  const customShelf = await Gameshelf.findByPk(shelfId);

  customShelf.title = newName;
  await customShelf.save();
  // await customShelf.update({ title: newName }); || same as two lines above

  res.json({ customShelf });
}))

// delete Gameshelf and any associated 'shelves' (games in the shelf)
router.delete('/delete', requireAuth, asyncHandler(async (req, res) => {

  const { shelfId } = req.body;
  const deleteGameshelf = await Gameshelf.findByPk(shelfId)

  await deleteGameshelf.destroy();

  res.status(204).end();
}))

module.exports = router;