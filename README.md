# Welcome to ggPlays
ggPlays is a web application that allows users to view various video games, publish game reviews, and catalog games into game shelves that can be customized. This was inspired by [Goodreads](https://www.goodreads.com/), a website where individuals can search for books, create reviews, catalog books into libraries, discuss all things books, and more.
#### Live link: [ggPlays](https://ggplays.herokuapp.com/)

***

### Index
[Technologies](#technologies)
[Key Features](#key-features)
[Code Snippets](#code-snippets)
[Wiki Pages](#wiki-pages)
[Stretch Goals](#stretch-goals)

***

### Technologies
#### Front End
- JavaScript
- HTML rendered through Pug templating
- CSS styling
- [Favicon.io](https://favicon.io/) for favicon
- Hosted on Heroku

#### Back End
- Built with Express.js
- Uses a PostgreSQL Database
- Sequelize.js
- AJAX
- Express Validator Library
- CSURF Library

***

### Key Features
- Uses bcryptjs library to secure authentication
- Grants logged in users access to create reviews, store games, and view their profile
- Uses AJAX to asynchronously render elements like renaming or deleting a game shelf
- Prevents csrf attacks and uses validation forms to authenticate users

***

### Code Snippets

````javascript
const shelves = await Gameshelf.findAll({
    where: { user_id: userId },
    include: [{
        model: Game,
        include: Genre
    }],
    order: [
        [{model: Game}, 'name']
    ]
})
````

````javascript
router.put('/', requireAuth, asyncHandler(async (req, res) => {
  const { newName, shelfId } = req.body;

  const customShelf = await Gameshelf.findByPk(shelfId);

  customShelf.title = newName;
  await customShelf.save();
  // await customShelf.update({ title: newName }); || same as two lines above

  res.json({ customShelf });
}))
````

````javascript
// delete Gameshelf and any associated 'shelves' (games in the shelf)
router.delete('/delete', requireAuth, asyncHandler(async (req, res) => {

  const { shelfId } = req.body;
  const deleteGameshelf = await Gameshelf.findByPk(shelfId)

  await deleteGameshelf.destroy();

  res.status(204).end();
}))
````

### Wiki Pages
#### [API Documentation](https://github.com/Hieu-Ma/ggplays/wiki/API-Documentation)
#### [Database Schema](https://github.com/Hieu-Ma/ggplays/wiki/Database-Schema)
<img src="https://i.ibb.co/wNBRLY7/gg-Plays-Schema-2.png" alt="gg-Plays-Schema-2">
#### [Feature List](https://github.com/Hieu-Ma/ggplays/wiki/Feature-List)
#### [Frontend Routes](https://github.com/Hieu-Ma/ggplays/wiki/Frontend-Routes)
#### [User Stories](https://github.com/Hieu-Ma/ggplays/wiki/User-Stories)

***

### Stretch Goals
- Search feature
- Delete game(s) from a game shelf
- Reputation score for reviewers
