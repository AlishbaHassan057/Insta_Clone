const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  username: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  dated: {
    type: String,
    required: true,
  },
  event_acc: {
    type: String,
    enum: ["private", "public"],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Register", registerSchema);
