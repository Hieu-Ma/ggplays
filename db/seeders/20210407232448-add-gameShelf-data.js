'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Gameshelves', [
        
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Gameshelves', null, {});

  }
};
