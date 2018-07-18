'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('employees', [{
      npp: '05606',
      name: 'Eki Fakhrureza',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      npp: '00001',
      name: 'Steve Rogers',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  {
      npp: '00023',
      name: 'Michael Jordan',
      createdAt: new Date(),
      updatedAt: new Date(),
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Employees', [{
      npp: '00023'
  }],{});
  }
};