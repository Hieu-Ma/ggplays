'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Gameshelves', [
        { title: "Want to Play", user_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 3, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 3, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 4, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 4, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 4, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 5, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 5, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 5, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 6, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 6, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 6, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 7, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 7, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 7, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 8, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 8, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 8, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 9, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 9, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 9, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 10, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 10, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 10, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 11, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 11, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 11, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 12, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 12, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 12, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 13, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 13, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 13, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 14, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 14, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 14, createdAt: new Date(), updatedAt: new Date() },
        { title: "Want to Play", user_id: 15, createdAt: new Date(), updatedAt: new Date() },
        { title: "Currently Playing", user_id: 15, createdAt: new Date(), updatedAt: new Date() },
        { title: "Played", user_id: 15, createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Gameshelves', null, {});

  }
};
