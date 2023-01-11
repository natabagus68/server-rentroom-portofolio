const router = require("express").Router();
const login = require("./login/login");
const regiter = require("./register/register");
const profile = require("./userProfile/userProfile");
const hotel = require("./hotel/hotel");
const bookmark = require("./bookmark/bookmark");
const like = require("./like/like");
const hotelroom = require("./hotelroom/hotelroom");
const order = require("./order/order");
router.use("/login", login);
router.use("/register", regiter);
router.use("/profiles", profile);
router.use("/hotels", hotel);
router.use("/bookmarks", bookmark);
router.use("/likes", like);
router.use("/hotelrooms", hotelroom);
router.use("/orders", order);
module.exports = router;
