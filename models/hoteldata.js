"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HotelData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HotelData.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      address: DataTypes.TEXT,
      image: DataTypes.TEXT,
      UserId: DataTypes.INTEGER,
      city: DataTypes.STRING,
      province: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "HotelData",
    }
  );
  return HotelData;
};
