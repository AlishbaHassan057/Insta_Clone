const express = require("express");

const { addEvent, getEvents } = require("../controller/eventController");
const router = express.Router();

router.post("/add-event", addEvent);
router.get("/get-event", getEvents);

module.exports = router;
