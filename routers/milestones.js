const express = require("express");
const router = express.Router();
const MilestoneModel = require("../models/milestone");
const {restfulRouter} = require("../config/rest");
const nameToId = require("../utils/commons").nameToId;

function validateDocument(req,res,next){

  const document = {};
  const errors = {};

  //VALIDATION
  //todo check for invalid url characters...
  let name = req.body.title.trim();
  if (!name) {errors.nameError = 'You must provide a name!'};

  let description = req.body.description;

  let thumbnailUrl = req.body.thumbnailUrl;

  let originDate = req.body.originDate;
  //-------

  //if there was an error...
  if (Object.keys(errors).length!==0){
    return res.status(406).json(errors);
  }
  
  //processing (apply operations on data, and make sure we don't store any useless data)
  document.name = name;
  document._id = nameToId(name);

  if (description){
  description= description.trim();
  if (description){document.description= description};
  }

  if (thumbnailUrl){
  thumbnailUrl = thumbnailUrl.trim();
  if (thumbnailUrl){document.thumbnailUrl= thumbnailUrl}
  }
  
  if (originDate){
    document.originDate = originDate;
  }
    req.document = document;
    next();
  }



module.exports = restfulRouter(router,MilestoneModel,validateDocument);