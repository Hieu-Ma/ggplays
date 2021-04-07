'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      { type: 'FPS', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Action', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Sports', createdAt: new Date(), updatedAt: new Date() },
      { type: 'RPG', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Genres', null, {});

  }
};
