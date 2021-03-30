const express = require("express");
const controller = require("./controller");

const router = express.Router();

router.route("/register").post(controller.registerController);

router.route("/login").post(controller.loginController)


module.exports = router;
