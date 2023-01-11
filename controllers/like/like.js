const { Like, User, HotelData } = require("../../models");
const { verifyToken } = require("../../helpers/jsonwebtoken");
exports.createLike = async (req, res, next) => {
  try {
    const UserId = req.user.id;
    const { HotelDataId } = req.params;

    // find hotel
    const hotel = await HotelData.findByPk(HotelDataId);

    if (hotel) {
      const like = await User.findOne({
        where: {
          id: UserId,
        },
        include: {
          model: HotelData,
          where: {
            id: HotelDataId,
          },
        },
      });

      if (like) {
        await Like.destroy({
          where: {
            UserId,
            HotelDataId,
          },
        });

        res.status(200).json({ message: "like deleted" });
      } else {
        const data = await Like.create({
          UserId,
          HotelDataId,
        });

        res.status(201).json({ message: "create like success", data });
      }
    } else {
      throw { msg: "not found" };
    }
  } catch (error) {
    next(error);
  }
};
