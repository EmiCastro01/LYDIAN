'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('productos', [{
       name: 'Guitarra Acustica Taylor',
       price: 35900,
       type: 'Accesorios',
       seller: 'Emi Castro',
       imageSrc: '/image/taylor-acoustic.jpg',
       createdAt: new Date(),
       updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('productos', null, {});
  }
};
