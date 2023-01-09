const router = require("express").Router();
const { createProfile } = require("../../controllers/userProfile/userProfile");
const { authentication } = require("../../middlewares/auth");
router.post("/", authentication, createProfile);

module.exports = router;
