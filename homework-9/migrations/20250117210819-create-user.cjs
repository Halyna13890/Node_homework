'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      email: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true,
          },
          password: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          mustChangePassword: {
              type: Sequelize.BOOLEAN,
              defaultValue: false,
          },
          role: {
              type: Sequelize.STRING,
              defaultValue: 'user', 
          },
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropAllTables('User')
  }
};
