const { UserProfile } = require("../../models");
const { verifyToken } = require("../../helpers/jsonwebtoken");

exports.createProfile = async (req, res, next) => {
  try {
    console.log("create profile");
    const UserId = req.user.id;
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
      where: { UserId },
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
        UserId,
      });
      res.status(201).json({ message: "create profile success", data });
    } else {
      throw { name: "Already Exists" };
    }
  } catch (error) {
    console.log(error);
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
      throw { name: "Not Found" };
    }
  } catch (error) {
    next(error);
  }
};
