const router = require("express").Router();
const { authentication } = require("../../middlewares/auth");
const { createLike } = require("../../controllers/like/like");
router.post("/:HotelDataId", authentication, createLike);
module.exports = router;
