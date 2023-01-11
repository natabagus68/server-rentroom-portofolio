const { Bookmark, User, HotelData } = require("../../models");
exports.showBookmark = async (req, res, next) => {
  try {
    const id = req.user.id;
    const data = await Bookmark.findAll({
      where: {
        UserId: id,
      },
      include: ["user", "hoteldata"],
    });

    if (data) {
      res.status(200).json({ data });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.addBookmark = async (req, res, next) => {
  try {
    const UserId = req.user.id;
    const { HotelDataId } = req.params;

    const [data, created] = await Bookmark.findOrCreate({
      where: { UserId, HotelDataId },
      defaults: {
        UserId,
        HotelDataId,
      },
    });

    if (created) {
      res.status(201).json({
        message: "create bookmark success",
        data,
      });
    } else {
      throw {
        msg: "already axists",
      };
    }
  } catch (error) {
    next(error);
  }
};

exports.destroyBookmark = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookmark = await Bookmark.findByPk(id);

    if (bookmark) {
      await Bookmark.destroy({
        where: { id },
      });
      res.status(200).json({ message: "deleted" });
    } else {
      throw { msg: "not found" };
    }
  } catch (error) {
    next(error);
  }
};
