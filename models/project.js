var mongoose = require('mongoose');

module.exports = mongoose.model("project",
  new mongoose.Schema({
    name: String,
    imgUrl: String,
    shortDescription: String
  }));
