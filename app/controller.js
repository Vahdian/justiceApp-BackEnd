const registerController = require("./controllers/RegisterController");
const loginController = require("./controllers/LoginController");

async function test(req, res, next) {
  console.log("This is a test!");
  res.send({ response: "This is a test response" });
  next();
}

module.exports = { test, registerController, loginController };
