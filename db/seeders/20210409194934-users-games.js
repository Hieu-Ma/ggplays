'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Shelves', [
      { game_id: 6, game_shelf_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 10, game_shelf_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 13, game_shelf_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 21, game_shelf_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 26, game_shelf_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 10, game_shelf_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 1, game_shelf_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 4, game_shelf_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 5, game_shelf_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 12, game_shelf_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 16, game_shelf_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 21, game_shelf_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 32, game_shelf_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 6, game_shelf_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 31, game_shelf_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 7, game_shelf_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 14, game_shelf_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 16, game_shelf_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 20, game_shelf_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 21, game_shelf_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 26, game_shelf_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 1, game_shelf_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 26, game_shelf_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 7, game_shelf_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 16, game_shelf_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 18, game_shelf_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 19, game_shelf_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 30, game_shelf_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 3, game_shelf_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 13, game_shelf_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 22, game_shelf_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 5, game_shelf_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 6, game_shelf_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 18, game_shelf_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 19, game_shelf_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 20, game_shelf_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 27, game_shelf_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 32, game_shelf_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 3, game_shelf_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 4, game_shelf_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 11, game_shelf_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 22, game_shelf_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 27, game_shelf_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 19, game_shelf_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 30, game_shelf_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 22, game_shelf_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 27, game_shelf_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 33, game_shelf_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 2, game_shelf_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 3, game_shelf_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 8, game_shelf_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 11, game_shelf_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 17, game_shelf_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 1, game_shelf_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 9, game_shelf_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 11, game_shelf_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 24, game_shelf_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 28, game_shelf_id: 24, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 33, game_shelf_id: 24, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 9, game_shelf_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 12, game_shelf_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 24, game_shelf_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 28, game_shelf_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 5, game_shelf_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 14, game_shelf_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 9, game_shelf_id: 29, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 12, game_shelf_id: 29, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 24, game_shelf_id: 29, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 28, game_shelf_id: 29, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 31, game_shelf_id: 29, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 2, game_shelf_id: 30, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 20, game_shelf_id: 30, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 23, game_shelf_id: 30, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 8, game_shelf_id: 32, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 13, game_shelf_id: 32, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 29, game_shelf_id: 32, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 31, game_shelf_id: 32, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 5, game_shelf_id: 33, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 18, game_shelf_id: 33, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 25, game_shelf_id: 33, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 10, game_shelf_id: 35, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 13, game_shelf_id: 35, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 29, game_shelf_id: 35, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 17, game_shelf_id: 36, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 25, game_shelf_id: 36, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 4, game_shelf_id: 38, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 13, game_shelf_id: 38, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 29, game_shelf_id: 38, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 15, game_shelf_id: 39, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 25, game_shelf_id: 39, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 8, game_shelf_id: 41, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 13, game_shelf_id: 41, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 15, game_shelf_id: 42, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 32, game_shelf_id: 42, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 15, game_shelf_id: 44, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 30, game_shelf_id: 44, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 33, game_shelf_id: 44, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 2, game_shelf_id: 45, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 7, game_shelf_id: 45, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 14, game_shelf_id: 45, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 17, game_shelf_id: 45, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 23, game_shelf_id: 45, createdAt: new Date(), updatedAt: new Date() },
      { game_id: 23, game_shelf_id: 45, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Shelves', null, {});
  }
};
