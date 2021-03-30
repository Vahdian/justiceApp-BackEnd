const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = function (req, res, next) {
  const token = req.header("authToken");
  if (!token) return res.status(401).send("Not today fool!");
  try {
    const verified = jwt.verify(token, config.token.secret);
    req.user = verified;
    next();
  } catch (err) {
    console.log("Nopi token");
  }
};
