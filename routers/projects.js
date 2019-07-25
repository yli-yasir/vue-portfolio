const express = require("express");
const router = express.Router();
const ProjectModel = require("../models/project");
const { nameToId,ensureArray } = require("../utils/commons");
const { restfulRouter } = require("../config/rest");

function validateDocument(req, res, next) {
  const document = {};
  const errors = {};

  //check for errors
  //todo should check if the name contains invalid url chars
  const name = req.body.name.trim();
  if (!name) {
    errors.nameError = "You must provide a name!";
  }

  let thumbnailUrl = req.body.thumbnailUrl;

  let description = req.body.description;

  let youtubeEmbed = req.body.youtubeEmbed;

  let imgUrls = req.body.imgUrls;

  let originDate = req.body.originDate;
  //------------

  //abort if there is an error
  if (Object.keys(errors).length !== 0) {
    return res.status(406).send(errors);
  }

  //processing

  //inject the fields into req.document while ignoring empty fields

  //These fields have a value because we checked previously
  document.name = name;
  document._id = nameToId(name);

  //these fields might not have a value so we have to check before storing them
  //it might be a string with only white space so we trim and then we check

  if (thumbnailUrl){
  thumbnailUrl = thumbnailUrl.trim();
  if (thumbnailUrl) {
    document.thumbnailUrl = thumbnailUrl;
  }
}

  if (description){
  description = description.trim();
  if (description) {
    document.description = description;
  }
  }

if (youtubeEmbed){
  youtubeEmbed = youtubeEmbed.trim();
  if (youtubeEmbed){
    document.youtubeEmbed = youtubeEmbed
  }
}

  //First we have to ensure that it's an array because this is what our DB expects
  if (imgUrls){
  imgUrls = ensureArray(imgUrls);
  //trim each element, if the element still has a truthy value then keep it.
  imgUrls = imgUrls.map(e=> e.trim()).filter(e=> Boolean(e))
  //if there are still items in the array then inject them into the document 
  if (imgUrls.length!==0){
    document.imgUrls = imgUrls;
  }
}

if (originDate){
  document.originDate = originDate;
}

  //and finally inject the document into the req object and pass control to the next route
  req.document = document;
  next()
}

module.exports = restfulRouter(router, ProjectModel, validateDocument);
