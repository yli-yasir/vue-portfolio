const express = require("express");
const router = express.Router();
const memberModel = require("../../models/member");

router.get("/", async (req, res) => {
  try {
    let result = await memberModel.find({}).exec();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/new", async (req, res) => {
  res.json(memberModel.schema.requiredPaths());
});

router.get("/:id", async (req, res) => {
  try{
  let result = await memberModel.findById(req.params.id).exec();
  res.json(result);
}
catch(error){
  next(error)
}
});

module.exports = router;