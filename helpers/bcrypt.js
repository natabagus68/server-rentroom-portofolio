const bcryptjs = require("bcryptjs");

exports.encryptPassword = (plainPassword) => {
  return bcryptjs.hashSync(plainPassword, 8);
};

exports.comparePassword = (plainPassword, encrypt) => {
  return bcryptjs.compareSync(plainPassword, encrypt);
};
