# ggPlays

### Live link: [ggPlays](https://ggplays.herokuapp.com/)
ggPlays is a web application that allows users to view various video games, publish game reviews, and catalog games into game shelves that can be customized. This was inspired by [Goodreads](https://www.goodreads.com/), a website where individuals can search for books, create reviews, catalog books into libraries, discuss all things books, and more. 

## Technologies
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

## [Features](https://github.com/Hieu-Ma/ggplays/wiki/Feature-List)
- Uses bcryptjs library to secure authentication
- Grants logged in users access to create reviews, store games, and view their profile
- Uses AJAX to asynchronously render elements like renaming or deleting a game shelf
- Prevents csrf attacks and uses validation forms to authenticate users

## [Database Schema](https://github.com/Hieu-Ma/ggplays/wiki/Database-Schema)
<img src="https://i.ibb.co/wNBRLY7/gg-Plays-Schema-2.png" alt="gg-Plays-Schema-2">

## [Frontend routes](https://github.com/Hieu-Ma/ggplays/wiki/Frontend-Routes)

## [API routes](https://github.com/Hieu-Ma/ggplays/wiki/API-Documentation)

## Stretch Goals
- Search feature
- Delete game(s) from a game shelf
- Reputation score for reviewers
