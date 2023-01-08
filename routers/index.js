const router = require("express").Router();
const login = require("./login/login");
const regiter = require("./register/register");
const profile = require("./userProfile/userProfile");
router.use("/login", login);
router.use("/register", regiter);
router.use("/profiles", profile);

module.exports = router;
