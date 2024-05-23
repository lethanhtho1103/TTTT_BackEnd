const auth = require("./auth");
const category = require("./category");

function route(app) {
  app.use("/api/authentication", auth);
  app.use("/api/category", category);
}

module.exports = route;
