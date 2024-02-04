const AsyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const registerUser = AsyncHandler(async (req, res) => {
    const { f_name, l_name, p_mail, password, date, month, year, gender } = req.body;
    if (!f_name || !l_name || !p_mail || !password || !date || !month || !year || !gender) {
        throw new Error('Please enter all the relevant fields')
    };
    const checkUser = await User.findOne({ p_mail })
    if (checkUser) {
        throw new Error('This User already Exists!')
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(password, salt)
        const newUser = await User.create({
            f_name, l_name, p_mail, password: hashedpass, date, month, year, gender

        })
        res.json(newUser)
    }
});

module.exports = {
    registerUser
};
