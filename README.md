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
- Adobe XD
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
#### Query for all shelves in a Gameshelf that belongs to a specific user with constraints.

Found all gameshelves associated with the logged-in user. `Gameshelf` includes the model `Game`, `Game` includes the model `Genre`.

Then ordered the games queried by name/alphabetical order.

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

##### Api Route to find a shelf by its ID and dynamically change its name on the current page
Each shelf has a corresponding ID, input value that we retrieved from req.body

Queried for the Gameshelf with the `shelfId` the we retrieved from req.body

Set the title property of the shelf we queried for to the `newName` (the value from req.body)
````javascript
router.put('/', requireAuth, asyncHandler(async (req, res) => {
  const { newName, shelfId } = req.body;

  const customShelf = await Gameshelf.findByPk(shelfId);

  customShelf.title = newName;
  await customShelf.save();

  res.json({ customShelf });
}))
````

##### Api Route to find a shelf by its ID and dynamically delete it on the current page, as well as delete all the associated games that belong to that shelf

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
<img src="https://i.ibb.co/wNBRLY7/gg-Plays-Schema-2.png" alt="gg-Plays-Schema-2" height="300">

#### [Feature List](https://github.com/Hieu-Ma/ggplays/wiki/Feature-List)
#### [Frontend Routes](https://github.com/Hieu-Ma/ggplays/wiki/Frontend-Routes)
#### [User Stories](https://github.com/Hieu-Ma/ggplays/wiki/User-Stories)

***

### Stretch Goals
- Search feature
- Delete game(s) from a game shelf
- Reputation score for reviewers
