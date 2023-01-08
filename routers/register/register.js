const router = require("express").Router();
const { registerUser } = require("../../controllers/register/registerUser");

router.post("/", registerUser);
module.exports = router;
