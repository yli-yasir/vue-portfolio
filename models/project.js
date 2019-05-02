var mongoose = require("mongoose");

module.exports = mongoose.model(
  "project",
  new mongoose.Schema(
    Object.assign(
      //below here the fields specific to the project schema are defined.
      {
        _id: {type:String, required: true},
        description: {type:String, required: true},
        youtubeEmbed: String,
        imgUrls: {type:[String],required:true},
        links: [new mongoose.Schema({ label: String, url: String })],
        contributors: [new mongoose.Schema({name: String, role: String})]
      },
      //and then we add the fields we have defined in the cardable interface
      require("./cardable.js")
    )
  )
);
