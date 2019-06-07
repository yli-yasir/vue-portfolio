const express = require("express");
const router = express.Router();
const ProjectModel = require("../models/project");
const commonUtils = require("../utils/commons");
const restfulRouter = require("../config/rest");

function bodyToDocument(body){
  const name = body.name;
  const _id = commonUtils.nameToId(name)
  const thumbnailUrl = body.thumbnailUrl;
  const description = body.description;
  const youtubeEmbed = body.youtubeEmbed;
  const imgUrls = commonUtils.ensureArray(body.imgUrls);
  //------

  var contributorNames = commonUtils.ensureArray(body.contributorNames);
  var contributorRoles = commonUtils.ensureArray(body.contributorRoles);

  contributorNames.elementName = 'name';
  contributorRoles.elementName = 'role';

  const contributors = commonUtils.listsToObjects(
    contributorNames,
    contributorRoles
  );

  return {
    _id,
    name,
    thumbnailUrl,
    description,
    youtubeEmbed,
    imgUrls,
    contributors
  };
 
}

module.exports = restfulRouter(router,ProjectModel,bodyToDocument);
