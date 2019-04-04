const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("projects");
});

//pass the id to the ejs view, which has it's own ajax script to grab the
//appropriate data

router.get("/:id", (req, res, next) => {

});

module.exports = router;
