const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  //"Salt Rounds" we want our future hashing to have
  const salt = await bcrypt.genSalt(10);
  //We hash the password and save it in a variable.
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  try {
    //Here we are trying to save the new user we want to register
    const newUser = new User();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = hashedPassword;

    const savedUser = await newUser.save();
    //With this we get the user id in the response.
    res.send({ user: savedUser._id });
    console.log("User saved correctly");
  } catch (err) {
    res.status(400).send(err);
    console.log("Total fail");
  }
}

module.exports = registerUser;
