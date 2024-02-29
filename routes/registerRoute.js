const express = require("express");

const {
  addRegister,
  getRegister,
} = require("../controller/registerController");
const router = express.Router();

router.post("/add-register", addRegister);
router.get("/get-register", getRegister);

module.exports = router;
