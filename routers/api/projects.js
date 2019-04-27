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

router.post("/", async (req, res) => {

}
);

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
