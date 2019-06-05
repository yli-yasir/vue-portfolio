var mongoose = require("mongoose");

module.exports = mongoose.model(
  "member",
  new mongoose.Schema(require("./commonFields.js"))
);
