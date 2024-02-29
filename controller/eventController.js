const AsyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");

const addEvent = AsyncHandler(async (req, res) => {
  const { title, image, location, dated, time, category } = req.body;
  try {
    const addedEvent = await Event.create({
      title,
      image,
      location,
      dated,
      time,
      category,
    });
    res.send(addedEvent);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});
// get
const getEvents = AsyncHandler(async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

module.exports = {
  addEvent,
  getEvents,
};
