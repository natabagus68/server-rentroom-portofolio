"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        classRoom: "Regular",
        description: "kamar mandi dalam",
        bed: "single",
        wide: 16,
        breakfast: true,
        wifi: true,
        smoke_area: false,
        price: 130000,
        HotelDataId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classRoom: "Regular",
        description: "kamar mandi dalam",
        bed: "doble",
        wide: 16,
        breakfast: false,
        wifi: true,
        smoke_area: false,
        price: 137000,
        HotelDataId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classRoom: "Delux",
        description: "kamar mandi dalam",
        bed: "single",
        wide: 18,
        breakfast: true,
        wifi: true,
        smoke_area: false,
        price: 130000,
        HotelDataId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classRoom: "Regular",
        description: "kamar mandi dalam",
        bed: "single",
        wide: 16,
        breakfast: true,
        wifi: true,
        smoke_area: false,
        price: 90000,
        HotelDataId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classRoom: "Delux",
        description: "kamar mandi dalam",
        bed: "single",
        wide: 18,
        breakfast: false,
        wifi: true,
        smoke_area: false,
        price: 100000,
        HotelDataId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classRoom: "Super Delux",
        description: "kamar mandi dalam",
        bed: "single",
        wide: 20,
        breakfast: true,
        wifi: true,
        smoke_area: false,
        price: 300000,
        HotelDataId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("HotelRooms", data, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("HotelRooms", null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
