var mongoose = require("mongoose");

module.exports = mongoose.model(
  "member",
  new mongoose.Schema(
    Object.assign(
      //below here the fields specific to the project schema are defined.
      {
        _id: String,
        description: String,
      },
      //and then we add the fields we have defined in the cardable interface
      require("./cardable.js")
    )
  )
);