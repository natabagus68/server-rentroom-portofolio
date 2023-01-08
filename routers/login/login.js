const router = require("express").Router();
const { loginUser } = require("../../controllers/login/loginUser");
router.post("/", loginUser);

module.exports = router;
