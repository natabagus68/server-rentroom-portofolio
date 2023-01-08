const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routers");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(process.env.PORT || 8000, () => {
  console.log("server running on PORT", 8000);
});
