var mongoose = require("mongoose");

module.exports = mongoose.model(
  "milestone",
  new mongoose.Schema(
      require("./commons.js"),{timestamps:true}
  )
);


