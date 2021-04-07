'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Cons', [
      { content: 'Bad Graphics', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Uncultured Story-line', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Laggy', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Difficult Controls', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Too Simple', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'P2W', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Lack of Challenges', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Buggy', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Not intuitive', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Not Enough Content', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Grindy', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Snoozefest', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Unskippable Cutscenes', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Languages not Supported', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Lack of Satisfaction', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Locked FPS', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Lack of Engagement', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Toxic Community', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'Unreliable Servers', createdAt: new Date(), updatedAt: new Date(), },
      { content: 'None', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Cons', null, {});
  }
};
