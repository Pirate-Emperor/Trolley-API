"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Inventories", [
      {
        product_name: "Laptop",
        product_quantity: 10,
        product_price: 10000000,
        product_category: "Electronics",
        product_description:
          "A laptop is a computer that is portable and suitable for use while traveling.",
        product_created_at: new Date(),
        product_updated_at: new Date(),
      },
      {
        product_name: "Smartphone",
        product_quantity: 20,
        product_price: 5000000,
        product_category: "Electronics",
        product_description:
          "A smartphone is a mobile device that combines cellular and mobile computing functions.",
        product_created_at: new Date(),
        product_updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Inventories", null, {});
  },
};
