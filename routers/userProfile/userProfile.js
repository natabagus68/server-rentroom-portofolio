const router = require("express").Router();
const { createProfile } = require("../../controllers/userProfile/userProfile");
router.post("/", createProfile);

module.exports = router;
