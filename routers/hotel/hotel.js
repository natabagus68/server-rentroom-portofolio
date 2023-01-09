const router = require("express").Router();
const {
  getDataHotel,
  addNewHotel,
} = require("../../controllers/hotel/hotelData");
const { authentication, authoritation } = require("../../middlewares/auth");

router.get("/", authentication, getDataHotel);
router.post("/", authentication, authoritation, addNewHotel);
module.exports = router;
