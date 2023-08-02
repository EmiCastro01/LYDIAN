'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('productos', [{
       name: 'Bateria Alesis Nitro Mesh',
       price: 500000,
       type: 'Percusion',
       seller: 'Olmos Music',
       imageSrc: '/image/alesis-nitromesh.jpg',
       createdAt: new Date(),
       updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('productos', null, {});
  }
};
