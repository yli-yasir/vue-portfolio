var mongoose = require("mongoose");

module.exports = mongoose.model(
  "news",
  new mongoose.Schema(
      //below here the fields specific to the news schema are defined.
      {
        name: String,
        description: String,
        date: Date 
      }
  )
);