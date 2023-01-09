const router = require("express").Router();
const {
  getDataHotel,
  addNewHotel,
  getDataHotelById,
} = require("../../controllers/hotel/hotelData");
const { authentication, authoritation } = require("../../middlewares/auth");

router.get("/", authentication, getDataHotel);
router.post("/", authentication, authoritation, addNewHotel);
router.get("/:id", authentication, getDataHotelById);
module.exports = router;
