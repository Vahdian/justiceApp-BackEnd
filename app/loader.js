const expressLoader = require("./loaders/expressLoader");
const mongooseLoader = require("./loaders/mongooseLoader.js");

async function loader(app) {
  await mongooseLoader();
  console.info("Mongoose Ready!");
  expressLoader(app);
  console.info("Express is Ready!");
}

module.exports = loader;
