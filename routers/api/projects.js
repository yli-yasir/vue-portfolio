const express = require("express");
const router = express.Router();
const ProjectModel = require("../../models/project");


router.get("/", async (req, res) => {
  try {
    let result = await ProjectModel.find({}).exec();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  try{
    let body = req.body; 
    await new ProjectModel({
    _id: body.path,
    title: body.name,
    thumbnailUrl: body.thumbnailUrl,
    shortDescription: body.shortDescription,
    description: body.description,
    youtubeEmbed: body.youtubeEmbedUrl,
    imgUrls: body.imgUrls,
    links: [{label:"android",url:"https://www.android.com/"},{label:"ios",url:"https://www.apple.com/"}],
    contributers: [{name: 'mike', role: 'artist'},{name: 'sky', role: 'developer'}]})
  }
  res.redirect('/projects/new');
}
);



router.get("/:id", async (req, res) => {
  try{
  let result = await ProjectModel.findById(req.params.id).exec();
  res.json(result);
}
catch(error){
  next(error)
}
});


module.exports = router;
