const router = require("express").Router();
const {
  addRoom,
  getDataRoom,
  editHotelRoom,
  deleteHotelRoom,
  getDataRoomById,
} = require("../../controllers/hotel/hotelroom");
const { authentication, authoritation } = require("../../middlewares/auth");

router.get("/", authentication, getDataRoom);
router.post("/", authentication, authoritation, addRoom);
router.get("/:id", authentication, getDataRoomById);
router.put("/:id", authentication, authoritation, editHotelRoom);
router.delete("/:id", authentication, authoritation, deleteHotelRoom);
module.exports = router;
