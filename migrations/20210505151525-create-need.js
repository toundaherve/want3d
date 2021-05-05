'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Needs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemName: {
        type: Sequelize.STRING
      },
      itemCategory: {
        type: Sequelize.STRING
      },
      itemDescription: {
        type: Sequelize.TEXT
      },
      buyerBudget: {
        type: Sequelize.DOUBLE
      },
      buyerCurrency: {
        type: Sequelize.STRING
      },
      buyerName: {
        type: Sequelize.STRING
      },
      buyerCountry: {
        type: Sequelize.STRING
      },
      buyerCity: {
        type: Sequelize.STRING
      },
      buyerEmail: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Needs');
  }
};