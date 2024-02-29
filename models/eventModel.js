const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    requried: true,
  },
  image: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  dated: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
