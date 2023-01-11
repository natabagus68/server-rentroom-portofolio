const { Order, User, HotelRoom } = require("../../models");

exports.createOrder = async (req, res, next) => {
  try {
    const { HotelRoomId } = req.params;
    const UserId = req.user.id;
    const { amount } = req.body;

    const order = await Order.findOne({
      where: {
        UserId,
        HotelRoomId,
      },
    });

    if (!order) {
      const data = await Order.create({
        UserId,
        HotelRoomId,
        amount,
      });
    } else {
      throw { name: "Already Exists" };
    }
    res.status(201).json({ message: "order hotel room created" });
  } catch (error) {
    next(error);
  }
};

exports.showOrder = async (req, res, next) => {
  try {
    const UserId = req.user.id;
    const data = await Order.findAll({
      where: { UserId },
    });

    if (data) {
      res.status(200).json({ data });
    } else {
      throw { name: "Not Found" };
    }
  } catch (error) {
    next(error);
  }
};

exports.showOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const UserId = req.user.id;

    const data = await Order.findOne({
      where: {
        id,
        UserId,
      },
    });

    if (data) {
      res.status(200).json({ data });
    } else {
      throw { name: "Not Found" };
    }
  } catch (error) {
    next(error);
  }
};

exports.destroOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (order) {
      await Order.destroy({
        where: { id },
      });

      res.status(200).json({ message: "order deleted" });
    } else {
      throw { name: "Not Found" };
    }
  } catch (error) {
    next(error);
  }
};
