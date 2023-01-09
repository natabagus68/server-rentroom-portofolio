const { User } = require("../../models");
const { comparePassword } = require("../../helpers/bcrypt");
const { generateToken } = require("../../helpers/jsonwebtoken");

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      // compare password
      const compare = comparePassword(password, user.password);
      if (compare) {
        // generate token
        const payload = {
          id: user.id,
          email,
          role: user.role,
        };

        const access_token = generateToken(payload);
        res.status(200).json({
          message: "login success",
          access_token,
        });
      } else {
        throw {
          msg: "invalid password",
        };
      }
    } else {
      throw {
        msg: "invalid email",
      };
    }
  } catch (error) {
    next(error);
  }
};
