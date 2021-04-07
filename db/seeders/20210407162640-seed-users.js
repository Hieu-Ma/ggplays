'use strict';

const bcrypt = require('bcryptjs')

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
    return queryInterface.bulkInsert('Users', [
      { username: "demo", email: "demo@gmail.com", hashed_password: bcrypt.hashSync('123', 10), createdAt: new Date(), updatedAt: new Date()},
      { username: "pingboy", email: "pingboy@gmail.com", hashed_password: bcrypt.hashSync('pingboy', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "liquidswear", email: "liquidswear@gmail.com", hashed_password: bcrypt.hashSync('liquidswear', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "dewick", email: "dewick@gmail.com", hashed_password: bcrypt.hashSync('dewick', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "cakecongolese", email: "cakecongolese@gmail.com", hashed_password: bcrypt.hashSync('cakecongolese', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "Jimmy", email: "Jimmy@gmail.com", hashed_password: bcrypt.hashSync('Jimmy', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "khinja", email: "khinja@gmail.com", hashed_password: bcrypt.hashSync('khinja', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "Justie", email: "Justie@gmail.com", hashed_password: bcrypt.hashSync('Justie', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "Josh", email: "Josh@gmail.com", hashed_password: bcrypt.hashSync('Josh', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "stashgorilla", email: "stashgorilla@gmail.com", hashed_password: bcrypt.hashSync('stashgorilla', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "hisrail", email: "hisrail@gmail.com", hashed_password: bcrypt.hashSync('hisrail', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "tiamo", email: "tiamo@gmail.com", hashed_password: bcrypt.hashSync('tiamo', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "ocelot", email: "ocelot@gmail.com", hashed_password: bcrypt.hashSync('ocelot', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "potatoe", email: "potatoe@gmail.com", hashed_password: bcrypt.hashSync('potatoe', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: "hotsprings", email: "hotsprings@gmail.com", hashed_password: bcrypt.hashSync('hotsprings', 10), createdAt: new Date(), updatedAt: new Date() },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
