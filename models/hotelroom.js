'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HotelRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HotelRoom.init({
    class: DataTypes.STRING,
    description: DataTypes.TEXT,
    visitor: DataTypes.INTEGER,
    bed: DataTypes.STRING,
    wide: DataTypes.INTEGER,
    breakfast: DataTypes.BOOLEAN,
    wifi: DataTypes.BOOLEAN,
    smoke_area: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    HotelDataId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HotelRoom',
  });
  return HotelRoom;
};