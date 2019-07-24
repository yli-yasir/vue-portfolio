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
  const name = req.body.title;
  if (!name) {errors.nameError = 'You must provide a name!'};

  const description = req.body.description;

  const thumbnailUrl = req.body.thumbnailUrl;
  //-------

  //if there was an error...
  if (Object.keys(errors).length!==0){
    return res.status(406).json(errors);
  }
  
  //processing (apply operations on data, and make sure we don't store any useless data)
  document.name = name.trim();
  document._id = nameToId(name);

  description= description.trim();
  if (description){document.description= description};

  thumbnailUrl = thumbnailUrl.trim();
  if (thumbnailUrl){document.thumbnailUrl= thumbnailUrl}

    req.document = document;
    next();
  }



module.exports = restfulRouter(router,MilestoneModel,validateDocument);