const router = require("express").Router();
const {
  createProfile,
  showProfile,
} = require("../../controllers/userProfile/userProfile");
const { authentication } = require("../../middlewares/auth");
router.get("/", authentication, showProfile);
router.post("/", authentication, createProfile);
module.exports = router;
