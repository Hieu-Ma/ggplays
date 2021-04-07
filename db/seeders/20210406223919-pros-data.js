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
    return queryInterface.bulkInsert('Pros', [
      { content: 'Amazing Visuals', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Great Storyline', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Smooth Gameplay', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Intuitive Controls', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Dynamic', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Strong Replayability', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Stunning Character Design', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Beautiful Soundtrack', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Multiplayer', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Dynamic Combat System', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Strong Replayability', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Relaxing', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Memorable Characters', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Open World', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Good balance of challenges and rewards', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Cross Platform', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Active Community', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Frequent Updates', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Active Developers', createdAt: new Date(), updatedAt: new Date() },
      { content: 'None', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Pros', null, {});
  }
};
