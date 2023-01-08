"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        first_name: "nata",
        last_name: "bagus",
        age: 21,
        city: "kediri",
        province: "jawa timur",
        complete_address: "Ds.Sumbercangkring, Dsn.Sumberagung, Kec.Gurah",
        zipcode: 64181,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "nata bagus",
        last_name: "arisandi",
        age: 22,
        city: "kediri",
        province: "jawa timur",
        complete_address: "Ds.Sumbercangkring, Dsn.Sumberagung, Kec.Gurah",
        zipcode: 64181,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "desi fitria",
        last_name: "rismadani",
        age: 21,
        city: "kediri",
        province: "jawa timur",
        complete_address: "Ds.Gampeng, jl.Subru jamil, Kab.Kediri",
        zipcode: 78921,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("UserProfiles", data, {});
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
    await queryInterface.bulkDelete("UserProfiles", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
