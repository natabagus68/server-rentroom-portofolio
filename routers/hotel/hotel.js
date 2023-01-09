const router = require("express").Router();
const {
  getDataHotel,
  addNewHotel,
} = require("../../controllers/hotel/hotelData");
const { authentication } = require("../../middlewares/auth");

router.get("/", authentication, getDataHotel);
router.post("/", authentication, addNewHotel);
module.exports = router;
