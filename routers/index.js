const router = require("express").Router();
const login = require("./login/login");
const regiter = require("./register/register");
router.use("/login", login);
router.use("/register", regiter);
module.exports = router;
