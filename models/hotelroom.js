"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HotelRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HotelRoom.belongsTo(models.HotelData, {
        foreignKey: "HotelDataId",
      });
      HotelRoom.hasMany(models.Order);
    }
  }
  HotelRoom.init(
    {
      classRoom: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: DataTypes.TEXT,
      visitor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      bed: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      wide: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      breakfast: DataTypes.BOOLEAN,
      wifi: DataTypes.BOOLEAN,
      smoke_area: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      HotelDataId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: "HotelRoom",
    }
  );
  HotelRoom.beforeCreate((room) => {
    room.breakfast = false;
    room.wifi = false;
    room.smoke_area = false;
  });
  HotelRoom.beforeUpdate((room) => {
    room.breakfast = false;
    room.wifi = false;
    room.smoke_area = false;
  });
  return HotelRoom;
};
