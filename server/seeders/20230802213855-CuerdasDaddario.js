'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('productos', [{
       name: 'Cuerdas Daddario',
       price: 3500,
       type: 'Accesorios',
       seller: 'Olmos Music',
       imageSrc: '/image/daddario.jpg',
       createdAt: new Date(),
       updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('productos', null, {});
  }
};
