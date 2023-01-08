const { User } = require("../../models");

exports.registerUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // check email sudah ada atau belum
    const userEmail = await User.findOne({ where: { email } });

    if (userEmail) {
      throw { name: "already axists" };
    } else {
      const data = await User.create({
        email,
        password,
      });

      res.status(201).json({ message: "register success", data });
    }
  } catch (error) {
    next(error);
  }
};
