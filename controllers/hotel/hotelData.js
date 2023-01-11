// const { verifyToken } = require("../../helpers/jsonwebtoken");
const { HotelData } = require("../../models");

exports.getDataHotel = async (req, res, next) => {
  try {
    const data = await HotelData.findAll();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.getDataHotelById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await HotelData.findByPk(id);
    if (data) {
      res.status(200).json({ data });
    } else {
      throw { msg: "not found" };
    }
  } catch (error) {
    next(error);
  }
};

exports.addNewHotel = async (req, res, next) => {
  try {
    const id = req.user.id;
    const { name, description, image, city, province } = req.body;
    const data = await HotelData.create({
      name,
      description,
      image,
      city,
      province,
      UserId: id,
    });
    res.status(201).json({ message: "create new hotel success", data });
  } catch (error) {
    next(error);
  }
};
