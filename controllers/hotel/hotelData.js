const { verifyToken } = require("../../helpers/jsonwebtoken");
const { HotelData } = require("../../models");

exports.getDataHotel = async (req, res, next) => {
  try {
    const data = await HotelData.findAll();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.addNewHotel = async (req, res, next) => {
  try {
    const payload = verifyToken(req.headers.access_token);
    const { name, description, image, city, province } = req.body;
    const data = await HotelData.create({
      name,
      description,
      image,
      city,
      province,
      UserId: payload.id,
    });
    res.status(201).json({ message: "create new hotel success", data });
  } catch (error) {
    next(error);
  }
};
