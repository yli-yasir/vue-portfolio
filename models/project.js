var mongoose = require("mongoose");

module.exports = mongoose.model(
  "project",
  new mongoose.Schema(
    Object.assign(
      //below here the fields specific to the project schema are defined.
      {
        youtubeEmbed: String,
        imgUrls: {type:[String],required:true},
        contributors: [new mongoose.Schema({name: String, role: String})]
      },
      //and then we add the fields we have defined in the cardable interface
      require("./commonFields.js")
    )
  )
);
