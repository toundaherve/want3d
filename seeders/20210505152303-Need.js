'use strict';
const faker = require("faker")

const needs = [...Array(200)].map(need => (
  {
    itemName: faker.commerce.productName(),
    itemCategory: faker.commerce.department(),
    itemDescription: faker.commerce.productDescription(),
    buyerBudget: faker.commerce.price(),
    buyerCurrency: "GBP",
    buyerName: faker.name.firstName(),
    buyerCountry: faker.address.country(),
    buyerCity: faker.address.city(),
    buyerEmail: faker.internet.email(),
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
   needs.forEach(need => {
    need.createdAt = Sequelize.literal("CURRENT_TIMESTAMP")
    need.updatedAt = Sequelize.literal("CURRENT_TIMESTAMP")
  })

    await queryInterface.bulkInsert('Needs', needs, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Needs', null, {});
  }
};
