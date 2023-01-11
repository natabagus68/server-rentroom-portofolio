"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HotelRooms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      classRoom: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      visitor: {
        type: Sequelize.INTEGER,
      },
      bed: {
        type: Sequelize.STRING,
      },
      wide: {
        type: Sequelize.INTEGER,
      },
      breakfast: {
        type: Sequelize.BOOLEAN,
      },
      wifi: {
        type: Sequelize.BOOLEAN,
      },
      smoke_area: {
        type: Sequelize.BOOLEAN,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      HotelDataId: {
        type: Sequelize.INTEGER,
        references: {
          model: "HotelData",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("HotelRooms");
  },
};
