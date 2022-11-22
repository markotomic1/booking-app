const User = require("../models/User");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(201).json({ msg: "User has been created" });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User has not been found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "You entered the wrong password"));

    const { password, isAdmin, ...otherDetails } = user._doc;

    res.status(200).json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
