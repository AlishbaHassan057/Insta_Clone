const AsyncHandler = require("express-async-handler");
const Register = require("../models/RegisterModel");

const addRegister = AsyncHandler(async (req, res) => {
  const {
    username,
    email,
    title,
    event_acc,
    dated,
    number,
    location,
    duration,
  } = req.body;
  try {
    const addedRegister = await Register.create({
      username,
      email,
      title,
      event_acc,
      dated,
      number,
      location,
      duration,
    });
    res.send(addedRegister);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});
// get
const getRegister = AsyncHandler(async (req, res) => {
  try {
    const reg = await Register.find();
    res.send(reg);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

module.exports = {
  addRegister,
  getRegister,
};
