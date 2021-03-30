const routes = require("../routes");
const express = require("express");

function expressLoader(app) {
  app.use(express.json());
  app.use(routes);
  app.use(function (req, res) {
    res.status(404).json({ error: "Page not found!" });
  });
  app.use(function (err, req, res) {
    console.error(err);
    res.status(500).json({ error: err.message });
  });
}

module.exports = expressLoader;
