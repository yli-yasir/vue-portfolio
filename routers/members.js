const express = require("express");
const router = express.Router();
const MemberModel = require("../models/member");
const restfulRouter = require("../utils/rest")

function bodyToDocument(body){
  var _id = body.path;
  var name = body.name;
  var thumbnailUrl = body.thumbnailUrl;
  var shortDescription = body.shortDescription;
  var description = body.description;

  return {
    _id,
    name,
    thumbnailUrl,
    shortDescription,
    description,
  };
 
}

module.exports = restfulRouter(router,MemberModel,bodyToDocument);
 