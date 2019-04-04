const express = require("express");
const router = express.Router();
const projectModel = require("../../models/project");

router.get("/", (req, res) => {
  projectModel.find({}, (error, projects) => {
    if (error) {
      next(error);
    } else {
      res.json(projects);
    }
  });
});

module.exports = router;
