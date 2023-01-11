const router = require("express").Router();
const { authentication } = require("../../middlewares/auth");
const {
  showOrder,
  showOrderById,
  createOrder,
  destroOrder,
} = require("../../controllers/order/order");

router.get("/", authentication, showOrder);
router.get("/:id", authentication, showOrderById);
router.delete("/:id", authentication, destroOrder);
router.post("/:HotelRoomId", authentication, createOrder);

module.exports = router;
