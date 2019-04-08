var mongoose = require("mongoose");

module.exports = mongoose.model(
  "project",

  new mongoose.Schema({
    name: String,

    youtubeEmbed: String,
    thumbnailUrl: String,
    imagesUrl: Array,

    shortDescription: String,
    description: String,

    websiteUrl: String,
    downloadUrl: String
  })
  
);
