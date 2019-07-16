var mongoose = require("mongoose");

module.exports = mongoose.model(
  "article",
  new mongoose.Schema(require("./commons.js"))
);
