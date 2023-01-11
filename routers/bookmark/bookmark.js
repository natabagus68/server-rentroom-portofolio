const router = require("express").Router();
const {
  showBookmark,
  addBookmark,
  destroyBookmark,
} = require("../../controllers/bookmark/bookmark");
const { authentication } = require("../../middlewares/auth");

router.get("/", authentication, showBookmark);
router.post("/:HotelDataId", authentication, addBookmark);
router.delete("/:id", authentication, destroyBookmark);

module.exports = router;
