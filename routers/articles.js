const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/article");
const {restfulRouter} = require("../config/rest")
const nameToId = require('../utils/commons').nameToId;

function validateDocument(req,res,next){

  const document = {};
  const errors = {};

  //check for errors
  //todo should ensure the name doesn't contain characters unsafe for urls
  let name = req.body.name.trim();
  if (!name) {errors.nameError= "You must provide a name!"}

  let thumbnailUrl = req.body.thumbnailUrl;

  let description = req.body.description;

  let originDate = req.body.originDate;

  if(Object.keys(errors).length!==0){
    return res.status(406).json(errors);
  }
  //---------------------------

  //processing (make sure we don't store any empty values and apply operations)
  
  //following fields exist because we have checked for them previously
  document.name = name;
  document._id = nameToId(name);

  //trim first because we might have a string full of white spaces
  if (thumbnailUrl){
  thumbnailUrl = thumbnailUrl.trim();
  if (thumbnailUrl){document.thumbnailUrl= thumbnailUrl}
  }

  if (description){
  description = description.trim();
  if (description){document.description= description}
  }
  
  if (originDate){
    document.originDate = originDate;
  }
  req.document = document;
  next();
}

module.exports = restfulRouter(router,ArticleModel,validateDocument);
 