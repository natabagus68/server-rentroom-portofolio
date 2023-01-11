const { HotelRoom, HotelData } = require("../../models");

exports.getDataRoom = async (req, res, next) => {
  try {
    const data = await HotelRoom.findAll();
    if (data) {
      res.status(200).json({ data });
    } else {
      throw { msg: "not found" };
    }
  } catch (error) {
    next(error);
  }
};

exports.addRoom = async (req, res, next) => {
  try {
    const {
      classRoom,
      description,
      visitor,
      bed,
      wide,
      breakfast,
      wifi,
      smoke_area,
      price,
      HotelDataId,
    } = req.body;
    // chek apakah hotel id milik user
    const hotel = await HotelData.findOne({
      where: {
        id: HotelDataId,
        UserId: req.user.id,
      },
    });

    if (hotel) {
      const data = await HotelRoom.create({
        classRoom,
        description,
        visitor,
        bed,
        wide,
        breakfast,
        wifi,
        smoke_area,
        price,
        HotelDataId,
      });

      res.status(201).json({ message: "create hotel room success", data });
    } else {
      throw { msg: "id hotel is not yours" };
    }
  } catch (error) {
    next(error);
  }
};

exports.editHotelRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id, "id");
    const {
      classRoom,
      description,
      visitor,
      bed,
      wide,
      breakfast,
      wifi,
      smoke_area,
      price,
      HotelDataId,
    } = req.body;
    console.log(req.body);
    const data = await HotelRoom.update(
      {
        classRoom,
        description,
        visitor,
        bed,
        wide,
        breakfast,
        wifi,
        smoke_area,
        price,
        HotelDataId,
      },
      {
        where: { id },
      }
    );

    res.status(201).json({ message: "updated", data });
  } catch (error) {
    next(error);
  }
};

exports.deleteHotelRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const room = await HotelRoom.findByPk(id);
    if (room) {
      await HotelRoom.destroy({
        where: { id },
      });
      res.status(200).json("deleted");
    } else {
      throw { msg: "not found" };
    }
  } catch (error) {
    next(error);
  }
};

exports.getDataRoomById = async (req, res, next) => {
  try {
    const { id } = req.body;
    const data = await HotelRoom.findByPk(id);
    if (data) {
      res.status(200).json({ data });
    } else {
      throw { msg: "not found" };
    }
  } catch (error) {
    next(error);
  }
};
