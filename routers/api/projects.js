const express = require("express");
const router = express.Router();
const projectModel = require("../../models/project");

router.get("/", async (req, res) => {
  try {
    let result = await projectModel.find({}).exec();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  try{
  let result = await projectModel.findById(req.params.id).exec();
  console.log(result);
  res.status(200).send(result);
}
catch(error){
  next(error)
}
});

module.exports = router;
