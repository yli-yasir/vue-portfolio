const express = require("express");
const router = express.Router();
const MemberModel = require("../models/member");
const {restfulRouter} = require("../config/rest")
const nameToId = require('../utils/commons').nameToId;

function bodyToDocument(body){
  const name = body.name.trim();
  const _id = nameToId(name);
  const thumbnailUrl = body.thumbnailUrl;
  const description = body.description;

  return {
    _id,
    name,
    thumbnailUrl,
    description,
  };
 
}

module.exports = restfulRouter(router,MemberModel,bodyToDocument);
 