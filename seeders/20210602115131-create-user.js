'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      firstName: 'Alok',
      lastName: 'Laha',
      email: 'alok98@gmail.com',
      userMobile: '7980143133'
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
