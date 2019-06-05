var mongoose = require("mongoose");

module.exports = mongoose.model(
  "news",
  new mongoose.Schema(
    Object.assign(
        {
          date: Date 
        }
      ,
      //and then we add the fields we have defined in the cardable interface
      require("./commonFields.js")
    )
  )
);


