const router = require("express").Router();
const {
  showBookmark,
  addBookmark,
} = require("../../controllers/bookmark/bookmark");
const { authentication } = require("../../middlewares/auth");

router.get("/", authentication, showBookmark);
router.get("/:HotelDataId", authentication, addBookmark);
module.exports = router;
