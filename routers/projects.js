const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index",{
    currentPath: "/projects",
    ajaxFrom: "/api/projects",
    ajaxCallbackName: "dataToCards"
  });
});

//pass the id to the ejs view, which has it's own ajax script to grab the
//appropriate data

router.get("/:id", (req, res, next) => {
  res.render("single",{
    currentPath: "/projects",
    ajaxFrom: "/api/projects/" + req.params.id,
    ajaxCallbackName: "dataToProject"
  })
});

module.exports = router;
