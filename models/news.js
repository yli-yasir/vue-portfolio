var mongoose = require("mongoose");

module.exports = mongoose.model(
  "news",
  new mongoose.Schema(
      //below here the fields specific to the news schema are defined.
      {
        _id: String,
        title: String,
        description: String,
        links: [new mongoose.Schema({ label: String, url: String })],
        date: String 
      }
  )
);