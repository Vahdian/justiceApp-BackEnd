const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

async function loginUser(req, res, next) {
  //Checking if the email is already registered (Envias un mensaje general para no dar pistas a hackers)
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or Password is wrong");
  //Checking if password is correct:
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password A.K.A nanai");
  //Creating and assigning token:
  const token = jwt.sign({ _id: user._id }, config.token.secret);
  res.header("AuthToken", token).send(token);
  res.send("Logged In!");
}

module.exports = loginUser;
