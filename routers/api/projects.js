const express = require("express");
const router = express.Router();
const ProjectModel = require("../../models/project");
const commonUtils = require("../../utils/common");

router.get("/", async (req, res,next) => {
  try {
    let result = await ProjectModel.find({}).exec();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

function bodyToDocument(body){
  var _id = body.path;
  var name = body.name;
  var thumbnailUrl = body.thumbnailUrl;
  var shortDescription = body.shortDescription;
  var description = body.description;
  var youtubeEmbed = body.youtubeEmbed;
  var imgUrls = commonUtils.ensureArray(body.imgUrls);
  //------
  var linkLabels = commonUtils.ensureArray(body.linkLabel);
  var linksUrls = commonUtils.ensureArray(body.linkUrl);
  var namedElementLinkLabels = commonUtils.nameListElements(
    linkLabels,
    "label"
  );
  var namedElementLinksUrls = commonUtils.nameListElements(linksUrls, "url");
  var links = commonUtils.zipNamedElementLists([
    namedElementLinkLabels,
    namedElementLinksUrls
  ]);
  //------
  var contributorNames = commonUtils.ensureArray(body.contributorName);
  var contributorRoles = commonUtils.ensureArray(body.contributorRole);
  var namedElementContributorNames = commonUtils.nameListElements(
    contributorNames,
    "name"
  );
  var namedElementContributorRoles = commonUtils.nameListElements(
    contributorRoles,
    "role"
  );
  var contributors = commonUtils.zipNamedElementLists([
    namedElementContributorNames,
    namedElementContributorRoles
  ]);

  return {
    _id,
    name,
    thumbnailUrl,
    shortDescription,
    description,
    youtubeEmbed,
    imgUrls,
    links,
    contributors
  }
  ;
 
}
router.post("/", async (req, res,next) => {
  let newDocument = bodyToDocument(req.body);
  //------

  try {
    await new ProjectModel(newDocument).save();
    res.redirect("/projects/new");
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res,next) => {
  try {
    let updatedDocument = bodyToDocument(req.body);

    await ProjectModel.findByIdAndUpdate(req.params.id,updatedDocument).exec();
    res.redirect('/projects')
 
  }
  catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res,next) => {
  try {
    console.log('hit get')
    let result = await ProjectModel.findById(req.params.id).exec();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
