const router = require("express").Router();
const {
  createProfile,
  showProfile,
} = require("../../controllers/userProfile/userProfile");
const { authentication } = require("../../middlewares/auth");
router.post("/", authentication, createProfile);
router.get("/", authentication, showProfile);
module.exports = router;
