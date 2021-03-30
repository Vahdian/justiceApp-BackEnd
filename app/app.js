const express = require("express");
const loader = require("./loader");
const config = require("./config");

function serverBootstraping() {
  const app = express();
  const server = app.listen(config.server.port);

  server.on("listening", function () {
    console.info(
      `The server is up and running on port: http://localhost:${config.server.port}`
    );
    loader(app);
  });
}

serverBootstraping();
