var mongoose = require("mongoose");

module.exports = mongoose.model(
  "project",
  new mongoose.Schema(
    Object.assign(
      //below here the fields specific to the project schema are defined.
      {
        _id: String,
        name: String,
        description: String,
        youtubeEmbed: String,
        imgUrls: [String],
        links: [new mongoose.Schema({ label: String, url: String })],
        contributers: [new mongoose.Schema({name: String, role: String})]
      },
      //and then we add the fields we have defined in the cardable interface
      require("./cardable.js")
    )
  )
);
