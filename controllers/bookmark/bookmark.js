const { Bookmark, User, HotelData } = require("../../models");
exports.showBookmark = async (req, res, next) => {
  try {
    const id = req.user.id;
    const data = await Bookmark.findAll({
      where: {
        UserId: id,
      },
      include: [User, HotelData],
    });

    if (data) {
      res.status(200).json({ data });
    }
  } catch (error) {
    next(error);
  }
};

exports.addBookmark = async (req, res, next) => {
  try {
    const UserId = req.user.id;
    const { HotelDataId } = req.params;

    const data = await Bookmark.create({
      UserId,
      HotelDataId,
    });

    res.status(201).json({
      message: "create bookmark success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
