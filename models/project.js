var mongoose = require("mongoose");

module.exports = mongoose.model(
  "project",
  new mongoose.Schema({
      //below here the fields specific to the project schema are defined.
        youtubeEmbed: String,
        imgUrls: [String], 
      //and then we add the fields we have defined in the commons interface
      ...require("./commons.js")},{timestamps: true}
    )
  );

