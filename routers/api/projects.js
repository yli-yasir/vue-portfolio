const express = require("express");
const router = express.Router();
const projectModel = require("../../models/project");

router.get("/", async (req, res) => {
  try {
    let result = await projectModel.find({}).exec();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/new", async (req, res) => {
  res.json(projectModel.schema.requiredPaths());
});

router.get("/:id", async (req, res) => {
  try{
  let result = await projectModel.findById(req.params.id).exec();
  res.json(result);
}
catch(error){
  next(error)
}
});

module.exports = router;
