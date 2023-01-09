const { UserProfile } = require("../../models");
const { verifyToken } = require("../../helpers/jsonwebtoken");

exports.createProfile = async (req, res, next) => {
  try {
    const payload = verifyToken(req.headers.access_token);
    const {
      first_name,
      last_name,
      age,
      city,
      province,
      complete_address,
      zipcode,
    } = req.body;

    const profile = await UserProfile.findOne({
      where: { UserId: payload.id },
    });

    if (!profile) {
      const data = await UserProfile.create({
        first_name,
        last_name,
        age,
        city,
        province,
        complete_address,
        zipcode,
        UserId: payload.id,
      });
      res.status(201).json({ message: "create profile success", data });
    } else {
      throw { msg: "already exists profile" };
    }
  } catch (error) {
    next(error);
  }
};

exports.showProfile = async (req, res, next) => {
  try {
    const id = req.user.id;
    const data = await UserProfile.findOne({ where: { UserId: id } });
    if (data) {
      res.status(200).json({ data });
    } else {
      throw { msg: "not found" };
    }
  } catch (error) {
    next(error);
  }
};