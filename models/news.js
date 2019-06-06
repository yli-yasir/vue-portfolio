var mongoose = require("mongoose");

module.exports = mongoose.model(
  "news",
  new mongoose.Schema(
      require("./commons.js"),{timestamps:true}
  )
);


