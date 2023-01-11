const { verifyToken } = require("../helpers/jsonwebtoken");
const { User } = require("../models");

exports.authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (access_token) {
      const payload = verifyToken(access_token);
      const user = await User.findOne({ where: { id: payload.id } });
      if (user) {
        req.user = payload;
        next();
      } else throw { message: "invalid access_token", name: "Forbidden" };
    } else {
      throw { message: "login first", name: "Forbidden" };
    }
  } catch (error) {
    next(error);
  }
};

exports.authoritation = async (req, res, next) => {
  try {
    const role = req.user.role;
    if (role === "admin") next();
    else throw { name: "Forbidden", message: "only admin can add and update" };
  } catch (error) {
    next(error);
  }
};
