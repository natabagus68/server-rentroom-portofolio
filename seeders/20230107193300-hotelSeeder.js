"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        name: "oyo coupis",
        description: "Hotel murah dengan kualitas terbaik di pare",
        address: "Kab.Kediri, Kec.Pare, Ds.Pelem",
        city: "pare",
        province: "jawa timur",
        image:
          "https://images.oyoroomscdn.com/uploads/hotel_image/97461/large/e25d2ca16df297de.jpg",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mitrain",
        description: "Hotel murah dengan kualitas terbaik di Kota Kediri",
        address: "Kota Kediri, Semampir",
        city: "kediri",
        province: "jawa timur",
        image:
          "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/7eeac377-057b-4550-b49c-b8e007294e22-1604122007580-94c6d58d6e144b4f5fb992a04a32b50c.jpg",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "oyo forest'in",
        description: "Hotel murah dengan kualitas terbaik di Kota Kediri",
        address: "Kota Kediri, Semampir",
        city: "kediri",
        province: "jawa timur",
        image:
          "https://images.oyoroomscdn.com/uploads/hotel_image/100022/7cdc090f4acccb40.JPG",
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("HotelData", data, {});
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
    await queryInterface.bulkDelete("HotelData", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
